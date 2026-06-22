import { useEffect, useRef, useState } from 'react'

/**
 * Animates a number from 0 -> target the first time it scrolls into view.
 * Returns { ref, value } — attach ref to the element you want observed.
 */
export default function useCountUp(target, { duration = 1600, decimals = 0 } = {}) {
  const ref = useRef(null)
  const [value, setValue] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setValue(target)
      return
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true
            const start = performance.now()
            const tick = (now) => {
              const p = Math.min(1, (now - start) / duration)
              // easeOutExpo
              const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p)
              const next = target * eased
              setValue(decimals ? Number(next.toFixed(decimals)) : Math.round(next))
              if (p < 1) requestAnimationFrame(tick)
            }
            requestAnimationFrame(tick)
          }
        })
      },
      { threshold: 0.4 }
    )
    obs.observe(node)
    return () => obs.disconnect()
  }, [target, duration, decimals])

  return { ref, value }
}

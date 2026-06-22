import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

/**
 * A button/link that subtly leans toward the cursor — premium hover feel.
 * Disabled automatically on touch + reduced-motion.
 */
export default function MagneticButton({
  children,
  href,
  variant = 'gold',
  className = '',
  ...rest
}) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 250, damping: 18 })
  const sy = useSpring(y, { stiffness: 250, damping: 18 })

  const onMove = (e) => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const r = el.getBoundingClientRect()
    const mx = e.clientX - (r.left + r.width / 2)
    const my = e.clientY - (r.top + r.height / 2)
    x.set(mx * 0.28)
    y.set(my * 0.28)
  }
  const reset = () => {
    x.set(0)
    y.set(0)
  }

  const base =
    'group relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-tight transition-colors duration-300 will-change-transform'
  const styles = {
    gold: 'bg-gold text-navy-950 hover:bg-gold-soft shadow-gold',
    ghost:
      'border border-white/20 text-white hover:border-gold/70 hover:text-gold-soft',
    dark: 'bg-navy-900 text-white hover:bg-navy-800',
  }

  const Comp = motion[href ? 'a' : 'button']

  return (
    <Comp
      ref={ref}
      href={href}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      className={`${base} ${styles[variant]} ${className}`}
      {...rest}
    >
      {children}
    </Comp>
  )
}

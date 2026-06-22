import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import gsap from 'gsap'

/* small count-up that runs on mount */
function useMountCount(target, { duration = 1.8, delay = 0.6, decimals = 0 } = {}) {
  const [v, setV] = useState(0)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setV(target)
      return
    }
    const obj = { n: 0 }
    const tween = gsap.to(obj, {
      n: target,
      duration,
      delay,
      ease: 'expo.out',
      onUpdate: () => setV(decimals ? Number(obj.n.toFixed(decimals)) : Math.round(obj.n)),
    })
    return () => tween.kill()
  }, [target, duration, delay, decimals])
  return v
}

export default function FinancialConsole() {
  const wrapRef = useRef(null)
  const lineRef = useRef(null)
  const ringRef = useRef(null)

  // pointer-driven 3D tilt
  const px = useMotionValue(0)
  const py = useMotionValue(0)
  const rotX = useSpring(useTransform(py, [-0.5, 0.5], [8, -8]), { stiffness: 120, damping: 16 })
  const rotY = useSpring(useTransform(px, [-0.5, 0.5], [-10, 10]), { stiffness: 120, damping: 16 })

  const onMove = (e) => {
    const el = wrapRef.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const r = el.getBoundingClientRect()
    px.set((e.clientX - r.left) / r.width - 0.5)
    py.set((e.clientY - r.top) / r.height - 0.5)
  }
  const onLeave = () => {
    px.set(0)
    py.set(0)
  }

  const revenue = useMountCount(248, { decimals: 0 })
  const compliance = useMountCount(99, { delay: 0.9 })
  const returns = useMountCount(1000, { delay: 0.8 })

  // draw the chart line + ring on mount
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = gsap.context(() => {
      if (lineRef.current) {
        const len = lineRef.current.getTotalLength()
        gsap.set(lineRef.current, { strokeDasharray: len, strokeDashoffset: len })
        gsap.to(lineRef.current, {
          strokeDashoffset: 0,
          duration: 1.8,
          delay: 0.5,
          ease: 'power2.out',
        })
      }
      if (ringRef.current) {
        const len = ringRef.current.getTotalLength()
        gsap.set(ringRef.current, { strokeDasharray: len, strokeDashoffset: len })
        gsap.to(ringRef.current, {
          strokeDashoffset: len * (1 - 0.99),
          duration: 1.9,
          delay: 0.9,
          ease: 'power2.out',
        })
      }
    })
    return () => ctx.revert()
  }, [])

  // chart geometry
  const pts = [12, 34, 26, 52, 44, 70, 60, 96, 120]
  const W = 320
  const H = 120
  const stepX = W / (pts.length - 1)
  const max = 130
  const coords = pts.map((p, i) => [i * stepX, H - (p / max) * H])
  const linePath = coords.map(([x, y], i) => `${i ? 'L' : 'M'}${x},${y}`).join(' ')
  const areaPath = `${linePath} L${W},${H} L0,${H} Z`
  const last = coords[coords.length - 1]

  return (
    <motion.div
      ref={wrapRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ perspective: 1200 }}
      className="relative w-full max-w-[460px]"
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
    >
      {/* gold glow behind */}
      <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gold/10 blur-3xl" />

      <motion.div
        style={{ rotateX: rotX, rotateY: rotY, transformStyle: 'preserve-3d' }}
        className="glass relative overflow-hidden rounded-[1.6rem] p-5 shadow-console animate-floaty"
      >
        {/* shimmer sweep */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[1.6rem]">
          <div className="absolute top-0 h-full w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />
        </div>

        {/* header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="grid h-8 w-8 place-items-center rounded-lg bg-gold/15 text-gold-soft">
              <span className="serif-accent text-base not-italic">A</span>
            </div>
            <div className="leading-tight">
              <p className="text-[0.78rem] font-semibold text-white">Financial Console</p>
              <p className="text-[0.62rem] uppercase tracking-[0.2em] text-white/40">
                A I Modi &amp; Co
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulseDot" />
            <span className="text-[0.6rem] font-medium uppercase tracking-wider text-emerald-300">
              Synced
            </span>
          </div>
        </div>

        {/* growth chart */}
        <div className="mt-5 rounded-2xl border border-white/5 bg-navy-950/40 p-4">
          <div className="mb-2 flex items-end justify-between">
            <div>
              <p className="text-[0.62rem] uppercase tracking-[0.18em] text-white/40">
                Business growth
              </p>
              <p className="data mt-0.5 text-xl font-semibold text-white">
                ₹{revenue}<span className="text-white/50">.0L</span>
              </p>
            </div>
            <span className="data rounded-md bg-gold/15 px-2 py-1 text-[0.62rem] font-medium text-gold-soft">
              ▲ 18.4% YoY
            </span>
          </div>

          <svg viewBox={`0 0 ${W} ${H}`} className="h-[120px] w-full overflow-visible">
            <defs>
              <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.32" />
                <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="stroke" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#E7CC74" />
                <stop offset="100%" stopColor="#D4AF37" />
              </linearGradient>
            </defs>
            <motion.path
              d={areaPath}
              fill="url(#area)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            />
            <path
              ref={lineRef}
              d={linePath}
              fill="none"
              stroke="url(#stroke)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <motion.circle
              cx={last[0]}
              cy={last[1]}
              r="4.5"
              fill="#E7CC74"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 2.1, type: 'spring', stiffness: 300 }}
            />
            <circle cx={last[0]} cy={last[1]} r="4.5" fill="none" stroke="#E7CC74" strokeWidth="1.5">
              <animate attributeName="r" from="4.5" to="13" dur="1.6s" repeatCount="indefinite" />
              <animate attributeName="opacity" from="0.7" to="0" dur="1.6s" repeatCount="indefinite" />
            </circle>
          </svg>
        </div>

        {/* lower row: compliance ring + stat tiles */}
        <div className="mt-3 grid grid-cols-5 gap-3">
          {/* ring */}
          <div className="col-span-2 flex flex-col items-center justify-center rounded-2xl border border-white/5 bg-navy-950/40 p-3">
            <div className="relative h-[72px] w-[72px]">
              <svg viewBox="0 0 80 80" className="h-full w-full -rotate-90">
                <circle cx="40" cy="40" r="32" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="7" />
                <circle
                  ref={ringRef}
                  cx="40"
                  cy="40"
                  r="32"
                  fill="none"
                  stroke="#D4AF37"
                  strokeWidth="7"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 grid place-items-center">
                <span className="data text-sm font-semibold text-white">{compliance}%</span>
              </div>
            </div>
            <p className="mt-1 text-center text-[0.58rem] uppercase tracking-[0.14em] text-white/40">
              Compliance
            </p>
          </div>

          {/* tiles */}
          <div className="col-span-3 grid gap-3">
            <div className="flex items-center justify-between rounded-xl border border-white/5 bg-navy-950/40 px-3 py-2.5">
              <div className="flex items-center gap-2">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-emerald-400/15 text-[0.6rem] text-emerald-300">
                  ✓
                </span>
                <span className="text-[0.72rem] font-medium text-white/80">GST Return</span>
              </div>
              <span className="data text-[0.66rem] text-emerald-300">Filed</span>
            </div>
            <div className="flex items-center justify-between rounded-xl border border-white/5 bg-navy-950/40 px-3 py-2.5">
              <div className="flex items-center gap-2">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-gold/15 text-[0.6rem] text-gold-soft">
                  ₹
                </span>
                <span className="text-[0.72rem] font-medium text-white/80">ITR Filed</span>
              </div>
              <span className="data text-[0.66rem] text-white">{returns.toLocaleString('en-IN')}+</span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

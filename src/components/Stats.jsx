import Eyebrow from './ui/Eyebrow'
import Reveal from './ui/Reveal'
import useCountUp from '../lib/useCountUp'
import { STATS } from '../lib/content'

function StatItem({ value, suffix, label }) {
  const { ref, value: n } = useCountUp(value)
  return (
    <div ref={ref} className="relative">
      <div className="flex items-baseline">
        <span className="data headline text-5xl font-bold text-white md:text-6xl">
          {n.toLocaleString('en-IN')}
        </span>
        <span className="data text-3xl font-semibold text-gold md:text-4xl">{suffix}</span>
      </div>
      <p className="mt-2 text-sm uppercase tracking-[0.14em] text-white/45">{label}</p>
    </div>
  )
}

export default function Stats() {
  return (
    <section className="grain relative overflow-hidden bg-navy-900 py-24 md:py-28">
      <div className="absolute inset-0 grid-lines opacity-50" />
      <div className="absolute -right-20 top-0 h-80 w-80 rounded-full bg-gold/5 blur-[120px]" />

      <div className="container-wide relative">
        <div className="max-w-2xl">
          <Eyebrow dark>Why choose us</Eyebrow>
          <Reveal>
            <h2 className="headline mt-5 text-4xl font-bold text-white md:text-5xl">
              Numbers that speak before we do.
            </h2>
            <p className="mt-5 max-w-lg text-white/55">
              Years of practice, thousands of filings, and a compliance record
              that lets you sleep at night.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4">
          {STATS.map((s) => (
            <StatItem key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}

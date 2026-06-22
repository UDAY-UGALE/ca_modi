import Reveal from './ui/Reveal'
import Eyebrow from './ui/Eyebrow'

export default function About() {
  return (
    <section id="about" className="relative bg-white py-24 md:py-32">
      <div className="container-wide grid gap-14 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <Eyebrow>About the firm</Eyebrow>
          <h2 className="headline mt-5 text-4xl font-bold text-navy-900 md:text-5xl">
            A modern practice built on{' '}
            <span className="serif-accent font-normal text-gold-deep">old-fashioned</span>{' '}
            trust.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/70 md:text-lg">
            A I Modi &amp; Co is a premier Chartered Accountancy firm delivering
            innovative, effective business solutions to small, medium and large
            enterprises. From accounting and audit to taxation, GST and advisory,
            we bring clarity to your numbers and confidence to your decisions.
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-ink/70">
            We don&apos;t just file and forget. We build long-term relationships,
            stay ahead of the compliance calendar, and treat your growth as the
            real measure of our work.
          </p>

          <div className="mt-9 grid grid-cols-2 gap-5 sm:max-w-md">
            {[
              ['Partner-led', 'Senior attention on every engagement'],
              ['Always on time', 'Deadlines tracked, never missed'],
              ['Plain English', 'Advice you can actually act on'],
              ['Growth-minded', 'We optimise, not just record'],
            ].map(([t, d]) => (
              <div key={t} className="rounded-2xl border border-navy-900/10 bg-mist p-4">
                <p className="text-sm font-semibold text-navy-900">{t}</p>
                <p className="mt-1 text-[0.82rem] leading-snug text-ink/55">{d}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* mini ledger panel */}
        <Reveal delay={0.1}>
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-gold/10 to-transparent blur-2xl" />
            <div className="grain relative overflow-hidden rounded-[1.8rem] bg-navy-900 p-7 shadow-lift">
              <div className="absolute inset-0 grid-lines opacity-60" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <p className="text-[0.7rem] uppercase tracking-[0.2em] text-white/40">
                    Engagement summary
                  </p>
                  <span className="data text-[0.62rem] text-gold-soft">FY 2024–25</span>
                </div>

                <div className="mt-6 space-y-3.5">
                  {[
                    ['Books reconciled', '12 / 12 months', 'text-emerald-300'],
                    ['GST returns', 'Filed on time', 'text-emerald-300'],
                    ['Statutory audit', 'Signed off', 'text-emerald-300'],
                    ['Tax planning', '₹ saved, year on year', 'text-gold-soft'],
                  ].map(([k, v, c]) => (
                    <div
                      key={k}
                      className="flex items-center justify-between border-b border-white/5 pb-3"
                    >
                      <span className="text-sm text-white/70">{k}</span>
                      <span className={`data text-[0.78rem] ${c}`}>{v}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl bg-gold/10 p-4">
                  <p className="text-[0.72rem] text-gold-soft/80">Client outcome</p>
                  <p className="mt-1 text-sm leading-snug text-white">
                    Cleaner books, lower tax outgo, and a finance function the
                    owner finally trusts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

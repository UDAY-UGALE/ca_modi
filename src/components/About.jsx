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

        {/* right: office image */}
        <Reveal delay={0.1}>
          <div className="relative flex justify-center lg:justify-end">
            <img
              src="/office-image.webp"
              alt="A I Modi & Co Office"
              loading="lazy"
              decoding="async"
              className="w-full max-w-md rounded-[1.8rem] object-cover shadow-lift"
            />
          </div>
        </Reveal>

      </div>
    </section>
  )
}

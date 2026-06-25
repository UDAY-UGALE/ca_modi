import { FIRM } from '../lib/content'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-navy-950 py-14">
      <div className="container-wide">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <img src="/ca-logo.jpeg" alt="CA India Logo" className="h-9 w-9 object-contain" />
              <span className="text-sm font-semibold tracking-tight text-white">
                A I Modi &amp; Co
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/45">
              A premier Chartered Accountancy firm helping ambitious businesses
              grow with clarity, confidence and complete compliance.
            </p>
          </div>

          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.2em] text-white/40">Explore</p>
            <ul className="mt-4 space-y-2.5 text-sm text-white/55">
              {[
                ['Services', '#services'],
                ['About', '#about'],
                ['Industries', '#industries'],
                ['Process', '#process'],
                ['Insights', '#insights'],
              ].map(([l, h]) => (
                <li key={h}>
                  <a href={h} className="transition-colors hover:text-gold-soft">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.2em] text-white/40">Reach us</p>
            <ul className="mt-4 space-y-2.5 text-sm text-white/55">
              {FIRM.emails.map((e) => (
                <li key={e}>
                  <a href={`mailto:${e}`} className="transition-colors hover:text-gold-soft">
                    {e}
                  </a>
                </li>
              ))}
              <li className="pt-2 text-white/40">{FIRM.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 text-xs text-white/35 sm:flex-row">
          <p>© {new Date().getFullYear()} A I Modi &amp; Co. All rights reserved.</p>
          <p>Chartered Accountants · Pune, Maharashtra</p>
        </div>
      </div>
    </footer>
  )
}

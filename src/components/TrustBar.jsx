const TRUST = [
  'Trusted by growing businesses',
  'Professional excellence',
  'Client-first relationships',
  'Deep compliance expertise',
]

const CLIENTS = [
  'Manufacturing Co.',
  'Retail Group',
  'TechWorks',
  'HealthPlus',
  'BuildRight',
  'Trade House',
  'Foods & Bev',
  'Logistics Hub',
]

export default function TrustBar() {
  return (
    <section className="border-y border-navy-800/40 bg-navy-950 py-8">
      <div className="container-wide">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-center">
          {TRUST.map((t, i) => (
            <div key={t} className="flex items-center gap-8">
              <span className="text-[0.78rem] font-medium uppercase tracking-[0.16em] text-white/55">
                {t}
              </span>
              {i < TRUST.length - 1 && (
                <span className="hidden h-1 w-1 rounded-full bg-gold/60 sm:block" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* <div className="marquee relative mt-8 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
        <div className="marquee-track gap-12 pr-12">
          {[...CLIENTS, ...CLIENTS].map((c, i) => (
            <span
              key={i}
              className="data shrink-0 text-sm font-medium tracking-tight text-white/30"
            >
              {c}
            </span>
          ))}
        </div>
      </div> */}
    </section>
  )
}

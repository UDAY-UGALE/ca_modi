/**
 * Small uppercase label with a gold tick — used above section headings.
 */
export default function Eyebrow({ children, dark = false }) {
  return (
    <div className="inline-flex items-center gap-2.5">
      <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
      <span
        className={`text-[0.7rem] font-semibold uppercase tracking-[0.28em] ${
          dark ? 'text-gold-soft' : 'text-gold-deep'
        }`}
      >
        {children}
      </span>
    </div>
  )
}

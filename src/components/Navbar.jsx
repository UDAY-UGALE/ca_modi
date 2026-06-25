import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import MagneticButton from './ui/MagneticButton'

const LINKS = [
  ['Services', '#services'],
  ['About', '#about'],
  ['Industries', '#industries'],
  ['Process', '#process'],
  ['Insights', '#insights'],
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={`mx-auto mt-3 flex max-w-wide items-center justify-between rounded-full px-5 py-3 transition-all duration-500 ${
          scrolled
            ? 'border border-white/10 bg-navy-900/80 backdrop-blur-xl shadow-lift'
            : 'border border-transparent bg-transparent'
        }`}
        style={{ width: 'calc(100% - 2rem)', marginInline: '1rem' }}
      >
        <a href="#top" className="flex items-center gap-2.5">
          <img
            src="/ca-logo.jpeg"
            alt="CA India Logo"
            className="h-9 w-9 object-contain"
          />
          <span className="leading-none">
            <span className="block text-sm font-semibold tracking-tight text-white">
              A I Modi &amp; Co
            </span>
            <span className="block text-[0.6rem] uppercase tracking-[0.22em] text-gold-soft/80">
              Chartered Accountants
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {LINKS.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-[0.82rem] font-medium text-white/70 transition-colors hover:text-gold-soft"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <MagneticButton href="#contact" variant="gold" className="!px-6 !py-2.5">
            Book Consultation
          </MagneticButton>
        </div>

        {/* mobile toggle */}
        <button
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white lg:hidden"
        >
          <div className="space-y-1.5">
            <span
              className={`block h-px w-5 bg-white transition-transform ${open ? 'translate-y-[3px] rotate-45' : ''}`}
            />
            <span
              className={`block h-px w-5 bg-white transition-transform ${open ? '-translate-y-[3px] -rotate-45' : ''}`}
            />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mx-4 mt-2 rounded-3xl border border-white/10 bg-navy-900/95 p-4 backdrop-blur-xl lg:hidden"
          >
            {LINKS.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm font-medium text-white/80 hover:bg-white/5 hover:text-gold-soft"
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-full bg-gold px-4 py-3 text-center text-sm font-semibold text-navy-950"
            >
              Book Consultation
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

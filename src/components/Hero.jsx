import { motion } from 'framer-motion'
import MagneticButton from './ui/MagneticButton'
import { wordUp, stagger, EASE } from '../lib/variants'

const HEAD_LINE_1 = ['Financial', 'clarity.']
const HEAD_LINE_2 = ['Business', 'growth.']

const BADGES = [
  { icon: '🛡️', title: 'TRUSTED BY', sub: 'GROWING BUSINESSES' },
  { icon: '⭐', title: 'PROFESSIONAL', sub: 'EXCELLENCE' },
  { icon: '🤝', title: 'CLIENT-FIRST', sub: 'RELATIONSHIPS' },
  { icon: '⚖️', title: 'DEEP COMPLIANCE', sub: 'EXPERTISE' },
]

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden"
    >
      {/* background image */}
      <picture>
        <source media="(max-width: 640px)" srcSet="/hero-bg-mobile.webp" />
        <source media="(min-width: 641px)" srcSet="/hero-bg.webp" />
        <img
          src="/hero-bg.webp"
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      </picture>
      {/* dark overlay so text stays readable */}
      <div className="absolute inset-0 bg-navy-950/60" />

      {/* content */}
      <div className="relative flex min-h-screen flex-col justify-between pt-36 pb-12">
        <div className="container-wide">
          <div className="max-w-2xl pr-4">
            <h1 className="headline text-[2.7rem] font-extrabold text-white sm:text-6xl lg:text-[4.4rem]">
              <motion.span
                variants={stagger(0.15, 0.09)}
                initial="hidden"
                animate="show"
                className="block"
              >
                {HEAD_LINE_1.map((w) => (
                  <span key={w} className="mr-[0.25em] inline-block overflow-hidden align-bottom">
                    <motion.span variants={wordUp} className="inline-block">
                      {w}
                    </motion.span>
                  </span>
                ))}
              </motion.span>
              <motion.span
                variants={stagger(0.35, 0.09)}
                initial="hidden"
                animate="show"
                className="block"
              >
                {HEAD_LINE_2.map((w) => (
                  <span key={w} className="mr-[0.25em] inline-block overflow-hidden align-bottom">
                    <motion.span variants={wordUp} className="inline-block">
                      {w}
                    </motion.span>
                  </span>
                ))}
              </motion.span>
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: '110%' }}
                  animate={{ y: '0%' }}
                  transition={{ duration: 0.9, ease: EASE, delay: 0.6 }}
                  className="inline-block"
                >
                  <span className="text-gold-gradient">Complete</span>{' '}
                  <span className="serif-accent font-normal text-white">compliance.</span>
                </motion.span>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.8 }}
              className="mt-7 max-w-lg text-base leading-relaxed text-white/70 md:text-lg"
            >
              Expert accounting, auditing, taxation and business advisory for
              ambitious businesses — delivered with the precision of a modern
              financial team.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.95 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <MagneticButton href="#contact" variant="gold">
                Book Consultation
                <span aria-hidden className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </MagneticButton>
              <MagneticButton href="#services" variant="ghost">
                Explore Services
              </MagneticButton>
            </motion.div>
          </div>
        </div>

        {/* bottom badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 1.1 }}
          className="container-wide"
        >
          <div className="border-t border-white/10 pt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {BADGES.map(({ icon, title, sub }) => (
              <div key={title} className="flex items-center gap-3">
                <span className="text-gold text-xl">{icon}</span>
                <div>
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-gold-soft">
                    {title}
                  </p>
                  <p className="text-[0.6rem] uppercase tracking-[0.12em] text-white/50">
                    {sub}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

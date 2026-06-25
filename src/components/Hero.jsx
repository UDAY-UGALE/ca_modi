import { motion } from 'framer-motion'
import MagneticButton from './ui/MagneticButton'
import { wordUp, stagger, EASE } from '../lib/variants'

const HEAD_LINE_1 = ['Financial', 'clarity.']
const HEAD_LINE_2 = ['Business', 'growth.']

export default function Hero() {
  return (
    <section
      id="top"
      className="grain relative overflow-hidden bg-navy-900 pt-32 pb-20 md:pt-40 md:pb-28"
    >
      {/* engineered grid + ambient glows */}
      <div className="absolute inset-0 grid-lines" />
      <div className="absolute -top-40 right-0 h-[520px] w-[520px] rounded-full bg-navy-800/60 blur-[120px]" />
      <div className="absolute -bottom-40 -left-20 h-[420px] w-[420px] rounded-full bg-gold/5 blur-[120px]" />

      <div className="container-wide relative flex items-center">
        {/* left: copy */}
        <div className="max-w-2xl">
          {/* <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-gold/25 bg-gold/5 px-4 py-1.5"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulseDot" />
            <span className="text-[0.72rem] font-medium tracking-tight text-gold-soft">
              Chartered Accountants · Pune
            </span>
          </motion.div> */}

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
            className="mt-7 max-w-lg text-base leading-relaxed text-white/60 md:text-lg"
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

          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-10 flex items-center gap-6 text-white/45"
          >
            <Stat k="15+" v="Years" />
            <span className="h-8 w-px bg-white/10" />
            <Stat k="1000+" v="Returns filed" />
            <span className="h-8 w-px bg-white/10" />
            <Stat k="99%" v="Accuracy" />
          </motion.div> */}
        </div>

      </div>
    </section>
  )
}

function Stat({ k, v }) {
  return (
    <div>
      <p className="data text-lg font-semibold text-white">{k}</p>
      <p className="text-[0.7rem] uppercase tracking-wider">{v}</p>
    </div>
  )
}

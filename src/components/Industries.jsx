import { motion } from 'framer-motion'
import Eyebrow from './ui/Eyebrow'
import { INDUSTRIES } from '../lib/content'
import { fadeUp } from '../lib/variants'

export default function Industries() {
  return (
    <section id="industries" className="bg-white py-24 md:py-32">
      <div className="container-wide">
        <div className="max-w-xl">
          <Eyebrow>Industries we serve</Eyebrow>
          <h2 className="headline mt-5 text-4xl font-bold text-navy-900 md:text-5xl">
            Sector-specific knowledge, not generic advice.
          </h2>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ staggerChildren: 0.05 }}
          className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {INDUSTRIES.map((ind, i) => (
            <motion.div
              key={ind.name}
              variants={fadeUp}
              className={`group relative flex min-h-[160px] flex-col justify-between overflow-hidden rounded-2xl border border-navy-900/10 p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-lift ${
                i === 0 ? 'bg-navy-900 text-white sm:col-span-2 lg:col-span-1' : 'bg-mist'
              }`}
            >
              <div
                className={`absolute -right-8 -top-8 h-28 w-28 rounded-full blur-2xl transition-opacity duration-500 ${
                  i === 0 ? 'bg-gold/20' : 'bg-gold/0 group-hover:bg-gold/10'
                }`}
              />
              <span
                className={`data text-xs ${i === 0 ? 'text-gold-soft' : 'text-gold-deep/70'}`}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="relative">
                <h3
                  className={`text-xl font-semibold tracking-tight ${
                    i === 0 ? 'text-white' : 'text-navy-900'
                  }`}
                >
                  {ind.name}
                </h3>
                <p
                  className={`mt-1.5 text-[0.86rem] leading-snug ${
                    i === 0 ? 'text-white/60' : 'text-ink/55'
                  }`}
                >
                  {ind.note}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

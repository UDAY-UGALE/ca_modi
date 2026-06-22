import { motion } from 'framer-motion'
import Eyebrow from './ui/Eyebrow'
import { SERVICES } from '../lib/content'
import { fadeUp } from '../lib/variants'

export default function Services() {
  return (
    <section id="services" className="relative bg-mist py-24 md:py-32">
      <div className="container-wide">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <Eyebrow>What we do</Eyebrow>
            <h2 className="headline mt-5 text-4xl font-bold text-navy-900 md:text-5xl">
              Everything your numbers need, under one roof.
            </h2>
          </div>
          <p className="max-w-sm text-ink/60">
            A full-service practice — from day-to-day books to board-level
            advisory — so nothing about your compliance is ever left to chance.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ staggerChildren: 0.06 }}
          className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {SERVICES.map((s) => (
            <motion.article
              key={s.title}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-2xl border border-navy-900/10 bg-white p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-lift"
            >
              {/* gold wash on hover */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-gold/0 to-gold/0 opacity-0 transition-opacity duration-500 group-hover:from-gold/[0.07] group-hover:opacity-100" />
              <span className="data text-xs font-medium text-gold-deep/70">{s.n}</span>
              <h3 className="mt-3 text-lg font-semibold tracking-tight text-navy-900">
                {s.title}
              </h3>
              <p className="mt-2.5 text-[0.9rem] leading-relaxed text-ink/60">{s.body}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-navy-800 opacity-0 transition-all duration-500 group-hover:opacity-100">
                Learn more
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </span>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

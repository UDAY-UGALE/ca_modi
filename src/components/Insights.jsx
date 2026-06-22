import { motion } from 'framer-motion'
import Eyebrow from './ui/Eyebrow'
import { INSIGHTS } from '../lib/content'
import { fadeUp } from '../lib/variants'

export default function Insights() {
  return (
    <section id="insights" className="bg-mist py-24 md:py-32">
      <div className="container-wide">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <Eyebrow>Insights &amp; knowledge centre</Eyebrow>
            <h2 className="headline mt-5 text-4xl font-bold text-navy-900 md:text-5xl">
              Clarity you can use, before you even call.
            </h2>
          </div>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-navy-900"
          >
            View all insights
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ staggerChildren: 0.08 }}
          className="mt-14 grid gap-5 md:grid-cols-3"
        >
          {INSIGHTS.map((post) => (
            <motion.article
              key={post.title}
              variants={fadeUp}
              className="group flex cursor-pointer flex-col justify-between rounded-2xl border border-navy-900/10 bg-white p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-lift"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-navy-900/5 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-wider text-navy-800">
                    {post.tag}
                  </span>
                  <span className="data text-[0.7rem] text-ink/40">{post.read}</span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-snug tracking-tight text-navy-900">
                  {post.title}
                </h3>
              </div>
              <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-gold-deep">
                Read insight
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </span>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

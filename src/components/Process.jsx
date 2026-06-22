import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Eyebrow from './ui/Eyebrow'
import { PROCESS } from '../lib/content'
import { fadeUp } from '../lib/variants'

export default function Process() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 65%', 'end 60%'],
  })
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section id="process" className="grain relative overflow-hidden bg-navy-950 py-24 md:py-32">
      <div className="absolute inset-0 grid-lines opacity-40" />
      <div className="container-wide relative">
        <div className="max-w-xl">
          <Eyebrow dark>How we work</Eyebrow>
          <h2 className="headline mt-5 text-4xl font-bold text-white md:text-5xl">
            From first call to compounding growth.
          </h2>
        </div>

        <div ref={ref} className="relative mt-16 pl-8 md:pl-0">
          <div className="absolute left-[7px] top-2 h-full w-px bg-white/10 md:left-1/2" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[7px] top-2 w-px bg-gradient-to-b from-gold-soft to-gold md:left-1/2"
          />

          <div className="space-y-12">
            {PROCESS.map((p, i) => {
              const right = i % 2 === 1
              return (
                <motion.div
                  key={p.step}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.6 }}
                  className="relative md:grid md:grid-cols-2 md:gap-16"
                >
                  <span className="absolute -left-8 top-1.5 grid h-4 w-4 place-items-center rounded-full bg-gold md:left-1/2 md:-translate-x-1/2">
                    <span className="h-1.5 w-1.5 rounded-full bg-navy-950" />
                  </span>

                  <div
                    className={
                      right
                        ? 'md:col-start-2 md:text-left'
                        : 'md:col-start-1 md:text-right'
                    }
                  >
                    <span className="data text-xs text-gold-soft/70">
                      Step {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="mt-1 text-2xl font-semibold tracking-tight text-white">
                      {p.step}
                    </h3>
                    <p
                      className={`mt-2 text-[0.92rem] leading-relaxed text-white/55 ${
                        right ? 'md:mr-auto md:max-w-sm' : 'md:ml-auto md:max-w-sm'
                      }`}
                    >
                      {p.body}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Eyebrow from './ui/Eyebrow'
import { TESTIMONIALS } from '../lib/content'

export default function Testimonials() {
  const [i, setI] = useState(0)
  const go = (dir) => setI((p) => (p + dir + TESTIMONIALS.length) % TESTIMONIALS.length)
  const t = TESTIMONIALS[i]

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container-wide">
        <div className="flex items-end justify-between gap-6">
          <div className="max-w-xl">
            <Eyebrow>Client voices</Eyebrow>
            <h2 className="headline mt-5 text-4xl font-bold text-navy-900 md:text-5xl">
              The work speaks. So do our clients.
            </h2>
          </div>
          <div className="hidden gap-3 sm:flex">
            <CarouselBtn label="Previous" onClick={() => go(-1)}>←</CarouselBtn>
            <CarouselBtn label="Next" onClick={() => go(1)}>→</CarouselBtn>
          </div>
        </div>

        <div className="relative mt-12 overflow-hidden rounded-[1.8rem] border border-navy-900/10 bg-mist p-8 md:p-14">
          <div className="absolute right-8 top-6 serif-accent text-[7rem] leading-none text-gold/20 md:text-[10rem]">
            &rdquo;
          </div>
          <AnimatePresence mode="wait">
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <blockquote className="relative max-w-3xl text-2xl font-medium leading-snug tracking-tight text-navy-900 md:text-[2rem]">
                {t.quote}
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-navy-900 text-gold">
                  <span className="serif-accent text-lg not-italic">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-navy-900">{t.name}</p>
                  <p className="text-sm text-ink/55">{t.role}</p>
                </div>
              </figcaption>
            </motion.figure>
          </AnimatePresence>

          <div className="mt-10 flex items-center gap-2">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                aria-label={`Go to testimonial ${idx + 1}`}
                onClick={() => setI(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === i ? 'w-8 bg-gold' : 'w-2 bg-navy-900/20 hover:bg-navy-900/40'
                }`}
              />
            ))}
            <div className="ml-auto flex gap-3 sm:hidden">
              <CarouselBtn label="Previous" onClick={() => go(-1)}>←</CarouselBtn>
              <CarouselBtn label="Next" onClick={() => go(1)}>→</CarouselBtn>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CarouselBtn({ children, onClick, label }) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      className="grid h-11 w-11 place-items-center rounded-full border border-navy-900/15 text-navy-900 transition-colors hover:border-gold hover:bg-gold hover:text-navy-950"
    >
      {children}
    </button>
  )
}

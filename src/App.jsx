import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import useLenis from './lib/useLenis'
import { FIRM } from './lib/content'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import About from './components/About'
import Services from './components/Services'
import Stats from './components/Stats'
import Industries from './components/Industries'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import Insights from './components/Insights'
import Contact from './components/Contact'
import Footer from './components/Footer'

function Intro({ done }) {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: '-100%' }}
      transition={{ duration: 0.9, ease: [0.83, 0, 0.17, 1], delay: 0.5 }}
      onAnimationComplete={done}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-950"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="flex items-center gap-3"
      >
        <img src="/ca-logo.webp" alt="CA India Logo" className="h-12 w-12 object-contain" />
        <span className="headline text-2xl font-bold text-white">A I Modi &amp; Co</span>
      </motion.div>
    </motion.div>
  )
}

export default function App() {
  useLenis()
  const [introDone, setIntroDone] = useState(false)
  const { scrollYProgress } = useScroll()
  const bar = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 })

  // honour reduced motion: skip intro
  const [showIntro, setShowIntro] = useState(true)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShowIntro(false)
      setIntroDone(true)
    }
  }, [])

  const waText = encodeURIComponent("Hello A I Modi & Co, I'd like to book a consultation.")

  return (
    <>
      <AnimatePresence>
        {showIntro && <Intro done={() => setIntroDone(true)} />}
      </AnimatePresence>

      {/* scroll progress */}
      <motion.div
        style={{ scaleX: bar }}
        className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-gold-soft to-gold"
      />

      <Navbar />

      <main>
        <Hero />
        <TrustBar />
        <About />
        <Services />
        {/* <Stats /> */}
        <Industries />
        <Process />
        <Testimonials />
        <Insights />
        <Contact />
      </main>

      <Footer />

      {/* WhatsApp FAB */}
      {introDone && (
        <motion.a
          href={`https://wa.me/${FIRM.phoneE164.replace('+', '')}?text=${waText}`}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.3 }}
          className="fab grid h-14 w-14 place-items-center rounded-full bg-emerald-500 text-white shadow-lift transition-transform hover:scale-110"
        >
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden>
            <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.477-.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
        </motion.a>
      )}
    </>
  )
}

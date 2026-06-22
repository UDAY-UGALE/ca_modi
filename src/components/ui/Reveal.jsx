import { motion } from 'framer-motion'
import { fadeUp } from '../../lib/variants'

/**
 * Wraps children in a scroll-reveal. Use `as` to change the element,
 * `delay` to offset, and pass through className.
 */
export default function Reveal({
  children,
  className = '',
  delay = 0,
  as = 'div',
  amount = 0.3,
}) {
  const MotionTag = motion[as] || motion.div
  return (
    <MotionTag
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  )
}

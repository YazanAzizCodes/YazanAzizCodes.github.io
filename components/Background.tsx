'use client'

import { useScroll, useTransform, motion } from 'framer-motion'

export default function Background() {
  const { scrollYProgress } = useScroll()

  // Each orb drifts to a different destination as you scroll
  const orb1X = useTransform(scrollYProgress, [0, 1], ['0%', '35%'])
  const orb1Y = useTransform(scrollYProgress, [0, 1], ['-15%', '55%'])

  const orb2X = useTransform(scrollYProgress, [0, 1], ['55%', '10%'])
  const orb2Y = useTransform(scrollYProgress, [0, 1], ['20%', '70%'])

  const orb3X = useTransform(scrollYProgress, [0, 1], ['25%', '60%'])
  const orb3Y = useTransform(scrollYProgress, [0, 1], ['60%', '15%'])

  const orb4X = useTransform(scrollYProgress, [0, 1], ['70%', '30%'])
  const orb4Y = useTransform(scrollYProgress, [0, 1], ['80%', '30%'])

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Primary orb — large, bright */}
      <motion.div
        style={{ left: orb1X, top: orb1Y }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute w-[650px] h-[650px] -translate-x-1/2 -translate-y-1/2 bg-blue-600/[0.06] rounded-full blur-[130px]"
      />

      {/* Secondary orb — offset color */}
      <motion.div
        style={{ left: orb2X, top: orb2Y }}
        animate={{ scale: [1.1, 1, 1.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 bg-blue-900/[0.07] rounded-full blur-[110px]"
      />

      {/* Third orb — rises as you scroll down */}
      <motion.div
        style={{ left: orb3X, top: orb3Y }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 bg-accent/[0.04] rounded-full blur-[100px]"
      />

      {/* Fourth orb — small accent */}
      <motion.div
        style={{ left: orb4X, top: orb4Y }}
        animate={{ scale: [1.2, 1, 1.2] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        className="absolute w-[300px] h-[300px] -translate-x-1/2 -translate-y-1/2 bg-blue-500/[0.04] rounded-full blur-[90px]"
      />
    </div>
  )
}

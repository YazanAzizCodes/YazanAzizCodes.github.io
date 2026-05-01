'use client'

import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (d: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: d, ease: 'easeOut' },
  }),
}

const spring = { stiffness: 60, damping: 18, mass: 0.6 }

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const x = useSpring(rawX, spring)
  const y = useSpring(rawY, spring)

  // Each layer moves at a different depth
  const glowX  = useTransform(x, [-0.5, 0.5], [-60, 60])
  const glowY  = useTransform(y, [-0.5, 0.5], [-60, 60])
  const gridX  = useTransform(x, [-0.5, 0.5], [-12, 12])
  const gridY  = useTransform(y, [-0.5, 0.5], [-12, 12])
  const photoX = useTransform(x, [-0.5, 0.5], [-18, 18])
  const photoY = useTransform(y, [-0.5, 0.5], [-18, 18])
  const photoR = useTransform(x, [-0.5, 0.5], [-3, 3])
  const textX  = useTransform(x, [-0.5, 0.5], [8, -8])
  const textY  = useTransform(y, [-0.5, 0.5], [5, -5])

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const el = sectionRef.current
      if (!el) return
      const { left, top, width, height } = el.getBoundingClientRect()
      rawX.set((e.clientX - left) / width - 0.5)
      rawY.set((e.clientY - top) / height - 0.5)
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [rawX, rawY])

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden">

      {/* Grid — slow layer */}
      <motion.div
        style={{ x: gridX, y: gridY }}
        className="absolute inset-[-20px] bg-[linear-gradient(to_right,#0E306018_1px,transparent_1px),linear-gradient(to_bottom,#0E306018_1px,transparent_1px)] bg-[size:72px_72px]"
      />

      {/* Glow — fast layer, tracks mouse closely */}
      <motion.div
        style={{ x: glowX, y: glowY }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-accent/[0.05] rounded-full blur-[140px] pointer-events-none"
      />

      {/* Second smaller glow for depth */}
      <motion.div
        style={{ x: useTransform(x, [-0.5, 0.5], [-30, 30]), y: useTransform(y, [-0.5, 0.5], [-30, 30]) }}
        className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-blue-700/[0.04] rounded-full blur-[100px] pointer-events-none"
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-32">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">

          {/* Text — subtle counter-movement */}
          <motion.div style={{ x: textX, y: textY }} className="flex-1 text-center md:text-left">
            <motion.p
              custom={0.1} initial="hidden" animate="visible" variants={fadeUp}
              className="font-mono text-accent text-sm tracking-[0.3em] uppercase mb-5"
            >
              Technical Lead · Data Analyst IV
            </motion.p>

            <motion.h1
              custom={0.3} initial="hidden" animate="visible" variants={fadeUp}
              className="text-5xl md:text-7xl font-bold tracking-tight mb-5"
            >
              <span className="text-white">Yazan</span>{' '}
              <span className="text-white">Aziz</span>
            </motion.h1>

            <motion.p
              custom={0.5} initial="hidden" animate="visible" variants={fadeUp}
              className="font-mono text-slate-500 text-sm mb-5"
            >
              Lockheed Martin &nbsp;·&nbsp; F-35 Program &nbsp;·&nbsp; Fort Worth, TX
            </motion.p>

            <motion.p
              custom={0.65} initial="hidden" animate="visible" variants={fadeUp}
              className="text-slate-300 text-lg max-w-xl mb-10 leading-relaxed"
            >
              Turning complex operational data into actionable insights that drive
              readiness, reduce costs, and support warfighter mission success.
            </motion.p>

            <motion.div
              custom={0.8} initial="hidden" animate="visible" variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <a
                href="/#experience"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="px-8 py-3 bg-accent hover:bg-blue-500 text-white font-medium rounded transition-all duration-200 shadow-lg shadow-accent/20"
              >
                View My Work
              </a>
              <a
                href="/contact"
                className="px-8 py-3 border border-rim-bright text-slate-300 hover:border-accent hover:text-highlight rounded transition-all duration-200"
              >
                Get In Touch
              </a>
            </motion.div>
          </motion.div>

          {/* Photo — most movement + subtle rotation */}
          <motion.div
            custom={0.4} initial="hidden" animate="visible" variants={fadeUp}
            className="flex-shrink-0"
          >
            <motion.div
              style={{ x: photoX, y: photoY, rotate: photoR }}
              className="relative w-56 h-56 md:w-72 md:h-72 rounded-2xl overflow-hidden border-2 border-rim-bright shadow-2xl shadow-accent/10"
            >
              <img
                src="/me.png"
                alt="Yazan Aziz"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/5 rounded-2xl" />
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-700">
        <span className="font-mono text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-slate-700 to-transparent"
        />
      </div>
    </section>
  )
}

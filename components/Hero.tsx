'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (d: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: d, ease: 'easeOut' },
  }),
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0E306018_1px,transparent_1px),linear-gradient(to_bottom,#0E306018_1px,transparent_1px)] bg-[size:72px_72px]" />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-accent/[0.04] rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.p
          custom={0.1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="font-mono text-accent text-sm tracking-[0.3em] uppercase mb-6"
        >
          Technical Lead · Data Analyst IV
        </motion.p>

        <motion.h1
          custom={0.3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-6xl md:text-8xl font-bold tracking-tight mb-6"
        >
          <span className="text-gradient">Yazan</span>{' '}
          <span className="text-white">Aziz</span>
        </motion.h1>

        <motion.p
          custom={0.5}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="font-mono text-slate-500 text-base mb-4"
        >
          Lockheed Martin &nbsp;·&nbsp; F-35 Program &nbsp;·&nbsp; Fort Worth, TX
        </motion.p>

        <motion.p
          custom={0.65}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-slate-300 text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Turning complex operational data into actionable insights that drive readiness,
          reduce costs, and support warfighter mission success.
        </motion.p>

        <motion.div
          custom={0.8}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="#experience"
            className="px-8 py-3 bg-accent hover:bg-blue-500 text-white font-medium rounded transition-all duration-200 shadow-lg shadow-accent/20"
          >
            View My Work
          </Link>
          <a
            href="/Yazan_Aziz_Resume.pdf"
            download
            className="px-8 py-3 border border-rim-bright text-slate-300 hover:border-accent hover:text-highlight rounded transition-all duration-200"
          >
            Download Resume
          </a>
        </motion.div>
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

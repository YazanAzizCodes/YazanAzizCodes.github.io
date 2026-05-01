'use client'

import { motion } from 'framer-motion'

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
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0E306018_1px,transparent_1px),linear-gradient(to_bottom,#0E306018_1px,transparent_1px)] bg-[size:72px_72px]" />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-accent/[0.04] rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-32">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">

          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <motion.p
              custom={0.1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="font-mono text-accent text-sm tracking-[0.3em] uppercase mb-5"
            >
              Technical Lead · Data Analyst IV
            </motion.p>

            <motion.h1
              custom={0.3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-5xl md:text-7xl font-bold tracking-tight mb-5"
            >
              <span className="text-gradient">Yazan</span>{' '}
              <span className="text-white">Aziz</span>
            </motion.h1>

            <motion.p
              custom={0.5}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="font-mono text-slate-500 text-sm mb-5"
            >
              Lockheed Martin &nbsp;·&nbsp; F-35 Program &nbsp;·&nbsp; Fort Worth, TX
            </motion.p>

            <motion.p
              custom={0.65}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-slate-300 text-lg max-w-xl mb-10 leading-relaxed"
            >
              Turning complex operational data into actionable insights that drive
              readiness, reduce costs, and support warfighter mission success.
            </motion.p>

            <motion.div
              custom={0.8}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
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
          </div>

          {/* Photo */}
          <motion.div
            custom={0.4}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex-shrink-0"
          >
            <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-2xl overflow-hidden border-2 border-rim-bright shadow-2xl shadow-accent/10">
              <img
                src="/me.png"
                alt="Yazan Aziz"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/5 rounded-2xl" />
            </div>
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

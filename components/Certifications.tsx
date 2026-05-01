'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const certs = [
  { name: 'Active Secret Security Clearance', issuer: 'U.S. Government', highlight: true },
  { name: 'Tableau Desktop Specialist', issuer: 'Tableau' },
  { name: 'Six Sigma Green Belt', issuer: 'IISE' },
  { name: 'Program Performance Management (PPM) 101', issuer: 'Lockheed Martin' },
  { name: 'AI Fundamental Skills Badge', issuer: 'Lockheed Martin' },
  { name: 'Google Data Analytics', issuer: 'Google / Coursera' },
  { name: 'MOS Excel 2016 Expert (77-728)', issuer: 'Microsoft' },
  { name: 'SQL Fundamentals', issuer: 'DataCamp' },
]

export default function Certifications() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="certifications" className="section-pad max-w-6xl mx-auto px-6">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-accent text-sm">03.</span>
          <h2 className="text-3xl font-bold text-white">Certifications</h2>
          <div className="flex-1 h-px bg-rim" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className={`p-5 rounded-lg border transition-all duration-200 hover:-translate-y-1 ${
                cert.highlight
                  ? 'bg-accent/10 border-accent shadow-lg shadow-accent/10'
                  : 'bg-surface border-rim hover:border-rim-bright'
              }`}
            >
              <p className={`font-medium text-sm leading-snug mb-2 ${cert.highlight ? 'text-highlight' : 'text-slate-200'}`}>
                {cert.name}
              </p>
              <p className="font-mono text-xs text-slate-500">{cert.issuer}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

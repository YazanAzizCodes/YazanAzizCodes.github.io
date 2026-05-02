'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import type { ExperienceStory } from '@/lib/experience'

export default function ExperienceStoryClient({ exp }: { exp: ExperienceStory }) {
  return (
    <main className="min-h-screen pt-28 pb-24">
      <div className="max-w-3xl mx-auto px-6">

        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            href="/#experience"
            onClick={(e) => {
              e.preventDefault()
              window.location.href = '/#experience'
            }}
            className="inline-flex items-center gap-2 font-mono text-sm text-accent hover:text-highlight transition-colors mb-12 block"
          >
            ← Back to Experience
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <p className="font-mono text-accent text-sm tracking-widest uppercase mb-3">{exp.program}</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">{exp.title}</h1>
          <span className="font-mono text-sm text-slate-500 bg-elevated border border-rim px-3 py-1 rounded">
            {exp.period} · Lockheed Martin
          </span>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="origin-left h-px bg-gradient-to-r from-accent/40 to-transparent mb-12"
        />

        {/* Story paragraphs */}
        <div className="space-y-6 mb-16">
          {exp.story.map((paragraph, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
              className="text-slate-300 text-lg leading-relaxed"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="bg-surface border border-rim rounded-xl p-8"
        >
          <h2 className="font-mono text-accent text-sm tracking-widest uppercase mb-6">Key Contributions</h2>
          <ul className="space-y-4">
            {exp.highlights.map((h, i) => (
              <li key={i} className="flex gap-3 text-slate-300 text-sm leading-relaxed">
                <span className="text-accent mt-0.5 flex-shrink-0">▹</span>
                {h}
              </li>
            ))}
          </ul>
        </motion.div>

      </div>
    </main>
  )
}

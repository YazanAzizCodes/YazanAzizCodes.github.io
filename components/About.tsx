'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const skills = [
  { category: 'Languages', items: ['Python', 'SQL', 'VBA'] },
  { category: 'Engineering & DevOps', items: ['GitLab', 'Docker', 'Kubernetes'] },
  { category: 'Data Visualization', items: ['Tableau', 'Power BI', 'MS Power Apps'] },
  { category: 'Collaboration', items: ['Jira', 'Slack', 'Confluence'] },
]

const education = [
  { degree: 'M.S. Business Analytics', school: 'University of Texas at Rio Grande Valley', year: '2023' },
  { degree: 'B.S. Industrial Engineering', school: 'University of Texas at Arlington', year: '2020', note: 'Cum Laude' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="section-pad max-w-6xl mx-auto px-6">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-accent text-sm">01.</span>
          <h2 className="text-3xl font-bold text-white">About Me</h2>
          <div className="flex-1 h-px bg-rim" />
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-5 text-slate-300 leading-relaxed">
            {/* Photo */}
            <div className="flex justify-center md:justify-start mb-2">
              <div className="relative w-48 h-48 rounded-2xl overflow-hidden border-2 border-rim-bright shadow-lg shadow-accent/10">
                <img
                  src="/me.png"
                  alt="Yazan Aziz"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/5 rounded-2xl" />
              </div>
            </div>
            <p>
              I&apos;m a Technical Lead and Data Analyst with dual degrees in{' '}
              <span className="text-highlight">Industrial Engineering</span> and{' '}
              <span className="text-highlight">Business Analytics</span>. Over five years at
              Lockheed Martin I&apos;ve built predictive models, engineered supply chain
              optimization algorithms, and architected automated data workflows for the
              F-35 and F-16 programs.
            </p>
            <p>
              I specialize in transforming complex operational data into actionable
              intelligence — from forecasting maintenance events using sensor telemetry
              to aligning global supply assets with warfighter mission requirements.
            </p>
            <p>
              I hold an{' '}
              <span className="text-highlight">Active Secret Security Clearance</span> and
              am passionate about applying modern data engineering to mission-critical
              defense systems.
            </p>

            <div className="pt-2 space-y-3">
              {education.map((ed) => (
                <div key={ed.degree} className="border-l-2 border-accent pl-4">
                  <p className="text-white font-medium text-sm">{ed.degree}</p>
                  <p className="text-slate-500 text-xs font-mono">
                    {ed.school} · {ed.year}{ed.note ? ` · ${ed.note}` : ''}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-7">
            {skills.map((group) => (
              <div key={group.category}>
                <p className="font-mono text-accent text-xs tracking-widest uppercase mb-3">
                  {group.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm bg-elevated border border-rim text-slate-300 rounded hover:border-rim-bright hover:text-highlight transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

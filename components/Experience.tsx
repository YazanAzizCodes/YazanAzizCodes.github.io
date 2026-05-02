'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const jobs = [
  {
    slug: 'data-analyst-iv',
    title: 'Data Analyst IV',
    program: 'F-35 · Supply Optimization & Logistics',
    period: '2026 – Present',
    bullets: [
      'Technical Lead for F-35 Supply Optimization and Logistics Modeling, directing technical strategy for sustainment analytics and onboarding new analysts.',
      'Engineered forecasting models using F-35 sensor data and operational telemetry to predict expected maintenance event due dates, improving spares procurement.',
      'Architecting automated data workflows to replace legacy manual reporting, increasing data reliability across the sustainment enterprise.',
    ],
  },
  {
    slug: 'operations-analyst-iii',
    title: 'Operations Analyst III',
    program: 'F-35 · Supply Optimization & Logistics',
    period: '2024 – 2026',
    bullets: [
      'Developed an inventory optimization algorithm that identified part surpluses and deficiencies, significantly reducing costs while maintaining operational demand for all F-35 participants.',
      'Leveraged flight-hour and deployment configuration data to forecast part requirements, aligning global supply chain assets with warfighter mission needs.',
      'Built and documented SOPs on Confluence to standardize analytical workflows across the team.',
    ],
  },
  {
    slug: 'systems-engineer-iii',
    title: 'Systems Engineer III',
    program: 'F-16 · Diminished Manufacturing Sources',
    period: '2023 – 2024',
    bullets: [
      'Managed Diminished Manufacturing Sources (DMS) risk, proactively identifying hardware gaps to ensure uninterrupted global production and sustainment.',
      'Collaborated with cross-functional teams to engineer technical solutions and evaluate alternative components, mitigating critical supply disruptions.',
    ],
  },
  {
    slug: 'data-analyst-ii',
    title: 'Data Analyst II',
    program: 'F-35 · Quality & Mission Success',
    period: '2022 – 2023',
    bullets: [
      'Delivered end-to-end digital solutions across F-35 and C-130 production lines using Python, SQL, Alteryx, and Tableau.',
      'Developed interactive Tableau dashboards to track production quality defects by build area, enabling leadership to identify top failure drivers.',
      'Built performance monitoring tools to evaluate inspection hours against output, improving labor and resource allocation accuracy.',
    ],
  },
  {
    slug: 'project-management-operations-i',
    title: 'Project Management & Operations I',
    program: 'F-16 · Upgrades & Modifications',
    period: '2021 – 2022',
    bullets: [
      'Automated EVMS reporting and tool development for contract bidding and project performance tracking within F-16 and AMMM portfolios.',
    ],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="section-pad bg-surface/20">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-16">
            <span className="font-mono text-accent text-sm">02.</span>
            <h2 className="text-3xl font-bold text-white">Experience</h2>
            <div className="flex-1 h-px bg-rim" />
          </div>

          <div className="relative">
            <div className="absolute left-3 top-0 bottom-0 w-px bg-rim" />

            <div className="space-y-10">
              {jobs.map((job, i) => (
                <motion.div
                  key={job.period}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="relative pl-12"
                >
                  <div className="absolute left-0 top-2 w-7 h-7 rounded-full bg-elevated border-2 border-accent flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  </div>

                  <div className="bg-surface border border-rim rounded-lg p-6 hover:border-rim-bright transition-colors card-glow">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div>
                        <h3 className="text-white font-semibold text-lg leading-tight">{job.title}</h3>
                        <p className="font-mono text-accent text-sm mt-0.5">{job.program}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Image
                            src="/lockheed-logo.png"
                            alt="Lockheed Martin"
                            width={80}
                            height={16}
                            className="opacity-60 object-contain"
                          />
                        </div>
                      </div>
                      <span className="font-mono text-xs text-slate-500 bg-elevated px-3 py-1 rounded border border-rim whitespace-nowrap">
                        {job.period}
                      </span>
                    </div>
                    <ul className="space-y-2 mb-5">
                      {job.bullets.map((b, j) => (
                        <li key={j} className="flex gap-3 text-slate-400 text-sm leading-relaxed">
                          <span className="text-accent mt-1 flex-shrink-0">▹</span>
                          {b}
                        </li>
                      ))}
                    </ul>

                    {/* Story button */}
                    <motion.div
                      whileHover={{ scale: 1.06 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      className="inline-block"
                    >
                      <Link
                        href={`/experience/${job.slug}`}
                        className="inline-flex items-center gap-2 font-mono text-xs text-accent border border-accent/40 hover:border-accent hover:bg-accent/10 px-4 py-2 rounded transition-colors duration-200"
                      >
                        Read My Story <span aria-hidden>→</span>
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

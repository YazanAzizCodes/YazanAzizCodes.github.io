'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const certs = [
  {
    name: 'Active Secret Security Clearance',
    issuer: 'U.S. Government',
    description: 'Federal adjudication granting access to classified national security information. Requires an extensive background investigation covering personal history, finances, foreign contacts, and character.',
  },
  {
    name: 'Tableau Desktop Specialist',
    issuer: 'Tableau',
    description: 'Validates proficiency in connecting to data sources, building visualizations, and creating interactive dashboards in Tableau. Requires knowledge of chart types, filters, calculations, and data blending.',
  },
  {
    name: 'Six Sigma Green Belt',
    issuer: 'IISE',
    description: 'Demonstrates expertise in process improvement using the DMAIC framework. Requires knowledge of statistical analysis, root cause identification, and quality control methods to reduce defects and inefficiencies.',
  },
  {
    name: 'Program Performance Management (PPM) 101',
    issuer: 'Lockheed Martin',
    description: 'Internal certification covering Earned Value Management (EVM), contract performance tracking, cost/schedule variance analysis, and reporting standards used across defense acquisition programs.',
  },
  {
    name: 'AI Fundamental Skills Badge',
    issuer: 'Lockheed Martin',
    description: 'Recognizes foundational understanding of artificial intelligence concepts including machine learning, model evaluation, responsible AI principles, and applied use cases in aerospace and defense.',
  },
  {
    name: 'Google Data Analytics',
    issuer: 'Google / Coursera',
    description: 'Covers the full data analysis lifecycle: asking the right questions, preparing and processing data, analyzing with spreadsheets and SQL, visualizing findings, and communicating insights to stakeholders.',
  },
  {
    name: 'MOS Excel 2016 Expert (77-728)',
    issuer: 'Microsoft',
    description: 'Microsoft Office Specialist certification validating advanced Excel skills including complex formulas, PivotTables, data modeling, Power Query, macros, and workbook management at an expert level.',
  },
  {
    name: 'SQL Fundamentals',
    issuer: 'DataCamp',
    description: 'Covers core SQL concepts including SELECT queries, filtering, aggregation, JOIN operations, subqueries, and database structure — foundational skills for querying and managing relational databases.',
  },
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
              className="p-5 rounded-lg border bg-surface border-rim hover:border-rim-bright hover:-translate-y-1 transition-all duration-200 flex flex-col gap-2"
            >
              <p className="font-medium text-sm leading-snug text-slate-200">{cert.name}</p>
              <p className="font-mono text-xs text-accent">{cert.issuer}</p>
              <p className="text-xs text-slate-500 leading-relaxed">{cert.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const navLinks = [
  { href: '/#about', label: 'About' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#certifications', label: 'Certifications' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-bg/90 backdrop-blur-md border-b border-rim' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="font-mono text-xl font-bold text-highlight tracking-widest">
          YA<span className="text-accent">.</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-400 hover:text-highlight transition-colors tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/Yazan_Aziz_Resume.pdf"
            download
            className="px-4 py-1.5 text-sm border border-accent text-accent rounded hover:bg-accent hover:text-white transition-all duration-200"
          >
            Resume
          </a>
        </div>

        <button
          className="md:hidden text-slate-400 hover:text-highlight"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          style={{ overflow: 'hidden' }}
          className="md:hidden bg-surface border-b border-rim px-6 py-4 flex flex-col gap-1"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-3 text-slate-400 hover:text-highlight transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/Yazan_Aziz_Resume.pdf"
            download
            onClick={() => setOpen(false)}
            className="mt-2 text-accent border border-accent px-4 py-3 rounded text-center hover:bg-accent hover:text-white transition-all"
          >
            Resume
          </a>
        </motion.div>
      )}
    </motion.nav>
  )
}

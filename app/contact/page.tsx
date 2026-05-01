'use client'

import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import Link from 'next/link'

const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'

const contacts = [
  {
    label: 'LinkedIn',
    handle: 'linkedin.com/in/yazanaziz',
    href: 'https://linkedin.com/in/yazanaziz',
    svg: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    handle: 'github.com/YazanAzizCodes',
    href: 'https://github.com/YazanAzizCodes',
    svg: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    handle: 'YazanForHire@gmail.com',
    href: 'mailto:YazanForHire@gmail.com',
    svg: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
]

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<Status>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formRef.current) return
    setStatus('sending')
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      formRef.current.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <main className="min-h-screen px-6 py-32">
      <div className="max-w-5xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-sm text-slate-500 hover:text-accent mb-14 transition-colors"
        >
          ← Back
        </Link>

        <div className="grid md:grid-cols-2 gap-16">

          {/* Left — intro + socials */}
          <div>
            <p className="font-mono text-accent text-sm tracking-widest uppercase mb-3">Get In Touch</p>
            <h1 className="text-4xl font-bold text-white mb-5 leading-tight">
              Let&apos;s <span className="text-gradient">Connect</span>
            </h1>
            <p className="text-slate-400 leading-relaxed mb-10">
              Open to connecting with data professionals, defense industry peers, and
              opportunities in advanced analytics and technical leadership. Fill out the
              form and I&apos;ll get back to you as soon as I can.
            </p>

            <div className="space-y-3">
              {contacts.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.label !== 'Email' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-surface border border-rim rounded-lg hover:border-rim-bright transition-all duration-200 group"
                >
                  <div className="text-accent group-hover:text-highlight transition-colors">
                    {c.svg}
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">{c.label}</p>
                    <p className="text-slate-500 text-xs">{c.handle}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div>
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-10 bg-surface border border-rim rounded-xl">
                <div className="w-14 h-14 rounded-full bg-accent/10 border border-accent flex items-center justify-center mb-5">
                  <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-white font-semibold text-xl mb-2">Message Sent</h2>
                <p className="text-slate-400 text-sm mb-6">Thanks for reaching out. I&apos;ll get back to you soon.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="font-mono text-xs text-accent hover:text-highlight transition-colors"
                >
                  Send another message →
                </button>
              </div>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-5 p-8 bg-surface border border-rim rounded-xl"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-mono text-xs text-slate-500 uppercase tracking-widest mb-2">
                      Name <span className="text-accent">*</span>
                    </label>
                    <input
                      name="from_name"
                      type="text"
                      required
                      placeholder="Jane Smith"
                      className="w-full bg-elevated border border-rim rounded-lg px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-xs text-slate-500 uppercase tracking-widest mb-2">
                      Email <span className="text-accent">*</span>
                    </label>
                    <input
                      name="from_email"
                      type="email"
                      required
                      placeholder="jane@example.com"
                      className="w-full bg-elevated border border-rim rounded-lg px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-xs text-slate-500 uppercase tracking-widest mb-2">
                    Phone <span className="text-slate-700">(optional)</span>
                  </label>
                  <input
                    name="from_phone"
                    type="tel"
                    placeholder="(555) 000-0000"
                    className="w-full bg-elevated border border-rim rounded-lg px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs text-slate-500 uppercase tracking-widest mb-2">
                    Message <span className="text-accent">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="What's on your mind?"
                    className="w-full bg-elevated border border-rim rounded-lg px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-accent transition-colors resize-none"
                  />
                </div>

                {status === 'error' && (
                  <p className="text-red-400 text-xs font-mono">
                    Something went wrong. Please try emailing me directly at YazanForHire@gmail.com.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full py-3 bg-accent hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-all duration-200 shadow-lg shadow-accent/20"
                >
                  {status === 'sending' ? 'Sending…' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </main>
  )
}

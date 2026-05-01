'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import type { Post } from '@/lib/blog'

export default function BlogPreview({ posts }: { posts: Post[] }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="blog" className="section-pad bg-surface/40">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-16">
            <span className="font-mono text-accent text-sm">04.</span>
            <h2 className="text-3xl font-bold text-white">Blog</h2>
            <div className="flex-1 h-px bg-rim" />
          </div>

          {posts.length === 0 ? (
            <p className="text-slate-500 text-center py-16 font-mono text-sm">Posts coming soon.</p>
          ) : (
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {posts.map((post, i) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    className="flex flex-col h-full p-6 bg-surface border border-rim rounded-lg hover:border-rim-bright hover:-translate-y-1 transition-all duration-200 group"
                  >
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span key={tag} className="font-mono text-xs text-accent bg-accent/10 px-2 py-0.5 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-white font-semibold mb-3 group-hover:text-highlight transition-colors leading-snug flex-1">
                      {post.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                    <time className="font-mono text-xs text-slate-600">{post.date}</time>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}

          <div className="text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 font-mono text-sm text-accent hover:text-highlight transition-colors"
            >
              View all posts <span aria-hidden>→</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

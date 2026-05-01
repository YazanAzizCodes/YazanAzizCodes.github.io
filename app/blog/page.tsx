import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Yazan Aziz',
  description: 'Writing on data analytics, defense technology, and engineering leadership.',
}

const topics = [
  'Data Analytics',
  'Defense Technology',
  'Supply Chain',
  'Engineering Leadership',
  'Python & SQL',
  'Predictive Modeling',
]

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <main className="max-w-3xl mx-auto px-6 pt-32 pb-24">

      {/* Header */}
      <div className="mb-16">
        <p className="font-mono text-accent text-sm tracking-widest uppercase mb-4">Writing</p>
        <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
          Thoughts &amp; <span className="text-gradient">Insights</span>
        </h1>
        <p className="text-slate-300 text-lg leading-relaxed mb-8">
          I write about the intersection of data engineering, operational decision-making,
          and technical leadership — drawing from five years of building analytical
          systems for the F-35 and F-16 programs at Lockheed Martin.
        </p>
        <p className="text-slate-500 text-sm leading-relaxed mb-8">
          These are problems that don&apos;t have clean textbook answers. I try to write
          about what actually works, what doesn&apos;t, and why.
        </p>

        {/* Topics */}
        <div className="flex flex-wrap gap-2">
          {topics.map((topic) => (
            <span
              key={topic}
              className="font-mono text-xs text-slate-400 bg-elevated border border-rim px-3 py-1 rounded-full"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>

      <div className="h-px bg-rim mb-12" />

      {/* Post count */}
      <p className="font-mono text-xs text-slate-600 uppercase tracking-widest mb-8">
        {posts.length} {posts.length === 1 ? 'post' : 'posts'}
      </p>

      {/* Posts */}
      {posts.length === 0 ? (
        <p className="text-slate-500 text-center py-20 font-mono text-sm">Posts coming soon.</p>
      ) : (
        <div className="space-y-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block p-7 border border-rim rounded-xl hover:border-rim-bright hover:-translate-y-0.5 transition-all duration-200 group bg-surface"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="font-mono text-xs text-accent bg-accent/10 px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <time className="font-mono text-xs text-slate-600 flex-shrink-0 ml-4">{post.date}</time>
              </div>
              <h2 className="text-xl font-semibold text-white mb-3 group-hover:text-highlight transition-colors leading-snug">
                {post.title}
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{post.excerpt}</p>
              <span className="font-mono text-xs text-accent group-hover:text-highlight transition-colors">
                Read more →
              </span>
            </Link>
          ))}
        </div>
      )}
    </main>
  )
}

import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Yazan Aziz',
  description: 'Thoughts on data analytics, defense technology, and engineering leadership.',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <main className="max-w-3xl mx-auto px-6 pt-32 pb-24">
      <div className="mb-16">
        <p className="font-mono text-accent text-sm tracking-widest uppercase mb-3">Writing</p>
        <h1 className="text-4xl font-bold text-white mb-4">Blog</h1>
        <p className="text-slate-400 text-sm">
          Thoughts on data analytics, defense technology, and engineering leadership.
        </p>
      </div>

      {posts.length === 0 ? (
        <p className="text-slate-500 text-center py-20 font-mono text-sm">Posts coming soon.</p>
      ) : (
        <div className="space-y-5">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block p-6 border border-rim rounded-lg hover:border-rim-bright hover:-translate-y-0.5 transition-all duration-200 group bg-surface"
            >
              <div className="flex flex-wrap gap-2 mb-3">
                {post.tags.map((tag) => (
                  <span key={tag} className="font-mono text-xs text-accent bg-accent/10 px-2 py-0.5 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="text-lg font-semibold text-white mb-2 group-hover:text-highlight transition-colors">
                {post.title}
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{post.excerpt}</p>
              <time className="font-mono text-xs text-slate-600">{post.date}</time>
            </Link>
          ))}
        </div>
      )}
    </main>
  )
}

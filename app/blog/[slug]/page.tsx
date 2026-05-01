import { notFound } from 'next/navigation'
import { getAllPosts, getPostBySlug } from '@/lib/blog'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Link from 'next/link'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return {
    title: `${post.title} | Yazan Aziz`,
    description: post.excerpt,
  }
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  return (
    <main className="max-w-3xl mx-auto px-6 pt-32 pb-24">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 font-mono text-sm text-slate-500 hover:text-accent mb-12 transition-colors"
      >
        ← Back to Blog
      </Link>

      <div className="mb-10">
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <span key={tag} className="font-mono text-xs text-accent bg-accent/10 px-2 py-0.5 rounded">
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">{post.title}</h1>
        <time className="font-mono text-sm text-slate-500">{post.date}</time>
      </div>

      <article className="prose prose-invert prose-blue max-w-none prose-headings:font-bold prose-a:text-accent prose-code:text-highlight prose-code:bg-elevated prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:bg-surface prose-pre:border prose-pre:border-rim">
        <MDXRemote source={post.content} />
      </article>
    </main>
  )
}

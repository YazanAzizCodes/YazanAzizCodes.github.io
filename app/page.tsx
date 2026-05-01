import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Certifications from '@/components/Certifications'
import BlogPreview from '@/components/BlogPreview'
import Footer from '@/components/Footer'
import { getAllPosts } from '@/lib/blog'

export default function Home() {
  const posts = getAllPosts().slice(0, 3)
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Certifications />
      <BlogPreview posts={posts} />
      <Footer />
    </main>
  )
}

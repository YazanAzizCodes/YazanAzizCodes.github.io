import { notFound } from 'next/navigation'
import { experiences, getExperience } from '@/lib/experience'
import ExperienceStoryClient from './ExperienceStoryClient'

export function generateStaticParams() {
  return experiences.map((e) => ({ slug: e.slug }))
}

export default async function ExperienceStoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const exp = getExperience(slug)
  if (!exp) notFound()
  return <ExperienceStoryClient exp={exp} />
}

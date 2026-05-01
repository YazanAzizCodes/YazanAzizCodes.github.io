import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' })

export const metadata: Metadata = {
  title: 'Yazan Aziz | Data Analyst & Technical Lead',
  description:
    'Technical Lead and Data Analyst at Lockheed Martin. Specializing in predictive modeling, supply chain optimization, and defense analytics for the F-35 program.',
  keywords: ['Yazan Aziz', 'Data Analyst', 'Lockheed Martin', 'F-35', 'Supply Chain', 'Predictive Analytics'],
  authors: [{ name: 'Yazan Aziz' }],
  openGraph: {
    title: 'Yazan Aziz | Data Analyst & Technical Lead',
    description: 'Technical Lead and Data Analyst at Lockheed Martin specializing in defense analytics.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body className="bg-bg text-slate-100 font-sans antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  )
}

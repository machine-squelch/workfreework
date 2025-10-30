import { Metadata } from 'next'
import Link from 'next/link'
import EmailCapture from '@/components/EmailCapture'

export const metadata: Metadata = {
  title: 'Essays - WorkFreeWork',
  description: 'Sharp takes on automation, economics, policy, and the future of work. Stripped of MBA jargon and self-help fluff.',
  openGraph: {
    title: 'Essays - WorkFreeWork',
    description: 'Sharp takes on automation, economics, policy, and the future of work. Stripped of MBA jargon and self-help fluff.',
    url: 'https://workfreework.com/essays',
    images: ['/wfw-logo-rwb.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Essays - WorkFreeWork',
    description: 'Sharp takes on automation, economics, policy, and the future of work.',
  },
}

// Sample essay data - replace with CMS or markdown files in production
const essays = [
  {
    slug: 'ai-didnt-take-your-job',
    title: 'AI Didn\'t Take Your Job — Obsolescence Did',
    excerpt: 'Why blaming technology misses the point, and what really happened to work.',
    date: '2025-03-15',
    readTime: '8 min read',
    category: 'Economics',
  },
  {
    slug: 'automation-is-a-human-right',
    title: 'Automation Is a Human Right',
    excerpt: 'The moral case for letting machines do the boring stuff.',
    date: '2025-03-08',
    readTime: '6 min read',
    category: 'Policy',
  },
  {
    slug: 'work-is-a-19th-century-patch',
    title: 'Work Is a 19th-Century Patch (And It’s Starting to Peel)',
    excerpt: 'Stop patching the 1800s model. Start upgrading to human-first work.',
    date: '2025-03-01',
    readTime: '7 min read',
    category: 'Manifesto',
  },
  {
    slug: 'quit-capitalism',
    title: 'So… You Want to Quit Capitalism?',
    excerpt: 'A practical guide to opting out without moving to a commune.',
    date: '2025-02-22',
    readTime: '12 min read',
    category: 'Manifesto',
  },
  {
    slug: 'ubi-experiments-that-worked',
    title: 'UBI Pilots That Worked (And the Ones That Didn\'t)',
    excerpt: 'Real data from universal basic income experiments around the world.',
    date: '2025-02-15',
    readTime: '15 min read',
    category: 'Policy',
  },
  {
    slug: 'automation-audit-case-study',
    title: 'How One Office Manager Automated 60% of Weekly Tasks',
    excerpt: 'Real tools, real workflows, and the exact setup that freed 24 hours per week.',
    date: '2025-02-08',
    readTime: '9 min read',
    category: 'Case Study',
  },
]

export default function EssaysPage() {
  return (
    <div className="bg-gray-800 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Essays & Dispatches
          </h1>
          <p className="text-2xl text-gray-700 mb-8">
            Sharp takes on automation, economics, policy, and the future of work.
          </p>
          <p className="text-lg text-gray-400">
            Stripped of MBA jargon and self-help fluff.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-3">
            <button className="px-4 py-2 bg-black text-black rounded-md font-semibold">
              All Essays
            </button>
            <button className="px-4 py-2 bg-gray-900 text-gray-700 rounded-md hover:bg-gray-100">
              Economics
            </button>
            <button className="px-4 py-2 bg-gray-900 text-gray-700 rounded-md hover:bg-gray-100">
              Policy
            </button>
            <button className="px-4 py-2 bg-gray-900 text-gray-700 rounded-md hover:bg-gray-100">
              Case Studies
            </button>
            <button className="px-4 py-2 bg-gray-900 text-gray-700 rounded-md hover:bg-gray-100">
              Manifesto
            </button>
          </div>
        </div>

        {/* Essays Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {essays.map((essay) => (
            <Link 
              key={essay.slug} 
              href={`/essays/${essay.slug}`}
              className="group"
            >
              <article className="bg-gray-900 p-8 rounded-lg shadow-sm hover:shadow-lg transition-all h-full border border-gray-700">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-black">
                    {essay.category}
                  </span>
                  <span className="text-sm text-gray-500">{essay.readTime}</span>
                </div>
                
                <h2 className="text-2xl font-bold mb-3 group-hover:text-black transition-colors">
                  {essay.title}
                </h2>
                
                <p className="text-gray-400 mb-4">
                  {essay.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {new Date(essay.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </span>
                  <span className="text-black font-semibold group-hover:text-black">
                    Read →
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mb-16">
          <button className="bg-black text-white px-8 py-3 rounded-md font-semibold hover:bg-black hover:text-black transition-all btn-glitch">
            Load More Essays
          </button>
        </div>

        {/* Newsletter CTA */}
        <section className="bg-black p-12 rounded-lg text-center">
          <h2 className="text-4xl font-bold mb-4 text-black">
            Get New Essays in Your Inbox
          </h2>
          <p className="text-lg text-black mb-8">
            One thoughtful essay per week. No spam, no fluff.
          </p>
          <EmailCapture 
            buttonText="Subscribe"
            className="max-w-lg mx-auto"
          />
        </section>
      </div>
    </div>
  )
}


/**
 * Copyright (c) 2025 Thinkazoo LLC
 * 
 * This source code is licensed under the MIT license found in the LICENSE file.
 */

import { Metadata } from 'next'
import Link from 'next/link'
import EmailCapture from '@/components/EmailCapture'

export const metadata: Metadata = {
  title: 'Essays & Dispatches - Turn CEO',
  description: 'Sharp takes on automation, economics, policy, and the future of work. Stripped of MBA jargon and self-help fluff.',
  openGraph: {
    title: 'Essays & Dispatches - Turn CEO',
    description: 'Sharp takes on automation, economics, policy, and the future of work. Stripped of MBA jargon and self-help fluff.',
    url: 'https://turnceo.com/automatic-cash-machine/essays',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Essays & Dispatches - Turn CEO',
    description: 'Sharp takes on automation, economics, policy, and the future of work.',
  },
}

// Essay data - part of the $47 Automatic Cash Machine
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
    title: 'Work Is a 19th-Century Patch (And It\'s Starting to Peel)',
    excerpt: 'Stop patching the 1800s model. Start upgrading to human-first work.',
    date: '2025-03-01',
    readTime: '7 min read',
    category: 'Manifesto',
  },
  {
    slug: 'the-great-content-correction',
    title: 'The Great Content Correction of 2025',
    excerpt: 'The AI writing gold rush is over. Welcome to October. The correction is here, and it is brutal.',
    date: '2025-10-15',
    readTime: '7 min read',
    category: 'Economics',
  },
  {
    slug: 'boring-product-descriptions-still-pay',
    title: 'Why Boring Product Descriptions Are Still Paying the Bills',
    excerpt: 'While everyone was trying to become a "prompt engineer," a quiet, unglamorous job just kept printing money.',
    date: '2025-10-14',
    readTime: '6 min read',
    category: 'Case Study',
  },
  {
    slug: 'peace-of-mind-retainer',
    title: 'Stop Selling "Social Media." Start Selling Peace of Mind.',
    excerpt: 'Almost every small business owner hates social media. They\'ll happily pay you $1,500 a month to never think about it again.',
    date: '2025-10-13',
    readTime: '5 min read',
    category: 'Case Study',
  },
  {
    slug: 'automated-recurring-revenue',
    title: 'The Automated Retainer Hiding in Plain Sight',
    excerpt: 'What\'s the one thing business owners hate more than posting on social media? Writing their weekly newsletter.',
    date: '2025-10-12',
    readTime: '7 min read',
    category: 'Economics',
  },
  {
    slug: 'pod-isnt-art-its-an-asset-library',
    title: 'POD Isn\'t Art. It\'s an Asset Library.',
    excerpt: 'You don\'t need to be an artist to sell art anymore. The people making real money aren\'t "artists"; they\'re curators.',
    date: '2025-10-11',
    readTime: '8 min read',
    category: 'Manifesto',
  },
  {
    slug: 'prompt-packs-are-dead',
    title: 'Prompt Packs Are Dead. AI Consulting Is Booming.',
    excerpt: 'The "Prompt Pack" gold rush of 2024 is dead. But the problem is bigger than ever—and that\'s your opportunity.',
    date: '2025-10-10',
    readTime: '6 min read',
    category: 'Economics',
  },
  {
    slug: 'amazon-is-a-dumpster-fire',
    title: 'Amazon KDP Is a Dumpster Fire. Good.',
    excerpt: 'Amazon\'s Kindle Direct Publishing platform is choked with garbage. That\'s the best possible news for you.',
    date: '2025-10-09',
    readTime: '8 min read',
    category: 'Manifesto',
  },
  {
    slug: 'stop-being-an-influencer-be-a-producer',
    title: 'Stop Being an "Influencer." Be a Producer.',
    excerpt: 'The "faceless YouTube channel" dream failed for 90% of creators. For the smart operator, the game is just beginning.',
    date: '2025-10-08',
    readTime: '9 min read',
    category: 'Case Study',
  },
]

export default function EssaysPage() {
  return (
    <div className="bg-gray-900 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="mb-16">
          <Link 
            href="/automatic-cash-machine"
            className="text-gray-400 hover:text-white mb-6 inline-block text-sm"
          >
            ← Back to Automatic Cash Machine
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white neon-text-strong">
            Essays & Dispatches
          </h1>
          <p className="text-2xl text-gray-300 mb-8">
            Sharp takes on automation, economics, policy, and the future of work.
          </p>
          <p className="text-lg text-gray-400">
            Stripped of MBA jargon and self-help fluff. Part of the $47 Automatic Cash Machine.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-3">
            <button className="px-4 py-2 bg-gray-800 text-white rounded-md font-semibold border border-white/30">
              All Essays
            </button>
            <button className="px-4 py-2 bg-gray-800 text-gray-300 rounded-md hover:bg-gray-700 border border-gray-700">
              Economics
            </button>
            <button className="px-4 py-2 bg-gray-800 text-gray-300 rounded-md hover:bg-gray-700 border border-gray-700">
              Policy
            </button>
            <button className="px-4 py-2 bg-gray-800 text-gray-300 rounded-md hover:bg-gray-700 border border-gray-700">
              Case Studies
            </button>
            <button className="px-4 py-2 bg-gray-800 text-gray-300 rounded-md hover:bg-gray-700 border border-gray-700">
              Manifesto
            </button>
          </div>
        </div>

        {/* Essays Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {essays.map((essay) => (
            <Link 
              key={essay.slug} 
              href={`/automatic-cash-machine/essays/${essay.slug}`}
              className="group"
            >
              <article className="bg-gray-800 p-8 rounded-lg shadow-sm hover:shadow-lg transition-all h-full neon-card-orange relative">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-gray-300">
                    {essay.category}
                  </span>
                  <span className="text-sm text-gray-500">{essay.readTime}</span>
                </div>
                
                <h2 className="text-2xl font-bold mb-3 text-white">
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
                  <span className="text-gray-300 font-semibold">
                    Read →
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mb-16">
          <button className="btn-glass btn-glass--neon">
            Load More Essays
          </button>
        </div>

        {/* Newsletter CTA */}
        <section className="bg-black p-12 rounded-lg text-center neon-card-orange">
          <h2 className="text-4xl font-bold mb-4 text-white">
            Get New Essays in Your Inbox
          </h2>
          <p className="text-lg text-gray-300 mb-8">
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


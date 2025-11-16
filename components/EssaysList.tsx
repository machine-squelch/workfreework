'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'

export type Essay = {
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
}

const filters = ['All Essays', 'Economics', 'Policy', 'Case Studies', 'Manifesto']

type EssaysListProps = {
  essays: Essay[]
}

export default function EssaysList({ essays }: EssaysListProps) {
  const [activeFilter, setActiveFilter] = useState<string>('All Essays')

  const filteredEssays = useMemo(() => {
    if (activeFilter === 'All Essays') return essays
    return essays.filter((essay) => {
      if (activeFilter === 'Case Studies') {
        return essay.category.toLowerCase().includes('case')
      }
      return essay.category.toLowerCase() === activeFilter.toLowerCase()
    })
  }, [activeFilter, essays])

  return (
    <>
      <div className="mb-12">
        <div className="flex flex-wrap gap-3">
          {filters.map((filter) => {
            const isActive = activeFilter === filter
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-md px-4 py-2 text-sm font-semibold transition ${
                  isActive
                    ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.7)]'
                    : 'bg-gray-900 text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {filter}
              </button>
            )
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {filteredEssays.map((essay) => (
          <Link key={essay.slug} href={`/essays/${essay.slug}`} className="group">
            <article className="bg-gray-900 p-8 rounded-lg shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300 h-full border-4 border-orange-500 neon-border--orange neon-backglow--orange relative group">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-semibold text-gray-300">
                  {essay.category}
                </span>
                <span className="text-sm text-gray-500">{essay.readTime}</span>
              </div>

              <h2 className="text-2xl font-bold mb-3 text-white">{essay.title}</h2>

              <p className="text-gray-400 mb-4">{essay.excerpt}</p>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  {new Date(essay.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
                <span className="text-gray-300 font-semibold">Read →</span>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </>
  )
}

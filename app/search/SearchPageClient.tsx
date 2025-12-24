'use client'

import { useState } from 'react'
import {
  InstantSearch,
  SearchBox,
  Hits,
  Pagination,
  Stats,
  Configure,
  Index,
  SortBy,
} from 'react-instantsearch'
import { searchClient, ALGOLIA_INDICES } from '@/lib/algolia/config'
import { SearchHit } from '@/components/search/SearchHit'
import { SearchFilters } from '@/components/search/SearchFilters'
import { useRouter } from 'next/navigation'

export function SearchPageClient() {
  const router = useRouter()
  const [activeIndex, setActiveIndex] = useState<'essays' | 'tools' | 'playbook'>('essays')

  const handleHitClick = (url: string) => {
    router.push(url)
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Search
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Find essays, tools, and playbook content
          </p>
        </div>

        <InstantSearch
          searchClient={searchClient}
          indexName={ALGOLIA_INDICES[activeIndex.toUpperCase() as keyof typeof ALGOLIA_INDICES]}
        >
          <Configure hitsPerPage={20} />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            {/* Sidebar - Filters */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                <SearchFilters />
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Search Box */}
              <div className="mb-6">
                <SearchBox
                  placeholder="Search..."
                  autoFocus
                  classNames={{
                    root: '',
                    form: 'relative',
                    input:
                      'w-full rounded-lg border border-gray-300 bg-white px-4 py-3 pl-11 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white',
                    submit: 'absolute left-3 top-1/2 -translate-y-1/2',
                    submitIcon: 'h-5 w-5 text-gray-400',
                    reset: 'absolute right-3 top-1/2 -translate-y-1/2',
                    resetIcon: 'h-5 w-5 text-gray-400',
                  }}
                />
              </div>

              {/* Index Tabs */}
              <div className="mb-6 flex gap-2 border-b border-gray-200 dark:border-gray-700">
                {(['essays', 'tools', 'playbook'] as const).map((index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`border-b-2 px-4 py-2 text-sm font-medium capitalize transition-colors ${
                      activeIndex === index
                        ? 'border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400'
                        : 'border-transparent text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300'
                    }`}
                  >
                    {index}
                  </button>
                ))}
              </div>

              {/* Stats and Sort */}
              <div className="mb-4 flex items-center justify-between">
                <Stats
                  classNames={{
                    root: 'text-sm text-gray-600 dark:text-gray-400',
                  }}
                />

                {activeIndex === 'essays' && (
                  <SortBy
                    items={[
                      { label: 'Most Recent', value: 'essays' },
                      { label: 'Most Viewed', value: 'essays_views_desc' },
                    ]}
                    classNames={{
                      root: '',
                      select:
                        'rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white',
                    }}
                  />
                )}
              </div>

              {/* Results */}
              <div className="space-y-4">
                <Index indexName={ALGOLIA_INDICES[activeIndex.toUpperCase() as keyof typeof ALGOLIA_INDICES]}>
                  <Hits
                    hitComponent={({ hit }) => (
                      <SearchHit hit={hit} onClick={() => handleHitClick(hit.url)} />
                    )}
                    classNames={{
                      root: '',
                      list: 'space-y-4',
                      item: '',
                    }}
                  />

                  {/* Pagination */}
                  <div className="mt-8">
                    <Pagination
                      classNames={{
                        root: 'flex justify-center',
                        list: 'flex gap-2',
                        item: '',
                        link: 'rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700',
                        selectedItem: '',
                        disabledItem: 'opacity-50 cursor-not-allowed',
                      }}
                    />
                  </div>
                </Index>
              </div>
            </div>
          </div>
        </InstantSearch>
      </div>
    </div>
  )
}

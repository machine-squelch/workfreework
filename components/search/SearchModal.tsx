'use client'

import { useEffect, useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { InstantSearch, SearchBox, Hits, Configure, Index } from 'react-instantsearch'
import { searchClient, ALGOLIA_INDICES } from '@/lib/algolia/config'
import { SearchHit } from './SearchHit'
import { SearchFilters } from './SearchFilters'

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const router = useRouter()
  const [query, setQuery] = useState('')

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  const handleHitClick = useCallback((url: string) => {
    router.push(url)
    onClose()
  }, [router, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="flex min-h-full items-start justify-center p-4 sm:p-6 md:p-20">
        <div className="relative w-full max-w-3xl transform rounded-xl bg-white shadow-2xl transition-all dark:bg-gray-900">
          <InstantSearch searchClient={searchClient} indexName={ALGOLIA_INDICES.ESSAYS}>
            <Configure hitsPerPage={5} />

            {/* Search Input */}
            <div className="border-b border-gray-200 dark:border-gray-700">
              <SearchBox
                placeholder="Search essays, tools, and playbook..."
                autoFocus
                classNames={{
                  root: 'p-4',
                  form: 'relative',
                  input:
                    'w-full rounded-lg border-0 bg-transparent pl-11 pr-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 dark:text-white sm:text-sm',
                  submit: 'absolute left-3 top-1/2 -translate-y-1/2',
                  submitIcon: 'h-5 w-5 text-gray-400',
                  reset: 'absolute right-3 top-1/2 -translate-y-1/2',
                  resetIcon: 'h-5 w-5 text-gray-400',
                }}
                onChange={(event) => setQuery(event.currentTarget.value)}
              />
            </div>

            {/* Results */}
            <div className="max-h-[60vh] overflow-y-auto p-4">
              {query && (
                <>
                  {/* Essays */}
                  <div className="mb-6">
                    <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                      Essays
                    </h3>
                    <Index indexName={ALGOLIA_INDICES.ESSAYS}>
                      <Hits
                        hitComponent={({ hit }) => (
                          <SearchHit hit={hit} onClick={() => handleHitClick(hit.url)} />
                        )}
                        classNames={{
                          root: 'space-y-2',
                          list: 'space-y-2',
                          item: '',
                        }}
                      />
                    </Index>
                  </div>

                  {/* Tools */}
                  <div className="mb-6">
                    <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                      Tools
                    </h3>
                    <Index indexName={ALGOLIA_INDICES.TOOLS}>
                      <Hits
                        hitComponent={({ hit }) => (
                          <SearchHit hit={hit} onClick={() => handleHitClick(hit.url)} />
                        )}
                        classNames={{
                          root: 'space-y-2',
                          list: 'space-y-2',
                          item: '',
                        }}
                      />
                    </Index>
                  </div>

                  {/* Playbook */}
                  <div>
                    <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                      Playbook
                    </h3>
                    <Index indexName={ALGOLIA_INDICES.PLAYBOOK}>
                      <Hits
                        hitComponent={({ hit }) => (
                          <SearchHit hit={hit} onClick={() => handleHitClick(hit.url)} />
                        )}
                        classNames={{
                          root: 'space-y-2',
                          list: 'space-y-2',
                          item: '',
                        }}
                      />
                    </Index>
                  </div>
                </>
              )}

              {!query && (
                <div className="py-12 text-center text-sm text-gray-500 dark:text-gray-400">
                  Start typing to search...
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between border-t border-gray-200 px-4 py-3 dark:border-gray-700">
              <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                <span>
                  <kbd className="rounded border border-gray-300 px-2 py-1 dark:border-gray-600">
                    ↑↓
                  </kbd>{' '}
                  Navigate
                </span>
                <span>
                  <kbd className="rounded border border-gray-300 px-2 py-1 dark:border-gray-600">
                    Enter
                  </kbd>{' '}
                  Select
                </span>
                <span>
                  <kbd className="rounded border border-gray-300 px-2 py-1 dark:border-gray-600">
                    Esc
                  </kbd>{' '}
                  Close
                </span>
              </div>
              <div className="text-xs text-gray-400">
                Powered by{' '}
                <a
                  href="https://www.algolia.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-600 dark:hover:text-gray-300"
                >
                  Algolia
                </a>
              </div>
            </div>
          </InstantSearch>
        </div>
      </div>
    </div>
  )
}

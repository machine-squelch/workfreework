'use client'

import { Highlight, Snippet } from 'react-instantsearch'

interface SearchHitProps {
  hit: any
  onClick: () => void
}

export function SearchHit({ hit, onClick }: SearchHitProps) {
  return (
    <button
      onClick={onClick}
      className="w-full rounded-lg border border-gray-200 p-4 text-left transition-colors hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800"
    >
      <div className="mb-1">
        <Highlight
          hit={hit}
          attribute="title"
          classNames={{
            root: 'text-sm font-semibold text-gray-900 dark:text-white',
            highlighted: 'bg-yellow-200 dark:bg-yellow-800',
          }}
        />
        {hit.name && (
          <Highlight
            hit={hit}
            attribute="name"
            classNames={{
              root: 'text-sm font-semibold text-gray-900 dark:text-white',
              highlighted: 'bg-yellow-200 dark:bg-yellow-800',
            }}
          />
        )}
      </div>

      {hit.excerpt && (
        <div className="mb-2 text-sm text-gray-600 dark:text-gray-400">
          <Highlight
            hit={hit}
            attribute="excerpt"
            classNames={{
              highlighted: 'bg-yellow-200 dark:bg-yellow-800',
            }}
          />
        </div>
      )}

      {hit.description && (
        <div className="mb-2 text-sm text-gray-600 dark:text-gray-400">
          <Highlight
            hit={hit}
            attribute="description"
            classNames={{
              highlighted: 'bg-yellow-200 dark:bg-yellow-800',
            }}
          />
        </div>
      )}

      {hit.content && (
        <div className="text-sm text-gray-500 dark:text-gray-500">
          <Snippet
            hit={hit}
            attribute="content"
            classNames={{
              highlighted: 'bg-yellow-200 dark:bg-yellow-800',
            }}
          />
        </div>
      )}

      {/* Tags */}
      {hit.tags && hit.tags.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-1">
          {hit.tags.slice(0, 3).map((tag: string) => (
            <span
              key={tag}
              className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600 dark:bg-gray-800 dark:text-gray-400"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Category */}
      {hit.category && (
        <div className="mt-2">
          <span className="rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-600 dark:bg-blue-900 dark:text-blue-400">
            {hit.category}
          </span>
        </div>
      )}
    </button>
  )
}

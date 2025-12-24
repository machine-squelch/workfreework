'use client'

import { RefinementList, ClearRefinements } from 'react-instantsearch'

export function SearchFilters() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="mb-3 text-sm font-semibold text-gray-900 dark:text-white">
          Filters
        </h3>
        <ClearRefinements
          classNames={{
            root: 'mb-4',
            button:
              'text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300',
            disabledButton: 'text-gray-400 cursor-not-allowed',
          }}
          translations={{
            resetButtonText: 'Clear all filters',
          }}
        />
      </div>

      {/* Tags Filter */}
      <div>
        <h4 className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
          Tags
        </h4>
        <RefinementList
          attribute="tags"
          limit={10}
          showMore
          showMoreLimit={20}
          classNames={{
            root: '',
            list: 'space-y-2',
            item: 'flex items-center',
            label: 'flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 cursor-pointer',
            checkbox:
              'h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-600',
            labelText: 'flex-1',
            count:
              'ml-auto rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600 dark:bg-gray-800 dark:text-gray-400',
            showMore:
              'mt-2 text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300',
          }}
        />
      </div>

      {/* Category Filter */}
      <div>
        <h4 className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
          Category
        </h4>
        <RefinementList
          attribute="category"
          classNames={{
            root: '',
            list: 'space-y-2',
            item: 'flex items-center',
            label: 'flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 cursor-pointer',
            checkbox:
              'h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-600',
            labelText: 'flex-1',
            count:
              'ml-auto rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600 dark:bg-gray-800 dark:text-gray-400',
          }}
        />
      </div>

      {/* Author Filter */}
      <div>
        <h4 className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
          Author
        </h4>
        <RefinementList
          attribute="author.name"
          classNames={{
            root: '',
            list: 'space-y-2',
            item: 'flex items-center',
            label: 'flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 cursor-pointer',
            checkbox:
              'h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-600',
            labelText: 'flex-1',
            count:
              'ml-auto rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600 dark:bg-gray-800 dark:text-gray-400',
          }}
        />
      </div>

      {/* Pricing Filter (for tools) */}
      <div>
        <h4 className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
          Pricing
        </h4>
        <RefinementList
          attribute="pricing"
          classNames={{
            root: '',
            list: 'space-y-2',
            item: 'flex items-center',
            label: 'flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 cursor-pointer',
            checkbox:
              'h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-600',
            labelText: 'flex-1 capitalize',
            count:
              'ml-auto rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600 dark:bg-gray-800 dark:text-gray-400',
          }}
        />
      </div>
    </div>
  )
}

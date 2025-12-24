'use client'

import { useState, useEffect } from 'react'
import { SearchModal } from './SearchModal'

export function SearchButton() {
  const [isOpen, setIsOpen] = useState(false)

  // Keyboard shortcut: Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setIsOpen(true)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-500 transition-colors hover:border-gray-400 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:border-gray-600 dark:hover:text-gray-300"
      >
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <span>Search...</span>
        <kbd className="ml-auto rounded border border-gray-300 px-2 py-0.5 text-xs dark:border-gray-600">
          {typeof navigator !== 'undefined' && navigator.platform.includes('Mac')
            ? '⌘K'
            : 'Ctrl+K'}
        </kbd>
      </button>

      <SearchModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}

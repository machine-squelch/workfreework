'use client'

import { useState } from 'react'

interface CodeBlockProps {
  code: string
  language: string
}

export default function CodeBlock({ code, language }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy code:', err)
    }
  }

  return (
    <div className="relative group">
      <div className="absolute top-3 right-3 z-10">
        <button
          onClick={handleCopy}
          className="px-3 py-1 text-xs font-semibold bg-gray-700 text-white hover:bg-gray-600 transition-all opacity-0 group-hover:opacity-100"
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <div className="p-4 bg-gray-900 border-2 border-gray-700 overflow-x-auto">
        <div className="text-xs text-gray-500 mb-2 uppercase">{language}</div>
        <pre className="text-sm text-gray-300">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  )
}

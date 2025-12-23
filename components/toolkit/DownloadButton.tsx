'use client'

import { useState } from 'react'

interface DownloadButtonProps {
  resourceId: string
  downloadUrl: string
  title: string
}

export default function DownloadButton({ resourceId, downloadUrl, title }: DownloadButtonProps) {
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownload = async () => {
    setIsDownloading(true)

    try {
      // Track download analytics
      await fetch('/api/toolkit/download', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          resourceId,
          title,
          timestamp: new Date().toISOString(),
        }),
      })

      // Open download URL
      window.open(downloadUrl, '_blank')
    } catch (error) {
      console.error('Download tracking failed:', error)
      // Still allow download even if tracking fails
      window.open(downloadUrl, '_blank')
    } finally {
      setIsDownloading(false)
    }
  }

  return (
    <button
      onClick={handleDownload}
      disabled={isDownloading}
      className="px-6 py-3 bg-white text-black font-bold hover:bg-gray-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {isDownloading ? 'Preparing Download...' : 'Download Now'}
    </button>
  )
}

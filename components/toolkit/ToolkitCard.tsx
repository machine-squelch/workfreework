'use client'

import Link from 'next/link'
import { ToolkitResource } from '@/lib/toolkit.schema'

interface ToolkitCardProps {
  resource: ToolkitResource
}

export default function ToolkitCard({ resource }: ToolkitCardProps) {
  const difficultyColors = {
    Beginner: 'bg-green-500',
    Intermediate: 'bg-yellow-500',
    Advanced: 'bg-red-500',
  }

  return (
    <Link
      href={`/toolkit/${resource.slug}`}
      className="block p-6 bg-gray-800 border-2 border-gray-700 hover:border-white transition-all group h-full flex flex-col"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex flex-col gap-2">
          <span className="px-3 py-1 text-xs font-semibold bg-white text-black w-fit">
            {resource.category}
          </span>
          <span className={`px-3 py-1 text-xs font-semibold text-white w-fit ${difficultyColors[resource.difficulty]}`}>
            {resource.difficulty}
          </span>
        </div>
        {resource.rating > 0 && (
          <div className="text-right">
            <div className="text-yellow-400 font-bold">★ {resource.rating.toFixed(1)}</div>
            <div className="text-xs text-gray-500">({resource.ratingCount})</div>
          </div>
        )}
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold mb-3 text-white group-hover:text-gray-300 transition-colors">
        {resource.title}
      </h3>

      {/* Description */}
      <p className="text-gray-400 text-sm mb-4 line-clamp-3 flex-grow">
        {resource.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {resource.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 text-xs bg-gray-900 text-gray-400 border border-gray-700"
          >
            #{tag}
          </span>
        ))}
        {resource.tags.length > 3 && (
          <span className="px-2 py-1 text-xs text-gray-500">
            +{resource.tags.length - 3} more
          </span>
        )}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-700">
        <span>{resource.author.name}</span>
        <span>{resource.downloads} downloads</span>
      </div>
    </Link>
  )
}

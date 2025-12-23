import Link from 'next/link'
import { getPublishedResources } from '@/lib/toolkit-data'

interface RelatedResourcesProps {
  resourceIds: string[]
}

export default function RelatedResources({ resourceIds }: RelatedResourcesProps) {
  const allResources = getPublishedResources()
  const relatedResources = allResources.filter((resource) =>
    resourceIds.includes(resource.id)
  )

  if (relatedResources.length === 0) {
    return null
  }

  return (
    <div>
      <h3 className="text-2xl font-bold mb-4 text-white">Related Resources</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {relatedResources.map((resource) => (
          <Link
            key={resource.id}
            href={`/toolkit/${resource.slug}`}
            className="block p-4 bg-gray-800 border-2 border-gray-700 hover:border-white transition-all group"
          >
            <div className="flex items-start justify-between mb-2">
              <span className="px-2 py-1 text-xs font-semibold bg-white text-black">
                {resource.category}
              </span>
              {resource.rating > 0 && (
                <span className="text-yellow-400 text-sm">★ {resource.rating.toFixed(1)}</span>
              )}
            </div>
            <h4 className="text-lg font-bold mb-2 text-white group-hover:text-gray-300">
              {resource.title}
            </h4>
            <p className="text-gray-400 text-sm line-clamp-2">
              {resource.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}

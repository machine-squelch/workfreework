import { MetadataRoute } from 'next'
import { getPublishedResources } from '@/lib/toolkit-data'

/**
 * Generate sitemap for toolkit resources
 * This helps search engines discover and index all toolkit pages
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://workfreework.com'
  const resources = getPublishedResources()

  // Main toolkit page
  const toolkitPage = {
    url: `${baseUrl}/toolkit`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }

  // Individual resource pages
  const resourcePages = resources.map((resource) => ({
    url: `${baseUrl}/toolkit/${resource.slug}`,
    lastModified: new Date(resource.dateAdded),
    changeFrequency: 'monthly' as const,
    priority: resource.featured ? 0.7 : 0.6,
  }))

  return [toolkitPage, ...resourcePages]
}

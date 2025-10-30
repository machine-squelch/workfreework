import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://workfreework.com'
  
  // Static pages
  const staticPages = [
    '',
    '/about',
    '/playbook',
    '/tools',
    '/newsletter',
    '/community',
    '/pricing',
    '/press',
    '/essays',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Essay pages
  const essaySlugs = [
    'ai-didnt-take-your-job',
    'automation-is-a-human-right',
    'work-is-a-19th-century-patch',
    'quit-capitalism',
    'ubi-experiments-that-worked',
    'automation-audit-case-study',
  ]

  const essayPages = essaySlugs.map((slug) => ({
    url: `${baseUrl}/essays/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...essayPages]
}


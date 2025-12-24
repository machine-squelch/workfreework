import algoliasearch from 'algoliasearch'

if (!process.env.NEXT_PUBLIC_ALGOLIA_APP_ID) {
  throw new Error('NEXT_PUBLIC_ALGOLIA_APP_ID is not defined')
}

if (!process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY) {
  throw new Error('NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY is not defined')
}

// Public search client (read-only)
export const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY
)

// Admin client for indexing (server-side only)
export function getAdminClient() {
  if (!process.env.ALGOLIA_ADMIN_API_KEY) {
    throw new Error('ALGOLIA_ADMIN_API_KEY is not defined')
  }

  return algoliasearch(
    process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
    process.env.ALGOLIA_ADMIN_API_KEY
  )
}

// Index names
export const ALGOLIA_INDICES = {
  ESSAYS: 'essays',
  TOOLS: 'tools',
  PLAYBOOK: 'playbook',
} as const

// Index configurations
export const INDEX_SETTINGS = {
  essays: {
    searchableAttributes: [
      'title',
      'excerpt',
      'content',
      'tags',
      'author.name',
    ],
    attributesForFaceting: [
      'filterOnly(status)',
      'searchable(tags)',
      'searchable(author.name)',
    ],
    customRanking: ['desc(publishDate)', 'desc(views)'],
    attributesToHighlight: ['title', 'excerpt', 'content'],
    attributesToSnippet: ['content:30'],
    highlightPreTag: '<mark class="bg-yellow-200 dark:bg-yellow-800">',
    highlightPostTag: '</mark>',
  },
  tools: {
    searchableAttributes: [
      'name',
      'description',
      'category',
      'features',
    ],
    attributesForFaceting: [
      'searchable(category)',
      'searchable(pricing)',
    ],
    customRanking: ['desc(popularity)'],
    attributesToHighlight: ['name', 'description'],
    highlightPreTag: '<mark class="bg-yellow-200 dark:bg-yellow-800">',
    highlightPostTag: '</mark>',
  },
  playbook: {
    searchableAttributes: [
      'title',
      'content',
    ],
    attributesForFaceting: [],
    customRanking: ['asc(order)'],
    attributesToHighlight: ['title', 'content'],
    attributesToSnippet: ['content:30'],
    highlightPreTag: '<mark class="bg-yellow-200 dark:bg-yellow-800">',
    highlightPostTag: '</mark>',
  },
}

/**
 * Client-side fallback search when Algolia is unavailable
 * Uses Fuse.js for fuzzy search
 */

import Fuse from 'fuse.js'

export interface SearchableItem {
  id: string
  title?: string
  name?: string
  content?: string
  excerpt?: string
  description?: string
  tags?: string[]
  category?: string
  url: string
}

const fuseOptions = {
  keys: [
    { name: 'title', weight: 2 },
    { name: 'name', weight: 2 },
    { name: 'excerpt', weight: 1.5 },
    { name: 'description', weight: 1.5 },
    { name: 'content', weight: 1 },
    { name: 'tags', weight: 0.5 },
    { name: 'category', weight: 0.5 },
  ],
  threshold: 0.3,
  includeScore: true,
  includeMatches: true,
  minMatchCharLength: 2,
}

export class FallbackSearch {
  private fuse: Fuse<SearchableItem> | null = null
  private data: SearchableItem[] = []

  constructor(data: SearchableItem[]) {
    this.data = data
    this.fuse = new Fuse(data, fuseOptions)
  }

  search(query: string, limit: number = 20): SearchableItem[] {
    if (!this.fuse || !query.trim()) {
      return []
    }

    const results = this.fuse.search(query, { limit })
    return results.map((result) => result.item)
  }

  filter(items: SearchableItem[], filters: {
    tags?: string[]
    category?: string
  }): SearchableItem[] {
    let filtered = items

    if (filters.tags && filters.tags.length > 0) {
      filtered = filtered.filter((item) =>
        item.tags?.some((tag) => filters.tags!.includes(tag))
      )
    }

    if (filters.category) {
      filtered = filtered.filter((item) => item.category === filters.category)
    }

    return filtered
  }

  updateData(data: SearchableItem[]) {
    this.data = data
    this.fuse = new Fuse(data, fuseOptions)
  }
}

// Singleton instance
let fallbackSearchInstance: FallbackSearch | null = null

export function getFallbackSearch(data?: SearchableItem[]): FallbackSearch {
  if (!fallbackSearchInstance && data) {
    fallbackSearchInstance = new FallbackSearch(data)
  } else if (data && fallbackSearchInstance) {
    fallbackSearchInstance.updateData(data)
  }

  if (!fallbackSearchInstance) {
    throw new Error('FallbackSearch not initialized with data')
  }

  return fallbackSearchInstance
}

/**
 * Check if Algolia is available
 */
export async function isAlgoliaAvailable(): Promise<boolean> {
  try {
    const response = await fetch('https://status.algolia.com/api/v2/status.json', {
      method: 'GET',
      signal: AbortSignal.timeout(3000),
    })
    const data = await response.json()
    return data.status.indicator === 'none'
  } catch {
    return false
  }
}

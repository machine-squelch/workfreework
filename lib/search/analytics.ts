/**
 * Search analytics tracking
 */

interface SearchEvent {
  query: string
  resultsCount: number
  timestamp: number
  clickedResult?: string
  filters?: Record<string, any>
}

class SearchAnalytics {
  private events: SearchEvent[] = []
  private readonly STORAGE_KEY = 'wfw_search_analytics'
  private readonly MAX_EVENTS = 1000

  constructor() {
    if (typeof window !== 'undefined') {
      this.loadFromStorage()
    }
  }

  /**
   * Track a search query
   */
  trackSearch(query: string, resultsCount: number, filters?: Record<string, any>) {
    const event: SearchEvent = {
      query: query.toLowerCase().trim(),
      resultsCount,
      timestamp: Date.now(),
      filters,
    }

    this.events.push(event)
    this.trimEvents()
    this.saveToStorage()

    // Send to analytics service (e.g., Google Analytics, Plausible)
    if (typeof window !== 'undefined' && (window as any).plausible) {
      ;(window as any).plausible('Search', {
        props: {
          query,
          results: resultsCount,
        },
      })
    }
  }

  /**
   * Track when a user clicks on a search result
   */
  trackClick(query: string, clickedResult: string) {
    const event = this.events.find(
      (e) => e.query === query.toLowerCase().trim() && !e.clickedResult
    )

    if (event) {
      event.clickedResult = clickedResult
      this.saveToStorage()
    }

    // Send to analytics service
    if (typeof window !== 'undefined' && (window as any).plausible) {
      ;(window as any).plausible('Search Click', {
        props: {
          query,
          result: clickedResult,
        },
      })
    }
  }

  /**
   * Get popular search queries
   */
  getPopularQueries(limit: number = 10): Array<{ query: string; count: number }> {
    const queryCounts = new Map<string, number>()

    this.events.forEach((event) => {
      const count = queryCounts.get(event.query) || 0
      queryCounts.set(event.query, count + 1)
    })

    return Array.from(queryCounts.entries())
      .map(([query, count]) => ({ query, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, limit)
  }

  /**
   * Get queries with no results
   */
  getNoResultQueries(limit: number = 10): string[] {
    return this.events
      .filter((event) => event.resultsCount === 0)
      .map((event) => event.query)
      .slice(0, limit)
  }

  /**
   * Get average results per query
   */
  getAverageResults(): number {
    if (this.events.length === 0) return 0

    const total = this.events.reduce((sum, event) => sum + event.resultsCount, 0)
    return total / this.events.length
  }

  /**
   * Get click-through rate
   */
  getClickThroughRate(): number {
    if (this.events.length === 0) return 0

    const clickedCount = this.events.filter((event) => event.clickedResult).length
    return (clickedCount / this.events.length) * 100
  }

  private trimEvents() {
    if (this.events.length > this.MAX_EVENTS) {
      this.events = this.events.slice(-this.MAX_EVENTS)
    }
  }

  private saveToStorage() {
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.events))
      } catch (error) {
        console.error('Failed to save search analytics:', error)
      }
    }
  }

  private loadFromStorage() {
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem(this.STORAGE_KEY)
        if (stored) {
          this.events = JSON.parse(stored)
        }
      } catch (error) {
        console.error('Failed to load search analytics:', error)
      }
    }
  }

  /**
   * Clear all analytics data
   */
  clear() {
    this.events = []
    if (typeof window !== 'undefined') {
      localStorage.removeItem(this.STORAGE_KEY)
    }
  }
}

// Singleton instance
let analyticsInstance: SearchAnalytics | null = null

export function getSearchAnalytics(): SearchAnalytics {
  if (!analyticsInstance) {
    analyticsInstance = new SearchAnalytics()
  }
  return analyticsInstance
}

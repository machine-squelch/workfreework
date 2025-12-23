/**
 * Toolkit Analytics Utilities
 * 
 * This module provides functions for tracking toolkit-related events.
 * In production, integrate with your analytics provider (Google Analytics, Mixpanel, etc.)
 */

export interface ToolkitEvent {
  eventName: string
  resourceId?: string
  resourceTitle?: string
  category?: string
  difficulty?: string
  searchQuery?: string
  filters?: Record<string, any>
  timestamp: string
  userAgent?: string
}

/**
 * Track a toolkit event
 */
export async function trackToolkitEvent(event: ToolkitEvent): Promise<void> {
  try {
    // In production, send to your analytics service
    // Example: Google Analytics 4
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', event.eventName, {
        resource_id: event.resourceId,
        resource_title: event.resourceTitle,
        category: event.category,
        difficulty: event.difficulty,
        search_query: event.searchQuery,
        timestamp: event.timestamp,
      })
    }

    // Example: Mixpanel
    if (typeof window !== 'undefined' && (window as any).mixpanel) {
      (window as any).mixpanel.track(event.eventName, {
        resourceId: event.resourceId,
        resourceTitle: event.resourceTitle,
        category: event.category,
        difficulty: event.difficulty,
        searchQuery: event.searchQuery,
        timestamp: event.timestamp,
      })
    }

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log('[Toolkit Analytics]', event)
    }
  } catch (error) {
    console.error('Failed to track toolkit event:', error)
  }
}

/**
 * Track resource view
 */
export function trackResourceView(resourceId: string, resourceTitle: string, category: string): void {
  trackToolkitEvent({
    eventName: 'toolkit_resource_view',
    resourceId,
    resourceTitle,
    category,
    timestamp: new Date().toISOString(),
    userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : undefined,
  })
}

/**
 * Track resource download
 */
export function trackResourceDownload(resourceId: string, resourceTitle: string, category: string): void {
  trackToolkitEvent({
    eventName: 'toolkit_resource_download',
    resourceId,
    resourceTitle,
    category,
    timestamp: new Date().toISOString(),
    userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : undefined,
  })
}

/**
 * Track search query
 */
export function trackSearch(searchQuery: string, resultsCount: number): void {
  trackToolkitEvent({
    eventName: 'toolkit_search',
    searchQuery,
    filters: { resultsCount },
    timestamp: new Date().toISOString(),
  })
}

/**
 * Track filter usage
 */
export function trackFilterUsage(filters: { categories?: string[]; difficulty?: string[] }): void {
  trackToolkitEvent({
    eventName: 'toolkit_filter_applied',
    filters,
    timestamp: new Date().toISOString(),
  })
}

/**
 * Track GitHub link click
 */
export function trackGitHubClick(resourceId: string, resourceTitle: string): void {
  trackToolkitEvent({
    eventName: 'toolkit_github_click',
    resourceId,
    resourceTitle,
    timestamp: new Date().toISOString(),
  })
}

import { LRUCache } from 'lru-cache'

/**
 * 2026 Best-in-Class Rate Limiting
 * In-memory rate limiting with LRU cache for production
 * For high-traffic, use Redis in production
 */

type RateLimitOptions = {
  interval: number // Time window in ms
  uniqueTokenPerInterval: number // Max requests per interval
}

const rateLimitCache = new LRUCache<string, number>({
  max: 500, // Max 500 unique IPs
  ttl: 60 * 1000, // 1 minute default TTL
})

export function getRateLimiter(options: RateLimitOptions) {
  return async (identifier: string): Promise<{ success: boolean; limit: number; remaining: number; reset: number }> => {
    const tokenCount = (rateLimitCache.get(identifier) as number) || 0
    const currentUsage = tokenCount || 0
    const isRateLimited = currentUsage >= options.uniqueTokenPerInterval

    if (!isRateLimited) {
      rateLimitCache.set(identifier, currentUsage + 1, {
        ttl: options.interval,
      })
    }

    const reset = Date.now() + options.interval

    return {
      success: !isRateLimited,
      limit: options.uniqueTokenPerInterval,
      remaining: Math.max(0, options.uniqueTokenPerInterval - (currentUsage + 1)),
      reset,
    }
  }
}

// Pre-configured rate limiters
export const rateLimiters = {
  // Strict: 10 requests per minute
  strict: getRateLimiter({
    interval: 60 * 1000,
    uniqueTokenPerInterval: 10,
  }),

  // Standard: 60 requests per minute
  standard: getRateLimiter({
    interval: 60 * 1000,
    uniqueTokenPerInterval: 60,
  }),

  // Generous: 100 requests per minute
  generous: getRateLimiter({
    interval: 60 * 1000,
    uniqueTokenPerInterval: 100,
  }),

  // API: 30 requests per minute
  api: getRateLimiter({
    interval: 60 * 1000,
    uniqueTokenPerInterval: 30,
  }),
}


/**
 * Unit tests for Toolkit functionality
 * 
 * To run these tests:
 * 1. Install Vitest: npm install -D vitest @testing-library/react @testing-library/jest-dom
 * 2. Add to package.json scripts: "test": "vitest"
 * 3. Run: npm test
 */

import { describe, it, expect } from 'vitest'
import {
  getPublishedResources,
  getResourceBySlug,
  getFeaturedResources,
  filterResources,
} from '@/lib/toolkit-data'
import {
  ToolkitResourceSchema,
  ToolkitCategory,
  ToolkitDifficulty,
} from '@/lib/toolkit.schema'

describe('Toolkit Data Functions', () => {
  describe('getPublishedResources', () => {
    it('should return only published resources', () => {
      const resources = getPublishedResources()
      expect(resources.length).toBeGreaterThan(0)
      expect(resources.every((r) => r.published)).toBe(true)
    })

    it('should return valid resource objects', () => {
      const resources = getPublishedResources()
      resources.forEach((resource) => {
        const result = ToolkitResourceSchema.safeParse(resource)
        expect(result.success).toBe(true)
      })
    })
  })

  describe('getResourceBySlug', () => {
    it('should return a resource when slug exists', () => {
      const resource = getResourceBySlug('python-web-scraping-script')
      expect(resource).toBeDefined()
      expect(resource?.slug).toBe('python-web-scraping-script')
      expect(resource?.title).toBe('Python Web Scraping Script')
    })

    it('should return undefined when slug does not exist', () => {
      const resource = getResourceBySlug('non-existent-slug')
      expect(resource).toBeUndefined()
    })

    it('should only return published resources', () => {
      const resources = getPublishedResources()
      resources.forEach((resource) => {
        const found = getResourceBySlug(resource.slug)
        expect(found?.published).toBe(true)
      })
    })
  })

  describe('getFeaturedResources', () => {
    it('should return only featured resources', () => {
      const featured = getFeaturedResources()
      expect(featured.every((r) => r.featured)).toBe(true)
      expect(featured.every((r) => r.published)).toBe(true)
    })

    it('should return at least one featured resource', () => {
      const featured = getFeaturedResources()
      expect(featured.length).toBeGreaterThan(0)
    })
  })

  describe('filterResources', () => {
    it('should filter by search query', () => {
      const results = filterResources('python')
      expect(results.length).toBeGreaterThan(0)
      expect(
        results.some(
          (r) =>
            r.title.toLowerCase().includes('python') ||
            r.description.toLowerCase().includes('python') ||
            r.tags.some((tag) => tag.toLowerCase().includes('python'))
        )
      ).toBe(true)
    })

    it('should filter by category', () => {
      const results = filterResources(undefined, ['Scripts'])
      expect(results.every((r) => r.category === 'Scripts')).toBe(true)
    })

    it('should filter by difficulty', () => {
      const results = filterResources(undefined, undefined, ['Beginner'])
      expect(results.every((r) => r.difficulty === 'Beginner')).toBe(true)
    })

    it('should filter by tags', () => {
      const results = filterResources(undefined, undefined, undefined, ['automation'])
      expect(results.every((r) => r.tags.includes('automation'))).toBe(true)
    })

    it('should combine multiple filters', () => {
      const results = filterResources('automation', ['Scripts'], ['Intermediate'])
      expect(results.every((r) => r.category === 'Scripts')).toBe(true)
      expect(results.every((r) => r.difficulty === 'Intermediate')).toBe(true)
    })

    it('should return empty array when no matches', () => {
      const results = filterResources('zzz-nonexistent-query-xyz')
      expect(results).toEqual([])
    })
  })
})

describe('Toolkit Schema Validation', () => {
  it('should validate a complete resource object', () => {
    const validResource = {
      id: '999',
      slug: 'test-resource',
      title: 'Test Resource',
      description: 'A test resource description',
      category: 'Scripts' as ToolkitCategory,
      difficulty: 'Beginner' as ToolkitDifficulty,
      tags: ['test', 'example'],
      author: {
        name: 'Test Author',
      },
      dateAdded: new Date().toISOString(),
      downloads: 0,
      rating: 0,
      ratingCount: 0,
      featured: false,
      published: true,
    }

    const result = ToolkitResourceSchema.safeParse(validResource)
    expect(result.success).toBe(true)
  })

  it('should reject invalid category', () => {
    const invalidResource = {
      id: '999',
      slug: 'test-resource',
      title: 'Test Resource',
      description: 'A test resource description',
      category: 'InvalidCategory',
      difficulty: 'Beginner',
      tags: ['test'],
      author: { name: 'Test' },
      dateAdded: new Date().toISOString(),
      downloads: 0,
      rating: 0,
      ratingCount: 0,
      featured: false,
      published: true,
    }

    const result = ToolkitResourceSchema.safeParse(invalidResource)
    expect(result.success).toBe(false)
  })

  it('should reject missing required fields', () => {
    const invalidResource = {
      id: '999',
      slug: 'test-resource',
      // Missing title
      description: 'A test resource description',
      category: 'Scripts',
      difficulty: 'Beginner',
      tags: ['test'],
      author: { name: 'Test' },
      dateAdded: new Date().toISOString(),
    }

    const result = ToolkitResourceSchema.safeParse(invalidResource)
    expect(result.success).toBe(false)
  })

  it('should validate rating range', () => {
    const invalidRating = {
      id: '999',
      slug: 'test-resource',
      title: 'Test Resource',
      description: 'A test resource description',
      category: 'Scripts' as ToolkitCategory,
      difficulty: 'Beginner' as ToolkitDifficulty,
      tags: ['test'],
      author: { name: 'Test' },
      dateAdded: new Date().toISOString(),
      downloads: 0,
      rating: 6, // Invalid: should be 0-5
      ratingCount: 0,
      featured: false,
      published: true,
    }

    const result = ToolkitResourceSchema.safeParse(invalidRating)
    expect(result.success).toBe(false)
  })
})

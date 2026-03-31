'use client'

import { useState, useMemo, useCallback } from 'react'
import { ToolkitResource, ToolkitCategory, ToolkitDifficulty } from '@/lib/toolkit.schema'
import { useDebounce } from '@/hooks/useDebounce'
import ToolkitCard from './ToolkitCard'
import ToolkitFilters from './ToolkitFilters'

interface ToolkitGalleryProps {
  initialResources: ToolkitResource[]
}

export default function ToolkitGallery({ initialResources }: ToolkitGalleryProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategories, setSelectedCategories] = useState<ToolkitCategory[]>([])
  const [selectedDifficulty, setSelectedDifficulty] = useState<ToolkitDifficulty[]>([])
  const [sortBy, setSortBy] = useState<'newest' | 'popular' | 'rating' | 'title'>('newest')

  // Debounce search query to avoid excessive filtering
  const debouncedSearch = useDebounce(searchQuery, 300)

  // Filter and sort resources
  const filteredResources = useMemo(() => {
    let filtered = [...initialResources]

    // Apply search filter
    if (debouncedSearch) {
      const searchLower = debouncedSearch.toLowerCase()
      filtered = filtered.filter(
        (resource) =>
          resource.title.toLowerCase().includes(searchLower) ||
          resource.description.toLowerCase().includes(searchLower) ||
          resource.tags.some((tag) => tag.toLowerCase().includes(searchLower)) ||
          resource.author.name.toLowerCase().includes(searchLower)
      )
    }

    // Apply category filter
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((resource) =>
        selectedCategories.includes(resource.category)
      )
    }

    // Apply difficulty filter
    if (selectedDifficulty.length > 0) {
      filtered = filtered.filter((resource) =>
        selectedDifficulty.includes(resource.difficulty)
      )
    }

    // Apply sorting
    switch (sortBy) {
      case 'newest':
        filtered.sort((a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime())
        break
      case 'popular':
        filtered.sort((a, b) => b.downloads - a.downloads)
        break
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating)
        break
      case 'title':
        filtered.sort((a, b) => a.title.localeCompare(b.title))
        break
    }

    return filtered
  }, [initialResources, debouncedSearch, selectedCategories, selectedDifficulty, sortBy])

  // Handle category toggle
  const handleCategoryToggle = useCallback((category: ToolkitCategory) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    )
  }, [])

  // Handle difficulty toggle
  const handleDifficultyToggle = useCallback((difficulty: ToolkitDifficulty) => {
    setSelectedDifficulty((prev) =>
      prev.includes(difficulty)
        ? prev.filter((d) => d !== difficulty)
        : [...prev, difficulty]
    )
  }, [])

  // Clear all filters
  const handleClearFilters = useCallback(() => {
    setSearchQuery('')
    setSelectedCategories([])
    setSelectedDifficulty([])
  }, [])

  const hasActiveFilters = Boolean(searchQuery) || selectedCategories.length > 0 || selectedDifficulty.length > 0

  return (
    <div className="space-y-8">
      {/* Filters */}
      <ToolkitFilters
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedCategories={selectedCategories}
        onCategoryToggle={handleCategoryToggle}
        selectedDifficulty={selectedDifficulty}
        onDifficultyToggle={handleDifficultyToggle}
        sortBy={sortBy}
        onSortChange={setSortBy}
        onClearFilters={handleClearFilters}
        hasActiveFilters={hasActiveFilters}
      />

      {/* Results Count */}
      <div className="flex items-center justify-between">
        <p className="text-gray-400">
          {filteredResources.length} {filteredResources.length === 1 ? 'resource' : 'resources'} found
        </p>
      </div>

      {/* Resource Grid */}
      {filteredResources.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource) => (
            <ToolkitCard key={resource.id} resource={resource} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-xl text-gray-400 mb-4">No resources found</p>
          {hasActiveFilters && (
            <button
              onClick={handleClearFilters}
              className="px-6 py-2 bg-white text-black font-semibold hover:bg-gray-200 transition-all"
            >
              Clear Filters
            </button>
          )}
        </div>
      )}
    </div>
  )
}

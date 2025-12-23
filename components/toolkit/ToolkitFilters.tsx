'use client'

import { ToolkitCategory, ToolkitDifficulty } from '@/lib/toolkit.schema'

const CATEGORIES: ToolkitCategory[] = ['Scripts', 'Templates', 'Guides', 'Workflows', 'Integrations']
const DIFFICULTY_LEVELS: ToolkitDifficulty[] = ['Beginner', 'Intermediate', 'Advanced']

interface ToolkitFiltersProps {
  searchQuery: string
  onSearchChange: (query: string) => void
  selectedCategories: ToolkitCategory[]
  onCategoryToggle: (category: ToolkitCategory) => void
  selectedDifficulty: ToolkitDifficulty[]
  onDifficultyToggle: (difficulty: ToolkitDifficulty) => void
  sortBy: 'newest' | 'popular' | 'rating' | 'title'
  onSortChange: (sort: 'newest' | 'popular' | 'rating' | 'title') => void
  onClearFilters: () => void
  hasActiveFilters: boolean
}

export default function ToolkitFilters({
  searchQuery,
  onSearchChange,
  selectedCategories,
  onCategoryToggle,
  selectedDifficulty,
  onDifficultyToggle,
  sortBy,
  onSortChange,
  onClearFilters,
  hasActiveFilters,
}: ToolkitFiltersProps) {
  return (
    <div className="space-y-6 p-6 bg-gray-800 border-2 border-gray-700">
      {/* Search Bar */}
      <div>
        <label htmlFor="search" className="block text-sm font-semibold text-white mb-2">
          Search
        </label>
        <input
          id="search"
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search resources, tags, or authors..."
          className="w-full px-4 py-2 bg-gray-900 border-2 border-gray-700 text-white placeholder-gray-500 focus:border-white focus:outline-none"
        />
      </div>

      {/* Category Filters */}
      <div>
        <label className="block text-sm font-semibold text-white mb-2">
          Categories
        </label>
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryToggle(category)}
              className={`px-4 py-2 text-sm font-semibold border-2 transition-all ${
                selectedCategories.includes(category)
                  ? 'bg-white text-black border-white'
                  : 'bg-gray-900 text-white border-gray-700 hover:border-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Difficulty Filters */}
      <div>
        <label className="block text-sm font-semibold text-white mb-2">
          Difficulty
        </label>
        <div className="flex flex-wrap gap-2">
          {DIFFICULTY_LEVELS.map((difficulty) => (
            <button
              key={difficulty}
              onClick={() => onDifficultyToggle(difficulty)}
              className={`px-4 py-2 text-sm font-semibold border-2 transition-all ${
                selectedDifficulty.includes(difficulty)
                  ? 'bg-white text-black border-white'
                  : 'bg-gray-900 text-white border-gray-700 hover:border-white'
              }`}
            >
              {difficulty}
            </button>
          ))}
        </div>
      </div>

      {/* Sort Options */}
      <div>
        <label htmlFor="sort" className="block text-sm font-semibold text-white mb-2">
          Sort By
        </label>
        <select
          id="sort"
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value as any)}
          className="w-full px-4 py-2 bg-gray-900 border-2 border-gray-700 text-white focus:border-white focus:outline-none"
        >
          <option value="newest">Newest First</option>
          <option value="popular">Most Popular</option>
          <option value="rating">Highest Rated</option>
          <option value="title">Alphabetical</option>
        </select>
      </div>

      {/* Clear Filters Button */}
      {hasActiveFilters && (
        <button
          onClick={onClearFilters}
          className="w-full px-4 py-2 bg-gray-900 text-white border-2 border-gray-700 hover:border-white font-semibold transition-all"
        >
          Clear All Filters
        </button>
      )}
    </div>
  )
}

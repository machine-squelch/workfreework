import { z } from 'zod'

/**
 * Schema for toolkit resource categories
 */
export const ToolkitCategory = z.enum([
  'Scripts',
  'Templates',
  'Guides',
  'Workflows',
  'Integrations',
])

export type ToolkitCategory = z.infer<typeof ToolkitCategory>

/**
 * Schema for toolkit resource difficulty levels
 */
export const ToolkitDifficulty = z.enum([
  'Beginner',
  'Intermediate',
  'Advanced',
])

export type ToolkitDifficulty = z.infer<typeof ToolkitDifficulty>

/**
 * Schema for a toolkit resource
 */
export const ToolkitResourceSchema = z.object({
  id: z.string(),
  slug: z.string(),
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  fullDescription: z.string().optional(),
  category: ToolkitCategory,
  difficulty: ToolkitDifficulty,
  tags: z.array(z.string()),
  downloadUrl: z.string().url().optional(),
  githubUrl: z.string().url().optional(),
  author: z.object({
    name: z.string(),
    url: z.string().url().optional(),
  }),
  dateAdded: z.string().datetime(),
  downloads: z.number().int().min(0).default(0),
  rating: z.number().min(0).max(5).default(0),
  ratingCount: z.number().int().min(0).default(0),
  prerequisites: z.array(z.string()).optional(),
  dependencies: z.array(z.string()).optional(),
  installationSteps: z.array(z.string()).optional(),
  usageExamples: z.array(z.object({
    title: z.string(),
    code: z.string(),
    language: z.string(),
  })).optional(),
  relatedResources: z.array(z.string()).optional(),
  featured: z.boolean().default(false),
  published: z.boolean().default(true),
})

export type ToolkitResource = z.infer<typeof ToolkitResourceSchema>

/**
 * Schema for creating a new toolkit resource (admin)
 */
export const CreateToolkitResourceSchema = ToolkitResourceSchema.omit({
  id: true,
  downloads: true,
  rating: true,
  ratingCount: true,
})

export type CreateToolkitResource = z.infer<typeof CreateToolkitResourceSchema>

/**
 * Schema for updating a toolkit resource (admin)
 */
export const UpdateToolkitResourceSchema = ToolkitResourceSchema.partial().required({
  id: true,
})

export type UpdateToolkitResource = z.infer<typeof UpdateToolkitResourceSchema>

/**
 * Schema for toolkit filter parameters
 */
export const ToolkitFilterSchema = z.object({
  search: z.string().optional(),
  categories: z.array(ToolkitCategory).optional(),
  difficulty: z.array(ToolkitDifficulty).optional(),
  tags: z.array(z.string()).optional(),
  featured: z.boolean().optional(),
  sortBy: z.enum(['newest', 'popular', 'rating', 'title']).default('newest'),
})

export type ToolkitFilter = z.infer<typeof ToolkitFilterSchema>

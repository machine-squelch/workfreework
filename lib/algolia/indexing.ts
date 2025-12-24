import { getAdminClient, ALGOLIA_INDICES, INDEX_SETTINGS } from './config'
import type { Essay, Tool, PlaybookSection } from '@/payload-types'

/**
 * Transform essay data for Algolia indexing
 */
export function transformEssayForAlgolia(essay: Essay) {
  return {
    objectID: essay.id,
    title: essay.title,
    slug: essay.slug,
    excerpt: essay.excerpt,
    content: essay.content, // Rich text content as string
    tags: essay.tags || [],
    author: typeof essay.author === 'object' ? {
      name: essay.author.name,
      id: essay.author.id,
    } : null,
    publishDate: essay.publishDate,
    status: essay.status,
    views: essay.views || 0,
    url: `/essays/${essay.slug}`,
  }
}

/**
 * Transform tool data for Algolia indexing
 */
export function transformToolForAlgolia(tool: Tool) {
  return {
    objectID: tool.id,
    name: tool.name,
    description: tool.description,
    category: tool.category,
    pricing: tool.pricing,
    features: tool.features?.map((f) => f.feature) || [],
    url: tool.url,
    popularity: tool.popularity || 0,
  }
}

/**
 * Transform playbook section for Algolia indexing
 */
export function transformPlaybookForAlgolia(section: PlaybookSection) {
  return {
    objectID: section.id,
    title: section.title,
    content: section.content,
    order: section.order,
    url: `/playbook#${section.id}`,
  }
}

/**
 * Index all essays to Algolia
 */
export async function indexEssays(essays: Essay[]) {
  const client = getAdminClient()
  const index = client.initIndex(ALGOLIA_INDICES.ESSAYS)

  // Configure index settings
  await index.setSettings(INDEX_SETTINGS.essays)

  // Transform and save objects
  const objects = essays
    .filter((essay) => essay.status === 'published')
    .map(transformEssayForAlgolia)

  if (objects.length > 0) {
    await index.saveObjects(objects)
  }

  return { indexed: objects.length }
}

/**
 * Index all tools to Algolia
 */
export async function indexTools(tools: Tool[]) {
  const client = getAdminClient()
  const index = client.initIndex(ALGOLIA_INDICES.TOOLS)

  // Configure index settings
  await index.setSettings(INDEX_SETTINGS.tools)

  // Transform and save objects
  const objects = tools.map(transformToolForAlgolia)

  if (objects.length > 0) {
    await index.saveObjects(objects)
  }

  return { indexed: objects.length }
}

/**
 * Index all playbook sections to Algolia
 */
export async function indexPlaybook(sections: PlaybookSection[]) {
  const client = getAdminClient()
  const index = client.initIndex(ALGOLIA_INDICES.PLAYBOOK)

  // Configure index settings
  await index.setSettings(INDEX_SETTINGS.playbook)

  // Transform and save objects
  const objects = sections.map(transformPlaybookForAlgolia)

  if (objects.length > 0) {
    await index.saveObjects(objects)
  }

  return { indexed: objects.length }
}

/**
 * Index a single essay
 */
export async function indexSingleEssay(essay: Essay) {
  const client = getAdminClient()
  const index = client.initIndex(ALGOLIA_INDICES.ESSAYS)

  if (essay.status === 'published') {
    const object = transformEssayForAlgolia(essay)
    await index.saveObject(object)
  } else {
    // Remove from index if not published
    await index.deleteObject(essay.id)
  }
}

/**
 * Index a single tool
 */
export async function indexSingleTool(tool: Tool) {
  const client = getAdminClient()
  const index = client.initIndex(ALGOLIA_INDICES.TOOLS)

  const object = transformToolForAlgolia(tool)
  await index.saveObject(object)
}

/**
 * Delete an object from Algolia
 */
export async function deleteFromIndex(indexName: string, objectID: string) {
  const client = getAdminClient()
  const index = client.initIndex(indexName)
  await index.deleteObject(objectID)
}

/**
 * Clear an entire index
 */
export async function clearIndex(indexName: string) {
  const client = getAdminClient()
  const index = client.initIndex(indexName)
  await index.clearObjects()
}

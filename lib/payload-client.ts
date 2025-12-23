import { getPayloadClient } from '../payload-client'
import type { Essay, Tool, TeamMember, PlaybookSection } from '../payload-types'

/**
 * Get all published essays
 */
export async function getEssays(): Promise<Essay[]> {
  const payload = await getPayloadClient()
  
  const { docs } = await payload.find({
    collection: 'essays',
    where: {
      status: {
        equals: 'published',
      },
    },
    sort: '-publishDate',
    limit: 100,
  })
  
  return docs as Essay[]
}

/**
 * Get a single essay by slug
 */
export async function getEssayBySlug(slug: string): Promise<Essay | null> {
  const payload = await getPayloadClient()
  
  const { docs } = await payload.find({
    collection: 'essays',
    where: {
      slug: {
        equals: slug,
      },
    },
    limit: 1,
  })
  
  return docs[0] as Essay || null
}

/**
 * Get all tools
 */
export async function getTools(): Promise<Tool[]> {
  const payload = await getPayloadClient()
  
  const { docs } = await payload.find({
    collection: 'tools',
    limit: 100,
  })
  
  return docs as Tool[]
}

/**
 * Get tools by category
 */
export async function getToolsByCategory(category: string): Promise<Tool[]> {
  const payload = await getPayloadClient()
  
  const { docs } = await payload.find({
    collection: 'tools',
    where: {
      category: {
        equals: category,
      },
    },
    limit: 100,
  })
  
  return docs as Tool[]
}

/**
 * Get all team members
 */
export async function getTeamMembers(): Promise<TeamMember[]> {
  const payload = await getPayloadClient()
  
  const { docs } = await payload.find({
    collection: 'team-members',
    sort: 'order',
    limit: 100,
  })
  
  return docs as TeamMember[]
}

/**
 * Get all playbook sections
 */
export async function getPlaybookSections(): Promise<PlaybookSection[]> {
  const payload = await getPayloadClient()
  
  const { docs } = await payload.find({
    collection: 'playbook-sections',
    sort: 'order',
    limit: 100,
  })
  
  return docs as PlaybookSection[]
}

/**
 * Get draft content for preview mode
 */
export async function getDraftEssay(slug: string): Promise<Essay | null> {
  const payload = await getPayloadClient()
  
  const { docs } = await payload.find({
    collection: 'essays',
    where: {
      slug: {
        equals: slug,
      },
    },
    draft: true,
    limit: 1,
  })
  
  return docs[0] as Essay || null
}

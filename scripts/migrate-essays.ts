import { getPayloadClient } from '../payload-client'

/**
 * Migration script to import existing essays into Payload CMS
 * Run with: npx ts-node scripts/migrate-essays.ts
 */

// Example hardcoded essays data (replace with your actual data source)
const existingEssays = [
  {
    title: 'So… you want to quit capitalism?',
    slug: 'quit-capitalism',
    content: `<p>The lie they sold you: "Work gives life meaning."</p>
    <p>Yeah — if your meaning is burnout, debt, and Zoom calls that could've been emails.</p>
    <p>You aren't here to take notes. You're here to build an asset that prints revenue.</p>`,
    excerpt: 'A manifesto on escaping the 9-5 grind and building automated income streams.',
    publishDate: '2025-01-15T00:00:00Z',
    tags: ['capitalism', 'automation', 'freedom'],
    status: 'published',
  },
  // Add more essays here
]

async function migrateEssays() {
  console.log('Starting essay migration...')
  
  // Initialize Payload client with error handling
  let payload
  try {
    payload = await getPayloadClient()
  } catch (error) {
    console.error('Failed to initialize Payload CMS client:', error)
    console.error('Please ensure:')
    console.error('  1. MongoDB is running and accessible')
    console.error('  2. Environment variables are properly configured')
    console.error('  3. Payload CMS configuration is valid')
    const errorMessage = error instanceof Error ? error.message : String(error)
    throw new Error(`Payload client initialization failed: ${errorMessage}`)
  }
  
  // First, create a default author if needed
  let author
  try {
    const { docs: teamMembers } = await payload.find({
      collection: 'team-members',
      limit: 1,
    })
    
    if (teamMembers.length === 0) {
      // Create a default author
      author = await payload.create({
        collection: 'team-members',
        data: {
          name: 'WorkFreeWork Team',
          role: 'Author',
          bio: '<p>The WorkFreeWork team is dedicated to helping you automate your way to freedom.</p>',
        },
      })
      console.log('Created default author')
    } else {
      author = teamMembers[0]
    }
  } catch (error) {
    console.error('Error creating author:', error)
    throw error
  }

  // Migrate essays
  let successCount = 0
  let errorCount = 0

  for (const essay of existingEssays) {
    try {
      // Check if essay already exists
      const { docs } = await payload.find({
        collection: 'essays',
        where: {
          slug: {
            equals: essay.slug,
          },
        },
        limit: 1,
      })

      if (docs.length > 0) {
        console.log(`Essay "${essay.title}" already exists, skipping...`)
        continue
      }

      // Create the essay
      await payload.create({
        collection: 'essays',
        data: {
          ...essay,
          author: author.id,
        },
      })

      console.log(`✓ Migrated: ${essay.title}`)
      successCount++
    } catch (error) {
      console.error(`✗ Failed to migrate "${essay.title}":`, error)
      errorCount++
    }
  }

  console.log('\nMigration complete!')
  console.log(`Success: ${successCount}`)
  console.log(`Errors: ${errorCount}`)
}

// Run the migration
migrateEssays()
  .then(() => {
    console.log('Done!')
    process.exit(0)
  })
  .catch((error) => {
    console.error('Migration failed:', error)
    process.exit(1)
  })

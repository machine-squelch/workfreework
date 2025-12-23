import { getPayloadClient } from '../payload-client'

/**
 * Migration script to import existing tools into Payload CMS
 * Run with: npx ts-node scripts/migrate-tools.ts
 */

// Example hardcoded tools data (replace with your actual data source)
const existingTools = [
  {
    name: 'Zapier',
    description: 'Automate workflows between your apps and services.',
    category: 'automation',
    url: 'https://zapier.com',
    pricing: 'freemium',
    features: [
      'Connect 5000+ apps',
      'Multi-step workflows',
      'Conditional logic',
      'Webhooks support',
    ],
  },
  {
    name: 'Make (Integromat)',
    description: 'Visual automation platform for connecting apps and services.',
    category: 'automation',
    url: 'https://make.com',
    pricing: 'freemium',
    features: [
      'Visual workflow builder',
      'Advanced data transformation',
      'Error handling',
      'Scheduling',
    ],
  },
  {
    name: 'Stripe',
    description: 'Payment processing for internet businesses.',
    category: 'finance',
    url: 'https://stripe.com',
    pricing: 'paid',
    features: [
      'Accept payments online',
      'Subscription billing',
      'Fraud prevention',
      'Global payments',
    ],
  },
  // Add more tools here
]

async function migrateTools() {
  console.log('Starting tools migration...')
  
  const payload = await getPayloadClient()
  
  let successCount = 0
  let errorCount = 0

  for (const tool of existingTools) {
    try {
      // Check if tool already exists
      const { docs } = await payload.find({
        collection: 'tools',
        where: {
          name: {
            equals: tool.name,
          },
        },
        limit: 1,
      })

      if (docs.length > 0) {
        console.log(`Tool "${tool.name}" already exists, skipping...`)
        continue
      }

      // Create the tool
      await payload.create({
        collection: 'tools',
        data: {
          ...tool,
          features: tool.features.map((feature) => ({ feature })),
        },
      })

      console.log(`✓ Migrated: ${tool.name}`)
      successCount++
    } catch (error) {
      console.error(`✗ Failed to migrate "${tool.name}":`, error)
      errorCount++
    }
  }

  console.log('\nMigration complete!')
  console.log(`Success: ${successCount}`)
  console.log(`Errors: ${errorCount}`)
}

// Run the migration
migrateTools()
  .then(() => {
    console.log('Done!')
    process.exit(0)
  })
  .catch((error) => {
    console.error('Migration failed:', error)
    process.exit(1)
  })

import { getPayloadClient } from '../payload-client'
import { indexEssays, indexTools, indexPlaybook } from '../lib/algolia/indexing'

/**
 * Sync all content to Algolia
 * Run with: npx ts-node scripts/sync-algolia.ts
 */
async function syncAlgolia() {
  console.log('Starting Algolia sync...\n')

  try {
    const payload = await getPayloadClient()

    // Sync essays
    console.log('Syncing essays...')
    const { docs: essays } = await payload.find({
      collection: 'essays',
      limit: 1000,
    })
    const essayResult = await indexEssays(essays)
    console.log(`✓ Indexed ${essayResult.indexed} essays\n`)

    // Sync tools
    console.log('Syncing tools...')
    const { docs: tools } = await payload.find({
      collection: 'tools',
      limit: 1000,
    })
    const toolResult = await indexTools(tools)
    console.log(`✓ Indexed ${toolResult.indexed} tools\n`)

    // Sync playbook
    console.log('Syncing playbook sections...')
    const { docs: playbook } = await payload.find({
      collection: 'playbook-sections',
      limit: 1000,
    })
    const playbookResult = await indexPlaybook(playbook)
    console.log(`✓ Indexed ${playbookResult.indexed} playbook sections\n`)

    console.log('Algolia sync complete!')
    console.log(`Total indexed: ${essayResult.indexed + toolResult.indexed + playbookResult.indexed}`)
  } catch (error) {
    console.error('Algolia sync failed:', error)
    process.exit(1)
  }
}

syncAlgolia()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })

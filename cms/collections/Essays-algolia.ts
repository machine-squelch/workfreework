import { CollectionConfig } from 'payload/types'

/**
 * Add this hook to the Essays collection to sync to Algolia
 * Merge this with your existing Essays.ts file
 */

export const algoliaHooks = {
  afterChange: [
    async ({ doc, operation }) => {
      // Trigger Algolia sync
      if (operation === 'create' || operation === 'update') {
        try {
          await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/algolia/sync`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${process.env.ALGOLIA_WEBHOOK_SECRET}`,
            },
            body: JSON.stringify({
              collection: 'essays',
              operation,
              doc,
            }),
          })
        } catch (error) {
          console.error('Failed to sync to Algolia:', error)
        }
      }
    },
  ],
  afterDelete: [
    async ({ doc }) => {
      // Remove from Algolia
      try {
        await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/algolia/sync`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.ALGOLIA_WEBHOOK_SECRET}`,
          },
          body: JSON.stringify({
            collection: 'essays',
            operation: 'delete',
            doc,
          }),
        })
      } catch (error) {
        console.error('Failed to remove from Algolia:', error)
      }
    },
  ],
}

/**
 * Add these hooks to your Essays collection:
 * 
 * export const Essays: CollectionConfig = {
 *   slug: 'essays',
 *   // ... other config
 *   hooks: {
 *     afterChange: algoliaHooks.afterChange,
 *     afterDelete: algoliaHooks.afterDelete,
 *   },
 * }
 */

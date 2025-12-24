import { CollectionConfig } from 'payload/types'

export const PlaybookSections: CollectionConfig = {
  slug: 'playbook-sections',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'order'],
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => !!user,
    update: ({ req: { user } }) => !!user,
    delete: ({ req: { user } }) => !!user,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
    },
    {
      name: 'order',
      type: 'number',
      required: true,
      admin: {
        description: 'Display order in the playbook',
      },
    },
    {
      name: 'resources',
      type: 'relationship',
      relationTo: 'tools',
      hasMany: true,
      admin: {
        description: 'Related tools for this section',
      },
    },
  ],
  hooks: {
    afterChange: [
      async ({ operation }) => {
        if (operation === 'update' || operation === 'create') {
          try {
            await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/revalidate`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.REVALIDATION_SECRET}`,
              },
              body: JSON.stringify({ collection: 'playbook-sections' }),
            })
          } catch (error) {
            console.error('Failed to trigger revalidation:', error)
          }
        }
      },
    ],
  },
}

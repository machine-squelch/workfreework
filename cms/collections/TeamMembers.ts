import { CollectionConfig } from 'payload/types'

export const TeamMembers: CollectionConfig = {
  slug: 'team-members',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'role'],
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => !!user,
    update: ({ req: { user } }) => !!user,
    delete: ({ req: { user } }) => !!user,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'role',
      type: 'text',
      required: true,
    },
    {
      name: 'bio',
      type: 'richText',
    },
    {
      name: 'photo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'socialLinks',
      type: 'group',
      fields: [
        {
          name: 'twitter',
          type: 'text',
          validate: (value) => {
            if (!value) return true
            try {
              new URL(value)
              return true
            } catch {
              return 'Please enter a valid URL'
            }
          },
        },
        {
          name: 'linkedin',
          type: 'text',
          validate: (value) => {
            if (!value) return true
            try {
              new URL(value)
              return true
            } catch {
              return 'Please enter a valid URL'
            }
          },
        },
        {
          name: 'github',
          type: 'text',
          validate: (value) => {
            if (!value) return true
            try {
              new URL(value)
              return true
            } catch {
              return 'Please enter a valid URL'
            }
          },
        },
      ],
    },
    {
      name: 'order',
      type: 'number',
      admin: {
        description: 'Display order on the team page',
      },
    },
  ],
}

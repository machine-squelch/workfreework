import { buildConfig } from 'payload/config'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { s3Adapter } from '@payloadcms/plugin-cloud-storage/s3'
import { cloudStoragePlugin } from '@payloadcms/plugin-cloud-storage'
import path from 'path'

// Collections
import { Essays } from './cms/collections/Essays'
import { Tools } from './cms/collections/Tools'
import { TeamMembers } from './cms/collections/TeamMembers'
import { PlaybookSections } from './cms/collections/PlaybookSections'
import { Media } from './cms/collections/Media'
import { Users } from './cms/collections/Users'

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000',
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: '- WorkFreeWork CMS',
      favicon: '/favicon.ico',
      ogImage: '/og-image.png',
    },
  },
  collections: [
    Essays,
    Tools,
    TeamMembers,
    PlaybookSections,
    Media,
    Users,
  ],
  editor: lexicalEditor({}),
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || 'mongodb://localhost:27017/workfreework',
  }),
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  plugins: [
    cloudStoragePlugin({
      collections: {
        media: {
          adapter: s3Adapter({
            config: {
              endpoint: process.env.S3_ENDPOINT,
              region: process.env.S3_REGION || 'us-east-1',
              credentials: {
                accessKeyId: process.env.S3_ACCESS_KEY_ID || '',
                secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || '',
              },
            },
            bucket: process.env.S3_BUCKET || '',
          }),
        },
      },
    }),
  ],
  cors: [
    process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000',
  ].filter(Boolean),
  csrf: [
    process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000',
  ].filter(Boolean),
})

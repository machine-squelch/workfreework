# CMS Setup and Usage Guide

This guide explains how to set up and use Payload CMS for managing content in WorkFreeWork.

## Overview

WorkFreeWork has three content collections defined for Payload CMS:
- **Essays** - Blog posts and articles
- **Tools** - Tool reviews and recommendations
- **Playbook Sections** - Sections of the automation playbook

These collection definitions are already created in the `cms/collections/` directory, but Payload CMS needs to be installed and configured to use them.

## Prerequisites

- Node.js 18+ installed
- MongoDB database (local or cloud-hosted like MongoDB Atlas)
- Basic understanding of Next.js

## Installation Steps

### 1. Install Payload CMS

```bash
npm install payload@latest
npm install @payloadcms/db-mongodb@latest
npm install @payloadcms/richtext-lexical@latest
```

### 2. Create Payload Config File

Create a file `payload.config.ts` in the root directory:

```typescript
import { buildConfig } from 'payload/config'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'

// Import your collections
import { Essays } from './cms/collections/Essays'
import { Tools } from './cms/collections/Tools'
import { PlaybookSections } from './cms/collections/PlaybookSections'

export default buildConfig({
  // Secret key for JWT - use a long random string
  secret: process.env.PAYLOAD_SECRET || '',
  
  // Database connection
  db: mongooseAdapter({
    url: process.env.MONGODB_URI || '',
  }),
  
  // Admin panel configuration
  admin: {
    user: 'users', // Collection for admin users
    meta: {
      titleSuffix: '- WorkFreeWork CMS',
      favicon: '/favicon.ico',
      ogImage: '/og-image.png',
    },
  },
  
  // Rich text editor
  editor: lexicalEditor({}),
  
  // Collections
  collections: [
    Essays,
    Tools,
    PlaybookSections,
    // You'll also need a Users collection for authentication
    {
      slug: 'users',
      auth: true,
      admin: {
        useAsTitle: 'email',
      },
      fields: [
        {
          name: 'name',
          type: 'text',
        },
        {
          name: 'role',
          type: 'select',
          options: [
            { label: 'Admin', value: 'admin' },
            { label: 'Editor', value: 'editor' },
          ],
          defaultValue: 'editor',
          required: true,
        },
      ],
    },
    // Media collection for image uploads
    {
      slug: 'media',
      upload: {
        staticDir: path.resolve(__dirname, './public/media'),
        imageSizes: [
          {
            name: 'thumbnail',
            width: 400,
            height: 300,
            position: 'centre',
          },
          {
            name: 'card',
            width: 768,
            height: 1024,
            position: 'centre',
          },
        ],
        adminThumbnail: 'thumbnail',
        mimeTypes: ['image/*'],
      },
      fields: [
        {
          name: 'alt',
          type: 'text',
        },
      ],
    },
    // Team members collection (referenced by Essays)
    {
      slug: 'team-members',
      admin: {
        useAsTitle: 'name',
      },
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'bio',
          type: 'textarea',
        },
        {
          name: 'avatar',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
  ],
  
  // TypeScript configuration
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  
  // GraphQL configuration (optional)
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
})
```

### 3. Set Up Environment Variables

Add these to your `.env.local` file:

```bash
# MongoDB connection string
MONGODB_URI=mongodb://localhost:27017/workfreework
# For MongoDB Atlas: mongodb+srv://username:password@cluster.mongodb.net/workfreework

# Payload CMS secret (generate a long random string)
PAYLOAD_SECRET=your-secret-key-here-make-it-very-long-and-random

# Revalidation secret (for cache invalidation)
REVALIDATION_SECRET=another-secret-for-revalidation

# Server URL
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
```

### 4. Create Next.js API Route for Payload

Create `app/api/(payload)/[...slug]/route.ts`:

```typescript
import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'

const handler = async (req: Request, context: any) => {
  const payload = await getPayloadHMR({ config: configPromise })
  return payload.authenticate({ req, context })
}

export const GET = handler
export const POST = handler
export const PUT = handler
export const PATCH = handler
export const DELETE = handler
```

### 5. Update next.config.js

Add Payload to your Next.js config:

```javascript
const { withPayload } = require('@payloadcms/next/withPayload')

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your existing config
}

module.exports = withPayload(nextConfig)
```

### 6. Create First Admin User

Run this command to create your first admin user:

```bash
npm run payload create-first-user
```

Or add a script to `package.json`:

```json
{
  "scripts": {
    "payload": "payload",
    "generate:types": "payload generate:types"
  }
}
```

## Using the CMS

### Accessing the Admin Panel

Once installed and configured, access the CMS at:

```
http://localhost:3000/admin
```

Login with the admin credentials you created.

### Managing Essays

1. Navigate to **Collections** → **Essays**
2. Click **Create New** to add an essay
3. Fill in the fields:
   - **Title**: Essay title
   - **Slug**: URL-friendly version (auto-generated from title)
   - **Content**: Rich text editor for the essay body
   - **Excerpt**: Short summary for listings
   - **Author**: Select from team members
   - **Publish Date**: When the essay should be published
   - **Tags**: Add relevant tags
   - **Featured Image**: Upload an image
   - **SEO**: Meta title, description, and keywords
   - **Status**: Draft or Published
4. Click **Save** or **Save and Publish**

### Managing Tools

1. Navigate to **Collections** → **Tools**
2. Click **Create New**
3. Fill in:
   - **Name**: Tool name
   - **Description**: What the tool does
   - **Category**: Automation, Marketing, Productivity, or Finance
   - **URL**: Link to the tool
   - **Pricing**: Free, Freemium, or Paid
   - **Features**: List of key features
   - **Logo**: Upload tool logo
4. Click **Save**

### Managing Playbook Sections

1. Navigate to **Collections** → **Playbook Sections**
2. Click **Create New**
3. Fill in:
   - **Title**: Section title
   - **Content**: Rich text content
   - **Order**: Number determining display order
   - **Resources**: Link related tools
4. Click **Save**

## Fetching Content in Your App

### Using Payload's Local API

In Server Components or API routes:

```typescript
import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'

export async function getEssays() {
  const payload = await getPayloadHMR({ config: configPromise })
  
  const essays = await payload.find({
    collection: 'essays',
    where: {
      status: {
        equals: 'published',
      },
    },
    sort: '-publishDate',
  })
  
  return essays.docs
}
```

### Using REST API

From Client Components or external services:

```typescript
// Fetch all published essays
const response = await fetch('http://localhost:3000/api/essays', {
  next: { revalidate: 60 } // Cache for 60 seconds
})
const data = await response.json()
const essays = data.docs

// Fetch a specific essay by slug
const response = await fetch(
  'http://localhost:3000/api/essays?where[slug][equals]=my-essay-slug'
)
```

### Using GraphQL API

```graphql
query {
  Essays(where: { status: { equals: "published" } }) {
    docs {
      id
      title
      slug
      content
      excerpt
      author {
        name
      }
      publishDate
      featuredImage {
        url
        alt
      }
    }
  }
}
```

## Content Revalidation

The collections are already configured with hooks that automatically revalidate your Next.js cache when content changes. This happens through the `/api/revalidate` endpoint.

When you create, update, or delete content in the CMS:
1. The collection hook fires
2. It sends a POST request to `/api/revalidate` with the Authorization header
3. Next.js revalidates the affected pages
4. Your site updates automatically

## Database Setup

### Local MongoDB

Install MongoDB locally:

```bash
# macOS
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community

# Ubuntu/Debian
sudo apt install mongodb
sudo systemctl start mongodb

# Windows
# Download from https://www.mongodb.com/try/download/community
```

### MongoDB Atlas (Cloud)

1. Sign up at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Create a database user
4. Whitelist your IP (or use 0.0.0.0/0 for development)
5. Get your connection string
6. Add it to `.env.local` as `MONGODB_URI`

## Troubleshooting

### "Cannot find module '@payloadcms/...'"

Make sure you've installed all required packages:
```bash
npm install payload @payloadcms/db-mongodb @payloadcms/richtext-lexical
```

### "MongoDB connection failed"

- Check your `MONGODB_URI` is correct
- Ensure MongoDB is running (if local)
- Verify network access (if using Atlas)
- Check credentials are correct

### "Revalidation failed with 401"

- Ensure `REVALIDATION_SECRET` is set in your environment
- Check that the secret matches between your CMS collections and the revalidate endpoint
- The Authorization header must be: `Bearer ${process.env.REVALIDATION_SECRET}`

### "Cannot access /admin"

- Make sure you've created the admin API route at `app/api/(payload)/[...slug]/route.ts`
- Ensure `withPayload` is wrapping your Next.js config
- Check that your Next.js server is running

## Alternative: Using the Existing Collections Without Payload

If you're not ready to set up Payload CMS yet, you can continue using the existing static content approach:

1. Essays are currently defined in `app/essays/[slug]/page.tsx`
2. Tools are in `app/tools/page.tsx` or `app/toolkit/page.tsx`
3. Continue editing these files directly

The CMS collections are **optional** and provide a better content management experience when you're ready to set them up.

## Next Steps

1. **Install MongoDB** - Set up local MongoDB or create a MongoDB Atlas account
2. **Install Payload** - Run the npm install commands above
3. **Create Config** - Add the `payload.config.ts` file
4. **Set Environment Variables** - Configure your `.env.local`
5. **Create Admin User** - Initialize your first admin account
6. **Start Using CMS** - Access `/admin` and start managing content

## Resources

- [Payload CMS Documentation](https://payloadcms.com/docs)
- [Payload with Next.js Guide](https://payloadcms.com/docs/getting-started/nextjs)
- [MongoDB Atlas Setup](https://www.mongodb.com/docs/atlas/getting-started/)
- [Next.js ISR Documentation](https://nextjs.org/docs/app/building-your-application/data-fetching/incremental-static-regeneration)

---

Need help? The collection definitions are already built and waiting for you in `cms/collections/`. Once you follow the setup steps above, you'll have a fully functional CMS for managing your content!

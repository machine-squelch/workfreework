# Payload CMS Setup Guide for WorkFreeWork

## Overview

This guide walks you through setting up Payload CMS for WorkFreeWork, migrating existing content, and integrating it with your Next.js application.

## Prerequisites

- Node.js 18+ installed
- MongoDB database (local or cloud)
- AWS S3 bucket (optional, for media storage)

## Installation

### 1. Install Dependencies

```bash
npm install payload @payloadcms/db-mongodb @payloadcms/richtext-lexical @payloadcms/plugin-cloud-storage @payloadcms/plugin-cloud-storage/s3
```

### 2. Environment Variables

Create or update your `.env.local` file:

```bash
# Database
DATABASE_URI=mongodb://localhost:27017/workfreework

# Payload
PAYLOAD_SECRET=your-secret-key-here
NEXT_PUBLIC_SERVER_URL=http://localhost:3000

# Preview Mode
PREVIEW_SECRET=your-preview-secret-here

# Revalidation
REVALIDATION_SECRET=your-revalidation-secret-here

# S3 (Optional - for media storage)
S3_ENDPOINT=https://s3.amazonaws.com
S3_REGION=us-east-1
S3_ACCESS_KEY_ID=your-access-key
S3_SECRET_ACCESS_KEY=your-secret-key
S3_BUCKET=your-bucket-name
```

### 3. Update next.config.js

Add Payload to your Next.js config:

```javascript
const { withPayload } = require('@payloadcms/next/withPayload')

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your existing config
  images: {
    domains: ['your-s3-bucket.s3.amazonaws.com'], // Add your CDN domain
  },
}

module.exports = withPayload(nextConfig)
```

### 4. Update package.json Scripts

Add these scripts:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "payload": "payload",
    "generate:types": "payload generate:types",
    "migrate:essays": "ts-node scripts/migrate-essays.ts",
    "migrate:tools": "ts-node scripts/migrate-tools.ts"
  }
}
```

## Setup Steps

### Step 1: Start MongoDB

If running locally:

```bash
# macOS (with Homebrew)
brew services start mongodb-community

# Linux
sudo systemctl start mongod

# Or use Docker
docker run -d -p 27017:27017 --name mongodb mongo:latest
```

### Step 2: Generate TypeScript Types

```bash
npm run generate:types
```

This creates `payload-types.ts` with TypeScript types for all your collections.

### Step 3: Create First Admin User

Start the dev server:

```bash
npm run dev
```

Navigate to `http://localhost:3000/admin` and create your first admin user.

### Step 4: Run Migrations

Migrate your existing content:

```bash
# Migrate essays
npm run migrate:essays

# Migrate tools
npm run migrate:tools
```

## Content Management

### Accessing the Admin Panel

Visit `http://localhost:3000/admin` and log in with your admin credentials.

### Creating Content

1. **Essays:**
   - Click "Essays" in the sidebar
   - Click "Create New"
   - Fill in the fields
   - Click "Save" (draft) or "Publish"

2. **Tools:**
   - Click "Tools" in the sidebar
   - Click "Create New"
   - Fill in the fields
   - Click "Save"

3. **Team Members:**
   - Click "Team Members" in the sidebar
   - Click "Create New"
   - Upload a photo
   - Fill in bio and social links
   - Click "Save"

### Draft/Preview Workflow

1. Create or edit content in the admin panel
2. Save as draft (don't publish yet)
3. Click "Preview" to see how it looks
4. Make adjustments
5. Click "Publish" when ready

## Frontend Integration

### Fetching Data in Server Components

```typescript
import { getEssays } from '@/lib/payload-client'

export default async function EssaysPage() {
  const essays = await getEssays()
  
  return (
    <div>
      {essays.map((essay) => (
        <article key={essay.id}>
          <h2>{essay.title}</h2>
          <p>{essay.excerpt}</p>
        </article>
      ))}
    </div>
  )
}
```

### Incremental Static Regeneration (ISR)

Add revalidation to your pages:

```typescript
export const revalidate = 60 // Revalidate every 60 seconds

export default async function EssayPage({ params }: { params: { slug: string } }) {
  const essay = await getEssayBySlug(params.slug)
  
  return <div>{/* Render essay */}</div>
}
```

### Using Images from CMS

```typescript
import Image from 'next/image'

export default function EssayCard({ essay }) {
  const featuredImage = essay.featuredImage
  
  if (typeof featuredImage === 'object' && featuredImage.url) {
    return (
      <Image
        src={featuredImage.url}
        alt={featuredImage.alt || essay.title}
        width={featuredImage.width}
        height={featuredImage.height}
      />
    )
  }
  
  return null
}
```

## Webhooks & Revalidation

### Configure Payload Webhooks

1. Go to Settings → Webhooks in the admin panel
2. Create a new webhook:
   - **URL:** `https://your-domain.com/api/revalidate`
   - **Events:** `afterChange`
   - **Collections:** Select all content collections
   - **Headers:** Add `Authorization: Bearer your-revalidation-secret`

### Testing Revalidation Locally

```bash
curl -X POST http://localhost:3000/api/revalidate \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer your-revalidation-secret" \
  -d '{"collection":"essays","slug":"quit-capitalism"}'
```

## Deployment

### Option 1: Deploy with Vercel

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

**Important:** Make sure to set up a MongoDB Atlas database for production.

### Option 2: Self-Host

1. Set up a VPS (DigitalOcean, AWS, etc.)
2. Install Node.js and MongoDB
3. Clone your repository
4. Install dependencies: `npm install`
5. Build: `npm run build`
6. Start: `npm start`

## Troubleshooting

### Issue: "Cannot connect to MongoDB"

**Solution:** Check your `DATABASE_URI` in `.env.local` and ensure MongoDB is running.

### Issue: "Payload admin panel not loading"

**Solution:** Ensure `withPayload()` is wrapping your Next.js config and restart the dev server.

### Issue: "Images not displaying"

**Solution:** Add your S3/CDN domain to `next.config.js` under `images.domains`.

### Issue: "Revalidation not working"

**Solution:** 
1. Check that webhooks are configured correctly in Payload
2. Verify the `REVALIDATION_SECRET` matches in both places
3. Check the webhook logs in Payload admin

## Best Practices

1. **Always use drafts** for content that's not ready to publish
2. **Set up staging environment** to test changes before production
3. **Back up your database** regularly
4. **Use environment-specific secrets** (different for dev/staging/prod)
5. **Monitor webhook logs** to catch revalidation issues early
6. **Optimize images** before uploading (use WebP format when possible)
7. **Use SEO fields** for every essay to improve search rankings

## Content Guidelines

### Writing Essays

- **Title:** Clear, compelling, under 60 characters
- **Slug:** Lowercase, hyphenated, descriptive
- **Excerpt:** 1-2 sentences, enticing summary
- **Content:** Use headings, short paragraphs, bullet points
- **Tags:** 3-5 relevant tags
- **Featured Image:** 1200x630px for optimal social sharing
- **SEO Title:** Include primary keyword
- **SEO Description:** 150-160 characters

### Adding Tools

- **Name:** Official product name
- **Description:** Clear value proposition
- **Category:** Choose the most relevant category
- **URL:** Link to homepage or signup page
- **Pricing:** Be accurate (check their pricing page)
- **Features:** List 3-5 key features

## Migration Checklist

- [ ] Install Payload dependencies
- [ ] Set up environment variables
- [ ] Configure MongoDB
- [ ] Generate TypeScript types
- [ ] Create admin user
- [ ] Run migration scripts
- [ ] Verify data in admin panel
- [ ] Update frontend components
- [ ] Test ISR and revalidation
- [ ] Configure webhooks
- [ ] Deploy to production
- [ ] Update DNS/CDN settings
- [ ] Monitor for issues

## Support

If you encounter issues:

1. Check the [Payload documentation](https://payloadcms.com/docs)
2. Review the migration scripts for errors
3. Check the browser console and server logs
4. Verify all environment variables are set correctly

## Next Steps

1. Customize the admin panel UI (colors, logo)
2. Add more collections as needed
3. Set up automated backups
4. Implement content versioning
5. Add localization for multiple languages
6. Create custom fields and validation rules

---

Your CMS is now ready! Start creating content and watch it automatically sync to your website.

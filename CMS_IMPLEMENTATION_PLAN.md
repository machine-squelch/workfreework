# Payload CMS Implementation Plan for WorkFreeWork

## 1. Schema Design

### Essays

- **Collection Name:** `Essays`
- **Fields:**
  - `title` (text, required)
  - `slug` (text, required, unique)
  - `content` (richText, required)
  - `excerpt` (textarea)
  - `author` (relationship to `TeamMembers`)
  - `publishDate` (date, required)
  - `tags` (array of text)
  - `featuredImage` (upload)
  - `seo` (group)
    - `title` (text)
    - `description` (textarea)
    - `keywords` (text)

### Tools

- **Collection Name:** `Tools`
- **Fields:**
  - `name` (text, required)
  - `description` (textarea, required)
  - `category` (select: "Automation", "Marketing", "Productivity", "Finance")
  - `url` (text, required, url)
  - `pricing` (select: "Free", "Freemium", "Paid")
  - `features` (array of text)

### Team Members

- **Collection Name:** `TeamMembers`
- **Fields:**
  - `name` (text, required)
  - `role` (text, required)
  - `bio` (richText)
  - `photo` (upload)
  - `socialLinks` (group)
    - `twitter` (text, url)
    - `linkedin` (text, url)
    - `github` (text, url)

### Playbook Sections

- **Collection Name:** `PlaybookSections`
- **Fields:**
  - `title` (text, required)
  - `content` (richText, required)
  - `order` (number, required)
  - `resources` (relationship to `Tools`)

## 2. Migration Strategy

1. **Create Migration Scripts:**
   - Write a Node.js script for each content type (essays, tools, etc.).
   - Use the Payload Local API to create new documents.

2. **Extract Existing Content:**
   - **Essays:** Parse content from existing Markdown files.
   - **Tools:** Extract data from hardcoded arrays/objects.
   - **Team Members:** Extract from hardcoded data.
   - **Playbook:** Extract from hardcoded data.

3. **Run Migration:**
   - Execute the scripts to populate the CMS.
   - Verify data integrity in the Payload admin panel.

## 3. API Integration

1. **Data Fetching Functions:**
   - Create a `lib/payload.ts` file with functions to fetch data from the Payload Local API.
   - Use `payload.find()` and `payload.findByID()`.

2. **Incremental Static Regeneration (ISR):**
   - Use `revalidate` option in `fetch` calls to enable ISR.
   - Set a reasonable revalidation time (e.g., 60 seconds).

3. **Component Refactoring:**
   - Update all components that use hardcoded data to fetch from the CMS.
   - Use `async/await` in Server Components.

## 4. Preview Mode

1. **Create Preview Route:**
   - Implement a Next.js API route (`/api/preview`) to handle preview requests.
   - Use `payload.find()` with `draft: true` to fetch draft content.

2. **Enable Draft Mode:**
   - Use Next.js Draft Mode to set a cookie.
   - Redirect to the correct page.

3. **Frontend Logic:**
   - Check for draft mode in data fetching functions.
   - Display a banner indicating preview mode.

## 5. Webhooks

1. **Create Webhook Endpoint:**
   - Create a Next.js API route (`/api/revalidate`) to handle revalidation requests.
   - Use `revalidateTag()` or `revalidatePath()` to clear the cache.

2. **Configure Payload Webhooks:**
   - In the Payload admin panel, create webhooks for create, update, and delete events.
   - Point the webhooks to the revalidation endpoint.

## 6. Image Optimization

1. **Configure Payload Storage:**
   - Use the Payload S3 plugin to store images on a CDN (e.g., AWS S3).

2. **Next.js Image Component:**
   - Configure `next.config.js` to allow the CDN hostname.
   - Use the `<Image>` component to optimize images.

## 7. Rollback Plan

1. **Feature Flag:**
   - Use a feature flag to switch between the old and new content systems.
   - If issues arise, disable the flag to revert to hardcoded data.

2. **Code Branching:**
   - Develop the CMS integration on a separate Git branch.
   - If rollback is needed, merge the `main` branch into the feature branch to resolve conflicts.

3. **Database Backup:**
   - Before migration, back up the existing database (if any).
   - If migration fails, restore the backup.

# Deployment Guide

## Prerequisites

- Node.js 18+ installed
- Git repository (GitHub, GitLab, or Bitbucket)
- Domain name (optional but recommended)


## Option 0: Deploy to GitHub Pages (Static Site — workfreework.com)

This repository is configured for automatic static deployment to GitHub Pages via GitHub Actions. Every push to `main` triggers a build and deployment.

### Step 1: Enable GitHub Pages

1. Go to the repository **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**
3. Save

### Step 2: Configure Secrets (Optional)

In **Settings → Secrets and variables → Actions**, add these secrets if needed:

| Secret | Description |
|--------|-------------|
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Clerk auth key (for Sign In/Sign Up) |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Stripe public key (for checkout) |

And these repository variables:

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_ENABLE_RONNY_WIDGET` | Set to `true` to enable Ronny AI widget |

### Step 3: Configure DNS for workfreework.com

At your domain registrar, configure these DNS records:

```
A     @     185.199.108.153
A     @     185.199.109.153
A     @     185.199.110.153
A     @     185.199.111.153
CNAME www   machine-squelch.github.io.
```

### Step 4: Set Custom Domain in GitHub Pages

1. Go to **Settings → Pages**
2. Under **Custom domain**, enter `workfreework.com`
3. Enable **Enforce HTTPS**

> **Note:** The `public/CNAME` file is already configured with `workfreework.com`. GitHub Pages uses this file to configure the custom domain automatically on each deployment.

### What Works on GitHub Pages

✅ All static pages (home, essays, tools, pricing, etc.)  
✅ Space Grotesk font (loaded from Google Fonts CDN)  
✅ Dynamic essays and toolkit pages (pre-rendered)  
✅ PWA manifest  
✅ Sitemap and robots.txt  

### What Requires a Server (Not Available on GitHub Pages)

⚠️ Stripe checkout (requires server-side Stripe API)  
⚠️ Email subscription API (requires server)  
⚠️ Ronny AI widget (requires Anthropic API access)  
⚠️ Clerk authentication (requires server-side runtime)  

For full functionality, deploy to **Vercel** (see Option 1 below) and point your domain there instead.

---

## Option 1: Deploy to Vercel (Recommended)

Vercel is built by the creators of Next.js and offers the best Next.js deployment experience.

### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/workfreework.git
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel auto-detects Next.js settings
5. Click "Deploy"

### Step 3: Configure Domain

1. In Vercel dashboard, go to your project
2. Click "Domains"
3. Add your custom domain (e.g., workfreework.com)
4. Update DNS records at your domain registrar:
   - Add CNAME record: `www` → `cname.vercel-dns.com`
   - Add A record: `@` → Vercel's IP (provided in dashboard)

### Step 4: Add Environment Variables

1. In Vercel dashboard → Settings → Environment Variables
2. Add variables from `.env.example`
3. Redeploy for changes to take effect

---

## Option 2: Deploy to Netlify

### Step 1: Build Settings

Create `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

### Step 2: Deploy

1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import from Git"
3. Connect your repository
4. Build settings are auto-detected
5. Deploy

### Step 3: Environment Variables

- Go to Site Settings → Environment Variables
- Add your variables

---

## Option 3: Self-Host with Docker

### Dockerfile

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

### Deploy

```bash
# Build image
docker build -t workfreework .

# Run container
docker run -p 3000:3000 --env-file .env.local workfreework
```

---

## Post-Deployment Checklist

### ✅ Essential Setup

- [ ] Configure ConvertKit form action in `EmailCapture.tsx`
- [ ] Add Plausible analytics script to `layout.tsx`
- [ ] Test all email capture forms
- [ ] Verify sitemap at `/sitemap.xml`
- [ ] Check robots.txt at `/robots.txt`
- [ ] Test all page links

### ✅ SEO & Analytics

- [ ] Submit sitemap to Google Search Console
- [ ] Set up Plausible analytics
- [ ] Verify Open Graph tags (use [OpenGraph.xyz](https://opengraph.xyz))
- [ ] Test page speed (use [PageSpeed Insights](https://pagespeed.web.dev))
- [ ] Add schema markup for articles

### ✅ Email & Marketing

- [ ] Create welcome email sequence in ConvertKit
- [ ] Create playbook PDF and upload
- [ ] Set up automated email delivery for playbook
- [ ] Test newsletter signup flow
- [ ] Create email templates

### ✅ Content

- [ ] Write and publish first 3 essays
- [ ] Create playbook PDF content
- [ ] Add real testimonials (or remove placeholder text)
- [ ] Update founder bio with real information
- [ ] Add logo and favicon

### ✅ Community

- [ ] Set up Discord server (if using)
- [ ] Configure membership payment system (Stripe)
- [ ] Create community guidelines document
- [ ] Set up onboarding flow for new members

### ✅ Legal & Privacy

- [ ] Review and customize privacy policy
- [ ] Add cookie consent if needed (not required if using Plausible)
- [ ] Set up GDPR-compliant data handling
- [ ] Create terms of service (if offering paid products)

---

## Performance Optimization

### Image Optimization

Next.js automatically optimizes images. For best results:

```tsx
import Image from 'next/image'

<Image 
  src="/your-image.jpg"
  alt="Description"
  width={800}
  height={600}
  priority // for above-the-fold images
/>
```

### Font Optimization

Already configured with `next/font`:
- Space Grotesk loads optimally
- No layout shift
- Self-hosted (no external requests)

### Caching

Vercel automatically handles caching. For other platforms:
- Set cache headers for static assets
- Enable CDN caching
- Use ISR (Incremental Static Regeneration) for essays

---

## Monitoring

### Recommended Tools

- **Analytics:** Plausible (privacy-friendly)
- **Errors:** Sentry (optional)
- **Uptime:** UptimeRobot or Pingdom
- **Performance:** Vercel Analytics or Google PageSpeed

### Set Up Alerts

1. Configure uptime monitoring
2. Set up email alerts for downtime
3. Monitor email delivery rates in ConvertKit
4. Track form conversion rates

---

## Scaling

### When Traffic Grows

1. **Vercel Pro:** Upgrade for more bandwidth ($20/mo)
2. **CDN:** Already included with Vercel/Netlify
3. **Database:** Add Supabase or PlanetScale for user accounts
4. **Email:** ConvertKit scales automatically

### Content Scaling

When you have 50+ essays, consider:
- Moving to a headless CMS (Sanity, Contentful)
- Adding search functionality (Algolia)
- Implementing pagination
- Adding category filters

---

## Troubleshooting

### Build Fails

```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Forms Not Working

1. Check ConvertKit form action URL
2. Verify CORS settings
3. Test with network inspector
4. Check email validation

### Styles Not Loading

1. Clear browser cache
2. Check Tailwind config
3. Verify globals.css import in layout
4. Rebuild project

---

## Support

Need help? Contact:
- **Email:** hello@workfreework.com
- **Issues:** Create an issue in GitHub repo

---

**Last Updated:** March 2025


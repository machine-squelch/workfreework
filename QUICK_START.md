# Quick Start Guide

Get WorkFreeWork running locally in 5 minutes.

## Prerequisites

- Node.js 18 or higher
- npm or yarn

## Installation

```bash
# Navigate to project directory
cd /Users/user9/money

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure at a Glance

```
/app              # All pages and routes
  /page.tsx       # Homepage
  /about/         # About page
  /essays/        # Essays + dynamic routes
  /playbook/      # Playbook page
  /tools/         # Tools directory
  /newsletter/    # Newsletter page
  /community/     # Community page
  
/components       # Reusable components
  Header.tsx      # Navigation
  Footer.tsx      # Footer
  EmailCapture.tsx # Email form
  Hero.tsx        # Homepage hero

/public           # Static files
```

## Key Files to Customize

1. **`app/layout.tsx`** - Site-wide metadata and navigation
2. **`tailwind.config.ts`** - Colors and design system
3. **`components/EmailCapture.tsx`** - Connect to ConvertKit
4. **`app/essays/[slug]/page.tsx`** - Add your essay content

## Next Steps

1. ✅ Review `README.md` for full documentation
2. ✅ Check `DEPLOYMENT.md` for deployment guide
3. ✅ Read `CONTENT_GUIDE.md` for writing guidelines
4. ✅ Follow `LAUNCH_CHECKLIST.md` for launch prep

## Common Commands

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Need Help?

- 📖 Full docs: `README.md`
- 🚀 Deployment: `DEPLOYMENT.md`
- ✍️ Content: `CONTENT_GUIDE.md`
- 📋 Launch: `LAUNCH_CHECKLIST.md`

## What's Included

✅ 9 fully designed pages
✅ Responsive mobile design
✅ SEO optimized
✅ Email capture forms
✅ 2 sample essays with full content
✅ Tools directory structure
✅ Sitemap and robots.txt
✅ Privacy policy and contact pages

## What You Need to Add

- [ ] Connect ConvertKit for email capture
- [ ] Add your real content
- [ ] Create playbook PDF
- [ ] Add logo and favicon
- [ ] Configure analytics
- [ ] Write more essays

---

**Built with:** Next.js 14, TypeScript, Tailwind CSS

**Ready to deploy to:** Vercel, Netlify, or any Node.js host


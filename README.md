# WorkFreeWork

A smart, media-savvy site exploring how AI automates work, the social and economic fallout, and practical paths for people to adapt — equal parts analysis, sarcasm, and actual usable tools.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🏗️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Font:** Space Grotesk (Google Fonts)
- **Deployment:** Vercel (recommended)

## 📁 Project Structure

```
/app
  /layout.tsx           # Root layout with navigation
  /page.tsx             # Homepage
  /about/               # About page
  /essays/              # Essays listing + dynamic routes
  /playbook/            # Free playbook landing page
  /tools/               # Tools directory
  /newsletter/          # Newsletter signup
  /community/           # Community/membership
  /press/               # Media kit
  /privacy/             # Privacy policy
  /contact/             # Contact page
  
/components
  /Header.tsx           # Site navigation
  /Footer.tsx           # Site footer
  /EmailCapture.tsx     # Reusable email form
  /Hero.tsx             # Homepage hero
  
/public                 # Static assets
```

## 🎨 Design System

### Colors
- **Toxic Green:** `#A6FF00` (primary CTA, accents)
- **Accent Red:** `#FF3B3F` (secondary accents)
- **Bone Gray:** `#F5F5F0` (background)
- **Black:** `#000000` (text, dark sections)

### Typography
- **Primary Font:** Space Grotesk
- **Fallback:** system-ui, sans-serif

## 📧 Email Integration

The site uses email capture forms throughout. To connect them to ConvertKit:

1. Sign up for [ConvertKit](https://convertkit.com)
2. Create a form in ConvertKit
3. Get your form action URL
4. Update `components/EmailCapture.tsx`:

```tsx
// Replace the handleSubmit function with:
<form 
  action="https://app.convertkit.com/forms/YOUR_FORM_ID/subscriptions"
  method="post"
  className="flex flex-col sm:flex-row gap-3"
>
  <input type="email" name="email_address" required />
 <button type="submit">Subscribe</button>
</form>
```

## 🤖 Ronny (Secure Sitewide Widget)

- Ronny now supports a sitewide widget with subscription gating. Toggle it with `NEXT_PUBLIC_ENABLE_RONNY_WIDGET=true`.
- Configure `RONNY_REQUIRE_SUBSCRIPTION` (default `true`) and set a long, random `RONNY_SUBSCRIBER_SECRET`. Members enter this code in the widget to unlock full responses; everyone else gets friendly canned replies pointing to your content funnel.
- The widget fetches CSRF tokens, rate limits user input, and sets an `HttpOnly` cookie when a valid member code is provided. The backend sanitizes messages and enforces strict payload limits before hitting Anthropic.
- All Anthropic requests still require `ANTHROPIC_API_KEY` (and optionally `ANTHROPIC_MODEL`). Without those env vars the API short-circuits.
- You can still access the `/ronny` page for internal testing; it uses the same secure endpoint and respects the subscription cookie.

## 🔐 Authentication (Clerk)

- The entire app now runs inside `ClerkProvider`, and middleware enforces Clerk auth + the sitewide security headers on every route (including API routes).
- Required env vars: `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`, `CLERK_SECRET_KEY`, and optionally override `CLERK_SIGN_IN_URL` / `CLERK_SIGN_UP_URL` for custom routes.
- The header automatically shows a Sign In button for signed-out users and a `UserButton` for signed-in users. You can extend this to gate pages or set cookies (e.g., grant Ronny full access automatically for paying members) using Clerk’s server helpers.

## 🔧 Environment Variables

Create a `.env.local` file:

```bash
# Optional: Analytics
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=workfreework.com

# Optional: ConvertKit
NEXT_PUBLIC_CONVERTKIT_FORM_ID=your_form_id

# Stripe (Builder & Operator tiers)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxx
STRIPE_SECRET_KEY=sk_test_xxx
STRIPE_PRICE_ID_BUILDER=price_xxx
STRIPE_PRICE_ID_OPERATOR=price_xxx
STRIPE_WEBHOOK_SECRET=whsec_xxx

# Accelerator tiers currently email-to-book
# STRIPE_PRICE_ID_ACCELERATOR_COHORT=
# STRIPE_PRICE_ID_ACCELERATOR_DFY=
```

## 📊 Analytics Setup

The site is configured for [Plausible Analytics](https://plausible.io) (privacy-friendly, no cookies).

1. Sign up for Plausible
2. Add your domain
3. Add this to `app/layout.tsx` before the closing `</head>`:

```tsx
<script defer data-domain="workfreework.com" src="https://plausible.io/js/script.js"></script>
```

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy (auto-detects Next.js)

```bash
# Or use Vercel CLI
npm i -g vercel
vercel
```

### Other Platforms

The site works on any platform that supports Next.js:
- Netlify
- Cloudflare Pages
- AWS Amplify
- Self-hosted with Node.js

## 📝 Content Management

### Adding New Essays

1. Add essay data to `app/essays/[slug]/page.tsx`
2. Update the `essaysData` object
3. Update `app/essays/page.tsx` with the new essay in the listing

**Future:** Consider using MDX files or a headless CMS like Sanity/Contentful for easier content management.

### Adding New Tools

Edit `app/tools/page.tsx` and add tool cards to the grid.

## 🎯 SEO

The site includes:
- Dynamic metadata per page
- Sitemap (`/sitemap.xml`)
- Robots.txt
- Open Graph tags
- Structured data ready

## 🛠️ Customization

### Change Brand Colors

Edit `tailwind.config.ts`:

```ts
colors: {
  'toxic-green': '#YOUR_COLOR',
  'accent-red': '#YOUR_COLOR',
  'bone-gray': '#YOUR_COLOR',
}
```

### Change Font

Edit `app/layout.tsx`:

```ts
import { Your_Font } from 'next/font/google'

const yourFont = Your_Font({
  subsets: ['latin'],
  variable: '--font-your-font',
})
```

## 📋 TODO / Roadmap

- [ ] Connect ConvertKit forms
- [ ] Add Plausible analytics script
- [ ] Create logo and favicon
- [ ] Set up Discord/community platform
- [ ] Add more essay content
- [ ] Create downloadable playbook PDF
- [ ] Set up Stripe for paid memberships
- [ ] Add search functionality
- [ ] Implement dark mode toggle (optional)

## 🐛 Known Issues

- Email forms currently show an alert (replace with actual ConvertKit integration)
- Favicon needs to be added
- Logo placeholder needs custom design

## 📄 License

© 2025 WorkFreeWork. All rights reserved.

## 🤝 Contributing

This is a personal project, but feedback and suggestions are welcome! 

Contact: hello@workfreework.com

---

**Built by Thinkazoo** | Automation for humans, not the other way around.

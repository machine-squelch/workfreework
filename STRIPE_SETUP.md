# Stripe Setup Guide

Complete guide to set up paid memberships with Stripe.

## Overview

You have 3 membership tiers ready to sell:
1. **The Collective** - $15/month
2. **WorkFree Accelerator** - $200/month
3. **Founding Patron** - $100/month

---

## Step 1: Create Stripe Account

1. Go to [stripe.com](https://stripe.com)
2. Sign up for free account
3. Complete business verification
4. Enable payment methods

---

## Step 2: Create Products & Prices

In Stripe Dashboard → Products:

### Product 1: The Collective
- **Name:** The Collective
- **Description:** Private community, weekly playbooks, automation scripts, co-working sessions
- **Pricing:** $15/month recurring
- **Copy the Price ID** (starts with `price_...`)

### Product 2: WorkFree Accelerator
- **Name:** WorkFree Accelerator
- **Description:** 6-week transformation cohort, personal automation audit, weekly coaching
- **Pricing:** $200/month recurring
- **Copy the Price ID**

### Product 3: Founding Patron
- **Name:** Founding Patron
- **Description:** Everything in Accelerator + monthly 1-on-1s + founding member status
- **Pricing:** $100/month recurring
- **Copy the Price ID**

---

## Step 3: Get API Keys

In Stripe Dashboard → Developers → API Keys:

1. **Publishable Key** (starts with `pk_test_...` or `pk_live_...`)
2. **Secret Key** (starts with `sk_test_...` or `sk_live_...`)

---

## Step 4: Configure Environment Variables

Add to `.env.local`:

```bash
# Stripe Keys
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_YOUR_KEY_HERE
STRIPE_SECRET_KEY=sk_test_YOUR_SECRET_KEY_HERE

# Stripe Price IDs
STRIPE_PRICE_ID_COLLECTIVE=price_YOUR_COLLECTIVE_PRICE_ID
STRIPE_PRICE_ID_ACCELERATOR=price_YOUR_ACCELERATOR_PRICE_ID
STRIPE_PRICE_ID_PATRON=price_YOUR_PATRON_PRICE_ID

# Site URL
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

---

## Step 5: Install Stripe Package

```bash
npm install stripe
```

---

## Step 6: Activate Stripe Code

Uncomment the Stripe code in `/app/api/checkout/route.ts`:

```typescript
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

const session = await stripe.checkout.sessions.create({
  line_items: [
    {
      price: priceIds[tier],
      quantity: 1,
    },
  ],
  mode: 'subscription',
  success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/welcome?tier=${tier}`,
  cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/pricing`,
})

return NextResponse.redirect(session.url)
```

---

## Step 7: Test in Development Mode

1. Restart server: `npm run dev`
2. Visit `/pricing`
3. Click "Join The Collective"
4. Use Stripe test card: `4242 4242 4242 4242`
5. Verify redirect to `/welcome`

---

## Step 8: Set Up Webhooks (Important!)

Webhooks notify your site when payments succeed/fail.

### In Stripe Dashboard → Developers → Webhooks:

1. Click "Add endpoint"
2. **URL:** `https://workfreework.com/api/webhooks/stripe`
3. **Events to listen for:**
   - `checkout.session.completed`
   - `customer.subscription.created`
   - `customer.subscription.deleted`
   - `invoice.payment_succeeded`
   - `invoice.payment_failed`

4. Copy the **Signing Secret** (starts with `whsec_...`)
5. Add to `.env.local`:
```bash
STRIPE_WEBHOOK_SECRET=whsec_YOUR_SECRET_HERE
```

---

## Step 9: Create Webhook Handler

Create `/app/api/webhooks/stripe/route.ts`:

```typescript
import { NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
})

export async function POST(request: Request) {
  const body = await request.text()
  const sig = request.headers.get('stripe-signature')!

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (err) {
    return NextResponse.json({ error: 'Webhook signature verification failed' }, { status: 400 })
  }

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed':
      const session = event.data.object
      // TODO: Grant access to member area
      // TODO: Send welcome email
      // TODO: Add to Discord
      console.log('Payment successful:', session)
      break

    case 'customer.subscription.deleted':
      // TODO: Revoke access
      console.log('Subscription cancelled')
      break

    case 'invoice.payment_failed':
      // TODO: Send payment failed email
      console.log('Payment failed')
      break

    default:
      console.log(`Unhandled event type ${event.type}`)
  }

  return NextResponse.json({ received: true })
}
```

---

## Step 10: Go Live

When ready for production:

1. Switch from test keys to **live keys**
2. Update `.env.local` with live keys
3. Test one more time with real card (then refund yourself)
4. Remove test mode notice from Stripe dashboard
5. Launch! 🚀

---

## Member Access Control (Optional)

To gate content for paying members:

### Option A: Simple (Stripe Customer Portal)
- Use Stripe's built-in customer portal
- Members manage subscriptions themselves
- No custom auth needed

### Option B: Full Auth (Clerk or Supabase)
- Install Clerk or Supabase
- Sync with Stripe webhooks
- Gate pages with middleware
- More control, more complexity

### Option C: Magic Link Auth
- Email-based login
- No passwords
- Stripe customer ID stored in database
- Medium complexity

---

## Revenue Tracking

Stripe Dashboard shows:
- Monthly Recurring Revenue (MRR)
- Subscriber count
- Churn rate
- Failed payments
- Lifetime value

---

## Important Notes

**Test Mode:**
- Use test cards (4242 4242 4242 4242)
- No real charges
- Webhooks work locally with Stripe CLI

**Live Mode:**
- Real cards only
- Actual charges
- Requires SSL (Vercel provides free)

**Taxes:**
- Stripe Tax can auto-calculate sales tax
- Enable in Stripe Dashboard → Settings → Tax

---

## Support Resources

- [Stripe Docs](https://stripe.com/docs)
- [Next.js + Stripe Guide](https://stripe.com/docs/payments/checkout/nextjs)
- Stripe Discord: Community support

---

## Quick Launch Checklist

- [ ] Create Stripe account
- [ ] Create 3 products with prices
- [ ] Copy price IDs to `.env.local`
- [ ] Install stripe package
- [ ] Uncomment checkout code
- [ ] Test with test card
- [ ] Set up webhooks
- [ ] Test subscription flow end-to-end
- [ ] Switch to live mode
- [ ] Launch!

---

**Current Status:** 
✅ Pricing page built
✅ Checkout API ready
✅ Welcome page ready
⚠️ Needs Stripe account & configuration (15-30 minutes)

**Email adam@workfreework.com if you need help!**


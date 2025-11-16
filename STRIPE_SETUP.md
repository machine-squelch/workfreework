# Stripe Setup Guide (Builder → Operator → Accelerator)

Use this checklist to wire up Stripe for the new membership ladder.

## 1. Create/verify your Stripe account
- [ ] Sign in at https://dashboard.stripe.com
- [ ] Complete business verification + payment method activation
- [ ] Enable the currencies you plan to charge in (default USD)

## 2. Create products & prices
In Stripe Dashboard → **Products → + Add product**. Create the following:

| Product | Billing | Description |
| --- | --- | --- |
| **Builder** | Recurring, $19/month | Community + template vault + Ronny Pro answers |
| **Operator** | Recurring, $79/month | Live sprints, automation kits, revenue scorecards |
| **Accelerator Cohort** | One-time, $2,000 | 6-week pod, personal AI audit, weekly coaching |
| **Accelerator DFY** (optional) | One-time, $5,000 | Done-with-you/for-you sprint |

After each product is created, copy the **Price ID** (it looks like `price_1234`). We will paste them into env vars.

## 3. Grab API keys
Stripe Dashboard → **Developers → API keys**
- Publishable key → `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
- Secret key → `STRIPE_SECRET_KEY`

## 4. Set environment variables
Add to `.env.local` (or your secret manager):

```bash
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxx
STRIPE_SECRET_KEY=sk_test_xxx
STRIPE_PRICE_ID_BUILDER=price_xxx
STRIPE_PRICE_ID_OPERATOR=price_xxx
# Accelerator packages are “email to book” for now
# STRIPE_PRICE_ID_ACCELERATOR_COHORT=
# STRIPE_PRICE_ID_ACCELERATOR_DFY=
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Restart `npm run dev` after editing envs.

## 5. Checkout handler sanity check
`app/api/checkout/route.ts` already maps `tier` → price ID and creates a Checkout session. Confirm the tier query you link to matches one of:
- `/api/checkout?tier=builder`
- `/api/checkout?tier=operator`
- Accelerator tiers currently link to email (no Stripe checkout)

No code changes needed unless you add more tiers.

## 6. Local testing (test mode)
1. `npm run dev`
2. Visit `/pricing`
3. Click any paid CTA (e.g., “Join Builder”)
4. Use Stripe test card `4242 4242 4242 4242`, any future expiry, any CVC/ZIP
5. You should land on `/welcome?tier=...`

## 7. Webhooks (strongly recommended)
Webhooks let you provision access when checkout finishes or a subscription cancels.

1. Stripe Dashboard → **Developers → Webhooks → Add endpoint**
2. URL (dev): `https://<ngrok-or-localtunnel>/api/webhooks/stripe`
3. Events: `checkout.session.completed`, `customer.subscription.created`, `customer.subscription.deleted`, `invoice.payment_succeeded`, `invoice.payment_failed`
4. Copy the signing secret (`whsec_...`) → `.env.local` as `STRIPE_WEBHOOK_SECRET`

### Example handler
Create `app/api/webhooks/stripe/route.ts` if you haven’t already (same as documented previously). Use the signing secret to verify events and grant roles / send emails.

## 8. Production launch checklist
- [ ] Swap env vars to **live** keys + live price IDs
- [ ] Update `NEXT_PUBLIC_SITE_URL=https://workfreework.com`
- [ ] Recreate webhook endpoint in live mode (Stripe separates test/live secrets)
- [ ] Run `npm run build` and deploy to Vercel/host
- [ ] Run a live $1.00 (or real tier) transaction, verify onboarding, then refund yourself if needed

## 9. After payment: grant access
Stripe just processes payments; you still decide what to unlock. Recommended flow:
1. Webhook `checkout.session.completed` → create/update user record (Clerk, DB, etc.) with tier metadata.
2. Trigger automation: send welcome email, grant Discord role, set Ronny cookie/unlock secret.
3. Handle `customer.subscription.deleted` to revoke Builder/Operator perks.

Handle Accelerator cohorts manually if needed (they’re one-time payments).

Need help wiring automations? Create follow-up tasks: “Wire webhook to Clerk roles”, “Automate Discord invites”, etc.

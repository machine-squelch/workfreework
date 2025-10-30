# Email Setup Guide

Your email forms are configured to send to: **adam@workfreework.com**

## Current Status

✅ Forms are functional with feedback (success/error messages)
✅ API route created at `/app/api/subscribe/route.ts`
⚠️ Needs email service configuration to actually send emails

---

## Quick Setup Options

### Option 1: Formspree (Easiest - 5 minutes)

**Free tier:** 50 submissions/month

1. Go to [formspree.io](https://formspree.io)
2. Sign up (free)
3. Create a new form
4. Copy your form endpoint URL
5. Add to `.env.local`:
```bash
FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
```
6. Emails will forward to adam@workfreework.com automatically

**Done!** No code changes needed.

---

### Option 2: Resend (Modern, Developer-Friendly)

**Free tier:** 100 emails/day

1. Sign up at [resend.com](https://resend.com)
2. Get API key
3. Add to `.env.local`:
```bash
RESEND_API_KEY=re_xxxxxxxxxxxx
```

4. Install Resend:
```bash
npm install resend
```

5. Update `/app/api/subscribe/route.ts`:
```typescript
import { Resend } from 'resend'
const resend = new Resend(process.env.RESEND_API_KEY)

await resend.emails.send({
  from: 'WorkFreeWork <onboarding@workfreework.com>',
  to: 'adam@workfreework.com',
  subject: 'New Subscriber',
  html: `<p>New subscriber: <strong>${email}</strong></p>`
})
```

---

### Option 3: ConvertKit (Best for Newsletter)

**Recommended for growing email list**

1. Sign up at [convertkit.com](https://convertkit.com)
2. Create a form
3. Get Form ID and API key
4. Add to `.env.local`:
```bash
CONVERTKIT_API_KEY=your_api_key
CONVERTKIT_FORM_ID=your_form_id
```

5. Update `/app/api/subscribe/route.ts`:
```typescript
await fetch(`https://api.convertkit.com/v3/forms/${process.env.CONVERTKIT_FORM_ID}/subscribe`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    api_key: process.env.CONVERTKIT_API_KEY,
    email: email
  })
})
```

**Bonus:** ConvertKit can auto-send the playbook PDF!

---

### Option 4: SendGrid

**Free tier:** 100 emails/day

1. Sign up at [sendgrid.com](https://sendgrid.com)
2. Create API key
3. Install:
```bash
npm install @sendgrid/mail
```

4. Configure similar to Resend

---

## Recommended Setup (Complete Solution)

**Use ConvertKit + Formspree combo:**

1. **Formspree** - Instant notification to adam@workfreework.com
2. **ConvertKit** - Manages email list + sends playbook PDF automatically

Both services in the same API route!

---

## Testing

Once configured:
1. Submit test email on site
2. Check adam@workfreework.com inbox
3. Verify email arrives
4. Test playbook delivery (if using ConvertKit automation)

---

## Current Form Locations

Email capture forms appear on:
- Homepage hero
- Homepage newsletter section
- About page CTA
- Playbook page (multiple)
- Tools page CTA
- Newsletter page
- Community page (waitlist)

All use the same `EmailCapture` component, so one setup configures all forms! ✅

---

## Next Steps

1. Choose your email service (I recommend **Formspree** for quickest setup)
2. Sign up and get credentials
3. Add to `.env.local`
4. Restart dev server
5. Test!

**Want me to configure one of these services for you?** Just tell me which one!


import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { tierFromPrice, tierLabel } from '@/lib/stripe/tier'
import { grantTierAccess, handlePaymentFailure, revokeTierAccess } from '@/lib/memberships/onboarding'

const stripeSecret = process.env.STRIPE_SECRET_KEY
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET

if (!stripeSecret) {
  console.warn('Stripe secret key missing: webhook disabled until env is set')
}

const stripe = stripeSecret
  ? new Stripe(stripeSecret, { apiVersion: '2023-10-16' })
  : null

function resolveTierFromSession(session: Stripe.Checkout.Session) {
  if (session.metadata?.tier) return session.metadata.tier
  const priceId = session.metadata?.priceId || null
  return priceId ? tierFromPrice(priceId) : null
}

export async function POST(req: NextRequest) {
  if (!stripe || !webhookSecret) {
    return NextResponse.json({ error: 'Stripe not configured' }, { status: 500 })
  }

  const body = await req.text()
  const sig = req.headers.get('stripe-signature')

  if (!sig) {
    return NextResponse.json({ error: 'Missing stripe-signature header' }, { status: 400 })
  }

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret)
  } catch (err) {
    console.error('Stripe webhook signature verification failed', err)
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session
        const tier = resolveTierFromSession(session)
          || (session.subscription ? tierFromPrice((session as any).lines?.data?.[0]?.price?.id) : null)
        if (!tier) {
          console.warn('Checkout session missing tier metadata', session.id)
          break
        }
        await grantTierAccess({
          tier,
          email: session.customer_details?.email || session.customer_email,
          customerId: typeof session.customer === 'string' ? session.customer : session.customer?.id,
          sessionId: session.id,
        })
        break
      }
      case 'customer.subscription.deleted': {
        const subscription = event.data.object as Stripe.Subscription
        const priceId = subscription.items.data[0]?.price?.id
        const tier = tierFromPrice(priceId || undefined)
        if (tier) {
          await revokeTierAccess({
            tier,
            email: subscription.customer_email || subscription.metadata?.email,
            customerId: typeof subscription.customer === 'string' ? subscription.customer : null,
            subscriptionId: subscription.id,
          })
        }
        break
      }
      case 'invoice.payment_failed': {
        const invoice = event.data.object as Stripe.Invoice
        const priceId = invoice.lines.data[0]?.price?.id
        const tier = tierFromPrice(priceId || undefined)
        if (tier) {
          await handlePaymentFailure({
            tier,
            email: invoice.customer_email,
            customerId: typeof invoice.customer === 'string' ? invoice.customer : null,
            subscriptionId: typeof invoice.subscription === 'string' ? invoice.subscription : null,
            invoiceId: invoice.id,
          })
        }
        break
      }
      default:
        console.log('Unhandled Stripe event', event.type)
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Webhook handler error', error)
    return NextResponse.json({ error: 'Webhook handler error' }, { status: 500 })
  }
}

import { NextResponse } from 'next/server'

// Stripe checkout handler
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const tier = searchParams.get('tier')

  // Map tier to Stripe price IDs
  const priceIds: { [key: string]: string } = {
    collective: process.env.STRIPE_PRICE_ID_COLLECTIVE || 'price_collective_placeholder',
    accelerator: process.env.STRIPE_PRICE_ID_ACCELERATOR || 'price_accelerator_placeholder',
    patron: process.env.STRIPE_PRICE_ID_PATRON || 'price_patron_placeholder',
  }

  if (!tier || !priceIds[tier]) {
    return NextResponse.json(
      { error: 'Invalid tier' },
      { status: 400 }
    )
  }

  // Initialize Stripe
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
    customer_email: undefined, // User enters during checkout
  })

  return NextResponse.redirect(session.url)
}


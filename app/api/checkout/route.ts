import { NextResponse } from 'next/server'

// Stripe checkout handler
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const tier = searchParams.get('tier')

    // Map tier to Stripe price IDs
    // IMPORTANT: These must be PRICE IDs (price_xxx), not PRODUCT IDs (prod_xxx)
    const priceIds: Record<string, string> = {
      builder: process.env.STRIPE_PRICE_ID_BUILDER || process.env.STRIPE_PRICE_ID_COLLECTIVE || '',
      operator: process.env.STRIPE_PRICE_ID_OPERATOR || process.env.STRIPE_PRICE_ID_PATRON || '',
      accelerator_cohort: process.env.STRIPE_PRICE_ID_ACCELERATOR_COHORT || process.env.STRIPE_PRICE_ID_ACCELERATOR || '',
      accelerator_dfy: process.env.STRIPE_PRICE_ID_ACCELERATOR_DFY || '',
      // Backwards compatible aliases
      collective: process.env.STRIPE_PRICE_ID_COLLECTIVE || '',
      accelerator: process.env.STRIPE_PRICE_ID_ACCELERATOR || '',
      patron: process.env.STRIPE_PRICE_ID_PATRON || '',
    }

    if (!tier || !priceIds[tier]) {
      console.error('Invalid tier or missing price ID:', { tier, priceIds })
      return NextResponse.json(
        { 
          error: 'Invalid tier or Stripe not configured',
          message: 'Please contact support or check your subscription settings.'
        },
        { status: 400 }
      )
    }

    // Validate price ID format (must start with 'price_')
    if (!priceIds[tier].startsWith('price_')) {
      console.error('Invalid price ID format (must start with price_):', {
        tier,
        priceId: priceIds[tier],
        hint: 'You may have a product ID (prod_xxx) instead of a price ID (price_xxx). Get the price ID from Stripe Dashboard → Products → [Your Product] → Pricing'
      })
      return NextResponse.json(
        {
          error: 'Stripe configuration error',
          message: 'Price ID format is invalid. Please check your Stripe configuration.',
          hint: 'Price IDs must start with "price_", not "prod_"'
        },
        { status: 500 }
      )
    }

    // Check if Stripe is configured
    if (!process.env.STRIPE_SECRET_KEY) {
      console.error('Stripe secret key not configured')
      return NextResponse.json(
        {
          error: 'Payment system not configured',
          message: 'Stripe is not set up. Please contact support.'
        },
        { status: 500 }
      )
    }

    // Initialize Stripe
    const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
    
    // Create checkout session
    const clientReferenceId = searchParams.get('user') || undefined

    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: priceIds[tier],
          quantity: 1,
        },
      ],
      mode: 'subscription',
      client_reference_id: clientReferenceId,
      metadata: {
        tier,
        priceId: priceIds[tier],
        ...(clientReferenceId ? { userId: clientReferenceId } : {}),
      },
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/welcome?tier=${tier}&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/pricing?canceled=true`,
      allow_promotion_codes: true,
      billing_address_collection: 'required',
    })

    if (!session.url) {
      throw new Error('Failed to create checkout session')
    }

    return NextResponse.redirect(session.url)
  } catch (error: any) {
    console.error('Stripe checkout error:', {
      error: error.message,
      code: error.code,
      type: error.type,
      param: error.param,
    })

    // User-friendly error messages
    if (error.code === 'resource_missing') {
      return NextResponse.json(
        {
          error: 'Payment configuration error',
          message: 'The subscription tier is not properly configured. Please contact support.',
          hint: error.param === 'line_items[0][price]' 
            ? 'Price ID is invalid or missing. Check your Stripe Dashboard for the correct price ID (starts with "price_").'
            : 'Please verify your Stripe configuration.',
        },
        { status: 500 }
      )
    }

    return NextResponse.json(
      {
        error: 'Payment processing error',
        message: 'Unable to process checkout. Please try again or contact support.',
      },
      { status: 500 }
    )
  }
}

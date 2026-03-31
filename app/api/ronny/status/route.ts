import { NextResponse } from 'next/server'

const REQUIRE_SUBSCRIPTION = process.env.RONNY_REQUIRE_SUBSCRIPTION !== 'false'

// Returns the default Ronny access status.
// Cookie-based full access is checked client-side; for server deployments
// the middleware handles cookie reading.
export async function GET() {
  const status = REQUIRE_SUBSCRIPTION ? 'limited' : 'full'
  return NextResponse.json(
    { status, requireSubscription: REQUIRE_SUBSCRIPTION },
    { status: 200, headers: { 'cache-control': 'no-store' } }
  )
}

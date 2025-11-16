import { NextRequest, NextResponse } from 'next/server'

const RONNY_COOKIE_NAME = 'ronny_access'
const REQUIRE_SUBSCRIPTION = process.env.RONNY_REQUIRE_SUBSCRIPTION !== 'false'

export async function GET(req: NextRequest) {
  const hasCookie = req.cookies.get(RONNY_COOKIE_NAME)?.value === 'full'
  const status = REQUIRE_SUBSCRIPTION ? (hasCookie ? 'full' : 'limited') : 'full'
  return NextResponse.json({ status, requireSubscription: REQUIRE_SUBSCRIPTION }, { status: 200, headers: { 'cache-control': 'no-store' } })
}

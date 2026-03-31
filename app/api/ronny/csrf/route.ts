import { NextResponse } from 'next/server'
import crypto from 'crypto'

// CSRF route - returns a token for CSRF protection
// Note: On static exports (GitHub Pages), this route is not available
export async function GET() {
  // Generate a simple CSRF token without requiring cookies
  // For server deployments, the full cookie-based CSRF is handled in middleware
  const token = crypto.randomBytes(32).toString('hex')
  return NextResponse.json({ token }, { status: 200 })
}

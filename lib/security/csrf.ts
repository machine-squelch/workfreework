import { cookies } from 'next/headers'
import crypto from 'crypto'

/**
 * 2026 Best-in-Class CSRF Protection
 * Double-submit cookie pattern with secure token generation
 */

const CSRF_TOKEN_NAME = 'csrf-token'
const CSRF_HEADER_NAME = 'X-CSRF-Token'

// Generate secure CSRF token
export function generateCSRFToken(): string {
  return crypto.randomBytes(32).toString('hex')
}

// Get or create CSRF token
export async function getCSRFToken(): Promise<string> {
  const cookieStore = await cookies()
  let token = cookieStore.get(CSRF_TOKEN_NAME)?.value

  if (!token) {
    token = generateCSRFToken()
    cookieStore.set(CSRF_TOKEN_NAME, token, {
      httpOnly: false, // Must be readable by JavaScript for double-submit
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24, // 24 hours
      path: '/',
    })
  }

  return token
}

// Verify CSRF token
export async function verifyCSRFToken(requestToken: string | null): Promise<boolean> {
  if (!requestToken) {
    return false
  }

  const cookieStore = await cookies()
  const cookieToken = cookieStore.get(CSRF_TOKEN_NAME)?.value

  if (!cookieToken) {
    return false
  }

  // Timing-safe comparison
  return crypto.timingSafeEqual(
    Buffer.from(requestToken),
    Buffer.from(cookieToken)
  )
}

// Middleware helper for Next.js API routes
export async function validateCSRF(request: Request): Promise<{ valid: boolean; error?: string }> {
  // Skip for safe methods
  if (['GET', 'HEAD', 'OPTIONS'].includes(request.method)) {
    return { valid: true }
  }

  const requestToken = request.headers.get(CSRF_HEADER_NAME)
  const isValid = await verifyCSRFToken(requestToken)

  if (!isValid) {
    return {
      valid: false,
      error: 'CSRF token validation failed. Please refresh the page and try again.',
    }
  }

  return { valid: true }
}


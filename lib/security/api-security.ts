import { NextRequest, NextResponse } from 'next/server'
import { getRateLimiter } from './rate-limit'
import { validateCSRF } from './csrf'
import { validateAndSanitize, schemas } from './validation'

/**
 * 2026 Best-in-Class API Security
 * Comprehensive security middleware for API routes
 */

export type SecurityConfig = {
  requireAuth?: boolean
  requireCSRF?: boolean
  rateLimit?: 'strict' | 'standard' | 'generous' | 'api'
  maxBodySize?: number
  allowedMethods?: string[]
}

export async function secureAPI(
  request: NextRequest,
  config: SecurityConfig = {}
): Promise<{ authorized: boolean; response?: NextResponse; error?: string }> {
  const {
    requireAuth = false,
    requireCSRF = true,
    rateLimit = 'api',
    maxBodySize = 10 * 1024 * 1024, // 10MB default
    allowedMethods = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  } = config

  // Method validation
  if (!allowedMethods.includes(request.method)) {
    return {
      authorized: false,
      response: NextResponse.json(
        { error: 'Method not allowed', code: 'METHOD_NOT_ALLOWED' },
        { status: 405 }
      ),
    }
  }

  // Rate limiting
  const identifier = 
    request.headers.get('x-user-id') ||
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    'unknown'

  const rateLimiter = getRateLimiter({
    interval: 60 * 1000,
    uniqueTokenPerInterval: rateLimit === 'strict' ? 10 : rateLimit === 'api' ? 30 : 60,
  })

  const rateLimitResult = await rateLimiter(identifier)
  
  if (!rateLimitResult.success) {
    return {
      authorized: false,
      response: NextResponse.json(
        {
          error: 'Rate limit exceeded',
          code: 'RATE_LIMIT_EXCEEDED',
          message: 'Too many requests. Please try again later.',
        },
        {
          status: 429,
          headers: {
            'X-RateLimit-Limit': rateLimitResult.limit.toString(),
            'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
            'X-RateLimit-Reset': rateLimitResult.reset.toString(),
            'Retry-After': Math.ceil((rateLimitResult.reset - Date.now()) / 1000).toString(),
          },
        }
      ),
    }
  }

  // CSRF protection
  if (requireCSRF && !['GET', 'HEAD', 'OPTIONS'].includes(request.method)) {
    const csrfResult = await validateCSRF(request)
    if (!csrfResult.valid) {
      return {
        authorized: false,
        response: NextResponse.json(
          {
            error: 'CSRF validation failed',
            code: 'CSRF_ERROR',
            message: csrfResult.error || 'Invalid security token',
          },
          { status: 403 }
        ),
      }
    }
  }

  // Authentication check
  if (requireAuth) {
    const authHeader = request.headers.get('authorization')
    const userId = request.headers.get('x-user-id')

    if (!authHeader && !userId) {
      return {
        authorized: false,
        response: NextResponse.json(
          {
            error: 'Authentication required',
            code: 'UNAUTHORIZED',
            message: 'Please provide authentication credentials',
          },
          { status: 401 }
        ),
      }
    }
  }

  // Body size validation
  const contentLength = request.headers.get('content-length')
  if (contentLength && parseInt(contentLength) > maxBodySize) {
    return {
      authorized: false,
      response: NextResponse.json(
        {
          error: 'Payload too large',
          code: 'PAYLOAD_TOO_LARGE',
          message: `Request body exceeds maximum size of ${maxBodySize} bytes`,
        },
        { status: 413 }
      ),
    }
  }

  return { authorized: true }
}

// Helper to create secure API handler
export function createSecureAPIHandler(
  handler: (request: NextRequest) => Promise<NextResponse>,
  config?: SecurityConfig
) {
  return async (request: NextRequest): Promise<NextResponse> => {
    const securityCheck = await secureAPI(request, config)
    
    if (!securityCheck.authorized) {
      return securityCheck.response!
    }

    try {
      return await handler(request)
    } catch (error) {
      console.error('API Error:', error)
      return NextResponse.json(
        {
          error: 'Internal server error',
          code: 'INTERNAL_ERROR',
          message: 'An unexpected error occurred',
        },
        { status: 500 }
      )
    }
  }
}


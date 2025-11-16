import { NextRequest, NextResponse } from 'next/server'
import { clerkMiddleware } from '@clerk/nextjs/server'

function applySecurityHeaders(request: NextRequest, response: NextResponse) {
  const securityHeaders: Record<string, string> = {
    'Content-Security-Policy': [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' *.vercel-scripts.com https://js.stripe.com https://clerk.com https://*.clerk.com https://*.clerkstage.dev",
      "style-src 'self' 'unsafe-inline' fonts.googleapis.com",
      "img-src 'self' data: blob: https://*.clerk.com https://*.clerkstage.dev",
      "font-src 'self' fonts.gstatic.com data:",
      "connect-src 'self' *.formspree.io *.stripe.com https://api.openai.com https://api.clerk.com https://clerk.com https://*.clerkstage.dev https://*.clerk.services https://clerk.dev",
      "frame-src 'self' *.stripe.com https://clerk.com https://*.clerk.com https://*.clerkstage.dev",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      'upgrade-insecure-requests',
    ].join('; '),
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': [
      'camera=()',
      'microphone=()',
      'geolocation=()',
      'payment=(self "https://js.stripe.com")',
      'usb=()',
      'bluetooth=()',
      'magnetometer=()',
      'gyroscope=()',
      'accelerometer=()',
      'ambient-light-sensor=()',
      'autoplay=()',
      'battery=()',
      'display-capture=()',
      'encrypted-media=()',
      'execution-while-not-rendered=()',
      'execution-while-out-of-viewport=()',
      'fullscreen=(self)',
      'gamepad=()',
      'keyboard-map=()',
      'midi=()',
      'picture-in-picture=()',
      'publickey-credentials-get=(self)',
      'screen-wake-lock=()',
      'sync-xhr=()',
      'web-share=()',
      'xr-spatial-tracking=()',
    ].join(', '),
    'Cross-Origin-Embedder-Policy': 'require-corp',
    'Cross-Origin-Opener-Policy': 'same-origin',
    'Cross-Origin-Resource-Policy': 'same-origin',
    'X-DNS-Prefetch-Control': 'on',
    'X-Permitted-Cross-Domain-Policies': 'none',
    'X-Download-Options': 'noopen',
    'Origin-Agent-Cluster': '?1',
  }

  if (request.nextUrl.protocol === 'https:') {
    securityHeaders['Strict-Transport-Security'] = 'max-age=31536000; includeSubDomains; preload'
  }

  Object.entries(securityHeaders).forEach(([key, value]) => {
    response.headers.set(key, value)
  })

  response.headers.set('X-RateLimit-Policy', 'sliding-window')
  response.headers.delete('x-powered-by')
  response.headers.delete('server')
}

const middleware = clerkMiddleware((auth, request) => {
  const response = NextResponse.next()
  applySecurityHeaders(request, response)

  const pathname = request.nextUrl.pathname
  if (pathname.includes('..') || pathname.includes('//')) {
    console.warn('🔒 Suspicious path detected:', {
      path: pathname,
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown',
      userAgent: request.headers.get('user-agent'),
      timestamp: new Date().toISOString(),
    })
  }

  return response
})

export default middleware

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
}

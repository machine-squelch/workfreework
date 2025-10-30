/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

// Security headers
const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: `
      default-src 'self';
      script-src 'self' 'unsafe-eval' 'unsafe-inline' *.vercel-scripts.com;
      style-src 'self' 'unsafe-inline' fonts.googleapis.com;
      img-src 'self' data: blob: https:;
      font-src 'self' fonts.gstatic.com;
      connect-src 'self' *.formspree.io *.stripe.com;
      frame-src 'self' *.stripe.com;
    `.replace(/\s{2,}/g, ' ').trim()
  },
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()'
  }
]

module.exports = {
  ...nextConfig,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },
}


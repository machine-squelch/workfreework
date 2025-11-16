import { NextRequest, NextResponse } from 'next/server'
import { secureAPI } from '@/lib/security/api-security'
import { z } from 'zod'
import crypto from 'crypto'

const RONNY_COOKIE_NAME = 'ronny_access'
const ACCESS_SCHEMA = z.object({ code: z.string().min(4).max(128) })

function safeCompare(a: string, b: string) {
  const bufA = Buffer.from(a)
  const bufB = Buffer.from(b)
  if (bufA.length !== bufB.length) return false
  return crypto.timingSafeEqual(bufA, bufB)
}

export async function POST(req: NextRequest) {
  const security = await secureAPI(req, {
    allowedMethods: ['POST'],
    requireCSRF: true,
    rateLimit: 'strict',
  })

  if (!security.authorized) {
    return security.response as NextResponse
  }

  const serverSecret = process.env.RONNY_SUBSCRIBER_SECRET
  if (!serverSecret) {
    return NextResponse.json({ error: 'Ronny subscription secret not configured' }, { status: 500 })
  }

  const body = await req.json().catch(() => ({}))
  const parsed = ACCESS_SCHEMA.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid unlock payload' }, { status: 422 })
  }

  const provided = parsed.data.code.trim()
  if (!safeCompare(provided, serverSecret)) {
    return NextResponse.json({ error: 'Incorrect subscription code' }, { status: 401 })
  }

  const res = NextResponse.json({ status: 'full' }, { status: 200 })
  res.cookies.set({
    name: RONNY_COOKIE_NAME,
    value: 'full',
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 30,
    path: '/',
  })
  return res
}

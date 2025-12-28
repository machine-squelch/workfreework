import { NextRequest, NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'
import { z } from 'zod'
import { secureAPI } from '@/lib/security/api-security'
import { sanitizeString } from '@/lib/security/sanitize'

const MAX_HISTORY = 8
const MAX_MESSAGE_LENGTH = 800
const DEFAULT_MODEL = process.env.ANTHROPIC_MODEL || 'claude-3-5-sonnet-20241022'
const SYSTEM_PROMPT = `You are Ronny the Robot, an ultra-smart but relaxed operator for WorkFreeWork.
- Keep answers under four sentences unless the user explicitly asks for depth.
- Emphasize WorkFreeWork's mission: automate work, win back time, design autonomous systems.
- Offer concrete, ethical suggestions. Warn if a request is out of scope.
- If unsure, admit it and point to the most relevant WorkFreeWork resource.`
const RONNY_COOKIE_NAME = 'ronny_access'
const REQUIRE_SUBSCRIPTION = process.env.RONNY_REQUIRE_SUBSCRIPTION !== 'false'
const LIMITED_RESPONSES = [
  'Ronny Lite gives weekly automation nudges. Upgrade to Builder for full AI battle plans.',
  'Lite mode can point you to essays, but Operator members get the deep tactical drops.',
  'Grab a Builder or Operator seat to unlock real-time automation briefs. Until then, explore the essays and playbook!',
]

const requestSchema = z.object({
  messages: z
    .array(
      z.object({
        role: z.enum(['user', 'assistant']),
        content: z.string().min(1).max(MAX_MESSAGE_LENGTH),
      })
    )
    .max(MAX_HISTORY)
    .optional(),
})

function hasFullAccess(req: NextRequest) {
  if (!REQUIRE_SUBSCRIPTION) return true
  return req.cookies.get(RONNY_COOKIE_NAME)?.value === 'full'
}

function makeLimitedResponse() {
  const text = LIMITED_RESPONSES[Math.floor(Math.random() * LIMITED_RESPONSES.length)]
  return NextResponse.json(
    {
      limited: true,
      content: [
        {
          type: 'text',
          text,
        },
      ],
    },
    { status: 200, headers: { 'cache-control': 'no-store' } }
  )
}

async function loadCompanyFacts(): Promise<string> {
  try {
    const factsPath = path.join(process.cwd(), 'public', 'company-facts.md')
    const file = await fs.readFile(factsPath, 'utf8')
    return sanitizeString(file, 4000)
  } catch {
    return ''
  }
}

export async function POST(req: NextRequest) {
  const security = await secureAPI(req, {
    allowedMethods: ['POST'],
    requireCSRF: true,
    rateLimit: 'strict',
    maxBodySize: 64 * 1024,
  })

  if (!security.authorized) {
    return security.response as NextResponse
  }

  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) {
    return NextResponse.json(
      { error: 'Server missing Anthropic credentials' },
      { status: 500 }
    )
  }

  const fullAccess = hasFullAccess(req)

  const body = await req.json().catch(() => ({}))
  const parsed = requestSchema.safeParse(body)

  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Invalid payload', details: parsed.error.issues },
      { status: 422 }
    )
  }

  const history = (parsed.data.messages || []).map((msg) => ({
    role: msg.role,
    content: sanitizeString(msg.content, MAX_MESSAGE_LENGTH),
  }))

  if (!fullAccess) {
    return makeLimitedResponse()
  }

  const facts = await loadCompanyFacts()
  const system = [SYSTEM_PROMPT, facts && '\n--- Company Facts ---\n' + facts]
    .filter(Boolean)
    .join('\n')

  const payload = {
    model: DEFAULT_MODEL,
    max_tokens: 400,
    temperature: 0.4,
    system,
    messages: history,
    stop_sequences: ['##'],
  }

  const anthropicRes = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify(payload),
  })

  if (!anthropicRes.ok) {
    const details = await anthropicRes.text()
    console.error('Anthropic API error:', details)
    return NextResponse.json(
      { error: 'Ronny is warming up. Please try again in a moment.' },
      { status: 502 }
    )
  }

  const data = await anthropicRes.json()
  return NextResponse.json(data, { status: 200, headers: { 'cache-control': 'no-store' } })
}

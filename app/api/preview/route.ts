import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'
import { NextRequest } from 'next/server'
import { getDraftEssay } from '@/lib/payload-client'

/**
 * GET /api/preview?secret=<token>&slug=<slug>&collection=<collection>
 * Enable draft mode and redirect to the preview page
 */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const secret = searchParams.get('secret')
  const slug = searchParams.get('slug')
  const collection = searchParams.get('collection')

  // Check the secret token
  if (secret !== process.env.PREVIEW_SECRET) {
    return new Response('Invalid token', { status: 401 })
  }

  // Check if slug is provided
  if (!slug) {
    return new Response('Missing slug', { status: 400 })
  }

  // Fetch the content to verify it exists
  let content = null
  let redirectPath = '/'

  switch (collection) {
    case 'essays':
      content = await getDraftEssay(slug)
      redirectPath = `/essays/${slug}`
      break
    // Add other collections as needed
    default:
      return new Response('Invalid collection', { status: 400 })
  }

  // If the content doesn't exist, return 404
  if (!content) {
    return new Response('Content not found', { status: 404 })
  }

  // Enable Draft Mode
  draftMode().enable()

  // Redirect to the preview page
  redirect(redirectPath)
}

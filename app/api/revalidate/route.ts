import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath, revalidateTag } from 'next/cache'

/**
 * POST /api/revalidate
 * Webhook endpoint to trigger revalidation when CMS content changes
 */
export async function POST(request: NextRequest) {
  try {
    // Verify the request is from Payload (optional but recommended)
    const authHeader = request.headers.get('authorization')
    const expectedToken = process.env.REVALIDATION_SECRET
    
    if (expectedToken && authHeader !== `Bearer ${expectedToken}`) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const body = await request.json()
    const { collection, slug } = body

    // Revalidate based on collection type
    switch (collection) {
      case 'essays':
        if (slug) {
          // Revalidate specific essay page
          revalidatePath(`/essays/${slug}`)
        }
        // Revalidate essays list page
        revalidatePath('/essays')
        break

      case 'tools':
        revalidatePath('/tools')
        break

      case 'team-members':
        revalidatePath('/about')
        break

      case 'playbook-sections':
        revalidatePath('/playbook')
        break

      default:
        // Revalidate all if collection not specified
        revalidatePath('/', 'layout')
    }

    return NextResponse.json({
      success: true,
      message: `Revalidated ${collection}${slug ? ` (${slug})` : ''}`,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error('Revalidation error:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to revalidate',
      },
      { status: 500 }
    )
  }
}

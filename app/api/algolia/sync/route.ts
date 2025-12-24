import { NextRequest, NextResponse } from 'next/server'
import { indexSingleEssay, indexSingleTool, deleteFromIndex } from '@/lib/algolia/indexing'
import { ALGOLIA_INDICES } from '@/lib/algolia/config'

/**
 * POST /api/algolia/sync
 * Webhook endpoint to sync content to Algolia when CMS content changes
 */
export async function POST(request: NextRequest) {
  try {
    // Verify the request is authorized
    const authHeader = request.headers.get('authorization')
    const expectedToken = process.env.ALGOLIA_WEBHOOK_SECRET

    if (expectedToken && authHeader !== `Bearer ${expectedToken}`) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const body = await request.json()
    const { collection, operation, doc } = body

    console.log(`Algolia sync: ${operation} ${collection}`, doc?.id)

    // Handle different operations
    switch (operation) {
      case 'create':
      case 'update':
        if (collection === 'essays') {
          await indexSingleEssay(doc)
        } else if (collection === 'tools') {
          await indexSingleTool(doc)
        }
        break

      case 'delete':
        if (collection === 'essays') {
          await deleteFromIndex(ALGOLIA_INDICES.ESSAYS, doc.id)
        } else if (collection === 'tools') {
          await deleteFromIndex(ALGOLIA_INDICES.TOOLS, doc.id)
        }
        break

      default:
        return NextResponse.json(
          { success: false, error: 'Invalid operation' },
          { status: 400 }
        )
    }

    return NextResponse.json({
      success: true,
      message: `Synced ${collection} to Algolia`,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error('Algolia sync error:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to sync to Algolia',
      },
      { status: 500 }
    )
  }
}

import { NextRequest, NextResponse } from 'next/server'
import { toolkitResources } from '@/lib/toolkit-data'

/**
 * POST /api/toolkit/download
 * Track resource downloads
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { resourceId, title, timestamp } = body

    if (!resourceId) {
      return NextResponse.json(
        {
          success: false,
          error: 'Resource ID is required',
        },
        { status: 400 }
      )
    }

    // Find the resource
    const resource = toolkitResources.find((r) => r.id === resourceId)
    if (!resource) {
      return NextResponse.json(
        {
          success: false,
          error: 'Resource not found',
        },
        { status: 404 }
      )
    }

    // Increment download count
    resource.downloads += 1

    // In production, this would:
    // 1. Save to database
    // 2. Log to analytics service (e.g., Google Analytics, Mixpanel)
    // 3. Store detailed download metadata (user, IP, timestamp, etc.)
    
    console.log(`Download tracked: ${title} (ID: ${resourceId}) at ${timestamp}`)
    console.log(`New download count: ${resource.downloads}`)

    // You could also send to external analytics
    // await trackEvent('toolkit_download', {
    //   resourceId,
    //   title,
    //   timestamp,
    //   userAgent: request.headers.get('user-agent'),
    // })

    return NextResponse.json({
      success: true,
      message: 'Download tracked successfully',
      downloads: resource.downloads,
    })
  } catch (error) {
    console.error('Error tracking download:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to track download',
      },
      { status: 500 }
    )
  }
}

/**
 * GET /api/toolkit/download
 * Get download statistics (admin only or public aggregate)
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const resourceId = searchParams.get('resourceId')

    if (resourceId) {
      // Get specific resource stats
      const resource = toolkitResources.find((r) => r.id === resourceId)
      if (!resource) {
        return NextResponse.json(
          {
            success: false,
            error: 'Resource not found',
          },
          { status: 404 }
        )
      }

      return NextResponse.json({
        success: true,
        data: {
          resourceId: resource.id,
          title: resource.title,
          downloads: resource.downloads,
        },
      })
    }

    // Get aggregate stats for all resources
    const stats = toolkitResources.map((resource) => ({
      id: resource.id,
      title: resource.title,
      category: resource.category,
      downloads: resource.downloads,
      rating: resource.rating,
    }))

    // Sort by downloads
    stats.sort((a, b) => b.downloads - a.downloads)

    return NextResponse.json({
      success: true,
      data: {
        totalResources: toolkitResources.length,
        totalDownloads: stats.reduce((sum, r) => sum + r.downloads, 0),
        topResources: stats.slice(0, 10),
      },
    })
  } catch (error) {
    console.error('Error fetching download stats:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch stats',
      },
      { status: 500 }
    )
  }
}

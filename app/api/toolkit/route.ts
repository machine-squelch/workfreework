import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'
import {
  CreateToolkitResourceSchema,
  UpdateToolkitResourceSchema,
  ToolkitResource,
} from '@/lib/toolkit.schema'
import { toolkitResources } from '@/lib/toolkit-data'

/**
 * GET /api/toolkit
 * Get all toolkit resources (public)
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')
    const difficulty = searchParams.get('difficulty')
    const search = searchParams.get('search')

    let filtered = toolkitResources.filter((resource) => resource.published)

    if (category) {
      filtered = filtered.filter((resource) => resource.category === category)
    }

    if (difficulty) {
      filtered = filtered.filter((resource) => resource.difficulty === difficulty)
    }

    if (search) {
      const searchLower = search.toLowerCase()
      filtered = filtered.filter(
        (resource) =>
          resource.title.toLowerCase().includes(searchLower) ||
          resource.description.toLowerCase().includes(searchLower) ||
          resource.tags.some((tag) => tag.toLowerCase().includes(searchLower))
      )
    }

    return NextResponse.json({
      success: true,
      data: filtered,
      count: filtered.length,
    })
  } catch (error) {
    console.error('Error fetching toolkit resources:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch resources',
      },
      { status: 500 }
    )
  }
}

/**
 * POST /api/toolkit
 * Create a new toolkit resource (admin only)
 */
export async function POST(request: NextRequest) {
  try {
    // Check authentication and admin role
    const { userId, sessionClaims } = await auth()

    if (!userId) {
      return NextResponse.json(
        {
          success: false,
          error: 'Unauthorized',
        },
        { status: 401 }
      )
    }

    // Check if user has admin role
    const isAdmin = sessionClaims?.metadata?.role === 'admin'
    if (!isAdmin) {
      return NextResponse.json(
        {
          success: false,
          error: 'Forbidden - Admin access required',
        },
        { status: 403 }
      )
    }

    // Parse and validate request body
    const body = await request.json()
    const validatedData = CreateToolkitResourceSchema.parse(body)

    // Generate new resource ID
    const newId = (Math.max(...toolkitResources.map((r) => parseInt(r.id))) + 1).toString()

    // Create new resource
    const newResource: ToolkitResource = {
      ...validatedData,
      id: newId,
      downloads: 0,
      rating: 0,
      ratingCount: 0,
    }

    // In production, this would save to a database
    // For now, we just return the created resource
    toolkitResources.push(newResource)

    return NextResponse.json(
      {
        success: true,
        data: newResource,
        message: 'Resource created successfully',
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error creating toolkit resource:', error)

    if (error instanceof Error && error.name === 'ZodError') {
      return NextResponse.json(
        {
          success: false,
          error: 'Validation error',
          details: error,
        },
        { status: 400 }
      )
    }

    return NextResponse.json(
      {
        success: false,
        error: 'Failed to create resource',
      },
      { status: 500 }
    )
  }
}

/**
 * PUT /api/toolkit
 * Update an existing toolkit resource (admin only)
 */
export async function PUT(request: NextRequest) {
  try {
    // Check authentication and admin role
    const { userId, sessionClaims } = await auth()

    if (!userId) {
      return NextResponse.json(
        {
          success: false,
          error: 'Unauthorized',
        },
        { status: 401 }
      )
    }

    const isAdmin = sessionClaims?.metadata?.role === 'admin'
    if (!isAdmin) {
      return NextResponse.json(
        {
          success: false,
          error: 'Forbidden - Admin access required',
        },
        { status: 403 }
      )
    }

    // Parse and validate request body
    const body = await request.json()
    const validatedData = UpdateToolkitResourceSchema.parse(body)

    // Find existing resource
    const existingIndex = toolkitResources.findIndex((r) => r.id === validatedData.id)
    if (existingIndex === -1) {
      return NextResponse.json(
        {
          success: false,
          error: 'Resource not found',
        },
        { status: 404 }
      )
    }

    // Update resource
    const updatedResource = {
      ...toolkitResources[existingIndex],
      ...validatedData,
    }

    // In production, this would update the database
    toolkitResources[existingIndex] = updatedResource

    return NextResponse.json({
      success: true,
      data: updatedResource,
      message: 'Resource updated successfully',
    })
  } catch (error) {
    console.error('Error updating toolkit resource:', error)

    if (error instanceof Error && error.name === 'ZodError') {
      return NextResponse.json(
        {
          success: false,
          error: 'Validation error',
          details: error,
        },
        { status: 400 }
      )
    }

    return NextResponse.json(
      {
        success: false,
        error: 'Failed to update resource',
      },
      { status: 500 }
    )
  }
}

/**
 * DELETE /api/toolkit
 * Delete a toolkit resource (admin only)
 */
export async function DELETE(request: NextRequest) {
  try {
    // Check authentication and admin role
    const { userId, sessionClaims } = await auth()

    if (!userId) {
      return NextResponse.json(
        {
          success: false,
          error: 'Unauthorized',
        },
        { status: 401 }
      )
    }

    const isAdmin = sessionClaims?.metadata?.role === 'admin'
    if (!isAdmin) {
      return NextResponse.json(
        {
          success: false,
          error: 'Forbidden - Admin access required',
        },
        { status: 403 }
      )
    }

    const { searchParams } = new URL(request.url)
    const resourceId = searchParams.get('id')

    if (!resourceId) {
      return NextResponse.json(
        {
          success: false,
          error: 'Resource ID is required',
        },
        { status: 400 }
      )
    }

    // Find and remove resource
    const existingIndex = toolkitResources.findIndex((r) => r.id === resourceId)
    if (existingIndex === -1) {
      return NextResponse.json(
        {
          success: false,
          error: 'Resource not found',
        },
        { status: 404 }
      )
    }

    // In production, this would delete from the database
    toolkitResources.splice(existingIndex, 1)

    return NextResponse.json({
      success: true,
      message: 'Resource deleted successfully',
    })
  } catch (error) {
    console.error('Error deleting toolkit resource:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to delete resource',
      },
      { status: 500 }
    )
  }
}

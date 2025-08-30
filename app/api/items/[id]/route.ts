import { NextRequest, NextResponse } from 'next/server'
import {
  getItemById,
  updateItem,
  deleteItem,
  UpdateItemData,
} from '@/lib/items'

export const runtime = 'nodejs'

// GET /api/items/[id] - Get specific item
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const item = await getItemById(params.id)

    if (!item) {
      return NextResponse.json(
        {
          success: false,
          error: 'Item not found',
        },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      data: item,
    })
  } catch (error) {
    console.error(`GET /api/items/${params.id} error:`, error)
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch item',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}

// PUT /api/items/[id] - Update item
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json()

    // Validate data if provided
    const updateData: UpdateItemData = {}

    if (body.title !== undefined) {
      if (!body.title.trim()) {
        return NextResponse.json(
          {
            success: false,
            error: 'Title cannot be empty',
          },
          { status: 400 }
        )
      }
      updateData.title = body.title.trim()
    }

    if (body.price !== undefined) {
      if (typeof body.price !== 'number' || body.price < 0) {
        return NextResponse.json(
          {
            success: false,
            error: 'Valid price is required',
          },
          { status: 400 }
        )
      }
      updateData.price = Number(body.price)
    }

    if (body.description !== undefined) {
      updateData.description = body.description.trim()
    }

    if (body.category !== undefined) {
      updateData.category = body.category.trim()
    }

    if (body.imageUrl !== undefined) {
      updateData.imageUrl = body.imageUrl.trim()
    }

    const updated = await updateItem(params.id, updateData)

    if (!updated) {
      return NextResponse.json(
        {
          success: false,
          error: 'Item not found or no changes made',
        },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Item updated successfully',
    })
  } catch (error) {
    console.error(`PUT /api/items/${params.id} error:`, error)
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to update item',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}

// DELETE /api/items/[id] - Delete item
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const deleted = await deleteItem(params.id)

    if (!deleted) {
      return NextResponse.json(
        {
          success: false,
          error: 'Item not found',
        },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Item deleted successfully',
    })
  } catch (error) {
    console.error(`DELETE /api/items/${params.id} error:`, error)
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to delete item',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}

import { NextRequest, NextResponse } from 'next/server'
import {
  createItem,
  getItems,
  searchItems,
  getItemsByCategory,
} from '@/lib/items'

// Force Node.js runtime for MongoDB
export const runtime = 'nodejs'

// GET /api/items - Get all items, search, or filter by category
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get('q')
    const category = searchParams.get('category')

    let items
    if (query) {
      items = await searchItems(query)
    } else if (category) {
      items = await getItemsByCategory(category)
    } else {
      items = await getItems()
    }

    return NextResponse.json({
      success: true,
      data: items,
      count: items.length,
    })
  } catch (error) {
    console.error('GET /api/items error:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch items',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}

// POST /api/items - Create new item
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate required fields
    if (!body.title || !body.title.trim()) {
      return NextResponse.json(
        {
          success: false,
          error: 'Title is required',
        },
        { status: 400 }
      )
    }

    if (typeof body.price !== 'number' || body.price < 0) {
      return NextResponse.json(
        {
          success: false,
          error: 'Valid price is required',
        },
        { status: 400 }
      )
    }

    const itemData = {
      title: body.title.trim(),
      price: Number(body.price),
      description: body.description?.trim() || '',
      category: body.category?.trim() || '',
      imageUrl: body.imageUrl?.trim() || '',
    }

    const itemId = await createItem(itemData)

    return NextResponse.json(
      {
        success: true,
        data: { id: itemId },
        message: 'Item created successfully',
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('POST /api/items error:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to create item',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}

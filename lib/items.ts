import { ObjectId } from 'mongodb'
import { getDb } from '@/lib/mongodb'

export interface Item {
  _id?: ObjectId
  title: string
  price: number
  description?: string
  category?: string
  imageUrl?: string
  createdAt?: Date
  updatedAt?: Date
}

export interface CreateItemData {
  title: string
  price: number
  description?: string
  category?: string
  imageUrl?: string
}

export interface UpdateItemData {
  title?: string
  price?: number
  description?: string
  category?: string
  imageUrl?: string
}

// Get all items
export async function getItems(): Promise<Item[]> {
  try {
    const db = await getDb()
    const items = await db
      .collection<Item>('items')
      .find({})
      .sort({ createdAt: -1 })
      .toArray()
    return items
  } catch (error) {
    console.error('Error fetching items:', error)
    // Return mock data for demo purposes when database is not available
    return getMockItems()
  }
}

// Mock data for demo purposes
function getMockItems(): Item[] {
  const now = '2024-01-15T10:30:00.000Z'
  return [
    {
      _id: '67820a1b2c3d4e5f60718293' as any,
      title: 'Wireless Bluetooth Headphones',
      price: 79.99,
      description: 'High-quality wireless headphones with noise cancellation',
      category: 'Electronics',
      imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
      createdAt: now as any,
      updatedAt: now as any,
    },
    {
      _id: '67820a1b2c3d4e5f60718294' as any,
      title: 'Organic Coffee Beans',
      price: 24.99,
      description: 'Premium organic coffee beans from Colombia',
      category: 'Food & Beverage',
      imageUrl: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400',
      createdAt: now as any,
      updatedAt: now as any,
    },
    {
      _id: '67820a1b2c3d4e5f60718295' as any,
      title: 'Yoga Mat',
      price: 35.0,
      description: 'Eco-friendly yoga mat with excellent grip',
      category: 'Fitness',
      imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400',
      createdAt: now as any,
      updatedAt: now as any,
    },
    {
      _id: '67820a1b2c3d4e5f60718296' as any,
      title: 'Leather Wallet',
      price: 49.99,
      description: 'Genuine leather wallet with RFID blocking',
      category: 'Accessories',
      imageUrl: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=400',
      createdAt: now as any,
      updatedAt: now as any,
    },
    {
      _id: '67820a1b2c3d4e5f60718297' as any,
      title: 'Smart Watch',
      price: 199.99,
      description: 'Fitness tracking smartwatch with heart rate monitor',
      category: 'Electronics',
      imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
      createdAt: now as any,
      updatedAt: now as any,
    },
    {
      _id: '67820a1b2c3d4e5f60718298' as any,
      title: 'Ceramic Plant Pot',
      price: 18.50,
      description: 'Beautiful handmade ceramic pot for your plants',
      category: 'Home & Garden',
      imageUrl: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400',
      createdAt: now as any,
      updatedAt: now as any,
    },
  ]
}

// Get item by ID
export async function getItemById(id: string): Promise<Item | null> {
  try {
    if (!ObjectId.isValid(id)) {
      return null
    }
    const db = await getDb()
    const item = await db
      .collection<Item>('items')
      .findOne({ _id: new ObjectId(id) })
    return item
  } catch (error) {
    console.error('Error fetching item by ID:', error)
    throw new Error('Failed to fetch item')
  }
}

// Create new item
export async function createItem(data: CreateItemData): Promise<ObjectId> {
  try {
    const db = await getDb()
    const now = new Date()
    const result = await db.collection<Item>('items').insertOne({
      ...data,
      createdAt: now,
      updatedAt: now,
    })
    return result.insertedId
  } catch (error) {
    console.error('Error creating item:', error)
    throw new Error('Failed to create item')
  }
}

// Update item
export async function updateItem(
  id: string,
  data: UpdateItemData
): Promise<boolean> {
  try {
    if (!ObjectId.isValid(id)) {
      return false
    }
    const db = await getDb()
    const result = await db.collection<Item>('items').updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          ...data,
          updatedAt: new Date(),
        },
      }
    )
    return result.modifiedCount > 0
  } catch (error) {
    console.error('Error updating item:', error)
    throw new Error('Failed to update item')
  }
}

// Delete item
export async function deleteItem(id: string): Promise<boolean> {
  try {
    if (!ObjectId.isValid(id)) {
      return false
    }
    const db = await getDb()
    const result = await db
      .collection<Item>('items')
      .deleteOne({ _id: new ObjectId(id) })
    return result.deletedCount > 0
  } catch (error) {
    console.error('Error deleting item:', error)
    throw new Error('Failed to delete item')
  }
}

// Search items
export async function searchItems(query: string): Promise<Item[]> {
  try {
    const db = await getDb()
    const items = await db
      .collection<Item>('items')
      .find({
        $or: [
          { title: { $regex: query, $options: 'i' } },
          { description: { $regex: query, $options: 'i' } },
          { category: { $regex: query, $options: 'i' } },
        ],
      })
      .sort({ createdAt: -1 })
      .toArray()
    return items
  } catch (error) {
    console.error('Error searching items:', error)
    throw new Error('Failed to search items')
  }
}

// Get items by category
export async function getItemsByCategory(category: string): Promise<Item[]> {
  try {
    const db = await getDb()
    const items = await db
      .collection<Item>('items')
      .find({ category: { $regex: category, $options: 'i' } })
      .sort({ createdAt: -1 })
      .toArray()
    return items
  } catch (error) {
    console.error('Error fetching items by category:', error)
    throw new Error('Failed to fetch items by category')
  }
}

// Get items count
export async function getItemsCount(): Promise<number> {
  try {
    const db = await getDb()
    const count = await db.collection<Item>('items').countDocuments()
    return count
  } catch (error) {
    console.error('Error counting items:', error)
    throw new Error('Failed to count items')
  }
}

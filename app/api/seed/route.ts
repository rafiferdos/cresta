import { NextResponse } from "next/server";
import { createItem, getItemsCount } from "@/lib/items";

export const runtime = "nodejs";

const sampleItems = [
  {
    title: "Wireless Bluetooth Headphones",
    price: 79.99,
    description: "High-quality wireless headphones with noise cancellation",
    category: "Electronics",
    imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
  },
  {
    title: "Organic Coffee Beans",
    price: 24.99,
    description: "Premium organic coffee beans from Colombia",
    category: "Food & Beverage",
    imageUrl: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400",
  },
  {
    title: "Yoga Mat",
    price: 35.00,
    description: "Eco-friendly yoga mat with excellent grip",
    category: "Fitness",
    imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400",
  },
  {
    title: "Leather Wallet",
    price: 49.99,
    description: "Genuine leather wallet with RFID blocking",
    category: "Accessories",
    imageUrl: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400",
  },
  {
    title: "Smart Watch",
    price: 199.99,
    description: "Fitness tracking smartwatch with heart rate monitor",
    category: "Electronics",
    imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
  },
];

export async function POST() {
  try {
    // Check if items already exist
    const currentCount = await getItemsCount();
    if (currentCount > 0) {
      return NextResponse.json({
        success: false,
        message: "Database already has items. Delete existing items first.",
        currentCount,
      });
    }

    // Create sample items
    const createdIds = [];
    for (const item of sampleItems) {
      const id = await createItem(item);
      createdIds.push(id);
    }

    return NextResponse.json({
      success: true,
      message: `Successfully created ${sampleItems.length} sample items`,
      data: {
        createdCount: sampleItems.length,
        itemIds: createdIds,
      },
    });
  } catch (error) {
    console.error("Seed data creation failed:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to create seed data",
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

export async function DELETE() {
  try {
    const db = await (await import("@/lib/mongodb")).getDb();
    const result = await db.collection("items").deleteMany({});
    
    return NextResponse.json({
      success: true,
      message: `Deleted ${result.deletedCount} items`,
      deletedCount: result.deletedCount,
    });
  } catch (error) {
    console.error("Failed to delete items:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to delete items",
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
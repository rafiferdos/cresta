import { NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";
import { getItemsCount } from "@/lib/items";

export const runtime = "nodejs";

export async function GET() {
  try {
    const db = await getDb();
    
    // Test database connection
    await db.admin().ping();
    
    // Get some stats
    const itemsCount = await getItemsCount();
    
    return NextResponse.json({
      success: true,
      message: "Database connection is healthy",
      stats: {
        itemsCount,
        database: process.env.DB_NAME,
      },
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Health check failed:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Database connection failed",
        message: error instanceof Error ? error.message : "Unknown error",
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}

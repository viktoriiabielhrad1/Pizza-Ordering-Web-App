import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(req) {
  try {
    const body = await req.json();
    const { username, items, total } = body;

    const client = await clientPromise;
    const db = client.db("app");

   
    const result = await db.collection("orders").insertOne({
      username,
      items,
      total,
      createdAt: new Date()
    });

   
    await db.collection("cart").deleteMany({});

    
    return NextResponse.json({ success: true, orderId: result.insertedId });

  } catch (err) {
    console.error("ORDER ERROR:", err);
    return NextResponse.json({ success: false, error: err.message });
  }
}

import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(req) {
  console.log("ADD TO CART API HIT");

  try {
    const body = await req.json();
    const { productId, size, quantity } = body;

    if (!productId) {
      return NextResponse.json({ success: false, error: "Missing productId" });
    }

    const client = await clientPromise;
    const db = client.db("app");  
    await db.collection("cart").insertOne({
      productId,
      size,
      quantity,
      createdAt: new Date()
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("API ERROR:", err);
    return NextResponse.json({ success: false, error: err.message });
  }
}

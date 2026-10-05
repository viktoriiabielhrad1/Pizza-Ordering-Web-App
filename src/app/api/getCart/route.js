import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("app");

    const items = await db.collection("cart").find().toArray();

    return NextResponse.json({ success: true, items });
  } catch (err) {
    console.error("GET CART ERROR:", err);
    return NextResponse.json({ success: false, error: err.message });
  }
}

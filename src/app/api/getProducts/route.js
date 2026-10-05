import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("app");

    const products = await db.collection("products").find().toArray();

   
    const formatted = products.map(p => ({
      _id: p._id,         
      pname: p.pname,
      img: p.img,
      description: p.description,
      sizes: p.sizes
    }));

    return new Response(JSON.stringify({ products: formatted }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: "DB error" }), { status: 500 });
  }
}

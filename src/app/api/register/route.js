import clientPromise from "@/lib/mongodb";

export async function POST(req) {
  try {
    const body = await req.json();
    const { fullName, email, phone, password } = body;

    const client = await clientPromise;
    const db = client.db("app");

   //Insert in users collection (DB)
    await db.collection("users").insertOne({
      fullName,
      email,
      phone,
    password,
      createdAt: new Date()
    });


    return new Response(JSON.stringify({ success: true }), { status: 200 });

  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ success: false }), { status: 500 });
  }
}

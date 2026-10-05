import clientPromise from "@/lib/mongodb";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    const client = await clientPromise;
    const db = client.db("app");

   
    const user = await db.collection("users").findOne({ email });

    if (!user) {
      return new Response(JSON.stringify({ success: false, message: "User not found" }), { status: 401 });
    }

    // Compare password 
    if (user.password !== password) {
      return new Response(JSON.stringify({ success: false, message: "Wrong password" }), { status: 401 });
    }
//Insert in login collection (DB)
    await db.collection("login").insertOne({
      email,
      loginAt: new Date()
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });

  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ success: false }), { status: 500 });
  }
}


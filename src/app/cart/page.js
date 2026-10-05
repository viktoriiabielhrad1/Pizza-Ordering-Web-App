"use client";

import { useEffect, useState } from "react";

export default function CartPage() {
  const [cart, setCart] = useState([]);

useEffect(() => {
  async function load() {
  const res = await fetch("/api/getCart");
  const data = await res.json();

  if (!data.success) return;

  // Load products
  const prodRes = await fetch("/api/getProducts");
  const prodData = await prodRes.json();

  const products = prodData.products;

 
  const merged = data.items.map(item => {
    const product = products.find(p => p._id === item.productId);

    return {
      ...item,
      name: product?.pname,
      img: product?.img,
      price: product?.sizes.find(s => s.label === item.size)?.cost
    };
  });

  setCart(merged);
}


  load();
}, []);

const total = cart.reduce((sum, item) => {
  return sum + item.price * item.quantity;
}, 0);

  return (
    <div
      style={{
      width: "100%",
        maxWidth: "900px",
        margin: "40px auto",
        background: "white",
        padding: "30px",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
      }}
    >
        
        <div
  style={{
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: "10px",
    gap: "15px"
  }}
>
  <span style={{ fontSize: "18px", fontWeight: "600" }}>
    Total: €{total}
  </span>

  <button
    style={{
      padding: "8px 14px",
      background: "#fffcda", //beige color!
      border: "1px solid #397A35",//green!!
      borderRadius: "6px",
      cursor: "pointer",
      fontWeight: "600"
    }}
    onClick={() => {
    window.location.href = "/checkout";
  }}
  >
    Checkout
  </button>
</div>


      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Your Cart</h1>

      {cart.length === 0 && <p>Your cart is empty.</p>}

 {cart.map((item, index) => (
  <div
    key={index}
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "12px 0",
      borderBottom: "1px solid #eee",
      fontSize: "18px",
           gap: "20px"
    }}
  >
    <span>
      <strong>{item.name}</strong> — {item.size} — 
            
      €{item.price} × {item.quantity} = <strong>€{item.price * item.quantity}</strong>
    </span>

    <button
      onClick={() => {
        const updated = cart.filter((_, i) => i !== index);
        setCart(updated);
        localStorage.setItem("cart", JSON.stringify(updated));
      }}
      style={{
        padding: "6px 12px",
        background: "tomato",
        color: "white",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
        fontSize: "14px"
      }}
    >
      Remove
    </button>
  </div>
))}


    </div>
  );
}

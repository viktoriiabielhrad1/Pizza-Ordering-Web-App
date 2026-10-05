"use client";

import { useEffect, useState } from "react";

export default function CheckoutPage() {
  const [cart, setCart] = useState([]);
  const [address, setAddress] = useState("");
  const [payment, setPayment] = useState("card");

  useEffect(() => {
    async function load() {
      const res = await fetch("/api/getCart");
      const data = await res.json();

      if (!data.success) return;

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

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  async function confirmOrder() {
    if (!address.trim()) {
      alert("Please enter your delivery address.");
      return;
    }

    const res = await fetch("/api/createOrder", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: "guest",
        items: cart,
        total: total
      })
    });

    const data = await res.json();

    if (data.success) {
      alert("Order confirmed!");
      window.location.href = `/thankYou?order=${data.orderId}`;
    } else {
      alert("Error placing order.");
    }
  }

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
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Checkout</h1>

      {/* DELIVERY ADDRESS */}
      <div style={{ marginBottom: "25px" }}>
        <label style={{ fontWeight: "600", fontSize: "18px" }}>
          Delivery Address:
        </label>
        <textarea
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter your full delivery address..."
          style={{
            width: "100%",
            height: "80px",
            marginTop: "10px",
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "16px"
          }}
        />
      </div>

      {/* PAYMENT METHOD */}
      <div style={{ marginBottom: "25px" }}>
        <label style={{ fontWeight: "600", fontSize: "18px" }}>
          Payment Method:
        </label>

        <div style={{ marginTop: "10px", fontSize: "16px" }}>
          <label>
            <input
              type="radio"
              name="payment"
              value="card"
              checked={payment === "card"}
              onChange={() => setPayment("card")}
            />
            {" "}Card
          </label>

          <br />

          <label>
            <input
              type="radio"
              name="payment"
              value="cash"
              checked={payment === "cash"}
              onChange={() => setPayment("cash")}
            />
            {" "}Cash on Delivery
          </label>
        </div>
      </div>

      {/* ORDER SUMMARY */}
      <div style={{ marginBottom: "25px" }}>
        <h2>Order Summary</h2>

        {cart.map((item, index) => (
          <p key={index} style={{ fontSize: "16px", marginBottom: "8px" }}>
            <strong>{item.name}</strong> — {item.size}
            <br />
            €{item.price} × {item.quantity} ={" "}
            <strong>€{item.price * item.quantity}</strong>
          </p>
        ))}

        <h3 style={{ marginTop: "15px" }}>Total: €{total}</h3>
      </div>

      {/* CONFIRM BUTTON */}
      <button
        onClick={confirmOrder}
        style={{
          display: "block",
          margin: "0 auto",
          padding: "12px 20px",
          background: "#fffcda",
          border: "1px solid #397A35",
          borderRadius: "8px",
          fontSize: "18px",
          fontWeight: "600",
          cursor: "pointer"
        }}
      >
        Confirm Order
      </button>
    </div>
  );
}

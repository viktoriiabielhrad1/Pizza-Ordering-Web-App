"use client";

import { useSearchParams } from "next/navigation";

export default function ThankYouContent() {
  const params = useSearchParams();
  const orderId = params.get("order");

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "700px",
        margin: "60px auto",
        background: "white",
        padding: "40px",
        borderRadius: "12px",
        textAlign: "center",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
      }}
    >
      <h1 style={{ fontSize: "32px", marginBottom: "20px" }}>
        Thank You for Your Order!
      </h1>

      <p style={{ fontSize: "18px", marginBottom: "10px" }}>
        Your order has been successfully placed.
      </p>

      <p style={{ fontSize: "18px", marginBottom: "10px" }}>
        <strong>Order Number:</strong> {orderId}
      </p>

      <p style={{ fontSize: "18px", marginBottom: "20px" }}>
        Estimated Delivery Time: <strong>30–40 minutes</strong>
      </p>

      <br />

      <a
        href="/"
        style={{
          textDecoration: "none",
          padding: "10px 20px",
          background: "tomato",
          color: "white",
          borderRadius: "8px",
          fontWeight: "600"
        }}
      >
        Back to Home
      </a>
    </div>
  );
}

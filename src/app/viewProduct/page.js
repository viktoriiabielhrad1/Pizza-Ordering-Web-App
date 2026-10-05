"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ViewProductPage() {
  const params = useSearchParams();
  const productName = params.get("p");

  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    async function load() {
      const res = await fetch("/api/getProducts");
      const data = await res.json();

      const found = data.products.find(p => p.pname === productName);

      if (found) {
        setProduct({
              _id: found._id,
          name: found.pname,
          img: found.img,
          description: found.description,
          sizes: found.sizes.map(s => ({
            label: s.label,
            price: s.cost
          }))
        });
      }
    }

    load();
  }, [productName]);

  if (!product) return <p>Loading...</p>;
console.log("PRODUCT:", product);

  return (
    <div style={{ padding: "40px", maxWidth: "800px", margin: "0 auto" }}>
      <img 
        src={product.img}
        alt={product.name}
        style={{
          width: "70%",
          borderRadius: "8px",
          marginBottom: "12px",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto"
        }}
      />

      <h1 style={{textAlign: "center"}}>{product.name}</h1>

      <div style={{ marginBottom: "10px", textAlign: "center" }}>
        {product.sizes.map((size, index) => (
          <button
            key={index}
            onClick={() => setSelectedSize(size)}
            style={{
              marginRight: "8px",
              padding: "8px 14px",
              borderRadius: "20px",
              border: selectedSize?.label === size.label ? "2px solid tomato" : "1px solid #ccc",
              background: selectedSize?.label === size.label ? "rgba(255, 99, 71, 0.15)" : "white",
              cursor: "pointer",
              transition: "0.2s",
              fontWeight: "500",
                   textAlign: "center"
            }}
          >
            {size.label} (€{size.price})
          </button>
        ))}
      </div>

      {selectedSize && (
        <h3 style={{ textAlign: "center" }}>Selected: {selectedSize.label} — €{selectedSize.price}</h3>
      )}

      <p style={{ textAlign: "center" }}>{product.description}</p>
<div style={{ textAlign: "center", marginTop: "20px" }}>
  <button
    onClick={() => setQuantity(q => Math.max(1, q - 1))}
    style={{
      padding: "6px 12px",
      marginRight: "10px",
      borderRadius: "6px",
      border: "1px solid #ccc",
      background: "white",
      cursor: "pointer"
    }}
  >
    -
  </button>

  <span style={{ fontSize: "18px", fontWeight: "600" }}>{quantity}</span>

  <button
    onClick={() => setQuantity(q => q + 1)}
    style={{
      padding: "6px 12px",
      marginLeft: "10px",
      borderRadius: "6px",
      border: "1px solid #ccc",
      background: "white",
      cursor: "pointer"
    }}
  >
    +
  </button>
</div>

<button
 onClick={async () => {
  if (!selectedSize) {
    alert("Please select a size before adding to cart.");
    return;
  }

  const res = await fetch("/api/addToCart", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    productId: product._id,
    size: selectedSize.label,
    quantity: quantity
  })
});


  const data = await res.json();

  if (data.success) {
    window.location.href = "/cart";
  } else {
    alert("Error adding to cart.");
  }
}}

  style={{
    marginTop: "20px",
    padding: "12px 12px",
    borderRadius: "8px",
    border: "none",
    background: "tomato",
    color: "white",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "600",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto"
  }}
  
>
  Add to Cart
</button>

    </div>
  );
}


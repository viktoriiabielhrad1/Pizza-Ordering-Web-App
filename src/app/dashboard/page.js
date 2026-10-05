"use client";

import { useState, useEffect } from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  padding: theme.spacing(5),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function MyPage() {

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [dbProducts, setDbProducts] = useState([]);
  const [selectedSize, setSelectedSize] = useState(null);

  // Add to cart
  function addToCart(product, size) {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    cart.push({
      name: product.name,
      description: product.description,
      size: size?.label || "No size selected",
      price: size?.price || "0"
    });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart!");
  }

  // Fetch DB 
  useEffect(() => {
    async function loadFromDB() {
      const res = await fetch("/api/getProducts");
      const data = await res.json();
//CONVERT data
const converted = data.products.map(p => ({
    id: p._id, 
  name: p.pname,
  img: p.img,
  description: p.description,

  
  sizes: p.sizes
    ? p.sizes.map(s => ({
        label: s.label,
        price: s.cost   
      }))
    : []
}));



      setDbProducts(converted);
    }

    loadFromDB();
  }, []);

  return (
  <Box sx={{ flexGrow: 1, mt: 6, mb: 3 }}>
 <Grid container spacing={3}>
  {dbProducts.map((p, index) => (
    <Grid key={index} item xs={12} sm={6} md={6}>
      <Item
        sx={{
          minHeight: "380px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between"
        }}
      >
        <img 
          src={p.img}
          alt={p.name}
          style={{
            width: "100%",
            height: "200px",
            borderRadius: "12px",
            marginBottom: "12px",
            objectFit: "cover"
          }}
        />

        <h2>{p.name}</h2>

        {p.sizes?.length > 0 && (
          <p style={{ fontWeight: "bold", marginBottom: "10px" }}>
            From €{p.sizes[0].price}
          </p>
        )}

        <Link
          href={`/viewProduct?p=${encodeURIComponent(p.name)}`}
          style={{ display: "inline-block", cursor: "pointer" }}
        >
          More info
        </Link>
      </Item>
    </Grid>
  ))}
</Grid>


</Box>

  );
}


"use client";

import * as React from "react";
import { useState } from "react";

import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Link from "next/link";

export default function SimpleContainer() {
 const [fullName, setFullName] = useState("");
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");
const [password, setPassword] = useState("");         
const [confirmPassword, setConfirmPassword] = useState(""); 
const [error, setError] = useState("");
const [open, setOpen] = useState(false);



const handleSubmit = async (e) => {
  e.preventDefault();

  if (password !== confirmPassword) {
    setError("Passwords do not match");
    return;
  }

  setError("");

  const res = await fetch("/api/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      fullName,
      email,
      phone,
      password
    })
  });

  const data = await res.json();

  if (data.success) {
    setOpen(true); 
  } else {
    setError("Registration failed");
  }
};


  return (
    <React.Fragment>
      <CssBaseline />

      <Container
        maxWidth="sm"
        sx={{
          mb: 8,
        }}
      >
        <Box
          sx={{
            bgcolor: "#fffcda",
            height: "65vh",
            marginTop: "60px",
            borderRadius: "12px",
            border: "2px solid tomato",
            textAlign: "center",
          }}
        >
          <h1>Register</h1>

          <form onSubmit={handleSubmit}>
            {/* Full Name */}
            <TextField
              label="Full Name"
value={fullName}
  onChange={(e) => setFullName(e.target.value)}
              type="text"
              variant="outlined"
              margin="normal"
              sx={textFieldStyle}
            />
            <br />

            {/* Email */}
            <TextField
              label="Email"
value={email}
  onChange={(e) => setEmail(e.target.value)}
              type="email"
              variant="outlined"
              margin="normal"
              sx={textFieldStyle}
            />
            <br />

        {/* Phone */}
            <TextField
              label="Phone Number"
value={phone}
  onChange={(e) => setPhone(e.target.value)}
              type="tel"
              variant="outlined"
              margin="normal"
              sx={textFieldStyle}
            />
            <br />

     {/* Password */}
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={textFieldStyle}
            />
            <br />

      {/* Confirm Password */}
            <TextField
              label="Confirm Password"
              type="password"
              variant="outlined"
              margin="normal"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              sx={textFieldStyle}
            />
            <br />

            {/* if error  */}
            {error && (
              <p style={{ color: "red", marginTop: "5px" }}>{error}</p>
            )}

            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    color: "gray",
                    "&.Mui-checked": {
                      color: "tomato",
                    },
                  }}
                />
              }
              label="Subscribe to special offers"
            />
            <br />
{/*REGISTER BUTTON*/}
            <Button
              type="submit"
              variant="contained"
              sx={{
                borderRadius: 4,
                mt: 2,
                width: "150px",
                backgroundColor: "tomato",
              }}
            >
              Register
            </Button>

{/* SUCCESS MESSAGE */}
{open && (
  <p style={{ color: "green", marginTop: "10px" }}>
    Registration successful!
  </p>
)}
            <br />
            <br />
{/*LOGIN LINK*/}
            <Link
              href="/login"
              style={{
                color: "tomato",
                textDecoration: "none",
                cursor: "pointer",
              }}
              onMouseEnter={(e) =>
                (e.target.style.textDecoration = "underline")
              }
              onMouseLeave={(e) =>
                (e.target.style.textDecoration = "none")
              }
            >
              Already have an account? Login
            </Link>
          </form>
        </Box>
      </Container>
    </React.Fragment>
  );
}

const textFieldStyle = {
  width: "400px",
  "& .MuiInputLabel-root": {
    color: "gray",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "tomato",
  },
  "& .MuiOutlinedInput-root": {
    borderRadius: "20px",
    "& fieldset": {
      borderColor: "gray",
    },
    "&:hover fieldset": {
      borderColor: "black",
    },
    "&.Mui-focused fieldset": {
      borderColor: "tomato",
    },
  },
};

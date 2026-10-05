"use client";

import * as React from "react";
import { useState } from "react";

import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "next/link";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
export default function SimpleContainer() {
 
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const [error, setError] = useState("");
const [success, setSuccess] = useState("");

const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");
  setSuccess("");

  const res = await fetch("/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email,
      password
    })
  });

  const data = await res.json();

  if (data.success) {
    setSuccess("Login successful!");
    
    
  } else {
    setError(data.message || "Invalid email or password");
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
            height: "45vh",
            marginTop: "120px",
            borderRadius: "12px",
            border: "2px solid tomato",
            textAlign: "center",
          }}
        >
          <h1>Login</h1>

          <form onSubmit={handleSubmit}>
           

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

  {error && (
              <p style={{ color: "red", marginTop: "5px" }}>{error}</p>
            )}

            {success && (
              <p style={{ color: "green", marginTop: "5px" }}>{success}</p>
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
              label="Remember me"
            />
            <br />
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
              Log In
            </Button>

            <br /><br />
                 <Link
              href="/"
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
              Forgot Password?
            </Link>
            <br />

            <Link
              href="/register"
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
              Don't have an account? Register
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

"use client";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Link from "next/link";
import Image from "next/image";
import Button from "@mui/material/Button";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="en">
    <body style={{ 
    minHeight: "100vh", 
    display: "flex", 
    flexDirection: "column", 
    overflowX: "hidden",
    backgroundImage: "url('/bg.jpg')",
backgroundSize: "cover",
backgroundPosition: "center",
backgroundRepeat: "no-repeat",

    }}>

        {/* NAVBAR */}
  <Box
  sx={{
       width: "100%", overflowX: "hidden",
    display: "flex",
    alignItems: "flex-start",   
    gap: 3,
    px: 3,
    py: 2,
    borderBottom: "2px solid red",
    backgroundColor: "#397A35",
      color: "white",
  }}
>

          {/* LOGO AND PARAGRAPH */}
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
            <Link href="/" style={{ display: "flex", alignItems: "center" }}>
              <Image src="/logo.png" alt="Logo" width={90} height={90} />
            </Link>
            <p style={{ margin: 0, fontSize: "14px", fontWeight: "bold" }}>
             Contact Us:
              <br /> Mon - Fri    9:00 - 18:00
              <br /> Sat - Sun    9:00 - 17:00
              <br />+353857777777<br />
            </p>
          </Box>

          {/* NAVTABS */}
          <Tabs value={pathname}
sx={{
    "& .MuiTab-root": {
      color: "white",            
      borderRadius: "8px",
    },
    "& .MuiTab-root:hover": {
      color: "white",           
      opacity: 0.8,            
    },
    "& .Mui-selected": {
      color: "white !important", 
      fontWeight: "bold",       
    },
          "& .MuiTabs-indicator": {
      backgroundColor: "white",   
    },
  }}
>
            <Tab
              label="Home"
              value="/"
              href="/"
              component={Link}
              sx={{ borderRadius: "8px" }}
            />
            <Tab
              label="Menu"
              value="/dashboard"
              href="/dashboard"
              component={Link}
              sx={{ borderRadius: "8px" }}
            />
            <Tab
              label="MyCart"
              value="/cart"
              href="/cart"
              component={Link}
              sx={{ borderRadius: "8px" }}
            />
<Tab value="/viewProduct" style={{ display: "none" }} />

          </Tabs>

         
         <Box sx={{ mx: 70}} />

          {/* REGISTER AND LOGIN BUTTONS */}
          <Box sx={{ display: "flex", gap: 0 }}>
            <Button
              href="/register"
              component={Link}
              sx={{
                  color: "white",
                border: "2px solid red",
                borderRadius: 0,
                borderRight: "1px solid red",
                px: 2,
                  "&:hover": {
      color: "white",
                   fontWeight: "bold",    
      opacity: 0.8,
      backgroundColor: "transparent",},
              }}
            >
              Register
            </Button>

            <Button
              href="/login"
              component={Link}
              sx={{
                  color: "white",
                   
                border: "2px solid red",
                borderRadius: 0,
                borderLeft: "1px solid red",
                px: 2,
                                    "&:hover": {
      color: "white",
                   fontWeight: "bold",    
      opacity: 0.8,
      backgroundColor: "transparent",},
              }}
            >
              Login
            </Button>
          </Box>
        </Box>

        {children}
{/* FOOTER */}
<Box
  component="footer"
  sx={{
       color: "white",
    width: "100%",
    textAlign: "center",
    py: 2,
    borderTop: "2px solid red",
    fontSize: "12px",
    height: "40px",     
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    mt: "auto",
 backgroundColor: "#397A35",
  }}
>
  © 2026 MyPizza Company. All rights reserved.
</Box>


      </body>
    </html>
  );
}

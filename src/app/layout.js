import Navbar from "../components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          overflowX: "hidden",
          backgroundImage: "url('/bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Navbar />

        {children}

        <footer
          style={{
            color: "white",
            width: "100%",
            textAlign: "center",
            padding: "12px 0",
            borderTop: "2px solid red",
            fontSize: "12px",
            backgroundColor: "#397A35",
            marginTop: "auto",
          }}
        >
          © 2026 MyPizza Company. All rights reserved.
        </footer>
      </body>
    </html>
  );
}

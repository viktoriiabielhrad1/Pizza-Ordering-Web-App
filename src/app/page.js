"use client";

export default function HomePage() {
  
  return (
  
    <main style={styles.main}>
      <h1 className="title" style={styles.heading}>Limited-Time Pizza Deals</h1>

      <div style={styles.container}>
        
        {/* Container 1 */}
        <div style={styles.box}>
          <img 
            src="/hawaiian.jpg" 
            alt="Hawaiian pizza" 
            style={styles.image}
          />
          <p style={styles.text}>
            <b>HAWAIIAN PIZZA</b> <br />
            Tomato sauce, mozzarella cheese, ham, pineapple.
          </p>
<a href="/viewProduct">
          <button style={styles.button}><a href = "/viewProduct?p=Hawaiian%20Pizza" style={{ textDecoration: "none" }}>Order Now</a></button>
</a>
<style jsx>{`
  a:hover {
    opacity: 0.6;
  }
`}</style>

        </div>

        {/* Container 2 */}
        <div style={styles.box}>
          <img 
            src="/seafood.jpg" 
            alt="Seafood pizza" 
            style={styles.image}
          />
          <p style={styles.text}>
            <b>SEAFOOD PIZZA</b> <br />
            Shrimp, calamari, mussels, clams, mozzarella cheese, tomato sauce, basil.
          </p>
<a href="/viewProduct">
          <button style={styles.button}><a href = "/viewProduct?p=Seafood%20Pizza" style={{ textDecoration: "none" }}>Order Now</a></button>
</a>
      <style jsx>{`
        a:hover {
          opacity: 0.6;
        }
      `}</style>
        </div>

      </div>
    </main>

  );
}

const styles = {
  main: {
    padding: "40px",
   // maxWidth: "1200px",
    margin: "0 auto",
    fontFamily: "Arial, sans-serif"
  },
  heading: {
    textAlign: "center",
    marginBottom: "40px",
    textShadow: "0 0 10px white, 0 0 20px white, 0 0 30px white"
  },
  container: {
    display: "flex",
    gap: "50px",
    justifyContent: "center",
    flexWrap: "wrap"
  },
  box: {
    width: "700px",
    padding: "40px",
    //borderRadius: "10px",
    background: "#f5f5f5",
    backgroundColor: "rgba(255, 255, 255, 0.7)", 
    textAlign: "center",
    border: "2px solid Tomato"
  },
  image: {
    width: "90%",
    height: "400px",
    borderRadius: "8px",
    marginBottom: "15px"
  },
  text: {
    marginBottom: "10px"
  },
  button: {
    marginTop: "10px",
    padding: "10px 20px",
    border: "none",
    borderRadius: "16px",
    background: "Tomato",
    color: "white",
    cursor: "pointer"
  },
};


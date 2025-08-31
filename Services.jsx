// src/pages/Services.jsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Services() {
  return (
    <div style={styles.container}>
      <Navbar />
      <main style={styles.main}>
        <h1>Our Services</h1>
        <p style={{ maxWidth: "700px", margin: "1rem auto", fontSize: "1.1rem" }}>
          We provide multiple spam detection services to help ensure your
          digital safety. Select a category below to learn more.
        </p>

        <div style={styles.grid}>
          <div style={styles.card}>
            <h3>Email Spam Detection</h3>
            <p>Detect phishing and spam emails effectively.</p>
          </div>
          <div style={styles.card}>
            <h3>Message Spam Detection</h3>
            <p>Identify and block spam SMS messages instantly.</p>
          </div>
          <div style={styles.card}>
            <h3>Audio Call Detection</h3>
            <p>Protect yourself from fraudulent and fake calls.</p>
          </div>
          <div style={styles.card}>
            <h3>Website Spam Detection</h3>
            <p>Check if a website or link is safe before visiting.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

const styles = {
  container: { display: "flex", flexDirection: "column", minHeight: "100vh" },
  main: { flex: 1, padding: "2rem", textAlign: "center" },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "1.5rem",
    marginTop: "2rem",
  },
  card: {
    background: "#fff",
    padding: "1.5rem",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    transition: "0.3s",
  },
};

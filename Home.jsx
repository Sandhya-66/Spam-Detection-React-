// src/pages/Home.jsx
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div style={styles.container}>
        <h1>Welcome to Spam Detection Dashboard</h1>
        <p>Select a service below:</p>
        <div style={styles.grid}>
          <Link to="/mail" style={styles.card}>📧 Mail Spam Check</Link>
          <Link to="/message" style={styles.card}>💬 Message Spam Check</Link>
          <Link to="/audio" style={styles.card}>🎙️ Audio Spam Check</Link>
          <Link to="/website" style={styles.card}>🌐 Website Spam Check</Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "3rem",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "2rem",
    marginTop: "2rem",
  },
  card: {
    display: "block",
    padding: "2rem",
    background: "#f4f4f4",
    borderRadius: "10px",
    textDecoration: "none",
    color: "#2c3e50",
    fontSize: "1.2rem",
    fontWeight: "bold",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
    transition: "0.3s",
  },
};

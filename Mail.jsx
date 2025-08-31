// src/pages/Mail.jsx
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Mail() {
  const [emailText, setEmailText] = useState("");
  const [result, setResult] = useState(null);

  const handleCheckSpam = (e) => {
    e.preventDefault();

    // simple demo spam check logic
    if (emailText.toLowerCase().includes("lottery") || emailText.toLowerCase().includes("win money")) {
      setResult("⚠️ This email looks like SPAM!");
    } else {
      setResult("✅ This email seems safe.");
    }
  };

  return (
    <div style={styles.container}>
      <Navbar />
      <main style={styles.main}>
        <h1>Email Spam Detection</h1>
        <form onSubmit={handleCheckSpam} style={styles.form}>
          <textarea
            placeholder="Paste your email content here..."
            value={emailText}
            onChange={(e) => setEmailText(e.target.value)}
            style={styles.textarea}
            required
          />
          <button type="submit" style={styles.btn}>Check Spam</button>
        </form>

        {result && (
          <div style={styles.resultBox}>
            <h3>{result}</h3>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

const styles = {
  container: { display: "flex", flexDirection: "column", minHeight: "100vh" },
  main: { flex: 1, padding: "2rem", textAlign: "center" },
  form: { marginTop: "1.5rem", display: "flex", flexDirection: "column", alignItems: "center" },
  textarea: {
    width: "80%",
    minHeight: "150px",
    padding: "1rem",
    fontSize: "1rem",
    borderRadius: "8px",
    border: "1px solid #ccc",
    marginBottom: "1rem",
  },
  btn: {
    background: "#2c3e50",
    color: "white",
    padding: "0.8rem 1.5rem",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "1rem",
  },
  resultBox: {
    marginTop: "1.5rem",
    padding: "1rem",
    background: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
};

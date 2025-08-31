// src/pages/Message.jsx
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Message() {
  const [messageText, setMessageText] = useState("");
  const [result, setResult] = useState(null);

  const handleCheckSpam = (e) => {
    e.preventDefault();

    // simple demo spam check logic
    if (
      messageText.toLowerCase().includes("claim now") ||
      messageText.toLowerCase().includes("free offer") ||
      messageText.toLowerCase().includes("click link")
    ) {
      setResult("⚠️ This message looks like SPAM!");
    } else {
      setResult("✅ This message seems safe.");
    }
  };

  return (
    <div style={styles.container}>
      <Navbar />
      <main style={styles.main}>
        <h1>Message Spam Detection</h1>
        <form onSubmit={handleCheckSpam} style={styles.form}>
          <textarea
            placeholder="Paste your SMS message here..."
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
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
    width: "70%",
    minHeight: "120px",
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

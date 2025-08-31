// src/pages/About.jsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div style={styles.container}>
      <Navbar />
      <main style={styles.main}>
        <h1>About Spam Detection System</h1>
        <p style={styles.text}>
          Our Spam Detection System is designed to help users identify spam
          across different communication channels such as email, SMS, audio
          calls, and websites. 
        </p>
        <p style={styles.text}>
          With the rise of phishing, scams, and fraudulent activities online,
          it is crucial to provide a secure and reliable system that can protect
          users from potential threats. Our goal is to make digital
          communication safer and more trustworthy.
        </p>
      </main>
      <Footer />
    </div>
  );
}

const styles = {
  container: { display: "flex", flexDirection: "column", minHeight: "100vh" },
  main: { flex: 1, padding: "2rem", textAlign: "center" },
  text: {
    fontSize: "1.1rem",
    margin: "1rem auto",
    maxWidth: "700px",
    lineHeight: "1.6",
    color: "#333",
  },
};

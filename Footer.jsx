// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer style={styles.footer}>
      &copy; 2025 Spam Detection System. All rights reserved.
    </footer>
  );
}

const styles = {
  footer: {
    textAlign: "center",
    padding: "1rem",
    fontSize: "0.9rem",
    color: "#888",
    borderTop: "1px solid #ddd",
    background: "#f9f9f9"
  }
};

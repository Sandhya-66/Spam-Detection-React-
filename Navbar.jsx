// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { isLoggedIn, logout } = useAuth();

  return (
    <nav style={styles.nav}>
      <h2>Spam Detection</h2>
      {isLoggedIn && (
        <ul style={styles.menu}>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><button onClick={logout} style={styles.btn}>Logout</button></li>
        </ul>
      )}
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    background: "#2c3e50",
    color: "white",
  },
  menu: {
    display: "flex",
    listStyle: "none",
    gap: "1.5rem",
  },
  btn: {
    background: "red",
    color: "white",
    border: "none",
    padding: "0.5rem 1rem",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

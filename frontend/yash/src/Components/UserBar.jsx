import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider";

function UserBar() {
    const { profile, loading } = useContext(AuthContext);

    if (loading) return null;
    if (!profile) return null;
  const onLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };
  return (
    <div style={styles.bar}>
      <div style={styles.left}>
        <span>
          Welcome, <strong> {profile.first_name}</strong>
        </span>
      </div>
      <div style={styles.right}>
        <a href="/account" style={styles.link}>
          My Account
        </a>
        <button onClick={onLogout} style={styles.logoutBtn}>
          Logout
        </button>
      </div>
    </div>
  );
}

const styles = {
  bar: {
    background: "#282c34",
    color: "#fff",
    padding: "10px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "14px",
  },
  left: {
    fontWeight: "500",
    color: "lightgreen",
    fontSize: "16px",
  },
  right: {
    display: "flex",
    gap: "15px",
    alignItems: "center",
  },
  link: {
    color: "#61dafb",
    textDecoration: "none",
  },
  logoutBtn: {
    background: "#ff4d4f",
    border: "none",
    color: "#fff",
    padding: "6px 12px",
    cursor: "pointer",
    borderRadius: "4px",
  },
};

export default UserBar;

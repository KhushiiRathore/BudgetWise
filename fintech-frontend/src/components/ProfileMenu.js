import React, { useState, useEffect } from "react";
import axios from "axios";

function ProfileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get("http://localhost:5000/auth/me", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => setUser(res.data))
        .catch((err) => console.error(err));
    }
  }, []);

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      {/* Profile Icon */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          backgroundColor: "#4CAF50",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        {user?.name ? user.name.charAt(0).toUpperCase() : "?"}
      </div>

      {/* Dropdown Menu */}
      {isOpen && user && (
        <div
          style={{
            position: "absolute",
            top: "45px",
            right: 0,
            backgroundColor: "white",
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            borderRadius: "8px",
            padding: "10px",
            width: "200px",
            zIndex: 100,
          }}
        >
          <p><strong>{user.name}</strong></p>
          <p style={{ fontSize: "14px", color: "gray" }}>{user.email}</p>
        </div>
      )}
    </div>
  );
}

export default ProfileMenu;

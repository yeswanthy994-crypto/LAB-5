// src/components/AuthWrapper.jsx
import React from "react";

const AuthWrapper = ({ children }) => (
  <div style={{
    maxWidth: "400px",
    margin: "60px auto",
    padding: "30px",
    background: "rgba(255,255,255,0.95)",
    borderRadius: "12px",
    boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
    textAlign: "center"
  }}>
    {children}
  </div>
);

export default AuthWrapper;
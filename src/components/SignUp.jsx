// src/components/SignUp.jsx
import React, { useRef } from "react";

const SignUp = ({ setIsAuthenticated }) => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (email.includes("@") && password.length >= 6) {
      setIsAuthenticated(true);
    } else {
      alert("Invalid input");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <input
        type="email"
        placeholder="Email"
        ref={emailRef} // uncontrolled
        style={{ display: "block", margin: "10px auto", padding: "8px", width: "90%" }}
      />
      <input
        type="password"
        placeholder="Password"
        ref={passwordRef} // uncontrolled
        style={{ display: "block", margin: "10px auto", padding: "8px", width: "90%" }}
      />
      <button type="submit" style={{
        padding: "10px 20px",
        background: "#28a745",
        color: "#fff",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer"
      }}>
        Sign Up
      </button>
    </form>
  );
};

export default SignUp;
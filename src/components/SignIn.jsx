import React, { useState } from "react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(""); // state for output message

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (email.includes("@") && password.length >= 6) {
      setMessage("✅ Signed in successfully!");
    } else {
      setMessage("❌ Invalid email or password.");
    }
  };

  return (
    <div className="auth-box">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Sign In</button>
      </form>

      {/* Output message */}
      {message && <p style={{ marginTop: "15px", fontWeight: "bold" }}>{message}</p>}
    </div>
  );
};

export default SignIn;
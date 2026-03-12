// src/App.jsx
import React, { useState } from "react";
import AuthWrapper from "./components/AuthWrapper";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <AuthWrapper>
      <h1>{isAuthenticated ? "Welcome Back!" : "Please Sign In or Sign Up"}</h1>
      <SignIn setIsAuthenticated={setIsAuthenticated} />
      <SignUp setIsAuthenticated={setIsAuthenticated} />
    </AuthWrapper>
  );
};

export default App;
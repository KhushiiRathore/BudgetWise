import React, { useState } from "react";
import { signup } from "../services/authService";

function Signup({ onSignupSuccess }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
  e.preventDefault();
  try {
    const res = await signup({ name, email, password });
    alert(res.data.msg || "Signup successful");
    localStorage.setItem("token", res.data.token);
    onSignupSuccess();
  } catch (err) {
    const message = err.response?.data?.msg || "Signup failed";
    alert(message);

    // ✅ Automatically switch to login page if account exists
    if (message.includes("Account already exists")) {
      onSignupSuccess(false); // You can modify App.js to use this to switch to login
    }
  }
};


  return (
    <div className="auth-card">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
}

export default Signup;

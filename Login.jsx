import React, { useState, useEffect } from "react";
import "./login.css";

export default function Login({ onLoginSuccess }) {
  const [mode, setMode] = useState("login"); // login | signup
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  function update(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // ---------------- BACKEND HEALTH CHECK ----------------
  useEffect(() => {
    fetch("http://localhost:4000/api/health")
      .then((res) => res.json())
      .then((data) => console.log("Backend connected:", data))
      .catch((err) => console.error("Backend NOT connected", err));
  }, []);

  // ---------------- GOOGLE LOGIN ----------------
  useEffect(() => {
    if (!window.google) return;

    window.google.accounts.id.initialize({
      client_id: window.GOOGLE_CLIENT_ID,
      callback: async (response) => {
        const res = await fetch("http://localhost:4000/api/auth/google", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id_token: response.credential }),
        });

        const data = await res.json();
        if (res.ok) {
          onLoginSuccess(data);
        } else {
          alert(data.error || "Google login failed");
        }
      },
    });

    window.google.accounts.id.renderButton(
      document.getElementById("googleBtn"),
      { theme: "outline", size: "large" }
    );
  }, []);

  // ---------------- SIGNUP ----------------
  async function signup(e) {
    e.preventDefault();

    if (form.password !== form.password2) {
      return alert("Passwords do not match");
    }

    const res = await fetch("http://localhost:4000/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: form.username,
        email: form.email,
        password: form.password,
      }),
    });

    const data = await res.json();
    if (res.ok) {
      alert("Signup successful. Please login.");
      setMode("login");
    } else {
      alert(data.error || "Signup failed");
    }
  }

  // ---------------- LOGIN ----------------
  async function handleLogin(e) {
    e.preventDefault();

    console.log("Email:", form.email);
    console.log("Password:", form.password);

    const res = await fetch("http://localhost:4000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: form.email,
        password: form.password,
      }),
    });

    const data = await res.json();
    console.log("Login response:", data);

    if (res.ok) {
      onLoginSuccess(data);
    } else {
      alert(data.error || "Login failed");
    }
  }

  return (
    <div className="login-overlay">
      <div className="login-box">
        <h2>{mode === "login" ? "Welcome Back" : "Create Account"}</h2>

        {mode === "signup" && (
          <>
            <label>Username</label>
            <input name="username" onChange={update} />
          </>
        )}

        <label>Email</label>
        <input name="email" onChange={update} />

        <label>Password</label>
        <input type="password" name="password" onChange={update} />

        {mode === "signup" && (
          <>
            <label>Re-enter Password</label>
            <input type="password" name="password2" onChange={update} />
          </>
        )}

        {mode === "login" ? (
          <>
            <button className="btn-main" onClick={handleLogin}>
              Login
            </button>

            <div id="googleBtn" style={{ marginTop: 12 }}></div>

            <p className="link" onClick={() => setMode("signup")}>
              Create account
            </p>
            <p className="link">Forgot password?</p>
          </>
        ) : (
          <>
            <button className="btn-main" onClick={signup}>
              Sign up
            </button>
            <p className="link" onClick={() => setMode("login")}>
              Already have an account?
            </p>
          </>
        )}
      </div>
    </div>
  );
}

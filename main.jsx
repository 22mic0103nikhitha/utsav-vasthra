// src/main.jsx
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import App from "./App.jsx";      // your main saree UI
import Login from "./Login.jsx";
import "./index.css";

// Protect routes
function ProtectedRoute({ children }) {
  const user = localStorage.getItem("user");
  return user ? children : <Navigate to="/login" replace />;
}

function RootApp() {
  function handleLoginSuccess(user) {
    localStorage.setItem("user", JSON.stringify(user));
    window.location.href = "/"; // redirect to home
  }

  return (
    <BrowserRouter>
      <Routes>

        {/* LOGIN PAGE */}
        <Route path="/login" element={<Login onLoginSuccess={handleLoginSuccess} />} />

        {/* PROTECTED APP PAGE */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <App />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RootApp />
  </React.StrictMode>
);

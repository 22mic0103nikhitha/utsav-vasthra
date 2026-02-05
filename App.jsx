import React, { useState } from "react";
import Login from "./Login";
import Splash from "./Splash";
import Navbar from "./Navbar";
import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import CustomerReviews from "./CustomerReviews";

export default function App() {
  const [user, setUser] = useState(null);
  const [showSplash, setShowSplash] = useState(false);

  function handleLoginSuccess(userData) {
    setUser(userData);
    setShowSplash(true);
  }

  // 1️⃣ Not logged in → Login page
  if (!user) {
    return <Login onLoginSuccess={handleLoginSuccess} />;
  }

  // 2️⃣ Splash screen after login
  if (showSplash) {
    return <Splash onFinish={() => setShowSplash(false)} />;
  }

  // 3️⃣ Main Home Page (SCROLLABLE)
  return (
    <>
      <Navbar />

      {/* HERO VIDEO */}
      <Hero />

      {/* HOW IT WORKS */}
      <HowItWorks />

      {/* CUSTOMER REVIEWS */}
      <CustomerReviews />
    </>
  );
}

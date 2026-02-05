import React from "react";
import "./HowItWorks.css";

export default function HowItWorks() {
  return (
    <section className="how-it-works">
      <div className="container">
        <h2>How Utsav Vasthra Works</h2>
        <p className="subtitle">
          Step-by-step experience of our saree journey
        </p>

        <div className="steps-grid">
          <div className="step">
            <h3>1. Make Your Choice</h3>
            <p>Browse and select your perfect saree.</p>
          </div>

          <div className="step">
            <h3>2. The Dream Fit</h3>
            <p>Choose size, duration & delivery date.</p>
          </div>

          <div className="step">
            <h3>3. Flaunt It</h3>
            <p>Enjoy your look and the compliments.</p>
          </div>

          <div className="step">
            <h3>4. Easy Return</h3>
            <p>We pick it up after your occasion.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

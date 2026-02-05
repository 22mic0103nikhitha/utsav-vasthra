// src/components/Navbar.jsx
import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { FaHeart, FaShoppingCart, FaPhoneAlt } from "react-icons/fa";
import logo from "./assets/logo.png";

export default function Navbar() {
  const [categories, setCategories] = useState({
    mangala: [],
    chiffon: [],
  });

  useEffect(() => {
    fetch("http://localhost:4000/api/categories")
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(err => console.error("Category fetch error:", err));
  }, []);

  return (
    <nav className="navbar">

      {/* LEFT LOGO */}
      <div className="nav-left">
        <img src={logo} alt="Utsav Vasthra" className="logo" />
      </div>

      {/* CENTER MENU */}
      <div className="nav-center">
        <div className="nav-item vanitha">
          VANITHA

          {/* DROPDOWN */}
          <div className="dropdown-menu">

            {/* WHAT'S NEW */}
            <div className="dropdown-column">
              <h4>What’s New</h4>
              <a href="/new/banarasi">New Banarasi Silk</a>
              <a href="/new/kanjivaram">Latest Kanjivaram</a>
              <a href="/new/organza">Festive Organza</a>
            </div>

            {/* SALE */}
            <div className="dropdown-column">
              <h4>Sale</h4>
              <a href="/sale/banarasi">Banarasi Saree – 30%</a>
              <a href="/sale/paithani">Paithani Saree – 25%</a>
              <a href="/sale/organza">Organza Saree – 20%</a>
            </div>

            {/* MANGALA VASTRA */}
            <div className="dropdown-column">
              <h4>Mangala Vastra</h4>
              {categories.mangala.map(item => (
                <a
                  key={item}
                  href={`/category/${item.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {item}
                </a>
              ))}
            </div>

            {/* CHIFFON UTSAV */}
            <div className="dropdown-column">
              <h4>Chiffon Utsav</h4>
              {categories.chiffon.map(item => (
                <a
                  key={item}
                  href={`/category/${item.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {item}
                </a>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* RIGHT ICONS */}
      <div className="nav-right">
        <FaPhoneAlt className="nav-icon" title="Contact Us" />
        <FaHeart className="nav-icon" title="Wishlist" />
        <FaShoppingCart className="nav-icon" title="Cart" />
      </div>

    </nav>
  );
}

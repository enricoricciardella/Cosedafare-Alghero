import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Brand */}
        <div className="navbar-brand">
          <Link to="/" className="navbar-logo">Home</Link>
          <span className="navbar-subtitle">Luelen &amp; Al 205</span>
        </div>
        {/* Hamburger menu */}
        <button
          className="navbar-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>
        {/* Menu links */}
        <div className={`navbar-menu${menuOpen ? " active" : ""}`}>
          <Link to="/ristoranti" className="nav-link">Ristoranti</Link>
          <Link to="/spiagge" className="nav-link">Spiagge</Link>
          <Link to="/vita-notturna" className="nav-link">Vita Notturna</Link>
          <Link to="/vicino-casa" className="nav-link">Vicino a Casa</Link>
          <div className="navbar-lang">
            <button className="lang-btn">ITA</button>
            <button className="lang-btn">EN</button>
            <button className="lang-btn">ES</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

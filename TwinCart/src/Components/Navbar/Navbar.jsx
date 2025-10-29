import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img src="/images/logo.png" alt="TwinMart Logo" />
        <h2>Twin Mart</h2>
      </div>

      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        
        <li><a href="/offers">Offers</a></li>
        <li><a href="/About">About Us</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>

      <div className="nav-actions">
        
        <button className="login-btn">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;

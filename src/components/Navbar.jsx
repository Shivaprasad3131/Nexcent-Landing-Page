import React from "react";
import "./Navbar.css";
import logo from "../assets/Icon.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt="Nexcent" />
          <span>Nexcent</span>
        </div>

        <ul className="navbar-links">
          <li><a href="/">Home</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/">Services</a></li>
          <li><a href="/">Blog</a></li>
          <li><a href="/">Contact</a></li>
        </ul>

        <div className="navbar-actions">
          <button className="login-btn">Login</button>
          <button className="signup-btn">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

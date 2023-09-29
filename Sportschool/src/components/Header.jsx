// components/Header.js
import React from "react";
import "./Header.css"; // Import CSS
import logo from "../assets/logo.png"; // Import image

const Header = () => {
  return (
    <header className="header-section">
      <div className="wp-container">
        <div className="logo">
          <a href="./index.html">
            <img src={logo} alt="Logo" />
          </a>
        </div>
        <ul className="hamburger-menu">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Abbonement</a>
          </li>
          <li>
            <a href="">Personal Coach</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;

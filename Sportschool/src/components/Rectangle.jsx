// components/Header.js
import React from "react";
import "./Style.css"; // Import CSS
import rectangle from "../assets/rectangle1.svg"; // Import image

const Header = () => {
  return (
    <section className="Section2">
      <div className="inner">
        <img src={rectangle} alt="Logo" />
 
      </div>
    </section>
  );
};

export default Header;

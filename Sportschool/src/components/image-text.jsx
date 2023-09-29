// components/Header.js
import React from "react";
import "./Style.css"; // Import CSS
import woman1 from "../assets/Woman1.svg"; // Import image
import woman2 from "../assets/Woman2.svg"; // Import image

const Header = () => {
  return (
    <section className="Section3">
      <div className="inner">
        <div className="left">
          <div className="image1">
            <img src={woman1} alt="Logo" />
          </div>
          <div className="image2">
            <img src={woman2} alt="Logo" />
          </div>
        </div>
        <div className="right">
          <h1>Over Ons</h1>
          <h3>De Beste Gym</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
          <div className="button"><a href="">Join Nu</a></div>
        </div>
      </div>
    </section>
  );
};

export default Header;

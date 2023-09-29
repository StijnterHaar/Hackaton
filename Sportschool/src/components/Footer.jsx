import { useState } from "react";

import "../App.css";
import logo from "../assets/logo.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <footer>
        <div className="top">
          <div className="left">
            <img src={logo} alt="" />
            <span className="description53 textblack">
              Benieuwd wat we voor jou <br /> kunnen betekenen?
            </span>
            <a href="" className="">
              <button className="button-dark">Contact</button>
            </a>
          </div>
          <div className="right">
            <ul>
              <li>
                <a href="">Contact</a>
              </li>
              <li>
                <a href="mailto:Info@lynx.nl">Info@lynx.nl</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="">Volg ons</a>
              </li>
              <li>
                <a href="">LinkedIn</a>
              </li>
              <li>
                <a href="">Instagram</a>
              </li>
              <li>
                <a href="">Dribbble</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="bottom">
          <span>©2023</span>
          <span>Algemene voorwaarden</span>
          <span>Privacy en Cookieverklaring</span>
        </div>
      </footer>
    </>
  );
}

export default App;
{
}

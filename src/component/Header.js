import React from "react";
import { useNavigate } from "react-router-dom";

function Header({ bg, text }) {
  const navigate = useNavigate();
  return (
    <header className="header" style={{ backgroundImage: `url(${bg})` }}>
      <div className="header-con">
        <div>
          <h1 onClick={() => navigate("../../")}>
            {text ? text : "Unlimited movies, TV shows, and more"}
          </h1>
          <br />
          <span>
            <button>
              <a href="#start" style={{ color: "black" }}>
                Get Started
              </a>
            </button>
            <button>
              <a style={{ color: "black" }}>Contact Us</a>
            </button>
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;

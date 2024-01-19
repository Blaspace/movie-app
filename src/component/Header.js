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
          <p className="disclaimer">
            <b>Disclaimer:</b> We do not claim ownership of any movie on this
            site. If your copyrighted material has been uploaded or links to
            your copyrighted material has been uploaded kindly contact us to
            file a take down notice.
          </p>
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

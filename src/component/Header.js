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
            <b>Disclaimer:</b> Wo do not claim ownership of any movie on this
            site. If your copyrighted material has been uploaded or links to
            your copyrighted material has been uploaded kindly click here to
            file a take down notice.
          </p>
          <br />
          <button>
            <a href="#start">Get Started</a>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;

import React from "react";

function Header({ bg, text }) {
  return (
    <header className="header" style={{ backgroundImage: `url(${bg})` }}>
      <div className="header-con">
        <div>
          <h1>{text ? text : "Unlimited movies, TV shows, and more"}</h1>
          <br />
          <p>
            Dawnload all your favourite movies and TV series
            <br /> for absolutly free
          </p>
          <br />
          <button>Get Started</button>
        </div>
      </div>
    </header>
  );
}

export default Header;

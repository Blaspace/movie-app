import React, { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";

function NavM({ handleSearch, setSearch }) {
  const [toggle, setToggle] = useState(false);
  const [toggleS, setToggleS] = useState(false);
  const navigate = useNavigate();
  const handleToggle = () => {
    setToggle(!toggle);
  };
  const inputRef = useRef();
  const ulref = useRef();

  const handleShow = () => {
    setToggleS(!toggleS);
  };
  useEffect(() => {
    if (toggleS) {
      inputRef.current.style.height = "80px";
    } else {
      inputRef.current.style.height = "0";
    }
  }, [toggleS]);
  useEffect(() => {
    if (toggle) {
      ulref.current.style.height = "400px";
    } else {
      ulref.current.style.height = "0";
    }
  }, [toggle]);

  return (
    <div className="nav navs">
      <nav>
        <h1>MYFLIX</h1>
        <section className="drop-down" id="msearch" ref={inputRef}>
          <span onClick={handleSearch}>
            <IoIosSearch />
          </span>
          <input type="text" onChange={(e) => setSearch(e.target.value)} />
        </section>
        <ul className="drop-down" ref={ulref}>
          <NavLink
            to={"/"}
            style={({ isActive }) => ({
              color: "#fafafa",
              textDecoration: "none",
            })}
            onClick={() => setToggle(false)}
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            to={"../movies"}
            style={({ isActive }) => ({
              color: "#fafafa",
              textDecoration: "none",
            })}
            onClick={() => setToggle(false)}
          >
            <li>Movie</li>
          </NavLink>
          <NavLink
            to={"../kdrama"}
            style={({ isActive }) => ({
              color: "#fafafa",
              textDecoration: "none",
            })}
            onClick={() => setToggle(false)}
          >
            <li>K-Drama</li>
          </NavLink>
          <NavLink
            to={"../series"}
            style={({ isActive }) => ({
              color: "#fafafa",
              textDecoration: "none",
            })}
            onClick={() => setToggle(false)}
          >
            <li>Series</li>
          </NavLink>
          <NavLink
            to={"../chinese"}
            style={({ isActive }) => ({
              color: "#fafafa",
              textDecoration: "none",
            })}
            onClick={() => setToggle(false)}
          >
            <li>Chinese</li>
          </NavLink>
          <NavLink
            to={"../asia"}
            style={({ isActive }) => ({
              color: "#fafafa",
              textDecoration: "none",
            })}
            onClick={() => setToggle(false)}
          >
            <li>Asia</li>
          </NavLink>
        </ul>
        <div className="navleft">
          <div className="searchm">
            <span onClick={handleShow}>
              <IoIosSearch />
            </span>
          </div>
          <h3 onClick={handleToggle}>
            <b>{!toggle ? <>&#x2630;</> : <>&times;</>}</b>
          </h3>
        </div>
      </nav>
    </div>
  );
}

export default NavM;

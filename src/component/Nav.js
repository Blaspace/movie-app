import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import Chinese from "../pages/Chinese";

function Nav() {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  const ulref = useRef();
  useEffect(() => {
    if (toggle) {
      ulref.current.style.height = "400px";
    } else {
      ulref.current.style.height = "0";
    }
  });
  return (
    <div className="nav">
      <nav>
        <h1>MYFLIX</h1>
        <ul className="menu">
          <NavLink
            to={"/"}
            style={({ isActive }) => ({
              color: "#fafafa",
              textDecoration: "none",
              borderBottom: isActive
                ? "3px solid red"
                : "3px solid transparent",
            })}
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            to={"../movies"}
            style={({ isActive }) => ({
              color: "#fafafa",
              textDecoration: "none",
              borderBottom: isActive
                ? "3px solid red"
                : "3px solid transparent",
            })}
          >
            <li>Movie</li>
          </NavLink>
          <NavLink
            to={"../kdrama"}
            style={({ isActive }) => ({
              color: "#fafafa",
              textDecoration: "none",
              borderBottom: isActive
                ? "3px solid red"
                : "3px solid transparent",
            })}
          >
            <li>K-Drama</li>
          </NavLink>
          <NavLink
            to={"../series"}
            style={({ isActive }) => ({
              color: "#fafafa",
              textDecoration: "none",
              borderBottom: isActive
                ? "3px solid red"
                : "3px solid transparent",
            })}
          >
            <li>Series</li>
          </NavLink>
          <NavLink
            to={"../chinese"}
            style={({ isActive }) => ({
              color: "#fafafa",
              textDecoration: "none",
              borderBottom: isActive
                ? "3px solid red"
                : "3px solid transparent",
            })}
          >
            <li>Chinese</li>
          </NavLink>
          <NavLink
            to={"../asia"}
            style={({ isActive }) => ({
              color: "#fafafa",
              textDecoration: "none",
              borderBottom: isActive
                ? "3px solid red"
                : "3px solid transparent",
            })}
          >
            <li>Asia</li>
          </NavLink>
        </ul>
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
        <h3 onClick={handleToggle}>
          <b>{!toggle ? <>&#x2630;</> : <>&times;</>}</b>
        </h3>
      </nav>
    </div>
  );
}

export default Nav;

import React from "react";
import { IoIosSearch } from "react-icons/io";
import { NavLink } from "react-router-dom";

function NavD({ handleSearch, setSearch }) {
  return (
    <div className="nav navl">
      <nav>
        <h1>MYFLIX</h1>
        <ul className="menu">
          <NavLink
            to={"/"}
            style={({ isActive }) => ({
              color: "#fafafa",
              textDecoration: "none",
              borderBottom: isActive
                ? "3px solid #ffb700"
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
                ? "3px solid #ffb700"
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
                ? "3px solid #ffb700"
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
                ? "3px solid #ffb700"
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
                ? "3px solid #ffb700"
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
                ? "3px solid #ffb700"
                : "3px solid transparent",
            })}
          >
            <li>Asia</li>
          </NavLink>
        </ul>
        <div className="search">
          <span onClick={handleSearch}>
            <IoIosSearch />
          </span>
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </nav>
    </div>
  );
}

export default NavD;

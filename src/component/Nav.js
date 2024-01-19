import React, { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import NavM from "./NavM";
import NavD from "./NavD";

function Nav() {
  const [search, setSearch] = useState(null);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (search) {
      navigate(`../../search/${search}`);
    }
  };

  return (
    <>
      <NavM handleSearch={handleSearch} setSearch={setSearch} />
      <NavD handleSearch={handleSearch} setSearch={setSearch} />
    </>
  );
}

export default Nav;

import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Nav";

function RootRoute() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}

export default RootRoute;

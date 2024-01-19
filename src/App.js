import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Kdrama from "./pages/Kdrama";
import RootRoute from "./component/RootRoute";
import Asia from "./pages/Asia";
import Chinese from "./pages/Chinese";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import SingleMovie from "./pages/SingleMovie";
import GetValue from "./component/GetValue";
import Search from "./pages/Search";
function App() {
  return (
    <Routes>
      <Route element={<RootRoute />}>
        <Route index element={<Home />} />
        <Route path="/kdrama" element={<Kdrama />} />
        <Route path="/asia" element={<Asia />} />
        <Route path="/chinese" element={<Chinese />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/search/:id" element={<Search />} />
        <Route element={<GetValue />}>
          <Route path="/single/:class/:id" element={<SingleMovie />} />
        </Route>
        <Route path="/series" element={<Series />} />
      </Route>
    </Routes>
  );
}

export default App;

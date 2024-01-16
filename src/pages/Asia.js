import React, { useState } from "react";
import Header from "../component/Header";
import { useContext, useEffect } from "react";
import MovieContext from "../context/MovieContext";
import AllMovies from "../component/AllMovies";
import bg from "../public/asia.jpeg";

function Asia() {
  const { asia, setAsia, url } = useContext(MovieContext);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (!asia.length) {
      setLoading(true);
      fetch(`${url}/asia`)
        .then((res) => res.json())
        .then((data) => setAsia(data))
        .finally(() => setLoading(false));
    }
  }, []);
  return (
    <div>
      <Header bg={bg} />
      <AllMovies movies={asia} loading={loading} from={"asia"} />
    </div>
  );
}

export default Asia;

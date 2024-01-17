import React from "react";
import Header from "../component/Header";
import { useContext, useEffect, useState } from "react";
import MovieContext from "../context/MovieContext";
import AllMovies from "../component/AllMovies";
import bg from "../public/kdrama.jpeg";

function Kdrama() {
  const { kdrama, setKdrama, url } = useContext(MovieContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!kdrama.length) {
      setLoading(true);
      fetch(`${url}/kdrama`)
        .then((res) => res.json())
        .then((data) => setKdrama(data))
        .finally(() => setLoading(false));
    }
  }, []);
  return (
    <div>
      <Header bg={bg} />
      <AllMovies
        movies={kdrama}
        loading={loading}
        from={"kdrama"}
        text={"All  K-Drama Movies"}
      />
    </div>
  );
}

export default Kdrama;

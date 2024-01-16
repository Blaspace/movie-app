import React from "react";
import Header from "../component/Header";
import { useContext, useEffect, useState } from "react";
import MovieContext from "../context/MovieContext";
import AllMovies from "../component/AllMovies";
import bg from "../public/hero.jpeg";

function Movies() {
  const { movie, setMovie, url } = useContext(MovieContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!movie.length) {
      setLoading(true);
      fetch(`${url}/movie`)
        .then((res) => res.json())
        .then((data) => setMovie(data))
        .then(() => setLoading(false));
    }
  }, []);
  return (
    <div>
      <Header bg={bg} />
      <AllMovies movies={movie} loading={loading} from={"movie"} />
    </div>
  );
}

export default Movies;

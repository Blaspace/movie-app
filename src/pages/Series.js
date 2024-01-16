import React from "react";
import Header from "../component/Header";
import { useContext, useEffect, useState } from "react";
import MovieContext from "../context/MovieContext";
import AllMovies from "../component/AllMovies";
import bg from "../public/series.jpeg";

function Series() {
  const { series, setSeries, url } = useContext(MovieContext);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (!series.length) {
      setLoading(true);
      fetch(`${url}/series`)
        .then((res) => res.json())
        .then((data) => setSeries(data))
        .finally(() => setLoading(false));
    }
  }, []);
  return (
    <div>
      <Header bg={bg} />
      <AllMovies movies={series} loading={loading} from={"series"} />
    </div>
  );
}

export default Series;

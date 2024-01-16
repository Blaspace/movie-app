import React, { useContext, useEffect, useState } from "react";
import Header from "../component/Header";
import AllMovies from "../component/AllMovies";
import MovieContext from "../context/MovieContext";
import bg from "../public/hero.jpeg";

function Home() {
  const { home, setHome, url } = useContext(MovieContext);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (!home.length) {
      setLoading(true);
      fetch(`${url}/home`)
        .then((res) => res.json())
        .then((data) => setHome(data))
        .finally(() => setLoading(false));
    }
  }, []);
  return (
    <div>
      <Header bg={bg} />
      <AllMovies movies={home} loading={loading} from={"home"} />
    </div>
  );
}

export default Home;

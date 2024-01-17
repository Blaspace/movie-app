import React from "react";
import Header from "../component/Header";
import { useContext, useEffect, useState } from "react";
import MovieContext from "../context/MovieContext";
import AllMovies from "../component/AllMovies";
import bg from "../public/asia.jpeg";

function Chinese() {
  const { chinese, setChinese, url } = useContext(MovieContext);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (!chinese.length) {
      setLoading(true);
      fetch(`${url}/chinese`)
        .then((res) => res.json())
        .then((data) => setChinese(data))
        .finally(() => setLoading(false));
    }
  }, []);
  return (
    <div>
      <Header bg={bg} />
      <AllMovies movies={chinese} loading={loading} from={"chinese"} text={"All  Chinese Movies"}/>
    </div>
  );
}

export default Chinese;

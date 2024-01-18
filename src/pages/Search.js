import React, { useContext, useEffect, useState } from "react";
import MovieContext from "../context/MovieContext";
import Nav from "../component/Nav";
import { FiLoader } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function Search() {
  const { url, result, setResult } = useContext(MovieContext);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSearch = () => {
    setLoading(true);
    const i = search.replace(/ /g, "+");
    fetch(`${url}/search`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: i }),
    })
      .then((res) => res.json())
      .then((data) => setResult(data))
      .finally(() => setLoading(false));
  };
  return (
    <div>
      <Nav setSearch={setSearch} search={search} handleSearch={handleSearch} />
      <br />
      <br />
      <br />
      <div className="movies">
        <div className="movies-con">
          <br />
          {loading ? (
            <span className="loading">
              <FiLoader className="load" />
            </span>
          ) : (
            <section>
              {result.map((value, i) => {
                return (
                  <article
                    key={i}
                    onClick={() =>
                      navigate(`../../single/search/${value?.title}`)
                    }
                  >
                    <span>
                      <img src={value?.img} alt="movie image" loading="lazy" />
                    </span>
                    <p>{value?.title}</p>
                    <br />
                  </article>
                );
              })}
            </section>
          )}
          <br />
        </div>
        <br />
      </div>
    </div>
  );
}

export default Search;

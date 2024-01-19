import React, { useContext, useEffect, useState } from "react";
import MovieContext from "../context/MovieContext";
import Nav from "../component/Nav";
import { FiLoader } from "react-icons/fi";
import { useNavigate, useParams } from "react-router-dom";

function Search() {
  const { url, result, setResult } = useContext(MovieContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    setLoading(true);
    const i = params.id.replace(/ /g, "+");
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
  }, [params]);

  return (
    <div>
      <Nav />
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

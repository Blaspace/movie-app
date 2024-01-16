import React from "react";
import { FiLoader } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function AllMovies({ movies, loading, from }) {
  const navigate = useNavigate();
  return (
    <div className="movies">
      <div className="movies-con">
        <div id="start">
          <h3>All movies from around the globe</h3>
        </div>
        <br />
        {loading ? (
          <span className="loading">
            <FiLoader className="load" />
          </span>
        ) : (
          <section>
            {movies.map((value, i) => {
              return (
                <article
                  key={i}
                  onClick={() =>
                    navigate(`../../single/${from}/${value?.title}`)
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
  );
}

export default AllMovies;

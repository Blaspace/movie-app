import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieContext from "../context/MovieContext";
import Header from "../component/Header";
import seriesimg from "../public/series.jpeg";
import asiaimg from "../public/asia.jpeg";
import kdramaimg from "../public/kdrama.jpeg";
import heroimg from "../public/hero.jpeg";
import { FiLoader } from "react-icons/fi";

function SingleMovie() {
  const [foundMovie, setFoundMovie] = useState([]);
  const [singleMovie, setSingleMovie] = useState(null);
  const [link, setLink] = useState([]);
  const [loading, setLoading] = useState(false);
  const [bg, setBg] = useState();
  const { home, asia, chinese, kdrama, movie, series, url } =
    useContext(MovieContext);
  const params = useParams();

  useEffect(() => {
    switch (params.class) {
      case "asia":
        setBg(asiaimg);
        setFoundMovie(
          asia.filter((v) => {
            return v.title.trim() === params.id;
          })
        );
        break;
      case "chinese":
        setBg(asiaimg);
        setFoundMovie(chinese.filter((v) => v.title === params.id));
        break;
      case "home":
        setBg(heroimg);
        setFoundMovie(home.filter((v) => v.title === params.id));
        break;
      case "kdrama":
        setBg(kdramaimg);
        setFoundMovie(kdrama.filter((v) => v.title === params.id));
        break;
      case "movie":
        setBg(heroimg);
        setFoundMovie(
          movie.filter((v) => {
            console.log(v.title);
            console.log(params.id);
            return v.title.trim() === params.id;
          })
        );
        break;
      case "series":
        setBg(seriesimg);
        setFoundMovie(series.filter((v) => v.title === params.id));
        break;
    }
  }, []);
  useEffect(() => {
    if (foundMovie.length) {
      setLoading(true);
      console.log(foundMovie[0]);
      fetch(`${url}/single`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: foundMovie[0]?.url }),
      })
        .then((res) => res.json())
        .then((data) => {
          const i = data.links?.filter(
            (value) => value.link && value?.link?.length > 40
          );
          setLink(i);
          console.log(i);
          setSingleMovie(data);
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  }, [foundMovie]);

  const handleDownload = (e) => {
    if (e) {
      window.open(e);
    } else {
      alert("Movie not available");
    }
  };

  return (
    <div>
      <Header bg={bg} text={params.id} />
      <div className="single-movie">
        {loading ? (
          <span className="loading">
            <br />
            <br />
            <FiLoader className="load" />
            <br />
            <br />
            <br />
          </span>
        ) : (
          <div className="single-con">
            <div className="synopsis">
              <span>
                <img src={foundMovie[0]?.img} alt="movie" />
              </span>
              <div>
                <h2>Synopsis</h2>
                <br />
                <p>{singleMovie?.synopsis.slice(0, 500) + "..."}</p>
                <br />
                <biv className="download-btn">
                  {link?.length <= 1 ? (
                    <section>
                      {" "}
                      <button onClick={() => handleDownload(link[0]?.link)}>
                        Download
                      </button>
                    </section>
                  ) : (
                    <>
                      {link?.map((value) => {
                        return (
                          <div>
                            <p>{value?.text}</p>
                            <button onClick={() => handleDownload(value?.link)}>
                              Download EPS
                            </button>
                          </div>
                        );
                      })}
                    </>
                  )}
                </biv>
              </div>
            </div>
          </div>
        )}
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}

export default SingleMovie;

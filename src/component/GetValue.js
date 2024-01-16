import React, { useState, useContext, useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import MovieContext from "../context/MovieContext";
import { FiLoader } from "react-icons/fi";

function GetValue() {
  const [loading, setLoading] = useState(false);
  const {
    home,
    setHome,
    asia,
    setAsia,
    chinese,
    setChinese,
    kdrama,
    setKdrama,
    movie,
    setMovie,
    series,
    setSeries,
    url,
  } = useContext(MovieContext);
  const params = useParams();

  const handleGetKdrama = () => {
    if (!kdrama.length) {
      setLoading(true);
      fetch(`${url}/kdrama`)
        .then((res) => res.json())
        .then((data) => setKdrama(data))
        .finally(() => setLoading(false));
    }
  };
  const handleGetHome = () => {
    if (!home.length) {
      setLoading(true);
      fetch(`${url}/home`)
        .then((res) => res.json())
        .then((data) => setHome(data))
        .finally(() => setLoading(false));
    }
  };

  const handleGetAsia = () => {
    if (!asia.length) {
      setLoading(true);
      fetch(`${url}/asia`)
        .then((res) => res.json())
        .then((data) => setAsia(data))
        .finally(() => setLoading(false));
    }
  };
  const handleGetChinese = () => {
    if (!chinese.length) {
      setLoading(true);
      fetch(`${url}/chinese`)
        .then((res) => res.json())
        .then((data) => setChinese(data))
        .finally(() => setLoading(false));
    }
  };
  const handleGetMovie = () => {
    if (!movie.length) {
      setLoading(true);
      fetch(`${url}/movie`)
        .then((res) => res.json())
        .then((data) => setMovie(data))
        .finally(() => setLoading(false));
    }
  };
  const handleGetSeries = () => {
    if (!series.length) {
      setLoading(true);
      fetch(`${url}/series`)
        .then((res) => res.json())
        .then((data) => setSeries(data))
        .finally(() => setLoading(true));
    }
  };
  useEffect(() => {
    switch (params.class) {
      case "kdrama":
        handleGetKdrama();
        break;
      case "home":
        handleGetHome();
        break;
      case "asia":
        handleGetAsia();
        break;
      case "chinese":
        handleGetChinese();
        break;
      case "movie":
        handleGetMovie();
        break;
      case "series":
        handleGetSeries();
        break;
    }
  }, []);
  return (
    <>
      {loading ? (
        <div className="full-loading">
          <h1>
            <FiLoader className="load" />
          </h1>
        </div>
      ) : (
        <Outlet />
      )}
    </>
  );
}

export default GetValue;

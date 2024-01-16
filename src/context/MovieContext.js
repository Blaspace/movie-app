import { createContext, useState } from "react";

const MovieContext = createContext();

export const ContextProvider = ({ children }) => {
  const [home, setHome] = useState([]);
  const [asia, setAsia] = useState([]);
  const [chinese, setChinese] = useState([]);
  const [kdrama, setKdrama] = useState([]);
  const [movie, setMovie] = useState([]);
  const [series, setSeries] = useState([]);

  const url = "http://localhost:5000";
  return (
    <MovieContext.Provider
      value={{
        home,
        setHome,
        url,
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
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContext;

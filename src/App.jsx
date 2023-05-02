import React, { useEffect, useState } from "react";
import Movie from "./component/Movie";
import Filter from "./component/Filter";
import { AnimatePresence, motion } from "framer-motion";

const App = () => {
  const [movie, setMovie] = useState([]);
  const [filtermovie, setfilterMOvie] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  const fetchData = async () => {
    const api = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=f9ad8d857e41d2548a45abedc93ea222&language=en-US&page=1`
    );
    const { results } = await api.json();
    setMovie(results);
    setfilterMOvie(results);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="container mx-auto my-3 md:my-5 p-2 md:p-5">
        <Filter
          filtermovie={filtermovie}
          setfilterMOvie={setfilterMOvie}
          activeGenre={activeGenre}
          movie={movie}
          setActiveGenre={setActiveGenre}
          setMovie={setMovie}
        />
        <motion.div
          layout transition={{duration:1}}
          className=" grid grid-cols-2 md:grid-cols-4 justify-between items-center gap-2 md:gap-5 mt-3 md:mt-5"
        >
          <AnimatePresence>
            {filtermovie?.map((pd) => (
              <Movie key={pd.id} {...pd} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </>
  );
};

export default App;

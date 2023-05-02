import React, { useEffect } from "react";

const Filter = ({
  filtermovie,
  setfilterMOvie,
  activeGenre,
  setActiveGenre,
  setMovie,
  movie,
}) => {
  const all = () => {
    setActiveGenre(0);
    setfilterMOvie(movie)
  };

  const action = () => {
    setActiveGenre(28);
  };

  const comedy = () => {
    setActiveGenre(35);
  };

  useEffect(() => {
      if( activeGenre === 0){
          
          return setfilterMOvie(movie);
      }
    const filt = movie.filter((mv) => mv.genre_ids.includes(activeGenre));
    setfilterMOvie(filt);
    console.log(activeGenre);
  }, [activeGenre]);

  return (
    <div className=" flex gap-3 md:gap-5">
      <button
        onClick={all}
        className=" text-sm md:text-base bg-blue-700 hover:bg-blue-800 duration-150 shadow px-3 py-1 md:px-5 md:py-2 text-white rounded"
      >
        All
      </button>
      <button
        onClick={action}
        className=" text-sm md:text-base bg-blue-700 hover:bg-blue-800 duration-150 shadow px-3 py-1 md:px-5 md:py-2 text-white rounded"
      >
        Action
      </button>
      <button
        onClick={comedy}
        className=" text-sm md:text-base bg-blue-700 hover:bg-blue-800 duration-150 shadow px-3 py-1 md:px-5 md:py-2 text-white rounded"
      >
        Comedy
      </button>
    </div>
  );
};

export default Filter;

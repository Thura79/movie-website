import { motion } from "framer-motion";
import React from "react";

const Movie = ({ title, backdrop_path }) => {
  return (
    <motion.div layout initial={{opacity:1, scale:1}} exit={{opacity:1, scale:0}} transition={{duration:1}} className=" border rounded group cursor-pointer shadow ">
      <div className="border rounded overflow-hidden  ">
        <img
          src={"https://image.tmdb.org/t/p/w400" + backdrop_path}
          className=" group-hover:scale-110 duration-300 object-cover "
        />
      </div>
      <p className=" truncate text-sm text-center md:text-base p-3">{title}</p>
    </motion.div>
  );
};

export default Movie;

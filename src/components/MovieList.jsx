import React from "react";
import { useSelector } from "react-redux";
import AddMovie from "./AddMovie";

import MovieCard from "./MovieCard";

const MovieList = () => {
  const movies = useSelector((state) => state.movies);
  //console.log(movies);
  return (
    <div className="movieList">
      {movies.map((movie, index) => (
        <MovieCard key={Math.random()} id={index} movie={movie} />
      ))}
      <AddMovie />
    </div>
  );
};

export default MovieList;

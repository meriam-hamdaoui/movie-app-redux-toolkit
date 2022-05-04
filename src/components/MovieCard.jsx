import React from "react";
import { useDispatch } from "react-redux";
import Rating from "./Rating";
import { deleteMovie } from "../redux/movieReducer";

const MovieCard = ({
  movie: { id, title, year, posterURL, description, trailerURL, rating },
}) => {
  const dispatch = useDispatch();

  return (
    <div className="movieCard">
      <div className="cardHeader">
        <h3 className="title">
          {title}
          <br />
          &nbsp; &nbsp; &nbsp;<span>released</span>
          {year}
        </h3>
        <button
          onClick={() => dispatch(deleteMovie({ id: id }))}
          className="btnX"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
      <div className="poster">
        <img src={posterURL} alt={title} />
        <div className="description">
          <h3>Overview:</h3>
          <h5>{description}</h5>
        </div>
      </div>

      <div className="cardBottom">
        <a href={trailerURL} target="_blank" rel="noopener noreferrer">
          WATCH TRAILER ►
        </a>
        <Rating movieRate={rating} />
      </div>
    </div>
  );
};

export default MovieCard;

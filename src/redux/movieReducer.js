import { createSlice } from "@reduxjs/toolkit";
import movies from "../movies";

const initialState = {
  movies: movies,
  color: "gray",
};
//console.log(initialState);

const movieReducer = createSlice({
  name: "movie",
  initialState,
  reducers: {
    addMovie: (state, action) => {
      return {
        ...state,
        movies: [...state.movies, action.payload],
      };
    },
    deleteMovie: (state, action) => {
      return {
        ...state,
        movies: state.movies.filter((movie) => {
          return movie.id !== action.payload.id;
        }),
      };
    },
    searchMovie: (state, action) => {
      return {
        ...state,
        movies: state.movies.filter((movie) =>
          movie.title.toLowerCase().includes(action.payload.title.toLowerCase())
        ),
        color: action.payload.color,
      };
    },
    searchRating: (state, action) => {
      return {
        ...state,
        movies: state.movies.filter((movie) => {
          //console.log(movie.rating);
          return movie.rating === action.payload.rating;
        }),
      };
    },
  },
});

export const { addMovie, deleteMovie, searchMovie, searchRating } =
  movieReducer.actions;

export const reducer = movieReducer.reducer;

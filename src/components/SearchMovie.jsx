import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchMovie } from "../redux/movieReducer";
import Rating from "./Rating";

function SearchMovie() {
  const [searchInput, setSearchInput] = useState("");

  const dispatch = useDispatch();

  const handleSearch = (e) => {
    const newValue = e.target.value;
    setSearchInput(newValue);
    dispatch(searchMovie({ title: newValue }));
  };

  return (
    <div className="searchMovie">
      <div className="search-container">
        <div className="search-title">
          <div className="divTitle">
            <span className="searchTxt">Title Filtering</span>
          </div>
          <div className="box">
            <form name="search">
              <input
                className="input"
                type="text"
                name="text"
                value={searchInput}
                onChange={(e) => handleSearch(e)}
              />
            </form>
            <i className="fas fa-search"></i>
          </div>
        </div>
        <div className="search-rating">
          <span className="searchTxt">Rate Filtering</span>
          <Rating dispatch={dispatch} />
        </div>
      </div>
    </div>
  );
}

export default SearchMovie;

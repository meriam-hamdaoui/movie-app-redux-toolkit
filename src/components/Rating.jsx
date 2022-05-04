import React from "react";

import { searchRating } from "../redux/movieReducer";

const Rating = ({ movieRate, dispatch }) => {
  //const [clicked, setClicked] = useState(false);

  const stars = (star) => {
    var starsTab = [];

    for (let i = 1; i < 6; i++) {
      if ((i = star)) {
        starsTab.push(
          <span
            onClick={() =>
              dispatch(searchRating({ rating: i, color: "yellow" }))
            }
            style={{ fontSize: "100%", color: "yellow" }}
          >
            <i className="fa-solid fa-star"></i>
          </span>
        );
      } else {
        starsTab.push(
          <span
            onClick={() =>
              dispatch(searchRating({ rating: i, color: "yellow" }))
            }
            style={{ fontSize: "100%", color: "gray" }}
          >
            <i className="fa-solid fa-star"></i>
          </span>
        );
      }
    }

    return starsTab;
  };
  return <div>{stars(movieRate)}</div>;
};

export default Rating;

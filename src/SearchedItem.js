import React from "react";
import "./searched.css";
import { Link } from "react-router-dom";

const SearchedItem = ({ searchedItem, setSelectedId, setSelectedRecipe }) => {
  return (
    <Link
      className="link"
      to="/details"
      onClick={() => {
        setSelectedRecipe(searchedItem);
        setSelectedId(searchedItem.id);
        localStorage.setItem("id", searchedItem.id);
        localStorage.setItem("recipe", JSON.stringify(searchedItem));
      }}
    >
      <div className="searchedItem">
        <img
          src={searchedItem.image}
          alt="it was supposed to be"
          width="250px"
        />
        <div className="discription">
          <h3>{searchedItem.title}</h3>
          <p
            className="summary"
            dangerouslySetInnerHTML={{
              __html: `${
                searchedItem.summary && searchedItem.summary.slice(0, 150)
              }. . . .`,
            }}
          ></p>
        </div>
      </div>
    </Link>
  );
};

export default SearchedItem;

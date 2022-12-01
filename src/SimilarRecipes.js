import React from "react";
import "./searched.css";
import SearchedItem from "./SearchedItem";

const SimilarRecipes = ({
  similarRecipes,
  setSelectedId,
  setSelectedRecipe,
}) => {
  return (
    <div className="searchedList">
      <h1>similar recipes </h1>
      {similarRecipes.map((item) => (
        <SearchedItem
          key={item.id}
          searchedItem={item}
          setSelectedRecipe={setSelectedRecipe}
          setSelectedId={setSelectedId}
        />
      ))}
    </div>
  );
};

export default SimilarRecipes;

import React from "react";
import "./searched.css";
import SearchedItem from "./SearchedItem";

const specificRecipes = ({
  specificRecipes,
  setSelectedId,
  setSelectedRecipe,
}) => {
  return (
    <div className="searchedList">
      <h1>Recipes that matched your requirements</h1>
      {specificRecipes.map((item) => (
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

export default specificRecipes;

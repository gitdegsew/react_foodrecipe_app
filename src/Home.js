import React from "react";
import Recipe from "./Recipe";
import "./home.css";

const Home = ({
  randomRecipes,
  setSelectedId,
  setSelectedRecipe,
  isLoading,
}) => {
  return (
    <div className="main">
      {isLoading && <p>Its Loading....</p>}
      {!isLoading &&
        randomRecipes.map((item, index) => (
          <Recipe
            key={item.id}
            randomRecipe={item}
            setSelectedId={setSelectedId}
            setSelectedRecipe={setSelectedRecipe}
          />
        ))}
    </div>
  );
};

export default Home;

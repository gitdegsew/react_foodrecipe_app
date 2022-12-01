import React from "react";
import "./recipe.css";
import { Link } from "react-router-dom";

const Recipe = ({ randomRecipe, setSelectedId, setSelectedRecipe }) => {
  return (
    <Link
      className="link"
      to="/details"
      onClick={() => {
        setSelectedRecipe(randomRecipe);
        setSelectedId(randomRecipe.id);
        localStorage.setItem("id", randomRecipe.id);
        localStorage.setItem("recipe", JSON.stringify(randomRecipe));
      }}
    >
      <div className="recipe">
        <h3>{randomRecipe.title} </h3>
        <img src={randomRecipe.image} width="300px" alt="random recipe" />
        <p
          className="summary"
          dangerouslySetInnerHTML={{
            __html: `${randomRecipe.summary.slice(0, 150)}. . . .`,
          }}
        ></p>
      </div>
    </Link>
  );
};

export default Recipe;

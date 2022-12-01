import React from "react";
import "./recipeDetails.css";

const RecipeDetails = ({ recipe, handleSimilar, handleNutrient }) => {
  return (
    <div className="detail">
      <nav className="navbar">
        <h1>{recipe.title}</h1>
        <div className="buttons">
          {" "}
          <button onClick={handleSimilar}>Similar</button>
          <button onClick={handleNutrient}>Nutrient</button>
        </div>
      </nav>
      <div className="container">
        <img src={recipe.image}></img>
        <p
          dangerouslySetInnerHTML={{
            __html: recipe.summary.replace("/a>", "/span>"),
          }}
        ></p>
      </div>
      <div className="ingredients">
        <h2>Ingridients</h2>
        <ul>
          {recipe.extendedIngredients ? (
            recipe.extendedIngredients.map((item, index) => (
              <li key={index}>{item.original}</li>
            ))
          ) : (
            <p>there is no ingredients</p>
          )}
        </ul>
      </div>
      <div className="instractions">
        <h2>Instractions</h2>
        <ul>
          {recipe.analyzedInstructions[0] ? (
            recipe.analyzedInstructions[0].steps.map((item, index) => (
              <div key={item.number}>
                <h4>{`step ${item.number}`}</h4>
                <li key={index}>{item.step}</li>
              </div>
            ))
          ) : (
            <p>there is no Instaraction</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default RecipeDetails;

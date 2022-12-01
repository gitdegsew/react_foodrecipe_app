import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./Header";
import Home from "./Home";
import RecipeDetails from "./RecipeDetails";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import SearchResults from "./SearchResults";
import { useNavigate } from "react-router-dom";
import SimilarRecipes from "./SimilarRecipes";
import SpecificRecipes from "./SpecificRecipes";
import Nutrients from "./Nutirents";
import Forms from "./Forms";

function App() {
  const [randomRecipes, setRandomRecipes] = useState(
    JSON.parse(localStorage.getItem("random")) || []
  );
  const [searchedItems, setSearchedItems] = useState(
    JSON.parse(localStorage.getItem("searched")) || []
  );
  const [searchValue, setSearchValue] = useState("");
  const [selectedId, setSelectedId] = useState(
    localStorage.getItem("id") || ""
  );
  const [selectedRecipe, setSelectedRecipe] = useState(
    JSON.parse(localStorage.getItem("recipe")) || null
  );
  const [isLoading, setIsLoading] = useState(false);
  const [similarRecipes, setSimilarRecipes] = useState(
    JSON.parse(localStorage.getItem("similar")) || []
  );
  const [nutrients, setNutrients] = useState(
    JSON.parse(localStorage.getItem("nutrients")) || []
  );
  const [formObject, setFormObject] = useState({
    ingredients: "",
    equipments: "",
    type: "",
    diet: "",
    intolerance: "",
  });
  const [specificRecipes, setSpecificRecipes] = useState(
    JSON.parse(localStorage.getItem("specific")) || []
  );
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const myAxios = axios.create({
    baseURL: "https://api.spoonacular.com",
  });

  const handleForm = (e) => {
    navigate("/form");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    navigate("/specific");
    try {
      const response =
        await myAxios.get(`/recipes/complexSearch?includeIngredients=${formObject.ingredients}&
      equipment=${formObject.equipments}&type=${formObject.type}&diet=${formObject.diet}&intolerances=${formObject.intolerance}&apiKey=fb0e8000d9e443bca37a5bbfffe72387`);
      const ids = response.data.results.map((item) => item.id);

      const value = ids.join(",");
      const responseTwo = await myAxios.get(
        `/recipes/informationBulk?ids=${value}&apiKey=fb0e8000d9e443bca37a5bbfffe72387`
      );
      setSpecificRecipes(responseTwo.data);
      localStorage.setItem("specific", JSON.stringify(responseTwo.data));
      setIsLoading(false);
    } catch (error) {}
  };

  const handleNutrient = async () => {
    setIsLoading(true);
    navigate("/nutrients");
    try {
      const response = await myAxios.get(
        `/recipes/${selectedId}/nutritionWidget.json?apiKey=fb0e8000d9e443bca37a5bbfffe72387`
      );
      setNutrients([...response.data.bad, ...response.data.good]);
      localStorage.setItem(
        "nutrients",
        JSON.stringify([...response.data.bad, ...response.data.good])
      );

      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSimilar = async () => {
    setIsLoading(true);
    navigate("/similar");
    try {
      const response = await myAxios.get(
        `/recipes/${selectedId}/similar?apiKey=fb0e8000d9e443bca37a5bbfffe72387`
      );
      const ids = response.data.map((item) => item.id);

      const value = ids.join(",");
      const responseTwo = await myAxios.get(
        `/recipes/informationBulk?ids=${value}&apiKey=fb0e8000d9e443bca37a5bbfffe72387`
      );
      setSimilarRecipes(responseTwo.data);
      localStorage.setItem("similar", JSON.stringify(responseTwo.data));
      setIsLoading(false);
    } catch (error) {}
  };

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const response = await myAxios.get(
        `/recipes/autocomplete?number=5&query=${searchValue}&apiKey=fb0e8000d9e443bca37a5bbfffe72387`
      );
      const ids = response.data.map((item) => item.id);
      const value = ids.join(",");
      const responseTwo = await myAxios.get(
        `/recipes/informationBulk?ids=${value}&apiKey=fb0e8000d9e443bca37a5bbfffe72387`
      );
      // const responseTwo =await myAxios.get('/recipes')

      setSearchedItems(responseTwo.data);
      localStorage.setItem("searched", JSON.stringify(responseTwo.data));
      navigate("/search");
    } catch (error) {
      console.log(error.response.message);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await myAxios.get(
          "/recipes/random?number=12&apiKey=fb0e8000d9e443bca37a5bbfffe72387"
        );
        // const response =await myAxios.get('/recipes')

        setRandomRecipes(response.data.recipes);
        localStorage.setItem("random", JSON.stringify(response.data.recipes));
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <Header
        handleSearch={handleSearch}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        handleForm={handleForm}
      />
      <Routes>
        <Route
          path="/search"
          element={
            <SearchResults
              isLoading={isLoading}
              searchedItems={searchedItems}
              setSelectedId={setSelectedId}
              setSelectedRecipe={selectedRecipe}
            />
          }
        ></Route>
        <Route
          path="/nutrients"
          element={<Nutrients nutrients={nutrients} recipe={selectedRecipe} />}
        ></Route>
        <Route
          path="/similar"
          element={
            <SimilarRecipes
              similarRecipes={similarRecipes}
              setSelectedId={setSelectedId}
            />
          }
        ></Route>
        <Route
          path="/specific"
          element={
            <SpecificRecipes
              specificRecipes={specificRecipes}
              setSelectedId={setSelectedId}
            />
          }
        ></Route>
        <Route
          path="/"
          element={
            <Home
              setSelectedRecipe={setSelectedRecipe}
              randomRecipes={randomRecipes}
              isLoading={isLoading}
              setSelectedId={setSelectedId}
            />
          }
        ></Route>
        <Route
          path="/form"
          element={
            <Forms
              formObject={formObject}
              setFormObject={setFormObject}
              handleSubmit={handleSubmit}
            />
          }
        ></Route>
        <Route
          path="/details"
          element={
            <RecipeDetails
              recipe={selectedRecipe}
              handleSimilar={handleSimilar}
              handleNutrient={handleNutrient}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;

// [
//   ...similarRecipes,
//   ...randomRecipes,
//   ...searchedItems,
// ].find((item) => item.id == selectedId)

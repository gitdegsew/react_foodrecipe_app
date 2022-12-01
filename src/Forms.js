import React from "react";
import "./forms.css";

const Forms = ({ handleSubmit, formObject, setFormObject, isLoading }) => {
  return (
    <div className="form-container">
      {isLoading && <p>Its Loading....</p>}
      {!isLoading && (
        <>
          <p className="hint">
            {" "}
            You maight need recipes based what ingredient or equipments you
            have, or based on your deit. By filling the following form you can
            search for recipes, that fulfill those conditions
          </p>
          <form className="forms" onSubmit={handleSubmit}>
            <label htmlFor="ingredients">
              <p>
                Enter the ingredients you have separeting with comma(optional)
              </p>
            </label>
            <input
              type="text"
              id="ingredients"
              placeholder="ingredients Name"
              value={formObject.ingredients}
              onChange={(e) =>
                setFormObject({ ...formObject, ingredients: e.target.value })
              }
            />
            <label htmlFor="equipments">
              <p>And/or equipments you have separting with comma(optional)</p>
            </label>
            <input
              type="text"
              id="equipments"
              placeholder="equipments Name"
              value={formObject.equipments}
              onChange={(e) =>
                setFormObject({ ...formObject, equipments: e.target.value })
              }
            />
            <label htmlFor="types">
              <p>Select type of the recipe</p>
            </label>
            <select
              id="types"
              value={formObject.type}
              onChange={(e) =>
                setFormObject({ ...formObject, type: e.target.value })
              }
            >
              <option value="Pescetarian">main course</option>
              <option value="side dish">side dish</option>
              <option value=" dessert">dessert</option>
              <option value="appetizer">appetizer</option>
              <option value="breakfast">breakfast</option>
              <option value="snack">snack</option>
              <option value="soup">soup</option>
              <option value="main course">salad</option>
            </select>
            <label htmlFor="diet">
              <p>Select your diet</p>
            </label>
            <select
              id="diet"
              value={formObject.diet}
              onChange={(e) =>
                setFormObject({ ...formObject, diet: e.target.value })
              }
            >
              <option value="Vegetarian">Vegetarian</option>
              <option value="Vegan">Vegan</option>
              <option value=" Pescetarian">Pescetarian</option>
              <option value="Lacto-Vegetarian">Lacto-Vegetarian</option>
              <option value="Gluten Free">Gluten Free</option>
              <option value="Ketogenic">Ketogenic</option>
              <option value="Ovo-Vegetarian">Ovo-Vegetarian</option>
              <option value="Pescetarian">Pescetarian</option>
              <option value="">None</option>
            </select>
            <label htmlFor="intolerance">
              <p>Something you are intolerant to:</p>
            </label>
            <select
              id="intolerance"
              value={formObject.intolerance}
              onChange={(e) =>
                setFormObject({ ...formObject, intolerance: e.target.value })
              }
            >
              <option value="Dairy">Dairy</option>
              <option value="Peanut">Peanut</option>
              <option value=" Soy">Soy</option>
              <option value="Egg">Egg</option>
              <option value="Gluten">Gluten</option>
              <option value="Grain">Grain</option>
              <option value="Wheat">Wheat</option>
              <option value="Sesame">Sesame</option>
              <option value="">None</option>
            </select>
            <br />
            <button type="submit">Find recipe</button>
          </form>
        </>
      )}
    </div>
  );
};

export default Forms;

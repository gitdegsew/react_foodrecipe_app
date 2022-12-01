import React from 'react'

const PersonalDetail = ({ingredientValue,setIngredientValue ,equipmentValue}) => {
  return (
    <div className= "personal">
        <form>
            <label htmslFor="ingredient">Ingredients</label>
            <input id="ingredient" value={ingredientValue} onChange={(e)=>setIngredientValue(e.target.value)} input />
            <label>Equipments</label>
            <input id="equipments" value={equipmentValue}  />
        </form>
    </div>
  )
}

export default PersonalDetail
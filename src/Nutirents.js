import React from 'react';
import Nutrient from './Nutrient';
import './nutrients.css';

const Nutrients = ({nutrients,recipe}) => {
 
  return (
    <div className="nutrients">
        <h2>
    {`Nutrients for ${recipe.title}`}
</h2>
<table className="nt-table">
  <thead>
  <tr>
    <th>nutrient</th>
    <th>amount</th>
    <th>parsentage of daily needs</th>
   </tr>
  </thead>
   
    <tbody>
    {nutrients.map((nutrient,index)=> <Nutrient key={index} nutrient={nutrient} />)
   }
    </tbody>
    
    
  
</table>
    </div>
    
  )
}

export default Nutrients
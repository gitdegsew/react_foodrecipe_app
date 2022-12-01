import React from 'react'

const Nutrient = ({nutrient}) => {
  return (
    
       
        <tr>
            <td>
                {nutrient.title}
            </td>
            <td>
                {nutrient.amount}
            </td>
            <td>
                {nutrient.percentOfDailyNeeds}
            </td>
           
        </tr>
        
    
  )
}

export default Nutrient
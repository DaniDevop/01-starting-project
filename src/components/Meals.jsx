import React, { useState ,useEffect} from 'react'
import MealItem from './Mealtem';
export default function Meals() {
  const [loadedMeals,setLoadMeals]=useState([]);

  useEffect( ()=>{
    async function fecthMeals() {
      const response = await fetch('http://localhost:3000/meals');
      
      if(!response.ok){
  
      }
      const data = await response.json();
      setLoadMeals(data);
    }
    fecthMeals()
  },[])
  
  return (
    <div
    ><ul id='meals'>
    {loadedMeals.map(meal => (
        <MealItem key={meal.id} meals={meal}/>
    ))}
</ul>
</div>
  )
}




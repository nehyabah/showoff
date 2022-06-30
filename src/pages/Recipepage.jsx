import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';

function Recipepage() {
    const { id } = useParams();
    const [mealRecipe, setMealRecipe] = useState([])
/**
 * We're using the useEffect hook to fetch the data from the API and then set the state of the
 * mealRecipe to the data we get back from the API
 */
  useEffect(() => {
    async function getRecipeList() {
      const data = await fetch(
        `https:/www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
        const meals = await data.json();

        console.log(meals.meals[0])
        
        if (meals) {
            setMealRecipe(meals.meals[0])
        } else {
            setMealRecipe([])
        }
    }

    getRecipeList();
  }, [id]);
    
    const {strMeal, strArea, strCategory, strMealThumb} = mealRecipe
    //console.log(idMeal, strArea, strCategory)

/* It's returning the data from the API. */
  return (
    <div className="single-recipe">
      <h4 className="title">{strMeal}</h4>
      <img src={strMealThumb} alt={strMeal} />
      <h4>{strArea}</h4>
      <h4>{strCategory}</h4>
      {/*<h2>{strInstructions}</h2>*/}
    </div>
  );
}

export default Recipepage
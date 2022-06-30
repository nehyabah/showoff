import React, { useState, useEffect } from "react";
import { Card } from "./RecipeCategory.styles";
import { Link, useParams } from "react-router-dom";

function RecipeList() {
  const [recipeList, setRecipeList] = useState([]);
  const { categoryName } = useParams();


  useEffect(() => {
    async function getRecipeList() {
      const data = await fetch(
        `https:/www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
      );
      const meals = await data.json();
      setRecipeList(meals.meals);
      console.log(meals.meals);
    };
    
    getRecipeList();
  }, [categoryName])


  return (
    <section className='recipe'>
    <h4 className='title'>{categoryName}</h4>
    {
      recipeList.map((recipe) => {
        const {strMeal, strMealThumb, idMeal} = recipe
        return (
          <Link key={idMeal} to={`/category/${categoryName}/${idMeal}`}>
          <Card>
          <p>{strMeal}</p>
              <img src={strMealThumb} alt={strMeal}/>
        </Card>
        </Link>)
      })
    }
  </section>);
}

export default RecipeList;

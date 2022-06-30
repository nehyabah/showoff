import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Wrapper, Card } from "./RecipeCategory.styles.js";
import "@splidejs/react-splide/css";

function RecipeCategory() {
  const [recipeCategoryList, setRecipeCategoryList] = useState([]);

  /**
   * The above function is an async function that fetches the data from the API and sets the data to the
   * state.
   */
  const getRecipeList = async () => {
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/categories.php`
    );
    const data = await api.json();

    console.log(data);

    if (data) {
      setRecipeCategoryList(data.categories);
    } else {
      setRecipeCategoryList([]);
    }
  };

  useEffect(() => {
    getRecipeList();
  }, []);

/* Returning the JSX code. */
  return (
    <div>
      <section className="recipes">
        <h3>Recipe Categories</h3>
        {recipeCategoryList.map((categories) => {
          return (
            <Link
              key={categories.idCategory}
              to={`/category/${categories.strCategory}`}
            >
              <Card>
                <div className="recipe-info"><p>{categories.strCategory}</p></div>
                
                <img
                  src={categories.strCategoryThumb}
                  alt={categories.strCategory}
                />
              </Card>
            </Link>
          );
        })}
      </section>
    </div>
  );
}

export default RecipeCategory;

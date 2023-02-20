import React from "react";
import { useLoaderData } from "react-router-dom";

const ShowOneMeal = () => {
  const meal = useLoaderData();
  const { strInstructions, strMeal, strMealThumb, strCategory, strArea } =
    meal.meals[0];
  console.log(meal);
  const vowel = ["a", "e", "i", "o", "u"];
  return (
    <div>
      <h1>Meal details</h1>
      <div>
        <img src={strMealThumb} alt="" />
        <h2>{strMeal}</h2>
        <p>Category: {strCategory}</p>
        <p>
          This is {vowel.includes(strArea[0].toLowerCase()) ? "an" : "a"}{" "}
          {strArea} food.
        </p>
        <h3>Recipe:</h3>
        <p>{strInstructions}</p>
      </div>
    </div>
  );
};

export default ShowOneMeal;

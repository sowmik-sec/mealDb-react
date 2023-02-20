import React from "react";
import { useLoaderData } from "react-router-dom";
import Meal from "../Meal/Meal";

const ShowMeal = () => {
  const meal = useLoaderData();
  return (
    <div>
      <h1>Here goes all the selected meals</h1>
      <div className="meals">
        {meal.meals.map((meal) => (
          <Meal meal={meal} key={meal.idMeal} />
        ))}
      </div>
    </div>
  );
};

export default ShowMeal;

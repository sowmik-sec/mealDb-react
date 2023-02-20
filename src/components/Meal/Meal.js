import React from "react";
import "./Meal.css";

const Meal = ({ meal }) => {
  const { strMeal, strMealThumb } = meal;
  console.log("inside meal", meal);
  return (
    <div className="meal">
      <img src={strMealThumb} alt="" />
      <h3>{strMeal}</h3>
    </div>
  );
};

export default Meal;

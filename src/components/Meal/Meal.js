import React from "react";
import { Link } from "react-router-dom";
import "./Meal.css";

const Meal = ({ meal }) => {
  const { strMeal, strMealThumb, idMeal } = meal;
  console.log("inside meal", meal);
  return (
    <div className="meal">
      <img src={strMealThumb} alt="" />
      <Link to={`/meal/${idMeal}`}>
        <h3>{strMeal}</h3>
      </Link>
    </div>
  );
};

export default Meal;

import React from "react";
import { Link } from "react-router-dom";
import "./Meal.css";

const Meal = ({ meal }) => {
  const { strMeal, strMealThumb, idMeal } = meal;
  return (
    <div className="meal">
      <img src={strMealThumb} alt="" />
      <Link to={`/meals/meal/${idMeal}`}>
        <h3>{strMeal}</h3>
      </Link>
    </div>
  );
};

export default Meal;

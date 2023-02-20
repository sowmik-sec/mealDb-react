import React from "react";

const Meal = ({ meal }) => {
  const { strMeal, strMealThumb } = meal;
  console.log("inside meal", meal);
  return (
    <div>
      <img src={strMealThumb} alt="" />
      <h3>{strMeal}</h3>
    </div>
  );
};

export default Meal;

import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Meals = () => {
  const [meal, setMeal] = useState("");
  const meals = useLoaderData();
  const handleChange = (e) => {
    setMeal(e.target.value);
  };
  console.log(meals);
  console.log(meal);
  return (
    <div>
      <h1>Choose your favorite food:</h1>
      <input
        type="text"
        name="meals"
        id="meals"
        onInputCapture={handleChange}
      />
      <Link to={`meals/${meal}`} />
    </div>
  );
};

export default Meals;

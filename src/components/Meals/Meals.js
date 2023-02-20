import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Meal from "../Meal/Meal";
import "./meals.css";

const Meals = () => {
  const [meal, setMeal] = useState("");
  const meals = useLoaderData();
  const handleChange = (e) => {
    setMeal(e.target.value);
  };
  return (
    <div>
      <h1>Choose your favorite food:</h1>
      <input
        type="text"
        name="meals"
        id="meals"
        onInputCapture={handleChange}
      />
      <button>
        <Link to={`/meals/${meal}`}>Show Meal</Link>
      </button>
      <div className="meals">
        {meals.meals.map((meal) => (
          <Meal meal={meal} key={meal.idMeal} />
        ))}
      </div>
    </div>
  );
};

export default Meals;

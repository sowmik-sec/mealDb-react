import React from "react";
import { useLoaderData } from "react-router-dom";

const ShowMeal = () => {
  const meal = useLoaderData();
  console.log(meal);
  return (
    <div>
      <h1>Here goes all the selected meals</h1>
    </div>
  );
};

export default ShowMeal;

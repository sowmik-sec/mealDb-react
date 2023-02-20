import { createBrowserRouter } from "react-router-dom";
import Meals from "../components/Meals/Meals";
import Home from "../components/Home/Home";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import ShowMeal from "../components/ShowMeal/ShowMeal";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      {
        path: "/meals",
        element: <Meals />,
        loader: async () => {
          return fetch(
            `https://www.themealdb.com/api/json/v1/1/search.php?s=beef`
          );
        },
      },
      {
        path: "/meals/:meal",
        element: <ShowMeal />,
        loader: async ({ params }) => {
          return fetch(
            `https://www.themealdb.com/api/json/v1/1/search.php?s=${params.meal}`
          );
        },
      },
    ],
  },
]);

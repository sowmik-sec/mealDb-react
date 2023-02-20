import { createBrowserRouter } from "react-router-dom";
import Meals from "../components/Meals/Meals";
import Home from "../components/Home/Home";
import Header from "../components/Header/Header";

export const router = createBrowserRouter([
  { path: "/", element: <Header /> },
  { path: "/home", element: <Home /> },
  {
    path: "/",
    loader: async () => {
      return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=beef`);
    },
    element: <Meals />,
  },
]);

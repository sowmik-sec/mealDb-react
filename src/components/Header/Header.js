import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Link to="/home">Home</Link>
      <Link to="/meals">Meals</Link>
      <Outlet />
    </div>
  );
};

export default Header;

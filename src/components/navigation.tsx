import React from "react";
import { Link } from "react-router-dom";

interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = () => {
  return (
    <nav className="flex justify-between items-center h-[50px] px-5 shadow-md bg-gray-500 text-white">
      <h3 className="font-bold">Github Search</h3>

      <span>
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
      </span>
    </nav>
  );
};

export default Navigation;

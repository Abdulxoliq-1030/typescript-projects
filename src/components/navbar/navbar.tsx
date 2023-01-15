import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../routes/config";
import cls from "./style.module.scss";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className={cls.wrapper}>
      <Link className={cls.title} to="/">
        JSONPLACEHOLDER
      </Link>
      <div className={cls.links}>
        {routes.map((route) => (
          <Link key={route.path} to={route.path}>
            {route.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;

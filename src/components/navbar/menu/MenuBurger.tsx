import React, { useEffect } from "react";
import "./MenuBurger.css";
import { Link } from "react-router-dom";
import { getUserRole } from "../../../helpers/functions";

interface MenuItem {
  href: string;
  value: string;
}

interface MenuProps {
  header: string;
  menuActive: boolean;
  setMenuActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuBurger: React.FC<MenuProps> = ({
  header,

  menuActive,
  setMenuActive,
}) => {
  const userRole = getUserRole();
  return (
    <div
      className={menuActive ? "menu2 active" : "menu"}
      onClick={() => setMenuActive(false)}
    >
      <div className="blur" />
      <div className="menu__content" onClick={(e) => e.stopPropagation()}>
        <div className="menu__header">{header}</div>
        {userRole == "not logged in" ? (
          <ul>
            <Link to={"/"} className="p-6 text-xl animate-bounce text-white">
              HomePage
            </Link>
          </ul>
        ) : (
          <ul>
            <Link to={"/"} className="p-6 text-xl animate-bounce text-white">
              HomePage
            </Link>
            <Link
              to={"/shop"}
              className="text-xl animate-bounce p-6 text-white"
            >
              Shop
            </Link>

            <Link
              to={"/sale"}
              className="text-xl animate-bounce p-6 text-white"
            >
              Sale
            </Link>
          </ul>
        )}
      </div>
    </div>
  );
};

export default MenuBurger;

import React, { useEffect } from "react";
import "./MenuBurger.css";
import { Link } from "react-router-dom";

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
  return (
    <div
      className={menuActive ? "menu2 active" : "menu"}
      onClick={() => setMenuActive(false)}
    >
      <div className="blur" />
      <div className="menu__content" onClick={(e) => e.stopPropagation()}>
        <div className="menu__header">{header}</div>
        <ul>
          <Link to={"/"} className="p-6 text-xl animate-bounce text-white">HomePage</Link>
          <Link to={"/shop"} className="text-xl animate-bounce p-6 text-white">Shop</Link>
          <Link to={"/blog"} className="text-xl animate-bounce p-6 text-white">Blog</Link>
          <Link to={"/sale"} className="text-xl animate-bounce p-6 text-white">Sale</Link>
          <Link to={"/contactUs"} className="text-xl animate-bounce p-6 text-white">Contact Us</Link>
          <Link to={"/quiz"} className="text-xl animate-bounce p-6 text-white">Quiz</Link>
        </ul>
      </div>
    </div>
  );
};

export default MenuBurger;

import React, { useEffect } from "react";
import "./MenuBurger.css";
//@ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";

interface MenuItem {
  href: string;
  value: string;
}

interface MenuProps {
  header: string;
  items: MenuItem[];
  menuActive: boolean;
  setMenuActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuBurger: React.FC<MenuProps> = ({
  header,
  items,
  menuActive,
  setMenuActive,
}) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className={menuActive ? "menu2 active" : "menu"}
      onClick={() => setMenuActive(false)}
    >  
      <div className="blur" />
      <div className="menu__content" onClick={(e) => e.stopPropagation()}>
        <div className="menu__header">{header}</div>
        <ul data-aos="fade-right">
          {items.map((item, index) => (
            <li key={index} className="p-6" data-aos="fade-right">
              <a className="text-xl" href={item.href} data-aos="fade-right">
                {item.value}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MenuBurger;

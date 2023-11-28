import React, { useEffect, useState } from "react";
import "./Navbar.css";
import MenuBurger from "./menu/MenuBurger";
import logo from "./logo.png";
import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  MenuList,
  Tooltip,
  Typography,
} from "@mui/material";
import { MenuBook } from "@mui/icons-material";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth/AuthContextProvider";

const pages = [{ title: "Products", link: "/", id: 1 }];

const adminPages = [{ title: "Add", link: "/add", id: 2 }];

const settings = [
  {
    title: "Register",
    link: "/register",
    id: 1,
  },
  {
    title: "Login",
    link: "/login",
    id: 2,
  },
  {
    title: "Logout",
    link: "/logout",
    id: 3,
  },
];

function Navbar() {
  const navigate = useNavigate();
  const { currentUser, checkAuth, handleLogout, setCurrentUser } = useAuth();

  // function getPages() {
  //   if (isAdmin()) {
  //     return pages.concat(adminPages);
  //   } else {
  //     return pages;
  //   }
  // }

  useEffect(() => {
    // При рождении компонента получаем значение из локального хранилища
    const storedUser = localStorage.getItem('email');
    if (storedUser) {
      setCurrentUser(storedUser);
    }
  }, []);

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [menuActive, setMenuActive] = useState(false);

  const items = [
    { value: "HomePage", href: "/" },
    { value: "Shop", href: "/shop" },
    { value: "Blog", href: "/blog" },
    { value: "Sale", href: "/sale" },
    { value: "Contact us", href: "/contactUs" },
    { value: "Quiz", href: "/quiz" },
  ];

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  return (
    <div>
      <nav>
        <div
          className="burger-btn"
          onClick={() => {
            setMenuActive(!menuActive);
          }}
        >
          <span />
        </div>
        <div className="nav_logo">
          <img className="nav_logo_img" src={logo} alt="logo" />
        </div>
        <div className="nav_auth">
          <Link to={"/register"}>Register</Link>
          <Link to={"/login"}>Login</Link>
          <Link  to={"/"} onClick={() => handleLogout()}>
            Logout
          </Link>
          <Link>
            {currentUser ? currentUser: "No user"}
          </Link>
        </div>
      </nav>
      <MenuBurger
        menuActive={menuActive}
        setMenuActive={setMenuActive}
        header={"Adidas"}
        items={items}
      />
    </div>
  );
}

export default Navbar;

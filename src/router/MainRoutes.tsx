import React from "react";
import { Route, Routes } from "react-router-dom";
import ShopPage from "../pages/shop/ShopPage";
import RegisterPage from "../pages/auth/RegisterPage";
import LoginPage from "../pages/auth/LoginPage";
import AddShopPage from "../pages/shop/AddShopPage";
import HomePage from "../pages/HomePage";
import { checkUserLogin } from "../helpers/functions";
import EditShopPage from "../pages/shop/EditShopPage";
import DetailsShopPage from "../pages/shop/DetailsShopPage";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/shop/addshop" element={checkUserLogin() ? <AddShopPage /> : null}  />
        <Route path="/shop/editshop/:id" element={checkUserLogin() ? <EditShopPage /> : null}  />
        <Route path="/shop/details/:id" element={checkUserLogin() ? <DetailsShopPage /> : null}  />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />}/>
      </Routes>
    </div>
  );
};

export default MainRoutes;

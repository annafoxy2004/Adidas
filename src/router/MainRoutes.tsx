import React from "react";
import { Route, Routes } from "react-router-dom";
import ShopPage from "../pages/shop/ShopPage";
import RegisterPage from "../pages/auth/RegisterPage";
import LoginPage from "../pages/auth/LoginPage";
import EditShopPage from "../pages/shop/EditShopPage";
import AddShopPage from "../pages/shop/AddShopPage";
import HomePage from "../pages/HomePage";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/shop/add" element={<AddShopPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />}/>
        {/* <Route
          path="/add"
          element={
            isAdmin() ? <AddShopPage /> : null
          }
        ></Route>
        <Route path="/edit/:id" element={isAdmin() ? <EditShopPage /> : null} /> */}
      </Routes>
    </div>
  );
};

export default MainRoutes;

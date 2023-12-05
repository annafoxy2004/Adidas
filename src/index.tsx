import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Toastify from "./components/alerts/Toastify";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./context/auth/AuthContextProvider";
import ProductsContextProvider from "./context/products/ProductsContextProvider";
import CartContextProvider from "./context/cart/CartContextProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <BrowserRouter>
      <CartContextProvider>
        <ProductsContextProvider>
          <AuthContextProvider>
            <App />
            <Toastify />
          </AuthContextProvider>
        </ProductsContextProvider>
      </CartContextProvider>
    </BrowserRouter>
  </>
);

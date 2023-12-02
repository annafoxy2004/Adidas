import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Toastify from "./components/alerts/Toastify";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./context/auth/AuthContextProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <BrowserRouter>
      <AuthContextProvider>
        <App />
        <Toastify />
      </AuthContextProvider>
    </BrowserRouter>
  </>
);

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Toastify from "./components/alerts/Toastify";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <App />
    <Toastify />
  </>
);

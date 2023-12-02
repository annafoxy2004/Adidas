import React from "react";
import Navbar from "./components/navbar/Navbar.jsx";
import MainRoutes from "./router/MainRoutes.js";
import Footer from "./components/footer/Footer.jsx";
import "./App.css";
// import Loader from './components/loader/Loader';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="main">
        <MainRoutes />
      </div>
      <Footer />
    </div>
  );
};

export default App;

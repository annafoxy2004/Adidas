import React from "react";
import Navbar from "../src//components/navbar/Navbar.jsx";
import MainRoutes from "./router/MainRoutes";
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

import React from "react";
import Navbar from "./components/navbar/Navbar.jsx";
import MainRoutes from "./router/MainRoutes";
import Footer from "./components/footer/Footer.jsx";
import "./App.css";
import { ToastContainer } from "react-toastify";
// import Loader from './components/loader/Loader';

const App = () => {
  return (
    <div className="app">
      <ToastContainer/>
      <Navbar />
      <div className="mainn">
        <MainRoutes />
      </div>
      <Footer />
    </div>
  );
};

export default App;

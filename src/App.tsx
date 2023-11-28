import React from "react";
import Navbar from "../src//components/navbar/Navbar.jsx";
import MainRoutes from "./router/MainRoutes";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./context/auth/AuthContextProvider";
// import Loader from './components/loader/Loader';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <AuthContextProvider>
          <Navbar />
          <MainRoutes />
          {/* <Loader/> */}
        </AuthContextProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;

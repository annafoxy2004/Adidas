import React from "react";
import { Link } from "react-router-dom";

const Prefooter = () => {
  return (
    <div className=" bg-[#8cf02e]">
      <div className="flex items-start h-96 pt-6">
        <div className="flex flex-row justify-center w-screen">
          <p className="text-5xl font-medium">JOIN OUR ADICLUB & GET 15% OFF</p>
          <button className="border border-red-950">
            <Link to={"/register"}>sign up for free</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Prefooter;

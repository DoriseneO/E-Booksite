import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Home = () => {
  return (
    <div className="w-[100%] h-[100%] flex-column justify-center align-center">
      <Header />
      <Outlet />
      <br />
    </div>
  );
};
export default Home;

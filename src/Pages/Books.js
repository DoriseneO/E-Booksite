import React from "react";
import Product from "../Product/Product.js";
// import "./TopNav.css";
import { useContext } from "react";
import { ProductContext } from "../ProdContext/ProductContext.js";
import SideNav from "./SideNav/SideNav.js";
import TopNav from "./topNav/TopNav.js";
const Books = () => {
  const { productsToRender } = useContext(ProductContext);

  return (
    <div className="all-nav">
      <TopNav />
      <div className="w-[90%] flex justify-center">
        <SideNav />
        <Product productsToRender={productsToRender} />
      </div>
    </div>
  );
};
export default Books;

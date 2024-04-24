import React from "react";
import Product from "../Product/Product.js";
import Search from "./Search.js";
import { useContext } from "react";
import { ProductContext } from "../ProdContext/ProductContext.js";
const Books = () => {
  const { handleSearch, search, productsToRender } = useContext(ProductContext);

  return (
    <div className=" bg-green w-[100%] h-[100%] flex-row justify-center align-center bg-green">
      <Search handleSearch={handleSearch} search={search} />
      <Product productsToRender={productsToRender} />
      {/* <Product productsToRender={productsToRender} /> */}
    </div>
  );
};
export default Books;

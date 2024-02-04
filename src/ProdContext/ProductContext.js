import React, { createContext } from "react";
import All_Product from "../Component/BookData";
import { useState } from "react";
export const ProductContext = createContext();

function ProductContextProvider(props) {
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  const filtered = All_Product.filter((product) =>
    product.title.toLowerCase().includes(search)
  );
  const value = { handleSearch, search, filtered, All_Product };

  return (
    <ProductContext.Provider value={value}>
      {props.children}
    </ProductContext.Provider>
  );
}
export default ProductContextProvider;

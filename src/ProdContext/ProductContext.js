import React, { createContext } from "react";
// import All_Product from "../Component/BookData";
import { useState } from "react";
import { useEffect } from "react";

export const ProductContext = createContext();

function ProductContextProvider(props) {
  const [search, setSearch] = useState("");
  const [product, setProduct] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const getData = await fetch("https://dummyjson.com/products");
      const setData = await getData.json();
      // console.log(setData);
      setProduct(setData.products);
    };
    fetchData();
  }, []);
  console.log(product);

  const addToCart = (items) => {
    setCartItems((prev) => [...prev, items]);
    console.log(cartItems);
    console.log("added to cart");
  };
  const handleSearch = (e) => {
    setSearch(e.target.value);

    console.log(search);
  };

  const filtered = product.filter((prod) =>
    prod.title.toLowerCase().includes(search)
  );

  const productsToRender = filtered.length > 0 ? filtered : product;

  const value = {
    handleSearch,
    search,
    filtered,
    product,
    cartItems,
    addToCart,
    productsToRender,
  };

  return (
    <ProductContext.Provider value={value}>
      {props.children}
    </ProductContext.Provider>
  );
}
export default ProductContextProvider;
// useEffect(() => {
//   const fetchData = async () => {
//     const getData = await fetch("https://dummyjson.com/products");
//     const setData = await getData.json();
//     console.log(setData);
//     setProduct(setData);
//   };
//   fetchData();
// }, []);

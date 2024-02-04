import React from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../ProdContext/ProductContext";
import "./ProductDetails.css";

function ProductDetail() {
  const { ProductId } = useParams();
  const { All_Product } = useContext(ProductContext);
  const items = All_Product.find((prod) => prod.title === ProductId);
  console.log(ProductId);

  return (
    <div className="product_displayed_con">
      <div className="product_displayed">
        {" "}
        <br />
        <div className="displayed_image">
          <img
            src={items.image}
            width="450px"
            height="300px"
            alt={items.iamge}
          />
        </div>
        <br />
        <div className="displayed_content">
          <div className="w-[90%] justify-center align-center ">
            <h1 className="title">{items.title} </h1>
            <h2 className="author">{items.author}</h2>
            <p>{items.details}</p>
            <br />
            <div className="flex justify-between align-center">
              <button
                // onClick={() => {
                //   addTocart(items.title);
                // }}
                className="add_to_cart"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductDetail;

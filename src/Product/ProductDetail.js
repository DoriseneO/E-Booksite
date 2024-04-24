import React from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../ProdContext/ProductContext";
import "./ProductDetails.css";

function ProductDetail() {
  const { ProductId } = useParams();
  const { product, addToCart } = useContext(ProductContext);
  const items = product.find((prod) => prod.title === ProductId);
  console.log(ProductId);

  return (
    <div className="product_displayed_con">
      <div className="product_displayed">
        {" "}
        <br />
        <div className="displayed_image">
          <img
            src={items.thumbnail}
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
            <p>{items.description}</p>
            <p>
              this details below was included by me to achieve what i wan to s e
              e a n d work,the API doesnt contain as much description as i would
              like to consume"Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum."
            </p>
            <br />
            <div className="flex justify-between align-center">
              <div>
                {" "}
                <p>£{items.price}</p>
              </div>{" "}
              <button
                onClick={() => {
                  addToCart(items.title);
                }}
                className="add-to-cart-btn justify-center"
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

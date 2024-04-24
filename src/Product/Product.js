import { Link } from "react-router-dom";
import "./Product.css";
import Rating from "../Component/Rating";

const Product = ({ productsToRender }) => {
  // const productsToRender = filtered.length > 0 ? filtered : All_Product;
  return (
    <div className="all_product_con ">
      <div className="product_grid_2">
        {productsToRender?.map((book, id) => {
          return (
            <div key={id} className="product_grid">
              <div className="img_section">
                {" "}
                <Link
                  to={`/productdetail/${book.title}`}
                  className="product_img"
                >
                  <img
                    src={book.thumbnail}
                    width="100%"
                    height="100%"
                    alt="product"
                  />
                </Link>
              </div>
              <div className="product_section">
                <div className="poduct_caption">
                  <span className="flex justify-between">
                    {" "}
                    <h1>{book.title}</h1>
                    <h1>£{book.price}</h1>
                  </span>
                  <p>{book.brand}</p>
                </div>
                <div className="flex justify-between w-full">
                  <div className="flex">
                    <Rating />
                    <Rating />
                    <Rating />
                  </div>
                  <div>{book.rating}</div>
                </div>
                <div className="add-to-cart-btn justify-center">
                  <button>add to cart</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Product;

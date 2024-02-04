import { Link } from "react-router-dom";
import "./Product.css";
import Rating from "../Component/Rating";

const Product = ({ All_Product, filtered }) => {
  const productsToRender = filtered.length > 0 ? filtered : All_Product;
  return (
    <div className="all_product_con ">
      <div className="all_product">
        <div className="product_grid_2">
          {productsToRender.map((book, id) => {
            return (
              <div key={id}>
                {" "}
                <div className="product_grid">
                  <div className="img_section">
                    {" "}
                    <Link
                      to={`/productdetail/${book.title}`}
                      className="product_img"
                    >
                      <img
                        src={book.image}
                        width="300px"
                        height="300px"
                        alt="product"
                      />
                    </Link>
                  </div>
                  <div className="product_section">
                    <br />
                    <span>
                      {" "}
                      <p>{book.title}</p>
                      <p>{book.price}</p>
                    </span>
                    <span className="flex">
                      <Rating />
                      <Rating />
                      <Rating />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Product;

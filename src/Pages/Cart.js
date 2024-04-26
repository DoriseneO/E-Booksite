import { useContext } from "react";
import ProductContext from "../ProdContext/ProductContext";

const Cart = () => {
  const { cartItems, product } = useContext(ProductContext);
  console.log(cartItems);
  return (
    <div className="text-white">
      every item added to cart will display here and checkout
      <div className="cartitems">
        <div className="cartitems-format-main">
          <p>Products</p>
          <p>Title</p>
          <p>Price</p>
          <p>Remove</p>
        </div>
        <hr />
        {product.map((book) => {
          if (cartItems[book.title] !== 0) {
            return (
              <div>
                <div className="cartitems-format cartitems-format-main">
                  <img
                    src={book.image}
                    alt=""
                    className="carticon-product-icon"
                  />
                  <p>{book.title}</p>
                  <p>${book.price}</p>
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};
export default Cart;

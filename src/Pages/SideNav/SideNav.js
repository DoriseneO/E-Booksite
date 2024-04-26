import Brand from "../Brand/Brand";
import Category from "../category/Category";
import "./SideNav.css";
import { useContext } from "react";
import { ProductContext } from "../../ProdContext/ProductContext";

const SideNav = () => {
  const { productsToRender } = useContext(ProductContext);
  return (
    <div className="side-nav bg-gray-100 p-8">
      <Brand productsToRender={productsToRender} />
      <Category productsToRender={productsToRender} />
    </div>
  );
};
export default SideNav;

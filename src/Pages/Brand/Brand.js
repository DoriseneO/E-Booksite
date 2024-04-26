import "./Brand.css";
import { useState } from "react";
const Brand = ({ productsToRender }) => {
  const [brandList, setBrandList] = useState("");
  const handleAllItems = () => {
    setBrandList(!brandList);
  };
  return (
    <div className="product-brand w-full">
      <h1>Brands</h1>
      {brandList
        ? productsToRender.map((brand) => {
            return (
              <div key={brand} className="flex gap-2">
                <input type="checkbox" /> <p>{brand.brand}</p>
              </div>
            );
          })
        : productsToRender.slice(0, 7).map((brand) => {
            return (
              <div key={brand} className="flex gap-2">
                <input type="checkbox" /> <p>{brand.brand}</p>
              </div>
            );
          })}
      {productsToRender.length > 5 && (
        <button onClick={handleAllItems}>
          {brandList ? "see less" : "see more"}
        </button>
      )}
    </div>
  );
};
export default Brand;

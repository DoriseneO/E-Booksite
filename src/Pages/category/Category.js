import { useState } from "react";
const Category = ({ productsToRender }) => {
  const [brandList, setBrandList] = useState("");
  const handleAllItems = () => {
    setBrandList(!brandList);
  };
  const removeDuplicateCategory = [
    ...new Set(productsToRender.map((prod) => prod.category)),
  ];
  const uniqueCategory = brandList
    ? removeDuplicateCategory
    : removeDuplicateCategory.slice(0, 5);
  return (
    <div className="product-brand pt-6 w-full">
      <div>
        {" "}
        <h1>Category</h1>
        {uniqueCategory.map((eachCategory) => {
          return (
            <div key={eachCategory} className="flex gap-2">
              <input type="checkbox" /> <p>{eachCategory}</p>
            </div>
          );
        })}
        {uniqueCategory.length > 6 && (
          <button onClick={handleAllItems}>
            {brandList ? "see less" : "see more"}fghjkclickme
          </button>
        )}
      </div>
      <div className="pt-6">
        {" "}
        <h1>Price</h1>
        <div className="flex gap-2">
          <input type="checkbox" /> <p>£50 to £100</p>
        </div>{" "}
        <div className="flex gap-2">
          <input type="checkbox" /> <p>£100 to £200</p>
        </div>{" "}
        <div className="flex gap-2">
          <input type="checkbox" /> <p>£200 to £500</p>
        </div>{" "}
        <div className="flex gap-2">
          <input type="checkbox" /> <p>£200 to £500</p>
        </div>
      </div>
      <div className="pt-6">
        {" "}
        <h1>Special Features</h1>
        <div className="flex gap-2">
          <input type="checkbox" /> <p>£50 to £100</p>
        </div>{" "}
        <div className="flex gap-2">
          <input type="checkbox" /> <p>£100 to £200</p>
        </div>{" "}
        <div className="flex gap-2">
          <input type="checkbox" /> <p>£200 to £500</p>
        </div>{" "}
        <div className="flex gap-2">
          <input type="checkbox" /> <p>£200 to £500</p>
        </div>
      </div>
      <div className="pt-6">
        <h1>Capacity</h1>
        <div className="flex gap-2">
          <input type="checkbox" /> <p>16 to 31 GB</p>
        </div>
        <div className="flex gap-2">
          <input type="checkbox" /> <p>32 to 63 GB</p>
        </div>
        <div className="flex gap-2">
          <input type="checkbox" /> <p>64 to 127 GB</p>
        </div>
        <div className="flex gap-2">
          <input type="checkbox" /> <p>128 to 255 GB</p>
        </div>
        <div className="flex gap-2">
          <input type="checkbox" /> <p>256 to 511 GB</p>
        </div>
      </div>
    </div>
  );
};
export default Category;

import "./TopNav.css";
const TopNav = () => {
  return (
    <div className="w-full top-navigation-btn">
      {" "}
      <div className="Top-nav">
        <div>
          <select>
            <option>Condition</option>
            <option>New</option>
            <option>Used</option>
            <option>Audi</option>
          </select>
        </div>{" "}
        <div>
          <select>
            <option>Condition</option>
            <option>New</option>
            <option>Used</option>
            <option>Audi</option>
          </select>
        </div>
        <div>
          <select>
            <option>Location</option>
            <option>United kingdom</option>
            <option>Nigeria</option>
            <option>Germany</option>
          </select>
        </div>{" "}
        <div>
          <select>
            <option>Delivery</option>
            <option>Saab</option>
            <option>Mercedes</option>
            <option>Audi</option>
          </select>
        </div>
        <div>
          <select>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>
      </div>
    </div>
  );
};
export default TopNav;

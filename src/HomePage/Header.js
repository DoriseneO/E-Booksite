import { Link } from "react-router-dom";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { useContext } from "react";
import { ProductContext } from "../ProdContext/ProductContext.js";
import "./Header.css";
import Search from "../Pages/Search";

const Header = () => {
  const { handleSearch, search } = useContext(ProductContext);
  const [menu, setMenu] = useState(true);

  const handle = () => {
    setMenu(!menu);
  };

  return (
    <div className="header">
      <div className="header-con">
        <div className="header__left">
          <h1>IAMDORIS</h1>
        </div>
        <Search handleSearch={handleSearch} search={search} />
        <div className="nav-con">
          <div className="nav">
            <div onClick={handle} className="md:hidden ">
              {menu ? <GiHamburgerMenu /> : <GrClose />}
            </div>
            <ul className={menu ? " " : "nav-active"}>
              {/* <li>
                <Link
                  to="movies"
                  className="link"
                  onClick={() => setMenu(!menu)}
                >
                  MOVIES
                </Link>{" "}
              </li> */}
              <li>
                <Link to="/" onClick={() => setMenu(!menu)}>
                  ALL_PRODUCT
                </Link>{" "}
              </li>{" "}
              <li>
                {" "}
                <Link to="/art" onClick={() => setMenu(!menu)}>
                  ART
                </Link>{" "}
              </li>
              <li>
                {" "}
                <Link to="/cart" onClick={() => setMenu(!menu)}>
                  CART
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;

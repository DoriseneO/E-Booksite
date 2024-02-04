import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
// import risidiologo from "../Assests/risidiologo.png";
import "./Header.css";

const Header = () => {
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
                {" "}
                <Link to="/" onClick={() => setMenu(!menu)}>
                  BOOKS
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

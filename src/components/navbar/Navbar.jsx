import { React, Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import "./navigation.styles.scss";
import logo from "../../assets/eagles-logo-pin-badge.png";

const Navbar = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img src={logo} alt="" style={{ width: "120px" }} />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/checkout">
            SHOP
          </Link>
          <Link className="nav-link" to="/auth">
            SIGN IN
          </Link>
          {/* <Link className="nav-link" to="/checkout">
            SHOP
          </Link> */}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;

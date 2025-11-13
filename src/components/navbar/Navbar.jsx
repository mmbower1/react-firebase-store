import { React, Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import "./navigation.styles.scss";
import logo from "../../assets/eagles-logo-pin-badge.png";

// components
import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";

// contexts
import { CartContext } from "../../contexts/Cart";
// import { UserContext } from "../../contexts/User";

const Navbar = () => {
  // const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img src={logo} alt="" style={{ width: "120px" }} />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/auth">
            SIGN IN
          </Link>
          {/* <Link className="nav-link" to="/checkout">
            SHOP
          </Link> */}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;

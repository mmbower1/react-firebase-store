import React, { useContext } from "react";
import "./CartIcon.styles.scss";
import ShoppingIcon from "../../assets/shopping-bag.svg";

// contexts
import { CartContext } from "../../contexts/Cart";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const toggleCart = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cart-icon-container" onClick={toggleCart}>
      <img src={ShoppingIcon} alt="Shopping Icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;

import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
// import "./CartDropdown.styles.scss";

// components
import Button from "../button/Button";
import CartItem from "../cart-item/CartItem";
import { CartContext } from "../../contexts/Cart";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutPage = () => {
    navigate("/checkout");
  };

  return (
    <div>
      <div className="cart-dropdown-container">
        <div className="cart-items">
          {cartItems.map((item) => (
            <CartItem key={item.id} cartItem={item} />
          ))}
          <Button onClick={goToCheckoutPage}>GO TO CHECKOUT</Button>
        </div>
      </div>
    </div>
  );
};

export default CartDropdown;

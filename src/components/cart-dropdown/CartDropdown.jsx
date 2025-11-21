import React, { useContext } from "react";
// import "./CartDropdown.styles.scss";
import { useNavigate } from "react-router-dom";

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
      <div
        className="cart-dropdown-container"
        style={{
          position: "absolute",
          width: "365px",
          height: "400px",
          display: "flex",
          flexDirection: "column",
          padding: "20px",
          border: "1px solid black",
          backgroundColor: "white",
          top: "160px",
          right: "25px",
          zIndex: 5,
        }}
      >
        <div
          className="cart-items"
          style={{
            height: "320px",
            display: "flex",
            flexDirection: "column",
            overflow: "scroll",
          }}
        >
          {cartItems.length ? (
            cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
          ) : (
            <span className="cart-empty">Your cart is empty</span>
          )}
          <br />
          <br />
          <Button onClick={goToCheckoutPage}>GO TO CHECKOUT</Button>
        </div>
      </div>
    </div>
  );
};

export default CartDropdown;

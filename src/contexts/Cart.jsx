import { createContext, useState, useEffect } from "react";
import { getCartKey } from "../utils/cart";

// import PRODUCTS from "../../shop-data.json";

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
});

const addCartItem = (cartItems, productToAdd) => {
  const key = getCartKey(productToAdd);
  const existingCartItem = cartItems.find(
    (cartItem) => getCartKey(cartItem) === key
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      getCartKey(cartItem) === key
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, productToRemove) => {
  const key = getCartKey(productToRemove);
  const existingCartItem = cartItems.find(
    (cartItem) => getCartKey(cartItem) === key
  );
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => getCartKey(cartItem) !== key);
  }
  return cartItems.map((cartItem) =>
    getCartKey(cartItem) === key
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems, cartItemToClear) => {
  const key = getCartKey(cartItemToClear);
  return cartItems.filter((cartItem) => getCartKey(cartItem) !== key);
};

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  };

  const clearItemFromCart = (productToRemove) => {
    setCartItems(clearCartItem(cartItems, productToRemove));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    cartItems,
    cartCount,
    cartTotal,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

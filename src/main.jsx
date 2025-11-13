import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// context
import { CartProvider } from "./contexts/Cart.jsx";
import { ProductsProvider } from "./contexts/Products";
import { UserProvider } from "./contexts/Users.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      <ProductsProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductsProvider>
    </UserProvider>
  </StrictMode>
);

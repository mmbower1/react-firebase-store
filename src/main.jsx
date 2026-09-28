import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// stripe
import { Elements } from "@stripe/react-stripe-js";
import { stripePromise } from "./stripe.jsx";

// context
import { CartProvider } from "./contexts/Cart.jsx";
import { ProductsProvider } from "./contexts/Products";
import { UserProvider } from "./contexts/Users.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      <ProductsProvider>
        <CartProvider>
          <Elements stripe={stripePromise}>
            <App />
          </Elements>
        </CartProvider>
      </ProductsProvider>
    </UserProvider>
  </StrictMode>
);

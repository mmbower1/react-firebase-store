import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// import { ErrorBoundary } from "react-error-boundary";

// context
import { CartProvider } from "./contexts/Cart.jsx";
import { ProductsProvider } from "./contexts/Products";
import { UserProvider } from "./contexts/Users.jsx";

createRoot(document.getElementById("root")).render(
  // <ErrorBoundary>
  <StrictMode>
    <UserProvider>
      <ProductsProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductsProvider>
    </UserProvider>
  </StrictMode>
  // </ErrorBoundary>
);

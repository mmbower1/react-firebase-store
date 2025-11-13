import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// containers
import Home from "./containers/Home";
import Checkout from "./containers/checkout/Checkout";
import Authentication from "./containers/auth/Auth";
import Shop from "./containers/shop/Shop";

// components
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      {/* <ProductsProvider> */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/auth" element={<Authentication />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </Router>
      {/* </ProductsProvider> */}
    </>
  );
}

export default App;

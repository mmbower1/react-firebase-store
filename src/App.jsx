import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// containers
import Home from "./containers/Home";
import Checkout from "./containers/Checkout";
import Authentication from "./containers/auth/Auth";

// components
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/auth" element={<Authentication />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

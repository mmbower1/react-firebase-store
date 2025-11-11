import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// containers
import Home from "./containers/Home";
import Checkout from "./containers/Checkout";
import SignIn from "./containers/Sign-in";

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
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

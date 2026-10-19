import React from "react";
import { Link } from "react-router-dom";
import "./hero.styles.scss";

import eaglesLogo from "../../assets/eagles-logo-pin-badge.png";

// banner between the navbar and the category grid on the home page
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <Link to="/shop" className="hero-button">
          Shop All
        </Link>
      </div>
      <img src={eaglesLogo} alt="" className="hero-logo" />
    </section>
  );
};

export default Hero;

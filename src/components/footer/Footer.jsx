"use client";

import React from "react";
import "./Footer.styles.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__brand">
            <h2 className="footer__logo">MB Tutorials</h2>
            <p className="footer__tagline">
              Building the future, one pixel at a time.
            </p>
          </div>

          <div className="footer__links">
            <div className="footer__column">
              <h4>Product</h4>
              <ul>
                <li>
                  <a href="#">Hats</a>
                </li>
                <li>
                  <a href="#">Rings</a>
                </li>
                <li>
                  <a href="#">Jerseys</a>
                </li>
                <li>
                  <a href="#">Jackets</a>
                </li>
                <li>
                  <a href="#">Accessories</a>
                </li>
              </ul>
            </div>

            <div className="footer__column">
              <h4>Company</h4>
              <ul>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                {/* <li>
                  <a href="#">Careers</a>
                </li> */}
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>

            <div className="footer__column">
              <h4>Resources</h4>
              <ul>
                <li>
                  <a href="#">Subscribe</a>
                </li>
                <li>
                  <a href="#">Help Center</a>
                </li>
                <li>
                  <a href="#"></a>
                </li>
                <li>
                  <a href="#"></a>
                </li>
              </ul>
            </div>

            <div className="footer__column">
              <h4>Legal</h4>
              <ul>
                <li>
                  <a href="#">Privacy</a>
                </li>
                <li>
                  <a href="#">Terms</a>
                </li>
                {/* <li>
                  <a href="#">Cookie Policy</a>
                </li> */}
                <li>
                  <a href="#">Licenses</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          {/* <div className="footer__social">
            <a href="#" aria-label="Twitter" className="social-icon">
              𝕏
            </a>
            <a href="#" aria-label="GitHub" className="social-icon">
              GitHub
            </a>
            <a href="#" aria-label="Discord" className="social-icon">
              Discord
            </a>
            <a href="#" aria-label="LinkedIn" className="social-icon">
              in
            </a>
          </div> */}

          <div className="footer__copyright">
            <p>&copy; 2025 MB Tutorials. All rights reserved.</p>
          </div>
        </div>

        <div className="footer__decorative">
          <div className="glow orb-1"></div>
          <div className="glow orb-2"></div>
          <div className="glow orb-3"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

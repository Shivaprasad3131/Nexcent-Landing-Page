import React from "react";
import "./Footer.css";

import logo from "../assets/nexcenIcon.png";
import instagram from "../assets/Instagram.png";
import dribbble from "../assets/Dribble.png";
import twitter from "../assets/Twitter.png";
import youtube from "../assets/Youtube.png";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="brand-logo-text">
            <img src={logo} alt="Nexcent logo" className="footer-logo" />
            <span>Nexcent</span>
          </div>
          <p className="footer-copyright">
            Copyright © 2025 Nexcent Ltd. <br />
            All rights reserved.
          </p>
          <div className="footer-social">
            <img src={instagram} alt="Instagram" />
            <img src={dribbble} alt="Dribbble" />
            <img src={twitter} alt="Twitter" />
            <img src={youtube} alt="YouTube" />
          </div>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li><a href="/">About us</a></li>
              <li><a href="/">Blog</a></li>
              <li><a href="/">Contact us</a></li>
              <li><a href="/">Pricing</a></li>
              <li><a href="/">Testimonials</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Support</h4>
            <ul>
              <li><a href="/">Help center</a></li>
              <li><a href="/">Terms of service</a></li>
              <li><a href="/">Legal</a></li>
              <li><a href="/">Privacy policy</a></li>
              <li><a href="/">Status</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-newsletter">
          <h4>Stay up to date</h4>
          <div className="newsletter-input">
            <input type="email" placeholder="Enter your email" />
            <button>→</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

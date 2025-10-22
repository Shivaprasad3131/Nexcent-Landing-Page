import React from "react";
import "./Hero.css";
import heroImage from "../assets/Hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Lessons and insights <br />
          <span>from 8 years</span>
        </h1>
        <p>
          Where to grow your business as a photographer: site or social media?
        </p>
        <button className="hero-btn">Register</button>
      </div>

      <div className="hero-image">
        <img src={heroImage} alt="Illustration" />
      </div>
    </section>
  );
};

export default Hero;

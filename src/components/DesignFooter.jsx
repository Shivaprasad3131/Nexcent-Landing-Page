import React from "react";
import Image from "../assets/pana.png";
import "./DesignFooter.css";

const DesignFooter = () => {
  return (
    <section className="design-section">
      <div className="design-container">
        <div className="design-image">
          <img src={Image} alt="Illustration" />
        </div>
        <div className="design-text">
          <h2>How to design your site footer like we did</h2>
          <p>
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
            elit erat a magna. Donec quis erat at libero ultrices mollis. In
            hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta
            nisi facilisis finibus.
          </p>
          <button className="learn-more-btn">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default DesignFooter;

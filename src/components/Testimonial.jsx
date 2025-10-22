import React from "react";
import "./Testimonial.css";

import teslaLogo from "../assets/image 9.png";
import client1 from "../assets/testlogo.png";
import client2 from "../assets/Logo2.svg";
import client3 from "../assets/Logo3.svg";
import client4 from "../assets/Logo4.svg";
import client5 from "../assets/Logo5.svg";
import client6 from "../assets/Logo6.svg";

const Testimonial = () => {
  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        <div className="testimonial-main">
        
          <div className="testimonial-image">
            <img src={teslaLogo} alt="Tesla" />
          </div>

          <div className="testimonial-content">
            <div className="testimonial-text">
              <p>
                “Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
                lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin
                eu enim metus. Vivamus sed libero ornare, tristique quam in,
                gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi
                laoreet elit at ligula molestie, nec molestie mi blandit.”
              </p>
              <h4>Tim Smith</h4>
              <p className="org">British Dragon Boat Racing Association</p>
            </div>

            <div className="testimonial-logos">
              <img src={client1} alt="Client logo" />
              <img src={client2} alt="Client logo" />
              <img src={client3} alt="Client logo" />
              <img src={client4} alt="Client logo" />
              <img src={client5} alt="Client logo" />
              <img src={client6} alt="Client logo" />
              <a href="/">Meet all customers →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

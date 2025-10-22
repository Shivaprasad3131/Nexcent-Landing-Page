import React from "react";
import logo1 from "../assets/Logo1.svg";
import logo2 from "../assets/Logo2.svg";
import logo3 from "../assets/Logo3.svg";
import logo4 from "../assets/Logo4.svg";
import logo5 from "../assets/Logo5.svg";
import logo6 from "../assets/Logo6.svg";
import logo7 from "../assets/Logo3.svg";
import "./Clients.css"; 

const Clients = () => {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

  return (
    <section className="clients-section">
      <div className="clients-header">
        <h2>Our Clients</h2>
        <p>We have been working with some Fortune 500+ clients</p>
      </div>

      <div className="clients-logos">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Client ${index + 1}`}
            className="client-logo"
          />
        ))}
      </div>
    </section>
  );
};

export default Clients;


import React from "react";
import "./Pixelgrade.css";
import pixelImg from "../assets/Frame.png"; 

const Pixelgrade = () => {
  return (
    <section className="pixelgrade-section">
      <div className="pixelgrade-container">
       
        <div className="pixelgrade-image">
          <img src={pixelImg} alt="Pixelgrade" />
        </div>

        <div className="pixelgrade-content">
          <h2>
            The unseen of spending <br /> three years at Pixelgrade
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla. 
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis 
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. 
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem.
          </p>
          <button className="learn-more-btn">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default Pixelgrade;

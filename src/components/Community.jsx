import React from "react";
import icon1 from "../assets/Icon1.png";
import icon2 from "../assets/Icon2.png";
import icon3 from "../assets/Icon3.png";
import "./Community.css";

const Community = () => {
  return (
    <section id="community" className="community-section">
      <div className="community-container">
        <h2>Manage your entire community in a single system</h2>
        <div className="community-cards">
          <div className="community-card">
            <img src={icon1} alt="Membership Organizations" />
            <h3>Membership Organizations</h3>
          </div>
          <div className="community-card">
            <img src={icon2} alt="National Associations" />
            <h3>National Associations</h3>
          </div>
          <div className="community-card">
            <img src={icon3} alt="Clubs & Groups" />
            <h3>Clubs & Groups</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;

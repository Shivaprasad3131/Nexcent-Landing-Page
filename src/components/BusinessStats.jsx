import React from "react";
import icon4 from "../assets/Icon4.png";
import icon5 from "../assets/Icon5.png";
import icon6 from "../assets/Icon6.png";
import icon7 from "../assets/Icon7.png";
import "./BusinessStats.css";

const BusinessStats = () => {
  return (
    <section className="business-section">
      <div className="business-container">
        <div className="business-text">
          <h2>
            Helping a local <span>business reinvent itself</span>
          </h2>
          <p>We reached here with our hard work and dedication</p>
        </div>

        <div className="business-stats">
          <div className="stat-box">
            <img src={icon4} alt="Members" />
            <div>
              <h3>2,245,341</h3>
              <p>Members</p>
            </div>
          </div>

          <div className="stat-box">
            <img src={icon5} alt="Clubs" />
            <div>
              <h3>46,328</h3>
              <p>Clubs</p>
            </div>
          </div>

          <div className="stat-box">
            <img src={icon6} alt="Events" />
            <div>
              <h3>828,867</h3>
              <p>Event Bookings</p>
            </div>
          </div>

          <div className="stat-box">
            <img src={icon7} alt="Payments" />
            <div>
              <h3>1,926,436</h3>
              <p>Payments</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessStats;

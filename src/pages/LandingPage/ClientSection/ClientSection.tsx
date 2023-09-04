import React, { FC } from "react";
import "./ClientSection.stylesheet.scss";
import AirBnbLogo from "../../../constants/images/logo/Airbnb.png";
import AmazonLogo from "../../../constants/images/logo/Amazon.png";
import GoogleLogo from "../../../constants/images/logo/Google.png";
import UberEatsLogo from "../../../constants/images/logo/UberEats.png";
export const ClientSection: FC = () => {
  return (
    <div className="page-content">
      <div className="hero-section-container">
        <div className="client-section-content">
          <h1>Our Client</h1>
          <p>
            Several selected clients, <br /> who already believe in our service.
          </p>
        </div>
        <div className="client-logo">
          <img src={GoogleLogo} alt="AmazonLogo" />
          <img src={AirBnbLogo} alt="AmazonLogo" />
          <img src={UberEatsLogo} alt="AmazonLogo" />
          <img src={AmazonLogo} alt="AmazonLogo" />
        </div>
      </div>
    </div>
  );
};

import React, { FC } from "react";
import AboutImg from "../../../constants/images/poster/about.png";

export const AboutSection: FC = () => {
  return (
    <div className="hero-section-container">
      <img src={AboutImg} alt="Hero-img" className="hero-section-img" />
      <div className="hero-section-content">
        <h1>A Digital Product Agency</h1>
        <p>
          Our Business Plan is a written document describing a company's core
          <br></br>
          business activities, Objectives, and how it plans to achieve its
          goals. Our<br></br> goal is to provide our client high quality Product
          <br></br>
          with modern idea accordingly their budgets and according third
          retirements.
        </p>
      </div>
    </div>
  );
};

import React, { FC } from "react";
import "./HeroSection.stylesheet.scss";
import "../../../common/styles/common.stylesheet.scss";
import HeroImg from "../../../constants/images/poster/hero-section.png";
export const HeroSection: FC = () => {
  return (
    <div className="page-content">
      <div className="hero-section-container">
        <div className="hero-section-content">
          <h1>A Digital Product Agency</h1>
          <p>
            Leading digital agency with solid design and development expertise.
            <br></br>
            We build readymade websites, mobile applications, <br></br>and
            elaborate online business services.
          </p>
          <div>
            <button className="hero-section-button">Join Now</button>
          </div>
        </div>
        <div className="hero-section-img">
          <img src={HeroImg} alt="Hero-img" />
        </div>
      </div>
    </div>
  );
};

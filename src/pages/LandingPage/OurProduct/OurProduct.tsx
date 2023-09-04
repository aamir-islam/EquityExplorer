import React, { FC } from "react";
import "./OurProduct.stylesheet.scss";
import Logo1 from "../../../constants/images/icon/box-search.png";
import Logo2 from "../../../constants/images/icon/chart-square.png";
import Logo3 from "../../../constants/images/icon/code.png";
import Logo4 from "../../../constants/images/icon/empty-wallet.png";

export const OurProduct: FC = () => {
  return (
    <div className="page-content">
      <div className="hero-section-container">
        <div className="product-section-content">
          <h1>
            How can we help <br /> your Business ?
          </h1>
          <p>
            We build readymade websites, mobile applications, <br />
            and elaborate online business services.
          </p>
        </div>
        <div className="client-logos">
          <div className="feature-card">
            <img src={Logo1} alt="box-search" />
            <h2>Business Idea Planning</h2>
            <p>We present you a proposal and discuss niffty-gritty like</p>
          </div>
          <div className="feature-card">
            <img src={Logo2} alt="chart-square" />
            <h2>Financial Planning System</h2>
            <p>Protocols apart from arrange models, pricing billing</p>
          </div>
          <div className="feature-card">
            <img src={Logo3} alt="code" />
            <h2>Development Website and App</h2>
            <p>Communication protocols apart from engagement models</p>
          </div>
          <div className="feature-card">
            <img src={Logo4} alt="empty-wallet" />
            <h2>Market Analysis Project</h2>
            <p>Protocols apart from aengage models, pricing billing</p>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import TestimonialImg from "../../../constants/images/poster/Testimonial.png";
import client1Img from "../../../constants/images/poster/client1.png";
import client2Img from "../../../constants/images/poster/client2.png";
import client3Img from "../../../constants/images/poster/client3.png";
import client4Img from "../../../constants/images/poster/client4.png";
import client5Img from "../../../constants/images/poster/client5.png";
import client6Img from "../../../constants/images/poster/client6.png";
import client7Img from "../../../constants/images/poster/client7.png";
import client8Img from "../../../constants/images/poster/client8.png";
import "./TestimonialSection.stylesheet.scss";

export const TestimonialSection = () => {
  return (
    <main className="container">
      <div className="hero-section-content">
        <h1>What our happy client say</h1>
        <p>Several selected clients, who already believe in our service.</p>
      </div>
      <div className="hero-section-container">
        <img src={TestimonialImg} alt="Testimonial" />
        <div className="hero-section-content">
          <h1>What our happy client say</h1>
          <p>Several selected clients, who already believe in our service.</p>
        </div>
        <div className="img-slider">
          <img src={client1Img} alt="client1Img" />
          <img src={client2Img} alt="client2Img" />
          <img src={client3Img} alt="client3Img" />
          <img src={client4Img} alt="client4Img" />
          <img src={client5Img} alt="client5Img" />
          <img src={client6Img} alt="client6Img" />
          <img src={client7Img} alt="client7Img" />
          <img src={client8Img} alt="client8Img" />
        </div>
      </div>
    </main>
  );
};

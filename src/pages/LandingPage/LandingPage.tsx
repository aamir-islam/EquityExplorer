import React, { FC } from "react";
import { AboutSection } from "./AboutSection";
import { ClientSection } from "./ClientSection";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { HeroSection } from "./HeroSection";
import "./LandingPage.stylesheet.scss";
import { OurProduct } from "./OurProduct";
import { TestimonialSection } from "./TestimonialSection";

export const LandingPage: FC = () => {
  return (
    <div className="page-container">
      <Header />
      <HeroSection />
      <ClientSection />
      <OurProduct />
      <AboutSection />
      <TestimonialSection />
      <Footer />
    </div>
  );
};

import React, { FC } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { HeroSection } from "./HeroSection";
import "./LandingPage.stylesheet.scss";

export const LandingPage: FC = () => {
  return (
    <div className="main-section">
      <Header />
      <HeroSection />
      <Footer />
    </div>
  );
};

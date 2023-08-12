import React, { FC } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import "./LandingPage.stylesheet.scss";

export const LandingPage: FC = () => {
  return (
    <div className="main-section">
      <Header />
      <Footer />
    </div>
  );
};

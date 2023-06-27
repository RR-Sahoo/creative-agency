import React from "react";
import "./HeroSection.css";
import { ReactComponent as HeroImage } from "../../assets/images/hero-image.svg";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h2>Make your dream business goal come true</h2>
        <p>
          when you need us for improve your business, then come with us to help
          your business have reach it, you just sit and feel that goal
        </p>
        <button>Start Project</button>
      </div>
      <div className="hero-image">
        <HeroImage />
      </div>
    </div>
  );
};

export default HeroSection;

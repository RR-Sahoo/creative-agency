import React from "react";
import "./LandingPage.css";
import Navbar from "../components/Navbar/Navbar";
import HeroSection from "../components/HeroSection/HeroSection";
import OurTeam from "../components/OurTeam/OurTeam";
import OurServices from "../components/OurServices/OurServices";
import OurPortfolio from "../components/OurPortfolio/OurPortfolio";
const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <OurTeam />
      <OurServices />
      <OurPortfolio />
    </div>
  );
};

export default LandingPage;

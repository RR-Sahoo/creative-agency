import React from "react";
import "./LandingPage.css";
import Navbar from "../components/Navbar/Navbar";
import HeroSection from "../components/HeroSection/HeroSection";
import OurTeam from "../components/OurTeam/OurTeam";
import OurServices from "../components/OurServices/OurServices";
const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <OurTeam />
      <OurServices />
    </div>
  );
};

export default LandingPage;

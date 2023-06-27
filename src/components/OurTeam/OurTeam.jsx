import React from "react";
import "./OurTeam.css";
import { ReactComponent as PlayIcon } from "../../assets/icon/play-circle.svg";
import TeamImage from "../../assets/images/our-team.png";

const OurTeam = () => {
  return (
    <div className="our-team">
      <div className="our-team-header">
        <h4>About Us</h4>
        <h2>Our Teammate</h2>
      </div>
      <div className="our-team-content">
        <div className="content-left">
          <img src={TeamImage} alt="team-image" />
        </div>
        <div className="content-right">
          <p>
            We move with make a Creative Strategy for help your business goal,
            we help to improve your income by a services we have. make your
            content look interesting and make people look for your business
          </p>
          <p>
            We move with make a Creative Strategy for help your business goal,
            we help to improve your income by a services we have. make your
            content look interesting and make people look for your business
          </p>
          <div className="content-buttons">
            <button>About Us</button>
            <button>
              <PlayIcon />
              Our Story
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;

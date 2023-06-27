import React from "react";
import "./OurPortfolio.css";
import Portfolio1 from "../../assets/images/portfolio-1.jpg";
import Portfolio2 from "../../assets/images/portfolio-2.jpg";
import Portfolio3 from "../../assets/images/portfolio-3.jpg";
const OurPortfolio = () => {
  return (
    <div className="portfolio">
      <div className="portfolio-header">
        <h4>Our Portfolio</h4>
        <h2>What do we do</h2>
        <p>
          all projects that we have already done , proven can help to use more
          comfortable, then can used by client from our business
        </p>
      </div>
      <div className="portfolio-card-section">
        {data.map((item) => {
          return (
            <div
              className="portfolio-card"
              style={{
                backgroundImage: ` url(${item.image})`,
              }}
            >
              <div className="portoflio-card-title">
                <p>{item.title}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="portfolio-button">
        <button>See All Portfolio</button>
      </div>
    </div>
  );
};

export default OurPortfolio;
const data = [
  {
    image: Portfolio1,
    title: "Design Byte App",
  },
  {
    image: Portfolio2,
    title: "Cloud App",
  },
  {
    image: Portfolio3,
    title: "Design Furniture App",
  },
];

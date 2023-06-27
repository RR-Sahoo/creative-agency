import React from "react";
import "./OurServices.css";
import { ReactComponent as ArrowIcon } from "../../assets/icon/arrow-right.svg";
import { ReactComponent as MonitorIcon } from "../../assets/icon/monitor.svg";
import { ReactComponent as SettingIcon } from "../../assets/icon/settings.svg";
import { ReactComponent as PenIcon } from "../../assets/icon/pen-tool.svg";
import { ReactComponent as TvIcon } from "../../assets/icon/tv.svg";

const OurServices = () => {
  return (
    <div className="our-services">
      <div className="service-left">
        <h4>Our Services</h4>
        <div className="service-content">
          <h2>Perfect and Fast Movement</h2>
          <p>
            We move with make a Creative Strategy for help your business goal,
            we help to improve your income by a services we have. make your
            content look interesting and make people look for your business
          </p>
        </div>
        <div className="service-button">
          <p>Read more</p>
          <ArrowIcon />
        </div>
      </div>
      <div className="service-right">
        {data.map((item) => {
          return (
            <div className="service-card">
              <div className="card-icon-container">{item.icon}</div>
              <div className="card-title">
                <p>{item.title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurServices;
const data = [
  {
    icon: <MonitorIcon />,
    title: "Social Media Management",
  },
  {
    icon: <SettingIcon />,
    title: "Search Engine Opimization",
  },
  {
    icon: <PenIcon />,
    title: "Design",
  },
  {
    icon: <TvIcon />,
    title: "Ads",
  },
];

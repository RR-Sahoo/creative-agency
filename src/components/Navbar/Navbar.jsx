import React, { useState } from "react";
import { ReactComponent as MenuIcon } from "../../assets/icon/menu-icon.svg";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";

import CrossIcon from "../../assets/icon/cross-icon.png";

import "./Navbar.css";
const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <div className={`navbar ${isMenuOpen ? "open" : ""}`}>
      <div className="logo">
        <Logo />
      </div>
      <div
        className={`menu-toggle ${isMenuOpen ? "open" : ""}`}
        onClick={handleMenuToggle}
      >
        {isMenuOpen ? <img src={CrossIcon} alt="Cross" /> : <MenuIcon />}
      </div>
      <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <p className="nav-link">Home</p>
        <p className="nav-link">About</p>
        <p className="nav-link">Services</p>
        <p className="nav-link">Projects</p>
        <div className="nav-button-phone">
          <button>Contact Us</button>
        </div>
      </div>
      <div className="nav-button">
        <button>Contact Us</button>
      </div>
    </div>
  );
};

export default Navbar;

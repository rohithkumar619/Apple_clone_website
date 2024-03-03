import React from "react";
import "../Hero/Hero.css";
import vision from "../../assets/vision_pro.png";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="vision-pro">
      <img src={vision} alt="" />
      <div className="content">
        <span>
          <img src={logo} alt="" />
          <span>Vision Pro</span>
        </span>
        <span>Welcome to the era of Spatial Computing.</span>
        <span>
          <span>Learn More</span>
          <span>Buy More</span>
        </span>
      </div>
    </div>
  );
};

export default Hero;

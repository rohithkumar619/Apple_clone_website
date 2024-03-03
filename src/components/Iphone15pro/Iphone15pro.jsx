import React from "react";
import "../Iphone15pro/Iphone15pro.css";
import iphone15pro from "../../assets/iphone15pro.jpg";
const Iphone15pro = () => {
  return (
    <div className="iphone15pro">
      <img src={iphone15pro} alt="" />
      <div className="content3">
        <span>iPhone 15 Pro</span>
        <span> New camera. New design. Newphoria</span>
        <span>
          <span>Learn More</span>
          <span>Buy More</span>
        </span>
      </div>
    </div>
  );
};

export default Iphone15pro;

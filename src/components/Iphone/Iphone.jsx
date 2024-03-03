import React from "react";
import "../Iphone/Iphone.css";
import iphone from "../../assets/iphone15.png";
const Iphone = () => {
  return (
    <div className="iphone">
      <img src={iphone} alt="" />
      <div className="content2">
        <span>iPhone 15</span>
        <span>Titanium. So strong. So light. So Pro</span>
        <span>
          <span>Learn More</span>
          <span>Buy More</span>
        </span>
      </div>
    </div>
  );
};

export default Iphone;

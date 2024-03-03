import React from "react";
import "../Gadgets2/Gadgets2.css";
import ipads from "../../assets/ipads.jpg";
import airpod from "../../assets/airpods.png";
const Gadgets = () => {
  return (
    <div className="gadgets2">
      <div>
        <img src={ipads} alt="" />
        <div className="features3">
          <span>iPad</span>
          <span>Lovable. Drawable. Magical.</span>
          <span>
            <span>Learn more</span>
            <span>Buy</span>
          </span>
        </div>
      </div>
      <div className="airpod">
        <img src={airpod} alt="" />
        <div className="features4">
          <span>AirPods Pro</span>
          <span>Adaptive Audio. Now Playing</span>
          <span>
            <span>Learn more</span>
            <span>Buy</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Gadgets;

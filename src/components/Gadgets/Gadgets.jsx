import React from "react";
import "../Gadgets/Gadgets.css";
import logo from "../../assets/logo2.png";
import watch from "../../assets/watch.jpg";
import macbook from "../../assets/macbook.png";
const Gadgets = () => {
  return (
    <div className="gadgets">
      <div>
        <img src={watch} alt="" />
        <div className="features">
          <span>
            <img src={logo} alt="" />
            Watch
          </span>
          <span>series 9</span>
          <span>Smarter. Brighter. Mightier.</span>
          <span>
            <span>Learn more</span>
            <span>Buy</span>
          </span>
        </div>
      </div>
      <div className="macbook">
        <img src={macbook} alt="" />
        <div className="features2">
          <span>MacBook Pro</span>
          <span>Mind-blowing. Head-turning.</span>
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

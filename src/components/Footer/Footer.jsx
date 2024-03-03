import React from "react";
import "../Footer/Footer.css";
import { FooterContent } from "./FooterContent";
const Footer = () => {
  return (
    <div className="footer">
      <div className="left-f">
        <span>{FooterContent[0].content}</span>
        <span>{FooterContent[1].content}</span>
        <span>{FooterContent[2].content}</span>
        <span>{FooterContent[3].content}</span>
        <span>{FooterContent[4].content}</span>
        <span>{FooterContent[5].content}</span>
      </div>
      <div className="right-f">
        <div>
          <h5>Shop and Learn</h5>
          <span>Store</span>
          <span>Mac</span>
          <span>iPad</span>
          <span>iPhone</span>
          <span>Watch</span>
          <span>Vision</span>
          <span>AirPods</span>
          <span>TV & Home</span>
          <span>Air Tag</span>
          <span>Accessories</span>
          <span>Gift Cards</span>
          <span></span>
          <h5>Apple Wallet</h5>
          <span>Wallet</span>
          <span>Apple Card</span>
          <span>Apple Pay</span>
          <span>Apple Cash</span>
        </div>
        <div>
          <h5>Account</h5>
          <span>Manage Your Apple ID</span>
          <span>Apple Store Account</span>
          <span>iCloud.com</span>
          <h5>Entertainment</h5>
          <span>Apple One</span>
          <span>Apple TV+</span>
          <span>Apple Music</span>
          <span>Apple Fitness+</span>
          <span>Apple News+</span>
          <span>Apple Podcasts</span>
          <span>Apple Books</span>
          <span>App Store</span>
        </div>
        <div>
          <h5>Apple Store</h5>
          <span>Find a Store</span>
          <span>Genius Bar</span>
          <span>Today at Apple</span>
          <span>Apple Camp</span>
          <span>Certified Refurbished</span>
          <span>Apple Trade In</span>
          <span>Financing</span>
          <span>Carrier Deals at Apple</span>
          <span>Order Status</span>
          <span>Sopping Help</span>
        </div>
        <div>
          <h5>For Business</h5>
          <span>Apple and Business</span>
          <span>Shop for Business</span>
          <h5>For Education</h5>
          <span>Apple and Education</span>
          <span>Shop for K-12</span>
          <span>Shop for College</span>
          <h5>For Healthcare</h5>
          <span>Apple Healthcare</span>
          <span>Health on Apple Watch</span>
          <span>Health Records on iPhone</span>
          <h5>For Government</h5>
          <span>Shop for Government</span>
          <span>Shop for veterans and Military</span>
        </div>
        <div>
          <h5>Apple Values</h5>
          <span>Accessibility</span>
          <span>Eduction</span>
          <span>Environment</span>
          <span>Inclusion and Diversity</span>
          <span>Privacy</span>
          <span>Racial Equity and Justice</span>
          <span>Supplier Responsibility</span>
          <h5>About Apple</h5>
          <span>Newsroom</span>
          <span>Apple Leadership</span>
          <span>Career Opportunities</span>
          <span>Investers</span>
          <span>Ethics % Compiliance</span>
          <span>Events</span>
          <span>Contact Apple</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;

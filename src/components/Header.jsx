import React, { useState } from "react";
import "../components/Header.css";
import Logo from "../assets/logo2.png";
import search from "../assets/search.png";
import bag from "../assets/bag.png";
import arrow from "../assets/rightArrow.png";
const Header = () => {
  const [show, setShow] = useState(false);
  const [bagg, setBagg] = useState(false);
  const handleClick = () => {
    if (show === true) {
      setShow(false);
      setIndex(-1);
    } else {
      setShow(true);
      setIndex(+1);
    }
  };
  const handleClick2 = () => {
    if (bagg === true) {
      setBagg(false);
      setIndex(-1);
    } else {
      setBagg(true);
      setIndex(+1);
    }
  };
  return (
    <div className="header">
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <ul className="header-components">
        <li className="store">
          <span>Store</span>
          <div className="dropdown">
            <div>
              <p>Shop</p>
              <h2>Shop the Latest</h2>
              <h2>Mac</h2>
              <h2>iPad</h2>
              <h2>iPhone</h2>
              <h2>Apple Watch</h2>
              <h2>Apple Vision Pro</h2>
              <h2>Accessories</h2>
            </div>
            <div>
              <p>Quick Links</p>
              <h4>Find a Store</h4>
              <h4>Order Status</h4>
              <h4>Apple Trade In</h4>
              <h4>Financing</h4>
            </div>
            <div>
              <p>Shop Special Store</p>
              <h4>Certified Refurbished</h4>
              <h4>Education</h4>
              <h4>Business</h4>
              <h4>Veterans and Militiry</h4>
              <h4>Government</h4>
            </div>
          </div>
        </li>
        <li className="mac">
          <span>Mac</span>
          <div className="dropdown2">
            <div>
              <p>Explore</p>
              <h2>Explore All Mac</h2>
              <h2>MacBook Air</h2>
              <h2>MacBook Pro</h2>
              <h2>iMac</h2>
              <h2>Mac mini</h2>
              <h2>Mac Studio</h2>
              <h2>Mac Pro</h2>
              <h2>Displays</h2>
              <h4>Compare Mac</h4>
              <h4>Mac Does That</h4>
            </div>
            <div>
              <p>Shop Mac</p>
              <h4>Shop Mac</h4>
              <h4>Mac Accessories</h4>
              <h4>Apple Trade In</h4>
              <h4>Financing</h4>
            </div>
            <div>
              <p>More from Mac</p>
              <h4>Mac Support</h4>
              <h4>AppleCare+ for Mac</h4>
              <h4>MacOS Sonoma</h4>
              <h4>Apps by Apple</h4>
              <h4>Continuity</h4>
              <h4>iClouds+</h4>
              <h4>Mac for Business</h4>
              <h4>Education</h4>
            </div>
          </div>
        </li>
        <li className="ipad">
          <span>iPad</span>
          <div className="dropdown3">
            <div>
              <p>Explore iPad</p>
              <h2>Explore All iPad</h2>
              <h2>iPad Pro</h2>
              <h2>iPad Air</h2>
              <h2>iPad</h2>
              <h2>iPad mini</h2>
              <h2>Apple Pencil</h2>
              <h2>Keyboards</h2>
              <h4>Compare iPad</h4>
              <h4>Why iPad</h4>
            </div>
            <div>
              <p>Shop iPad</p>
              <h4>Shop iPad</h4>
              <h4>iPad Accessories</h4>
              <h4>Apple Trade In</h4>
              <h4>Financing</h4>
            </div>
            <div>
              <p>More from iPad</p>
              <h4>iPad Support</h4>
              <h4>AppleCare+ for iPad</h4>
              <h4>iPadOS 17</h4>
              <h4>Apps by Apple</h4>
              <h4>iClouds+</h4>
              <h4>Education</h4>
            </div>
          </div>
        </li>
        <li className="i-phone">
          <span>iPhone</span>
          <div className="dropdown4">
            <div>
              <p>Explore iPhone</p>
              <h2>Explore All iPhone</h2>
              <h2>iPhone 15 Pro</h2>
              <h2>iPhone 15</h2>
              <h2>iPhone 14</h2>
              <h2>iPhone 13</h2>
              <h2>iPhone SE</h2>
              <h4>Compare iPhone</h4>
              <h4>Switch from Android</h4>
            </div>
            <div>
              <p>Shop iPhone</p>
              <h4>iPhone Accessories</h4>
              <h4>Apple Trade In</h4>
              <h4>Carrier Deals at Apple</h4>
              <h4>Financing</h4>
            </div>
            <div>
              <p>More from iPhone</p>
              <h4>iPhone Support</h4>
              <h4>AppleCare+ for iPhone</h4>
              <h4>iOS 17</h4>
              <h4>Apps by Apple</h4>
              <h4>iPhone Privacy</h4>
              <h4>iClouds+</h4>
              <h4>Wallet, Pay, Card</h4>
              <h4>Siri</h4>
            </div>
          </div>
        </li>
        <li className="watch">
          <span>Watch</span>
          <div className="dropdown5">
            <div>
              <p>Explore Watch</p>
              <h2>Explore All Watch</h2>
              <h2>Apple Watch Series 9</h2>
              <h2>Apple Watch Ultra 2</h2>
              <h2>Apple Watch SE</h2>
              <h2>Apple Watch Nike</h2>
              <h2>Apple Watch Hermes</h2>
              <h4>Compare Watch</h4>
              <h4>Why Apple Watch</h4>
            </div>
            <div>
              <p>Shop Watch</p>
              <h4>Apple Watch Studio</h4>
              <h4>Apple Watch Brands</h4>
              <h4>Apple Watch Accessories</h4>
              <h4>Apple Trade In</h4>
              <h4>Financing</h4>
            </div>
            <div>
              <p>More from Watch</p>
              <h4>Apple Watch Support</h4>
              <h4>AppleCare+</h4>
              <h4>WatchOS 10</h4>
              <h4>Apps by Apple</h4>
              <h4>Apple Fitness+</h4>
            </div>
          </div>
        </li>
        <li className="vision">
          <span>Vision</span>
          <div className="dropdown6">
            <div>
              <p>Explore Vision</p>
              <h2>Apple Vision Pro</h2>
              <h4>Guided Tour</h4>
              <h4>Tech Specs</h4>
            </div>
            <div>
              <p>Shop Vision</p>
              <h4>Shop Apple Vision Pro</h4>
              <h4>Apple Vision Pro Accessories</h4>
              <h4>Book a Demo</h4>
            </div>
            <div>
              <p>More from Vision </p>
              <h4>Apple Vision Pro Support</h4>
              <h4>AppleCare+</h4>
            </div>
          </div>
        </li>
        <li className="airpods">
          <span>AirPods</span>
          <div className="dropdown7">
            <div>
              <p>Explore AirPods</p>
              <h2>Explore All AirPods</h2>
              <h2>AirPods Pro 2nd generation</h2>
              <h2>AirPods 2nd generation</h2>
              <h2>AirPods 3rd generation</h2>
              <h2>AirPods Max</h2>
              <h4>Compare AirPods</h4>
            </div>
            <div>
              <p>Shop AirPods</p>
              <h4>Shop AirPods</h4>
              <h4>AirPods Accessories</h4>
            </div>
            <div>
              <p>More from AirPods</p>
              <h4>AirPods Support</h4>
              <h4>AppleCare+ for HeadPhones</h4>
              <h4>Apple Music</h4>
            </div>
          </div>
        </li>
        <li className="home">
          <span>TV & Home</span>
          <div className="dropdown8">
            <div>
              <p>Explore TV & Home</p>
              <h2>Explore TV & Home</h2>
              <h2>Apple TV 4K</h2>
              <h2>HomePod</h2>
              <h2>HomePod mini</h2>
            </div>
            <div>
              <p>Shop TV & Home</p>
              <h4>Shop Apple R 4K</h4>
              <h4>Shop HomePod</h4>
              <h4>Shop HomePod mini</h4>
              <h4>Shop Siri Remote</h4>
              <h4>TV & Home Accessories</h4>
            </div>
            <div>
              <p>More from TV & Home</p>
              <h4>Apple TV Support</h4>
              <h4>HomepOD Support</h4>
              <h4>AppleCare+</h4>
              <h4>Apple Tv app</h4>
              <h4>Apple TV+</h4>
              <h4>Home app</h4>
              <h4>Apple Music</h4>
              <h4>Siri</h4>
              <h4>AirPlay</h4>
            </div>
          </div>
        </li>
        <li className="entertainment">
          <span>Entertainment</span>
          <div className="dropdown9">
            <div>
              <p>Explore Entertainment</p>
              <h2>Explore Entertainment</h2>
              <h2>Apple One</h2>
              <h2>Apple TV+</h2>
              <h2>Apple Music</h2>
              <h2>Apple Arcade</h2>
              <h2>Apple Fitness+</h2>
              <h2>Apple News+</h2>
              <h2>Apple Podcasts</h2>
              <h2>Apple Books</h2>
              <h2>App Store</h2>
            </div>
            <div>
              <p>Support</p>
              <h4>Apple TV+ Support</h4>
              <h4>Apple Music Support</h4>
            </div>
            <div></div>
          </div>
        </li>
        <li className="access">
          <span>Accessories</span>
          <div className="dropdown10">
            <div>
              <p>Shop Accessories</p>
              <h2>Shop All Accessories</h2>
              <h2>Mac</h2>
              <h2>iPad</h2>
              <h2>iPhone</h2>
              <h2>Apple Watch</h2>
              <h2>Apple Vision Pro</h2>
              <h2>AirPods</h2>
              <h2>Tv & Home</h2>
            </div>
            <div>
              <p>Explore Accessories</p>
              <h4>Made by Apple</h4>
              <h4>Beats by Dr.Dre</h4>
              <h4>AirTag</h4>
            </div>
            <div></div>
          </div>
        </li>
        <li className="support">
          <span>Support</span>
          <div className="dropdown11">
            <div>
              <p>Explore Support</p>
              <h2>iPhone</h2>
              <h2>Mac</h2>
              <h2>iPad</h2>
              <h2>Watch</h2>
              <h2>Apple Vision Pro</h2>
              <h2>AirPods</h2>
              <h2>Music</h2>
              <h2>TV</h2>
              <h4>Explore Support</h4>
            </div>
            <div>
              <p>Get Help</p>
              <h4>Community</h4>
              <h4>Check Coverage</h4>
              <h4>Repair</h4>
              <h4>Contact Us</h4>
            </div>
            <div>
              <p>Helpful Topics</p>
              <h4>Get AppleCare+</h4>
              <h4>Apple ID & Password</h4>
              <h4>Billing & Subscription</h4>
              <h4>Find My</h4>
              <h4>Accessibility</h4>
            </div>
          </div>
        </li>
      </ul>
      <div className="searchbag">
        <div className="search">
          <img onClick={handleClick} src={search} alt="" />
          <div
            className="dropdown12"
            style={{
              visibility: show ? "visible" : "hidden",
            }}
          >
            <div>
              <div className="search-box">
                <img className="searchlogo" src={search} alt="" />
                <input type="text" placeholder="Search apple.com" />
              </div>
              <p className="qp">Quick Links</p>
              <div className="quicklinks">
                <div>
                  <img src={arrow} alt="" />
                  <p>Find a Store</p>
                </div>
                <div>
                  <img src={arrow} alt="" />
                  <p>Apple Vision Pro</p>
                </div>
                <div>
                  <img src={arrow} alt="" />
                  <p>AirPods</p>
                </div>
                <div>
                  <img src={arrow} alt="" />
                  <p>AirTag</p>
                </div>
                <div>
                  <img src={arrow} alt="" />
                  <p>Apple Tarde In</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bag">
          <img className="bagg" src={bag} onClick={handleClick2} />
          <div
            style={{
              visibility: bagg ? "visible" : "hidden",
            }}
            className="dropdown13"
          >
            <div>
              <h2>Your Bag is empty</h2>
              <div className="signin">
                <span>Sign in</span>
                <span> to se if you have any save items</span>
              </div>
              <p className="myprofile"> My Profile</p>
              <div className="bg1">
                <img src="" alt="" />
                <p>Orders</p>
              </div>
              <div className="bg1">
                <img src="" alt="" />
                <p>Your Saves</p>
              </div>
              <div className="bg1">
                <img src="" alt="" />
                <p>Account</p>
              </div>
              <div className="bg1">
                <img src="" alt="" />
                <p>sign in</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

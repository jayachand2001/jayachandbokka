import React from "react";
import { useState } from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";
import { ReactComponent as Hamburger } from "../assests/icons/hamburger.svg";
import lawyer from "../assests/images/image1.png";



export default function Home() {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    <div className="home">
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <span className="snazzy">snazzy</span>
            <span className="lawyer">lawyer</span>
          </div>
          <div className="menu-icon" onClick={handleShowNavbar}>
            <Hamburger />
          </div>
          <div className={`nav-elements  ${showNavbar && "active"}`}>
            <ul>
              <li>
                <NavLink to="/about">About us</NavLink>
              </li>
              <li>
                <NavLink to="/offer">Offer</NavLink>
              </li>
              <li>
                <NavLink to="/team">Our Team</NavLink>
              </li>
              <li>
                <NavLink to="/blog">Blog</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
          <div>
            <button className="button">Make an Appointment</button>
          </div>
        </div>
      </nav>
      <div className="content">
        <div>
          <div className="highlight">
            <span className="one">Overcome legal abstacles to your</span>
            <span className="two"> success!</span>
          </div>
          <div className="context">
            <span>
              Law without obstacles for your success. Professional support to
              help you overcome legal difficulties and achieve your goals.
            </span>
          </div>
          <div>
            <button className="consulation">Book a free consultation</button>
          </div>
        </div>
        <div
          className="brand"
          // style={{ width: "100%", height: "100%", position: "relative" }}
        >
          <div
            className="background"
            // style={styles}
          ></div>
          <img
            className="lawyerphoto"
            // style={{
            //   width: 480,
            //   height: 610,
            //   left: 0,
            //   top: 0,
            //   position: "absolute",
            // }}
            src={lawyer}
            alt="lawyer"
          />
        </div>
      </div>
    </div>
  );
}

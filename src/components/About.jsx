import React from "react";
import { ReactComponent as Lenovo } from "../assests/icons/lenovo.svg";
import "./About.css";
import meeting from "../assests/images/image2.png";

export default function About() {
  return (
    <div className="about">
      <div className="header">
        <Lenovo />
        <Lenovo />
        <Lenovo />
        <Lenovo />
        <Lenovo />
        <Lenovo />
        <Lenovo />
      </div>
      <div className="a_matter">
        <div className="a_content">
          <div className="a_highlight">
            <p>About us</p>
          </div>
          <div className="a_sub_highlight">
            <p>
              A few words<br></br> about our law firm
            </p>
          </div>
          <div className="a_context">
            <p>
              Trust, modernity, success. Our law firm builds relationships based
              on trust and security. We act quickly, ensuring satisfaction and
              comfort. We are your partner in business, removing legal obstacles
              to success
            </p>
          </div>
          <div>
            <button className="a_button">
              More information about law firm
            </button>
          </div>
        </div>
        <div className="lawfirm">
          <div className="meetingbackground"></div>
          <img className="meetingphoto" src={meeting} alt="meeting" />
        </div>
      </div>
    </div>
  );
}

import React from "react";
import "./Contact.css";
import { ReactComponent as Social } from "../assests/icons/Social.svg";
export default function Contact() {
  return (
    <div className="contact">
      <div className="c_box">
        <div className="c_details">
          <div className="c_info">
            <p>
              <span style={{fontWeight: 700}}>snazzy</span>
              <span style={{fontWeight: 400}}>lawyer</span>
            </p>
            <p style={{fontWeight: 600}}>help@snazzylawyer.com</p>
            <p style={{fontWeight: 600}}>+48 601 908 812</p>
          </div>
          <div  className="c_middle">
            <div className="c_laws">
            <p style={{fontWeight: 700}}>Specialties</p>
            <p style={{fontWeight: 600}}>Family law</p>
            <p style={{fontWeight: 600}}>Criminal law</p>
            <p style={{fontWeight: 600}}>Civil law</p>
            <p style={{fontWeight: 600}}>Labour law</p>
            <p style={{fontWeight: 600}}>Real estate law</p>
          </div>
          {/* </div>
          <div style={{paddingLeft: 69}}> */}
          <div  className="c_offers">
            <p style={{fontWeight: 600}}>Compensation</p>
            <p style={{fontWeight: 600}}>Succession matters</p>
            <p style={{fontWeight: 600}}>Consumer bankruptcy</p>
            <p style={{fontWeight: 600}}>Drafting and reviewing contracts</p>
          </div>
          </div>
          <div className="c_questions">
            <p style={{fontWeight: 700}}>Resources</p>
            <p style={{fontWeight: 600}}>FQA</p>
            <p style={{fontWeight: 600}}>Blog</p>
            <p style={{fontWeight: 600}}>Kontakt</p>
          </div>
        </div>
        <div className="c_social">
          <div><p className="copyright">©SnazzylawyerAll Right Reserved</p></div>
          <div className="social"><Social /></div>
          <div><p className="policy">Privacy policy</p></div>
        </div>
      </div>
    </div>
  );
}

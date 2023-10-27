import React from "react";
import "./Team.css";
import tweet from "../assests/images/tweet.png";

export default function Team() {
  return (
    <div className="team">
      <div className="t_header">
        <p className="t_highlight_1">Opinions about us</p>
        <p className="t_highlight_2">What our customers say about us</p>
      </div>
      <div className="tweets">
        <div className="t_row1">
          <img  className="tweet" src={tweet} alt="tweet" />
          <img  className="tweet" src={tweet} alt="tweet" />
          <img  className="tweet" src={tweet} alt="tweet" />
        </div>
        <div className="t_row2">
          <img className="tweet" src={tweet} alt="tweet" />
          <img className="tweet" src={tweet} alt="tweet" />
          <img className="tweet" src={tweet} alt="tweet" />
        </div>
      </div>
      <div className="mobile_view">
      <img className="tweet" src={tweet} alt="tweet" />
      </div>
      <div>
        <button className="t_opinions">Read more obout the opinions</button>
      </div>
    </div>
  );
}

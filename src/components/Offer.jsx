import React from "react";
import "./Offer.css";
import { ReactComponent as Arrow } from "../assests/icons/Arrow.svg";
import { ReactComponent as Family } from "../assests/icons/Family.svg";
import { ReactComponent as Criminal } from "../assests/icons/Criminal.svg";
import { ReactComponent as Dollar } from "../assests/icons/Dollar.svg";
import { ReactComponent as Employment } from "../assests/icons/Employment.svg";
import { ReactComponent as Realestate } from "../assests/icons/Realestate.svg";
import { ReactComponent as Compensation } from "../assests/icons/Compensation.svg";
import { ReactComponent as Success } from "../assests/icons/Success.svg";
import { ReactComponent as Pigbank } from "../assests/icons/Pigbank.svg";

export default function Offer() {
  return (
    <div>
      <div className="offer">
        <div className="heading">
          <p className="h_highlight">What makes us different</p>
          <p className="h_content">Why choose our law firm?</p>
        </div>
        <div className="o_context">
          <div className="row_1">
            <p className="c_highlight_1">95%</p>
            <p className="c_matter_1">
              Thanks to our skills and commitment, our law firm achieves a high
              degree of efficiency in resolving cases.
            </p>
            <div>
              <button className="consultation">Book a free consultation</button>
            </div>
          </div>
          <div className="line_1"></div>
          <div className="row_2">
            <div>
              <p className="c_highlight_2">10+</p>
              <p className="c_matter_2">
                Years of experience is the solid foundation on which we base our
                law firm.
              </p>
            </div>
            <div className="line_2"></div>
            <div>
              <p className="c_highlight_2">+500</p>
              <p className="c_matter_2">
                More than 500 satisfied clients are the result of our excellent
                legal services
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="speciallsation">
        <div className="s_header">
          <p className="s_highlight">Speciallsation</p>
          <p className="s_context">What we do</p>
          <div className="s_content">
            <p className="s_matter">
              Our lawyer are specialists in criminal law, civil law, commercial
              law, administrative law and new technologies. We are not afraid of
              chanllenges, including consumer bankruptcy
            </p>
          </div>
        </div>
        <div className="table">
          <div className="table_1">
            <div className="sub_table">
              <div className="box">
                <div className="icon">
                  <Family />
                </div>
                <div className="s_box">
                  <div className="text">
                    <p>
                      Law<br></br>Family
                    </p>
                  </div>
                  <div className="arrow">
                    <Arrow />
                  </div>
                </div>
              </div>
              <div className="box">
                <div className="icon">
                  <Criminal />
                </div>
                <div className="s_box">
                  <div className="text">
                    <p>
                      Law<br></br>Crimial
                    </p>
                  </div>
                  <div className="arrow">
                    <Arrow />
                  </div>
                </div>
              </div>
            </div>
            <div className="sub_table">
              <div className="box">
                <div className="icon">
                  <Dollar />
                </div>
                <div className="s_box">
                  <div className="text">
                    <p>
                      Law<br></br>Civil
                    </p>
                  </div>
                  <div className="arrow">
                    <Arrow />
                  </div>
                </div>
              </div>
              <div className="box">
                <div className="icon">
                  <Employment />
                </div>
                <div className="s_box">
                  <div className="text">
                    <p>
                      Law<br></br>Empoyment
                    </p>
                  </div>
                  <div className="arrow">
                    <Arrow />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="table_2">
            <div className="sub_table">
              <div className="box">
                <div className="icon">
                  <Realestate />
                </div>
                <div className="s_box">
                  <div className="text">
                    <p>
                      Law<br></br>Real estate
                    </p>
                  </div>
                  <div className="arrow">
                    <Arrow />
                  </div>
                </div>
              </div>
              <div className="box">
                <div className="icon">
                  <Compensation />
                </div>
                <div className="s_box">
                  <div className="text">
                    <p>Compensation</p>
                  </div>
                  <div className="arrow">
                    <Arrow />
                  </div>
                </div>
              </div>
            </div>
            <div className="sub_table">
              <div className="box">
                <div className="icon">
                  <Success />
                </div>
                <div className="s_box">
                  <div className="text">
                    <p>
                      Cases<br></br>succession
                    </p>
                  </div>
                  <div className="arrow">
                    <Arrow />
                  </div>
                </div>
              </div>
              <div className="box">
                <div className="icon">
                  <Pigbank />
                </div>
                <div className="s_box">
                  <div className="text">
                    <p>
                      Bank<br></br>consumner
                    </p>
                  </div>
                  <div className="arrow">
                    <Arrow />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

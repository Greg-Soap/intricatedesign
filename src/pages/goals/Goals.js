/* eslint-disable react/no-unescaped-entities */
import React from "react";
import "./Goals.scss";
import reason1 from "../../assets/images/Group 2.png";
import reason2 from "../../assets/images/Group 3.png";
import reason3 from "../../assets/images/Group 4.png";
import reason4 from "../../assets/images/Group 5.png";

const Goals = () => {
  return (
    <section id="goals" className="goals_container">
      <div className="goals_wrapper">
        <div className="goals_left_content">
          <h1 className="goals_title">
            Why you should choose us<span>.</span>
          </h1>
          <p className="goals_body">
            Our uttermost desire is to fulfill our client's needs and make sure
            every transaction ends with satisfaction:
          </p>
        </div>

        <div className="goals_right_content">
          <div className="goals_reasons">
            <img src={reason1} alt="reason1" />
            <div className="reason_textbox">
              <h1>Quality</h1>
              <p>
                We select products with excellent design, produced with
                long-lasting materials that satisfy the highest quality and
                sustainability standards.
              </p>
            </div>
          </div>
          <div className="goals_reasons">
            <img src={reason2} alt="reason2" />
            <div className="reason_textbox">
              <h1>Attention to detail:</h1>
              <p>
                We make sure to pay great attention to detail; exploring art,
                crafts, and everything around us to deliver the greatest design.
              </p>
            </div>
          </div>
          <div className="goals_reasons">
            <img src={reason3} alt="reason3" />
            <div className="reason_textbox">
              <h1>Passion</h1>
              <p>
                We are a community of skilled, capable, and passionate
                professionals. We also hold the importance of empathy in high
                regard as individuals.
              </p>
            </div>
          </div>
          <div className="goals_reasons">
            <img src={reason4} alt="reason4" />
            <div className="reason_textbox">
              <h1>We Deliver</h1>
              <p>
                We fulfill our commitments and won't skimp on quality when
                providing our consumers with high-end services and goods.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Goals;

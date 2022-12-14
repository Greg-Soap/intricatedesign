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
            Ac diam urna ut turpis. Et accumsan vitae non eleifend quis. Lectus
            mi odio pulvinar nulla commodo. Sit eu odio eu egestas id lobortis
            eu.
          </p>
        </div>

        <div className="goals_right_content">
          <div className="goals_reasons">
            <img src={reason1} alt="reason1"></img>
            <div className="reason_textbox">
              <h1>Duis posuere viverra convallis non nisl.</h1>
              <p>
                Tellus purus porttitor erat ornare. Integer a aliquam enim sed
                ut sit.
              </p>
            </div>
          </div>
          <div className="goals_reasons">
            <img src={reason2} alt="reason2"></img>
            <div className="reason_textbox">
              <h1>Duis posuere viverra convallis non nisl.</h1>
              <p>
                Tellus purus porttitor erat ornare. Integer a aliquam enim sed
                ut sit.
              </p>
            </div>
          </div>
          <div className="goals_reasons">
            <img src={reason3} alt="reason3"></img>
            <div className="reason_textbox">
              <h1>Duis posuere viverra convallis non nisl.</h1>
              <p>
                Tellus purus porttitor erat ornare. Integer a aliquam enim sed
                ut sit.
              </p>
            </div>
          </div>
          <div className="goals_reasons">
            <img src={reason4} alt="reason4"></img>
            <div className="reason_textbox">
              <h1>Duis posuere viverra convallis non nisl.</h1>
              <p>
                Tellus purus porttitor erat ornare. Integer a aliquam enim sed
                ut sit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Goals;

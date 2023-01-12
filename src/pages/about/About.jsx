import React from "react";
import UseMediaQuery from "../../components/mediaquery/UseMediaQuerry";
import "./About.scss";
import ourStory from "../../assets/images/Rectangle 85.png";
import ourStory_mobile from "../../assets/images/Rectangle 85(1).png";
import Badge from "../../assets/images/Badge.png";

const About = () => {
  let isPageWide = UseMediaQuery("(min-width: 769px)");

  return (
    <section id="about" className="about_container">
      <div className="about_wrapper">
        <div className="about_left_content">
          <h2 className="about_header">
            WHY WE ARE THE BEST, THEN LIST VALUES
          </h2>
          <h1 className="about_title">
            We are <span>Intricate Design</span> spaces.
          </h1>
          <div className="about_body">
            <p>
              <span className="dot" /> Quality: We select products with
              excellent design, produced with long-lasting materials that
              satisfy the highest quality and sustainability standards.
            </p>
            <p>
              <span className="dot" /> Attention to detail: We make sure to pay
              great attention to detail; exploring art, crafts, and everything
              around us to deliver the greatest design.Manifesting our client’s
              individual style with each desk project.
            </p>
            <p>
              <span className="dot" /> Passion: We are a community of skilled,
              capable, and passionate professionals. We also hold the importance
              of empathy in high regard as individuals.
            </p>
          </div>
        </div>
        <div className="about_right_content">
          {isPageWide ? (
            <div className="wrapper">
              <img src={Badge} alt="" className="Badge" />
              <img className="about_img" src={ourStory} alt="ourStory" />
            </div>
          ) : (
            <div className="wrapper">
              <img src={Badge} alt="" className="Badge" />
              <img
                className="about_img_mobile"
                src={ourStory_mobile}
                alt="ourStory"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;

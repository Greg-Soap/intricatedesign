import React from "react";
import "./About.scss";
import ourStory from "../../assets/images/ourStoryImage.png";
import rectangle from "../../assets/images/Rectangle.png";

const About = () => {
  return (
    <section id="about" className="about_container">
      <div className="about_wrapper">
        <div className="about_left_content">
          <div className="about_header">
            <img src={rectangle} alt="rectangle"></img>
            <h1>OUR STORY</h1>
          </div>
          <div className="about_title">
            <h1>
              We are Intricate Design spaces<span>.</span>
            </h1>
          </div>
          <div className="about_body">
            <p>
              INTRICATE DESIGN is a interior design and decor company located in
              West Africa, Nigeria. At Intricate Design, we believe that our
              clients deserve the best life has to offer at that is exactly what
              we aim to deliver; the best.
            </p>
            <p>
              By providing first class luxury solutions for homes, offices,
              hotels etc. Implementing creative and innovative methods to meet
              your needs to absolute perfection.
            </p>
          </div>
        </div>
        <div className="about_right_content">
          <img src={ourStory} alt="ourStory"></img>
        </div>
      </div>
    </section>
  );
};

export default About;

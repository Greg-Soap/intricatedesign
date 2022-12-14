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
            <h1>About Us</h1>
          </div>
          <div className="about_title">
            <h1>
              We are Intricate Design spaces<span>.</span>
            </h1>
          </div>
          <div className="about_body">
            <p>
              Sodales quis id quis ultricies enim bibendum iaculis vitae
              scelerisque. Ipsum tempor quam mus id varius. Id lectus egestas
              lectus penatibus elit quam nisl habitasse malesuada. Gravida
              tellus adipiscing massa veli
            </p>
            <p>
              Sodales quis id quis ultricies enim bibendum iaculis vitae
              scelerisque. Ipsum tempor quam mus id varius. Id lectus egestas
              lectus penatibus elit quam nisl habitasse malesuada. Gravida
              tellus adipiscing massa veli
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

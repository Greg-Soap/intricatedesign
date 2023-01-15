import React from "react";
import "./Hero.scss";
import Image from "../../assets/images/About Us Image 1.png";

const Hero = () => {
  return (
    <section id="hero" className="hero_container">
      <div className="hero_wrapper" data-aos="fade-up" data-aos-offset="200">
        <div className="hero_left_content">
          <h2 className="hero_header">Who we are/About us or smth</h2>
          <h1 className="hero_title" data-aos="fade-up" data-aos-delay="200">
            A innovative <span>interior design company</span>, here to deliver
            on all your design needs.
          </h1>
          <div className="hero_body">
            <p data-aos="fade-up" data-aos-delay="400">
              INTRICATE DESIGN is one of the fastest growing interior design
              firms in West Africa, Nigeria. At Intricate Design, we believe
              that our clients deserve the best life has to offer; that is
              exactly what we aim to deliver; the best.
            </p>
            <p data-aos="fade-up" data-aos-delay="600">
              By providing first-class luxury solutions for homes, offices,
              hotels, etc. Implementing creative and innovative methods to meet
              your needs to absolute perfection.
            </p>
          </div>
        </div>
        <div className="hero_right_content">
          <div className="wrapper">
            <div className="Badge" data-aos="fade-left" data-aos-delay="400">
              11+ <span>years</span>
            </div>
            <div className="Badge" data-aos="fade-left" data-aos-delay="600">
              20+ <span>projects</span>
            </div>
            <div className="Badge" data-aos="fade-left" data-aos-delay="800">
              98+ <span>styles</span>
            </div>
            <img className="hero_img" src={Image} alt="ourStory" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from "react";
import { Link } from "react-scroll";
import "./Home.scss";
import Hero1 from "../../assets/images/Hero Icon 1.png";
import Hero2 from "../../assets/images/Hero Icon 2.png";
import arrow from "../../assets/images/arrow-right.svg";

const Home = () => {
  return (
    <section id="home" className="home_container">
      <div className="home_wrapper">
        <div className="home_textbox">
          <div className="wrapper" data-aos="fade-up">
            <h1>
              <img src={Hero1} alt="" className="hero" />
              Intricate Design Space, A creative interior design company{" "}
              <img src={Hero2} alt="" className="hero" />
            </h1>
          </div>
          <div className="links" data-aos="fade-up" data-aos-delay="200">
            <Link
              className="home_btn"
              activeClass="active"
              smooth
              spy
              to="contact"
            >
              Contact Us
            </Link>
            <div className="learn">
              learn about us <img src={arrow} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

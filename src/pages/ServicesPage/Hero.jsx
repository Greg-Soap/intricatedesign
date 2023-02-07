import React from "react";
import "./Style.scss";
import H1 from "../../assets/images/servicepageheader01.png";
import H2 from "../../assets/images/servicepageheader02.png";
import H3 from "../../assets/images/servicepageheader03.png";

const Hero = () => {
  return (
    <section className="h_container">
      <div className="wrapper">
        <div className="left">
          <h1 className="title" data-aos="fade-up">
            Below are some of the Services we offer:
          </h1>
          <div className="desc" data-aos="fade-up" data-aos-delay="200">
            From completion of a carcass structure to remodeling and
            refurbishing here are some of the many services we offer our
            clients:
          </div>
        </div>
        <div className="right">
          <img src={H1} alt="" data-aos="fade-left" />
          <img src={H2} alt="" data-aos="fade-left" data-aos-delay="200" />
          <img src={H3} alt="" data-aos="fade-left" data-aos-delay="400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

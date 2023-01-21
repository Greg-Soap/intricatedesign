import React from "react";
import "./Style.scss";
import H1 from "../../assets/images/Rectangle 100.png";
import H2 from "../../assets/images/Rectangle 101.png";
import H3 from "../../assets/images/Rectangle 99.png";

const Hero = () => {
  return (
    <section className="h_container">
      <div className="wrapper">
        <div className="left">
          <h1 className="title" data-aos="fade-up">
            Faucibus ultricies ullamcorper mauris null services ellus.
          </h1>
          <div className="desc" data-aos="fade-up" data-aos-delay="200">
            Sed purus sit ipsum convallis. Bibendum magna lectus est mi
            fringilla euismod enim. Consectetur a lacinia consectetur ut.
            Facilisis malesuada et non id diam. Iaculis sed felis eu lacus
            faucibus nisl. Egestas sem pharetra proin condimentum enim viverra.
            Viverra et.
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

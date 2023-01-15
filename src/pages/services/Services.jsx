import React from "react";
import "./Services.scss";
import Icon1 from "../../assets/images/Desk icon(1).png";
import Icon2 from "../../assets/images/Building icon(1).png";
import Icon3 from "../../assets/images/Construction helmet icon.png";
import Icon4 from "../../assets/images/Couch icon.png";

const Services = () => {
  return (
    <section id="services" className="services_container">
      <div className="services_title_wrapper" data-aos="fade-up">
        <h2 className="services_header">WHAT WE OFFER</h2>
        <h1 className="services_title" data-aos="fade-up" data-aos-delay="400">
          Below are some of the <span>services</span> we offer.
        </h1>
      </div>

      <div className="services_content_wrapper">
        <div
          className="services_content"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <div className="title">
            Lorem ipsum dolor sit, amet consectetur adipisicing.
          </div>
          <img src={Icon3} alt="" />
          <div className="desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequuntur veritatis illum ex.
          </div>
        </div>
        <div
          className="services_content"
          data-aos="fade-left"
          data-aos-delay="400"
        >
          <div className="title">
            Lorem ipsum dolor sit, amet consectetur adipisicing.
          </div>
          <img src={Icon4} alt="" />
          <div className="desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequuntur veritatis illum ex.
          </div>
        </div>
        <div
          className="services_content"
          data-aos="fade-left"
          data-aos-delay="600"
        >
          <div className="title">
            Lorem ipsum dolor sit, amet consectetur adipisicing.
          </div>
          <img src={Icon2} alt="" />
          <div className="desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequuntur veritatis illum ex.
          </div>
        </div>
        <div
          className="services_content"
          data-aos="fade-left"
          data-aos-delay="800"
        >
          <div className="title">
            Lorem ipsum dolor sit, amet consectetur adipisicing.
          </div>
          <img src={Icon1} alt="" />
          <div className="desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequuntur veritatis illum ex.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

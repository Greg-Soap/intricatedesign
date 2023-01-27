import React from "react";
import "./Services.scss";
import Icon1 from "../../assets/images/Desk icon(1).png";
import Icon2 from "../../assets/images/Building icon(1).png";
import Icon3 from "../../assets/images/Construction helmet icon.png";
import Icon4 from "../../assets/images/Couch icon.png";
import { Link } from "react-router-dom";

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
        <Link
          to="/Services"
          className="services_content"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <div className="title">Completion of a carcass structure</div>
          <img src={Icon3} alt="" />
          <div className="desc">
            At our interior design firm, we understand that the foundation of
            any good design is a solid structure.
          </div>
        </Link>
        <Link
          to="/Services"
          className="services_content"
          data-aos="fade-left"
          data-aos-delay="400"
        >
          <div className="title">Furniture Refurbishing and set</div>
          <img src={Icon4} alt="" />
          <div className="desc">
            We offer a comprehensive furniture refurbishing and set service.
          </div>
        </Link>
        <Link
          to="/Services"
          className="services_content"
          data-aos="fade-left"
          data-aos-delay="600"
        >
          <div className="title">Building remodeling and redesign</div>
          <img src={Icon2} alt="" />
          <div className="desc">
            We provide building remodeling and redesign services to help you
            create a functional and aesthetically pleasing space.
          </div>
        </Link>
        <Link
          to="/Services"
          className="services_content"
          data-aos="fade-left"
          data-aos-delay="800"
        >
          <div className="title">Office Furnishing and decor</div>
          <img src={Icon1} alt="" />
          <div className="desc">
            We specialize in helping businesses create workspaces that inspire
            creativity, productivity and a sense of well-being.
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Services;

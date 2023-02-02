import React from "react";
import "./Services.scss";
<<<<<<< Updated upstream
import Icon1 from "../../assets/images/Desk icon(1).png";
import Icon2 from "../../assets/images/Building icon(1).png";
import Icon3 from "../../assets/images/Construction helmet icon.png";
import Icon4 from "../../assets/images/Couch icon.png";
=======
import { HiArrowNarrowRight } from "react-icons/hi";
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
          <div className="title">
            Lorem ipsum dolor sit, amet consectetur adipisicing.
          </div>
          <img src={Icon3} alt="" />
=======
          <div className="title">Completion of a carcass structure</div>
          <div className="box1" />
>>>>>>> Stashed changes
          <div className="desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequuntur veritatis illum ex.
          </div>
<<<<<<< Updated upstream
=======
          <HiArrowNarrowRight className="arrow_link" />
>>>>>>> Stashed changes
        </Link>
        <Link
          to="/Services"
          className="services_content"
          data-aos="fade-left"
          data-aos-delay="400"
        >
<<<<<<< Updated upstream
          <div className="title">
            Lorem ipsum dolor sit, amet consectetur adipisicing.
          </div>
          <img src={Icon4} alt="" />
=======
          <div className="title">Furniture Refurbishing and set</div>
          <div className="box2" />
>>>>>>> Stashed changes
          <div className="desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequuntur veritatis illum ex.
          </div>
<<<<<<< Updated upstream
=======
          <HiArrowNarrowRight className="arrow_link" />
>>>>>>> Stashed changes
        </Link>
        <Link
          to="/Services"
          className="services_content"
          data-aos="fade-left"
          data-aos-delay="600"
        >
<<<<<<< Updated upstream
          <div className="title">
            Lorem ipsum dolor sit, amet consectetur adipisicing.
          </div>
          <img src={Icon2} alt="" />
=======
          <div className="title">Building remodeling and redesign</div>
          <div className="box3" />
>>>>>>> Stashed changes
          <div className="desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequuntur veritatis illum ex.
          </div>
<<<<<<< Updated upstream
=======
          <HiArrowNarrowRight className="arrow_link" />
>>>>>>> Stashed changes
        </Link>
        <Link
          to="/Services"
          className="services_content"
          data-aos="fade-left"
          data-aos-delay="800"
        >
<<<<<<< Updated upstream
          <div className="title">
            Lorem ipsum dolor sit, amet consectetur adipisicing.
          </div>
          <img src={Icon1} alt="" />
=======
          <div className="title">Office Furnishing and decor</div>
          <div className="box4" />
>>>>>>> Stashed changes
          <div className="desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequuntur veritatis illum ex.
          </div>
<<<<<<< Updated upstream
=======
          <HiArrowNarrowRight className="arrow_link" />
>>>>>>> Stashed changes
        </Link>
      </div>
    </section>
  );
};

export default Services;

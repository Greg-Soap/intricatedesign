import React from "react";
import "./Services.scss";
import Rectangle from "../../assets/images/Rectangle.png";
import ServiceImage1 from "../../assets/images/Service Image1.png";
import ServiceImage2 from "../../assets/images/Service Image2.png";
import ServiceImage3 from "../../assets/images/Service Image3.png";
import ServiceImage4 from "../../assets/images/Service Image4.png";

const Services = () => {
  return (
    <section id="services" className="services_container">
      <div className="services_title_wrapper">
        <div className="services_header">
          <img src={Rectangle} alt="" />
          <h2>WHAT WE OFFER</h2>
        </div>
        <div className="services_title">
          <h1>
            Below are some of the services we offer<span>.</span>
          </h1>
        </div>
      </div>

      <div className="services_content_wrapper">
        <div
          className="services_content"
          style={{ backgroundImage: `url("${ServiceImage1}")` }}
        >
          <h1 className="services_content_title">
            Provision of Luxury Designs.
          </h1>
          <p className="services_content_description">
            We create for you a luxurious and opulent environment suited to your
            taste. Choosing the right furniture, accessories and finishes to
            create the luxury interior design of you desire.
          </p>
        </div>
        <div
          className="services_content"
          style={{ backgroundImage: `url("${ServiceImage2}")` }}
        >
          <h1 className="services_content_title">
            Curation of high quality designs.
          </h1>
          <p className="services_content_description">
            Our responsibility is to choose and offer the greatest interior
            design and decorating ideas for a comprehensive project that is made
            just for you.
          </p>
        </div>
        <div
          className="services_content"
          style={{ backgroundImage: `url("${ServiceImage3}")` }}
        >
          <h1 className="services_content_title">
            Production of custom made pieces.
          </h1>
          <p className="services_content_description">
            We also produce and distribute high-quality kitchen accessories,
            custom home and furnishings, etc.
          </p>
        </div>
        <div
          className="services_content"
          style={{ backgroundImage: `url("${ServiceImage4}")` }}
        >
          <h1 className="services_content_title">Totality of services.</h1>
          <p className="services_content_description">
            We offer a whole-house solution for our customers. Intricate Design
            is a holistic ecosystem that can meet all of your needs
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;

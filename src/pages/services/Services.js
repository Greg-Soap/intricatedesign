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
          <h1>Viverra orci vitae vel purus tempus sed.</h1>
        </div>
      </div>

      <div className="services_content_wrapper">
        <div
          className="services_content"
          style={{ backgroundImage: `url("${ServiceImage1}")` }}
        >
          <h1 className="services_content_title">
            Duis posuere viverra convallis non nisl.
          </h1>
          <p className="services_content_description">
            Tellus purus porttitor erat ornare. Integer a aliquam enim sed ut
            sit. In velit.
          </p>
        </div>
        <div
          className="services_content"
          style={{ backgroundImage: `url("${ServiceImage2}")` }}
        >
          <h1 className="services_content_title">
            Duis posuere viverra convallis non nisl.
          </h1>
          <p className="services_content_description">
            Tellus purus porttitor erat ornare. Integer a aliquam enim sed ut
            sit. In velit.
          </p>
        </div>
        <div
          className="services_content"
          style={{ backgroundImage: `url("${ServiceImage3}")` }}
        >
          <h1 className="services_content_title">
            Duis posuere viverra convallis non nisl.
          </h1>
          <p className="services_content_description">
            Tellus purus porttitor erat ornare. Integer a aliquam enim sed ut
            sit. In velit.
          </p>
        </div>
        <div
          className="services_content"
          style={{ backgroundImage: `url("${ServiceImage4}")` }}
        >
          <h1 className="services_content_title">
            Duis posuere viverra convallis non nisl.
          </h1>
          <p className="services_content_description">
            Tellus purus porttitor erat ornare. Integer a aliquam enim sed ut
            sit. In velit.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;

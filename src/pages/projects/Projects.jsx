import React from "react";
import "./Projects.scss";
import Project1 from "../../assets/images/Rectangle 59.png";
import Project2 from "../../assets/images/Rectangle 63.png";
import Project3 from "../../assets/images/Rectangle 64.png";
import Project4 from "../../assets/images/Rectangle 65.png";

const Projects = () => {
  return (
    <section id="projects" className="Projects_container">
      <div className="Projects_title_wrapper" data-aos="fade-up">
        <h2 className="Projects_header">WHAT WE OFFER</h2>
        <h1 className="Projects_title" data-aos="fade-up" data-aos-delay="400">
          Below are some of the <span>Projects</span> we offer.
        </h1>
      </div>

      <div className="Projects_content_wrapper">
        <div
          className="Projects_content"
          data-aos="fade-right"
          data-aos-delay="400"
        >
          <img src={Project1} alt="" />
        </div>
        <div
          className="Projects_content"
          data-aos="fade-left"
          data-aos-delay="400"
        >
          <img src={Project2} alt="" />
        </div>
        <div
          className="Projects_content"
          data-aos="fade-right"
          data-aos-delay="800"
        >
          <img src={Project3} alt="" />
        </div>
        <div
          className="Projects_content"
          data-aos="fade-left"
          data-aos-delay="800"
        >
          <img src={Project4} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Projects;

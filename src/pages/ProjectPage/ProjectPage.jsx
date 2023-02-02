import React, { useEffect } from "react";
import "../ServicesPage/Style.scss";
import Nav from "../ServicesPage/Nav";
import Footer from "../../components/footer/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import one from "../../assets/images/Image(2).png";
import two from "../../assets/images/Image(3).png";
import three from "../../assets/images/Image(4).png";
import four from "../../assets/images/Image(5).png";

const ProjectPage = () => {
  const Images = [
    { id: 1, image: one },
    { id: 2, image: two },
    { id: 3, image: three },
    { id: 4, image: four },
  ];
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <>
      <Nav />
      <section className="s_container" style={{ paddingTop: "4rem" }}>
        <div className="wrapper">
          <div className="title_wrapper">
            <div className="title" data-aos="fade-up">
              PROJECT
            </div>
            <div className="header" data-aos="fade-up" data-aos-delay="200">
              This is the Project Title.
            </div>
            <div className="desc" data-aos="fade-up" data-aos-delay="400">
              This is the projects description. purus sit ipsum convallis.
              Bibendum magna lectus est mi fringilla euismod enim. Consectetur a
              lacinia consectetur ut. Facilisis malesuada et non id diam.
              Iaculis sed felis et.
            </div>
          </div>
          <div className="content_wrapper">
            {Images.map((i) => {
              return (
                <div
                  className="content"
                  key={i.id}
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <img src={i.image} alt="" />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProjectPage;

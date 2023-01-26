import React, { useEffect } from "react";
import { Content } from "./data";
import "./Style.scss";
import Hero from "./Hero";
import Contact from "../contact/Contact";
import Nav from "./Nav";
import Footer from "../../components/footer/Footer";
import Aos from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <>
      <Nav />
      <Hero />
      <section className="s_container">
        {Content.map((c) => {
          return (
            <div className="wrapper" key={c.id}>
              <div className="title_wrapper">
                <div className="title" data-aos="fade-up">
                  {c.title}
                </div>
                <div className="header" data-aos="fade-up" data-aos-delay="200">
                  {c.header}
                </div>
                <div className="desc" data-aos="fade-up" data-aos-delay="400">
                  {c.desc}
                </div>
              </div>
              <div className="content_wrapper">
                {c.cards.map((card) => {
                  return (
                    <div
                      className="content"
                      key={card.id}
                      data-aos="fade-up"
                      data-aos-delay="300"
                    >
                      <img src={card.img} alt="" />
                      <div className="text">{card.text}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </section>
      <Contact />
      <Footer />
    </>
  );
};

export default Services;

import React, { useEffect } from "react";
import Home from "./home/Home";
import Hero from "./hero/Hero";
import About from "./about/About";
import Projects from "./projects/Projects";
import Services from "./services/Services";
import Contact from "./contact/Contact";
import Aos from "aos";
import "aos/dist/aos.css";

const MainPage = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <div style={{ overflow: "hidden" }}>
      <Home />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
    </div>
  );
};

export default MainPage;

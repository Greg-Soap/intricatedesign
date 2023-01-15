import React, { useEffect } from "react";
import Home from "./home/Home";
import Hero from "./hero/Hero";
import About from "./about/About";
import Goals from "./goals/Goals";
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
      <Goals />
      <Services />
      <Contact />
    </div>
  );
};

export default MainPage;

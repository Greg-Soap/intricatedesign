import React from "react";
import Home from "./home/Home";
import About from "./about/About";
import Goals from "./goals/Goals";
import Services from "./services/Services";
import Contact from "./contact/Contact";

const MainPage = () => {
  return (
    <div>
      <Home />
      <About />
      <Goals />
      <Services />
      <Contact />
    </div>
  );
};

export default MainPage;

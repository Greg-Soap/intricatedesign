import React from "react";
import { Link } from "react-scroll";
import "./Home.scss";

const Home = () => {
  return (
    <section id="home" className="home_container">
      <div className="home_wrapper">
        <div className="home_textbox">
          <h1>Lectus eget tellus dui congue nec</h1>
          <p>
            Ut cras elementum morbi est egestas quis id pellentesque. Sed elit
            aenean nulla eget egestas. Congue vestibulum facilisis sollicitudin
            lacus interdum viverra
          </p>
          <Link
            className="home_btn"
            activeClass="active"
            smooth
            spy
            to="contact"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;

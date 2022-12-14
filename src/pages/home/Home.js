import React from "react";
import { Link } from "react-scroll";
import "./Home.scss";

const Home = () => {
  return (
    <section id="home" className="home_container">
      <div className="home_wrapper">
        <div className="home_textbox">
          <h1>INTRICATE DESIGN SPACE</h1>
          <p>
            A creative and groundbreaking interior design company, here to
            deliver on all your interiors design needs.
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

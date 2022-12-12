import React from "react";
import "./Home.scss";
import homeImage from "../../assets/images/heroimage.png";

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
          <button>Get in Touch</button>
        </div>
      </div>
      
    </section>
  );
};

export default Home;

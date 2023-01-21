import React from "react";
import { Content } from "./data";
import "./Style.scss";

const Services = () => {
  return (
    <section className="s_container">
      {Content.map((c) => {
        return (
          <div className="wrapper" key={c.id}>
            <div className="title_wrapper">
              <div className="title">{c.title}</div>
              <div className="header">{c.header}</div>
              <div className="desc">{c.desc}</div>
            </div>
            <div className="content_wrapper">
              {c.cards.map((card) => {
                return (
                  <div className="content" key={card.id}>
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
  );
};

export default Services;

import React from "react";
import PropTypes from "prop-types";
import "./Card.scss";

const Card = ({ items, cardClassWrapper, cardClass }) => {
  return (
    <div className={cardClassWrapper ? cardClassWrapper : "Card_Wrapper"}>
      {items.map((cardData) => {
        return (
          <div
            className={cardClass ? cardClass : "services_content"}
            key={cardData}
          >
            <h1 className="services_content_title">
              Duis posuere viverra convallis non nisl.
            </h1>
            <p className="services_content_description">
              Tellus purus porttitor erat ornare. Integer a aliquam enim sed ut
              sit. In velit.
            </p>
          </div>
        );
      })}
    </div>
  );
};

Card.propTypes = {
  items: PropTypes.any,
  cardClassWrapper: PropTypes.string,
  cardClass: PropTypes.string,
};
export default Card;

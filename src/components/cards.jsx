import React from "react";

const Cards = ({ id, image, title }) => {
  return (
    <div>
      <div id={id} className="home-card-section">
        <img
          src={image}
          alt="cardImages"
          className="home-card-section-img flash"
        />
        <p className="home-card-section-title">{title}</p>
      </div>
    </div>
  );
};

export default Cards;

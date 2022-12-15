import React from "react";

const HomeBanner = ({ picture, text }) => {
  return (
    <div className="home-bg">
      <img src={picture} alt="home page banner" className="home-bg-img" />
      <h3 className="home-bg-p">{text}</h3>
    </div>
  );
};

export default HomeBanner;

import React from "react";
// import { useState } from 'react';
// import Data from '../data/data';
import Image from "../assets/background-about.jpg";

const AboutPage = () => {
  return (
    <>
      <div className="about">
        <img src={Image} alt="about page img" className="about-img" />
      </div>
    </>
  );
};

export default AboutPage;

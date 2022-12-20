import React from "react";
import { useState } from "react";
import Data from "../data/collaps-data";
import Image from "../assets/background-about.jpg";
import AccordionAbout from "../components/accordionAbout";
import Navbar from "../layout/navbar";

const AboutPage = () => {
  const [data, setData] = useState(Data);
  const toggleData = (index) => {
    setData(
      data.map((accordion, i) => {
        if (i === index) {
          accordion.open = !accordion.open;
        } else {
          accordion.open = false;
        }
        return accordion;
      })
    );
  };
  return (
    <>
      <Navbar />
      <div className="about">
        <img src={Image} alt="about page img" className="about-img" />
        <div className="accordions">
          {data.map((accordion, i) => (
            <AccordionAbout
              accordion={accordion}
              index={i}
              toggleData={toggleData}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutPage;

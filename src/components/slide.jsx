// The react useState hook allwos us to track state in a function component
// The useState hook can be used to keep track of strings, numbers, booleans, arrays, objects and any combination of these.
import React, { useState } from "react";
// import react-icons
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const Slide = ({ slides }) => {
  // current is current state, setCurrent is function to update the state, useStat(0) is initial value.

  let [current, setCurrent] = useState(0);
  let length = slides.length;

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  return (
    <div className="slider">
      {/* if slide length is greater than 1 execute prevSlide() and nextSlide function*/}
      {length > 1 && (
        <FaArrowAltCircleLeft
          className="slider-arrow-left"
          onClick={prevSlide}
        />
      )}
      {length > 1 && (
        <FaArrowAltCircleRight
          className="slider-arrow-right"
          onClick={nextSlide}
        />
      )}
      {slides.map((image, index) => {
        return (
          <img
            key={index}
            className={
              index === current ? "slider-slide-active" : "slider-slide"
            }
            src={image}
            alt="card images"
          />
        );
      })}
    </div>
  );
};
export default Slide;

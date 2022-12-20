import React, { useState } from "react";
import arrow from "../assets/arrow-down.png";

const AccordionDescription = ({ title, content }) => {
  const [accordion, setAccordion] = useState(false);

  return (
    <div className="accordion-main-container ">
      <div className="accordion-main-header">
        <div className="accordion-main-title">{title}</div>
        <div
          onClick={() => setAccordion(!accordion)}
          className={`accordion-main-arrow-down ${accordion}`}
        >
          <img src={arrow} alt="arrow" />
        </div>
      </div>
      {accordion && <div className="accordion-main-content">{content}</div>}
    </div>
  );
};

export default AccordionDescription;

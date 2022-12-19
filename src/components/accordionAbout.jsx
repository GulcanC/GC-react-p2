import React from "react";

const accordionAbout = ({ accordion, index, toggleData }) => {
  return (
    <div
      className={"accordion " + (accordion.open ? "open" : "")}
      key={index}
      onClick={() => toggleData(index)}
    >
      <div className="accordion-title">{accordion.title}</div>
      <div className="accordion-content">{accordion.content}</div>
    </div>
  );
};

export default accordionAbout;

// burada accordionun acik olup olmamasina gore classname degisecek.
// https://www.youtube.com/watch?v=jwp-cYZbgic
// bu videodan bak

import React from "react";
// import useParams to get id of the image
import { useParams } from "react-router-dom";
import SliderData from "../data/data.json";
import Slide from "../components/slide";
import { BsStarFill, BsStar, BsStarHalf } from "react-icons/bs";
import AccordionDescription from "../components/accordionDescription";

const MainPage = () => {
  // find id of the choosed image
  const imageId = useParams();
  console.log(imageId);

  // find all information of the choosed image
  const imageInf = SliderData.find((card) => card.id === imageId.id);
  console.log(imageInf);

  // RATING

  // Round to nearest half, because I want to use rating like 4.5, 3.5, ...
  // if rating is 2.1 or 2.2 it will convert to 2, but it is 2.3 or 2.4 it will convert it to 2.5
  const rating = Math.round(imageInf.rating * 2) / 2;
  console.log(rating);
  let stars = [];

  // use push method to append all the filled whole stars
  for (var i = 1; i <= rating; i++) {
    console.log("i = " + i);
    stars.push(<BsStarFill />);
  }
  console.log("i = " + i);

  // If there is a half a star, append it
  if (i - rating === 0.5) stars.push(<BsStarHalf />);

  // Fill the empty stars
  for (var j = 5 - rating; j >= 1; j--) stars.push(<BsStar />);

  // ACCORDION EQUIPMENTS
  const equipments = imageInf.equipments.map((equipment, i) => {
    return <li key={i}>{equipment}</li>;
  });

  return (
    <>
      {imageInf && (
        <>
          <Slide slides={imageInf.pictures} />
          <div className="image-info">
            <div className="image-info-left">
              <h3 className="image-title">{imageInf.title}</h3>
              <p className="image-location">{imageInf.location}</p>
              <ul className="image-tags">
                {imageInf.tags.map((tag, index) => (
                  <li key={index}>{tag}</li>
                ))}
              </ul>
            </div>

            <div className="image-info-right">
              <div className="host">
                <p className="host-name">{imageInf.host.name}</p>
                <img
                  src={imageInf.host.picture}
                  alt="images"
                  className="host-picture"
                />
              </div>
              <div className="host-rating">{stars}</div>
            </div>
          </div>

          <div className="accordion-container">
            <AccordionDescription
              title="Description"
              content={imageInf.description}
            />
            <AccordionDescription title="Equipments" content={equipments} />
          </div>
        </>
      )}
    </>
  );
};

export default MainPage;

import React from "react";
// import useParams to get id of the image
import { useParams } from "react-router-dom";
import SliderData from "../data/data.json";
import Slide from "../components/slide";

const MainPage = () => {
  // find id of the choosed image
  const imageId = useParams();
  console.log(imageId);

  // find all information of the choosed image
  const imageInf = SliderData.find((card) => card.id === imageId.id);
  console.log(imageInf);

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
              <p className="host-name">{imageInf.host.name}</p>
              <img
                src={imageInf.host.picture}
                alt=""
                className="host-picture"
              />
              <span className="host-rating">{imageInf.rating}</span>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MainPage;

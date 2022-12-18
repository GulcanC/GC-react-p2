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
        <div>
          <Slide slides={imageInf.pictures} />
        </div>
      )}
    </>
  );
};

export default MainPage;

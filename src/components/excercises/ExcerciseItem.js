import React from "react";
import { excerciseData } from "../../assets/data";
const ExcerciseItem = ({ item: { name, bodyPart, equipment, target } }) => {
  const image = excerciseData.find((data) => data.name === target);

  console.log(image);

  return (
    <div className="excercise-item">
      <div className="excercise-item_img">
        <img src={image.image} alt="body part or equipment" />
      </div>
      <div className="excercise-item_info">
        <span>{name.substr(0, 20) + "\u2026"}</span>
        <div>
          <p>{equipment}</p>
          <p>{bodyPart}</p>
        </div>
      </div>
    </div>
  );
};

export default ExcerciseItem;

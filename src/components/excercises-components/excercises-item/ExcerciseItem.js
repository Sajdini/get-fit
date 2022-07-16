import React from "react";
import { Link } from "react-router-dom";
import { excerciseData } from "../../../assets/data";
import "./ExcercisesItem.css";

const ExcerciseItem = ({ item: { name, bodyPart, equipment, target, id } }) => {
  const image = excerciseData.find((data) => data.name === target);

  console.log(image);
  const trimmedName = name.length > 25 ? name.substr(0, 25) + "\u2026" : name;

  return (
    <div className="excercise-item">
      <Link to={`/excercise/${id}`} />
      <div className="excercise-item_img">
        <img src={image.image} alt="body part or equipment" />
      </div>
      <div className="excercise-item_info">
        <span>{trimmedName}</span>
        <div>
          <p>{equipment}</p>
          <p>{bodyPart}</p>
        </div>
      </div>
    </div>
  );
};

export default ExcerciseItem;

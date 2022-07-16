import React from "react";
import { IoMdBody, IoMdFitness } from "react-icons/io";
import { GiMuscularTorso } from "react-icons/gi";
import "./Excercise.css";
const ExcerciseDetails = (props) => {
  const { data } = props;
  console.log(data);
  return (
    <div className="excercise-container_flex">
      <div className="excercise-img_container">
        <img src={data.gifUrl} alt="man excercising " />
      </div>
      <div className="excercise-description_container">
        <div>
          <h2>{data.name}</h2>
          <span>Four sets of 10 repetitions</span>
        </div>
        <div className="excercise-description_badges">
          <p>
            <IoMdBody /> {data.bodyPart}
          </p>
          <p>
            <IoMdFitness /> {data.equipment}
          </p>
          <p>
            <GiMuscularTorso /> {data.target}
          </p>
        </div>
        <div className="excercise-description_text">
          <span>
            <strong style={{ textTransform: "capitalize" }}>{data.name}</strong>{" "}
            is a perfect excercise for your {data.target}. Refer to the videos
            below for more info.
          </span>
        </div>
      </div>
    </div>
  );
};

export default ExcerciseDetails;

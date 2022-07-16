import React from "react";
import { Link } from "react-router-dom";

const CardItem = (props) => {
  return (
    <div className="card">
      <Link to={`/list/${props.name}`} />
      <div className="card-img_holder">
        <img src={props.image} alt="body part or muscle" />
      </div>
      <div className="card-title">
        <span>{props.name}</span>
      </div>
    </div>
  );
};

export default CardItem;

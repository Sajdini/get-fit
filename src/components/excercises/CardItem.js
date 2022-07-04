import React from "react";

const CardItem = (props) => {
  return (
    <div className="card">
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

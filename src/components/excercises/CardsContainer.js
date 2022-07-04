import React from "react";
import { cardData } from "../../assets/data";
import CardItem from "./CardItem";
const CardsContainer = () => {
  return (
    <>
      <h3>... or choose from the categories below</h3>
      <div className="cards-container">
        {cardData.map((data, index) => {
          return <CardItem key={index} name={data.name} image={data.image} />;
        })}
      </div>
    </>
  );
};

export default CardsContainer;

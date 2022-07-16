import React, { useContext } from "react";
import HttpContext from "../../../context/http-context";
import Suggestion from "./Suggestion";

import "./Suggestions.css";
const Suggestions = (props) => {
  const ctx = useContext(HttpContext);
  const { data } = ctx;
  const { bodyPart, equipment, target } = props.dataItem[0];

  const dataByBodyPart = data.filter((item) => item.bodyPart === bodyPart);

  const dataByTarget = data.filter((item) => item.target === target);
  const dataByEquipment = data.filter((item) => item.equipment === equipment);

  return (
    <div className="suggestions-container">
      <Suggestion data={dataByBodyPart} title={bodyPart} />
      <Suggestion data={dataByTarget} title={target} />
      <Suggestion data={dataByEquipment} title={equipment} />
    </div>
  );
};

export default Suggestions;

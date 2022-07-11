import React, { useContext } from "react";
import HttpContext from "../context/http-context";
import { useParams } from "react-router-dom";

import ExcerciseItem from "../components/excercises/ExcerciseItem";

const Excercises = () => {
  const ctx = useContext(HttpContext);

  const params = useParams().excerciseList;
  console.log(ctx.data);
  console.log(params);

  const dataFiltered = ctx.data.filter(
    (category) =>
      category.bodyPart === params ||
      category.equipment === params ||
      category.name === params ||
      category.target === params
  );

  return (
    <div className="container " style={{ marginTop: 0, maxWidth: "140rem" }}>
      <h3 style={{ color: "#fff", marginLeft: "4rem" }}>
        Results for {params}
      </h3>
      <div className="excercise-container">
        {dataFiltered.map((item, index) => {
          return <ExcerciseItem item={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Excercises;

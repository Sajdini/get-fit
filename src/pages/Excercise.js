import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import HttpContext from "../context/http-context";

import ExcerciseDetails from "../components/excercise-detail-components/excercise/ExcerciseDetails";
import ExcerciseVideos from "../components/excercise-detail-components/video/ExcerciseVideos";
import Suggestions from "../components/excercise-detail-components/suggestions/Suggestions";

const Excercise = () => {
  const ctx = useContext(HttpContext);
  const { data } = ctx;
  const params = useParams().id;

  const excercise = data.filter((item) => item.id === params);

  console.log(excercise[0].name);

  return (
    <div style={{ width: "100%" }} id="excercise">
      <ExcerciseDetails data={excercise[0]} />
      <ExcerciseVideos name={excercise[0].name} />
      <Suggestions dataItem={excercise} />
    </div>
  );
};

export default Excercise;

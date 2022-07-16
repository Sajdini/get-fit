import React, { useContext } from "react";
import HttpContext from "../context/http-context";
import { useParams, Link } from "react-router-dom";

import ExcerciseItem from "../components/excercises-components/excercises-item/ExcerciseItem";
import Pagination from "../components/excercises-components/paginate/Pagination";

import "./Excercises.css";
const Excercises = () => {
  const ctx = useContext(HttpContext);
  const { data, page } = ctx;
  const params = useParams().excerciseList;

  // this is used to
  const dataFiltered = data.filter(
    (category) =>
      category.bodyPart === params ||
      category.equipment === params ||
      category.name === params ||
      category.target === params
  );
  console.log(dataFiltered);
  // this is used for Pagination
  const dataPaginated = dataFiltered.slice((page - 1) * 15, page * 15);

  /* i use datalength to get the number of pages that will be created by paginating dataFiltered
 WITH Math.ceil  I MAKE SURE THAT IF MORE COUNTRIES ARE ADDED IN THE FUTURE, THEY WILL APPEAR IN ANOTHER PAGE THAT WILL BE CREATED*/
  const dataLength = Math.ceil(dataFiltered.length / 15);

  let results;
  if (dataFiltered.length === 0) {
    results = (
      <>
        <div className="error-container">
          <div className="error">
            <h2>No results found for "{params}"</h2>
          </div>
          <div className="back-button">
            <Link to="/">Back</Link>
          </div>
        </div>
      </>
    );
  } else {
    results = (
      <div className="container " style={{ maxWidth: "140rem" }}>
        <h3 style={{ color: "#fff", marginLeft: "4rem" }}>
          Results for {params}
        </h3>
        <div className="excercises-container" id="list">
          {dataPaginated.map((item, index) => {
            return <ExcerciseItem item={item} key={index} />;
          })}
        </div>
        <Pagination datapage={dataLength} />
      </div>
    );
  }
  return results;
};

export default Excercises;

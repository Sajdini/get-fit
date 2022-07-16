import React, { useContext } from "react";
import "./Pagination.css";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import HttpContext from "../../../context/http-context";

const Pagination = (props) => {
  const ctx = useContext(HttpContext);
  const { increment, decrement, page } = ctx;
  console.log(props.datapage);
  const incrementHandler = () => {
    if (page === props.datapage) return;
    increment();
  };

  const decrementHandler = () => {
    if (page === 1) return;
    decrement();
  };

  return (
    <div className="paginate-container">
      <BsArrowLeftCircle onClick={decrementHandler} />
      <div className="paginate-indicator ">
        <span style={{ margin: 0 }}>
          {page}/{props.datapage}
        </span>
      </div>
      <BsArrowRightCircle onClick={incrementHandler} />
    </div>
  );
};

export default Pagination;

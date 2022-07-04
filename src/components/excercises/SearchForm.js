import React from "react";
import { BsSearch } from "react-icons/bs";
const SearchForm = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div id="excercises" className="form-container">
      <h2>Search for your desired excercise below</h2>
      <form onSubmit={submitHandler} className="form">
        <label htmlFor="input"></label>
        <input
          id="#input"
          type="text"
          placeholder="You can search for an excercise, a particual body part related excercises, or an equipment"
        />
        <button type="button">
          <BsSearch />
        </button>
      </form>
    </div>
  );
};

export default SearchForm;

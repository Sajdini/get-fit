import React from "react";
import CardsContainer from "../bodypart-cards/CardsContainer";

import SearchForm from "./SearchForm";
import "./Search.css";
const SearchComponent = () => {
  return (
    <section
      id="excercises"
      className="excercises "
      style={{ paddingTop: "2rem" }}
    >
      <div className="container">
        <div className="backdrop">
          <SearchForm />
          <CardsContainer />
        </div>
      </div>
    </section>
  );
};

export default SearchComponent;

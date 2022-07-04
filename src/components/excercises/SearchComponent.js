import React from "react";
import CardsContainer from "./CardsContainer";
import "./Excercises.css";
import SearchForm from "./SearchForm";

const SearchComponent = () => {
  return (
    <section className="excercises " style={{ paddingTop: "2rem" }}>
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

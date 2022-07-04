import React from "react";
import HeroComponent from "../components/hero/HeroComponent";
import SearchComponent from "../components/excercises/SearchComponent";
const Home = () => {
  return (
    <div className="layout">
      <HeroComponent />
      <SearchComponent />
    </div>
  );
};

export default Home;

import React from "react";
import HeroComponent from "../components/home-components/hero/HeroComponent";
import SearchComponent from "../components/home-components/search/SearchComponent";
const Home = () => {
  return (
    <div className="layout">
      <HeroComponent />
      <SearchComponent />
    </div>
  );
};

export default Home;

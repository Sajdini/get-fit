import React from "react";
import "./HeroComponents.css";
import heroImg from "../../../assets/images/hero1-img.jpg";
const HeroComponent = () => {
  return (
    <section className="hero container" id="/">
      <div className="hero-title_and-text">
        <h1>The best free training guide out there</h1>
        <div>
          <span>
            Guide yourself throughout your fitness training routines without
            mentorship
          </span>

          <a href="#excercises">Start Now</a>
        </div>
      </div>
      <div className="hero-image">
        <img src={heroImg} alt="" />
      </div>
    </section>
  );
};

export default HeroComponent;

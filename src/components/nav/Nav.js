import React from "react";
import "./Nav.css";
import logo from "../../assets/icons/logo.png";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav className="nav-container">
      <div className="nav">
        <div className="img-container">
          <img src={logo} alt="dumbell" />
        </div>
        <div className="nav-Links">
          <Link to="/" className="outline above-line">
            <span>Home</span>
          </Link>
          <a href="#excercises" className="outline above-line">
            <span>Lets rock and roll</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

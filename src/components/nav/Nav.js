import React from "react";
import "./Nav.css";
import logo from "../../icons/logo.png";
const Nav = () => {
  return (
    <nav className="nav-container">
      <div className="nav">
        <div className="img-container">
          <img src={logo} alt="dumbell" />
        </div>
        <div className="nav-Links">
          <a className="outline above-line">Home</a>
          <a className="outline above-line">Lets rock and roll</a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

import React from "react";
import "./Header.css";
import logo from "../../../assets/icons/logo.png";
import { Link, useLocation } from "react-router-dom";
const Header = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  let path;
  path = pathname.split("/")[1];
  console.log(path);

  return (
    <nav id="nav" className="nav-container">
      <div className="nav">
        <div className="img-container">
          <Link to="/" />
          <img src={logo} alt="dumbell" />
        </div>
        <div className="nav-Links">
          <Link to="/" className="outline above-line">
            <span>Home</span>
          </Link>
          <a
            href={`#${path ? path : "excercises"}`}
            className="outline above-line"
          >
            <span>Excercises</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;

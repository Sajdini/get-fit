import React from "react";
import "./Footer.css";

import logo from "../../../assets/icons/logo.png";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { MdFitnessCenter } from "react-icons/md";
import { BsGithub, BsLinkedin, BsFacebook, BsGoogle } from "react-icons/bs";

const Footer = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  let path;
  path = pathname.split("/")[1];

  return (
    <section className="footer-section">
      <div className="footer-container">
        <div className="img-container">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <h3>Get Fit App</h3>
        <div className="links background">
          <a href={`#${path ? path : "excercises"}`}>
            <MdFitnessCenter /> Excercises
          </a>
          <Link to="/">
            <AiOutlineHome /> Home
          </Link>
        </div>
        <div className="info background">
          <span>Samir Ajdini</span>
          <p>Junior web developer</p>
          <p>Skopje,Macedonia</p>
          <a href="tel:+38970670731">+38970670731</a>
        </div>

        <div className="links background">
          <a href="mailto:ajdinis1993@gmail.com">
            <BsGoogle /> Mail
          </a>
          <a href="https://github.com/Sajdini">
            <BsGithub /> Github
          </a>
          <a href="https://www.linkedin.com/in/samir-ajdini/">
            <BsLinkedin /> LinkedIn
          </a>
          <a href="https://www.facebook.com/samir.ajdini/">
            <BsFacebook /> Facebook
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;

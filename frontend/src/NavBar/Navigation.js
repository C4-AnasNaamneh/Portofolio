import React from "react";
import { Link } from "react-router-dom";

import "./Navigation.css";

const Navigation = () => {
  return (
    <>
      <div className="nav">
        <h1 className="webName">Portofolio</h1>

        <Link to="/" className="homeLink">
          Home
        </Link>

        <a href="/#about" className="aboutMeLink">
          About Me
        </a>

        {/* <a
          className="resumeLink"
          href="https://drive.google.com/file/d/1gRGtyoVJ-yTc9Y63mmdjoRz98BgnEZyX/view?usp=sharing"
          target="_blank"
        >
          Resume



        </a> */}



        <a href="/#projects" className="ProjectsLink">Projects</a>

        <a href="mailto:naamnih.anas@gmail.com" className="contactMeLink">
          Contact Me
        </a>
      </div>
    </>
  );
};

export default Navigation;

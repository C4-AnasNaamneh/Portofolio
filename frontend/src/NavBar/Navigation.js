import React from "react";
import { Link } from "react-router-dom";

import "./Navigation.css";

const Navigation = () => {
  return (
    <>
      <div className="nav">
        <h1 className="webName">Portofolio</h1>

<div>
        <Link to="/" className="homeLink">
          Home
        </Link>
        </div>

<div>
        <a href="/#about" className="aboutMeLink">
          About Me
        </a>

        </div>
        <div>
         <a
          className="resumeLink"
          href="https://drive.google.com/file/d/1sS4FMjMWRImbleeGozeatpmoHc54sR_N/view?usp=sharing"
          target="_blank"
        >
          Resume



        </a> 
        </div>


<div>
        <a href="/#projects" className="ProjectsLink">Projects</a>
        </div>

<div>
        <a href="mailto:naamnih.anas@gmail.com" className="contactMeLink">
          Contact Me
        </a>
        </div>
      </div>
    </>
  );
};

export default Navigation;

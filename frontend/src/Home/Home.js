import React from "react";
import { icons } from "react-icons";
import { useState } from "react";
import "./Home.css";

import { AiFillGithub } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { AiFillLinkedin } from "react-icons/ai";
import { RiPhoneFill } from "react-icons/ri";
import {AiOutlineArrowUp} from "react-icons/ai"

const Home = () => {

  const [showScroll, setShowScroll] = useState(false);


  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);








  return (
    <>
      <header className="headerHome">
        <main className="main">
          <section className="whatDo">
            <h3 id="Welcome">Hello,I'M Anas Naamneh</h3>
            <h1 id="header">
              I am <span className="change_content"></span>
            </h1>
            <br />
            <br />
            {/* <a className="hire">Hire Me</a> */}
            <a
              className="getResume"
              href="https://drive.google.com/file/d/1gRGtyoVJ-yTc9Y63mmdjoRz98BgnEZyX/view?usp=sharing"
              target="_blank"
            >
              Get Resume
            </a>
            <br />
            <br /> <br />
            <div className="icons">
            <a className="mail" href="mailto:naamnih.anas@gmail.com">
              <MdEmail></MdEmail>
            </a>
            <a
              className="github"
              href="https://github.com/AnasNaamneh"
              target="_blank"
            >
              <AiFillGithub></AiFillGithub>
            </a>
            <a
              className="linkedin"
              href="https://www.linkedin.com/in/anasnaamneh/"
              target="_blank"
            >
              <AiFillLinkedin></AiFillLinkedin>
            </a>
            <a className="phone" href="tel:962788035043" target="_blank">
              <RiPhoneFill></RiPhoneFill>
            </a>
            </div>
          </section>
        </main>
      </header>
<section className="about" id="about">
<div className="contentAbout">
<img src="./image/programming.jpg" />
<div className="contentText">

<h1>About Me</h1>
<br/>
<p>A motivated individual with knowledge of languages and development tools, seeking a position in a growth-oriented company where I can use my skills to the advantage of the company while having the scope to develop my own skills.</p>
<div className="footer">
<a className="mail" href="mailto:naamnih.anas@gmail.com">
              <MdEmail></MdEmail>
            </a>
            <a
              className="github"
              href="https://github.com/AnasNaamneh"
              target="_blank"
            >
              <AiFillGithub></AiFillGithub>
            </a>
            <a
              className="linkedin"
              href="https://www.linkedin.com/in/anasnaamneh/"
              target="_blank"
            >
              <AiFillLinkedin></AiFillLinkedin>
            </a>
            <a className="phone" href="tel:962788035043" target="_blank">
              <RiPhoneFill></RiPhoneFill>
            </a>
            </div>
</div>

</div>
<AiOutlineArrowUp
        className="scrollTop"
        onClick={scrollTop}
        style={{ height: 50, display: showScroll ? "flex" : "none" }} title="scroll top"
      ></AiOutlineArrowUp>

</section>

    </>
  );
};

export default Home;

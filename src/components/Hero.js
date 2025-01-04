import React from "react";
import "../css/style.css";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
export default function Hero() {
  return (
    <section
      id="hero"
      className="d-flex flex-column justify-content-center img-fluid"
      data-section="hero"
    >
      <div className="container" data-aos="zoom-in" data-aos-delay="100">
        <h1>Rishabh Shairy</h1>
        <p>I'm a Software Engineer</p>
        <div className="social-links">
          <a href="https://github.com/rishabhshairy" target="blank">
            {" "}
            <BsGithub />
          </a>
          <a href="https://leetcode.com/u/shairy/" target="blank">
            <SiLeetcode />
          </a>
          <a
            href="https://www.linkedin.com/in/rishabhshairy/"
            className="linkedin"
            target="blank"
          >
            <BsLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
}

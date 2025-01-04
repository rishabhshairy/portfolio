import React from "react";
import "../css/style.css";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
export default function Footer() {
  return (
    <footer id="footer">
      <div className="container container-small">
        <h3>Rishabh Shairy</h3>
        <a href="mailto:rishabhshairy29@gmail.com">rishabhshairy29@gmail.com</a>
        <div className="social-links">
          <a href="https://github.com/rishabhshairy" target="blank">
            {" "}
            <BsGithub />
          </a>
          <span style={{padding:"5px"}}></span>
          <a href="https://leetcode.com/u/shairy/" target="blank">
            <SiLeetcode />
          </a>
          <span style={{padding:"5px"}}></span>
          <a
            href="https://www.linkedin.com/in/rishabhshairy/"
            className="linkedin"
            target="blank"
          >
            <BsLinkedin />
          </a>
        </div>
        <div>
          <p className="justify-content-center">
            Hosted on GitHub Pages with{" "}
            <span
              className="bx bxs-heart"
              style={{ color: "red", fontSize: "22px", marginTop: "4px" }}
            ></span>
          </p>
          <p className="justify-content-center">
            Automated Deployment Using Travis CI{" "}
            <span
              className="bx bxs-rocket"
              style={{ color: "cadetblue", fontSize: "20px", marginTop: "4px" }}
            ></span>
          </p>
        </div>
        <div className="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>MyResume</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits">
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
      </div>
    </footer>
  );
}

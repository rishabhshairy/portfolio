import React from "react";
import "../css/style.css";
export default function Hero() {
  return (
    <div>
      <div id="hero" className="d-flex flex-column justify-content-center" style={{margin:"60px 0"}}>
        <div className="container" data-aos="zoom-in" data-aos-delay="100">
          <h1>Rishabh Shairy</h1>
          <p>I'm Software Engineer</p>
          <div className="social-links">
            <a
              href="https://github.com/rishabhshairy"
              className="github"
              target="blank"
            >
              <i className="bx bxl-github"></i>
            </a>
            {/* <a href="#" className="google-plus">
              <i className="bx bxl-skype"></i>
            </a> */}
            <a
              href="https://www.linkedin.com/in/rishabhshairy/"
              className="linkedin"
              target="blank"
            >
              <i className="bx bxl-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

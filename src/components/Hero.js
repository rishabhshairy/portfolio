import React from "react";
import "../css/style.css";
export default function Hero() {
  return (
    <div>
      <div id="hero" class="d-flex flex-column justify-content-center">
        <div class="container" data-aos="zoom-in" data-aos-delay="100">
          <h1>Rishabh Shairy</h1>
          <p>
            I'm Software Engineer
          </p>
          <div class="social-links">
            <a href="https://github.com/rishabhshairy" class="github" target="blank">
              <i class="bx bxl-github"></i>
            </a>
            {/* <a href="#" class="google-plus">
              <i class="bx bxl-skype"></i>
            </a> */}
            <a href="https://www.linkedin.com/in/rishabhshairy/" class="linkedin" target="blank">
              <i class="bx bxl-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

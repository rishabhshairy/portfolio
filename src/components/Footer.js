import React from "react";
import "../css/style.css";
export default function Footer() {
  return (
      <footer id="footer">
        <div className="container container-small">
          <h3>Rishabh Shairy</h3>
          <a href="mailto:rishabhshairy29@gmail.com">
            rishabhshairy29@gmail.com
          </a>
          <div className="social-links">
            <a href="https://github.com/rishabhshairy" className="github">
              <i className="bx bxl-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/rishabhshairy/"
              className="linkedin"
            >
              <i className="bx bxl-linkedin"></i>
            </a>
            <p className="justify-content-center"> 
              Hosted on GitHub Pages with{" "}
              <span
                className="bx bxs-heart"
                style={{ color: "red", fontSize:"22px",marginTop:"4px" }}
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

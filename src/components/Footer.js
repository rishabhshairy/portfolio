import React from "react";
import "../css/style.css";
export default function Footer() {
  return (
    <div id="footer">
      <footer id="footer">
        <div className="container">
          <h3>Rishabh Shairy</h3>
          <a href="mailto:rishabhshairy29@gmail.com">
          rishabhshairy29@gmail.com
          </a>
          <p></p>
          <div className="social-links">
            <a href="https://github.com/rishabhshairy" className="github">
              <i className="bx bxl-github"></i>
            </a>
            {/* <a href="#" className="facebook">
              <i className="bx bxl-facebook"></i>
            </a> */}
            {/* <a href="#" className="instagram">
              <i className="bx bxl-instagram"></i>
            </a> */}
            {/* <a href="#" className="google-plus">
              <i className="bx bxl-skype"></i>
            </a> */}
            <a href="https://www.linkedin.com/in/rishabhshairy/" className="linkedin">
              <i className="bx bxl-linkedin"></i>
            </a>
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
    </div>
  );
}

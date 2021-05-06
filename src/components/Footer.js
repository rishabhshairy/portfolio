import React from "react";
import "../css/style.css";
export default function Footer() {
  return (
    <div id="footer">
      <footer id="footer">
        <div class="container">
          <h3>Rishabh Shairy</h3>
          <a href="mailto:rishabhshairy29@gmail.com">
          rishabhshairy29@gmail.com
          </a>
          <p></p>
          <div class="social-links">
            <a href="https://github.com/rishabhshairy" class="github">
              <i class="bx bxl-github"></i>
            </a>
            {/* <a href="#" class="facebook">
              <i class="bx bxl-facebook"></i>
            </a> */}
            {/* <a href="#" class="instagram">
              <i class="bx bxl-instagram"></i>
            </a> */}
            {/* <a href="#" class="google-plus">
              <i class="bx bxl-skype"></i>
            </a> */}
            <a href="https://www.linkedin.com/in/rishabhshairy/" class="linkedin">
              <i class="bx bxl-linkedin"></i>
            </a>
          </div>
          <div class="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>MyResume</span>
            </strong>
            . All Rights Reserved
          </div>
          <div class="credits">
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

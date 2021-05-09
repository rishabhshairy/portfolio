import React from "react";
import "../css/style.css";
export default function Sidebar() {
  return (
    <div id="header" className="d-flex flex-column justify-content-center">
      <nav className="nav-menu">
        <ul>
          <li className="active">
            <a href="#hero">
              <i className="bx bx-home"></i> <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#about">
              <i className="bx bx-user"></i> <span>About</span>
            </a>
          </li>
          <li>
            <a href="#resume">
              <i className="bx bx-file-blank"></i> <span>Resume</span>
            </a>
          </li>
          <li>
            <a href="#portfolio">
              <i className="bx bx-book-content"></i> <span>Projects</span>
            </a>
          </li>
          <li>
            <a href="#services">
              <i className="bx bx-server"></i> <span>Certifications</span>
            </a>
          </li>
          <li>
            <a href="#footer">
              <i className="bx bx-envelope"></i> <span>Contact</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

import React from "react";
import "../css/style.css";
import profileImage from "../img/profile-pic.jpg";
export default function About() {
  const about = `Software Engineer with over 1.5 years of experience. Achievement
  Driven and eager to contribute to success through challenging
  tasks, hard work and dedication. Skilled in technical aspects
  like coding of modules using the given design specifications,
  debugging and fixing the defects as well as analysing the root
  cause of the same.Rich exposure in the Software Development
  Lifecycle (SDLC) right from requirement analysis, documentation
  (functional specifications, technical design), coding and
  debugging.`;
  return (
    <div>
      <div id="about" className="about" style={{ padding: "60px 0" }}>
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>About</h2>
          </div>

          <div className="row about">
            <div className="col-lg-4">
              <img src={profileImage} className="img-fluid" alt="" />
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content">
              <h3>Full Stack Web Developer.</h3>
              <p></p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="icofont-rounded-right"></i>{" "}
                      <strong>Date Of Birth:</strong> 29 May 1996
                    </li>
                    <li>
                      <i className="icofont-rounded-right"></i>{" "}
                      <strong>City:</strong> Bengaluru, Karnataka
                    </li>
                    <li>
                      <i className="icofont-rounded-right"></i>{" "}
                      <strong>Email:</strong> rishabhshairy29@gmail.com
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="icofont-rounded-right"></i>{" "}
                      <strong>Age:</strong> 24
                    </li>
                    <li>
                      <i className="icofont-rounded-right"></i>{" "}
                      <strong>Degree:</strong> B.Tech
                    </li>
                  </ul>
                </div>
              </div>
              <p>{about}</p>
            </div>
          </div>
        </div>
      </div>
      <div
        id="skills"
        className="skills section-bg"
        style={{ padding: "5px 0" }}
      >
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Skills</h2>
          </div>

          <div className="row skills-content">
            <div className="col-lg-6">
              <div className="progress">
                <span className="skill">
                  JAVA <i className="val">85%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill">
                  Spring Boot <i className="val">65%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "65%" }}
                  ></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill">
                  HTML & CSS <i className="val">90%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill">
                  JavaScript <i className="val">75%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="progress">
                <span className="skill">
                  SQL <i className="val">80%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="80"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill">
                  GIT <i className="val">90%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill">
                  REACT JS <i className="val">55%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="55"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "55%" }}
                  ></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill">
                  Python <i className="val">60%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="60"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "60%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

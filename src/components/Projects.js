import React, { useState } from "react";
import eCommProject from "../img/portfolio/eCommProject.jpg";
import wanderlust from "../img/portfolio/portfolio-7.jpg";
import fullStackProj from "../img/portfolio/fullStackProj.jpg";
import Modal from "react-bootstrap/Modal";
import { projectData } from "../static/projectDetails";
import "../css/style.css";

function ProjectModal(props) {
  const project = props.project;
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {project.projectName}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h3>{project.company}</h3>
        <span style={{ color: "#BDBDBD" }}>
          <h6>{project.year}</h6>{" "}
        </span>
        <p>{project.details.description}</p>
        <p style={{ fontWeight: "bold" }}>Roles and Responsibilities</p>
        <div style={{ padding: "15px" }}>
          <ul>
            {project.details.responsibilities.map((res) => {
              return <li>{res}</li>;
            })}
          </ul>
        </div>

        {project.details.tech.map((tech) => {
          return (
            <p>
              <span style={{ fontWeight: "bold" }}>{Object.keys(tech)}</span>
              <span>{`: `}</span>
              <span>{tech[Object.keys(tech)]}</span>
            </p>
          );
        })}
      </Modal.Body>
    </Modal>
  );
}

export default function Projects() {
  const [modalShow, setModalShow] = useState({});
  const projectDetails = projectData;
  return (
    <div id="portfolio" style={{ padding: "60px 0", bottom: "40px" }}>
      <div className="section-title">
        <h2>Projects</h2>
        <p>Completed these projects during my professional experience.</p>
      </div>
      <div className="container">
        <div
          id="projectCarousel"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            {projectDetails.map((proj) => {
              return (
                <div
                  className={
                    proj.id === 1 ? "carousel-item active" : "carousel-item"
                  }
                  key={proj.id}
                >
                  <img
                    className="d-block w-100 img-fluid"
                    src={
                      proj.image === "eCommProject"
                        ? eCommProject
                        : proj.image === "wanderlust"
                        ? wanderlust
                        : fullStackProj
                    }
                    alt="slide"
                  />
                  <div class="carousel-caption d-none d-md-block">
                    <h1>
                      {proj.projectName.length > 18
                        ? proj.projectName.substring(0, 18)
                        : proj.projectName}
                    </h1>
                    <p>{proj.role}</p>
                    <button
                      className="btn btn-light justify-content-center"
                      onClick={() =>
                        setModalShow({ ["show_" + proj.id]: true })
                      }
                    >
                      <i className="bx bx-show"></i>
                      {` View Details`}
                    </button>
                    <ProjectModal
                      show={modalShow["show_" + proj.id]}
                      onHide={() =>
                        setModalShow({ ["show_" + proj.id]: false })
                      }
                      project={proj}
                    ></ProjectModal>
                  </div>
                </div>
              );
            })}
          </div>
          <a
            className="carousel-control-prev center"
            href="#projectCarousel"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next center"
            href="#projectCarousel"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import eCommProject from "../img/portfolio/eCommProject.jpg";
import wanderlust from "../img/portfolio/portfolio-7.jpg";
import fullStackProj from "../img/portfolio/fullStackProj.jpg";
import Modal from "react-bootstrap/Modal";
import data from "../static/projectDetails.json";

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
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
    </Modal>
  );
}
export default function Projects() {
  const [modalShow, setModalShow] = useState({});
  const projectDetails = data.projectDetails;
  return (
    <div
      id="portfolio"
      className="portfolio section-bg"
      style={{ padding: "60px 0", bottom: "40px" }}
    >
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Projects</h2>
          <p>Completed these projects during my professional experience.</p>
        </div>
        {/* Project Selection Options */}
        <div className="row">
          <div
            className="col-lg-12 d-flex justify-content-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">
                All
              </li>
              {/* <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-card">Card</li>
              <li data-filter=".filter-web">Web</li> */}
            </ul>
          </div>
        </div>

        <div
          className="row portfolio-container"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {projectDetails.map((proj) => {
            return (
              <div
                className="col-lg-4 col-md-6 portfolio-item filter-app"
                key={proj.id}
              >
                <div className="portfolio-wrap">
                  <img
                    className="img-fluid"
                    alt=""
                    src={
                      proj.image === "eCommProject"
                        ? eCommProject
                        : proj.image === "wanderlust"
                        ? wanderlust
                        : fullStackProj
                    }
                  />
                  <div className="portfolio-info">
                    <h2>{proj.projectName}</h2>
                    <p>{proj.role}</p>
                    <div className="portfolio-links">
                      <br></br>
                      <button
                        onClick={() =>
                          setModalShow({ ["show_" + proj.id]: true })
                        }
                      >
                        <i className="bx bx-link"></i>
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
                </div>
              </div>
            );
          })}
        </div>

        <div className="row" style={{ height: "400px" }}></div>
      </div>
    </div>
  );
}

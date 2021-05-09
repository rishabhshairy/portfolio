import React from "react";
import portfolio1 from "../img/portfolio/eCommProject.jpg";
import wanderlust from "../img/portfolio/portfolio-7.jpg";
import fullStackProj from "../img/portfolio/fullStackProj.jpg";
export default function Projects() {
  return (
    <div
      id="portfolio"
      class="portfolio section-bg"
      style={{ padding: "60px 0" }}
    >
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Projects</h2>
          <p>Completed these projects during my professional experience.</p>
        </div>

        <div class="row">
          <div
            class="col-lg-12 d-flex justify-content-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <ul id="portfolio-flters">
              <li data-filter="*" class="filter-active">
                All
              </li>
              {/* <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-card">Card</li>
              <li data-filter=".filter-web">Web</li> */}
            </ul>
          </div>
        </div>

        <div
          class="row portfolio-container"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {/* Project 1 */}
          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-wrap">
              <img src={portfolio1} class="img-fluid" alt="" />
              <div class="portfolio-info">
                <h2>Apple Online Store</h2>
                <p>Publishing System Engineer</p>
                <div class="portfolio-links">
                  <a
                    href={portfolio1}
                    data-gall="portfolioGallery"
                    class="venobox"
                    title="App 1"
                  >
                    <i class="bx bx-plus"></i>
                  </a>
                  <a
                    href="portfolio-details.html"
                    data-gall="portfolioDetailsGallery"
                    data-vbtype="iframe"
                    class="venobox"
                    title="Portfolio Details"
                  >
                    <i class="bx bx-link"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-wrap">
              <img src={wanderlust} class="img-fluid" alt="" />
              <div class="portfolio-info">
                <h4>Wanderlust</h4>
                <p>System Engineer Trainee</p>
                <div class="portfolio-links">
                  <a
                    href={wanderlust}
                    data-gall="portfolioGallery"
                    class="venobox"
                    title="Web 3"
                  >
                    <i class="bx bx-plus"></i>
                  </a>
                  <a
                    href="portfolio-details.html"
                    data-gall="portfolioDetailsGallery"
                    data-vbtype="iframe"
                    class="venobox"
                    title="Portfolio Details"
                  >
                    <i class="bx bx-link"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Project 3 */}
          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-wrap">
              <img src={fullStackProj} class="img-fluid" alt="" />
              <div class="portfolio-info">
                <h4>AI Automation Platform</h4>
                <p>Full Stack Developer Intern</p>
                <div class="portfolio-links">
                  <a
                    href={fullStackProj}
                    data-gall="portfolioGallery"
                    class="venobox"
                    title="App 2"
                  >
                    <i class="bx bx-plus"></i>
                  </a>
                  <a
                    href="portfolio-details.html"
                    data-gall="portfolioDetailsGallery"
                    data-vbtype="iframe"
                    class="venobox"
                    title="Portfolio Details"
                  >
                    <i class="bx bx-link"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

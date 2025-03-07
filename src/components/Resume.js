import React from "react";
import "../css/style.css";
import {
  educationInfo,
  infoSummary,
  profExp,
  internship,
} from "../static/resumeDetails";
export default function Resume() {
  const info = infoSummary;

  const education = educationInfo;

  const prof = profExp;

  return (
    <section id="resume" className="resume" style={{ padding: "60px 0" }}>
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Resume</h2>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <h3 className="resume-title">Summary</h3>
            <div className="resume-item pb-0">
              <h4>{info.name}</h4>
              <p>
                <em>{info.desc}</em>
              </p>
              <ul>
                <li>{info.city}</li>
                <li>{info.emailId}</li>
              </ul>
            </div>

            <h3 className="resume-title">Education</h3>
            {education.map((edItem) => {
              return (
                <div className="resume-item" key={edItem.id}>
                  <h4>{edItem.degree}</h4>
                  <h5>{edItem.year}</h5>
                  <p>
                    <em>{edItem.collegeName}</em>
                  </p>
                  <p>{edItem.marks}</p>
                </div>
              );
            })}

            <h3 className="resume-title">Internship</h3>
            {internship.map((intern) => {
              return (
                <div className="resume-item" key={intern.id}>
                  <h4>{intern.role}</h4>
                  <h5>{intern.year}</h5>
                  <p style={{ fontWeight: "bold" }}>{intern.company}</p>
                  <p>
                    <em>{intern.location}</em>
                  </p>
                  <ul>
                    {intern.details.map((data, index) => {
                      return <li key={index}>{data}</li>;
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
          <div className="col-lg-6">
            <h3 className="resume-title">Professional Experience</h3>
            {prof.map((exp) => {
              return (
                <div className="resume-item" key={exp.id}>
                  <h4>{exp.role}</h4>
                  <h5>{exp.year}</h5>
                  <p style={{ fontWeight: "bold" }}>{exp.company}</p>
                  <p>
                    <em>{exp.location}</em>
                  </p>
                  <ul>
                    {exp.details.map((data, index) => {
                      return <li key={index}>{data}</li>;
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

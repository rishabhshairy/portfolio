import React from "react";
import "../css/style.css";
export default function Resume() {
  // const summaryDesc = ``;
  const info = {
    name: `Rishabh Shairy`,
    emailId: `rishabhshairy29@gmail.com`,
    city: `Bengaluru, Karnataka`,
    desc: `Innovative and deadline-driven Software Engineer 1.5+ years
    of experience designing and developing user-centered
    softwares. Experienced in mapping clients’ business requirements and translating these requirements into functional
    specifications, services, implementations and custom designing solutions`,
  };

  const educationInfo = [
    {
      id: 1,
      collegeName: `St. Thomas' College Of Engineering and Technology`,
      year: `August 2015 - June 2019`,
      degree: `B.Tech in Computer Science and Engineering`,
      marks: `8.81 GPA`,
    },
    {
      id: 2,
      collegeName: `Jawahar Vidya Mandir, Shyamali`,
      year: `June 2012 - May 2014`,
      degree: `Senior Secondary Education / Class XII`,
      marks: `84 %`,
    },
    {
      id: 3,
      collegeName: `Jawahar Vidya Mandir, Shyamali`,
      year: `March 2011 - May 2012`,
      degree: `Secondary Education / Class X`,
      marks: `9.2 GPA`,
    },
  ];

  const profExp = [
    { id: 1,
      role: `System Engineer`,
      year: `April 2020 - Present`,
      company: `Infosys Ltd`,
      location: `Bengaluru, Karnataka`,
    },
    { id: 2,
      role: `System Engineer Trainee`,
      year: `November 2019 - March 2020`,
      company: `Infosys Ltd`,
      location: `Mysore, Karnataka`,
    },
    { id: 3,
      role: `Full Stack Developer Intern`,
      year: `March 2019 - October 2019`,
      company: `Thinking Stack Inc`,
      location: `Bengaluru, Karnataka`,
    },
  ];

  return (
    <div id="resume" className="resume" style={{ padding: "60px 0" }}>
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Resume</h2>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <h3 className="resume-title">Sumary</h3>
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
            {educationInfo.map((edItem) => {
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
          </div>
          <div className="col-lg-6">
            <h3 className="resume-title">Professional Experience</h3>
            {profExp.map((exp) => {
              return (
                <div className="resume-item" key={exp.id}>
                  <h4>{exp.role}</h4>
                  <h5>{exp.year}</h5>
                  <p style={{ fontWeight: "bold" }}>{exp.company}</p>
                  <p>
                    <em>{exp.location}</em>
                  </p>
                  <ul></ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

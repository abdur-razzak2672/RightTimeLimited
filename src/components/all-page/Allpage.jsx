import React from "react";

function Allpage({ data }) {
  return (
    <div>
      <div className="page-header">
        <div
          className="page-header__bg"
          style={{ backgroundImage: `url('../images/resources/aboutbg1.png')` }}
        ></div>
        <div className="container">
          <ul className="thm-breadcrumb list-unstyled">
            <li>
              <a href="/">Home</a>
            </li>
            <li>{data}</li>
          </ul>
          <h2 className="page-header__title">{data}</h2>
        </div>
      </div>
      <section>
        <div className="container mt-5">
          <h2 className="text-center header">{data}</h2>
          <p className="text-dark">
            {" "}
            {data} are designed to help you achieve your business goals. We
            provide a wide range of solutions that are tailored to meet your
            business needs. We have a team of experts who are ready to help you
            achieve your business goals.
          </p>
          <p className="text-dark">
            Right Time Limited (“RightTime”, short form) started its journey in
            the year 2009. It’s purely an Information Security Consultation,
            Assessment/Audit Service & Solutions Provider. With all related
            International Standards and Association, we are providing
            Information System Audit, Technical Documentation, Project
            Management, Custom Skill Development, ISO Consultation &
            Certification, SWIFT Consultation & Auditing, PCI DSS Gap
            Assessment, Remediation Consultation, Auditing & Certification.
            Conducting Security Assessment e.g. VA & PT, Forensic (with the use
            of multiple world className Automated & Manual tools). As the first
            empaneled Security Assessor firm we are serving for more than 14
            years..
          </p>
        </div>

        <h6 className="text-success mt-5 text-center">
          More Information Coming Soon .....
        </h6>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />{" "}
    </div>
  );
}

export default Allpage;

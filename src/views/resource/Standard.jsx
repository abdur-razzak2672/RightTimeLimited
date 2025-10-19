import React from "react";

function Standard() {
  const items = [
    {
      h: "ISO/IEC 27001",
      d: "Information Security Management System (ISMS) standard for managing risk and controls.",
    },
    {
      h: "NIST CSF",
      d: "Identify, Protect, Detect, Respond, Recover – a framework for managing cybersecurity risk.",
    },
    {
      h: "GDPR",
      d: "EU data protection regulation governing personal data processing and privacy rights.",
    },
  ];
  return (
    <div>
      <div className="page-header">
        <div
          className="page-header__bg"
          style={{ backgroundImage: `url('../images/resources/aboutbg1.png')` }}
        />
        <div className="container">
          <ul className="thm-breadcrumb list-unstyled">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/resources">Resources</a>
            </li>
            <li>Standard</li>
          </ul>
          <h2 className="page-header__title">Standards</h2>
        </div>
      </div>
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <h3 className="fw-bold">International Standards </h3>
              <ul>
                {items.map((i) => (
                  <li key={i.h}>
                    <strong>{i.h}</strong> – {i.d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default Standard;

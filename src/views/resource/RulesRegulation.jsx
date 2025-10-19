import React from "react";

function RulesRegulation() {
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
            <li>Rules & Regulation</li>
          </ul>
          <h2 className="page-header__title">Rules & Regulation</h2>
        </div>
      </div>

      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <h3 className="fw-bold">Regulatory Compliance</h3>
              <p className="text-dark">
                Right Time Limited specializes in navigating complex
                cybersecurity regulations, including GDPR, HIPAA, and CCPA,
                helping clients operationalize compliance while maintaining
                agility.
              </p>
              <ul>
                <li>Data protection and privacy by design</li>
                <li>Security controls mapping to regulatory requirements</li>
                <li>Audit readiness and evidence management</li>
                <li>Third-party and vendor risk management</li>
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

export default RulesRegulation;

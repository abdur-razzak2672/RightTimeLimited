import React from "react";

function IncidentBody() {
  return (
    <div>
      <div className="page-header">
        <div
          className="page-header__bg"
          style={{
            backgroundImage: `url('/assets/images/resources/contact.png')`,
          }}
        ></div>
        <div className="container">
          <ul className="thm-breadcrumb list-unstyled">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>Incident</li>
          </ul>
          <h2 className="page-header__title">Incident</h2>
        </div>
      </div>

      <section className="d-flex justify-content-center">
        <div className=" mt-4">
          <h2 className="header ">REPORT AN INCIDENT</h2>
          <p className="mt-3">
            In case of a security incident, InfoGuard supports you 7x24!
          </p>
          <p style={{ fontSize: "14px" }}>
            (only for companies - no private individuals)
          </p>
          <p className="text-bold">
            Please have the answers of the following key questions ready when
            you contact the InfoGuard hotline:
          </p>
          <p>
            <span className="text-bold">1. WHO</span> discovered or reported the
            incident?
          </p>
          <p>
            2. WHAT happened? (e.g. data loss, data theft, data manipulation, )
          </p>
          <p>3. WHERE did the incident occur?</p>
          <p>4. WHEN did the incident occur?</p>
          <p>5. WHY did the incident occur?</p>
          <p>6. HOW did the incident occur?</p>
          <p>7. HOW can the incident be prevented in the future?</p>
        </div>
      </section>

      <section style={{ backgroundColor: "#12062c" }} className="mt-5  ">
        <div className="d-flex justify-content-center p-5">
          <div className="row">
            <div className="col-md-6 text-light">
              <h3>CSIRT</h3>
            </div>
            <div className="col-md-6 text-light">
              <h3>CONTACT</h3>
              <p>1. 7x24 Hotline: +41 41 749 19 99</p>
              <p>2. E-Mail: investigations@rtl.com</p>
              <p>
                Please note that in urgent cases and out of office hours the
                hotline has to be called.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="d-flex justify-content-center">
        <div>
          <h3 className="text-dark mt-4">
            In case of a security incident,<br/> we support you quickly, competently
            and proficiently
          </h3>
          <p>
            You could be the victim of a cyber attack at any time. Our Incident
            Response Retainer is the perfect<br/> solution when it comes to acting in
            a prepared, fast, efficient and effective manner.
          </p>
          <p>
            1. Support from our experienced Computer Security Incident Response
            Team (CSIRT)
          </p>
          <p>2. Fastest possible detection and isolation of the attacker</p>
          <p>
            3.Comprehensive damage analysis by security experts from our{" "}
            <a href="/swis">Swiss Cyber Defence Center</a>
          </p>
          <p>
            4. Compliance with the obligation to report a security incident
            within 72 hours according to GDPR
          </p>
          <a
            href="#"
            className="mt-1 my-5 thm-btn cta-two__btn rounded-5 text-center"
          >
            <span>Incident Response Retainer</span>
          </a>{" "}
        </div>
      </section>


      

      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default IncidentBody;

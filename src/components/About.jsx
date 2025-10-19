import React, { useState, useEffect } from "react";
import { Col, Modal, Row } from "react-bootstrap";

function About() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const counters = document.querySelectorAll(".count-text");

    const animateCounter = (el) => {
      const target = +el.getAttribute("data-stop");
      const speed = +el.getAttribute("data-speed") || 2000;
      const increment = target / (speed / 16);
      let current = 0;

      function updateCounter() {
        current += increment;
        if (current < target) {
          el.innerText = Math.floor(current);
          requestAnimationFrame(updateCounter);
        } else {
          el.innerText = target;
        }
      }
      updateCounter();
    };

    // Observer to trigger only when element is visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            observer.unobserve(entry.target); // run only once
          }
        });
      },
      { threshold: 0.5 }, // start when 50% visible
    );

    counters.forEach((counter) => observer.observe(counter));
  }, []);
  return (
    <div>
      <section className="mt-5 pt-5">
        <div className="container">
          <div className="row gutter-y-60">
            <div className="col-lg-5">
              <div className="about-five__images">
                <div className="about-five__images__shape"></div>
                <img loading="lazy" decoding="async"
                  src="assets/images/home/up.jpg"
                  className="wow fadeInUp"
                  data-wow-duration="1500ms"
                  alt=""
                />

                <div
                  className="about-five__images__caption  count-box wow fadeInUp"
                  data-wow-duration="1500ms"
                >
                  <span className="count-text" data-stop="14" data-speed="1300">
                    14
                  </span>
                  Years of
                  <br />
                  Experience
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="about-five__content">
                <div className="section-title ">
                  <p className="section-title__text">About Company</p>
                  <h2 className="header">
                    Leading Information Security Company
                  </h2>
                </div>
                <div className="textJustify" style={{ marginTop: "-40px" }}>
                  <p>
                    Right Time Limited (“RightTime”, short form) started its
                    journey in the year 2009. It’s purely an Information
                    Security Consultation, Assessment/Audit Service & Solutions
                    Provider. With all related International Standards and
                    Association, we are providing Information System Audit,
                    Technical Documentation, Project Management, Custom Skill
                    Development, ISO Consultation & Certification, SWIFT
                    Consultation & Auditing, PCI DSS Gap Assessment, Remediation
                    Consultation, Auditing & Certification. Conducting Security
                    Assessment e.g. VA & PT, Forensic (with the use of multiple
                    world className Automated & Manual tools). As the first
                    empaneled Security Assessor firm we are serving for more
                    than 14 years.
                  </p>
                </div>

                <div className="about-four__meta">
                  <div className="about-four__author">
                    <div className="row">
                      <div className="col-md-4">
                        <img loading="lazy" decoding="async"
                          width="100%"
                          src="assets/images/team/mam.jpg"
                          alt=""
                        />
                        <a
                          style={{ width: "205px" }}
                          onClick={handleShow}
                          href="javascript:void(0)"
                          className="thm-btn about-four__btn mt-2"
                        >
                          <span className="text-light">Learn More</span>
                        </a>
                      </div>

                      <div
                        style={{ paddingRight: "12px" }}
                        className="col-md-8 "
                      >
                        <p
                          className="textJustify"
                          style={{ marginTop: "-12px" }}
                        >
                          {" "}
                          I am proud to serve as the Chairman of “Right Time
                          Limited” (RightTime, short firm)- cyber security
                          consulting and assessment/audit firm. Our team of
                          experts is dedicated to providing you with the highest
                          quality of service and customized solutions to secure
                          your organization's data and assets from cyber
                          threats. Wish, you will choose “Right Time Limited” as
                          your trusted partner in Cyber Security Effort.{" "}
                        </p>
                        <h3 className="about-four__author__title ">
                          Ms. Sahaly Yasmin Bhuiyan
                        </h3>
                        <div className="about-four__author__designation  ">
                          Chairman
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Body className=" rounded-3">
          <h5 className="teamTitle">Sahaly Yasmin Bhuiyan</h5>
          <i style={{ fontSize: "40px" }} className="fab fa-linkedin "></i>

          <Row>
            <Col md={8}>
              <p className="teamDetails textJustify">
                Ms. Sahaly Yasmin Bhuiyan comes with 13+ Years of wide-ranging
                and sound knowledge in the domain of Information System
                Security, Governance, Compliance, Enterprise as well as ICT Risk
                Management, PCI DSS Compliance Validation Services SWIFT Cyber
                Security Consultation and SWIFT CSP Assessment, Information
                System/Information Technology and Cyber Security
                Assessment/Auditing, etc.
              </p>
            </Col>

            <Col md={4}>
              <img loading="lazy" decoding="async"
                className="img-responsive"
                src="/assets/images/team/mam.webp"
                alt=""
              />
            </Col>
            <p>
              Being a Security Auditor and Process Auditor, she earned a lot of
              real-world experience working with more than 450+ Companies across
              the globe. She collaborates with Strategic Teams, Leadership
              Teams, Management Teams, and Operations Teams. She understands the
              business challenges, organization goals, problems with execution,
              working methods, social variances, etc. She oversees the Quality
              Assurance Team and serves as a core security assessor in addition
              to serving as the company’s Chairman.
            </p>
            <p>
              Sahaly has certifications in PCI QSA, PCIP, CDCP, Lead Auditor -
              ISO 9001(QMS), ITIL, and SWIFT.
            </p>
          </Row>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default About;

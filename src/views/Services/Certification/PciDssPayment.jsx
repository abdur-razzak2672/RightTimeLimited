import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import SeviceCommon from "../SeviceCommon";
import { Accordion } from "react-bootstrap";

function PciDssPayment() {
  const [tabIndex, setTabIndex] = useState(1);

  return (
    <div>
      <div>
        <div className="page-header">
          <div
            className="page-header__bg"
            style={{
              backgroundImage: `url('https://www.groundlabs.com/wp-content/uploads/2019/03/PCI-DSS-Compliance.png')`,
            }}
          ></div>
          <div className="container">
            <ul className="thm-breadcrumb list-unstyled">
              <li>
                <a href="{{ url('/') }}">Home</a>
              </li>
              <li>
                <a href="{{ url('/services') }}">Services</a>
              </li>
              <li>
                <a href="{{ url('/services/standard-implementation-certification') }}">
                  Standard Implementation & Certification
                </a>
              </li>
              <li>Payment Card Industry Data Security Standards</li>
            </ul>
            <h2 className="page-header__title">
              Payment Card Industry Data Security Standards
            </h2>
          </div>
        </div>
        <div className=" text-center service-topbar">
          <div className="container d-flex justify-content-between">
            <div style={{ color: "white" }} className="">
              <a className="text-light" href="#header">
               What We Offer
              </a>
            </div>
            <div className="">
              <a className="text-light" href="#benefit">
              FAQ
              </a>
            </div>
            <div className="">
              <a className="text-light" href="#question">
                Resource
              </a>
            </div>
          </div>
        </div>

        <section id="header" className="section-padding--bottom pt-5 ">
          <div className="container">
            <div className="section-title">
              <p className="text-dark">
                Web application security testing is performed to identify the
                vulnerabilities in a web application. With the increasing
                adaptation of web technologies across several areas, web
                applications have become a very viable attack surface if left
                with an untailored security outlook. Hence, assessments like web
                application security help the developers remediate
                vulnerabilities that are found during the process thereby and
                enhance the overall security of the web application.
              </p>
              <div className="row">
                <div className="col-md-7">
                  <p className="text-dark">
                    Web application security testing as per the OWASP Top 10
                    list, helps to identify many unattended issues related to
                    programming, file access and configuration etc which may
                    turn out to be vulnerabilities, causing a potential impact
                    on the organization. Regular assessments as such help
                    safeguard the application from any unauthorized access which
                    can cause an impact on the organization both in reputation
                    and resources.
                  </p>
                  <p className="text-dark">
                    Web application security testing as per the OWASP Top 10
                    list, helps to identify many unattended issues related to
                    programming, file access and configuration etc which may
                    turn out to be vulnerabilities, causing a potential impact
                    on the organization. Regular assessments as such help
                    safeguard the application from any unauthorized access which
                    can cause an impact on the organization both in reputation
                    and resources.
                  </p>
                  <p className="text-dark">
                    Web application security testing as per the OWASP Top 10
                    list, helps to identify many unattended issues related to
                    programming, file access and configuration etc which may
                    turn out to be vulnerabilities, causing a potential impact
                    on the organization. Regular assessments as such help
                    safeguard the application from any unauthorized access which
                    can cause an impact on the organization both in reputation
                    and resources.
                  </p>
                </div>
                <div className="col-md-5">
                  <img
                    className="w-100"
                    src="/assets/images/services/pcidss.png"
                    alt=""
                  />
                </div>
              </div>
              <p className="text-dark">
                Web application security testing as per the OWASP Top 10 list,
                helps to identify many unattended issues related to programming,
                file access and configuration etc which may turn out to be
                vulnerabilities, causing a potential impact on the organization.
                Regular assessments as such help safeguard the application from
                any unauthorized access which can cause an impact on the
                organization both in reputation and resources.
              </p>
            </div>
          </div>
        </section>

        <div className="mx-5 px-5">
          <div>
            <img src="assets/images/services/ani.png" width="100%" alt="" />
          </div>
        </div>

        <section>
          <div className="container">
            <Row>
              <Col style={{overflowX:"scroll",height:"70vh"}} md={4}>
                <div className=" servicesItem">
                  <a
                    style={{ textDecoration: "none" }}
                    className="text-dark   focus"
                    onClick={() => setTabIndex(1)}
                    href="#javascript void(0)"
                  >
                    {" "}
                    Business Understanding
                  </a>
                </div>
                <div className="servicesItem">
                  <a onClick={() => setTabIndex(2)} href="#javascript void(0)">
                    {" "}
                    Readiness Assesment
                  </a>
                </div>
                <div className=" servicesItem">
                  <a onClick={() => setTabIndex(3)} href="#javascript void(0)">
                    {" "}
                    Swift Cyber Security Consulting
                  </a>
                </div>
                <div className=" servicesItem">
                  <a onClick={() => setTabIndex(4)} href="#javascript void(0)">
                    {" "}
                    Risk Assesment
                  </a>
                </div>

                <div className=" servicesItem">
                  <a onClick={() => setTabIndex(5)} href="#javascript void(0)">
                    {" "}
                    Data Flow Assesment
                  </a>
                </div>
                <div className=" servicesItem">
                  <a onClick={() => setTabIndex(6)} href="#javascript void(0)">
                    {" "}
                    Doccumentation Support
                  </a>
                </div>

                <div className=" servicesItem">
                  <a onClick={() => setTabIndex(7)} href="#javascript void(0)">
                    {" "}
                    Remidiation Support
                  </a>
                </div>
                <div className=" servicesItem">
                  <a onClick={() => setTabIndex(8)} href="#javascript void(0)">
                    {" "}
                    Awareness Training{" "}
                  </a>
                </div>

                <div className=" servicesItem">
                  <a onClick={() => setTabIndex(9)} href="#javascript void(0)">
                    {" "}
                    Scan And Testing
                  </a>
                </div>
                <div className=" servicesItem">
                  <a onClick={() => setTabIndex(10)} href="#javascript void(0)">
                    {" "}
                    Evidence Review
                  </a>
                </div>
                <div className=" servicesItem">
                  <a onClick={() => setTabIndex(11)} href="#javascript void(0)">
                    {" "}
                    Final Assessment And Attestation{" "}
                  </a>
                </div>
                <div className=" servicesItem">
                  <a onClick={() => setTabIndex(12)} href="#javascript void(0)">
                    {" "}
                    Continuous Compliance Support
                  </a>
                </div>
              </Col>

              <Col md={8}>
                <div>
                  {tabIndex === 1 && (
                    <div>
                      <h3 className="header">Business Understanding</h3>
                      <p className="text-dark">
                        We will understand your business and the scope of the
                        project. We will also understand the business
                        requirements and the business objectives. We will
                        understand the business processes and the business
                        environment. We will also understand the business
                        constraints and the business risks.
                      </p>
                      <p style={{ borderBottom: "2px solid lightgray" }}></p>
                      <div className="text-center">
                        <h4 className="header">
                          Fast Track Your PCI DSS Compliance
                        </h4>
                        <p className="text-dark">
                          Request an initial PCI DSS Compliance Program
                          consultation.
                        </p>

                        <button
                          style={{
                            padding: "7px",
                            border: "1px solid lightgray",
                            borderRadius: "8px",
                          }}
                        >
                          REQUEST FREE CONSULTATION
                        </button>
                      </div>

                      <p
                        className="mt-4"
                        style={{ borderBottom: "2px solid lightgray" }}
                      ></p>

                      <div>
                        <h5 className="header">Overview</h5>
                        <p className="text-dark">
                          We will understand your business and the scope of the
                          project. We will also understand the business
                          requirements and the business objectives. We will
                          understand the business processes and the business
                          environment. We will also understand the business
                          constraints and the business risks.
                        </p>
                      </div>

                      <div>
                        <h5 className="header">Key Benefits</h5>
                        <p className="text-dark">
                          1 . We will understand your business and the scope of
                          the project.{" "}
                        </p>
                        <p className="text-dark">
                          2 . We will understand your business{" "}
                        </p>

                        <p className="text-dark">
                          3 . the scope of the project.{" "}
                        </p>
                        <p className="text-dark">
                          4 . We will understand your business and the scope of
                          the project.{" "}
                        </p>
                        <p className="text-dark">
                          5 . We will understand scope of the project.{" "}
                        </p>
                      </div>

                      <div>
                        <h5 className="header">Our Methology</h5>
                        <h6 className="header">
                          Stage 1: Pre Assessment Phase (Off- Site)
                        </h6>
                        <p className="text-dark">
                          1 . We will understand your business and the scope of
                          the project.{" "}
                        </p>
                        <p className="text-dark">
                          2 . We will understand your business{" "}
                        </p>

                        <p className="text-dark">
                          3 . the scope of the project.{" "}
                        </p>
                        <p className="text-dark">
                          4 . We will understand your business and the scope of
                          the project.{" "}
                        </p>
                        <p className="text-dark">
                          5 . We will understand scope of the project.{" "}
                        </p>

                        <h6 className="header">
                          Stage3: CHD Discovery Phase (On- Site)
                        </h6>
                        <p className="text-dark">
                          1 . We will understand your business and the scope of
                          the project.{" "}
                        </p>
                        <p className="text-dark">
                          2 . We will understand your business{" "}
                        </p>

                        <p className="text-dark">
                          3 . the scope of the project.{" "}
                        </p>
                        <p className="text-dark">
                          4 . We will understand your business and the scope of
                          the project.{" "}
                        </p>
                        <p className="text-dark">
                          5 . We will understand scope of the project.{" "}
                        </p>

                        <h6 className="header">
                          Stage 2: CHD Discovery Phase (On- Site)
                        </h6>
                        <p className="text-dark">
                          1 . We will understand your business and the scope of
                          the project.{" "}
                        </p>
                        <p className="text-dark">
                          2 . We will understand your business{" "}
                        </p>

                        <p className="text-dark">
                          3 . the scope of the project.{" "}
                        </p>
                        <p className="text-dark">
                          4 . We will understand your business and the scope of
                          the project.{" "}
                        </p>
                        <p className="text-dark">
                          5 . We will understand scope of the project.{" "}
                        </p>
                      </div>
                      <div>
                        <h5 className="header">Associated services</h5>
                        <a href="/PCI DSS Scope Assessment">
                          {" "}
                          • PCI DSS Scope Assessment
                        </a>
                        <br />
                        <a href="/PCI DSS Scope Reduction">
                          • PCI DSS Scope Reductiont
                        </a>
                      </div>
                    </div>
                  )}

                  {tabIndex === 2 && (
                    <div>
                      <h3 className="header"> Readiness Assesment</h3>
                      <p className="text-dark">
                        We will understand your business and the scope of the
                        project. We will also understand the business
                        requirements and the business objectives. We will
                        understand the business processes and the business
                        environment. We will also understand the business
                        constraints and the business risks.
                      </p>
                      <p style={{ borderBottom: "2px solid lightgray" }}></p>
                      <div className="text-center">
                        <h4 className="header">
                          Fast Track Your PCI DSS Compliance
                        </h4>
                        <p className="text-dark">
                          Request an initial PCI DSS Compliance Program
                          consultation.
                        </p>

                        <button
                          style={{
                            padding: "7px",
                            border: "1px solid lightgray",
                            borderRadius: "8px",
                          }}
                        >
                          REQUEST FREE CONSULTATION
                        </button>
                      </div>

                      <p
                        className="mt-4"
                        style={{ borderBottom: "2px solid lightgray" }}
                      ></p>

                      <div>
                        <h5 className="header">Overview</h5>
                        <p className="text-dark">
                          We will understand your business and the scope of the
                          project. We will also understand the business
                          requirements and the business objectives. We will
                          understand the business processes and the business
                          environment. We will also understand the business
                          constraints and the business risks.
                        </p>
                      </div>

                      <div>
                        <h5 className="header">Key Benefits</h5>
                        <p className="text-dark">
                          1 . We will understand your business and the scope of
                          the project.{" "}
                        </p>
                        <p className="text-dark">
                          2 . We will understand your business{" "}
                        </p>

                        <p className="text-dark">
                          3 . the scope of the project.{" "}
                        </p>
                        <p className="text-dark">
                          4 . We will understand your business and the scope of
                          the project.{" "}
                        </p>
                        <p className="text-dark">
                          5 . We will understand scope of the project.{" "}
                        </p>
                      </div>

                      <div>
                        <h5 className="header">Our Methology</h5>
                        <h6 className="header">
                          Stage 1: Pre Assessment Phase (Off- Site)
                        </h6>
                        <p className="text-dark">
                          1 . We will understand your business and the scope of
                          the project.{" "}
                        </p>
                        <p className="text-dark">
                          2 . We will understand your business{" "}
                        </p>

                        <p className="text-dark">
                          3 . the scope of the project.{" "}
                        </p>
                        <p className="text-dark">
                          4 . We will understand your business and the scope of
                          the project.{" "}
                        </p>
                        <p className="text-dark">
                          5 . We will understand scope of the project.{" "}
                        </p>

                        <h6 className="header">
                          Stage3: CHD Discovery Phase (On- Site)
                        </h6>
                        <p className="text-dark">
                          1 . We will understand your business and the scope of
                          the project.{" "}
                        </p>
                        <p className="text-dark">
                          2 . We will understand your business{" "}
                        </p>

                        <p className="text-dark">
                          3 . the scope of the project.{" "}
                        </p>
                        <p className="text-dark">
                          4 . We will understand your business and the scope of
                          the project.{" "}
                        </p>
                        <p className="text-dark">
                          5 . We will understand scope of the project.{" "}
                        </p>

                        <h6 className="header">
                          Stage 2: CHD Discovery Phase (On- Site)
                        </h6>
                        <p className="text-dark">
                          1 . We will understand your business and the scope of
                          the project.{" "}
                        </p>
                        <p className="text-dark">
                          2 . We will understand your business{" "}
                        </p>

                        <p className="text-dark">
                          3 . the scope of the project.{" "}
                        </p>
                        <p className="text-dark">
                          4 . We will understand your business and the scope of
                          the project.{" "}
                        </p>
                        <p className="text-dark">
                          5 . We will understand scope of the project.{" "}
                        </p>
                      </div>
                      <div>
                        <h5 className="header">Associated services</h5>
                        <a href="/PCI DSS Scope Assessment">
                          {" "}
                          • PCI DSS Scope Assessment
                        </a>
                        <br />
                        <a href="/PCI DSS Scope Reduction">
                          • PCI DSS Scope Reductiont
                        </a>
                      </div>
                    </div>
                  )}
                  {tabIndex === 3 && (
                    <div>
                      <h3 className="header">
                        {" "}
                        Swift Cyber Security Consulting
                      </h3>
                      <p className="text-dark">
                        We will understand your business and the scope of the
                        project. We will also understand the business
                        requirements and the business objectives. We will
                        understand the business processes and the business
                        environment. We will also understand the business
                        constraints and the business risks.
                      </p>
                      <p style={{ borderBottom: "2px solid lightgray" }}></p>
                      <div className="text-center">
                        <h4 className="header">
                          Fast Track Your PCI DSS Compliance
                        </h4>
                        <p className="text-dark">
                          Request an initial PCI DSS Compliance Program
                          consultation.
                        </p>

                        <button
                          style={{
                            padding: "7px",
                            border: "1px solid lightgray",
                            borderRadius: "8px",
                          }}
                        >
                          REQUEST FREE CONSULTATION
                        </button>
                      </div>

                      <p
                        className="mt-4"
                        style={{ borderBottom: "2px solid lightgray" }}
                      ></p>

                      <div>
                        <h5 className="header">Overview</h5>
                        <p className="text-dark">
                          We will understand your business and the scope of the
                          project. We will also understand the business
                          requirements and the business objectives. We will
                          understand the business processes and the business
                          environment. We will also understand the business
                          constraints and the business risks.
                        </p>
                      </div>

                      <div>
                        <h5 className="header">Key Benefits</h5>
                        <p className="text-dark">
                          1 . We will understand your business and the scope of
                          the project.{" "}
                        </p>
                        <p className="text-dark">
                          2 . We will understand your business{" "}
                        </p>

                        <p className="text-dark">
                          3 . the scope of the project.{" "}
                        </p>
                        <p className="text-dark">
                          4 . We will understand your business and the scope of
                          the project.{" "}
                        </p>
                        <p className="text-dark">
                          5 . We will understand scope of the project.{" "}
                        </p>
                      </div>

                      <div>
                        <h5 className="header">Our Methology</h5>
                        <h6 className="header">
                          Stage 1: Pre Assessment Phase (Off- Site)
                        </h6>
                        <p className="text-dark">
                          1 . We will understand your business and the scope of
                          the project.{" "}
                        </p>
                        <p className="text-dark">
                          2 . We will understand your business{" "}
                        </p>

                        <p className="text-dark">
                          3 . the scope of the project.{" "}
                        </p>
                        <p className="text-dark">
                          4 . We will understand your business and the scope of
                          the project.{" "}
                        </p>
                        <p className="text-dark">
                          5 . We will understand scope of the project.{" "}
                        </p>

                        <h6 className="header">
                          Stage3: CHD Discovery Phase (On- Site)
                        </h6>
                        <p className="text-dark">
                          1 . We will understand your business and the scope of
                          the project.{" "}
                        </p>
                        <p className="text-dark">
                          2 . We will understand your business{" "}
                        </p>

                        <p className="text-dark">
                          3 . the scope of the project.{" "}
                        </p>
                        <p className="text-dark">
                          4 . We will understand your business and the scope of
                          the project.{" "}
                        </p>
                        <p className="text-dark">
                          5 . We will understand scope of the project.{" "}
                        </p>

                        <h6 className="header">
                          Stage 2: CHD Discovery Phase (On- Site)
                        </h6>
                        <p className="text-dark">
                          1 . We will understand your business and the scope of
                          the project.{" "}
                        </p>
                        <p className="text-dark">
                          2 . We will understand your business{" "}
                        </p>

                        <p className="text-dark">
                          3 . the scope of the project.{" "}
                        </p>
                        <p className="text-dark">
                          4 . We will understand your business and the scope of
                          the project.{" "}
                        </p>
                        <p className="text-dark">
                          5 . We will understand scope of the project.{" "}
                        </p>
                      </div>
                      <div>
                        <h5 className="header">Associated services</h5>
                        <a href="/PCI DSS Scope Assessment">
                          {" "}
                          • PCI DSS Scope Assessment
                        </a>
                        <br />
                        <a href="/PCI DSS Scope Reduction">
                          • PCI DSS Scope Reductiont
                        </a>
                      </div>
                    </div>
                  )}

                  {tabIndex === 4 && (
                    <div>
                      <h3 className="header"> Risk Assesment</h3>
                      <p className="text-dark">
                        We will understand your business and the scope of the
                        project. We will also understand the business
                        requirements and the business objectives. We will
                        understand the business processes and the business
                        environment. We will also understand the business
                        constraints and the business risks.
                      </p>
                      <p style={{ borderBottom: "2px solid lightgray" }}></p>
                      <div className="text-center">
                        <h4 className="header">
                          Fast Track Your PCI DSS Compliance
                        </h4>
                        <p className="text-dark">
                          Request an initial PCI DSS Compliance Program
                          consultation.
                        </p>

                        <button
                          style={{
                            padding: "7px",
                            border: "1px solid lightgray",
                            borderRadius: "8px",
                          }}
                        >
                          REQUEST FREE CONSULTATION
                        </button>
                      </div>

                      <p
                        className="mt-4"
                        style={{ borderBottom: "2px solid lightgray" }}
                      ></p>

                      <div>
                        <h5 className="header">Overview</h5>
                        <p className="text-dark">
                          We will understand your business and the scope of the
                          project. We will also understand the business
                          requirements and the business objectives. We will
                          understand the business processes and the business
                          environment. We will also understand the business
                          constraints and the business risks.
                        </p>
                      </div>

                      <div>
                        <h5 className="header">Key Benefits</h5>
                        <p className="text-dark">
                          1 . We will understand your business and the scope of
                          the project.{" "}
                        </p>
                        <p className="text-dark">
                          2 . We will understand your business{" "}
                        </p>

                        <p className="text-dark">
                          3 . the scope of the project.{" "}
                        </p>
                        <p className="text-dark">
                          4 . We will understand your business and the scope of
                          the project.{" "}
                        </p>
                        <p className="text-dark">
                          5 . We will understand scope of the project.{" "}
                        </p>
                      </div>

                      <div>
                        <h5 className="header">Our Methology</h5>
                        <h6 className="header">
                          Stage 1: Pre Assessment Phase (Off- Site)
                        </h6>
                        <p className="text-dark">
                          1 . We will understand your business and the scope of
                          the project.{" "}
                        </p>
                        <p className="text-dark">
                          2 . We will understand your business{" "}
                        </p>

                        <p className="text-dark">
                          3 . the scope of the project.{" "}
                        </p>
                        <p className="text-dark">
                          4 . We will understand your business and the scope of
                          the project.{" "}
                        </p>
                        <p className="text-dark">
                          5 . We will understand scope of the project.{" "}
                        </p>

                        <h6 className="header">
                          Stage3: CHD Discovery Phase (On- Site)
                        </h6>
                        <p className="text-dark">
                          1 . We will understand your business and the scope of
                          the project.{" "}
                        </p>
                        <p className="text-dark">
                          2 . We will understand your business{" "}
                        </p>

                        <p className="text-dark">
                          3 . the scope of the project.{" "}
                        </p>
                        <p className="text-dark">
                          4 . We will understand your business and the scope of
                          the project.{" "}
                        </p>
                        <p className="text-dark">
                          5 . We will understand scope of the project.{" "}
                        </p>

                        <h6 className="header">
                          Stage 2: CHD Discovery Phase (On- Site)
                        </h6>
                        <p className="text-dark">
                          1 . We will understand your business and the scope of
                          the project.{" "}
                        </p>
                        <p className="text-dark">
                          2 . We will understand your business{" "}
                        </p>

                        <p className="text-dark">
                          3 . the scope of the project.{" "}
                        </p>
                        <p className="text-dark">
                          4 . We will understand your business and the scope of
                          the project.{" "}
                        </p>
                        <p className="text-dark">
                          5 . We will understand scope of the project.{" "}
                        </p>
                      </div>
                      <div>
                        <h5 className="header">Associated services</h5>
                        <a href="/PCI DSS Scope Assessment">
                          {" "}
                          • PCI DSS Scope Assessment
                        </a>
                        <br />
                        <a href="/PCI DSS Scope Reduction">
                          • PCI DSS Scope Reductiont
                        </a>
                      </div>
                    </div>
                  )}

                  {tabIndex === 5 && (
                    <div>
                      <h3 className="header"> Data Flow Assesment</h3>
                      <p className="text-dark">
                        We will understand your business and the scope of the
                        project. We will also understand the business
                        requirements and the business objectives. We will
                        understand the business processes and the business
                        environment. We will also understand the business
                        constraints and the business risks.
                      </p>
                      <p style={{ borderBottom: "2px solid lightgray" }}></p>
                      <div className="text-center">
                        <h4 className="header">
                          Fast Track Your PCI DSS Compliance
                        </h4>
                        <p className="text-dark">
                          Request an initial PCI DSS Compliance Program
                          consultation.
                        </p>

                        <button
                          style={{
                            padding: "7px",
                            border: "1px solid lightgray",
                            borderRadius: "8px",
                          }}
                        >
                          REQUEST FREE CONSULTATION
                        </button>
                      </div>

                      <p
                        className="mt-4"
                        style={{ borderBottom: "2px solid lightgray" }}
                      ></p>

                      <div>
                        <h5 className="header">Overview</h5>
                        <p className="text-dark">
                          We will understand your business and the scope of the
                          project. We will also understand the business
                          requirements and the business objectives. We will
                          understand the business processes and the business
                          environment. We will also understand the business
                          constraints and the business risks.
                        </p>
                      </div>

                      <div>
                        <h5 className="header">Key Benefits</h5>
                        <p className="text-dark">
                          1 . We will understand your business and the scope of
                          the project.{" "}
                        </p>
                        <p className="text-dark">
                          2 . We will understand your business{" "}
                        </p>

                        <p className="text-dark">
                          3 . the scope of the project.{" "}
                        </p>
                        <p className="text-dark">
                          4 . We will understand your business and the scope of
                          the project.{" "}
                        </p>
                        <p className="text-dark">
                          5 . We will understand scope of the project.{" "}
                        </p>
                      </div>

                      <div>
                        <h5 className="header">Our Methology</h5>
                        <h6 className="header">
                          Stage 1: Pre Assessment Phase (Off- Site)
                        </h6>
                        <p className="text-dark">
                          1 . We will understand your business and the scope of
                          the project.{" "}
                        </p>
                        <p className="text-dark">
                          2 . We will understand your business{" "}
                        </p>

                        <p className="text-dark">
                          3 . the scope of the project.{" "}
                        </p>
                        <p className="text-dark">
                          4 . We will understand your business and the scope of
                          the project.{" "}
                        </p>
                        <p className="text-dark">
                          5 . We will understand scope of the project.{" "}
                        </p>

                        <h6 className="header">
                          Stage3: CHD Discovery Phase (On- Site)
                        </h6>
                        <p className="text-dark">
                          1 . We will understand your business and the scope of
                          the project.{" "}
                        </p>
                        <p className="text-dark">
                          2 . We will understand your business{" "}
                        </p>

                        <p className="text-dark">
                          3 . the scope of the project.{" "}
                        </p>
                        <p className="text-dark">
                          4 . We will understand your business and the scope of
                          the project.{" "}
                        </p>
                        <p className="text-dark">
                          5 . We will understand scope of the project.{" "}
                        </p>

                        <h6 className="header">
                          Stage 2: CHD Discovery Phase (On- Site)
                        </h6>
                        <p className="text-dark">
                          1 . We will understand your business and the scope of
                          the project.{" "}
                        </p>
                        <p className="text-dark">
                          2 . We will understand your business{" "}
                        </p>

                        <p className="text-dark">
                          3 . the scope of the project.{" "}
                        </p>
                        <p className="text-dark">
                          4 . We will understand your business and the scope of
                          the project.{" "}
                        </p>
                        <p className="text-dark">
                          5 . We will understand scope of the project.{" "}
                        </p>
                      </div>
                      <div>
                        <h5 className="header">Associated services</h5>
                        <a href="/PCI DSS Scope Assessment">
                          {" "}
                          • PCI DSS Scope Assessment
                        </a>
                        <br />
                        <a href="/PCI DSS Scope Reduction">
                          • PCI DSS Scope Reductiont
                        </a>
                      </div>
                    </div>
                  )}

                  {tabIndex === 6 && (
                    <div>
                      <h3 className="header">Doccumentation Support</h3>
                      <p className="text-dark">
                        We will understand your business and the scope of the
                        project. We will also understand the business
                        requirements and the business objectives. We will
                        understand the business processes and the business
                        environment. We will also understand the business
                        constraints and the business risks.
                      </p>
                      <p style={{ borderBottom: "2px solid lightgray" }}></p>
                      <div className="text-center">
                        <h4 className="header">
                          Fast Track Your PCI DSS Compliance
                        </h4>
                        <p className="text-dark">
                          Request an initial PCI DSS Compliance Program
                          consultation.
                        </p>

                        <button
                          style={{
                            padding: "7px",
                            border: "1px solid lightgray",
                            borderRadius: "8px",
                          }}
                        >
                          REQUEST FREE CONSULTATION
                        </button>
                      </div>

                      <p
                        className="mt-4"
                        style={{ borderBottom: "2px solid lightgray" }}
                      ></p>

                      <div>
                        <h5 className="header">Overview</h5>
                        <p className="text-dark">
                          We will understand your business and the scope of the
                          project. We will also understand the business
                          requirements and the business objectives. We will
                          understand the business processes and the business
                          environment. We will also understand the business
                          constraints and the business risks.
                        </p>
                      </div>

                      <div>
                        <h5 className="header">Key Benefits</h5>
                        <p className="text-dark">
                          1 . We will understand your business and the scope of
                          the project.{" "}
                        </p>
                        <p className="text-dark">
                          2 . We will understand your business{" "}
                        </p>

                        <p className="text-dark">
                          3 . the scope of the project.{" "}
                        </p>
                        <p className="text-dark">
                          4 . We will understand your business and the scope of
                          the project.{" "}
                        </p>
                        <p className="text-dark">
                          5 . We will understand scope of the project.{" "}
                        </p>
                      </div>

                      <div>
                        <h5 className="header">Our Methology</h5>
                        <h6 className="header">
                          Stage 1: Pre Assessment Phase (Off- Site)
                        </h6>
                        <p className="text-dark">
                          1 . We will understand your business and the scope of
                          the project.{" "}
                        </p>
                        <p className="text-dark">
                          2 . We will understand your business{" "}
                        </p>

                        <p className="text-dark">
                          3 . the scope of the project.{" "}
                        </p>
                        <p className="text-dark">
                          4 . We will understand your business and the scope of
                          the project.{" "}
                        </p>
                        <p className="text-dark">
                          5 . We will understand scope of the project.{" "}
                        </p>

                        <h6 className="header">
                          Stage3: CHD Discovery Phase (On- Site)
                        </h6>
                        <p className="text-dark">
                          1 . We will understand your business and the scope of
                          the project.{" "}
                        </p>
                        <p className="text-dark">
                          2 . We will understand your business{" "}
                        </p>

                        <p className="text-dark">
                          3 . the scope of the project.{" "}
                        </p>
                        <p className="text-dark">
                          4 . We will understand your business and the scope of
                          the project.{" "}
                        </p>
                        <p className="text-dark">
                          5 . We will understand scope of the project.{" "}
                        </p>

                        <h6 className="header">
                          Stage 2: CHD Discovery Phase (On- Site)
                        </h6>
                        <p className="text-dark">
                          1 . We will understand your business and the scope of
                          the project.{" "}
                        </p>
                        <p className="text-dark">
                          2 . We will understand your business{" "}
                        </p>

                        <p className="text-dark">
                          3 . the scope of the project.{" "}
                        </p>
                        <p className="text-dark">
                          4 . We will understand your business and the scope of
                          the project.{" "}
                        </p>
                        <p className="text-dark">
                          5 . We will understand scope of the project.{" "}
                        </p>
                      </div>
                      <div>
                        <h5 className="header">Associated services</h5>
                        <a href="/PCI DSS Scope Assessment">
                          {" "}
                          • PCI DSS Scope Assessment
                        </a>
                        <br />
                        <a href="/PCI DSS Scope Reduction">
                          • PCI DSS Scope Reductiont
                        </a>
                      </div>
                    </div>
                  )}

                  {tabIndex === 7 && (
                    <div>
                      <h3 className="header"> Remidiation Support</h3>
                      <p className="text-dark">
                        We will understand your business and the scope of the
                        project. We will also understand the business
                        requirements and the business objectives. We will
                        understand the business processes and the business
                        environment. We will also understand the business
                        constraints and the business risks.
                      </p>
                      <p style={{ borderBottom: "2px solid lightgray" }}></p>
                      <div className="text-center">
                        <h4 className="header">
                          Fast Track Your PCI DSS Compliance
                        </h4>
                        <p className="text-dark">
                          Request an initial PCI DSS Compliance Program
                          consultation.
                        </p>

                        <button
                          style={{
                            padding: "7px",
                            border: "1px solid lightgray",
                            borderRadius: "8px",
                          }}
                        >
                          REQUEST FREE CONSULTATION
                        </button>
                      </div>

                      <p
                        className="mt-4"
                        style={{ borderBottom: "2px solid lightgray" }}
                      ></p>

                      <div>
                        <h5 className="header">Overview</h5>
                        <p className="text-dark">
                          We will understand your business and the scope of the
                          project. We will also understand the business
                          requirements and the business objectives. We will
                          understand the business processes and the business
                          environment. We will also understand the business
                          constraints and the business risks.
                        </p>
                      </div>

                      <div>
                        <h5 className="header">Key Benefits</h5>
                        <p className="text-dark">
                          1 . We will understand your business and the scope of
                          the project.{" "}
                        </p>
                        <p className="text-dark">
                          2 . We will understand your business{" "}
                        </p>

                        <p className="text-dark">
                          3 . the scope of the project.{" "}
                        </p>
                        <p className="text-dark">
                          4 . We will understand your business and the scope of
                          the project.{" "}
                        </p>
                        <p className="text-dark">
                          5 . We will understand scope of the project.{" "}
                        </p>
                      </div>

                      <div>
                        <h5 className="header">Our Methology</h5>
                        <h6 className="header">
                          Stage 1: Pre Assessment Phase (Off- Site)
                        </h6>
                        <p className="text-dark">
                          1 . We will understand your business and the scope of
                          the project.{" "}
                        </p>
                        <p className="text-dark">
                          2 . We will understand your business{" "}
                        </p>

                        <p className="text-dark">
                          3 . the scope of the project.{" "}
                        </p>
                        <p className="text-dark">
                          4 . We will understand your business and the scope of
                          the project.{" "}
                        </p>
                        <p className="text-dark">
                          5 . We will understand scope of the project.{" "}
                        </p>

                        <h6 className="header">
                          Stage3: CHD Discovery Phase (On- Site)
                        </h6>
                        <p className="text-dark">
                          1 . We will understand your business and the scope of
                          the project.{" "}
                        </p>
                        <p className="text-dark">
                          2 . We will understand your business{" "}
                        </p>

                        <p className="text-dark">
                          3 . the scope of the project.{" "}
                        </p>
                        <p className="text-dark">
                          4 . We will understand your business and the scope of
                          the project.{" "}
                        </p>
                        <p className="text-dark">
                          5 . We will understand scope of the project.{" "}
                        </p>

                        <h6 className="header">
                          Stage 2: CHD Discovery Phase (On- Site)
                        </h6>
                        <p className="text-dark">
                          1 . We will understand your business and the scope of
                          the project.{" "}
                        </p>
                        <p className="text-dark">
                          2 . We will understand your business{" "}
                        </p>

                        <p className="text-dark">
                          3 . the scope of the project.{" "}
                        </p>
                        <p className="text-dark">
                          4 . We will understand your business and the scope of
                          the project.{" "}
                        </p>
                        <p className="text-dark">
                          5 . We will understand scope of the project.{" "}
                        </p>
                      </div>
                      <div>
                        <h5 className="header">Associated services</h5>
                        <a href="/PCI DSS Scope Assessment">
                          {" "}
                          • PCI DSS Scope Assessment
                        </a>
                        <br />
                        <a href="/PCI DSS Scope Reduction">
                          • PCI DSS Scope Reductiont
                        </a>
                      </div>
                    </div>
                  )}

                  {tabIndex === 8 && (
                    <div>
                      <h3 className="header">Awareness Training</h3>
                      <p className="text-dark">
                        We will understand your business and the scope of the
                        project. We will also understand the business
                        requirements and the business objectives. We will
                        understand the business processes and the business
                        environment. We will also understand the business
                        constraints and the business risks.
                      </p>
                      <p style={{ borderBottom: "2px solid lightgray" }}></p>
                      <div className="text-center">
                        <h4 className="header">
                          Fast Track Your PCI DSS Compliance
                        </h4>
                        <p className="text-dark">
                          Request an initial PCI DSS Compliance Program
                          consultation.
                        </p>

                        <button
                          style={{
                            padding: "7px",
                            border: "1px solid lightgray",
                            borderRadius: "8px",
                          }}
                        >
                          REQUEST FREE CONSULTATION
                        </button>
                      </div>

                      <p
                        className="mt-4"
                        style={{ borderBottom: "2px solid lightgray" }}
                      ></p>

                      <div>
                        <h5 className="header">Overview</h5>
                        <p className="text-dark">
                          We will understand your business and the scope of the
                          project. We will also understand the business
                          requirements and the business objectives. We will
                          understand the business processes and the business
                          environment. We will also understand the business
                          constraints and the business risks.
                        </p>
                      </div>

                      <div>
                        <h5 className="header">Key Benefits</h5>
                        <p className="text-dark">
                          1 . We will understand your business and the scope of
                          the project.{" "}
                        </p>
                        <p className="text-dark">
                          2 . We will understand your business{" "}
                        </p>

                        <p className="text-dark">
                          3 . the scope of the project.{" "}
                        </p>
                        <p className="text-dark">
                          4 . We will understand your business and the scope of
                          the project.{" "}
                        </p>
                        <p className="text-dark">
                          5 . We will understand scope of the project.{" "}
                        </p>
                      </div>

                      <div>
                        <h5 className="header">Our Methology</h5>
                        <h6 className="header">
                          Stage 1: Pre Assessment Phase (Off- Site)
                        </h6>
                        <p className="text-dark">
                          1 . We will understand your business and the scope of
                          the project.{" "}
                        </p>
                        <p className="text-dark">
                          2 . We will understand your business{" "}
                        </p>

                        <p className="text-dark">
                          3 . the scope of the project.{" "}
                        </p>
                        <p className="text-dark">
                          4 . We will understand your business and the scope of
                          the project.{" "}
                        </p>
                        <p className="text-dark">
                          5 . We will understand scope of the project.{" "}
                        </p>

                        <h6 className="header">
                          Stage3: CHD Discovery Phase (On- Site)
                        </h6>
                        <p className="text-dark">
                          1 . We will understand your business and the scope of
                          the project.{" "}
                        </p>
                        <p className="text-dark">
                          2 . We will understand your business{" "}
                        </p>

                        <p className="text-dark">
                          3 . the scope of the project.{" "}
                        </p>
                        <p className="text-dark">
                          4 . We will understand your business and the scope of
                          the project.{" "}
                        </p>
                        <p className="text-dark">
                          5 . We will understand scope of the project.{" "}
                        </p>

                        <h6 className="header">
                          Stage 2: CHD Discovery Phase (On- Site)
                        </h6>
                        <p className="text-dark">
                          1 . We will understand your business and the scope of
                          the project.{" "}
                        </p>
                        <p className="text-dark">
                          2 . We will understand your business{" "}
                        </p>

                        <p className="text-dark">
                          3 . the scope of the project.{" "}
                        </p>
                        <p className="text-dark">
                          4 . We will understand your business and the scope of
                          the project.{" "}
                        </p>
                        <p className="text-dark">
                          5 . We will understand scope of the project.{" "}
                        </p>
                      </div>
                      <div>
                        <h5 className="header">Associated services</h5>
                        <a href="/PCI DSS Scope Assessment">
                          {" "}
                          • PCI DSS Scope Assessment
                        </a>
                        <br />
                        <a href="/PCI DSS Scope Reduction">
                          • PCI DSS Scope Reductiont
                        </a>
                      </div>
                    </div>
                  )}

                  {tabIndex === 9 && (
                    <div>
                      <h3 className="header"> Scan And Testing</h3>
                      <p className="text-dark">
                        We will understand your business and the scope of the
                        project. We will also understand the business
                        requirements and the business objectives. We will
                        understand the business processes and the business
                        environment. We will also understand the business
                        constraints and the business risks.
                      </p>
                      <p style={{ borderBottom: "2px solid lightgray" }}></p>
                      <div className="text-center">
                        <h4 className="header">
                          Fast Track Your PCI DSS Compliance
                        </h4>
                        <p className="text-dark">
                          Request an initial PCI DSS Compliance Program
                          consultation.
                        </p>

                        <button
                          style={{
                            padding: "7px",
                            border: "1px solid lightgray",
                            borderRadius: "8px",
                          }}
                        >
                          REQUEST FREE CONSULTATION
                        </button>
                      </div>

                      <p
                        className="mt-4"
                        style={{ borderBottom: "2px solid lightgray" }}
                      ></p>

                      <div>
                        <h5 className="header">Overview</h5>
                        <p className="text-dark">
                          We will understand your business and the scope of the
                          project. We will also understand the business
                          requirements and the business objectives. We will
                          understand the business processes and the business
                          environment. We will also understand the business
                          constraints and the business risks.
                        </p>
                      </div>

                      <div>
                        <h5 className="header">Key Benefits</h5>
                        <p className="text-dark">
                          1 . We will understand your business and the scope of
                          the project.{" "}
                        </p>
                        <p className="text-dark">
                          2 . We will understand your business{" "}
                        </p>

                        <p className="text-dark">
                          3 . the scope of the project.{" "}
                        </p>
                        <p className="text-dark">
                          4 . We will understand your business and the scope of
                          the project.{" "}
                        </p>
                        <p className="text-dark">
                          5 . We will understand scope of the project.{" "}
                        </p>
                      </div>

                      <div>
                        <h5 className="header">Our Methology</h5>
                        <h6 className="header">
                          Stage 1: Pre Assessment Phase (Off- Site)
                        </h6>
                        <p className="text-dark">
                          1 . We will understand your business and the scope of
                          the project.{" "}
                        </p>
                        <p className="text-dark">
                          2 . We will understand your business{" "}
                        </p>

                        <p className="text-dark">
                          3 . the scope of the project.{" "}
                        </p>
                        <p className="text-dark">
                          4 . We will understand your business and the scope of
                          the project.{" "}
                        </p>
                        <p className="text-dark">
                          5 . We will understand scope of the project.{" "}
                        </p>

                        <h6 className="header">
                          Stage3: CHD Discovery Phase (On- Site)
                        </h6>
                        <p className="text-dark">
                          1 . We will understand your business and the scope of
                          the project.{" "}
                        </p>
                        <p className="text-dark">
                          2 . We will understand your business{" "}
                        </p>

                        <p className="text-dark">
                          3 . the scope of the project.{" "}
                        </p>
                        <p className="text-dark">
                          4 . We will understand your business and the scope of
                          the project.{" "}
                        </p>
                        <p className="text-dark">
                          5 . We will understand scope of the project.{" "}
                        </p>

                        <h6 className="header">
                          Stage 2: CHD Discovery Phase (On- Site)
                        </h6>
                        <p className="text-dark">
                          1 . We will understand your business and the scope of
                          the project.{" "}
                        </p>
                        <p className="text-dark">
                          2 . We will understand your business{" "}
                        </p>

                        <p className="text-dark">
                          3 . the scope of the project.{" "}
                        </p>
                        <p className="text-dark">
                          4 . We will understand your business and the scope of
                          the project.{" "}
                        </p>
                        <p className="text-dark">
                          5 . We will understand scope of the project.{" "}
                        </p>
                      </div>
                      <div>
                        <h5 className="header">Associated services</h5>
                        <a href="/PCI DSS Scope Assessment">
                          {" "}
                          • PCI DSS Scope Assessment
                        </a>
                        <br />
                        <a href="/PCI DSS Scope Reduction">
                          • PCI DSS Scope Reductiont
                        </a>
                      </div>
                    </div>
                  )}

                  {tabIndex === 10 && (
                    <div>
                      <h3 className="header"> Evidence Review</h3>
                      <p className="text-dark">
                        We will understand your business and the scope of the
                        project. We will also understand the business
                        requirements and the business objectives. We will
                        understand the business processes and the business
                        environment. We will also understand the business
                        constraints and the business risks.
                      </p>
                      <p style={{ borderBottom: "2px solid lightgray" }}></p>
                      <div className="text-center">
                        <h4 className="header">
                          Fast Track Your PCI DSS Compliance
                        </h4>
                        <p className="text-dark">
                          Request an initial PCI DSS Compliance Program
                          consultation.
                        </p>

                        <button
                          style={{
                            padding: "7px",
                            border: "1px solid lightgray",
                            borderRadius: "8px",
                          }}
                        >
                          REQUEST FREE CONSULTATION
                        </button>
                      </div>

                      <p
                        className="mt-4"
                        style={{ borderBottom: "2px solid lightgray" }}
                      ></p>

                      <div>
                        <h5 className="header">Overview</h5>
                        <p className="text-dark">
                          We will understand your business and the scope of the
                          project. We will also understand the business
                          requirements and the business objectives. We will
                          understand the business processes and the business
                          environment. We will also understand the business
                          constraints and the business risks.
                        </p>
                      </div>

                      <div>
                        <h5 className="header">Key Benefits</h5>
                        <p className="text-dark">
                          1 . We will understand your business and the scope of
                          the project.{" "}
                        </p>
                        <p className="text-dark">
                          2 . We will understand your business{" "}
                        </p>

                        <p className="text-dark">
                          3 . the scope of the project.{" "}
                        </p>
                        <p className="text-dark">
                          4 . We will understand your business and the scope of
                          the project.{" "}
                        </p>
                        <p className="text-dark">
                          5 . We will understand scope of the project.{" "}
                        </p>
                      </div>

                      <div>
                        <h5 className="header">Our Methology</h5>
                        <h6 className="header">
                          Stage 1: Pre Assessment Phase (Off- Site)
                        </h6>
                        <p className="text-dark">
                          1 . We will understand your business and the scope of
                          the project.{" "}
                        </p>
                        <p className="text-dark">
                          2 . We will understand your business{" "}
                        </p>

                        <p className="text-dark">
                          3 . the scope of the project.{" "}
                        </p>
                        <p className="text-dark">
                          4 . We will understand your business and the scope of
                          the project.{" "}
                        </p>
                        <p className="text-dark">
                          5 . We will understand scope of the project.{" "}
                        </p>

                        <h6 className="header">
                          Stage3: CHD Discovery Phase (On- Site)
                        </h6>
                        <p className="text-dark">
                          1 . We will understand your business and the scope of
                          the project.{" "}
                        </p>
                        <p className="text-dark">
                          2 . We will understand your business{" "}
                        </p>

                        <p className="text-dark">
                          3 . the scope of the project.{" "}
                        </p>
                        <p className="text-dark">
                          4 . We will understand your business and the scope of
                          the project.{" "}
                        </p>
                        <p className="text-dark">
                          5 . We will understand scope of the project.{" "}
                        </p>

                        <h6 className="header">
                          Stage 2: CHD Discovery Phase (On- Site)
                        </h6>
                        <p className="text-dark">
                          1 . We will understand your business and the scope of
                          the project.{" "}
                        </p>
                        <p className="text-dark">
                          2 . We will understand your business{" "}
                        </p>

                        <p className="text-dark">
                          3 . the scope of the project.{" "}
                        </p>
                        <p className="text-dark">
                          4 . We will understand your business and the scope of
                          the project.{" "}
                        </p>
                        <p className="text-dark">
                          5 . We will understand scope of the project.{" "}
                        </p>
                      </div>
                      <div>
                        <h5 className="header">Associated services</h5>
                        <a href="/PCI DSS Scope Assessment">
                          {" "}
                          • PCI DSS Scope Assessment
                        </a>
                        <br />
                        <a href="/PCI DSS Scope Reduction">
                          • PCI DSS Scope Reductiont
                        </a>
                      </div>
                    </div>
                  )}

                  {tabIndex === 11 && (
                    <div>
                      <h3 className="header">
                        {" "}
                        Final Assessment And Attestation
                      </h3>
                      <p className="text-dark">
                        We will understand your business and the scope of the
                        project. We will also understand the business
                        requirements and the business objectives. We will
                        understand the business processes and the business
                        environment. We will also understand the business
                        constraints and the business risks.
                      </p>
                      <p style={{ borderBottom: "2px solid lightgray" }}></p>
                      <div className="text-center">
                        <h4 className="header">
                          Fast Track Your PCI DSS Compliance
                        </h4>
                        <p className="text-dark">
                          Request an initial PCI DSS Compliance Program
                          consultation.
                        </p>

                        <button
                          style={{
                            padding: "7px",
                            border: "1px solid lightgray",
                            borderRadius: "8px",
                          }}
                        >
                          REQUEST FREE CONSULTATION
                        </button>
                      </div>

                      <p
                        className="mt-4"
                        style={{ borderBottom: "2px solid lightgray" }}
                      ></p>

                      <div>
                        <h5 className="header">Overview</h5>
                        <p className="text-dark">
                          We will understand your business and the scope of the
                          project. We will also understand the business
                          requirements and the business objectives. We will
                          understand the business processes and the business
                          environment. We will also understand the business
                          constraints and the business risks.
                        </p>
                      </div>

                      <div>
                        <h5 className="header">Key Benefits</h5>
                        <p className="text-dark">
                          1 . We will understand your business and the scope of
                          the project.{" "}
                        </p>
                        <p className="text-dark">
                          2 . We will understand your business{" "}
                        </p>

                        <p className="text-dark">
                          3 . the scope of the project.{" "}
                        </p>
                        <p className="text-dark">
                          4 . We will understand your business and the scope of
                          the project.{" "}
                        </p>
                        <p className="text-dark">
                          5 . We will understand scope of the project.{" "}
                        </p>
                      </div>

                      <div>
                        <h5 className="header">Our Methology</h5>
                        <h6 className="header">
                          Stage 1: Pre Assessment Phase (Off- Site)
                        </h6>
                        <p className="text-dark">
                          1 . We will understand your business and the scope of
                          the project.{" "}
                        </p>
                        <p className="text-dark">
                          2 . We will understand your business{" "}
                        </p>

                        <p className="text-dark">
                          3 . the scope of the project.{" "}
                        </p>
                        <p className="text-dark">
                          4 . We will understand your business and the scope of
                          the project.{" "}
                        </p>
                        <p className="text-dark">
                          5 . We will understand scope of the project.{" "}
                        </p>

                        <h6 className="header">
                          Stage3: CHD Discovery Phase (On- Site)
                        </h6>
                        <p className="text-dark">
                          1 . We will understand your business and the scope of
                          the project.{" "}
                        </p>
                        <p className="text-dark">
                          2 . We will understand your business{" "}
                        </p>

                        <p className="text-dark">
                          3 . the scope of the project.{" "}
                        </p>
                        <p className="text-dark">
                          4 . We will understand your business and the scope of
                          the project.{" "}
                        </p>
                        <p className="text-dark">
                          5 . We will understand scope of the project.{" "}
                        </p>

                        <h6 className="header">
                          Stage 2: CHD Discovery Phase (On- Site)
                        </h6>
                        <p className="text-dark">
                          1 . We will understand your business and the scope of
                          the project.{" "}
                        </p>
                        <p className="text-dark">
                          2 . We will understand your business{" "}
                        </p>

                        <p className="text-dark">
                          3 . the scope of the project.{" "}
                        </p>
                        <p className="text-dark">
                          4 . We will understand your business and the scope of
                          the project.{" "}
                        </p>
                        <p className="text-dark">
                          5 . We will understand scope of the project.{" "}
                        </p>
                      </div>
                      <div>
                        <h5 className="header">Associated services</h5>
                        <a href="/PCI DSS Scope Assessment">
                          {" "}
                          • PCI DSS Scope Assessment
                        </a>
                        <br />
                        <a href="/PCI DSS Scope Reduction">
                          • PCI DSS Scope Reductiont
                        </a>
                      </div>
                    </div>
                  )}

                  {tabIndex === 12 && (
                    <div>
                      <h3 className="header"> Continuous Compliance Support</h3>
                      <p className="text-dark">
                        We will understand your business and the scope of the
                        project. We will also understand the business
                        requirements and the business objectives. We will
                        understand the business processes and the business
                        environment. We will also understand the business
                        constraints and the business risks.
                      </p>
                      <p style={{ borderBottom: "2px solid lightgray" }}></p>
                      <div className="text-center">
                        <h4 className="header">
                          Fast Track Your PCI DSS Compliance
                        </h4>
                        <p className="text-dark">
                          Request an initial PCI DSS Compliance Program
                          consultation.
                        </p>

                        <button
                          style={{
                            padding: "7px",
                            border: "1px solid lightgray",
                            borderRadius: "8px",
                          }}
                        >
                          REQUEST FREE CONSULTATION
                        </button>
                      </div>

                      <p
                        className="mt-4"
                        style={{ borderBottom: "2px solid lightgray" }}
                      ></p>

                      <div>
                        <h5 className="header">Overview</h5>
                        <p className="text-dark">
                          We will understand your business and the scope of the
                          project. We will also understand the business
                          requirements and the business objectives. We will
                          understand the business processes and the business
                          environment. We will also understand the business
                          constraints and the business risks.
                        </p>
                      </div>

                      <div>
                        <h5 className="header">Key Benefits</h5>
                        <p className="text-dark">
                          1 . We will understand your business and the scope of
                          the project.{" "}
                        </p>
                        <p className="text-dark">
                          2 . We will understand your business{" "}
                        </p>

                        <p className="text-dark">
                          3 . the scope of the project.{" "}
                        </p>
                        <p className="text-dark">
                          4 . We will understand your business and the scope of
                          the project.{" "}
                        </p>
                        <p className="text-dark">
                          5 . We will understand scope of the project.{" "}
                        </p>
                      </div>

                      <div>
                        <h5 className="header">Our Methology</h5>
                        <h6 className="header">
                          Stage 1: Pre Assessment Phase (Off- Site)
                        </h6>
                        <p className="text-dark">
                          1 . We will understand your business and the scope of
                          the project.{" "}
                        </p>
                        <p className="text-dark">
                          2 . We will understand your business{" "}
                        </p>

                        <p className="text-dark">
                          3 . the scope of the project.{" "}
                        </p>
                        <p className="text-dark">
                          4 . We will understand your business and the scope of
                          the project.{" "}
                        </p>
                        <p className="text-dark">
                          5 . We will understand scope of the project.{" "}
                        </p>

                        <h6 className="header">
                          Stage3: CHD Discovery Phase (On- Site)
                        </h6>
                        <p className="text-dark">
                          1 . We will understand your business and the scope of
                          the project.{" "}
                        </p>
                        <p className="text-dark">
                          2 . We will understand your business{" "}
                        </p>

                        <p className="text-dark">
                          3 . the scope of the project.{" "}
                        </p>
                        <p className="text-dark">
                          4 . We will understand your business and the scope of
                          the project.{" "}
                        </p>
                        <p className="text-dark">
                          5 . We will understand scope of the project.{" "}
                        </p>

                        <h6 className="header">
                          Stage 2: CHD Discovery Phase (On- Site)
                        </h6>
                        <p className="text-dark">
                          1 . We will understand your business and the scope of
                          the project.{" "}
                        </p>
                        <p className="text-dark">
                          2 . We will understand your business{" "}
                        </p>

                        <p className="text-dark">
                          3 . the scope of the project.{" "}
                        </p>
                        <p className="text-dark">
                          4 . We will understand your business and the scope of
                          the project.{" "}
                        </p>
                        <p className="text-dark">
                          5 . We will understand scope of the project.{" "}
                        </p>
                      </div>
                      <div>
                        <h5 className="header">Associated services</h5>
                        <a href="/PCI DSS Scope Assessment">
                          {" "}
                          • PCI DSS Scope Assessment
                        </a>
                        <br />
                        <a href="/PCI DSS Scope Reduction">
                          • PCI DSS Scope Reductiont
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </Col>
            </Row>
          </div>
        </section>

        <section
          id="question"
          className="section-padding--bottom text-center mt-5 pt-4"
        >
          <div className="container">
            <div className="section-title text-center">
              <h2 className="header">Frequently Asked Questions</h2>
              <div className="expanedItem mt-5 mb-5">
                <div className=" expaneditems1">
                  <Accordion>
                    <Accordion.Item className="my-3" eventKey="1">
                      <Accordion.Header>
                        What Is The Most Current Version Of The PCI DSS ?
                      </Accordion.Header>
                      <Accordion.Body>
                        The latest is PCI DSS version 4.0 that replaces version
                        3.2.1 Though no new requirements were added in PCI DSS
                        4.0, the update was designed to eliminate any confusion
                        around effective dates for PCI DSS requirements.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                  <Accordion className="shadaow">
                    <Accordion.Item className="my-3" eventKey="1">
                      <Accordion.Header>
                        What Is The Difference Between CHD And SAD ?
                      </Accordion.Header>
                      <Accordion.Body>
                        Account Data is Organized into two data groups. 1) Card
                        Holder Data (CHD) 2) Sensitive Authentication Data
                        (SAD). CHD covers the Data elements like Primary Account
                        Number (PAN), Cardholder Name, Service Code and
                        Expiration Date. CHD is useful to identify the Card
                        holder, where in SAD Covers data elements like Track
                        Data, CVV, CVC, CAV, CID, PIN / PIN Block. SAD is used
                        for authorizing the card holder to do the transactions.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                  <Accordion className="mt-3">
                    <Accordion.Item className="my-3" eventKey="1">
                      <Accordion.Header>
                        To Whom Does The PCI DSS Apply ?
                      </Accordion.Header>
                      <Accordion.Body>
                        PCI DSS standard can be applied to any organization that
                        accepts, transmits or stores any cardholder data
                        regardless of size or number of transactions.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>

                <div className="expaneditems1 ">
                  <Accordion>
                    <Accordion.Item className="my-3" eventKey="1">
                      <Accordion.Header>
                        If I Only Accept Credit Cards Over The Phone, Does PCI
                        DSS Still Apply To Me ?
                      </Accordion.Header>
                      <Accordion.Body>
                        Yes. any processing, storing or transmitting of payment
                        cardholder data needs to be done under a PCI Compliant
                        environment.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                  <Accordion>
                    <Accordion.Item className="my-3" eventKey="1">
                      <Accordion.Header>
                        How Do I Decide My PCI Compliance ‘Levels’ ?
                      </Accordion.Header>
                      <Accordion.Body>
                        Merchants fall into four merchant levels based on Visa
                        transactions over a 12 month period. The PCI compliance
                        level can be decided by the number of transactions the
                        merchants process each year.
                        <br />
                        Level 1: Merchants that process over 6 million card
                        transactions annually.
                        <br />
                        Level 2: Merchants that process 1 to 6 million
                        transactions annually.
                        <br />
                        Level 3: Merchants that process 20,000 to 1 million
                        transactions annually.
                        <br />
                        Level 4: Merchants that process fewer than 20,000
                        transactions annually.
                        <br />
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>

                  <Accordion>
                    <Accordion.Item className="my-3" eventKey="1">
                      <Accordion.Header>
                        {" "}
                        If I Am Using A Third-Party To Process Payments, Or An
                        Ecommerce Platform, Do I Still Need To Worry About PCI
                        Compliance ?
                      </Accordion.Header>
                      <Accordion.Body>
                        Yes, even if some of the payment processes may reduce
                        your risk of breach or what is in scope for PCI
                        compliance, business cannot ignore it.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default PciDssPayment;

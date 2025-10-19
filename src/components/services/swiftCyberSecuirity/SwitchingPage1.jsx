import React, { useState } from "react";
import SwiftArchitectureChangingButtons from "../SwiftArchitectureChangingButtons";
import { Accordion } from "react-bootstrap";
import AssesmentChangingPageButton from "./AssesmentChangingPageButton";
function SwitchingPage1() {
  const [activePage, setActivePage] = useState("page2");
  const showPage = (pageId) => {
    setActivePage(pageId);
  };

  return (
    <div>
      <div>
        <div className="row">
          <div className="col-md-6">
            <button
              className={`  mt-5 px-5 py-2 w-100 ${activePage === "page1" ? "dipt-building-blocks-buttons" : ""}`}
              onClick={() => showPage("page1")}
            >
              <span className="building-blocks-btn-p">
                Swift Cybersecurity Consultation
              </span>
            </button>
          </div>
          <div className="col-md-6">
            <button
              className={`  mt-5 px-5 py-2 w-100 ${activePage === "page2" ? "dipt-building-blocks-buttons" : ""}`}
              onClick={() => showPage("page2")}
            >
              <span className="building-blocks-btn-p">
                Swift CSP Assessment
              </span>
            </button>
          </div>
        </div>

        <div className="mt-5">
          {activePage === "page2" ? (
            <div>
              <section className=" ">
                <div className="security-control-header-title">
                  <h4 className="dipt-security-control-title">
                    SCOPE OF SECURITY CONTROLS
                  </h4>
                  <p className="dipt-security-control-p">
                    The scope of security controls in CSCF encompasses a defined
                    set of components in the user’s environment.
                  </p>
                </div>
                <div className="row d-flex justify-content-center">
                  <div className="dipt-security-control-box m-3 col-md-3">
                    <p className="dipt-security-control-order-lists">
                      <span className="dipt-lists-title">
                        {" "}
                        In-Scope Components:
                      </span>
                    </p>
                    <div className="dipt-security-control-lists-parent">
                      <li className="dipt-security-control-lists">
                        User’s SWIFT Infrastructure
                      </li>
                      <li className="dipt-security-control-lists">
                        Operators/Operator PCs
                      </li>
                      <li className="dipt-security-control-lists">
                        Data Exchange Layer
                      </li>
                      <li className="dipt-security-control-lists">
                        Middleware Server
                      </li>
                      <li className="dipt-security-control-lists">
                        File Transfer Server
                      </li>
                    </div>
                  </div>
                  <div className="dipt-security-control-box m-3 col-md-3">
                    <p className="dipt-security-control-order-lists">
                      <span className="dipt-lists-title">
                        {" "}
                        Out of Scope Components:
                      </span>
                    </p>
                    <div className="dipt-security-control-lists-parent">
                      <li className="dipt-security-control-lists">
                        User back office
                      </li>
                      <li className="dipt-security-control-lists">
                        General Enterprise IT Environment
                      </li>
                      <li className="dipt-security-control-lists">
                        Network/Internet Connections
                      </li>
                      <li className="dipt-security-control-lists">
                        Test and Development Systems
                      </li>
                    </div>
                    {/* </p> */}
                  </div>
                  <div className="dipt-security-control-box m-3 col-md-3">
                    <p className="dipt-security-control-order-lists">
                      <span className="dipt-lists-title">
                        Co-hosting Components:
                      </span>
                    </p>
                    <div className="dipt-security-control-lists-parent">
                      <p className="dipt-security-control-lists">
                        Non-SWIFT related systems hosted in the secure zone must
                        be protected to an equivalent level of security and
                        trust by applying controls applicable to the
                        Swift-related components.
                      </p>
                    </div>
                    {/* </p> */}
                  </div>
                  <div className="dipt-security-control-box m-3 col-md-3">
                    <p className="dipt-security-control-order-lists">
                      <span className="dipt-lists-title">
                        Sharing/Reusing Credentials:
                      </span>
                    </p>
                    <div className="dipt-security-control-lists-parent">
                      <p className="dipt-security-control-lists">
                        Services such as transaction queries, pre-validation,
                        and screening are typically out of scope unless they
                        share credentials and entitlements with business
                        transactions, which then brings those systems into
                        scope.
                      </p>
                    </div>
                    {/* </p> */}
                  </div>
                </div>

                <div className="cscf-image-container">
                  <img loading="lazy" decoding="async"
                    className="cscf-image"
                    src="/assets/images/services/SwiftCyber/CSCF.webp"
                    alt=""
                  />
                </div>
              </section>
              {/* SCOPE OF SECURITY CONTROLS SECTION END*/}

              {/* SWIFT ARCHITECHTURE TYPES SECTION START */}
              <section className="swift-architecture-types-section-container">
                <div className="swift-architecture-types-header-title">
                  <h4 className="dipt-swift-architecture-title">
                    SWIFT Architecture Types
                  </h4>
                  <p className="dipt-swift-architecture-p">
                    Users must select from five reference architecture types
                    that best reflect their deployment to identify in-scope
                    components, using a CSP decision tree for guidance. The
                    choice of architecture, which should be the most
                    encompassing, affects the applicability of certain security
                    controls. These architectures differ primarily based on the
                    ownership of components or licenses.
                  </p>
                </div>

                <div className="dipt-swift-architecture-buttons-container">
                  <SwiftArchitectureChangingButtons />
                </div>

                <div className="dipt-independent-framework-container">
                  <h3 className="dipt-independent-framework-title">
                    INDEPENDENT ASSESSMENT FRAMEWORK
                  </h3>
                  <p className="dipt-independent-framework-p">
                    Swift mandates the independent assessment of all mandatory
                    controls for attestations, as supported by Swift’s Board and
                    Oversight, to ensure integrity, consistency, and accuracy.
                    Independent assessors must verify that these controls
                    achieve their objectives, cover all in-scope components, and
                    address risk drivers. While implementing advisory controls
                    is advised but optional, they also require independent
                    assessment if included in the attestation. The outcomes,
                    reflecting compliance levels, must be documented annually in
                    the KYC Security Attestation (KYC-SA) application,
                    accompanied by assessment reports and confirmation letters.
                  </p>
                </div>
                <div className="dipt-assesment-types-contaoiner">
                  <h3 className="dipt-assesment-types-title">
                    Asessment Types
                  </h3>
                  <p className="dipt-assesment-types-p">
                    There are three types of assessment under the CSP
                  </p>
                </div>

                <div className="dipt-assesment-types-box-container">
                  <div className="dipt-assesment-types-box">
                    <p className="dipt-assesment-types-order-lists">
                      <span className="dipt-assesment-types-header-title">
                        {" "}
                        Self-Assessment:
                      </span>
                    </p>
                    <div className="dipt-assesment-types-box-lists-parent">
                      <p className="dipt-assesment-types-box-title">
                        Self-Assessments, conducted by risk-managing functions
                        without independent review, are labeled as ‘not
                        compliant’ in the KYC Security Attestation (KYC-SA)
                        application. This status is immediately visible to
                        counterparts and flagged in the Know-Your-Customer for
                        Supervisors (KYS) app for supervised users, with
                        bi-annual reports available. Choosing a self-assessment
                        is a strategic decision for Swift users, fully aware of
                        its non-compliance implications.
                      </p>
                    </div>
                  </div>
                  <div className="dipt-assesment-types-box">
                    <p className="dipt-assesment-types-order-lists">
                      <span className="dipt-assesment-types-header-title">
                        {" "}
                        Community Standard Assessment:
                      </span>
                    </p>
                    <div className="dipt-assesment-types-box-lists-parent">
                      <p className="dipt-assesment-types-box-title">
                        Swift recognizes two types of independent assessments:
                        External, carried out by an independent organization,
                        and Internal, conducted by the user’s own independent
                        department (e.g., compliance, risk management, internal
                        audit), separate from the attesting first
                        line-of-defense. Assessors, whether internal or
                        external, must have relevant cyber-security control
                        assessment experience and qualifications.
                      </p>
                    </div>
                  </div>
                  <div className="dipt-assesment-types-box">
                    <p className="dipt-assesment-types-order-lists">
                      <span className="dipt-assesment-types-header-title">
                        SWIFT-Mandated External Assessment:
                      </span>
                    </p>
                    <div className="dipt-assesment-types-box-lists-parent">
                      <p className="dipt-assesment-types-box-title">
                        Swift may require specific BICs to undergo external
                        assessments to verify their KYC-SA attestations’
                        accuracy, as stated in the Customer Security Controls
                        Policy (CSCP) under “Quality assurance.” This process
                        involves an independent external assessor confirming the
                        user’s adherence to the applicable controls. Compliance
                        with such mandated external assessments is crucial for
                        maintaining robust security within the Swift network.
                        Failure to complete these assessments constitutes a
                        violation of the CSCP, and Swift may report
                        non-compliance to the appropriate supervisory bodies
                        and/or the non-compliant BICs’ counterparties.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* SCOPE OF SECURITY CONTROLS SECTION START*/}
              <section className="swift-architecture-types-section-container">
                <div className="choosing-assessment-provider-container">
                  <h3 className="choosing-assessment-provider-header-title">
                    Choosing Assessment Provider
                  </h3>
                  <p className="choosing-assessment-provider-p">
                    As a proud member of the Swift CSP Certified Assessors
                    Directory, our company is recognized for our expertise and
                    commitment to the Swift Customer Security Programme (CSP).
                    This directory, launched in January 2024, lists providers
                    and assessors who have demonstrated thorough knowledge and
                    understanding of Swift and the CSP, meeting rigorous
                    eligibility criteria including external cybersecurity
                    certifications and successful exam completion. Our inclusion
                    signifies our capability to conduct independent assessments
                    that adhere to Swift’s high standards, ensuring the security
                    and integrity of your transactions within the Swift network.
                    When partnering with us for your Swift-related assessments,
                    you can be confident in our certified expertise to guide you
                    through the process, enhancing your security posture and
                    compliance with Swift CSP requirements.
                  </p>
                  <a
                    className="choosing-assessment-provider-link"
                    href="/swift-csp-directiory"
                  >
                    SWIFT CSP Assessors Directory | Swift
                  </a>
                </div>

                <div>
                  <h4>Why Right Time Limited</h4>

                  <section id="question" className="mt-5">
                    <div className=" ">
                      <div className="section-title text-center">
                        <div className="expanedItem ">
                          <div className=" expaneditems1">
                            <Accordion className="shadaow">
                              <Accordion.Item className="my-3" eventKey="1">
                                <Accordion.Header>
                                  Right Time Expertise
                                </Accordion.Header>
                                <Accordion.Body>
                                  Thanks to Right Time Limited broad expertise,
                                  experience and proven record of assisting
                                  organisations in both the implementation and
                                  the assessment of Swift security controls, you
                                  can rely on both enhanced security and
                                  compliance with the CSP framework.
                                </Accordion.Body>
                              </Accordion.Item>
                            </Accordion>
                            <Accordion>
                              <Accordion.Item className="my-3" eventKey="1">
                                <Accordion.Header>
                                  Tailored approach
                                </Accordion.Header>
                                <Accordion.Body>
                                  Right Time Limited tailors its work to each
                                  individual client’s needs, to ensure our
                                  solutions add value where you most need it.
                                  Ranging from implementing an ISO27K-compliant
                                  GRC security program or a third party security
                                  management system to providing DORA and NIS2
                                  assessments and implementations – always in a
                                  pragmatic way, tailored to your needs.
                                </Accordion.Body>
                              </Accordion.Item>
                            </Accordion>
                          </div>

                          <div className="expaneditems1 ">
                            <Accordion>
                              <Accordion.Item className="my-3" eventKey="1">
                                <Accordion.Header>
                                  Well-versed in Swift CSP{" "}
                                </Accordion.Header>
                                <Accordion.Body>
                                  Our experts are well-versed in the Swift CSP
                                  controls and implementation guidelines, on top
                                  of their strong financial sector focus. This
                                  enables them to understand the complex
                                  regulatory landscape and the evolving cyber
                                  security threats.{" "}
                                </Accordion.Body>
                              </Accordion.Item>
                            </Accordion>
                            <Accordion>
                              <Accordion.Item className="my-3" eventKey="1">
                                <Accordion.Header>
                                  Relevant certifications
                                </Accordion.Header>
                                <Accordion.Body>
                                  All our Lead Auditors have proven experience
                                  in Swift CSP assessments, IT audits and ISO27K
                                  implementations and assessments, and have
                                  relevant certifications including the Swift
                                  Certified Assessors certification and a
                                  combination of CISA, CISM, CISSP, ISO27K Lead
                                  Auditor, etc. Furthermore, our low
                                  partner-to-staff ratio means high involvement
                                  and guidance from partners and experienced
                                  staff, and a solid and stable team to perform
                                  the assessments.{" "}
                                </Accordion.Body>
                              </Accordion.Item>
                            </Accordion>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </section>

              {/* SWIFT ARCHITECHTURE TYPES SECTION END */}

              {/* OUR ASSESMENT PPROCESS SECTOIN START*/}
              <section className="dipt-our-assesment-process-section-container">
                <div>
                  <h3 className="dipt-our-assesment-process-header">
                    Our Methodology{" "}
                  </h3>
                </div>
                <div className="dipt-assesment-process-changing-page-container">
                  <AssesmentChangingPageButton></AssesmentChangingPageButton>
                </div>
              </section>
              {/* OUR ASSESMENT PPROCESS SECTOIN END*/}

              {/* Elevate Your Cybersecurity with Swift CSP Assessment Services section start */}
              <section className="cybersecurity-assesment-services-container">
                <div className="cybersecurity-assesment-services-parent">
                  <div className="cybersecurity-assesment-services-details-container">
                    <h3 className="cybersecurity-assesment-services-title">
                      Elevate Your Cybersecurity with Swift CSP Assessment
                      Services
                    </h3>
                    <p className="cybersecurity-assesment-services-p">
                      In today's rapidly evolving cyber landscape, ensuring the
                      security and compliance of your financial transactions is
                      more crucial than ever. As a recognized member of the
                      Swift CSP Certified Assessors Directory, we are your
                      trusted partner in navigating the complexities of the
                      Swift Customer Security Programme (CSP). Our expert team
                      is equipped with the knowledge, experience, and
                      certifications needed to provide comprehensive assessment
                      services that not only meet but exceed Swift's stringent
                      security requirements.
                    </p>
                    <button className="cybersecurity-assesment-services-btn">
                      Contact us today
                    </button>
                  </div>
                  <div className="cybersecurity-assesment-services-img-container">
                    <img loading="lazy" decoding="async"
                      src="/assets/images/services/SwiftCyber/csp-services.webp"
                      alt=""
                    />
                  </div>
                </div>
              </section>
            </div>
          ) : (
            <div>
              <div className="row">
                <div className="col-md-6">
                  <h3>
                    What happens if you don't submit your Swift CSCF 2024
                    attestation?
                  </h3>
                  <img loading="lazy" decoding="async"
                    className="rounded"
                    style={{ width: "100%" }}
                    src="/assets/images/services/SwiftCyber/Pic01.webp"
                    alt=""
                  />
                </div>

                <div className="col-md-6">
                  <p className="mt-5 pt-5">
                    The introduction of Swift’s Customer Security Programme
                    Assessor Certification marks a substantial advancement in
                    bolstering the security of financial messaging services.
                    This framework not only boosts the confidence and
                    consistency of Swift users but also grants them access to
                    certified assessments. Failing to comply with the standards,
                    Swift holds the right to report the organizations to the
                    industry regulators.
                  </p>
                </div>
              </div>

              <div className="my-5">
                <h3>Tips for CSCF v2024 implementation:</h3>
                <p>
                  Right Time Limited performed numerous assessments in 2023. Our
                  experience across our assessments shows that getting scoping,
                  planning and definitions right from the outset is vital for a
                  successful assessment. Furthermore, based on our reviews, we
                  believe the following key areas to be most likely to cause
                  non-compliances in 2024:{" "}
                </p>
                <div className="mt-5 row">
                  <div className="col-md-4">
                    <Accordion className="shadaow w-100">
                      <Accordion.Item className="my-3" eventKey="1">
                        <Accordion.Header>
                          Third-Party Risk Management (TPRM)
                        </Accordion.Header>
                        <Accordion.Body>
                          Many organisations have identified and listed their
                          third parties and established a TPRM policy. However,
                          often procedures on how to perform third-party risk
                          assessments are not established or properly
                          implemented, such as performing periodic reviews of
                          the risk assessment and SLA reviews with critical
                          suppliers. This is especially important given that
                          these procedures should now be expanded to also cover
                          a review/assessment of the supplier’s implementation
                          of the CSP controls. Keep in mind that your TPRM
                          processes will also need to comply with DORA by
                          January 2025.{" "}
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>
                  <div className="col-md-4">
                    <Accordion className="shadaow w-100">
                      <Accordion.Item className="my-3" eventKey="1">
                        <Accordion.Header>
                          Cybersecurity Awareness and Training
                        </Accordion.Header>
                        <Accordion.Body>
                          Cybersecurity Awareness and Training Staff training
                          and awareness on cybersecurity is an established
                          practice nowadays, but not always fully in line with
                          best practices. For instance, we have seen that
                          certain groups of people such as senior management or
                          IT staff are excluded from the assessments, although
                          they often pose the biggest risk of losses if their
                          (privileged) accounts are compromised. Consider using
                          automated phishing simulation tools and short
                          automated training videos in addition to longer
                          classroom trainings to maximise the effectiveness of
                          the awareness program.{" "}
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>
                  <div className="col-md-4">
                    <Accordion className="shadaow w-100">
                      <Accordion.Item className="my-3" eventKey="1">
                        <Accordion.Header>
                          Business Continuity testing & Cyber Incident Response
                          Planning
                        </Accordion.Header>
                        <Accordion.Body>
                          Given the upcoming implementation of DORA in January
                          2025 and its requirements on Incident Management and
                          Operational Resilience Testing, we believe
                          organisations should place more focus on Incident
                          Response Planning. This will ensure their
                          implementation is not only in line with Swift CSP but
                          also with DORA. If your organisation is subject to
                          DORA, assessors are likely to start reviewing
                          processes with a DORA mindset even before it is
                          implemented. Tip: ask your CSP assessor if they have
                          knowledge of DORA and if they can perform a light DORA
                          review of these processes to give you an idea of
                          whether you would be DORA-compliant.{" "}
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>
                </div>
              </div>

              <div className="bg-primary rounded p-5">
                <div>
                  <p className="text-light text-center">
                    ECS CSP Service are crafted to offer essential support.
                    enabliling tangible enhancemenys to your organizations cyber
                    security posture
                  </p>
                  <a
                    className="d-flex justify-content-center"
                    href="/contact-us"
                  >
                    <button className="btn btn-warning text-light rounded px-3">
                      Contact Us
                    </button>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SwitchingPage1;

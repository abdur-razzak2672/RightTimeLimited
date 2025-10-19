import React, { useState } from "react";

const AssesmentChangingPageButton = () => {
  const [activePage, setActivePage] = useState("page1");
  const showPage = (pageId) => {
    setActivePage(pageId);
  };
  return (
    <div>
      <div>
        <div className="assesment-page-buttons-container">
          <div className="assesment-btn-details-container">
            <button
              className={`dipt-assesment-change-buttons ${activePage === "page1" ? "dipt-assesment-change-buttons-active" : ""}`}
              onClick={() => showPage("page1")}
            >
              1
            </button>
            <h3 className="assesment-buttons-under-design assesment-details-title">
              Kick-off Meeting <br /> & Planning
            </h3>
          </div>

          <div className="assesment-btn-details-container">
            <button
              className={`dipt-assesment-change-buttons ${activePage === "page2" ? "dipt-assesment-change-buttons-active" : ""}`}
              onClick={() => showPage("page2")}
            >
              2
            </button>
            <h3 className="assesment-buttons-under-design assesment-details-title">
              Assessment Scope <br /> Finalizing
            </h3>
          </div>

          <div className="assesment-btn-details-container">
            <button
              className={`dipt-assesment-change-buttons ${activePage === "page3" ? "dipt-assesment-change-buttons-active" : ""}`}
              onClick={() => showPage("page3")}
            >
              3
            </button>
            <h3 className="assesment-buttons-under-design assesment-details-title">
              Information Collection <br /> (Evidence and Artifacts)
            </h3>
          </div>

          <div className="assesment-btn-details-container">
            <button
              className={`dipt-assesment-change-buttons ${activePage === "page4" ? "dipt-assesment-change-buttons-active" : ""}`}
              onClick={() => showPage("page4")}
            >
              4
            </button>
            <h3 className="assesment-buttons-under-design assesment-details-title">
              Initial/Readiness Assessment
            </h3>
          </div>

          <div className="assesment-btn-details-container">
            <button
              className={`dipt-assesment-change-buttons ${activePage === "page5" ? "dipt-assesment-change-buttons-active" : ""}`}
              onClick={() => showPage("page5")}
            >
              5
            </button>
            <h3 className="assesment-buttons-under-design assesment-details-title">
              Documentation/Evidence Review
            </h3>
          </div>

          <div className="assesment-btn-details-container">
            <button
              className={`dipt-assesment-change-buttons ${activePage === "page6" ? "dipt-assesment-change-buttons-active" : ""}`}
              onClick={() => showPage("page6")}
            >
              6
            </button>
            <h3 className="assesment-buttons-under-design assesment-details-title">
              Validate SWIFT Architecture
            </h3>
          </div>
        </div>

        <div className="assesment-page-buttons-container mt-5">
          <div className="assesment-btn-details-container">
            <button
              className={`dipt-assesment-change-buttons ${activePage === "page7" ? "dipt-assesment-change-buttons-active" : ""}`}
              onClick={() => showPage("page7")}
            >
              7
            </button>
            <h3 className="assesment-buttons-under-design assesment-details-title">
              In-Depth Analysis
            </h3>
          </div>

          <div className="assesment-btn-details-container">
            <button
              className={`dipt-assesment-change-buttons ${activePage === "page8" ? "dipt-assesment-change-buttons-active" : ""}`}
              onClick={() => showPage("page8")}
            >
              8
            </button>
            <h3 className="assesment-buttons-under-design assesment-details-title">
              Reporting & recommendation
            </h3>
          </div>

          <div className="assesment-btn-details-container">
            <button
              className={`dipt-assesment-change-buttons ${activePage === "page9" ? "dipt-assesment-change-buttons-active" : ""}`}
              onClick={() => showPage("page9")}
            >
              9
            </button>
            <h3 className="assesment-buttons-under-design assesment-details-title">
              Remediation Support including Documentation
            </h3>
          </div>

          <div className="assesment-btn-details-container">
            <button
              className={`dipt-assesment-change-buttons ${activePage === "page10" ? "dipt-assesment-change-buttons-active" : ""}`}
              onClick={() => showPage("page10")}
            >
              10
            </button>
            <h3 className="assesment-buttons-under-design assesment-details-title">
              Resolution of potential gaps/ Follow Up
            </h3>
          </div>

          <div className="assesment-btn-details-container">
            <button
              className={`dipt-assesment-change-buttons ${activePage === "page11" ? "dipt-assesment-change-buttons-active" : ""}`}
              onClick={() => showPage("page11")}
            >
              11
            </button>
            <h3 className="assesment-buttons-under-design assesment-details-title">
              Final Assessment
            </h3>
          </div>
        </div>

        <div className="dipt-assesment-content-parent my-5">
          <div
            id="page1"
            className={`swift-architecture-page ${activePage === "page1" ? "activepage" : ""}`}
          >
            <div className="assesment-content-data-container">
              <div>
                <div className="dipt-assesment-process-data-mini-container">
                  <h3 className="dipt-assesment-process-header-data">
                    Kick-Off Meeting & Planning
                  </h3>
                  <p className="dipt-assesment-process-p-data">
                    1. Understanding the context and scope of the project
                    (Business Understanding)
                    <br />
                    2. Methodology Presentation.
                    <br />
                    3. Team Introduction
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            id="page2"
            className={`swift-architecture-page ${activePage === "page2" ? "activepage" : ""}`}
          >
            <div className="assesment-content-data-container">
              <div>
                <div className="dipt-assesment-process-data-mini-container">
                  <h3 className="dipt-assesment-process-header-data">
                    Assessment Scope Finalizing
                  </h3>
                  <p className="dipt-assesment-process-p-data">
                    1. Detailed Questionnaire is shared with the teams to aid in
                    the scope definition.
                    <br />
                    2. Planning and preparation of the audit and objectives.
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            id="page3"
            className={`swift-architecture-page ${activePage === "page3" ? "activepage" : ""}`}
          >
            <div className="assesment-content-data-container">
              <div>
                <div className="dipt-assesment-process-data-mini-container">
                  <h3 className="dipt-assesment-process-header-data">
                    Information Collection (Collect Evidence and Artifacts)
                  </h3>
                  <p className="dipt-assesment-process-p-data">
                    1. Meeting with primary point of contact to go through the
                    list of requirements. <br />
                    2. Request for documents that provide proof of control
                    implementation
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            id="page4"
            className={`swift-architecture-page ${activePage === "page4" ? "activepage" : ""}`}
          >
            <div className="assesment-content-data-container">
              <div>
                <div className="dipt-assesment-process-data-mini-container">
                  <h3 className="dipt-assesment-process-header-data">
                    Initial/Readiness Assessmen
                  </h3>
                  <p className="dipt-assesment-process-p-data">
                    1. Analysis of the documents provided <br />
                    2. Analyze the risks in the information security posture.{" "}
                    <br />
                    3. Assessment of the level of compliance with controls.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            id="page5"
            className={`swift-architecture-page ${activePage === "page5" ? "activepage" : ""}`}
          >
            <div className="assesment-content-data-container">
              <div>
                <div className="dipt-assesment-process-data-mini-container">
                  <h3 className="dipt-assesment-process-header-data">
                    Documentation/Evidence Review
                  </h3>
                  <p className="dipt-assesment-process-p-data">
                    1. Evaluates the received documents & identify interview
                    requirements.
                    <br />
                    2. Review of the evidence collected to assess their
                    maturity, in line with the compliance.
                  </p>{" "}
                </div>
              </div>
            </div>
          </div>

          <div
            id="page6"
            className={`swift-architecture-page ${activePage === "page6" ? "activepage" : ""}`}
          >
            <div className="assesment-content-data-container">
              <div>
                <div className="dipt-assesment-process-data-mini-container">
                  <h3 className="dipt-assesment-process-header-data">
                    Validate SWIFT Architecture
                  </h3>
                  <p className="dipt-assesment-process-p-data">
                    1. Assist organization to identify and validate SWIFT
                    architecture.
                    <br />
                    2. Identify zones and components as per the assessment
                    requirements
                  </p>{" "}
                </div>
              </div>
            </div>
          </div>

          <div
            id="page7"
            className={`swift-architecture-page ${activePage === "page7" ? "activepage" : ""}`}
          >
            <div className="assesment-content-data-container">
              <div>
                <div className="dipt-assesment-process-data-mini-container">
                  <h3 className="dipt-assesment-process-header-data">
                    In-Depth Analysis
                  </h3>
                  <p className="dipt-assesment-process-p-data">
                    1. Detailed work through with key staff.
                    <br />
                    2. Request for additional evidence.
                    <br />
                    3. Perform Mandatory & Advisory Control Validation to
                    understand the control applicability as per the environment.
                    <br />
                    4. Conducting through systems analysis to evaluate data flow
                    and possible leakage (data follow assessment).
                    <br />
                    5. Identify critical vulnerabilities in the systems with
                    robust testing approach (Security Assessment i.e. VA & PT.
                  </p>{" "}
                </div>
              </div>
            </div>
          </div>

          <div
            id="page8"
            className={`swift-architecture-page ${activePage === "page8" ? "activepage" : ""}`}
          >
            <div className="assesment-content-data-container">
              <div>
                <div className="dipt-assesment-process-data-mini-container">
                  <h3 className="dipt-assesment-process-header-data">
                    Reporting & recommendation
                  </h3>
                  <p className="dipt-assesment-process-p-data">
                    1. Provide assessment report with explicit recommendation to
                    resolve any compliance gaps.
                  </p>{" "}
                </div>
              </div>
            </div>
          </div>

          <div
            id="page9"
            className={`swift-architecture-page ${activePage === "page9" ? "activepage" : ""}`}
          >
            <div className="assesment-content-data-container">
              <div>
                <div className="dipt-assesment-process-data-mini-container">
                  <h3 className="dipt-assesment-process-header-data">
                    Remediation Support including Documentation
                  </h3>
                  <p className="dipt-assesment-process-p-data">
                    1. As per the assessment RightTime Will provide remediation
                    support for complying with SWIFT Cybersecurity Framework).
                    <br />
                    2. Assisting to ease out the documentation process during
                    the assessment process (if any).
                  </p>{" "}
                </div>
              </div>
            </div>
          </div>

          <div
            id="page10"
            className={`swift-architecture-page ${activePage === "page10" ? "activepage" : ""}`}
          >
            <div className="assesment-content-data-container">
              <div>
                <div className="dipt-assesment-process-data-mini-container">
                  <h3 className="dipt-assesment-process-header-data">
                    Resolution of potential gaps/ Follow Up
                  </h3>
                  <p className="dipt-assesment-process-p-data">
                    1. Follow up on resolution of remaining gaps.
                    <br />
                    2. Collect missing evidence.
                    <br />
                    3. Updating the documentation
                  </p>{" "}
                </div>
              </div>
            </div>
          </div>

          <div
            id="page11"
            className={`swift-architecture-page ${activePage === "page11" ? "activepage" : ""}`}
          >
            <div className="assesment-content-data-container">
              <div>
                <div className="dipt-assesment-process-data-mini-container">
                  <h3 className="dipt-assesment-process-header-data">
                    Final Assessment
                  </h3>
                  <p className="dipt-assesment-process-p-data">
                    1. 2nd Assessment to assess closer of non-conformities.
                    <br />
                    2. Delivery of the certificate of completion.
                  </p>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3 className="mt-3">Steps to compliance</h3>
        <p className="text-justify">
          Right Time Limited’s Certified Assessors and SWIFT professionals can
          help your organization address the SWIFT independent assessment with
          our experience in working with various SWIFT counterparties 10
          Resolution of potential gaps/ Follow Up Gap Remediation Assistance 
          Follow up on resolution of remaining gaps.  Collect missing evidence.
           Updating the documentation. 11 Final Assessment Submiting Final
          Report  2nd Assessment to assess closer of non-conformities. 
          Delivery of the certificate of completion. locally and
          internationally. RightTime can closely assist you in steps 1, 2 and 3
          of the following key steps towards SWIFT CSP controls compliance. And
          also develop skillset to complete step 4. (figure as below)
        </p>

        <img loading="lazy" decoding="async"
          style={{ width: "100%" }}
          src="/assets/images/services/SwiftCyber/element.jpg"
          alt=""
        />

        <h3 className="mt-5">Re-Assessment Process</h3>
        <p className="text-justify">
          In the update of the framework, more precisely in the accompanying
          IAFv2023, the possibility of ReAssessment was clarified. Previously
          known to SWIFT users as "Delta Assessment", this process allows the
          reuse of previous assessment results. This possibility is based on
          some conditions that can be assessed with the following questions: The
          initial question to be answered before use must always be a general
          assessment: Can the audit results from the previous year be used
          again, in other words, can these results still be relied upon?
          Impediments to using the audit results from the previous year can be,
          for example, major changes to the environment, new SWIFT services, new
          providers or new architecture types in the environment. If the results
          are not usable for the reasons listed, a new full assessment must be
          performed in which each individual control must be fully tested. If
          there were no changes and the results can be used generally, further
          assessments for each individual control are necessary:
          <br />
          <br />
          1. Was the assessment performed against the previous or the current
          version? They are valid only if they have already been performed on
          the basis of the new version of the framework.
          <br />
          2. Was the result collected in the previous year or are you already
          basing it on the result from the year before last year? Only results
          from the previous year may be used.
          <br />
          3. Have changes been made to the control itself within the framework?
          Has the subject of the control changed? The results are only valid if
          the control itself has remained the same.
          <br />
          4. Is the design of the environment or the implementation unchanged?
          Both must have remained
          <br />
          unchanged so that the results may be used for the reassessment
          process.
        </p>
        <div className="d-flex justify-content-center">
          <img loading="lazy" decoding="async"
            className="rounded"
            style={{ width: "60%" }}
            src="/assets/images/services/SwiftCyber/re.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AssesmentChangingPageButton;

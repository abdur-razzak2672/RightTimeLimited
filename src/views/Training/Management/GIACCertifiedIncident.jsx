import React, { useState } from "react";
import ManagementNav from "./ManagementNav";
function GIACCertifiedIncident() {
  const [tabIndex, setTabIndex] = useState(1);

  return (
    <div>
      <div className="page-header">
        <div
          className="page-header__bg"
          style={{
            backgroundImage: `url('/assets/images/background/page-header-bg-1-1.jpg')`,
          }}
        ></div>
        <div className="container">
          <ul className="thm-breadcrumb list-unstyled">
            <li>
              <a href="{{ url('/') }}">Home</a>
            </li>
            <li>
              <a href="{{ url('/services/security-training') }}">Training</a>
            </li>
            <li>Management</li>
          </ul>
          <h2 className="page-header__title">
            GIAC Certified Incident Handler (GCIH)
          </h2>
        </div>
      </div>
      <section className="  section-padding--top">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <h3 className="blog-card-one__title blog-details__title changeColor">
                GIAC Certified Incident Handler (GCIH)
              </h3>
              <div className="blog-details__content">
                <p>
                  The GIAC Certified Incident Handler (GCIH) certification is
                  designed for professionals who are responsible for detecting,
                  responding to, and resolving cybersecurity incidents within
                  their organizations. The course covers essential topics
                  related to incident handling, including incident response
                  methodologies, malware analysis, network forensics, and
                  intrusion detection. GCIH certification demonstrates a
                  candidate's competence in incident handling and response to
                  cybersecurity incidents effectively.{" "}
                </p>
                <img
                  className="training-images"
                  src="/assets/images/training/GCIH.png"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-5 mt-5">
              <ManagementNav />
            </div>
          </div>
        </div>
      </section>
      <div style={{ marginLeft: "50px", marginTop: "40px" }}>
        <div>
          <div>
            <ul className="nav nav-sm nav-tabs nav-vertical mb-4 steps-sampling">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  onClick={() => setTabIndex(1)}
                  id="link1"
                  href="javascript:void(0)"
                >
                  <i className="bi-list-check nav-icon"></i>Course Overview :
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link  "
                  onClick={() => setTabIndex(2)}
                  href="javascript:void(0)"
                >
                  <i className="bi-list-check nav-icon"></i>Course Highlight
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  onClick={() => setTabIndex(3)}
                  href="javascript:void(0)"
                >
                  <i className="bi-sort-numeric-down nav-icon"></i> Schedule
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  onClick={() => setTabIndex(4)}
                  href="javascript:void(0)"
                >
                  <i className="bi-sort-numeric-down nav-icon"></i> Price
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  onClick={() => setTabIndex(5)}
                  href="javascript:void(0)"
                >
                  <i className="bi-sort-numeric-down nav-icon"></i> Training
                  Format
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  onClick={() => setTabIndex(6)}
                  href="javascript:void(0)"
                >
                  <i className="bi-sort-numeric-down nav-icon"></i>Exam
                  Information
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  onClick={() => setTabIndex(7)}
                  href="javascript:void(0)"
                >
                  <i className="bi-sort-numeric-down nav-icon"></i> Registration
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  onClick={() => setTabIndex(8)}
                  href="javascript:void(0)"
                >
                  <i className="bi-file-arrow-up nav-icon"></i> How to Prepare
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  onClick={() => setTabIndex(9)}
                  href="javascript:void(0)"
                >
                  <i className="bi-file-arrow-up nav-icon"></i> Certification
                  Maintenance:
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <section className="mt-1">
        <div className="container">
          {tabIndex === 1 && (
            <div className="row">
              <div className="col-lg-8">
                <h3
                  style={{ color: "orange" }}
                  className="blog-card-one__title blog-details__title"
                >
                  Course Overview
                </h3>
                <div className="blog-details__content">
                  <p>
                    The GCIH certification validates individuals' abilities to
                    manage and respond to security incidents effectively. This
                    comprehensive course covers incident handling methodologies,
                    tools, and techniques to identify, assess, and mitigate
                    security threats.
                  </p>{" "}
                </div>
              </div>
              {/* <div className="col-lg-4 mt-5">
                  <div className="right border rounded-3 shadow " style={{ width: "100%" }}>
                    <div className="card-body p-3">
                      <h5 className='mt-4'><a href="/career" >Ready For You ?</a></h5>


                      <p className='mt-4'>Upon completion of the course, you’ll be able to conduct PCI 3DS Assessments, validate and attest as to an entity’s PCI 3DS Core Security Standard compliance status, and prepare appropriate compliance reports<br /> (such as Reports on Compliance (RoC)) required by payment card brands and acquiring banks. </p>
                      <button type="button" className="btn btn-warning mt-4 w-100">Register Now</button>
                    </div>
                  </div>
                </div> */}
            </div>
          )}
          {tabIndex === 2 && (
            <div className="row">
              <div className="col-lg-8">
                <h3
                  style={{ color: "orange" }}
                  className="blog-card-one__title blog-details__title"
                >
                  Course Highlights
                </h3>
                <div className="blog-details__content">
                  <p>
                     Comprehensive coverage of incident handling processes and
                    procedures.
                    <br />
                     Hands-on labs and simulations for practical experience.
                    <br />
                     Expert-led instruction by seasoned cybersecurity
                    professionals.
                    <br />
                     Real-world case studies and scenarios for practical
                    application.
                    <br />
                     Preparation for the GIAC Certified Incident Handler (GCIH)
                    exam.
                    <br />
                  </p>
                </div>
              </div>
              <div className="col-lg-4 mt-5">
                {/* <div className="right border rounded-3 shadow " style={{ width: "100%" }}>
                    <img className="card-img-top rounded-3 w-100" src="/assets/images/training/work.png" alt="" />
                    <div className="card-body p-3">
                      <h6 mt-4>Upon completion of the course, you’ll be able to conduct PCI 3DS Assessments, validate and attest as to an entity’s PCI 3DS</h6>

                      <h5 className='mt-4'><a href="/career" >Request More Information</a></h5>
                      <button type="button" className="btn btn-warning mt-4 w-100">Register Now</button>
                    </div>
                  </div> */}
              </div>
            </div>
          )}
          {tabIndex === 3 && (
            <div className="row">
              <div className="col-lg-8">
                <h3
                  style={{ color: "orange" }}
                  className="blog-card-one__title blog-details__title"
                >
                  Schedule
                </h3>
                <hr />
                <p>
                  Please refer to our website i.e. https://www.righttime.biz/,
                  or contact us directly for the latest course schedule and
                  availability.
                </p>
              </div>
              <div className="col-lg-4 mt-5">
                {/* <div className="right border rounded-3 shadow " style={{ width: "100%" }}>
                    <img className="card-img-top rounded-3 w-100" src="/assets/images/training/book.png" alt="" />
                    <div className="card-body p-3">
                      <p>
                        required by payment card brands and acquiring banks.
                      </p>
                      <button type="button" className="btn btn-warning mt-4 w-100">Register Now</button>
                    </div>
                  </div> */}
              </div>
            </div>
          )}
          {tabIndex === 4 && (
            <div className="row">
              <div className="col-lg-8">
                <h3
                  style={{ color: "orange" }}
                  className="blog-card-one__title blog-details__title"
                >
                  Price
                </h3>
                <hr />
                <div className="blog-details__content"></div>
                <p>
                  The course fee varies based on the training format, duration,
                  and any additional materials provided. Please reach out to our
                  sales team for pricing details and special offers.{" "}
                </p>
                <br />
              </div>
              <div className="col-lg-4 mt-5">
                {/* <div className="right border rounded-3 shadow " style={{ width: "100%" }}>
                    <img className="card-img-top rounded-3 w-100" src="/assets/images/training/man.png" alt="" />
                    <div className="card-body p-3">
                      <p>
                        required by payment card brands and acquiring banks.
                      </p>
                      <a href="/managent" className=" mt-4 ">More Information</a>
                    </div>
                  </div> */}
              </div>
            </div>
          )}

          {tabIndex === 5 && (
            <div>
              <p>
                Interactive Lectures: Engaging sessions led by experienced
                instructors covering incident handling methodologies, tools, and
                techniques.
                <br />
                Hands-on Lab: Practical exercises in simulated environments to
                reinforce learning and develop incident response skills.
                <br />
                Case Studies: Analyzing real-world incidents to understand the
                context, challenges, and best practices in incident handling.
                <br />
                Group Discussion: Collaborative sessions to share insights,
                exchange ideas, and discuss strategies for effective incident
                response.
                <br />
                Mock Examination: Practice tests to simulate the GCIH exam
                format, assess knowledge retention, and identify areas for
                improvement.
                <br />
              </p>
            </div>
          )}

          {tabIndex === 6 && (
            <div className="row">
              <div className="col-lg-8">
                <h3
                  style={{ color: "orange" }}
                  className="blog-card-one__title blog-details__title"
                >
                  Exam Information
                </h3>
                <div className="blog-details__content">
                  <p>
                    Format: Proctored, open-book exam with multiple-choice and
                    scenario-based questions.
                    <br />
                    Duration: 4 hours. Number of Questions: Approximately 150
                    questions.
                    <br />
                    Scoring: Each question carries a specific weightage, and
                    scores are based on correct answers.
                    <br />
                    Passing Score: A scaled score of 74% or higher.
                    <br />
                    Exam Delivery: Online proctored exam through the GIAC exam
                    platform.
                    <br />
                    Preparation: Thorough review of the GCIH exam objectives,
                    utilization of official GIAC study materials, completion of
                    practice exams, and participation in hands-on labs and group
                    discussions.
                    <br />
                    Retake Policy:
                    <br /> Candidates who do not pass the GCIH exam on their
                    first attempt may retake the exam during subsequent testing
                    windows.  There is no limit on the number of retakes
                    allowed; however, candidates must wait at least 30 days
                    between exam attempts.  Retake candidates are required to
                    pay the exam fee for each attempt.  Utilize the interim
                    period between attempts to address weak areas, further
                    study, and enhance preparation based on exam feedback. 
                    Join Right Time Limited for comprehensive training on GCIH
                    certification, designed to equip you with the skills and
                    knowledge needed to effectively handle security incidents
                    and successfully pass the GCIH exam.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 mt-5">
                {/* <button type="button" className="btn btn-warning mt-4 w-100">Register Now</button> */}
              </div>
            </div>
          )}

          {tabIndex === 7 && (
            <div className="row">
              <div className="col-lg-8">
                <h3
                  style={{ color: "orange" }}
                  className="blog-card-one__title blog-details__title"
                >
                  Registration
                </h3>
                <div className="blog-details__content">
                  <p>
                    To register for the course, please visit [Insert
                    registration link] or contact our enrollment team at [Insert
                    contact details].{" "}
                  </p>
                </div>
              </div>
              <div className="col-lg-4 mt-5">
                {/* <button type="button" className="btn btn-warning mt-4 w-100">Register Now</button> */}
              </div>
            </div>
          )}

          {tabIndex === 8 && (
            <div className="row">
              <div className="col-lg-8">
                <h3
                  style={{ color: "orange" }}
                  className="blog-card-one__title blog-details__title"
                >
                  How To Prepare
                </h3>
                <div className="blog-details__content">
                  <p>
                     Review the GCIH exam objectives provided by GIAC.
                    <br />
                     Utilize official study materials recommended by GIAC.
                    <br />
                     Participate actively in class sessions, labs, and group
                    discussions.
                    <br />
                     Complete practice exams to assess your readiness for the
                    certification exam.
                    <br />
                  </p>
                </div>
              </div>
              <div className="col-lg-4 mt-5">
                {/* <button type="button" className="btn btn-warning mt-4 w-100">Register Now</button> */}
              </div>
            </div>
          )}

          {tabIndex === 9 && (
            <div className="row">
              <div className="col-lg-8">
                <h3
                  style={{ color: "orange" }}
                  className="blog-card-one__title blog-details__title"
                >
                  Certification Maintenance
                </h3>
                <div className="blog-details__content">
                  <p>
                     Maintain your GCIH certification by earning Continuing
                    Professional Education (CPE) credits.
                    <br />
                     Stay updated with the latest developments in incident
                    handling and cybersecurity.
                    <br />
                     Participate in relevant training courses, conferences, and
                    webinars.
                    <br />
                     Submit CPE documentation to GIAC to renew your
                    certification.
                    <br />
                    Join Right Time Limited's GCIH training course to enhance
                    your incident handling skills and prepare for the GCIH
                    certification exam. Our expert instructors and comprehensive
                    curriculum will empower you to effectively respond to
                    security incidents and advance your cybersecurity career.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 mt-5">
                {/* <button type="button" className="btn btn-warning mt-4 w-100">Register Now</button> */}
              </div>
            </div>
          )}
        </div>
      </section>

      <div className="page-header mt-4">
        <div
          className="page-header__bg"
          style={{
            backgroundImage: `url('https://www.icorps.com/hs-fs/hubfs/Hero%20Image%2021-1.png?width=1500&height=600&name=Hero%20Image%2021-1.png')`,
          }}
        ></div>
        <div className="container">
          <ul className="thm-breadcrumb list-unstyled">
            <h2 className="text-light">Digital Badging</h2>
          </ul>
          <p className="text-light dipt-breadcrump-paragraph ">
            “Right Time Limited” is a highly esteemed security service provider,
            assisting businesses in fortifying their security posture. It offers
            expert consultation, meticulous testing, certification support, and
            reliable managed services to safeguard assets and mitigate risks.
          </p>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default GIACCertifiedIncident;

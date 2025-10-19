import React, { useState } from "react";
import ManagementNav from "./ManagementNav";

function CertifiedSocAnalyst() {
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
            Cyber Security Analyst (Custom)
          </h2>
        </div>
      </div>
      <section className="  section-padding--top">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <h3 className="blog-card-one__title blog-details__title changeColor">
                Cyber Security Analyst (Custom)
              </h3>
              <div className="blog-details__content">
                <p>
                  The Cyber Security Analyst course is designed to train
                  individuals in the skills and knowledge required to analyze
                  and respond to cybersecurity incidents and threats
                  effectively. The course covers various topics, including
                  threat detection, incident investigation, malware analysis,
                  and vulnerability assessment. Participants will learn how to
                  detect and mitigate security breaches, protect critical
                  assets, and strengthen an organization's overall security
                  posture.{" "}
                </p>
                <img
                  className="training-images"
                  src="/assets/images/training/CSA.jpg"
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
                  <i className="bi-list-check nav-icon"></i>Course Overview:
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
                    The Cyber Security Analyst course offered by Right Time
                    Limited equips participants with the knowledge and skills
                    required to detect, analyze, and respond to cybersecurity
                    threats effectively. Covering a range of topics such as
                    threat intelligence, incident response, and vulnerability
                    assessment, this course prepares individuals for the role of
                    a cybersecurity analyst in today's dynamic threat landscape.
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
                     Comprehensive curriculum aligned with industry best
                    practices.
                    <br />
                     Experienced instructors with expertise in cybersecurity.
                    <br />
                     Hands-on labs and real-world case studies for practical
                    learning.
                    <br />
                     Preparation for the Cyber Security Analyst certification
                    exam.
                    <br />
                     Access to resources and study materials for continued
                    learning.
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
                  The course is available in both in-person and online formats,
                  with flexible scheduling options to accommodate diverse
                  learner needs. Please contact Right Time Limited for the
                  latest schedule information.
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
                  Pricing for the Cyber Security Analyst training course varies
                  based on the delivery format and any additional services or
                  materials included. For detailed pricing information and
                  special offers, please reach out to Right Time Limited.
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
                The Cyber Security Analyst training by Right Time Limited
                employs an interactive approach, combining:
                <br />
                Interactive Lectures: Engaging sessions led by experienced
                instructors covering key concepts and methodologies.
                <br />
                Hands-on Lab: Practical exercises to reinforce learning and
                develop technical skills in a simulated environment.
                <br />
                Case Studies: Real-world scenarios to analyze and apply
                cybersecurity principles.
                <br />
                Group Discussion: Collaborative sessions to exchange ideas,
                share experiences, and explore best practices.
                <br />
                Mock Examination: Practice tests to assess readiness for the
                certification exam.
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
                    Format: Online exam administered by EC-Council.
                    <br />
                    Duration: The duration of the exam is typically 04 (four)
                    hours.
                    <br />
                    Number of Questions: The exam consists of 125
                    multiple-choice questions.
                    <br />
                    Scoring: Each question carries a certain weightage, and the
                    total score determines the candidate's performance.
                    <br />
                    Passing Score: To pass the exam, candidates must achieve a
                    minimum score of 70%.
                    <br />
                    Exam Delivery: The exam is delivered through EC-Council's
                    online platform, allowing candidates to take it remotely
                    from anywhere with internet access.
                    <br />
                    Preparation: Prepare for the exam by thoroughly reviewing
                    course materials, participating actively in training
                    sessions, completing hands-on exercises, and taking practice
                    exams.
                    <br />
                    Retake Policy: In case a candidate does not pass the
                    certification exam on the first attempt, EC-Council's retake
                    policy allows for additional attempts subject to certain
                    conditions and fees. Candidates are advised to refer to
                    EC-Council's official retake policy for detailed information
                    and procedures. Additionally, Right Time Limited can provide
                    guidance and support regarding retake options and exam
                    preparation strategies.
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
                    To register for the Cyber Security Analyst course,
                    interested individuals can visit Right Time Limited's
                    website i.e. https://www.righttime.biz/, or contact their
                    enrollment team directly. Registration may require filling
                    out a registration form and providing necessary
                    details.{" "}
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
                    Prepare for the course by familiarizing yourself with basic
                    cybersecurity concepts and terminology. Stay updated with
                    the latest trends and developments in cybersecurity through
                    relevant publications, forums, and online resources. Review
                    any pre-course materials provided by Right Time Limited and
                    actively participate in training sessions.
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
                    After obtaining the Cyber Security Analyst certification,
                    individuals must adhere to EC-Council's certification
                    maintenance requirements to keep their credentials active.
                    This may include earning continuing education credits or
                    renewing the certification periodically. Right Time Limited
                    can provide guidance on maintaining certification status and
                    accessing relevant resources for ongoing professional
                    development.{" "}
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

export default CertifiedSocAnalyst;

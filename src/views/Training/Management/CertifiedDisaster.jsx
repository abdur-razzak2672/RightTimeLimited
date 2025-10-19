import React, { useState } from "react";
import ManagementNav from "./ManagementNav";
function CertifiedDisaster() {
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
            Disaster Recovery Professional (Custom)
          </h2>
        </div>
      </div>
      <section className="  section-padding--top">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <h3 className="blog-card-one__title blog-details__title changeColor">
                Disaster Recovery Professional (Custom)
              </h3>
              <div className="blog-details__content">
                <p>
                  Our Disaster Recovery Professional (DRP) training course
                  equips participants with the knowledge and skills required to
                  develop effective disaster recovery plans and strategies. The
                  course covers various aspects of disaster recovery, including
                  risk assessment, business continuity planning, data backup,
                  and recovery procedures.
                </p>
                <img
                  style={{ width: "100%" }}
                  src="https://www.shutterstock.com/image-photo/disaster-recovery-backup-data-protection-600nw-2283759633.jpg"
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
              <li className="nav-item ">
                <a
                  className="nav-link active"
                  onClick={() => setTabIndex(1)}
                  id="link1"
                  href="javascript:void(0)"
                >
                  <i className="bi-list-check nav-icon"></i>Course Overview:
                </a>
              </li>
              <li className="nav-item ">
                <a
                  className="nav-link  "
                  onClick={() => setTabIndex(2)}
                  href="javascript:void(0)"
                >
                  <i className="bi-list-check nav-icon"></i>Course Highlight
                </a>
              </li>
              <li className="nav-item ">
                <a
                  className="nav-link"
                  onClick={() => setTabIndex(3)}
                  href="javascript:void(0)"
                >
                  <i className="bi-sort-numeric-down nav-icon"></i> Schedule
                </a>
              </li>
              <li className="nav-item ">
                <a
                  className="nav-link"
                  onClick={() => setTabIndex(4)}
                  href="javascript:void(0)"
                >
                  <i className="bi-sort-numeric-down nav-icon"></i> Price
                </a>
              </li>
              <li className="nav-item ">
                <a
                  className="nav-link"
                  onClick={() => setTabIndex(5)}
                  href="javascript:void(0)"
                >
                  <i className="bi-sort-numeric-down nav-icon"></i> Training
                  Format
                </a>
              </li>
              <li className="nav-item ">
                <a
                  className="nav-link"
                  onClick={() => setTabIndex(6)}
                  href="javascript:void(0)"
                >
                  <i className="bi-sort-numeric-down nav-icon"></i>Exam
                  Information
                </a>
              </li>
              <li className="nav-item ">
                <a
                  className="nav-link"
                  onClick={() => setTabIndex(7)}
                  href="javascript:void(0)"
                >
                  <i className="bi-sort-numeric-down nav-icon"></i> Registration
                </a>
              </li>
              <li className="nav-item ">
                <a
                  className="nav-link"
                  onClick={() => setTabIndex(8)}
                  href="javascript:void(0)"
                >
                  <i className="bi-file-arrow-up nav-icon"></i> How to Prepare
                </a>
              </li>
              <li className="nav-item ">
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
                    Our Disaster Recovery Professional (DRP) training course
                    equips participants with the knowledge and skills required
                    to develop effective disaster recovery plans and strategies.
                    The course covers various aspects of disaster recovery,
                    including risk assessment, business continuity planning,
                    data backup, and recovery procedures.{" "}
                  </p>
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
                     Comprehensive coverage of disaster recovery concepts and
                    best practices.
                    <br />
                     Hands-on exercises and case studies to apply theoretical
                    knowledge to real-world scenarios.
                    <br />
                     Expert-led sessions by experienced instructors in the
                    field of disaster recovery.
                    <br />
                     Practical insights into implementing and managing disaster
                    recovery plans within organizations.
                    <br />
                     Preparation for the EC-Council Disaster Recovery
                    Professional certification exam.
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
                  sales team for pricing details and special offers.
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
                Our Disaster Recovery Professional training course offers a
                dynamic learning experience through:
                <br />
                Interactive Lectures: Engaging sessions led by experienced
                instructors to cover key concepts and principles.
                <br />
                Hands-on Labs: Practical exercises to apply theoretical
                knowledge and develop critical skills.
                <br />
                Case Studies: Real-world scenarios to analyze and solve
                challenges related to disaster recovery.
                <br />
                Group Discussions: Collaborative learning environment for
                sharing insights and experiences.
                <br />
                Mock Examination: Practice exams to assess readiness for the
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
                    Format: The EC-Council Disaster Recovery Professional
                    certification exam is conducted online and consists of
                    multiple-choice questions.
                    <br />
                    Duration: The exam duration is typically 04 (four) hours.
                    Number of Questions: The exam comprises a set number of
                    questions i.e. 150 assessing various aspects of disaster
                    recovery.
                    <br />
                    Scoring: Each question carries a specific weightage, and
                    scores are calculated based on the correct answers provided.
                    <br />
                    Passing Score: To pass the exam and obtain certification,
                    candidates must achieve the minimum passing score 70%
                    determined by EC-Council.
                    <br />
                    Exam Delivery: The exam is delivered through EC-Council's
                    online platform, accessible from any location with an
                    internet connection.
                    <br />
                    Preparation: Adequate preparation involves thorough review
                    of course materials, participation in training sessions, and
                    practice with mock examinations.
                    <br />
                    Retake Policy: In the event that a candidate does not pass
                    the certification exam on the first attempt, EC-Council's
                    retake policy allows for additional attempts after a
                    specified waiting period. Candidates must adhere to
                    EC-Council's retake policy guidelines, including any
                    associated fees and waiting periods between exam attempts.
                    For detailed information on retake policies, candidates are
                    advised to refer to EC-Council's official guidelines or
                    contact our training coordinator for assistance.
                    <br />
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
                     To register for the Disaster Recovery Professional
                    training course, please fill out the registration form on
                    our website i.e. https://www.righttime.biz/, or contact our
                    training coordinator for assistance.
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
                     Review course materials provided by Right Time Limited and
                    EC-Council.
                    <br />
                     Engage actively during training sessions and participate
                    in hands-on exercises.
                    <br />
                     Take advantage of additional study resources and practice
                    exams available through EC-Council.
                    <br />
                     Collaborate with peers and instructors to clarify doubts
                    and deepen understanding.
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
                    After obtaining the Disaster Recovery Professional
                    certification, professionals are required to fulfill
                    EC-Council's certification maintenance requirements, which
                    may include continuing education and periodic
                    recertification exams. Stay updated with EC-Council's
                    certification policies and guidelines to maintain your
                    certification status.
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

export default CertifiedDisaster;

import React, { useState } from "react";
import AssesmentNav from "./AssesmentNav";

function GiacWebApplication() {
  const [tabIndex, setTabIndex] = useState(1);

  return (
    <div>
      <div className="page-header">
        <div
          className="page-header__bg"
          style={{
            backgroundImage: `url('https://t3.ftcdn.net/jpg/04/52/42/28/360_F_452422858_zMeVv3oCmjujM1ktmdnNZkDZdXhBfBDC.jpg')`,
          }}
        ></div>
        <div className="container">
          <ul className="thm-breadcrumb list-unstyled">
            <li>
              <a href="{{ url('/') }}">Home</a>
            </li>
            <li>
              <a href="{{ url('/services/security-training') }}">
                Security Training
              </a>
            </li>
            <li>
              <a href="{{ url('/services/security-training/assessment') }}">
                Assessment
              </a>
            </li>
            <li>GIAC Web Application Penetration Tester(GWAPT)</li>
          </ul>
          <h2 className="page-header__title">
            {" "}
            GIAC Web Application Penetration Tester(GWAPT)
          </h2>
        </div>
      </div>
      <section className="  section-padding--top">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <h3 className="blog-card-one__title blog-details__title changeColor">
                Assessment
              </h3>
              <div className="blog-details__content">
                <p>
                  The information about the preparatory training course offered
                  by Right Time Limited for the "GIAC Web Application
                  Penetration Tester (GWAPT)" certification by SANS:{" "}
                </p>
                <img loading="lazy" decoding="async"
                  className="training-images"
                  src="/assets/images/training/GWAPT.jpeg"
                  alt="GWAPT"
                />
              </div>
            </div>
            <div className="col-lg-5  ">
              <AssesmentNav />
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
                    The GWAPT preparatory training course by Right Time Limited
                    is designed to equip security professionals with the
                    knowledge and skills required to pass the GIAC Web
                    Application Penetration Tester (GWAPT) certification exam.
                    The course focuses on advanced techniques for assessing and
                    securing web applications, including identifying
                    vulnerabilities, performing penetration tests, and
                    implementing effective security controls. Participants will
                    gain hands-on experience with web application security
                    tools, methodologies, and best practices through practical
                    labs and real-world scenarios.{" "}
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
                     In-depth coverage of the CISA exam domains, including
                    information system auditing process, governance and
                    management of IT, information systems acquisition,
                    development, and implementation, and information systems
                    operations and business resilience.
                    <br />
                     Experienced instructors with industry expertise who
                    provide practical insights and real-world examples.
                    <br />
                     Interactive learning sessions, case studies, and hands-on
                    exercises to reinforce key concepts and enhance
                    understanding.
                    <br />
                     Access to study materials, practice exams, and
                    supplementary resources to support exam preparation.
                    <br />
                     Guidance on exam-taking strategies, time management, and
                    effective study techniques.  Flexible learning options,
                    including classroom-based training, virtual instructor-led
                    sessions, and self-paced online courses.
                    <br />
                  </p>
                </div>
              </div>
              <div className="col-lg-4 mt-5">
                {/* <div className="right border rounded-3 shadow " style={{ width: "100%" }}>
                    <img loading="lazy" decoding="async" className="card-img-top rounded-3 w-100" src="/assets/images/training/work.webp" alt="" />
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
                   The GWAPT preparatory training course schedule may vary
                  based on participant preferences and availability.  Right
                  Time Limited offers flexible scheduling options, including
                  weekday, weekend, and evening sessions, to accommodate diverse
                  schedules.  Customized training schedules can be arranged for
                  corporate clients or group bookings based on specific
                  requirements.
                </p>
              </div>
              <div className="col-lg-4 mt-5">
                {/* <div className="right border rounded-3 shadow " style={{ width: "100%" }}>
                    <img loading="lazy" decoding="async" className="card-img-top rounded-3 w-100" src="/assets/images/training/book.webp" alt="" />
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
                   The cost of the GWAPT preparatory training course may vary
                  depending on factors such as the training format, duration,
                  and additional resources included.  Right Time Limited
                  strives to offer competitive pricing and may provide special
                  promotions, discounts, or group booking rates for
                  participants.
                </p>
                <br />
              </div>
              <div className="col-lg-4 mt-5">
                {/* <div className="right border rounded-3 shadow " style={{ width: "100%" }}>
                    <img loading="lazy" decoding="async" className="card-img-top rounded-3 w-100" src="/assets/images/training/man.webp" alt="" />
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
                Interactive Lectures: Participants will engage in dynamic
                lectures delivered by experienced cybersecurity professionals
                and certified instructors. The lectures cover a wide range of
                topics, including web application security principles, common
                vulnerabilities, and advanced exploitation techniques. Hands-on
                Labs: Practical lab exercises and simulations allow participants
                to apply theoretical knowledge in real-world scenarios. Through
                hands-on experience, participants will learn how to identify,
                exploit, and remediate vulnerabilities in web applications using
                industry-standard tools and techniques. Case Studies: Analysis
                of real-world web application security incidents and case
                studies provides valuable insights into best practices,
                methodologies, and approaches used in web application
                penetration testing. Participants will learn from real-world
                examples and gain practical experience in assessing and securing
                web applications. Group Discussions: Interactive group
                discussions foster knowledge sharing, collaboration, and peer
                learning among participants. Through group activities,
                participants can exchange ideas, experiences, and best
                practices, enhancing their understanding of web application
                security concepts.
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
                    The GIAC Web Application Penetration Testing (GWAPT)
                    certification exam is a proctored, open-book exam
                    administered by SANS. The exam evaluates participants'
                    knowledge and skills in web application security testing and
                    penetration testing techniques. Key examination information
                    includes: Format: The GWAPT exam consists of 75
                    multiple-choice questions and practical exercises that
                    simulate real-world web application penetration testing
                    scenarios. Participants must demonstrate their ability to
                    identify vulnerabilities, exploit security weaknesses, and
                    provide recommendations for remediation. Duration: The exam
                    duration is typically 03 (three) hours, during which
                    participants are required to answer a series of questions
                    and perform practical tasks related to web application
                    security testing. Scoring: Participants are evaluated based
                    on their performance in answering exam questions and
                    completing practical exercises. A passing score 68%~71%, is
                    required to obtain the GWAPT certification. Exam Delivery:
                    The GWAPT exam can be taken at authorized testing centers
                    worldwide or online through remote proctoring, offering
                    flexibility and convenience for participants. Preparation:
                    Participants are advised to prepare for the GWAPT exam by
                    completing Right Time Limited's comprehensive training
                    program, reviewing course materials, and practicing with
                    sample questions and practical exercises. Additionally,
                    self-study, hands-on practice with web application security
                    tools, and review of relevant industry standards and
                    guidelines are recommended to enhance preparedness for the
                    exam. Successfully passing the GWAPT exam demonstrates
                    participants' proficiency in assessing and securing web
                    applications, validating their expertise in web application
                    penetration testing and enhancing their credibility as
                    cybersecurity professionals.
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
                     Interested individuals can register for the CHFI
                    preparatory training course through Right Time Limited's
                    official website i.e. https://www.righttime.biz/,,
                    registration portals, or designated contact channels.
                    <br />
                     Upon registration, participants will receive confirmation
                    of enrollment, along with detailed instructions on accessing
                    course materials and joining training sessions.
                    <br />
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
                     Actively participate in training sessions, labs, and
                    exercises to develop practical skills and proficiency in web
                    application penetration testing techniques.  Utilize study
                    materials provided by Right Time Limited, including practice
                    exams, reference guides, and hands-on labs, to reinforce
                    learning and review key concepts.  Dedicate time for
                    self-study and practice outside of scheduled sessions to
                    deepen understanding and mastery of web application security
                    assessment concepts and methodologies.
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
                     After obtaining the GWAPT certification, certified
                    professionals should engage in continuous learning and
                    professional development to stay updated on evolving web
                    application security trends and technologies.  Right Time
                    Limited offers advanced training courses, workshops, and
                    seminars to help certified professionals enhance their
                    skills and expand their knowledge in web application
                    penetration testing.  Certified professionals are
                    encouraged to maintain active membership with GIAC and
                    fulfill the organization's Continuing Professional Education
                    (CPE) requirements to retain their certification status.
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

export default GiacWebApplication;

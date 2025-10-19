import React, { useState } from "react";
import AssesmentNav from "./AssesmentNav";

function AssesmentHomeComponent({ data }) {
  const [tabIndex, setTabIndex] = useState(1);
  console.log(data.id);

  return (
    <div>
      <section className="  section-padding--top">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div dangerouslySetInnerHTML={{ __html: data?.body }}></div>
            </div>

            <div className="col-lg-5 ">
              <AssesmentNav />
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
                    Right Time Limited offers an intensive preparatory training
                    course designed for security professionals seeking to obtain
                    the Certified Penetration Testing Professional (CPENT)
                    certification by EC-Council. This course equips participants
                    with advanced skills and knowledge in penetration testing
                    methodologies, techniques, and tools required to identify
                    and exploit vulnerabilities in diverse environments.
                    Participants will learn through a combination of theoretical
                    instruction, hands-on labs, and real-world scenarios to
                    enhance their proficiency in conducting comprehensive
                    penetration tests.
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
                     Comprehensive coverage of penetration testing concepts,
                    methodologies, and best practices.
                    <br />
                     Practical hands-on labs and simulations in simulated
                    environments to reinforce learning.
                    <br />
                     Guidance from experienced instructors with extensive
                    expertise in penetration testing and offensive security.
                    <br />
                     Real-world case studies and scenarios to provide practical
                    insights into penetration testing engagements.
                    <br />
                     Access to cutting-edge tools and technologies used in
                    penetration testing and ethical hacking.
                    <br />
                     Comprehensive study materials, practice exams, and
                    supplementary resources to support exam preparation.
                    <br />
                     Interactive discussions and knowledge-sharing sessions
                    among participants to enhance learning and collaboration.
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
                   The Certified Penetration Testing Professional (CPENT)
                  preparatory training course by Right Time Limited offers
                  flexible scheduling options to accommodate participants'
                  availability and preferences.
                  <br />
                   Training sessions may be available in weekday, weekend, or
                  evening formats to cater to diverse schedules.
                  <br />
                   Customized training schedules can be arranged for corporate
                  clients or group bookings based on specific requirements.
                  <br />
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
                   The cost of the CPENT preparatory training course varies
                  depending on factors such as the training format, duration,
                  and additional resources included.
                  <br />
                   Right Time Limited may offer discounts for early
                  registration, group bookings, or special promotions.
                  <br /> Transparent pricing and flexible payment options are
                  available to ensure accessibility for participants.
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
                Interactive Lectures: Engaging lectures delivered by experienced
                cybersecurity professionals and certified instructors, covering
                topics such as network penetration testing, web application
                testing, and wireless penetration testing.
                <br />
                Hands-on Labs: Practical lab exercises and simulations that
                allow participants to apply theoretical knowledge in real-world
                scenarios. Participants will gain practical experience with
                industry-standard penetration testing tools and techniques.
                <br />
                Case Studies: Analysis of real-world penetration testing
                scenarios and case studies to enhance understanding of best
                practices, methodologies, and techniques used in penetration
                testing engagements. Group Discussions: Interactive discussions
                and group activities to facilitate knowledge sharing,
                collaboration, and peer learning among participants.
                Participants will have the opportunity to exchange insights,
                experiences, and best practices with their peers.
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
                    The CPENT certification exam is administered by EC-Council
                    and assesses participants' knowledge and skills in
                    penetration testing. Key examination information includes:
                    <br />
                    Format: The CPENT exam is a practical, hands-on assessment
                    that evaluates participants' ability to perform advanced
                    penetration testing tasks in a simulated environment.
                    <br />
                    Duration: CPENT is a fully online, remotely proctored
                    practical exam that challenges you through a grueling
                    24-hour performance-based, hands-on exam. The exam is broken
                    into two practical exams of 12-hours each that will test
                    your perseverance and focus by forcing you to outdo yourself
                    with each new challenge.
                    <br />
                    Number of Questions: 10+ Reports Writing. Scoring:
                    Participants are evaluated based on their performance in
                    completing assigned tasks, identifying vulnerabilities,
                    exploiting security weaknesses, and providing comprehensive
                    penetration testing reports.
                    <br />
                    Passing Score: To pass the CPENT exam and earn the
                    certification, participants must achieve a minimum passing
                    score 70% determined by EC-Council. If anyone scores 90% or
                    more than 90%, candidate will be awarded with “LPT Master”
                    Certificate.
                    <br />
                    Passing Score: Passing Score is rewarded with below
                    criteria: a. Certified Penetration Tester (CPENT):
                    Candidates who scores 70% or more (i.e. 70% to 89%) will
                    earn the earn the “Certified Penetration Tester (CPENT)”.
                    <br />
                    b. Licensed Penetration Tester (Master): Candidates scores
                    90% or more will earn the earn the “Licensed Penetration
                    Tester (Master)”.
                    <br />
                    Exam Delivery: The CPENT exam may be delivered online or
                    in-person at authorized testing centers, depending on
                    participant preferences and availability.
                    <br />
                    Preparation: Participants are encouraged to prepare for the
                    CPENT exam by completing the CPENT training program offered
                    by Right Time Limited, engaging in hands-on practice labs,
                    reviewing course materials, and studying relevant resources
                    recommended by EC-Council.
                    <br />
                    Retake Policy: In the event that a participant does not pass
                    the CPENT exam on their first attempt, EC-Council may allow
                    for retakes subject to their retake policy and associated
                    fees.
                    <br />
                    Participants who successfully pass the CPENT exam will be
                    awarded the Certified Penetration Testing Professional
                    (CPENT) certification by EC-Council, demonstrating their
                    proficiency in advanced penetration testing techniques and
                    methodologies."
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
                     Interested individuals can register for the CPENT
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
                     Actively engage in training sessions, labs, and exercises
                    to reinforce learning and practical skills development.
                    <br />
                     Utilize study guides, documentation, and practice labs
                    provided by Right Time Limited to deepen understanding of
                    penetration testing concepts and methodologies.
                    <br />
                     Allocate dedicated time for self-study and review of
                    course materials outside of scheduled sessions to strengthen
                    knowledge and address any areas of difficulty.
                    <br />
                     Seek guidance and support from instructors or peers as
                    needed to clarify concepts and prepare effectively for the
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
                     Upon successfully obtaining the CPENT certification,
                    certified professionals should pursue continuous learning
                    and professional development to stay abreast of emerging
                    trends and advancements in penetration testing.
                    <br />
                     Right Time Limited offers advanced training courses,
                    workshops, and seminars to help certified professionals
                    enhance their skills and expand their knowledge in ethical
                    hacking and penetration testing.
                    <br />
                     Certified professionals are encouraged to actively engage
                    in ongoing professional development activities and maintain
                    proficiency in penetration testing methodologies to uphold
                    the integrity of their certification.
                    <br />
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
          <p className="text-light">
            “Right Time Limited” is a highly esteemed security service provider,
            assisting businesses in fortifying their security posture. It offers
            expert consultation, meticulous testing, certification support, and
            reliable managed services to safeguard assets and mitigate risks.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AssesmentHomeComponent;

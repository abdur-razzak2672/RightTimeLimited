import React, { useState } from 'react'
import ManagementNav from './ManagementNav';


function CertifiedInformationSystemSecurity() {
  const [tabIndex, setTabIndex] = useState(1);

  return (
    <div>
      <div className="page-header">
        <div className="page-header__bg"
          style={{ backgroundImage: `url('/assets/images/background/page-header-bg-1-1.jpg')` }}></div>
        <div className="container">
          <ul className="thm-breadcrumb list-unstyled">
            <li><a href="{{ url('/') }}">Home</a></li>
            <li><a href="{{ url('/services/security-training') }}">Training</a></li>
            <li>Management</li>
          </ul>
          <h2 className="page-header__title">Certified Information System Security Professional (CISSP)</h2>
        </div>
      </div>
      <section className="  section-padding--top">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">


              <h3 className="blog-card-one__title blog-details__title changeColor">Certified Information System Security Professional (CISSP)</h3>
              <div className="blog-details__content">
                <p>
                  The Certified Information Systems Security Professional (CISSP) training offered by Right Time Limited prepares individuals for one of the most globally recognized certifications in the field of cybersecurity. The course covers essential topics such as security and risk management, asset security, security architecture and engineering, communication and network security, identity and access management, security assessment and testing, security operations, and software development security. </p>
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
                <a className="nav-link active" onClick={() => setTabIndex(1)} id="link1" href="javascript:void(0)" >
                  <i className="bi-list-check nav-icon"></i>Course Overview:
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  " onClick={() => setTabIndex(2)} href="javascript:void(0)" >
                  <i className="bi-list-check nav-icon"></i>Course Highlight
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => setTabIndex(3)} href="javascript:void(0)" >
                  <i className="bi-sort-numeric-down nav-icon"></i> Schedule
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => setTabIndex(4)} href="javascript:void(0)" >
                  <i className="bi-sort-numeric-down nav-icon"></i> Price
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => setTabIndex(5)} href="javascript:void(0)" >
                  <i className="bi-sort-numeric-down nav-icon"></i> Training Format
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => setTabIndex(6)} href="javascript:void(0)" >
                  <i className="bi-sort-numeric-down nav-icon"></i>Exam Information
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => setTabIndex(7)} href="javascript:void(0)" >
                  <i className="bi-sort-numeric-down nav-icon"></i> Registration
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => setTabIndex(8)} href="javascript:void(0)" >
                  <i className="bi-file-arrow-up nav-icon"></i> How to Prepare
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => setTabIndex(9)} href="javascript:void(0)" >
                  <i className="bi-file-arrow-up nav-icon"></i> Certification Maintenance:

                </a>
              </li>

            </ul>

          </div>
        </div>
      </div>


      <section className="mt-1">
        <div className="container">

          {
            tabIndex === 1 && (
              <div className="row">
                <div className="col-lg-8">


                  <h3 style={{ color: "orange" }} className="blog-card-one__title blog-details__title">Course Overview</h3>
                  <div className="blog-details__content">
                    <p>


                      The Certified Information Systems Security Professional (CISSP) training offered by Right Time Limited prepares individuals for one of the most globally recognized certifications in the field of cybersecurity. The course covers essential topics such as security and risk management, asset security, security architecture and engineering, communication and network security, identity and access management, security assessment and testing, security operations, and software development security.</p>                  </div>


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
            )
          }
          {
            tabIndex === 2 && (
              <div className="row">
                <div className="col-lg-8">


                  <h3 style={{ color: "orange" }} className="blog-card-one__title blog-details__title">Course Highlights</h3>
                  <div className="blog-details__content">
                    <p>
                      	Expert-led training by certified instructors<br />
                      	Comprehensive coverage of CISSP domains<br />
                      	Hands-on labs and real-world case studies<br />
                      	Interactive learning environment<br />
                      	Access to study materials and resources<br />
                      	Mock exams to assess readiness<br />


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
            )
          }
          {
            tabIndex === 3 && (
              <div className="row">
                <div className="col-lg-8">


                  <h3 style={{ color: "orange" }} className="blog-card-one__title blog-details__title">Schedule</h3><hr />
                  <p>
                    Please refer to our website i.e. https://www.righttime.biz/, or contact us directly for the latest course schedule and availability.
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
            )
          }
          {
            tabIndex === 4 && (
              <div className="row">
                <div className="col-lg-8">


                  <h3 style={{ color: "orange" }} className="blog-card-one__title blog-details__title">Price</h3><hr />
                  <div className="blog-details__content">

                  </div>
                  <p>
                    The course fee varies based on the training format, duration, and any additional materials provided. Please reach out to our sales team for pricing details and special offers.
                  </p><br />


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
            )
          }

          {
            tabIndex === 5 && (
              <div>
                <p>
                  The CISSP training provided by Right Time Limited offers a comprehensive approach, including interactive lectures delivered by experienced instructors, hands-on lab sessions to reinforce concepts, real-world case studies for practical application, engaging group discussions to share insights, and mock examinations to simulate the actual test environment.
                </p>
              </div>
            )
          }

          {
            tabIndex === 6 && (
              <div className="row">
                <div className="col-lg-8">


                  <h3 style={{ color: "orange" }} className="blog-card-one__title blog-details__title">Exam Information</h3>
                  <div className="blog-details__content">
                    <p>
                      Format: The CISSP exam by (ISC)² is typically a computer-based test with multiple-choice and advanced innovative questions.<br />

                      Duration: Candidates are given up to 3 hours to complete the exam.<br />

                      Number of Questions: The exam consists of 100-150 questions, covering various domains of cybersecurity.<br />

                      Scoring: Each question carries a specific weight, and the total score is calculated based on the number of correct answers.<br />

                      Passing Score: A passing score of 700 out of 1000 points is required to earn the CISSP certification.<br />

                      Exam Delivery: The exam can be taken at Pearson VUE testing centers worldwide or through online proctoring.<br />
                      Preparation: Preparation involves studying the CISSP Common Body of Knowledge (CBK), attending training sessions, practicing with sample questions, and reviewing relevant resources provided by Right Time Limited.<br />

                      Retake Policy: If a candidate does not pass the CISSP exam on the first attempt, (ISC)² allows for retakes under certain conditions. There is a waiting period of 30 days between exam retakes, and candidates can attempt the exam up to three times within a 12-month period. Additional fees apply for each retake. Right Time Limited can provide further details about (ISC)²'s retake policy and offer guidance on preparing for exam retakes to improve the likelihood of success.

                    </p>
                  </div>


                </div>
                <div className="col-lg-4 mt-5">
                  {/* <button type="button" className="btn btn-warning mt-4 w-100">Register Now</button> */}


                </div>
              </div>
            )
          }



          {
            tabIndex === 7 && (
              <div className="row">
                <div className="col-lg-8">


                  <h3 style={{ color: "orange" }} className="blog-card-one__title blog-details__title">Registration</h3>
                  <div className="blog-details__content">
                    <p>
                      To register for the Disaster Recovery Professional training course, please fill out the registration form on our website i.e. https://www.righttime.biz/, or contact our training coordinator for assistance.
                    </p>
                  </div>


                </div>
                <div className="col-lg-4 mt-5">
                  {/* <button type="button" className="btn btn-warning mt-4 w-100">Register Now</button> */}


                </div>
              </div>
            )
          }



          {
            tabIndex === 8 && (
              <div className="row">
                <div className="col-lg-8">


                  <h3 style={{ color: "orange" }} className="blog-card-one__title blog-details__title">How To Prepare</h3>
                  <div className="blog-details__content">
                    <p>
                      	Attend training sessions regularly<br />
                      	Study the CISSP Common Body of Knowledge (CBK)<br />
                      	Practice with sample questions and mock exams<br />
                      	Engage in group discussions and hands-on labs<br />
                      	Review relevant study materials provided by Right Time Limited<br />
                    </p>
                  </div>


                </div>
                <div className="col-lg-4 mt-5">
                  {/* <button type="button" className="btn btn-warning mt-4 w-100">Register Now</button> */}


                </div>
              </div>
            )
          }


          {
            tabIndex === 9 && (
              <div className="row">
                <div className="col-lg-8">


                  <h3 style={{ color: "orange" }} className="blog-card-one__title blog-details__title">Certification Maintenance</h3>
                  <div className="blog-details__content">
                    <p>
                      CISSP certification holders are required to earn Continuing Professional Education (CPE) credits annually to maintain their certification. Right Time Limited can provide guidance on fulfilling CPE requirements and staying up-to-date with the latest developments in cybersecurity.                    </p>
                  </div>


                </div>
                <div className="col-lg-4 mt-5">
                  {/* <button type="button" className="btn btn-warning mt-4 w-100">Register Now</button> */}


                </div>
              </div>
            )
          }
        </div>

      </section>


      <div className="page-header mt-4" >
        <div className="page-header__bg"
          style={{ backgroundImage: `url('https://www.icorps.com/hs-fs/hubfs/Hero%20Image%2021-1.png?width=1500&height=600&name=Hero%20Image%2021-1.png')` }}></div>
        <div className="container">
          <ul className="thm-breadcrumb list-unstyled">
            <h2 className="text-light">Digital Badging</h2>
          </ul>
          <p className="text-light">“Right Time Limited” is a highly esteemed security service provider, assisting businesses in fortifying their security posture. It offers expert consultation, meticulous testing, certification support, and reliable managed services to safeguard assets and mitigate risks.</p>
        </div>
      </div>

      <br /><br /><br /><br />
    </div>
  )
}

export default CertifiedInformationSystemSecurity
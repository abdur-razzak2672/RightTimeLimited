import React, { useState } from 'react'
import ManagementNav from './ManagementNav';


function CertifiedThreat() {
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
          <h2 className="page-header__title">Threat Intelligent Analyst (Custom)</h2>
        </div>
      </div>
      <section className=" section-padding--top">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">


              <h3 className="blog-card-one__title blog-details__title changeColor">Threat Intelligent Analyst (Custom)</h3>
              <div className="blog-details__content">
                <p>
                  Right Time Limited offers a preparatory training course for the Threat Intelligence Analyst certification by EC-Council. This course equips participants with the essential knowledge and skills to analyze, interpret, and respond to cybersecurity threats effectively. Covering topics such as threat landscape analysis, threat intelligence platforms, and threat actor profiling, this course prepares individuals for a career as a threat intelligence analyst in the cybersecurity industry. </p>
                <img className='training-images' src="/assets/images/training/CTIA.png" alt="" />
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


                      Right Time Limited offers a preparatory training course for the Threat Intelligence Analyst certification by EC-Council. This course equips participants with the essential knowledge and skills to analyze, interpret, and respond to cybersecurity threats effectively. Covering topics such as threat landscape analysis, threat intelligence platforms, and threat actor profiling, this course prepares individuals for a career as a threat intelligence analyst in the cybersecurity industry.                      </p>
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
            )
          }
          {
            tabIndex === 2 && (
              <div className="row">
                <div className="col-lg-8">


                  <h3 style={{ color: "orange" }} className="blog-card-one__title blog-details__title">Course Highlights</h3>
                  <div className="blog-details__content">
                    <p>
                      	Comprehensive curriculum aligned with industry standards and best practices.<br />
                      	Experienced instructors with expertise in threat intelligence and cybersecurity.<br />
                      	Hands-on labs and real-world case studies for practical learning.<br />
                      	Preparation for the Threat Intelligence Analyst certification exam.<br />
                      	Access to resources and study materials for continued learning and skill development.<br />


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
                    The course is available in various formats, including in-person and online options, with flexible scheduling to accommodate diverse learner needs. Please contact Right Time Limited for the latest schedule information and availability.
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
                    Pricing for the Threat Intelligence Analyst training course may vary based on the delivery format, additional services, and materials included. For detailed pricing information and any special offers, individuals are encouraged to reach out to Right Time Limited directly.                  </p><br />


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
                  The training for Threat Intelligence Analyst certification involves interactive lectures led by experienced instructors, hands-on lab sessions for practical skills development, real-world case studies to analyze and respond to threats, group discussions to exchange insights, and mock examinations to simulate the actual exam environment.
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
                      Format: The certification exam for Threat Intelligence Analyst is typically a multiple-choice test.<br />

                      Duration: The exam duration is usually 02 (two) hours, with a specific time limit provided by EC-Council.<br />

                      Number of Questions: The exam consists of a set number of questions i.e. 50, covering various topics related to threat intelligence.<br />

                      Scoring: Each question carries a certain weight, and the total score is calculated based on the number of correct answers.<br />

                      Passing Score: EC-Council sets a passing score i.e. 70% that candidates must achieve to earn the certification.<br />

                      Exam Delivery: The exam can be taken either online or in-person at designated testing centers approved by EC-Council.<br />

                      Preparation: Adequate preparation involves studying the course materials provided by Right Time Limited, reviewing relevant resources, participating in mock exams, and attending training sessions to ensure readiness for the certification exam.<br />

                      Retake Policy: In case a candidate does not pass the certification exam on the first attempt, EC-Council typically allows for retakes with certain conditions. The retake policy may include a waiting period between attempts, additional fees for retaking the exam, and a limit on the number of retakes allowed within a specified timeframe. Right Time Limited can provide detailed information about EC-Council's retake policy and offer guidance on preparing for exam retakes to improve the chances of success.<br />

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
                      To register for the Threat Intelligence Analyst course, individuals can visit Right Time Limited's website i.e. https://www.righttime.biz/, or contact their enrollment team directly. Registration may involve completing a registration form and providing relevant personal information.                    </p>
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
                      Prepare for the course by familiarizing yourself with basic cybersecurity concepts and threat intelligence fundamentals. Stay updated with the latest trends and developments in threat intelligence through relevant publications, forums, and online resources. Review any pre-course materials provided by Right Time Limited and actively participate in training sessions to maximize learning outcomes.
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
                      After obtaining the Threat Intelligence Analyst certification, individuals must adhere to EC-Council's certification maintenance requirements to keep their credentials active. This may include earning continuing education credits or renewing the certification periodically. Right Time Limited can provide guidance on maintaining certification status and accessing relevant resources for ongoing professional development.                    </p>
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

export default CertifiedThreat
import React, { useState } from 'react'
import ManagementNav from './ManagementNav';
function GiacCertifiedProject() {
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
          <h2 className="page-header__title">GIAC Certified Project Manager (GCPM)</h2>
        </div>
      </div>
      <section className="section-padding--top">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">


              <h3 className="blog-card-one__title blog-details__title changeColor">GIAC Certified Project Manager (GCPM)</h3>
              <div className="blog-details__content">
                <p>
                  The GIAC Certified Project Manager (GCPM) certification validates a practitioner's knowledge of technical project management methodology and implementation. GCPM certification holders have demonstrated the critical skill sets associated with making projects successful, including effective communication and time, cost, quality, procurement, and risk management of IT projects and application development.  </p>
                <img className='training-images' src="/assets/images/training/GCPM.png" alt="" />
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
              <li className="nav-item hover-nav-items">
                <a className="nav-link active" onClick={() => setTabIndex(1)} id="link1" href="javascript:void(0)" >
                  <i className="bi-list-check nav-icon"></i>Course Overview:
                </a>
              </li>
              <li className="nav-item hover-nav-items">
                <a className="nav-link  " onClick={() => setTabIndex(2)} href="javascript:void(0)" >
                  <i className="bi-list-check nav-icon"></i>Course Highlight
                </a>
              </li>
              <li className="nav-item hover-nav-items">
                <a className="nav-link" onClick={() => setTabIndex(3)} href="javascript:void(0)" >
                  <i className="bi-sort-numeric-down nav-icon"></i> Schedule
                </a>
              </li>
              <li className="nav-item hover-nav-items">
                <a className="nav-link" onClick={() => setTabIndex(4)} href="javascript:void(0)" >
                  <i className="bi-sort-numeric-down nav-icon"></i> Price
                </a>
              </li>
              <li className="nav-item hover-nav-items">
                <a className="nav-link" onClick={() => setTabIndex(5)} href="javascript:void(0)" >
                  <i className="bi-sort-numeric-down nav-icon"></i> Training Format
                </a>
              </li>
              <li className="nav-item hover-nav-items">
                <a className="nav-link" onClick={() => setTabIndex(6)} href="javascript:void(0)" >
                  <i className="bi-sort-numeric-down nav-icon"></i>Exam Information
                </a>
              </li>
              <li className="nav-item hover-nav-items">
                <a className="nav-link" onClick={() => setTabIndex(7)} href="javascript:void(0)" >
                  <i className="bi-sort-numeric-down nav-icon"></i> Registration
                </a>
              </li>
              <li className="nav-item hover-nav-items">
                <a className="nav-link" onClick={() => setTabIndex(8)} href="javascript:void(0)" >
                  <i className="bi-file-arrow-up nav-icon"></i> How to Prepare
                </a>
              </li>
              <li className="nav-item hover-nav-items">
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


                      Right Time Limited offers preparatory training for the GIAC Certified Project Manager (GCPM) certification, designed to equip professionals with the skills and knowledge necessary to effectively manage and execute cybersecurity projects. The course covers key project management principles, methodologies, and best practices tailored to the cybersecurity domain.</p>                  </div>


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

                      	In-depth coverage of project management concepts specific to cybersecurity<br />
                      	Expert-led instruction by experienced project managers<br />
                      	Practical insights and real-world case studies<br />
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
                  Interactive Lecture: Engage with expert instructors who cover key project management principles and cybersecurity concepts.<br />

                  Hands-on Lab: Apply learned concepts through practical exercises and simulations.<br />

                  Case Studies: Analyze real-world scenarios to understand project management challenges in cybersecurity.<br />

                  Group Discussion: Collaborate with peers to share insights and perspectives on project management techniques.<br />

                  Mock Examination: Assess your readiness for the GCPM exam with practice tests designed to simulate the actual exam environment.<br />

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
                      Format: Multiple-choice questions<br />

                      Duration: Approximately 3 hours<br />

                      Number of Questions: Around 150<br />

                      Scoring: Each question is worth a certain number of points, with the total score determining pass/fail status.<br />

                      Passing Score: The passing score varies and is determined by GIAC.<br />

                      Exam Delivery: The GCPM exam is proctored by GIAC and can be taken online or at a designated testing center.<br />

                      Preparation:<br /><br />

                      	Attend all training sessions and actively participate to gain a comprehensive understanding of project management in cybersecurity.<br />
                      	Utilize hands-on labs, case studies, and group discussions to apply theoretical knowledge to practical situations.<br />
                      	Take advantage of mock examinations to familiarize yourself with the exam format and assess your readiness.<br />
                      	Review study materials provided by Right Time Limited and supplement with additional resources as needed.<br /><br />

                      Retake Policy: If you do not pass the GCPM exam on your first attempt, you may retake it after a waiting period determined by GIAC. Right Time Limited can provide guidance and support for exam retakes, including additional study resources and preparation assistance to improve your chances of success.

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
                      	Attend all training sessions and actively participate<br />
                      	Review course materials and resources provided by Right Time Limited<br />
                      	Practice with sample questions and mock exams<br />
                      	Engage in group discussions and case study analysis<br />
                      	Familiarize yourself with project management methodologies and best practices in cybersecurity<br />

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
                      GIAC certifications require periodic renewal through Continuing Professional Education (CPE) credits. Right Time Limited can provide guidance on fulfilling CPE requirements and staying current with evolving project management practices in the cybersecurity field.                    </p>
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

export default GiacCertifiedProject
import React, { useState } from 'react'
import ManagementNav from './ManagementNav';


function CertifiedIncidentHandler() {
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
          <h2 className="page-header__title">Incident Handler (Custom)</h2>
        </div>
      </div>
      <section className="  section-padding--top">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">


              <h3 className="blog-card-one__title blog-details__title changeColor">Incident Handler (Custom)</h3>
              <div className="blog-details__content">
                <p>
                  The Incident Handler course is designed to equip cybersecurity professionals with the knowledge and skills required to effectively handle and respond to security incidents in an organization. The course focuses on incident detection, analysis, containment, eradication, and recovery. Participants will learn incident handling best practices, tools, and techniques to mitigate the impact of security incidents and protect critical assets.                    <br />
                </p>
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


                      The Incident Handler training course by Right Time Limited equips participants with the skills and knowledge needed to effectively respond to and manage cybersecurity incidents. Through comprehensive curriculum designed by EC-Council, participants learn incident handling best practices, incident response procedures, and techniques for mitigating cyber threats.
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
            )
          }
          {
            tabIndex === 2 && (
              <div className="row">
                <div className="col-lg-8">


                  <h3 style={{ color: "orange" }} className="blog-card-one__title blog-details__title">Course Highlights</h3>
                  <div className="blog-details__content">
                    <p>
                      	Comprehensive coverage of incident handling concepts and methodologies.<br />
                      	Practical insights from industry experts and experienced instructors.<br />
                      	Hands-on labs and real-world case studies to reinforce learning.<br />
                      	Preparation for the EC-Council Incident Handler certification exam.<br />


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
                    The course fee varies based on the training format, duration, and any additional materials provided. Please reach out to our sales team for pricing details and special offers.                  </p><br />


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
                  Our Incident Handler training course provides a comprehensive learning experience through:<br />

                  Interactive Lectures: Engaging sessions led by experienced instructors to cover essential concepts and best practices in incident handling.<br />

                  Hands-on Labs: Practical exercises allowing participants to apply theoretical knowledge in simulated scenarios.<br />

                  Case Studies: Real-world examples to analyze and understand different types of incidents and effective response strategies.<br />

                  Group Discussions: Collaborative learning environment for sharing insights, experiences, and challenges related to incident handling.<br />

                  Mock Examination: Practice exams to assess readiness for the certification exam and identify areas for improvement.<br />

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
                      Format: The EC-Council Incident Handler certification exam is conducted online and consists of multiple-choice questions.<br />
                      Duration: The exam typically spans a predetermined duration i.e. 04 (four) hours, allowing candidates sufficient time to answer all questions.<br />

                      Number of Questions: The exam includes a set number of questions i.e. 150 covering various aspects of incident handling and response.<br />
                      Scoring: Each question is assigned a specific weightage, and scores are calculated based on the correctness of the answers provided by candidates.<br />

                      Passing Score: To obtain certification, candidates must achieve the minimum passing score of 70%established by EC-Council.<br />

                      Exam Delivery: The exam is administered through EC-Council's online platform, accessible from any location with an internet connection.<br />

                      Preparation: Adequate preparation involves thorough review of course materials, active participation in training sessions, and consistent practice with mock examinations.<br />

                      Retake Policy: Should a candidate fail to pass the certification exam on the initial attempt, EC-Council's retake policy permits additional attempts after a designated waiting period. Candidates must adhere to EC-Council's retake policy guidelines, including any applicable fees and waiting periods between exam retakes. For detailed information on retake policies, candidates are encouraged to consult EC-Council's official guidelines or contact our training coordinator for assistance.<br />

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
                      To register for the Incident Handler training course, please visit Right Time Limited's website i.e. https://www.righttime.biz/, or contact their training coordinator for assistance.                    </p>
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
                      Prepare for the training course by:<br />

                      	Reviewing relevant course materials and resources provided by Right Time Limited.<br />
                      	Actively participating in training sessions, discussions, and hands-on exercises.<br />
                      	Engaging in self-study and practice exams to reinforce learning and assess readiness for certification.<br />

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
                      Upon successful completion of the Incident Handler certification exam, individuals must adhere to EC-Council's certification maintenance requirements to keep their certification current. This may include fulfilling continuing education credits or participating in recertification activities as outlined by EC-Council. For specific maintenance requirements, candidates are advised to consult EC-Council's official guidelines or contact Right Time Limited for assistance.                    </p>
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

export default CertifiedIncidentHandler
import React, { useState } from 'react'
import AssesmentNav from './AssesmentNav';


function GiacPenetration() {
  const [tabIndex, setTabIndex] = useState(1);

  return (
    <div>
      <div className="page-header">
        <div className="page-header__bg"
          style={{ backgroundImage: `url('https://t3.ftcdn.net/jpg/04/52/42/28/360_F_452422858_zMeVv3oCmjujM1ktmdnNZkDZdXhBfBDC.jpg')` }}></div>
        <div className="container">
          <ul className="thm-breadcrumb list-unstyled">
            <li><a href="{{ url('/') }}">Home</a></li>
            <li><a href="{{ url('/services/security-training') }}">Security Training</a></li>
            <li><a href="{{ url('/services/security-training/assessment') }}">Assessment</a></li>
            <li>Computer Hacking Forensic Investigator(CHFI)</li>
          </ul>
          <h2 className="page-header__title"> GIAC Penetration Tester(GPEN)</h2>
        </div>
      </div>
      <section className="  section-padding--top">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">


              <h3 className="blog-card-one__title blog-details__title changeColor">Assessment</h3>
              <div className="blog-details__content">
                <p>
                  The detailed information about the preparatory training course offered by Right Time Limited for the "GIAC Penetration Testing (GPEN)" certification by SANS:
                </p>
                <img className='training-images' src="/assets/images/training/GPEN.png" alt="GPEN" />
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

                      Right Time Limited provides comprehensive preparatory training for security professionals seeking to obtain the GIAC Penetration Testing (GPEN) certification offered by SANS Institute. This course equips participants with the knowledge and skills required to conduct effective penetration testing and vulnerability assessments in diverse environments. Through a blend of theoretical instruction and hands-on practical labs, participants will learn advanced penetration testing techniques, methodologies, and best practices to identify and mitigate security vulnerabilities effectively.                    </p>
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
                      	In-depth coverage of penetration testing methodologies, tools, and techniques used in real-world scenarios.<br />
                      	Practical hands-on labs and simulations to simulate real-world penetration testing scenarios and develop practical skills.<br />
                      	Instruction from experienced cybersecurity professionals and penetration testing experts with extensive industry experience.<br />
                      	Exploration of advanced penetration testing tools and technologies, including network, web application, and wireless penetration testing tools.<br />
                      	Discussion of reconnaissance, enumeration, exploitation, post-exploitation, and reporting phases of penetration testing engagements.<br />
                      	Access to comprehensive study materials, practice exams, and supplementary resources to support exam preparation.<br />
                      	Interactive discussions and knowledge-sharing sessions to enhance understanding and collaboration among participants.<br />

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
                    	The GPEN preparatory training course by Right Time Limited offers flexible scheduling options to accommodate participants' availability and preferences.<br />
                    	Training sessions may be available in weekday, weekend, or evening formats to cater to diverse schedules.<br />
                    	Customized training schedules can be arranged for corporate clients or group bookings based on specific requirements.<br />

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
                    	The cost of the GPEN preparatory training course may vary depending on factors such as the training format, duration, and additional resources included.<br />
                    	Right Time Limited offers competitive pricing and may provide discounts for early registration, group bookings, or special promotions.<br />
                    	Transparent pricing and flexible payment options are available to ensure accessibility for participants.<br />

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
                  Interactive Lectures: Engaging lectures delivered by experienced cybersecurity professionals and certified instructors, covering topics such as network reconnaissance, vulnerability assessment, exploitation techniques, and post-exploitation methodologies.<br />

                  Hands-on Labs: Practical lab exercises and simulations that allow participants to apply theoretical knowledge in real-world scenarios. Participants will gain hands-on experience with penetration testing tools and techniques used to identify and exploit security vulnerabilities in network systems.<br />

                  Case Studies: Analysis of real-world penetration testing engagements and scenarios to enhance understanding of best practices, methodologies, and techniques used in ethical hacking and network security assessments.<br />

                  Group Discussions: Interactive discussions and group activities to facilitate knowledge sharing, collaboration, and peer learning among participants. Participants will have the opportunity to exchange insights, experiences, and best practices with their peers.<br />

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
                      The GIAC Certified Penetration Tester (GPEN) certification exam is administered by SANS and assesses participants' knowledge and skills in penetration testing and ethical hacking. Key examination information includes:<br />

                      Format: The GPEN exam is a proctored, open-book exam consisting of 115 multiple-choice questions and practical exercises that simulate real-world penetration testing scenarios.

                      Duration: The exam duration is typically 03 (three) hours, during which participants are required to answer a series of questions and perform penetration testing tasks in a simulated environment.<br />

                      Scoring: Participants are evaluated based on their performance in answering exam questions and completing practical exercises. A passing score 74% or higher is required to obtain the GPEN certification.<br />

                      Exam Delivery: The GPEN exam may be taken at authorized testing centers worldwide or online through remote proctoring, providing flexibility and convenience for participants.<br />

                      Preparation: Participants are encouraged to prepare for the GPEN exam by completing Right Time Limited's comprehensive training program, reviewing course materials, and practicing with sample questions and practical exercises. Additionally, participants may benefit from self-study, hands-on practice with penetration testing tools, and review of relevant industry standards and methodologies.<br />

                      Successfully passing the GPEN exam demonstrates participants' proficiency in conducting penetration tests, identifying security vulnerabilities, and recommending remediation measures to improve the security posture of network infrastructures.<br />

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
                      	Interested individuals can register for the GPEN preparatory training course through Right Time Limited's official website i.e. https://www.righttime.biz/,, registration portals, or designated contact channels.<br />
                      	Upon registration, participants will receive confirmation of enrollment, along with detailed instructions on accessing course materials and joining training sessions.

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
                      	Actively engage in training sessions, labs, and exercises to reinforce learning and practical skills development in penetration testing.<br />
                      	Utilize study guides, documentation, and practice labs provided by Right Time Limited to deepen understanding of penetration testing concepts and methodologies.<br />
                      	Allocate dedicated time for self-study and review of course materials outside of scheduled sessions to strengthen knowledge and address any areas of difficulty.<br />
                      	Seek guidance and support from instructors or peers as needed to clarify concepts and prepare effectively for the GPEN certification exam.

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
                      	Upon successfully obtaining the GPEN certification, certified professionals should pursue continuous learning and professional development to stay updated on emerging trends and advancements in penetration testing and vulnerability assessment.<br />

                      	Right Time Limited offers advanced training courses, workshops, and seminars to help certified professionals enhance their skills and expand their knowledge in penetration testing and cybersecurity.<br />

                      	Certified professionals are encouraged to maintain active membership with GIAC and adhere to the organization's Continuing Professional Education (CPE) requirements to maintain their certification status.<br />

                    </p>
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

export default GiacPenetration

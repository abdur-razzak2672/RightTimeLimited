import React, { useState } from 'react'
import AssesmentNav from './AssesmentNav';

function Offensive() {
  const [tabIndex, setTabIndex] = useState(1);

  return (

    <div>
      <div className="page-header">
        <div className="page-header__bg"
          style={{ backgroundImage: `url('https://www.hackerschool.in/wp-content/uploads/2021/05/Cyber-Security-Banner.jpg')` }}></div>
        <div className="container">
          <ul className="thm-breadcrumb list-unstyled">
            <li><a href="{{ url('/') }}">Home</a></li>
            <li><a href="{{ url('/services/security-training') }}">Security Training</a></li>
            <li><a href="{{ url('/services/security-training/assessment') }}">Assessment</a></li>
            <li>Offensive Security Certified Professional (OSCP)</li>
          </ul>
          <h2 className="page-header__title">Offensive Security Certified Professional (OSCP)</h2>
        </div>
      </div>
      <section className="  section-padding--top">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">


              <h3 className="blog-card-one__title blog-details__title changeColor">Offensive Security Certified Professional (OSCP)</h3>
              <div className="blog-details__content">
                <p>
                  The detailed information about the preparatory training course offered by Right Time Limited for the "Offensive Security Certified Professional (OSCP)" certification by Offensive Security:                  <br />
                  <img className='training-images' src="/assets/images/training/oscp.jpg" alt="oscp" />
                </p>
              </div>


            </div>
            <div className="col-lg-5 mt-5">
              <AssesmentNav />
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
                      Right Time Limited provides an intensive preparatory training course designed for security professionals aspiring to earn the Offensive Security Certified Professional (OSCP) certification. This course equips participants with advanced penetration testing skills and techniques essential for identifying and exploiting vulnerabilities in diverse environments. Through a combination of theoretical instruction and hands-on practical labs, participants will learn ethical hacking methodologies, exploit development, network pivoting, and post-exploitation techniques to simulate real-world cyberattacks effectively.                    </p>
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
                      	In-depth coverage of penetration testing methodologies, tools, and tactics used by offensive security professionals.<br />
                      	Practical hands-on labs in simulated environments to reinforce learning and enhance practical skills.<br />
                      	Guidance from experienced instructors with extensive expertise in penetration testing and offensive security.<br />
                      	Real-world scenarios and challenges to provide practical insights into penetration testing engagements.<br />
                      	Access to cutting-edge tools and technologies commonly used in ethical hacking and penetration testing.<br />
                      	Comprehensive study materials, practice exams, and supplementary resources to support exam preparation.<br />
                      	Interactive discussions and knowledge-sharing sessions to foster collaboration and enhance learning outcomes.<br />


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
                    	The OSCP preparatory training course by Right Time Limited offers flexible scheduling options to accommodate participants' availability and preferences.<br />
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
                    	The cost of the OSCP preparatory training course may vary depending on factors such as the training format, duration, and additional resources included.<br />
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
                  Right Time Limited's training program for Offensive Security Certified Professional (OSCP) is meticulously crafted to provide participants with practical hands-on experience in penetration testing and ethical hacking. The training format comprises:<br />

                  Virtual Labs: Access to a virtual lab environment where participants can practice real-world penetration testing scenarios in a controlled setting. The lab environment simulates various network configurations, operating systems, and vulnerabilities, allowing participants to gain practical experience without risk to live systems.<br /><br />

                  Comprehensive Course Material: Detailed course material covering a wide range of topics, including network penetration testing, web application security, exploit development, and post-exploitation techniques. The material includes written guides, video tutorials, and practical exercises to cater to different learning styles.<br /><br />

                  Live Online Sessions: Interactive online sessions conducted by experienced instructors who are certified OSCP professionals. These sessions provide additional guidance, clarification on course content, and opportunities for participants to ask questions and interact with instructors and peers.<br /><br />

                  Hands-on Projects: Practical projects and challenges designed to reinforce learning and develop participants' skills in identifying, exploiting, and securing vulnerabilities in systems and applications. Participants will complete hands-on exercises and penetration testing engagements to apply their knowledge in real-world scenarios.<br /><br />

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
                      The Offensive Security Certified Professional (OSCP) certification exam is a rigorous assessment of participants' skills in penetration testing and ethical hacking. Key examination information includes:<br />

                      Format: The OSCP exam is a 24-hour hands-on practical exam conducted in a virtual lab environment. Participants are required to identify and exploit vulnerabilities in 03 (three) machines/Independent Targets, 02 (two) Clients, 01 (one) Domain Controllers; total 100 scores. within the exam network to retrieve flags and submit a comprehensive penetration testing report. <br />

                      Duration: Participants have 24 hours to complete the exam, during which they must demonstrate their ability to conduct a thorough penetration test, document their findings, and provide actionable recommendations for remediation.<br />

                      Scoring: The OSCP exam is graded based on the number of points earned by successfully exploiting vulnerabilities and completing assigned tasks. It requires a significant amount of time and effort to prepare. The pass rate for the OSCP exam is typically less than 50%.<br />

                      Exam Delivery: The OSCP exam is delivered online through Offensive Security's Proving Grounds (PG) platform, allowing participants to access the exam environment remotely from anywhere with an internet connection.<br />

                      Preparation: Participants are encouraged to prepare for the OSCP exam by completing Right Time Limited's comprehensive training program, practicing in the virtual lab environment, and reviewing course materials. Additionally, participants may benefit from self-study, practice exams, and hands-on experience with penetration testing tools and techniques.<br />

                      Successfully passing the OSCP exam demonstrates participants' proficiency in penetration testing and ethical hacking and qualifies them for the prestigious OSCP certification, recognized globally in the cybersecurity industry for its hands-on practical approach to learning and assessment.<br />

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
                      	Interested individuals can register for the OSCP preparatory training course through Right Time Limited's official website i.e. https://www.righttime.biz/,, registration portals, or designated contact channels.<br />
                      	Upon registration, participants will receive confirmation of enrollment, along with detailed instructions on accessing course materials and joining training sessions.<br />

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
                      	Actively engage in training sessions, labs, and exercises to reinforce learning and practical skills development.<br />
                      	Utilize study guides, documentation, and practice labs provided by Right Time Limited to deepen understanding of penetration testing concepts and methodologies.<br />
                      	Allocate dedicated time for self-study and review of course materials outside of scheduled sessions to strengthen knowledge and address any areas of difficulty.<br />
                      	Seek guidance and support from instructors or peers as needed to clarify concepts and prepare effectively for the OSCP certification exam.<br />

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
                      	Upon successfully obtaining the OSCP certification, certified professionals should pursue continuous learning and professional development to stay abreast of evolving cybersecurity threats and trends.<br />
                      	Right Time Limited offers advanced training courses, workshops, and seminars to help certified professionals enhance their skills and expand their knowledge in offensive security and penetration testing.<br />
                      	Certified professionals are encouraged to actively engage in ongoing practical exercises, capture the flag (CTF) competitions, and hands-on projects to maintain proficiency in penetration testing methodologies and techniques, ensuring the relevance and value of their OSCP certification.<br />

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

export default Offensive

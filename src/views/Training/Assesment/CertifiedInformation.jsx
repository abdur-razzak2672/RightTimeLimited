import React, { useState } from 'react'
import AssesmentNav from './AssesmentNav';

function CertifiedInformation() {
  const [tabIndex, setTabIndex] = useState(1);

  return (
    <div>
    <div className="page-header">
  <div className="page-header__bg"
       style={{ backgroundImage: `url('frontend/assets/images/background/osint.png')` }}></div>
  <div className="container">
  <ul className="thm-breadcrumb list-unstyled">
                <li><a href="{{ url('/') }}">Home</a></li>
                <li><a href="{{ url('/services/security-training') }}">Security Training</a></li>
                <li><a href="{{ url('/services/security-training/assessment') }}">Assessment</a></li>
                <li>Certified Information system Auditor (CISA)</li>
            </ul>
            <h2 className="page-header__title">Certified Information system Auditor (CISA)</h2>
  </div> 
</div> 
<section className="  section-padding--top">
        <div className="container">
          <div className="row">
          <div className="col-lg-7">


                <h3 style={{color:"orange"}} className="blog-card-one__title blog-details__title">Certified Information system Auditor (CISA)</h3>
                <div className="blog-details__content">
                    <p>
                    Right Time Limited offers a comprehensive preparatory training course for the Certified Information Systems Auditor (CISA) certification by ISACA, USA. This course is designed to equip participants with the knowledge and skills necessary to excel in the CISA exam and pursue a successful career in information systems auditing and assurance. 

More than 164,000 CISAs have been certified since its inception in 1978. CISA is globally recognized as the gold standard credential for IT auditors.
                     </p>
                </div>


            </div>
            <div className="col-lg-5">
            <AssesmentNav/>
            </div>
          </div>
        </div>
      </section> 
      <div style={{ marginLeft: "150px" }}>
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

                    Right Time Limited provides comprehensive preparatory training for security professionals seeking to obtain the Computer Hacking Forensic Investigator (CHFI) certification offered by EC-Council. This course is designed to equip participants with the knowledge and skills required to effectively investigate cybercrimes, gather digital evidence, and analyze forensic data. Through a blend of theoretical instruction and hands-on practical labs, participants will learn forensic investigation techniques, evidence acquisition methods, and legal considerations essential for conducting thorough digital investigations.
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
                    	In-depth coverage of the CISA exam domains, including information system auditing process, governance and management of IT, information systems acquisition, development, and implementation, and information systems operations and business resilience.<br/>
	Experienced instructors with industry expertise who provide practical insights and real-world examples.<br/>
	Interactive learning sessions, case studies, and hands-on exercises to reinforce key concepts and enhance understanding.<br/>
	Access to study materials, practice exams, and supplementary resources to support exam preparation.<br/>
	Guidance on exam-taking strategies, time management, and effective study techniques.
	Flexible learning options, including classroom-based training, virtual instructor-led sessions, and self-paced online courses.<br/>


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
                  	Right Time Limited offers flexible scheduling options for the CISA preparatory training course, including weekday, weekend, and evening sessions.<br/>
	Participants can choose the training format and schedule that best fits their availability and learning preferences.

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
                  	Fees (ISACA): <br/><br/>
o	ISACA Membership (International + Local) fees: ISACA has membership fees (professional, academician, student etc.) The professional Membership fees is $145 USD (annual) and Chapter (local involvement) fees is $20 USD.
o	ISACA Examination fees: The cost of the CISA exam is $575 for an ISACA member and $760 for a non-member. It's important to note that candidates are eligible to take the exam from the date of their registration; this eligibility period is good for 12 months. If anyone don't take the exam after one year, candidate will lose his/her payments.<br/><br/>
	Preparatory Training Fees (Right Time Limited): <br/><br/><br/>
o	The cost of the CISA preparatory training course offered by Right Time Limited varies depending on the selected format, duration, and additional resources included.
o	Discounts may be available for early registration, group bookings, or corporate clients.

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
                Right Time Limited's CISA (Certified Information Systems Auditor) training program is meticulously designed to equip participants with the knowledge and skills required to excel in the field of information systems auditing. The training format comprises:<br/>

Interactive Lectures: Engaging sessions led by experienced instructors who are themselves certified CISA professionals. These lectures cover a wide range of topics such as IT governance, risk management, information systems acquisition, development, and implementation, among others.<br/>

Case Studies: Analysis of real-world scenarios and case studies to provide practical insights into auditing practices and methodologies. Participants will learn to apply theoretical concepts to practical situations, enhancing their understanding of auditing principles.<br/>

Group Discussions: Interactive discussions and group activities aimed at fostering collaboration, knowledge sharing, and peer learning. Participants will have the opportunity to exchange ideas, experiences, and best practices with their peers, enriching their learning experience.<br/>

Mock Exams: Practice exams designed to simulate the CISA certification exam environment. These exams help participants familiarize themselves with the format, structure, and types of questions they can expect on the actual exam.<br/>

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
                    The CISA certification exam is administered by ISACA (Information Systems Audit and Control Association) and assesses participants' knowledge and proficiency in information systems auditing. Key examination information includes:<br/>

Format: The CISA exam is a computer-based test consisting of 150 multiple-choice questions. It evaluates participants' understanding of auditing, control, and assurance concepts across various domains. And do not have negative marking.<br/>

Duration: The exam duration is 04 (four) hours, during which participants are required to complete a predetermined number of questions.

Passing Score: To pass the CISA exam and earn the certification, participants must achieve a minimum passing score 450 out of 800 (approx. 56.25%) determined by ISACA. The passing score is not disclosed publicly but is typically set at a level that reflects a strong understanding of the subject matter.<br/>
Exam Delivery: The CISA exam is conducted at PSI Testing Center (1300 worldwide). Participants can schedule their exam date and location through ISACA's online portal. It has “Remote Proctoring” facility where individual candidate can appear his/her exam in their location. <br/>

Preparation: Participants are encouraged to prepare for the CISA exam by completing Right Time Limited's comprehensive training program, reviewing study materials provided by ISACA, and practicing with mock exams. Additionally, ISACA offers official review manuals, practice questions, and other resources to aid in exam preparation.<br/>

Preparation Guide (with running version): Present exam preparation guide (digital & print version) i.e. “Candidate Review Manual” (CRM) by ISACA is 27th edition. And it has “Question Answer & Explanation (QAE) Database with 12 months subscription and has Print/Digital version as well. And running version is 12th edition with 1000 multiple questions for practice. <br/>

Successfully passing the CISA exam demonstrates a participant's proficiency in information systems auditing and qualifies them for the prestigious CISA certification, recognized globally in the field of IT audit, control, and security.<br/>

Note: Please be advised that the CISA Exam Content Outline (ECO) will be updated effective 1 August 2024. Starting on 1 August 2024, the CISA Exam will reflect the new ECO. Updated preparation material for the new ECO will be available for purchase in May 2024. Purchase of this material will not grant you access to the newer version of the material at a later date.<br/>

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
                    	Interested individuals can register for the CHFI preparatory training course through Right Time Limited's official website i.e. https://www.righttime.biz/,, registration portals, or designated contact channels.<br/>
	Upon registration, participants will receive confirmation of enrollment, along with detailed instructions on accessing course materials and joining training sessions.<br/>

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
                    	Interested individuals can register for the CISA preparatory training course offered by Right Time Limited through the company's website i.e. https://www.righttime.biz/,, official channels, or designated registration portals.<br/>
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
            tabIndex === 9 && (
              <div className="row">
                <div className="col-lg-8">


                  <h3 style={{ color: "orange" }} className="blog-card-one__title blog-details__title">Certification Maintenance</h3>
                  <div className="blog-details__content">
                    <p>
                    	Attend scheduled training sessions conducted by Right Time Limited's experienced instructors.
	Engage actively in discussions, exercises, and group activities to deepen understanding and retention of course content.
	Utilize study guides, textbooks, and practice questions provided by Right Time Limited to reinforce learning and assess progress.
	Allocate dedicated time for self-study and review of course materials outside of scheduled sessions.
	Participate in mock exams and practice tests to simulate exam conditions and identify areas for improvement.
	Seek guidance and clarification from instructors or peers on any challenging topics or concepts.

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

export default CertifiedInformation

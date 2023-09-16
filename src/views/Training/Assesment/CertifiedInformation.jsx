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
          <div className="col-lg-8">


                <h3 style={{color:"orange"}} className="blog-card-one__title blog-details__title">Certified Information system Auditor (CISA)</h3>
                <div className="blog-details__content">
                    <p>
                    The Certified Information Systems Auditor (CISA) course is designed to prepare professionals for the role of an information systems auditor and equip them with the knowledge and skills required to assess, control, and audit information systems and technology. The course covers essential topics such as IT governance, risk management, information systems control, and audit processes. Participants will learn how to identify vulnerabilities, ensure compliance with standards and regulations, and provide assurance on the effectiveness of information systems in organizations.                    <br/>
                     </p>
                </div>


            </div>
            <div className="col-lg-4">
            <AssesmentNav/>
            </div>
          </div>
        </div>
      </section> 
        <div className ="container ">
          <div>
            <div>
              <ul className="nav nav-sm nav-tabs nav-vertical mb-4 steps-sampling">
                  <li className="nav-item">
                    <a className="nav-link active" onClick={() => setTabIndex(1)} id="link1" href="javascript:void(0)" >
                      <i className="bi-list-check nav-icon"></i>Course Highlight
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" onClick={() => setTabIndex(2)} href="javascript:void(0)" >
                      <i className="bi-file-arrow-up nav-icon"></i> How to Prepare
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
                      <i className="bi-sort-numeric-down nav-icon"></i> Information
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" onClick={() => setTabIndex(6)} href="javascript:void(0)" >
                      <i className="bi-sort-numeric-down nav-icon"></i> Registration
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


                <h3 style={{color:"orange"}} className="blog-card-one__title blog-details__title">Course Highlight</h3>
                <div className="blog-details__content">
                    <p>
                    IT Governance and Management:<br/><br/>

Understanding IT governance frameworks and best practices.
Assessing IT strategies and alignment with business objectives.
Risk Management and Compliance:<br/><br/>

Identifying and managing IT-related risks.
Ensuring compliance with relevant laws, regulations, and industry standards.
Information Systems Control and Assurance:<br/><br/>

Evaluating the effectiveness of information systems controls.
Performing information systems audits to ensure integrity and confidentiality.
Business Continuity and Disaster Recovery:<br/><br/>

Assessing business continuity plans and disaster recovery processes.
Mitigating the impact of potential disruptions to information systems.
Security and Access Control:<br/><br/>

Evaluating the security measures in place to protect information assets.
Implementing access controls to safeguard sensitive data.
Audit Process and Reporting:<br/><br/>

Understanding the auditing process and methodologies.
Reporting findings and recommendations to stakeholders.

                     </p>
                </div>


            </div>
            <div className="col-lg-4 mt-5">
            <div className="right border rounded-3 shadow " style={{width: "100%"}}>
                   <div className="card-body p-3">
                    <h5 className='mt-4'><a href="/training" >Ready For You ?</a></h5>
               

                    <p className='mt-4'>Upon completion of the course, you’ll be able to conduct PCI 3DS Assessments, validate and attest as to an entity’s PCI 3DS Core Security Standard compliance status, and prepare appropriate compliance reports<br/> (such as Reports on Compliance (RoC)) required by payment card brands and acquiring banks. </p>
                    <button type="button" className="btn btn-warning mt-4 w-100">Register Now</button>
                  </div>
                </div>
            </div>
          </div>
           
            // <h3>Frequently Asked Questions</h3>
            // <p>Regular assessments as such help safeguard the application from any unauthorized access which can cause an impact on the organization both in reputation and resources</p>
           
          )
        }
        {
          tabIndex === 2 && (
            <div className="row">
          <div className="col-lg-8">


                <h3 style={{color:"orange"}} className="blog-card-one__title blog-details__title">How To Prepare For The Exam</h3>
                <div className="blog-details__content">
                    <p>
                    Obtain the official course materials provided by the training provider or certification body.
Review textbooks, study guides, and reference materials related to information systems auditing and control.<br/>
Attend training courses or workshops conducted by experienced CISA instructors.
Engage in practice exams and mock tests to assess your knowledge and identify areas for improvement.<br/>
Join study groups or online forums to discuss concepts and share experiences with fellow aspirants.<br/>
Gain practical experience through internships or work opportunities in the field of IT auditing.

                  
                     </p>
                </div>


            </div>
            <div className="col-lg-4 mt-5">
            <div className="right border rounded-3 shadow " style={{width: "100%"}}>
                   <img className="card-img-top rounded-3 w-100" src="/assets/images/training/work.png" alt="" />
                  <div className="card-body p-3">
                    <h6 mt-4>Upon completion of the course, you’ll be able to conduct PCI 3DS Assessments, validate and attest as to an entity’s PCI 3DS</h6>

                    <h5 className='mt-4'><a href="/training" >Request More Information</a></h5>
                    <button type="button" className="btn btn-warning mt-4 w-100">Register Now</button>
                  </div>
                </div>
            </div>
          </div>
          )
        }
         {
          tabIndex === 3 && (
            <div className="row">
            <div className="col-lg-8">
  
  
                  <h3 style={{color:"orange"}} className="blog-card-one__title blog-details__title">Schedule</h3><hr/>
                  <div className="blog-details__content">
                    <div className=" container d-flex justify-content-between">
                      <h5 style={{color:"black"}}>17 NOV 2022</h5>
                      <h6> 9:00 - 17:20 BST</h6>
                      <h6>Remote</h6>
                      
  
                    </div><hr/>
                      <p>
                       
                      Upon completion of the course, you’ll be able to conduct PCI 3DS Assessments, validate and attest as to an entity’s PCI 3DS Core Security Standard compliance status, and prepare appropriate compliance reports (such as Reports on Compliance (RoC)) required by payment card brands and acquiring banks.
                      </p>
                  </div>
  
  
              </div>
              <div className="col-lg-4 mt-5">
              <div className="right border rounded-3 shadow " style={{width: "100%"}}>
                     <img className="card-img-top rounded-3 w-100" src="/assets/images/training/book.png" alt="" />
                    <div className="card-body p-3">
                    <p>
                       required by payment card brands and acquiring banks.
                       </p>
                      <button type="button" className="btn btn-warning mt-4 w-100">Register Now</button>
                    </div>
                  </div>
              </div>
            </div>
          )
        }
         {
          tabIndex === 4 && (
            <div className="row">
            <div className="col-lg-8">
  
  
                  <h3 style={{color:"orange"}} className="blog-card-one__title blog-details__title">Price</h3><hr/>
                  <div className="blog-details__content">
  
                    </div><hr/>
                    <div className=" container d-flex justify-content-between">
                      <h5 style={{color:"black"}}>New 3DS Assessor training (In person or eLearning)</h5>
                      <h6>$1368 USD</h6>
                      <h6>$1368 USD</h6>
                      
  
                    </div><hr/>
                    <div className=" container d-flex justify-content-between">
                      <h5 style={{color:"black"}}>Requalification 3DS Assessor Training</h5>
                      <h6>$1368 USD</h6>
                      <h6>$1368 USD</h6>
                      
  
                    </div><hr/>
                    <div className=" container d-flex justify-content-between">
                      <h5 style={{color:"black"}}>Knowledge Training Non-PO *</h5>
                      <h6> $1368 USD</h6>
                      <h6> </h6>
                      
  
                    </div><hr/>
                    <div className=" container d-flex justify-content-between">
                      <h5 style={{color:"black"}}>Knowledge Training PO *</h5>
                      <h6> $1368 USD</h6>
                      <h6></h6>
                      
                  </div><hr/>
                  <p>
                       
                      Upon completion of the course, you’ll be able to conduct PCI 3DS Assessments, validate and attest as to an entity’s PCI 3DS Core Security Standard compliance status, and prepare appropriate compliance reports (such as Reports on Compliance (RoC)) required by payment card brands and acquiring banks.
                      </p>
  
  
              </div>
              <div className="col-lg-4 mt-5">
              <div className="right border rounded-3 shadow " style={{width: "100%"}}>
                     <img className="card-img-top rounded-3 w-100" src="/assets/images/training/man.png" alt="" />
                    <div className="card-body p-3">
                    <p>
                       required by payment card brands and acquiring banks.
                       </p>
                      <a href="/managent" className=" mt-4 ">More Information</a>
                    </div>
                  </div>
              </div>
            </div>
          )
        }

{
          tabIndex === 5 && (
            <div>
               <h3 style={{color:"orange"}} className="blog-card-one__title blog-details__title">Exam Information</h3><hr/>
          <p>
          The CISA exam is administered by ISACA, the organization that offers the CISA certification.
The exam consists of multiple-choice questions and is typically conducted in a proctored environment.
The duration of the exam is four hours.<br/>
To pass the exam, candidates need to achieve a minimum score set by ISACA.
The exam tests candidates' knowledge and understanding of information systems auditing, control, and assurance.<br/>
Certification:<br/>

After passing the CISA exam, candidates can apply for the CISA certification from ISACA.
To become certified, candidates need to meet specific experience and education requirements set by ISACA.
Once certified, CISA professionals are required to adhere to ISACA's Code of Professional Ethics and continuing professional education (CPE) requirements to maintain their certification.
Note: The information provided here is a general overview of the CISA course and exam. For the most accurate and up-to-date information, it is essential to refer to the official ISACA website and materials related to the CISA certification.

          </p>
            </div>
          )
        }

{
          tabIndex === 6 && (
            <div className="row">
            <div className="col-lg-8">
  
  
                  <h3 style={{color:"orange"}} className="blog-card-one__title blog-details__title">Registration Process</h3>
                  <div className="blog-details__content">
                      <p>
                      The 3DS Assessor program teaches you to perform assessments of 3DS Environments in accordance with the PCI 3DS Core Security Standard. This training course will provide you with the understanding of the logical and physical security requirements as well as assessment procedures for performing PCI 3DS Assessments.
                      <br/>
                      Upon completion of the course, you’ll be able to conduct PCI 3DS Assessments, validate and attest as to an entity’s PCI 3DS Core Security Standard compliance status, and prepare appropriate compliance reports (such as Reports on Compliance (RoC)) required by payment card brands and acquiring banks.
                      </p>
                  </div>
  
  
              </div>
              <div className="col-lg-4 mt-5">             
                      <button type="button" className="btn btn-warning mt-4 w-100">Register Now</button>
                    
                  
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
        <p className="text-light">When you become a 3DS Assessor, display your digital badge and represent your skills and gives you a way to share your abilities online in a way that is simple, trusted and can be easily verified in real time.</p>
         </div>
      </div>
      
      <br /><br /><br /><br />
  </div>
  )
}

export default CertifiedInformation

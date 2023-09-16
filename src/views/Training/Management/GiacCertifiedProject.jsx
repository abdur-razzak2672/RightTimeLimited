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
          <div className="col-lg-8">


                <h3 style={{color:"orange"}} className="blog-card-one__title blog-details__title">GIAC Certified Project Manager (GCPM)</h3>
                <div className="blog-details__content">
                    <p>
                    The GIAC Certified Project Manager (GCPM) certification validates a practitioner's knowledge of technical project management methodology and implementation. GCPM certification holders have demonstrated the critical skill sets associated with making projects successful, including effective communication and time, cost, quality, procurement, and risk management of IT projects and application development.  </p>
                </div>


            </div>
            <div className="col-lg-4 mt-5">
            <ManagementNav/>
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
                    The GCPM certification is meant for security professionals and managers who engage in or lead project teams and want to prove technical project management methodology and implementation knowledge. GIAC Certified Project Manager Certification confirms the critical skill sets closely linked to successful projects, comprising effective communication, quality, cost, time, procurement, and risk management of IT projects and application development.
                    <br/>
 Course Outcome:<br/>
 ●	Ø Earned Value Technique EVT     <br/>	
 ●	Ø Leadership and Management Strategy<br/>
 ●	Ø Project Communication Management<br/>
 ●	Ø Project Cost Management<br/>
 ●	Ø Project Integration Management<br/>
 ●	Ø Project Management Framework and Approach<br/>
 ●	Ø Project Procurement Management<br/>
 ●	Ø Project Quality Management<br/>
 ●	Ø Project Resource Management	<br/>
 ●	Ø Project Risk Management	<br/>
 ●	Ø Project Schedule Management<br/>
 ●	Ø Project Scope Management<br/>
 ●	Ø Project Stakeholder Management<br/>
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
                    ●	Take up a Certification Training Course<br/>
●	Create Your Ideal Study Space<br/>
●	Devise Study Plan and Stick to It<br/>
●	Join in a Relevant Online Community or Study Forum<br/>
●	Schedule GCPM Practice Test<br/>
●	 Consider Your GCPM Exam Preparation as A Project<br/>

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
             Exam Name	GIAC Certified Project Manager (GCPM)<br/>
Exam Code	GCPM<br/>
Duration	180 mins<br/>
Number of Questions	115<br/>
Passing Score	70%<br/>
Schedule Exam	Pearson VUE<br/>
Practice Exam	GIAC GCPM Certification Practice Exam<br/>

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

export default GiacCertifiedProject
import React, { useState } from 'react'
import ManagementNav from './ManagementNav';
function ManagementBody() {
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
          <h2 className="page-header__title">Management</h2>
        </div>
      </div>
      <section className=" section-padding--top">
        <div className="container">
          <div className="row">
          <div className="col-lg-7">


                <h3 style={{color:"orange"}} className="blog-card-one__title blog-details__title">Management</h3>
                <div className="blog-details__content">
                    <p>
                    “Right Time Limited” (RightTime) provides training programs that focus on ICT management principles and practices. These programs equip participants with the necessary skills to effectively manage ICT infrastructure, resources, and processes within an organization. Topics covered may include IT governance, IT service management, IT project management, and IT strategy development. By attending these training programs, participants can improve their ability to align ICT initiatives with business objectives and ensure efficient and secure ICT operations.                    <br/>
                     </p>
                </div>


            </div>
            <div className="col-lg-5 mt-5">
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
                    The 3DS Assessor program teaches you to perform assessments of 3DS Environments in accordance with the PCI 3DS Core Security Standard. This training course will provide you with the understanding of the logical and physical security requirements as well as assessment procedures for performing PCI 3DS Assessments.
                    <br/>
                    Upon completion of the course, you’ll be able to conduct PCI 3DS Assessments, validate and attest as to an entity’s PCI 3DS Core Security Standard compliance status, and prepare appropriate compliance reports (such as Reports on Compliance (RoC)) required by payment card brands and acquiring banks.
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
                    Upon a completion of the course, you’ll be able to conduct PCI 3DS Assessments, validate and attest as to an entity’s PCI 3DS Core Security Standard compliance status, and prepare appropriate compliance reports (such as Reports on Compliance (RoC)) required by payment card brands and acquiring banks.

                    <br/>                    
                    The 3DS Assessor program teaches you to perform assessments of 3DS Environments in accordance with the PCI 3DS Core Security Standard. This training course will provide you with the understanding of the logical and physical security requirements as well as assessment procedures for performing PCI 3DS Assessments.

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
          <h6>The 3DS Assessor training course consists of a one-day instructor-led classNameroom training and exam providing:</h6>
          <h6>1. In-person engagement and collaboration as well as networking opportunities</h6>

          <h6>2. Ability to focus on curriculum in classNameroom setting</h6>

          <h6>3. Learn directly from an expert PCI SSC trainer with hands-on experience assessing merchants and/or service providers</h6>

          <h6>The qualification exam is taken immediately following the classNameroom training. The exam is closed-book.

          The Primary Contact at the QSA Company will be notified of results within two weeks after the candidate attends the instructor-led PCI 3DS training and exam. Employees who do not meet the minimum passing score set by the PCI SSC may retake New 3DS training and exam, upon registration and payment of a new invoice. For each attendee that passes the exam, the 3DS Company will receive a certificate that validates the employee for the next 12 months <br/>Attendance during the course is mandatory. Missing more than 30 minutes of the className will automatically result in forfeiture of the PCI SSC 3DS Assessor exam and removal from the className.</h6>

            
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

export default ManagementBody

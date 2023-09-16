import React, { useState } from 'react'
import AssesmentNav from './AssesmentNav';


function ComputerHacking() {
  const [tabIndex, setTabIndex] = useState(1);

  return (
    <div>
    <div className="page-header">
  <div className="page-header__bg"
       style={{ backgroundImage: `url('https://www.chfi.tn/file/sites/8/2021/04/Wallpaper-Anarchy-Computer-Hack-Hacker-Hacking-Intern35-scaled-1-1024x640.jpg')` }}></div>
  <div className="container">
  <ul className="thm-breadcrumb list-unstyled">
                <li><a href="{{ url('/') }}">Home</a></li>
                <li><a href="{{ url('/services/security-training') }}">Security Training</a></li>
                <li><a href="{{ url('/services/security-training/assessment') }}">Assessment</a></li>
                <li>Computer Hacking Forensic Investigator(CHFI)</li>
            </ul>
            <h2 className="page-header__title">Computer Hacking Forensic Investigator(CHFI)</h2>
  </div> 
</div> 
<section className=" section-padding--top">
        <div className="container">
          <div className="row">
          <div className="col-lg-8">


                <h3 style={{color:"orange"}} className="blog-card-one__title blog-details__title">Computer Hacking Forensic Investigator(CHFI)</h3>
                <div className="blog-details__content">
                    <p>
                    The CHFI course provides hands-on training in real-world scenarios and prepares professionals to handle various challenges in computer forensics investigations. It is suitable for cybersecurity professionals, law enforcement personnel, IT managers, and anyone interested in a career in digital forensics. Upon successful completion of the course and passing the exam, participants earn the CHFI certification, demonstrating their expertise in computer forensics and incident response.                    <br/>
                     </p>
                     <p className='mt-3'>
                     Introduction to Computer Forensics:<br/>
Understanding the role and importance of computer forensics in investigating cybercrimes.
Learning about the various types of cybercrimes and the impact of cyber threats on organizations.
<br/>
Digital Evidence and Investigation Process:<br/>
Understanding digital evidence and its relevance in investigations.
Learning the various steps involved in the investigation process, from identification to presentation of evidence.
<br/>
Understanding File Systems and Hard Disks:<br/>
Gaining knowledge about different file systems and disk structures.
Learning how to recover deleted files and extract evidence from hard disks.
<br/>
Operating System Forensics:<br/>
Investigating and analyzing artifacts on different operating systems, such as Windows, Linux, and macOS.
Identifying traces left by user activities, applications, and system processes.
<br/>
Network Forensics:<br/>
Analyzing network traffic and capturing packets to identify suspicious activities.
Investigating network attacks and intrusions to trace the origin and extent of the breach.
<br/>
Investigating Web Attacks:<br/>
Understanding web application attacks and analyzing logs for evidence.
Examining web server logs and identifying attacker activities.
<br/>
Database Forensics:<br/>
Investigating database security breaches and unauthorized access to databases.
Identifying anomalies and analyzing logs to trace database activities.
<br/>
Cloud Forensics:<br/>
Understanding the challenges of conducting investigations in cloud environments.
Learning about the methods to collect and preserve evidence from cloud platforms.
<br/>
Malware Forensics:<br/>
Analyzing and investigating different types of malware and their behaviors.
Extracting evidence related to malware infections and their impact on systems.
<br/>
Mobile Forensics:<br/>
Investigating mobile devices and extracting evidence from smartphones and tablets.
Identifying mobile security breaches and analyzing mobile applications.
<br/>
Forensics Report Writing and Presentation:<br/>
Documenting the findings and presenting the investigation results effectively.
Understanding the importance of clear and concise reporting in legal proceedings.

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
                    The Computer Hacking Forensic Investigator (CHFI) course is designed to equip individuals with the knowledge and skills required to conduct computer forensic investigations and effectively respond to cyber incidents. The CHFI certification is offered by the EC-Council and is recognized globally as a standard for computer forensics professionals.                    <br/>
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
             Exam Format:<br/>
The CHFI exam is a multiple-choice, closed-book exam.
The exam may include scenario-based questions that present real-world situations for candidates to analyze and respond to.<br/>
Exam Topics:<br/>
The CHFI exam covers various topics related to computer forensics and cybercrime investigation. These topics include but are not limited to:
<br/>
●	Computer Forensics Investigation Process<br/>
●	Digital Evidence Acquisition and Analysis<br/>
●	File Systems Forensics<br/>
●	Network Forensics<br/>
●	Mobile Forensics<br/>
●	Malware Forensics<br/>
●	Database Forensics<br/>
●	Cloud Forensics<br/>
●	Incident Response and Forensic Tools<br/>
Candidates are required to achieve a passing score to earn the CHFI certification.<br/>
Prerequisites:<br/>
There are no specific prerequisites to take the CHFI exam. However, it is recommended to have a solid understanding of computer networks, operating systems, and basic cybersecurity concepts before attempting the exam.
 
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

export default ComputerHacking

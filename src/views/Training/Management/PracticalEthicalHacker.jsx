import React, { useState } from 'react'
import ManagementNav from './ManagementNav';


function PracticalEthicalHacker() {
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
        <h2 className="page-header__title">Certified Ethical Hacking (CEH)</h2>
      </div>
    </div>
    <section className="s section-padding--top">
        <div className="container">
          <div className="row">
          <div className="col-lg-7">


                <h3 style={{color:"orange"}} className="blog-card-one__title blog-details__title">Certified Ethical Hacking (CEH)</h3>
                <div className="blog-details__content">
                    <p>
                    actical Ethical Hacking is a hands-on course designed to provide learners with practical skills and knowledge in ethical hacking and penetration testing. The course focuses on real-world scenarios, allowing participants to gain practical experience in identifying and exploiting security vulnerabilities while adhering to ethical standards. It is suitable for aspiring ethical hackers, cybersecurity professionals, and anyone interested in understanding the techniques used to secure systems and networks.                    <br/>
                     </p>
                     <p>
                     Introduction to Ethical Hacking:<br/>

Understanding the principles and ethics of ethical hacking.
Exploring the stages of ethical hacking, including information gathering, scanning, exploitation, and post-exploitation.<br/>
Footprinting and Reconnaissance:
<br/>
Gathering information about the target organization and its infrastructure.
Using passive and active reconnaissance techniques to identify potential attack vectors.<br/>
Scanning and Enumeration:
<br/>
Identifying open ports, services, and potential vulnerabilities using scanning tools.
Enumerating system and network resources to gather valuable information.<br/>
Vulnerability Assessment and Exploitation:<br/>

Assessing and exploiting security vulnerabilities in target systems and applications.
Understanding different attack vectors, such as SQL injection, Cross-Site Scripting (XSS), and more.<br/>
Web Application Hacking:<br/>

Evaluating web applications for common vulnerabilities and weaknesses.
Exploiting web application flaws to gain unauthorized access or extract sensitive data.
<br/>
Network Hacking:<br/>

Penetrating network infrastructure and devices to identify weaknesses.
Learning techniques for network-level attacks and lateral movement.<br/>
Wireless Network Hacking:<br/>

Assessing the security of wireless networks and exploiting vulnerabilities.
Understanding the concepts of WEP, WPA, and WPA2 attacks.<br/>
Social Engineering:<br/>

Learning about different social engineering techniques to manipulate human behavior.
Understanding the importance of social engineering in penetration testing.<br/>
Post-Exploitation and Maintaining Access:<br/>

Maintaining control over compromised systems and avoiding detection.
Understanding post-exploitation techniques and strategies.<br/>
Reporting and Documentation:<br/>

Preparing comprehensive reports to communicate findings and recommend remediation steps.
Understanding the importance of clear and concise documentation.


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
                    Extensive hands-on labs and practical exercises in a controlled environment.<br/>
Real-world scenarios and practical simulations to mimic actual ethical hacking engagements.<br/>
Guidance from experienced instructors and industry experts.<br/>
Exposure to a wide range of hacking tools and techniques.<br/>
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
                    Acquire a solid understanding of networking, operating systems, and cybersecurity fundamentals.
Familiarize yourself with common hacking tools like Metasploit, Wireshark, Nmap, etc.
Set up a lab environment to practice hands-on exercises and experiments.<br/>
Stay updated with the latest security vulnerabilities and exploitation techniques.

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
                       
  By delivering training that aligns with the organization's specific context, RightTime helps to enhance knowledge, skills, and competencies within the organization.
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
                       
  By delivering training that aligns with the organization's specific context, RightTime helps to enhance knowledge, skills, and competencies within the organization.
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
              The Practical Ethical Hacking course may or may not include a formal exam, depending on the training provider.
If an exam is included, it typically involves conducting a practical penetration test on a controlled environment.<br/>
Candidates are assessed based on their ability to identify and exploit vulnerabilities, maintain access, and produce a detailed report.<br/>
Successful completion of the course and any associated exam may lead to a practical ethical hacking certification.<br/>
Note: Specific details about the Practical Ethical Hacking course, exam format, and prerequisites may vary depending on the training provider or certification body offering the course. It is essential to check the course syllabus and exam details with the chosen training provider or certification organization.

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
                      “Right Time Limited” is a highly esteemed security service provider, assisting businesses in fortifying their security posture. It offers expert consultation, meticulous testing, certification support, and reliable managed services to safeguard assets and mitigate risks. teaches you to perform assessments of 3DS Environments in accordance with the PCI 3DS Core Security Standard. This training course will provide you with the understanding of the logical and physical security requirements as well as assessment procedures for performing PCI 3DS Assessments.
                      <br/>
  By delivering training that aligns with the organization's specific context, RightTime helps to enhance knowledge, skills, and competencies within the organization.
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
        <p className="text-light">“Right Time Limited” is a highly esteemed security service provider, assisting businesses in fortifying their security posture. It offers expert consultation, meticulous testing, certification support, and reliable managed services to safeguard assets and mitigate risks.</p>
         </div>
      </div>
      
      <br /><br /><br /><br />
  </div>
  )
}

export default PracticalEthicalHacker
import React, { useState } from 'react'
import ManagementNav from './ManagementNav';


function OpenSource() {
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
        <h2 className="page-header__title">Open Source Intelligent (OSINT)</h2>
      </div>
    </div>
    <section className=" section-padding--top">
        <div className="container">
          <div className="row">
          <div className="col-lg-7">


                <h3 style={{color:"orange"}} className="blog-card-one__title blog-details__title">Open Source Intelligent (OSINT)</h3>
                <div className="blog-details__content">
                    <p>
                    This course focuses on Open Source Intelligence (OSINT) tactics and techniques designed to help you improve your investigative game. Students should take this course if they are interested in:
<br/>●	Gaining a better understanding of OSINT techniques<br/>
●	Improving investigative skill set<br/>
●	Improving overall research methodology<br/>
●	Improving Personal OPSEC<br/>
Open-source intelligence (OSINT) is the practice of collecting information from published or otherwise publicly available sources.
<br/>
Course Overview:<br/>
The Open Source Intelligence (OSINT) course provides individuals with the knowledge and skills to effectively collect and analyze information from publicly available sources on the internet. OSINT is a crucial component of cybersecurity and intelligence gathering, helping organizations and individuals make informed decisions, identify potential risks, and understand the threat landscape. The course covers various OSINT techniques, tools, and methodologies to conduct comprehensive research and extract valuable insights from online sources.
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
                    Introduction to OSINT:
                    <br/>
Understanding the significance of OSINT in cybersecurity and intelligence analysis.
Exploring the ethical and legal considerations of OSINT.<br/>
OSINT Methodologies and Tools:<br/>

Learning various techniques for OSINT data collection, such as web scraping, data mining, and social media analysis.
Familiarizing with OSINT tools and platforms for efficient information gathering.<br/>
Online Research Techniques:<br/>

Developing effective search strategies for uncovering hidden information.
Using advanced search operators and filters to refine search results.<br/>
Social Media Intelligence:<br/>

Extracting intelligence from social media platforms and online forums.
Analyzing user-generated content for threat detection and risk assessment.<br/>
Dark Web and Deep Web Analysis:<br/>

Understanding the differences between the surface web, deep web, and dark web.
Exploring OSINT techniques to navigate and gather information from these hidden areas.<br/>
Geolocation and Mapping:
<br/>
Leveraging geolocation data to identify the physical location of online entities.
Using mapping tools to visualize and analyze geospatial data.<br/>
Analyzing OSINT Data:<br/>

Evaluating the credibility and reliability of OSINT sources.
Synthesizing and correlating information to generate actionable intelligence.<br/>
OSINT for Threat Intelligence:<br/>

Applying OSINT in the context of cybersecurity threat hunting and intelligence analysis.
Identifying indicators of compromise (IOCs) and potential attack vectors.
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
                    Develop a strong understanding of internet protocols, web technologies, and networking concepts.
Familiarize yourself with various online platforms, social media, and forums.
Learn about different OSINT tools and platforms used for data collection and analysis.
Enhance your research and analytical skills to extract valuable insights from online sources.
Practice using search operators and filters to refine search results.
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
               <p>The OSINT course may or may not include a formal exam, depending on the training provider or certification body.
If an exam is included, it typically assesses candidates' knowledge of OSINT concepts, methodologies, and tools.
The exam format may vary, including multiple-choice questions, practical assessments, and scenario-based challenges.
Successful completion of the course and any associated exam may lead to an OSINT certification.
Note: Specific details about the OSINT course, exam format, and prerequisites may vary depending on the training provider or certification organization offering the course. It is essential to check the course syllabus and exam details with the chosen training provider or certification body.
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

export default OpenSource
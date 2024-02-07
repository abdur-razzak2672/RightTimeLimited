import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { countryList } from '../Contact/data';
import './training.css'
function TrainingBody() {
  const [company, setCompany] = useState('2');


  const handleChange = event => {
    setCompany(event.target.value);
  };

  console.log("DSgvfd", company)

  const individualOptions = [
    "Lead Auditor (ISO 9001, ISO 27001, ISO 20000, ISO 22301 etc.)",
    " Lead Implementer (ISO 9001, ISO 27001, ISO 20000, ISO 22301 etc.)",
    "  Certified Penetration Testing Professional (CPENT)",
    "  Offensive Security Certified Professional (OSCP)",
    "	Certified Information system Auditor (CISA)",
    "	GIAC Penetration Testing (GPEN)",
    "	Training on HIPAA",
    "	Training on GDPR",
    "	Training on SWIFT CSP Independent Assessment (based on latest CSCF)",
    "	Training on Data Center (Basic, Intermediate & Advance)",
    "	GIAC Web Application Penetration Testing (GWAPT)",
    "	Certified Ethical hacker (CEH-312-50)",
    "	EC-Council Certified Incident Handler (ECIH-212-89)",
    "	Certified SOC Analyst (CSA)",
    "	PCI DSS Certification- ISA & PCIP",
    "	Certified Threat Intelligent Analyst (CTIA)",
    "	Certified Information security Manager (CISM)",
    "	Certified Information System Security Professional (CISSP)",
    "GIAC Certified Project Manager (GCPM)",
    "	Open-Source Intelligence (OSINT) ",
    "	Certified Secure Computer User (CSCU-112-12)",
    "	Network Security Fundamentals (FNS)",
    "	Information Security Fundamentals (FIS)",
    "	Computer Forensic Fundamentals (CFF)",
    "	Certified Network Defense (CND-312-38)",
    "	EC-Council Disaster Recovery Professional (EDRP-312-76)",
    "	Securing Windows Infrastructure (CAST-616)",
    "	Advance Network Defense (CAST-614)",
    "	EC-Council Certified Secure Programmer JAVA (ECSP-312-94) ",
    "	EC-Council Certified Secure Programmer .Net (ECSP-312-93)",
    "	Advanced Penetration testing (CAST-611)",
    "	Licensed Penetration Tester (LPT-412-79)",
    "	EC-Council Certified Security Analyst (ECSA-412-79) ",
    "	Hacking and Hardening Your Corporate Web Application (CAST-613)",
    "	Computer Hacking Forensic Investigator (CHFI-312-49)",
    "	Advanced Mobile Forensics And security (CAST-612)",
    "	Certified Chief Information Security Officer (CCISO)",



  ];



  const companyOptions = [
    "Consultation",
    "Information Security & Cyber Security Consulting",
    "	Project Management ",
    "Consultation on Shaping up DC & DRS",
    "Swift Cyber Security Consulting ",
    "	Technical Documentation On ITES",

    " Auditing ",
    "Information System Audit ",
    "Information Technology Audit ",
    "	Information Security Graded Audit",
    "	DC & DRS Auditing",

    "Security Testing ",
    "	Vulnerability Assessment & Penetration  Testing Services ",
    "	Digital Forensics ",
    "	Code Review ",
    "	Software Quality Assurance & Testing ",
    "	Swift CSP Independent Assessment",

    " Certification ",
    "	PCI DSS Certification",
    "	ISO 27001, ISO 9001, ISO 20000-1, ISO 22301, ISO 13485, ISO 5001, ISO 14001 etc.",
    "	CMMI (Capability Maturity Model Integration) ",
    "	Tia 942 For Data Center",
    "	GDPR Assessment",
    "	HIPAA Assessment",

    " Managed Service",
    "	SOC as A Service",
    "	Cloud App Monitoring as A Service",
    "	MDR as A Service (Managed End Point Detection and Response)",
    "	Managed Nextgen Firewall as A Service ",
    "	Vulnerability Assessment (VA) As A Service ",
    "Penetration Testing (PT) As A Service ",
    "  DAM (Database Auditing & Management) as A Service",




    " Cyber Security Management & Visibility solutions",
    "	SIEM",
    "	Firewall (Especially Next Gen)",
    "	Log Management",
    "Patch management",
    "Privilege Access Management (PAM)",

    "Security assessment (VA & PT) Tools",
    "Burp Suite",
    "	Net Sparker",
    "Tenable All Product",
    "	Nessus Professional",
    "	Acunetix",
    "	Core Impact",
    "	Cobalt Strike",





  ];
  return (
    <div>
      <div>
        <div className="training_banner">
          {/* <div className="page-header__bg"
            style={{ backgroundImage: `url('/assets/images/background/training.png')` }}></div> */}
          <div className="container">


          </div>
        </div>

        <div className="container mt-5">
          <p className='text-dark textJustify'>“Right Time Limited”   training programs encompass ICT Assessment, ICT Management, and customized training solutions. By participating in these programs, individuals and organizations can acquire the necessary knowledge and skills to effectively assess and manage ICT systems, as well as receive tailored training to meet their specific requirements.</p>

          <section className="section-padding--bottom   mt-5">
            <div className="container">
              <div className="section-title  ">
                <h2 className="header text-center">Training Programs</h2>
              </div>
              <ul className="card-wrapper">
                <li className="card">
                  <img height="210px" width="100%" src="/assets/images/training/ICT_Assessment.jpg" alt="" />  
                  <h3 className="text-center header" ><a href="/assesment">Training (ICT Assessment)</a></h3>
                  <div className='mx-2' style={{ alignItems: "start" }}>
                    <p className='text-dark textJustify'>“Right Time Limited”   offers training programs designed to enhance participants' knowledge and skills in conducting ICT assessments. </p>

                    <a href="/assesment" className="header">More Information...</a>

                  </div>



                </li>
                <li className="card bg-gray">
                  <img height="210px" width="100%" src="/assets/images/training/ICT_Management.jpg" alt="" />
                  <h3 className="text-center header" ><a href="/management"> Training (ICT Management)</a></h3>
                  <div className='mx-2' style={{ alignItems: "start" }}>
                    <p className='text-dark textJustify'>“Right Time Limited”   provides training programs that focus on ICT management principles and practices. </p>

                    <a className="header" href="/management"  >More Information...</a>

                  </div>
                </li>

                <li className="card">
                  <img height="210px" width="100%" src="/assets/images/training/Customized.jpg" alt="" />
                  <h3 className="text-center header" ><a href="/Customized">Training (RightTime Customized)</a></h3>
                  <div className='mx-2' style={{ alignItems: "start" }}>
                    <p className='text-dark textJustify'>“Right Time Limited”   offers customized training solutions tailored to the specific needs of organizations</p>

                    <a href="/Customized" className="header">More Information...</a>

                  </div>



                </li>



              </ul>


            </div>
          </section>


          {/* <img id='prelC' src="/images/c.svg" width="100" height="100" alt="loading" /> */}

          <h1 className='text-warning text-center my-5'>ICT Professional(s) will be benefited with our Track choosing mind-map. </h1>

          <div class="main">

            <div class="custom-wrapper pure-g container" id="menu">
              <div class="pure-u-1-4">
                <div class="pure-menu">

                </div>
              </div>
              <div class="pure-u-1-2">
                <div class="pure-menu pure-menu-horizontal custom-can-transform menu-main menu-large">
                  <ul class="pure-menu-list">
                    <li class="pure-menu-item"><a href="/interactive-map" class="pure-menu-link ">Interactive map</a>
                    </li>
                    <li class="pure-menu-item"><a href="/pathway" class="pure-menu-link active">Career
                      pathway</a>  </li>
                    <li class="pure-menu-item"><a href="education-training" class="pure-menu-link">Education and Training Providers</a></li>

                  </ul>
                </div>
              </div>
              {/* <div class="pure-u-1-4" style={{textAlign: "right"}}>
            <div class="pure-menu pure-menu-horizontal custom-menu-3 custom-can-transform">
                <ul class="pure-menu-list">
                    <li class="pure-menu-item" style={{borderRight: "2px solid #F5F7F9"}}><a href="/about-us" class="pure-menu-link menu-large">About</a></li>

                    <li class="pure-menu-item pure-menu-has-children">
                        <a href="#" id="menuLink1" class="pure-menu-link menu-icon"><img width="21" height="21"
                                src='images/menu.svg' alt="menu"/></a>
                        <ul class="pure-menu-children">
                            <li class="pure-menu-item">
                                <a href="heatmap.html" class="pure-menu-link menu-small">Interactive map</a>
                            </li>
                            <li class="pure-menu-item">
                                <a href="pathway" class="pure-menu-link menu-small">Career pathway</a>
                            </li>
                            <li class="pure-menu-item">
                                <a href="training.html" class="pure-menu-link menu-small">Education and Training Providers</a>
                            </li>
                            <li class="pure-menu-item">
                                <a href="/about-us" class="pure-menu-link menu-small">About</a>
                            </li>
                            <li class="pure-menu-item">
                                <a href="index.html#whoIsThis" class="pure-menu-link">Who this tool is for</a>
                            </li>
                            <li class="pure-menu-item">
                                <a href="index.html#partners" class="pure-menu-link">Project partners</a>
                            </li>
                            <li class="pure-menu-item">
                                <a href="index.html#usefulLinks" class="pure-menu-link">Links</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div> */}
            </div>

            <div class='clear'></div>
            <div id='con' class="container wrapper">
              <br />
              <div class="pure-g">
                <div class="pure-u-1-1 buttons" style={{ margin: "0, auto", textAlign: "center" }}>
                  <a href="pathway" class="pure-button">Roles</a>
                  <a href="training" class="pure-button pure-button-primary ml-1">Skills and Certifications</a>
                </div>
              </div>
              <br />

              <div class="pure-g">
                <div class="pure-u-1-1" style={{ margin: "0, auto", textAlign: "center" }}>
                  <div class="intro">
                    <p>Select a certification, job title or skill to see how they relate to each other. <button class="pure-button" id="gotit">Got it</button></p>
                  </div>
                </div>
              </div>

              <div id="map-key-1" class="pure-menu pure-menu-horizontal">
                <ul class="pure-menu-list">
                  <li class="pure-menu-item">
                    <div class="circle" style={{ backgroundColor: "#408AE1" }}></div> Entry level
                  </li>
                  <li class="pure-menu-item">
                    <div class="circle" style={{ backgroundColor: "#B871AD" }}></div> Mid-level
                  </li>
                  <li class="pure-menu-item">
                    <div class="circle" style={{ backgroundColor: "#7FE2C6" }}></div> Advanced
                  </li>
                </ul>
              </div>
              <br />
              <div style={{ fontSize: "30px" }} id="sankey"></div>
              <div style={{ fontSize: "30px" }} class='clear'></div>
              <br /><br />
            </div>

            <div style={{ fontSize: "30px" }} class='scrollUpWrapper'>
              <div style={{ fontSize: "30px" }} class='scrollUp'></div>
            </div>

            <div style={{ fontSize: "30px" }} class='clear'></div>
          </div>









          {/* <p className='text-dark mt-5'>The PCI Security Standards Council operates programs to train, test, and qualify organizations and individuals who assess and validate compliance, in order to help merchants successfully implement PCI standards and solutions. The Council also qualifies payment hardware and software so that merchants select and implement approved solutions for securing payment data and systems.</p> */}

        </div>



        <section className="section-padding--bottom text-center mt-5">
          <div className="container">
            <div className="section-title text-center">
              <h2 className="header">Meet Our Trainers</h2>

            </div>
            <div className="owl-carousel  thm-owl__carousel thm-owl__carousel--with-shadow service-four__carousel"
              data-owl-options='{"loop": true,
				"autoplay": true,
				"autoplayTimeout": 3000,
				"nav": false,
				"navText": ["<span className=\"fa fa-angle-left\"></span>","<span className=\"fa fa-angle-right\"></span>"],
				"dots": true,
				"margin": 0,
                "items": 1,
				"smartSpeed": 700,
				"responsive": {
					"0": {
						"margin": 0,
						"items": 1
					},
					"576": {
						"margin": 30,
						"items": 2
					},
					"768": {
						"margin": 30,
						"items": 3
					},
					"992": {
						"margin": 30,
						"items": 4
					},
					"1200": {
						"margin": 30,
						"items": 4
					}
				}}'>
              <div className="item">
                <div className="card">
                  <a className=" mt-4 rounded-4" href="/"><img className='rounded-5' style={{ width: "100%", height: "170px" }} src="/assets/images/team/Photo1.jpeg" alt="" /></a>
                  <div className="service-card-three__content">
                    <h4 className="pt-3"><a href="/consultation"> Dr. Touhid Bhuiyan
                      <br /></a></h4>
                    <p>DIRECTOR, STRATEGIC PLANNING AND DEVELOPMENT</p>
                    <a href="/team" className="">More Information</a>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="card">
                  <a className=" mt-4 rounded-4" href="/"><img className='rounded-5' style={{ width: "100%", height: "170px" }} src="/assets/images/team/Shamim-PP.jpeg" alt="" /></a>
                  <div className="service-card-three__content">
                    <h4 className="pt-3"><a href="/consultation">Md. Shamim Al Mamun
                      <br /></a></h4>
                    <p>CHIEF TECHNOLOGY OFFICER (CTO)</p>
                    <a href="/team" className="">More Information</a>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="card">
                  <a className=" mt-4 rounded-4" href="/"><img className='rounded-5' style={{ width: "100%", height: "170px" }} src="/assets/images/team/Mohammad Tohidur Rahman Bhuiyan.jpg" alt="" /></a>
                  <div className="service-card-three__content">
                    <h4 className="pt-3"><a href="/consultation"> Mohammad Tohidur Rahman Bhuiyan
                      <br /></a></h4>
                    <p>Lead Security Practitioner and MD & CEO</p>
                    <a href="/team" className="">More Information</a>
                  </div>
                </div>
              </div>

              <div className="item">
                <div className="card">
                  <a className=" mt-4 rounded-4" href="/"><img className='rounded-5' style={{ width: "100%", height: "170px" }} src="/assets/images/team/Rokanuzzaman.jpeg" alt="" /></a>
                  <div className="service-card-three__content">
                    <h4 className="pt-3"><a href="/consultation">Md. Rokanuzzaman
                      <br /></a></h4>
                    <p>Chief Information Officer (CIO)</p>
                    <a href="/team" className="">More Information</a>
                  </div>
                </div>
              </div>
            </div>





          </div>
        </section>

        <div>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
              </div>
              <h3 className='text-dark text-center my-5'>Contact Us</h3>
              <Form>

                <Row className="">

                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label >Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Full Name" />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label >Email Name</Form.Label>
                    <Form.Control type="email" placeholder="email" />
                  </Form.Group>
                </Row>
                <Row className="">

                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label >Company or individual</Form.Label>

                    <Form.Select onChange={handleChange}
                      aria-label="Default select example">
                      <option value="2">Individual</option>

                      <option value="1">Company </option>


                    </Form.Select>
                  </Form.Group>


                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label disabled={company === '2'} >Company Name</Form.Label>
                    <Form.Control disabled={company === '2'} type="text" placeholder="" />
                  </Form.Group>
                </Row>

                <Row className="">


                  <Form.Group className="mb-1 " controlId="formGridAddress1">
                    <Form.Label className="">Phone Number</Form.Label>
                    <span className="d-flex">
                      <Form.Select style={{ width: "130px" }} defaultValue="Choose...">
                        <option>code</option>
                        {countryList.map((country, key) => (
                          <option key={key} title="" value={country.mobileCode}>
                            {country.mobileCode}
                          </option>
                        ))}

                      </Form.Select>
                      <Form.Control style={{ marginLeft: "10px" }} type="text" placeholder="phone" />
                      <Form.Group className='mx-2' as={Col} controlId="formGridPassword">


                        <Form.Select defaultValue="Choose...">
                          <option>Select Country </option>
                          {countryList.map((country, key) => (
                            <option key={key} title="" value={country.name}>
                              {country.name}
                            </option>
                          ))}
                        </Form.Select>
                      </Form.Group>

                    </span>
                  </Form.Group>


                  <Form.Group as={Col} controlId="formGridEmail">

                    {company === '2' ? (
                      <>
                        <Form.Label >Interested In</Form.Label>
                        <Form.Select aria-label="Default select example">
                          <option>Please choose one option</option>
                          {individualOptions.map((option, index) => {
                            return <option key={index} >
                              {option}
                            </option>
                          })}



                        </Form.Select>
                      </>
                    ) : (
                      <>
                        <>
                          <Form.Label >Interested In</Form.Label>
                          <Form.Select aria-label="Default select example">
                            <option>Please choose one option</option>
                            {companyOptions.map((option, index) => {
                              return <option key={index} >
                                {option}
                              </option>
                            })}



                          </Form.Select>
                        </>

                      </>
                    )}

                  </Form.Group>


                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label >Budget</Form.Label>
                    <Form.Select defaultValue="Choose...">
                      <option>Choose Budget</option>
                      <option>$0-$100</option>
                      <option>$101-$1000</option>
                      <option>$1001-$10000</option>
                      <option>$10001-$20000</option>
                      <option>$20001-$50000</option>
                      <option>$50001- onWord</option>



                    </Form.Select>
                  </Form.Group>
                </Row>


                <Form.Group className="mt-3" as={Col} controlId="formGridEmail">
                  <label>How Did You hear About Us?</label>
                  <Form.Select aria-label="Default select example">

                    <option value="1">Search Engine</option>
                    <option value="2">LinkedIn</option>

                    <option value="3">Facebook</option>
                    <option value="4">Twitter</option>
                    <option value="5">Blog</option>
                    <option value="6">Email</option>
                    <option value="7">Referral</option>
                    <option value="8">Other</option>





                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGridAddress2">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={2} placeholder=" Enter your Message here..." />
                </Form.Group>

                <a href="/career" className="mt-1 my-5 thm-btn cta-two__btn rounded-5 w-25 text-center">
                  <span>Send Message </span>
                </a>

              </Form>
            </div>
          </div>


        </div>



        {/* <section className="section-padding--bottom section-padding--top">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">


                <h3 className="blog-card-one__title blog-details__title text-center">Security Training</h3>
                <div className="blog-details__content">
                  <p className='text-dark mt-4'>At RightTime, we believe very strongly on training so that common mistakes which can open doors for
                    vulnerabilities for the organizations can be eliminated. The purpose of providing good training is
                    also to make sure our customers follow the best industry practices while performing any IT task.
                    We provide training/ seminars to IT professionals and employees with access to sensitive information
                    to better educate them about the risks of information security threats and how to prevent themselves
                    from falling prey to ruses posed by competitors or malicious intruders. These training and or seminars
                    are dedicated to preventing human error from undermining an otherwise robust information security
                    infrastructure.<br /><br />

                    Our training courses are associated with the present as well as the future need for the professional
                    working in any IT-driven Organization or organization trying to achieve international recognition/
                    certiﬁcation on Information System Governance, Compliance, Risk management, Security, Quality, Process
                    or Environment, etc. Not only you earn knowledge, but you also head for a globally recognized qualiﬁcation.
                    Our services in these areas are-<br /><br />

                    •IT Security Corporate Programs like preparatory training of ITIL, CEH, CHFI, ECSA, LPT,
                    Cyber Security & Cyber Forensic and Software Testing, etc.<br />

                    •Skill Development in the area of Project Management and Data Center Operation e.g. ITIL, PRINCE2, and PMP<br />

                    •Preparatory Training on CRISC, CGEIT, CISA, CISSP, CISM<br />
                    •Training on IS Audits & IT Security.<br />

                    •Training on Internal Audits which covers a wide range of activities like finance, systems,
                    HR, Stock, processes, purchase, and marketing activities with a special emphasis on improving
                    the skills of internal auditors, collecting evidence, sampling, interview, and presentation techniques.<br />


                    •Technical Documentation Training (making IT Policy Workbook containing IT Security Policy,
                    Standard Operation Procedures (SOP), BCP & DRP, etc.)<br />
                  </p>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                </div>


              </div>
              
            </div>
          </div>
        </section>*/}<br /><br /><br />
      </div>
    </div>
  )
}

export default TrainingBody
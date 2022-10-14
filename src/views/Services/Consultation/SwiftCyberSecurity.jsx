import React, { useState } from 'react'
import ConsultationNav from './ConsultationNav'
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function SwiftCyberSecurity() {
  const [tabIndex, setTabIndex] = useState(1);

  return (
    <div>
      <div className="page-header">
        <div className="page-header__bg"
          style={{ backgroundImage: `url('https://www.atlantafed.org/-/media/images/gallery/cybersecurity/040-swift-logo/hero.jpg')` }}></div>
        <div className="container">
          <ul className="thm-breadcrumb list-unstyled">
            <li><a href="{{ url('/') }}">Home</a></li>a
            <li><a href="{{ url('/services') }}">Services</a></li>
            <li><a href="{{ url('/services/consultation') }}">Consultation</a></li>
            <li>Swift Cyber Security Consulting</li>
          </ul>
          <h2 className="page-header__title">Swift Cyber Security Consulting</h2>
          <h2 className="page-header__title"></h2>
        </div>
      </div>
      <div className='d-flex justify-content-between  text-center bg-info'>
          <div style ={{marginLeft:"150px",color:"white"}} className=''>
            <a href='/jh'>FAQ</a>
          </div>
          <div className=''>
            <a href='/jh'>FAQ</a>
          </div>
          <div style = {{marginRight:"150px"}} className=''>
            <a href='/jh'>FAQ</a>
          </div>
        </div>

      <section className="section-padding--bottom pt-5 text-center">
        <div className="container">
          <div className="section-title">
            <p className="">Web application security testing is performed to identify the vulnerabilities in a web application. With the increasing adaptation of web technologies across several areas, web applications have become a very viable attack surface if left with an untailored security outlook. Hence, assessments like web application security help the developers remediate vulnerabilities that are found during the process thereby and enhance the overall security of the web application.</p>
            <img className=""  src = "/assets/images/resources/1.jpeg" alt=""/>
            <p>Web application security testing as per the OWASP Top 10 list, helps to identify many unattended issues related to programming, file access and configuration etc which may turn out to be vulnerabilities, causing a potential impact on the organization.

Regular assessments as such help safeguard the application from any unauthorized access which can cause an impact on the organization both in reputation and resources.</p>

          </div>
        </div>
      </section>

                <section className="section-padding--bottom text-center">
                    <div className="container">
                        <div className="section-title text-center">
                            <p className="section-title__text">Company Benefits</p>
                            <h2 className="section-title__title">We Provide Best Information Security <br /> Service and Solution For 13 Years</h2>

                        </div>
                        <div className="row gutter box text-center col-xs-6">
                            <div className="col-lg-3 col-md-6 col-sm-6 rounded">
                                <div id="card-container">
                                    <div className="text-center rounded" id="card3">
                                        <div className="front face text-center p-5">
                                            <img src="assets/images/resources/1.jpg" width="50%" />
                                            <h5 className='pt-3'>services</h5>
                                        </div>
                                        <div className="back face">
                                            <h1>Our Service</h1>
                                            <p className="artist">We Provide Best Information Security</p>
                                            <p className="date">2015</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6">
                                <div id="card-container">
                                    <div id="card3">
                                        <div className="front face text-center p-5">
                                            <img src="assets/images/resources/1.jpg" width="50%" />
                                            <h5 className='pt-3'>services</h5>
                                        </div>
                                        <div className="back face">
                                            <h1>Our Service</h1>
                                            <p className="artist">We Provide Best Information Security</p>
                                            <p className="date">2015</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6">
                                <div id="card-container">
                                    <div id="card3">
                                        <div className="front face text-center p-5">
                                            <img src="assets/images/resources/1.jpg" width="50%" />
                                            <h5 className='pt-3'>services</h5>
                                        </div>
                                        <div className="back face">
                                            <h1>Our Service</h1>
                                            <p className="artist">We Provide Best Information Security</p>
                                            <p className="date">2015</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6">
                                <div id="card-container">
                                    <div id="card3">
                                        <div className="front face text-center p-5">
                                            <img src="assets/images/resources/1.jpg" width="50%" />
                                            <h5 className='pt-3'>services</h5>
                                        </div>
                                        <div className="back face">
                                            <h1>Our Service</h1>
                                            <p className="artist">We Provide Best Information Security</p>
                                            <p className="date">2015</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row gutter box text-center col-xs-6">
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div id="card-container">
                                    <div className="text-center" id="card3">
                                        <div className="front face text-center p-5">
                                            <img src="assets/images/resources/1.jpg" width="50%" />
                                            <h5 className='pt-3'>services</h5>
                                        </div>
                                        <div className="back face">
                                            <h1>Our Service</h1>
                                            <p className="artist">We Provide Best Information Security</p>
                                            <p className="date">2015</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6">
                                <div id="card-container">
                                    <div id="card3">
                                        <div className="front face text-center p-5">
                                            <img src="assets/images/resources/1.jpg" width="50%" />
                                            <h5 className='pt-3'>services</h5>
                                        </div>
                                        <div className="back face">
                                            <h1>Our Service</h1>
                                            <p className="artist">We Provide Best Information Security</p>
                                            <p className="date">2015</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6">
                                <div id="card-container">
                                    <div id="card3">
                                        <div className="front face text-center p-5">
                                            <img src="assets/images/resources/1.jpg" width="50%" />
                                            <h5 className='pt-3'>services</h5>
                                        </div>
                                        <div className="back face">
                                            <h1>Our Service</h1>
                                            <p className="artist">We Provide Best Information Security</p>
                                            <p className="date">2015</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6">
                                <div id="card-container">
                                    <div id="card3">
                                        <div className="front face text-center p-5">
                                            <img src="assets/images/resources/1.jpg" width="50%" />
                                            <h5 className='pt-3'>services</h5>
                                        </div>
                                        <div className="back face">
                                            <h1>Our Service</h1>
                                            <p className="artist">We Provide Best Information Security</p>
                                            <p className="date">2015</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row gutter box text-center col-xs-6">
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div id="card-container">
                                    <div className="text-center" id="card3">
                                        <div className="front face text-center p-5">
                                            <img src="assets/images/resources/1.jpg" width="50%" />
                                            <h5 className='pt-3'>services</h5>
                                        </div>
                                        <div className="back face">
                                            <h1>Our Service</h1>
                                            <p className="artist">We Provide Best Information Security</p>
                                            <p className="date">2015</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6">
                                <div id="card-container">
                                    <div id="card3">
                                        <div className="front face text-center p-5">
                                            <img src="assets/images/resources/1.jpg" width="50%" />
                                            <h5 className='pt-3'>services</h5>
                                        </div>
                                        <div className="back face">
                                            <h1>Our Service</h1>
                                            <p className="artist">We Provide Best Information Security</p>
                                            <p className="date">2015</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6">
                                <div id="card-container">
                                    <div id="card3">
                                        <div className="front face text-center p-5">
                                            <img src="assets/images/resources/1.jpg" width="50%" />
                                            <h5 className='pt-3'>services</h5>
                                        </div>
                                        <div className="back face">
                                            <h1>Our Service</h1>
                                            <p className="artist">We Provide Best Information Security</p>
                                            <p className="date">2015</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6">
                                <div id="card-container">
                                    <div id="card3">
                                        <div className="front face text-center p-5">
                                            <img src="assets/images/resources/1.jpg" width="50%" />
                                            <h5 className='pt-3'>services</h5>
                                        </div>
                                        <div className="back face">
                                            <h1>Our Service</h1>
                                            <p className="artist">We Provide Best Information Security</p>
                                            <p className="date">2015</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-padding--bottom text-center">
                    <div className="container">
                        <div className="section-title text-center">
                             <h2 className="section-title__title">Frequently Asked Questions</h2>
                             <div className="row mt-5">
                              <div className =" col-md-6 ">
                              <Accordion className="shadaow">
                                <Accordion.Item eventKey="1">
                                  <Accordion.Header>What Is The Standard Followed For Web Application Testing ?</Accordion.Header>
                                  <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                  </Accordion.Body>
                                </Accordion.Item>
                              </Accordion>

                               </div>

                               <div className =" col-md-6 ">
                               <Accordion >
                                <Accordion.Item eventKey="1">
                                <Accordion.Header>What Is The Standard Followed For Web Application Testing ?</Accordion.Header>
                                  <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                  </Accordion.Body>
                                </Accordion.Item>
                              </Accordion>


                               </div>
                               
                             </div>
                             <div className="row mt-2">
                              <div className =" col-md-6 ">
                              <Accordion >
                                <Accordion.Item eventKey="1">
                                <Accordion.Header>What Is The Standard Followed For Web Application Testing ?</Accordion.Header>
                                  <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                  </Accordion.Body>
                                </Accordion.Item>
                              </Accordion>

                               </div>

                               <div className =" col-md-6 ">
                               <Accordion >
                                <Accordion.Item eventKey="1">
                                <Accordion.Header>What Is The Standard Followed For Web Application Testing ?</Accordion.Header>
                                  <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                  </Accordion.Body>
                                </Accordion.Item>
                              </Accordion>


                               </div>
                               
                             </div>
                             <div className="row mt-2">
                              <div className =" col-md-6 ">
                              <Accordion >
                                <Accordion.Item eventKey="1">
                                <Accordion.Header>What Is The Standard Followed For Web Application Testing ?</Accordion.Header>
                                  <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                  </Accordion.Body>
                                </Accordion.Item>
                              </Accordion>

                               </div>

                               <div className =" col-md-6 ">
                               <Accordion >
                                <Accordion.Item eventKey="1">
                                <Accordion.Header>What Is The Standard Followed For Web Application Testing ?</Accordion.Header>
                                  <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                  </Accordion.Body>
                                </Accordion.Item>
                              </Accordion>


                               </div>
                               
                             </div>

                        </div>
                    </div>
                </section>
                <section className="section-padding--bottom text-center">
        <div className="container">
          <div className="section-title text-center">
            <h2 className="section-title__title">Related Updates</h2>
            <div className="col-md-12 text-center mt-5">
              <button type="button" onClick={() => setTabIndex(1)} className="btn btn-success m-3">Blogs</button>
              <button type="button" onClick={() => setTabIndex(2)} className="btn btn-dark m-3">Case Studies</button>
              <button type="button" onClick={() => setTabIndex(3)} className="btn btn-warning m-3">Downloads</button>

            </div>
            <div className="mt-2">
            {
          tabIndex === 1 && (
            <div className="row mt-5">
               <div className ="col-md-4 text-center d-flex">
               <Card>
               <img className="" src="/assets/images/resources/1.jpeg" alt="" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
               </div>
               <div className ="col-md-4 text-center d-flex">
               <Card>
               <img className="" src="/assets/images/resources/1.jpeg" alt="" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
               </div>
               <div className ="col-md-4 text-center d-flex">
               <Card>
               <img className="" src="/assets/images/resources/1.jpeg" alt="" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
               </div>

            </div>
           
            // <h3>Frequently Asked Questions</h3>
            // <p>Regular assessments as such help safeguard the application from any unauthorized access which can cause an impact on the organization both in reputation and resources</p>
           
          )
        }
        {
          tabIndex === 2 && (
            <div>
              <h3>2nd facility</h3>
            </div>
          )
        }
         {
          tabIndex === 3 && (
            <div>
              <h3>3nd facility</h3>
            </div>
          )
        }
            </div>
            
          </div>
        </div>
      </section>

     

      <section className="section-padding--bottom section-padding--top">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">


              <h3 style={{color:"orange"}} className="blog-card-one__title blog-details__title">SWIFT Cyber Security Consulting</h3>
              <div className="blog-details__content">
                <p>
                  The SWIFT Cyber Security consulting will help financial institutions improve their cyber security posture.
                  All SWIFT members must submit an annual self-attestation of compliance with the controls outlined in the framework.
                  SWIFT conducts random inspections on its members to ensure that they have appropriate cyber security controls in place and reports any
                  non-compliant organisations to industry regulators.
                </p>
              </div>


            </div>
            <div className="col-lg-4">
              <div className="sidebar">
                <div className="sidebar__item sidebar__item--category">
                  <ConsultationNav />


                </div>
              </div>
            </div>
          </div>
        </div>
      </section><br /><br /><br />
    </div>
  )
}

export default SwiftCyberSecurity

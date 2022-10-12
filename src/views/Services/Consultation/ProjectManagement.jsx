import React, { useState } from 'react'
import ConsultationNav from './ConsultationNav'
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function ProjectManagement() {
  const [tabIndex, setTabIndex] = useState(1);

  return (
    <div>
      <div class="page-header">
        <div class="page-header__bg"
          style={{ backgroundImage: `url('https://media.istockphoto.com/photos/project-manager-working-on-gantt-chart-to-update-the-schedule-tasks-picture-id1317443847?b=1&k=20&m=1317443847&s=170667a&w=0&h=iQefcFXY1mvmUuiX1956GHkfwHZ-jmCup2WyzRsNDs4=')` }}></div>
        <div class="container">
        <ul class="thm-breadcrumb list-unstyled">
                <li><a href="{{ url('/') }}">Home</a></li>
                <li><a href="{{ url('/services') }}">Services</a></li>
                <li><a href="{{ url('/services/consultation') }}">Consultation</a></li>
                <li>Project Management</li>
            </ul>
            <h2 class="page-header__title">Project Management</h2>
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

      <section class="section-padding--bottom pt-5 text-center">
        <div class="container">
          <div class="section-title">
            <p class="">Web application security testing is performed to identify the vulnerabilities in a web application. With the increasing adaptation of web technologies across several areas, web applications have become a very viable attack surface if left with an untailored security outlook. Hence, assessments like web application security help the developers remediate vulnerabilities that are found during the process thereby and enhance the overall security of the web application.</p>
            <img className=""  src = "/assets/images/resources/1.jpeg" alt=""/>
            <p>Web application security testing as per the OWASP Top 10 list, helps to identify many unattended issues related to programming, file access and configuration etc which may turn out to be vulnerabilities, causing a potential impact on the organization.

Regular assessments as such help safeguard the application from any unauthorized access which can cause an impact on the organization both in reputation and resources.</p>

          </div>
        </div>
      </section>

                <section class="section-padding--bottom text-center">
                    <div class="container">
                        <div class="section-title text-center">
                            <p class="section-title__text">Company Benefits</p>
                            <h2 class="section-title__title">We Provide Best Information Security <br /> Service and Solution For 13 Years</h2>

                        </div>
                        <div class="row gutter box text-center col-xs-6">
                            <div class="col-lg-3 col-md-6 col-sm-6 rounded">
                                <div id="card-container">
                                    <div className="text-center rounded" id="card3">
                                        <div class="front face text-center p-5">
                                            <img src="assets/images/resources/1.jpg" width="50%" />
                                            <h5 className='pt-3'>services</h5>
                                        </div>
                                        <div class="back face">
                                            <h1>Our Service</h1>
                                            <p class="artist">We Provide Best Information Security</p>
                                            <p class="date">2015</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-6 col-xs-6">
                                <div id="card-container">
                                    <div id="card3">
                                        <div class="front face text-center p-5">
                                            <img src="assets/images/resources/1.jpg" width="50%" />
                                            <h5 className='pt-3'>services</h5>
                                        </div>
                                        <div class="back face">
                                            <h1>Our Service</h1>
                                            <p class="artist">We Provide Best Information Security</p>
                                            <p class="date">2015</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-6 col-xs-6">
                                <div id="card-container">
                                    <div id="card3">
                                        <div class="front face text-center p-5">
                                            <img src="assets/images/resources/1.jpg" width="50%" />
                                            <h5 className='pt-3'>services</h5>
                                        </div>
                                        <div class="back face">
                                            <h1>Our Service</h1>
                                            <p class="artist">We Provide Best Information Security</p>
                                            <p class="date">2015</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-6 col-xs-6">
                                <div id="card-container">
                                    <div id="card3">
                                        <div class="front face text-center p-5">
                                            <img src="assets/images/resources/1.jpg" width="50%" />
                                            <h5 className='pt-3'>services</h5>
                                        </div>
                                        <div class="back face">
                                            <h1>Our Service</h1>
                                            <p class="artist">We Provide Best Information Security</p>
                                            <p class="date">2015</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row gutter box text-center col-xs-6">
                            <div class="col-lg-3 col-md-6 col-sm-6">
                                <div id="card-container">
                                    <div className="text-center" id="card3">
                                        <div class="front face text-center p-5">
                                            <img src="assets/images/resources/1.jpg" width="50%" />
                                            <h5 className='pt-3'>services</h5>
                                        </div>
                                        <div class="back face">
                                            <h1>Our Service</h1>
                                            <p class="artist">We Provide Best Information Security</p>
                                            <p class="date">2015</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-6 col-xs-6">
                                <div id="card-container">
                                    <div id="card3">
                                        <div class="front face text-center p-5">
                                            <img src="assets/images/resources/1.jpg" width="50%" />
                                            <h5 className='pt-3'>services</h5>
                                        </div>
                                        <div class="back face">
                                            <h1>Our Service</h1>
                                            <p class="artist">We Provide Best Information Security</p>
                                            <p class="date">2015</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-6 col-xs-6">
                                <div id="card-container">
                                    <div id="card3">
                                        <div class="front face text-center p-5">
                                            <img src="assets/images/resources/1.jpg" width="50%" />
                                            <h5 className='pt-3'>services</h5>
                                        </div>
                                        <div class="back face">
                                            <h1>Our Service</h1>
                                            <p class="artist">We Provide Best Information Security</p>
                                            <p class="date">2015</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-6 col-xs-6">
                                <div id="card-container">
                                    <div id="card3">
                                        <div class="front face text-center p-5">
                                            <img src="assets/images/resources/1.jpg" width="50%" />
                                            <h5 className='pt-3'>services</h5>
                                        </div>
                                        <div class="back face">
                                            <h1>Our Service</h1>
                                            <p class="artist">We Provide Best Information Security</p>
                                            <p class="date">2015</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row gutter box text-center col-xs-6">
                            <div class="col-lg-3 col-md-6 col-sm-6">
                                <div id="card-container">
                                    <div className="text-center" id="card3">
                                        <div class="front face text-center p-5">
                                            <img src="assets/images/resources/1.jpg" width="50%" />
                                            <h5 className='pt-3'>services</h5>
                                        </div>
                                        <div class="back face">
                                            <h1>Our Service</h1>
                                            <p class="artist">We Provide Best Information Security</p>
                                            <p class="date">2015</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-6 col-xs-6">
                                <div id="card-container">
                                    <div id="card3">
                                        <div class="front face text-center p-5">
                                            <img src="assets/images/resources/1.jpg" width="50%" />
                                            <h5 className='pt-3'>services</h5>
                                        </div>
                                        <div class="back face">
                                            <h1>Our Service</h1>
                                            <p class="artist">We Provide Best Information Security</p>
                                            <p class="date">2015</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-6 col-xs-6">
                                <div id="card-container">
                                    <div id="card3">
                                        <div class="front face text-center p-5">
                                            <img src="assets/images/resources/1.jpg" width="50%" />
                                            <h5 className='pt-3'>services</h5>
                                        </div>
                                        <div class="back face">
                                            <h1>Our Service</h1>
                                            <p class="artist">We Provide Best Information Security</p>
                                            <p class="date">2015</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-6 col-xs-6">
                                <div id="card-container">
                                    <div id="card3">
                                        <div class="front face text-center p-5">
                                            <img src="assets/images/resources/1.jpg" width="50%" />
                                            <h5 className='pt-3'>services</h5>
                                        </div>
                                        <div class="back face">
                                            <h1>Our Service</h1>
                                            <p class="artist">We Provide Best Information Security</p>
                                            <p class="date">2015</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="section-padding--bottom text-center">
                    <div class="container">
                        <div class="section-title text-center">
                             <h2 class="section-title__title">Frequently Asked Questions</h2>
                             <div class="row mt-5">
                              <div class =" col-md-6 ">
                              <Accordion class="shadaow">
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

                               <div class =" col-md-6 ">
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
                             <div class="row mt-2">
                              <div class =" col-md-6 ">
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

                               <div class =" col-md-6 ">
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
                             <div class="row mt-2">
                              <div class =" col-md-6 ">
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

                               <div class =" col-md-6 ">
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
                <section class="section-padding--bottom text-center">
        <div class="container">
          <div class="section-title text-center">
            <h2 class="section-title__title">Related Updates</h2>
            <div class="col-md-12 text-center mt-5">
              <button type="button" onClick={() => setTabIndex(1)} class="btn btn-success m-3">Blogs</button>
              <button type="button" onClick={() => setTabIndex(2)} class="btn btn-dark m-3">Case Studies</button>
              <button type="button" onClick={() => setTabIndex(3)} class="btn btn-warning m-3">Downloads</button>

            </div>
            <div class="mt-2">
            {
          tabIndex === 1 && (
            <div class="row mt-5">
               <div class ="col-md-4 text-center d-flex">
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
               <div class ="col-md-4 text-center d-flex">
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
               <div class ="col-md-4 text-center d-flex">
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

     

      <section class="section-padding--bottom section-padding--top">
        <div class="container">
          <div class="row">
          <div class="col-lg-8">


<h3 style={{color:"orange"}} class="blog-card-one__title blog-details__title">Project Management</h3>
<div class="blog-details__content">
    <p>When engaged to manage a project we assign a project team that consists of a tenured, experienced Project Manager, an Auditor, and an Account Manager. Our project team employs our proven project management methodology, which includes the daily audit measured results.</p>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>


</div>


            </div>
            <div class="col-lg-4">
              <div class="sidebar">
                <div class="sidebar__item sidebar__item--category">
                  <ConsultationNav />


                </div>
              </div>
            </div>
          </div>
        </div>
      </section><br />
    </div>
  )
}

export default ProjectManagement

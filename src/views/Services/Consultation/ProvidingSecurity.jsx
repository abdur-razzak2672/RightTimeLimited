import React, { useState } from 'react'
import ConsultationNav from './ConsultationNav'
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function ProvidingSecurity() {
  const [tabIndex, setTabIndex] = useState(1);

  return (
    <div>
      <div class="page-header">
        <div class="page-header__bg"
          style={{ backgroundImage: `url('/assets/images/background/cs.jpg')` }}></div>
        <div class="container">
        <ul class="thm-breadcrumb list-unstyled">
                <li><a href="{{ url('/') }}">Home</a></li>
                <li><a href="{{ url('/services') }}">Services</a></li>
                <li><a href="{{ url('/services/consultation') }}">Consultation</a></li>
                <li>Providing Security</li>
            </ul>
            <h2 class="page-header__title">Providing Security</h2>
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


                    <h3 class="blog-card-one__title blog-details__title">Providing Security</h3>
                    <div class="blog-details__content">
                        <p>
                            We provide various security such as - <br/>
                           <b> Network security                           </b>  <br/>
Network security is used to prevent unauthorized or malicious users from getting inside your network. This ensures that usability, reliability, and integrity are uncompromised. This type of security is necessary to prevent a hacker from accessing data inside the network. It also prevents them from negatively affecting your users’ ability to access or use the network.

Network security has become increasingly challenging as businesses increase the number of endpoints and migrate services to public cloud. <br/>
<br/>
                           <b> Internet security<br/>                           </b> 
Internet security involves the protection of information that is sent and received in browsers, as well as network security involving web-based applications. These protections are designed to monitor incoming internet traffic for malware as well as unwanted traffic. This protection may come in the form of firewalls, antimalware, and antispyware.
<br/><br/>
                           <b> Endpoint security<br/>                           </b> 
Endpoint security provides protection at the device level. Devices that may be secured by endpoint security include cell phones, tablets, laptops, and desktop computers. Endpoint security will prevent your devices from accessing malicious networks that may be a threat to your organization. Advance malware protection and device management software are examples of endpoint security.
<br/><br/>
                           <b> Cloud security<br/>                           </b> 
Applications, data, and identities are moving to the cloud, meaning users are connecting directly to the Internet and are not protected by the traditional security stack. Cloud security can help secure the usage of software-as-a-service (SaaS) applications and the public cloud.  A cloud-access security broker (CASB), secure Internet gateway (SIG), and cloud-based unified threat management (UTM) can be used for cloud security.
<br/><br/>
                           <b> Application security<br/>                           </b> 
With application security, applications are specifically coded at the time of their creation to be as secure as possible, to help ensure they are not vulnerable to attacks. This added layer of security involves evaluating the code of an app and identifying the vulnerabilities that may exist within the software.
                        </p>
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

export default ProvidingSecurity

import React from 'react'
import CertificationNav from './CertificationNav'
import Accordion from 'react-bootstrap/Accordion';

function PciDssPayment() {
  return (
    <div>
      <div>
      <div className="page-header">
    <div className="page-header__bg"
         style={{ backgroundImage: `url('https://www.groundlabs.com/wp-content/uploads/2019/03/PCI-DSS-Compliance.png')` }}></div>
    <div className="container">
    <ul className="thm-breadcrumb list-unstyled">
                <li><a href="{{ url('/') }}">Home</a></li>
                <li><a href="{{ url('/services') }}">Services</a></li>
                <li><a href="{{ url('/services/standard-implementation-certification') }}">Standard Implementation & Certification</a></li>
                <li>Payment Card Industry Data Security Standards</li>
            </ul>
            <h2 className="page-header__title">Payment Card Industry Data Security Standards</h2>
    </div> 
</div> 
<div className=' text-center service-topbar'>
       <div className="container d-flex justify-content-between">
       <div style={{  color: "white" }} className=''>
          <a className='text-light'href='#header'>FAQ</a>
        </div>
        <div className=''>
          <a className='text-light' href='#benefit'>Benefit</a>
        </div>
        <div className=''>
          <a className='text-light' href='#question'>Ask Question</a>
        </div>
       </div>
      </div>

      <section id="header" className="section-padding--bottom pt-5 ">
        <div className="container">
          <div className="section-title">
            <p className="">Web application security testing is performed to identify the vulnerabilities in a web application. With the increasing adaptation of web technologies across several areas, web applications have become a very viable attack surface if left with an untailored security outlook. Hence, assessments like web application security help the developers remediate vulnerabilities that are found during the process thereby and enhance the overall security of the web application.</p>
            <div className="row">
            <img   className="" src="/assets/images/services/pcidss.png" alt="" />

            </div>              
            <p>Web application security testing as per the OWASP Top 10 list, helps to identify many unattended issues related to programming, file access and configuration etc which may turn out to be vulnerabilities, causing a potential impact on the organization.

              Regular assessments as such help safeguard the application from any unauthorized access which can cause an impact on the organization both in reputation and resources.</p>

          </div>
        </div>
      </section>

      <section id="benefit" className="section-padding--bottom text-center">
        <div className="container">
          <div className="section-title text-center">
            <p className="section-title__text">Company Benefits</p>
            <h2 className="section-title__title">We Provide Best Information Security <br /> Service and Solution For 13 Years</h2>

          </div>
          <div className="row gutter box text-center col-xs-6">
            <div className="col-lg-3 col-md-4 col-sm-6 rounded ">
              <div id="card-container">
                <div className="text-center rounded" id="card3">
                  <div className="front face text-center pt-3">
                    <img src="assets/images/services/book.jpg" width="50%" />
                    <h5 className='pt-3 text-dark'>services</h5>
                  </div>
                  <div className="back face">
                  <p className="artist mt-4">Regular assessments as such help safeguard the application from any unauthorized</p>

                  </div>
                </div>
              </div>

            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 rounded ">
              <div id="card-container">
                <div className="text-center rounded" id="card3">
                  <div className="front face text-center pt-3">
                    <img src="assets/images/services/book.jpg" width="50%" />
                    <h5 className='pt-3 text-dark'>services</h5>
                  </div>
                  <div className="back face">
                  <p className="artist mt-4">Regular assessments as such help safeguard the application from any unauthorized</p>

                  </div>
                </div>
              </div>

            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 rounded ">
              <div id="card-container">
                <div className="text-center rounded" id="card3">
                  <div className="front face text-center pt-3">
                    <img src="assets/images/services/book.jpg" width="50%" />
                    <h5 className='pt-3 text-dark'>services</h5>
                  </div>
                  <div className="back face">
                  <p className="artist mt-4">Regular assessments as such help safeguard the application from any unauthorized</p>

                  </div>
                </div>
              </div>

            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 rounded ">
              <div id="card-container">
                <div className="text-center rounded" id="card3">
                  <div className="front face text-center pt-3">
                    <img src="assets/images/services/book.jpg" width="50%" />
                    <h5 className='pt-3 text-dark'>services</h5>
                  </div>
                  <div className="back face">
                  <p className="artist mt-4">Regular assessments as such help safeguard the application from any unauthorized</p>

                  </div>
                </div>
              </div>

            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 rounded ">
              <div id="card-container">
                <div className="text-center rounded" id="card3">
                  <div className="front face text-center pt-3">
                    <img src="assets/images/services/book.jpg" width="50%" />
                    <h5 className='pt-3 text-dark'>services</h5>
                  </div>
                  <div className="back face">
                  <p className="artist mt-4">Regular assessments as such help safeguard the application from any unauthorized</p>

                  </div>
                </div>
              </div>

            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 rounded ">
              <div id="card-container">
                <div className="text-center rounded" id="card3">
                  <div className="front face text-center pt-3">
                    <img src="assets/images/services/book.jpg" width="50%" />
                    <h5 className='pt-3 text-dark'>services</h5>
                  </div>
                  <div className="back face">
                  <p className="artist mt-4">Regular assessments as such help safeguard the application from any unauthorized</p>

                  </div>
                </div>
              </div>

            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 rounded ">
              <div id="card-container">
                <div className="text-center rounded" id="card3">
                  <div className="front face text-center pt-3">
                    <img src="assets/images/services/book.jpg" width="50%" />
                    <h5 className='pt-3 text-dark'>services</h5>
                  </div>
                  <div className="back face">
                  <p className="artist mt-4">Regular assessments as such help safeguard the application from any unauthorized</p>

                  </div>
                </div>
              </div>

            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 rounded ">
              <div id="card-container">
                <div className="text-center rounded" id="card3">
                  <div className="front face text-center pt-3">
                    <img src="assets/images/services/book.jpg" width="50%" />
                    <h5 className='pt-3 text-dark'>services</h5>
                  </div>
                  <div className="back face">
                  <p className="artist mt-4">Regular assessments as such help safeguard the application from any unauthorized</p>

                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className="row gutter box text-center col-xs-6">
          <div className="col-lg-3 col-md-4 col-sm-6 rounded ">
              <div id="card-container">
                <div className="text-center rounded" id="card3">
                  <div className="front face text-center pt-3">
                    <img src="assets/images/services/book.jpg" width="50%" />
                    <h5 className='pt-3 text-dark'>services</h5>
                  </div>
                  <div className="back face">
                  <p className="artist mt-4">Regular assessments as such help safeguard the application from any unauthorized</p>

                  </div>
                </div>
              </div>

            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 rounded ">
              <div id="card-container">
                <div className="text-center rounded" id="card3">
                  <div className="front face text-center pt-3">
                    <img src="assets/images/services/book.jpg" width="50%" />
                    <h5 className='pt-3 text-dark'>services</h5>
                  </div>
                  <div className="back face">
                  <p className="artist mt-4">Regular assessments as such help safeguard the application from any unauthorized</p>

                  </div>
                </div>
              </div>

            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 rounded ">
              <div id="card-container">
                <div className="text-center rounded" id="card3">
                  <div className="front face text-center pt-3">
                    <img src="assets/images/services/book.jpg" width="50%" />
                    <h5 className='pt-3 text-dark'>services</h5>
                  </div>
                  <div className="back face">
                  <p className="artist mt-4">Regular assessments as such help safeguard the application from any unauthorized</p>

                  </div>
                </div>
              </div>

            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 rounded ">
              <div id="card-container">
                <div className="text-center rounded" id="card3">
                  <div className="front face text-center pt-3">
                    <img src="assets/images/services/book.jpg" width="50%" />
                    <h5 className='pt-3 text-dark'>services</h5>
                  </div>
                  <div className="back face">
                  <p className="artist mt-4">Regular assessments as such help safeguard the application from any unauthorized</p>

                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      <section id="question" className="section-padding--bottom text-center">
        <div className="container">
          <div className="section-title text-center">
            <h2 className="section-title__title">Frequently Asked Questions</h2>
            <div className="expanedItem mt-5">
              <div className=" expaneditems1">
                <Accordion className="shadaow">
                  <Accordion.Item className="my-3" eventKey="1">
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
                <Accordion >
                  <Accordion.Item  className="my-3" eventKey="1">
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
                <Accordion >
                  <Accordion.Item  className="my-3" eventKey="1">
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

              <div   className="expaneditems1 ">
                <Accordion >
                  <Accordion.Item className="my-3" eventKey="1">
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
                <Accordion >
                  <Accordion.Item className="my-3" eventKey="1">
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
                <Accordion >
                  <Accordion.Item className="my-3" eventKey="1">
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
      </section><br />
    </div>
      
    </div>
  )
}

export default PciDssPayment

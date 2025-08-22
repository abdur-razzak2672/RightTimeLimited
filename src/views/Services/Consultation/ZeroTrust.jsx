import React, { useState } from 'react'
import SeviceCommon from '../SeviceCommon'
import { Row, Col } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';
function ZeroTrust() {
  const [tabIndex, setTabIndex] = useState(1);


  return (
    <div>
      <div className="page-header ">
        <div className="page-header__bg"
          style={{ backgroundImage: `url('/assets/images/background/con.png')` }}></div>
        <div className="container">
          <ul className="thm-breadcrumb list-unstyled">
            <li><a href="{{ url('/') }}">Home</a></li>
            <li><a href="{{ url('/services') }}">Services</a></li>
            <li>Zero Trust Architecture</li>
          </ul>
          <h2 className="page-header__title">Zero Trust Architecture</h2>
        </div>

      </div>


      <section id="header" className="section-padding--bottom pt-5 ">
        <div className="container">

          <Row>
            <Col md={6}>
              <h1 className='header mt-5'>
                Architect, design and manage Zero Trust transformation – all on one platform
              </h1>
              <p className='text-dark'>Make transformation manageable and structured. Target and deliver incremental value iteratively and frequently throughout your journey with our Zero Trust solution, while staying on track to deliver on your strategic business goals.

              </p>
              <p className='text-dark'>Built on Bizzdesign Horizzon, our solution follows a best-practice architecture-guided approach. So you can architect a framework that provides holistic protection, as well as a response to security events that’s both high-quality and fast.

              </p>
              <p className='text-dark'>Quickly assess business impacts of security risks and compliance using architecture model-based analytics, providing transparency and traceability for these insights. Create a repository of knowledge that helps manage the risk associated with the lack of enterprise security architecture skills.

              </p>

            </Col>

            <Col md={6}>
              <Carousel slide={false}>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src='/assets/images/services/Information Systems AUdit.png'
                    alt="First slide"
                  />

                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src='/assets/images/services/Information Security Graded Audit.png'
                    alt="Second slide"
                  />


                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src='/assets/images/services/Information Systems AUdit.png'
                    alt="Third slide"
                  />

                </Carousel.Item>
              </Carousel>
            </Col>

          </Row>



          <Row className='MT-5'>


            <Col md={6}>
              <Carousel slide={false}>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src='/assets/images/services/Information Systems AUdit.png'
                    alt="First slide"
                  />

                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src='/assets/images/services/Information Security Graded Audit.png'
                    alt="Second slide"
                  />


                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src='/assets/images/services/Information Systems AUdit.png'
                    alt="Third slide"
                  />

                </Carousel.Item>
              </Carousel>
            </Col>


            <Col md={6}>
              <h1 className='header mt-5'>
                Packaged, repeatable and consumable templates to streamline Zero Trust transformation            </h1>
              <p className='text-dark'>Everything you need to enable the outcome of a Zero Trust Architecture is here! Bizzdesign’s Zero Trust Architecture solution includes a process, a Zero Trust Architecture maturity reference model, and pre-populated Zero Trust design patterns to assist you in a Zero Trust security transformation.



              </p>
              <p className='text-dark'>Use our pre-packaged, repeatable, and pattern-based modeling templates for security-based capability design, security technology portfolio management, and enterprise solution design using security patterns.



              </p>


            </Col>

          </Row>



        </div>

        <div style={{ backgroundColor: "#eceef0" }} className='mt-5'>
          <section className="container py-5">
            <h1 className="text-dark">Benefits</h1>

            <div className="row mt-4">
              <div className="col-md-5 ">
                <div className=" servicesItem">
                  <a
                    className=" active focus"
                    onClick={() => setTabIndex(1)}
                    href="#javascript void(0)"
                  >
                    {" "}
                    Realize security value      →          </a>
                </div>
                <div className="servicesItem">
                  <a onClick={() => setTabIndex(2)} href="#javascript void(0)">
                    {" "}
                    Make great security technology decisions  →              </a>
                </div>
                <div className=" servicesItem">
                  <a onClick={() => setTabIndex(3)} href="#javascript void(0)">
                    {" "}
                    Protect, detect and response   →             </a>
                </div>
                <div className=" servicesItem">
                  <a onClick={() => setTabIndex(4)} href="#javascript void(0)">
                    {" "}
                    Improve business engagement    →            </a>
                </div>
              </div>

              <div className="col-md-7">
                <div>
                  {tabIndex === 1 && (

                    <div className='d-flex justify-content-center'>
                      <p className='text-center w-50 text-dark '>Make security engagement simple, consistent and repeatable. Truly shifting security left in the enterprise.

                      </p>
                    </div>
                  )}

                  {tabIndex === 2 && (
                    <div className='d-flex justify-content-center'>
                      <p className='text-center w-50 text-dark '>Identify simplification opportunities, facilitate reuse, manage security technology risks, and prioritize strategic security tools.
                      </p>
                    </div>



                  )}


                  {tabIndex === 3 && (
                    <div className='d-flex justify-content-center'>
                      <p className='text-dark text-center w-50'>Through excellence in architecture, execute the delivery of operational security technology that addresses the need of security stakeholders to move fast and make accurate decisions.

                      </p>
                    </div>
                  )}


                  {tabIndex === 4 && (
                    <div className='d-flex justify-content-center'>
                      <p className='text-dark text-center w-50'>Design security systems to meet business needs by providing consumable patterns and streamlined governance. Plan the transformation of business applications to zero trust architecture accurately and consistently, use our reporting to demonstrate the reduction in security risk as transformation takes place.

                      </p>
                    </div>
                  )}

                </div>
              </div>
            </div>
          </section>


        </div>
      </section>






      <br /><br /><br /> </div>
  )
}

export default ZeroTrust
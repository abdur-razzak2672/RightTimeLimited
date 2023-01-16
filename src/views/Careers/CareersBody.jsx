import React from 'react'
import './career.css'
import Accordion from 'react-bootstrap/Accordion'
import { Row,Col } from 'react-bootstrap'
function CareersBody() {
  return (
    <div>
      <div className="page-header">
        <div className="page-header__bg"
          style={{ backgroundImage: `url('https://www.krg.ca/en-CA/assets/Careers-new.jpg')` }}></div>
        <div className="container">
          <ul className="thm-breadcrumb list-unstyled">
            <li><a href="/">Home</a></li>
            <li>Careers</li>
          </ul>
          <h2 className="page-header__title">Careers</h2>
        </div>
      </div>
      <div className=" mt-5">
        </div>
        <section className="     m-5">
          <div className=" ">
          <div className="section-title text-center">
            <p className="section-title__text">Careers</p>
            <h2 className=" ">We’re a growing company.</h2>

            <p>Right Time Limited is a leading provider of SOC-as-a-Service (Cyber Security Operations Center – SOC) for the USA,Bangladesh, Australia, and the jarmany Cyber Security market. SafeAeon currently provides security SOC services to many Fortune 1000 companies in collaboration with WaveStrong Inc. and Marseon Inc., which are both US Silicon-Valley based Cyber Security companies.</p>

          </div>

          <Row>
            <Col md={4}>
            <img
            width="100%"
              className = "img-responsive"
              src= "/assets/images/career/job.png"
              alt=""
            />
            </Col>

            <Col md={8}  >
              <div style={{paddingTop:"80px"}} className='mt-5'>
                <Accordion defaultActiveKey={['1']} alwaysOpen>
              <Accordion.Item eventKey="0">
                <Accordion.Header><h6 >Marketing</h6></Accordion.Header>
                <Accordion.Body>
                  <a href='/marketing'>
                  <h6>Account Based Marketing Executive</h6>
                  <h6 className='text-info'>Madison, WIS, USA</h6>
                 </a>

                 <a className='mt-5' href='/marketing'>
                  <h6>Account Based Marketing Executive</h6>
                  <h6 className='text-info'>Madison, WIS, Bangladesh</h6>
                 </a>
                 <a className='mt-5' href='/marketing'>
                  <h6>Account Based Marketing Executive</h6>
                  <h6 className='text-info'>Madison, WIS, Jarmany</h6>
                 </a>
                 <a className='mt-5' href='/marketing'>
                  <h6>Account Based Marketing Executive</h6>
                  <h6 className='text-info'>Madison, WIS, Australia</h6>
                 </a>
                  
                </Accordion.Body>
              </Accordion.Item>
              
              <Accordion.Item eventKey="2">
                <Accordion.Header><h6 >Presales Engineering</h6></Accordion.Header>
                <Accordion.Body>
                  <a href='/marketing'>
                  <h6>Senior Presales Engineer</h6>
                  <h6 className='text-info'>Madison, WIS, USA</h6>
                 </a>

                 <a className='mt-5' href='/marketing'>
                  <h6>Senior Presales Engineer</h6>
                  <h6 className='text-info'>Madison, WIS, Bangladesh</h6>
                 </a>
                 <a className='mt-5' href='/marketing'>
                  <h6>Senior Presales Engineer</h6>
                  <h6 className='text-info'>Madison, WIS, Jarmany</h6>
                 </a>
                 <a className='mt-5' href='/marketing'>
                  <h6>Senior Presales Engineer</h6>
                  <h6 className='text-info'>Madison, WIS, Australia</h6>
                 </a>
                  
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header><h6 >R & D</h6></Accordion.Header>
                <Accordion.Body>
                  <a href='/marketing'>
                  <h6>Senior Threat Intelligence Analyst</h6>
                  <h6 className='text-info'>Madison, WIS, USA</h6>
                 </a>

                 <a className='mt-5' href='/marketing'>
                  <h6>Senior Threat Intelligence Analyst</h6>
                  <h6 className='text-info'>Madison, WIS, Bangladesh</h6>
                 </a>
                 <a className='mt-5' href='/marketing'>
                  <h6>Senior Threat Intelligence Analyst</h6>
                  <h6 className='text-info'>Madison, WIS, Jarmany</h6>
                 </a>
                 <a className='mt-5' href='/marketing'>
                  <h6>Senior Threat Intelligence Analyst</h6>
                  <h6 className='text-info'>Madison, WIS, Australia</h6>
                 </a>
                  
                </Accordion.Body>
              </Accordion.Item>
 
              <Accordion.Item eventKey="4">
                <Accordion.Header><h6 >Security Service</h6></Accordion.Header>
                <Accordion.Body>
                  <a href='/marketing'>
                  <h6>Senior SOC Analysts</h6>
                  <h6 className='text-info'>Madison, WIS, USA</h6>
                 </a>

                 <a className='mt-5' href='/marketing'>
                  <h6>Senior SOC Analysts</h6>
                  <h6 className='text-info'>Madison, WIS, Bangladesh</h6>
                 </a>
                 <a className='mt-5' href='/marketing'>
                  <h6>Senior SOC Analysts</h6>
                  <h6 className='text-info'>Madison, WIS, Jarmany</h6>
                 </a>
                 <a className='mt-5' href='/marketing'>
                  <h6>Senior SOC Analysts</h6>
                  <h6 className='text-info'>Madison, WIS, Australia</h6>
                 </a>
                  
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            
              </div>
            </Col>
            
           </Row>
    


          </div>
        </section>


      




      <br /><br /><br /> 

    </div>
  )
}

export default CareersBody

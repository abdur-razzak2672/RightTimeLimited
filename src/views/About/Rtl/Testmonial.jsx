import React from 'react'
import Allpage from '../../../components/all-page/Allpage'
import { Col, Row } from 'react-bootstrap'

function Testmonial() {
  return (
    <>
    <div className="page-header">
    <div
      className="page-header__bg"
      style={{ backgroundImage: `url('../images/resources/aboutbg1.png')` }}
    ></div>
    <div className="container">
      <ul className="thm-breadcrumb list-unstyled">
        <li>
          <a href="/">Home</a>
        </li>
        <li>TESTIMONIALS</li>
      </ul>
      <h2 className="page-header__title">Testimonials</h2>
    </div>


 
    </div>


    <section className='container mt-5'>
      <h2 className='header text-center'>What Our Clients Say</h2>
      <Row className='mt-5'>
        <Col md={8}>
          <h4 className='header'>“Right Time Limited” Testimonials</h4>
          <p className='text-dark'>"Our organization had a fantastic experience working with the IT Security firm to complete their 06 Skill Development Training Course. The course covered a comprehensive range of international certification frameworks, including ITIL, CEH, CISA, and Lead Auditor Certification Training for ISO 9001 LA, ISO 20000 LA & ISO 27001 LA by IRCA, among others. The course also included training in Vulnerability Assessment & Penetration Testing, Composite Information System Audit, and End-to-End Consultation and Certification for ISO 9001, ISO 27001, and ISO 20000.

The IT Security firm's knowledgeable and experienced team guided us through the training and certification process, and we were able to complete it in a timely fashion. Thanks to their practical, hands-on approach, we felt confident applying our newfound knowledge to real-world scenarios.

Overall, we highly recommend the IT Security firm for their comprehensive and effective training courses and certification frameworks. Their instructors are engaging, knowledgeable, and committed to helping their clients achieve success."
</p>
<Row>
  <Col style={{width:"120px"}} md={2}>
  <img src='/assets/images/about/test3.jpeg' alt='testimonial' width="100%" className='img-fluid rounded-5'/>


  </Col>
  <Col>
  <h4 className='header'>Afzal Hossain</h4>
<p className='text-dark'>DGM IT & MIS <br/>Agrani Bank Limited, Dhaka, Bangladesh</p>
  </Col>
</Row>
 
 
        </Col>

        <Col md={4}>
          <img src='/assets/images/about/test3.jpeg' alt='testimonial' width="100%" className='img-fluid rounded-3'/>
        </Col>
      </Row>
    </section>
   <br/><br/><br/> </>
    
  )
}

export default Testmonial
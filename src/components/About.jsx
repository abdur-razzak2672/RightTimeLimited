import React,{useState} from "react";
import { Button,Col,Form,Modal, Row } from 'react-bootstrap';

function About() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <section className="  section-padding--top about-five">
        <div className="container">
          <div className="row gutter-y-60">
            <div className="col-lg-5">
              <div className="about-five__images">
                <div className="about-five__images__shape"></div>
                <img
                  src="assets/images/resources/about_rt.png"
                  className="wow fadeInUp"
                  data-wow-duration="1500ms"
                  alt=""
                />

                <div
                  className="about-five__images__caption count-box wow fadeInUp"
                  data-wow-duration="1500ms"
                >
                  <span className="count-text" data-stop="13" data-speed="1300">
                    00
                  </span>
                  Years of
                  <br />
                  Experience
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="about-five__content">
                <div className="section-title ">
                  <p className="section-title__text">About Company</p>
                  <h2 className="header">
                    Leading Information Security Company
                  </h2>
                </div>
                <div>
                  <p>Right Time Limited (“RightTime”, short form) started its
                  journey in the year 2009. It’s purely an Information Security
                  Consultation, Assessment/Audit Service & Solutions Provider.
                  With all related International Standards and Association, we
                  are providing Information System Audit, Technical
                  Documentation, Project Management, Custom Skill Development,
                  ISO Consultation & Certification, SWIFT Consultation &
                  Auditing, PCI DSS Gap Assessment, Remediation Consultation,
                  Auditing & Certification. Conducting Security Assessment e.g.
                  VA & PT, Forensic (with the use of multiple world className
                  Automated & Manual tools). As the first empaneled Security
                  Assessor firm we are serving for more than 13 years.</p>
                </div>

                <div className="about-four__meta">
                  <div className="about-four__author">
                    
                      <div className="row">
                      <div className="col-md-4">
                      <img width="100%" src="assets/images/team/mam.jpg" alt="" />
                      <a
                  style={{width:"205px"}}
                  onClick={handleShow} href='javascript:void(0)'
                    className="thm-btn about-four__btn mt-2"
                  >
                    <span className="text-light">Learn More</span>
                  </a>
                      </div>

                      <div style={{paddingRight:"12px"}} className="col-md-8 ">
                      <p>
                        {" "}      
                        I am proud to serve as the Chairman of “Right Time Limited” (RightTime, short firm)- cyber security consulting and assessment/audit firm. Our team of experts is dedicated to providing you with the highest quality of service and customized solutions to secure your organization's data and assets from cyber threats. Wish, you will choose “Right Time Limited” as your trusted partner in Cyber Security Effort.                      </p>
                      <h3 className="about-four__author__title mt-4">
                       Ms. Sahaly Yasmin Bhuiyan
                      </h3>
                      <div className="about-four__author__designation">
                       Chairman
                      </div>
                      </div>
                    </div>

                   </div>
                   
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <Modal   size="lg" show={show} onHide={handleClose}>
        <Modal.Body  className=" rounded-3">
          <h5 className='teamTitle'>Sahaly Yasmin Bhuiyan</h5>
           <i style={{ fontSize:"40px"}} className="fab fa-linkedin "></i>

           <Row>
            <Col md={8}>
              <p className='teamDetails'>
              It gives me great pleasure to address you as the Chairman of our esteemed cyber security consulting and assessment/audit firm, “Right Time Limited”. I am proud to say that we have been at the forefront of the industry, providing innovative solutions to meet the ever-changing cyber security landscape.       Our team of experts is committed to providing you with the highest quality of service and ensuring that your organization's data and assets remain secure from cyber threats.        </p>
 
            </Col>

            <Col md={4}>
            <img
              className = "img-responsive"
              src= "/assets/images/team/mam.jpg"
              alt=""
            />

            </Col>
            <p> We take great pride in our approach, which is centered on a comprehensive assessment and audit process, designed to identify vulnerabilities and threats, develop customized strategies, and implement practical solutions to mitigate risks.</p>
            <p>Over the years, we have developed a reputation for excellence, and our clients have come to rely on us for their cyber security needs. We believe that this is a testament to the quality of our services, our commitment to excellence, and our ability to deliver results.

At our firm, we understand that cyber security is not a one-size-fits-all solution. That is why we work closely with each client to develop customized solutions that are tailored to their specific needs. Our team of experts is equipped with the latest technology and expertise to provide you with a range of services, including network security, application security, cloud security, and risk management.
</p>
<p>Thank you for choosing our firm as your trusted partner in cyber security. We remain committed to delivering excellence in service, and we look forward to continuing to serve you in the years to come.</p>
           </Row>



           
          
        </Modal.Body>
       
      </Modal>

    </div>
  );
}

export default About;

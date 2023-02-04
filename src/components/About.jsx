import React,{useState} from "react";
import { Button,Col,Form,Modal, Row } from 'react-bootstrap';

function About() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <section className="section-padding--bottom section-padding--top about-five">
        <div className="container">
          <div className="row gutter-y-60">
            <div className="col-lg-6">
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
            <div className="col-lg-6">
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
                      <img width="100%" src="assets/images/team/Sahaly Yasmin Bhuiyan.jpg" alt="" />
                      <a
                  style={{width:"170px"}}
                  onClick={handleShow} href='javascript:void(0)'
                    className="thm-btn about-four__btn "
                  >
                    <span className="text-light">Learn More</span>
                  </a>
                      </div>

                      <div style={{paddingRight:"12px"}} className="col-md-8 ">
                      <p>
                        {" "}
                      
                          We are already living in a cyber society. We shouldn’t
                          ask our customers to make a tradeoff between privacy
                          and security. We need to offer them the best of both.
                          Ultimately, protecting customer’s data protects our
                          business.We are working together to protect your
                          business.
                         
                      </p>
                      <h3 className="about-four__author__title">
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
              Ms. Sahaly Yasmin Bhuiyan comes with 13+ Years of wide-ranging and sound knowledge in the domain of Information System Security, Governance, Compliance, Enterprise as well as ICT Risk Management, PCI DSS Compliance Validation Services SWIFT Cyber Security Consultation and SWIFT CSP Assessment, Information System/Information Technology and Cyber Security Assessment/Auditing, etc.
              </p>
 
            </Col>

            <Col md={4}>
            <img
              className = "img-responsive"
              src= "/assets/images/team/Sahaly Yasmin Bhuiyan.jpg"
              alt=""
            />

            </Col>
            <p>Being a Security Auditor and Process Auditor, she earned a lot of real-world experience working with more than 450+ Companies across the globe. She collaborates with Strategic Teams, Leadership Teams, Management Teams, and Operations Teams. She understands the business challenges, organization goals, problems with execution, working methods, social variances, etc. She oversees the Quality Assurance Team and serves as a core security assessor in addition to serving as the company’s Chairman.</p>
            <p>Sahaly has certifications in PCI QSA, PCIP, CDCP, Lead Auditor - ISO 9001(QMS), ITIL, and SWIFT.</p>
           </Row>



           
          
        </Modal.Body>
       
      </Modal>

    </div>
  );
}

export default About;

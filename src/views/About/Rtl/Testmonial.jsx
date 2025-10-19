import React from "react";
import { Col, Row } from "react-bootstrap";

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
      <section className="container mt-5">
        <h2 className="header text-center">What Our Clients Say</h2>
        <Row className="mt-5">
          <Col md={8}>
            <h4 className="header">“Right Time Limited” Testimonials</h4>
            <p className="text-dark">
              Cyber Security Related 04 (four) Staged Services of Agrani Bank
              Limited. Our organization had a fantastic experience working with
              “Right Time Limited” (RightTime, short form), an IT Security firm
              to complete our 06 Skill Development Training Course. The course
              covered a comprehensive range of international certification
              frameworks, including ITIL, CEH, CISA, and Lead Auditor
              Certification Training for ISO 9001 LA, ISO 20000 LA & ISO 27001
              LA by IRCA, among others. The Cyber Security Service Project also
              included Security Assessment i.e. Vulnerability Assessment &
              Penetration Testing (VA & PT), Composite Information System Audit,
              and End-to-End Consultation and Certification for ISO 9001(Quality
              Management System-QMS), ISO 27001 (Information Security Management
              System-ISMS), and ISO 20000 (Information Technology Service
              Management-ITSM). RightTime's knowledgeable and experienced team
              guided us through the training and certification process, and we
              were able to complete it in a timely fashion. Thanks to their
              practical, hands-on approach, we felt confident applying our
              newfound knowledge to real-world scenarios. Overall, we highly
              recommend “Right Time Limited” for their comprehensive and
              effective training courses, Security Assessment, System Audit and
              certification frameworks. Their ITES experts are engaging,
              knowledgeable, and committed to helping their clients achieve
              success.
            </p>
            <Row>
              <Col style={{ width: "120px" }} md={2}>
                <img
                  src="/assets/images/about/test3.jpeg"
                  alt="testimonial"
                  width="100%"
                  className="img-fluid rounded-5"
                />
              </Col>
              <Col>
                <h4 className="header">Afzal Hossain</h4>
                <p className="text-dark">
                  DGM IT & MIS <br />
                  Agrani Bank Limited, Dhaka, Bangladesh
                </p>
              </Col>
            </Row>
          </Col>

          <Col md={4}>
            <img
              src="/assets/images/about/test3.jpeg"
              alt="testimonial"
              width="100%"
              className="img-fluid rounded-3"
            />
          </Col>
        </Row>
      </section>
      <section className="container mt-5">
        <Row className="mt-5">
          <Col md={4}>
            <img
              src="/assets/images/about/test2.jpg"
              alt="testimonial"
              width="100%"
              className="img-fluid rounded-3"
            />
          </Col>

          <Col md={8}>
            <h4 className="header">“Right Time Limited” Testimonials</h4>
            <p className="text-dark">
              Information Security Management System (ISMS) i.e. ISO 27001
              Certification of Al-Arafah Islami Bank Limited and Lead Auditor
              Training & Certification for related professional. It was
              fantastic working with “Right Time Limited” (RightTime, short
              form) an Information Technology (IT) Security Service Provider-
              for achieving the ISO 27001 Certification of Al-Arafah Islami Bank
              Limited. Its team of experts was incredibly knowledgeable and
              helpful throughout the entire process. They provided guidance and
              support every step of the way, and we were able to achieve the
              certification in a timely and efficient manner. Thanks to their
              expertise and dedication, we have improved our information
              security posture and gained a competitive edge in our industry. We
              highly recommend “Right Time Limited” to any organization seeking
              to achieve the ISO 27001 certification as well as International
              Professional Lead Auditor Certification for related
              Professional(s).
            </p>
            <Row>
              <Col style={{ width: "120px" }} md={2}>
                <img
                  src="/assets/images/about/test2.jpg"
                  alt="testimonial"
                  width="100%"
                  className="img-fluid rounded-5"
                />
              </Col>
              <Col>
                <h4 className="header">Syed Masodul Bari</h4>
                <p className="text-dark">
                  DMD & Head of ICT Wing <br />
                  Al-Arafah Islami Bank Limited, Bangladesh
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </section>
      <section className="container mt-5">
        <Row className="mt-5">
          <Col md={8}>
            <h4 className="header">“Right Time Limited” Testimonials</h4>
            <p className="text-dark">
              Payment Card Industry Data Security standard (PCI DSS)
              Certification of NRB Bank Limited and Skill Development Training
              for related professional. Our organization recently completed the
              end-to-end Training and Consultation offered by “Right Time
              Limited” (RightTime, short form), an IT Security firm to achieve
              certification on Payment Card Industry Data Security Standard (PCI
              DSS) by PCI SSC, USA for the NRB Bank Limited. We were thoroughly
              impressed with RightTime's knowledgeable and experienced team, who
              guided us through the training and certification process from
              start to finish. Thanks to their comprehensive training program
              and hands-on approach, we felt confident applying the PCI DSS
              standard to our organization's payment card data security
              practices. We appreciate their emphasis on practical solutions and
              real-world scenarios, which helped us understand the complexities
              of PCI DSS and how to implement it effectively. Overall, we highly
              recommend “Right Time Limited” for their end-to-end Training and
              Consultation services on PCI DSS certification. Their expertise,
              dedication, and commitment to their clients' success are truly
              unmatched."
            </p>
            <Row>
              <Col style={{ width: "120px" }} md={2}>
                <img
                  src="/assets/images/about/test1.jpeg"
                  alt="testimonial"
                  width="100%"
                  className="img-fluid rounded-5"
                />
              </Col>
              <Col>
                <h4 className="header">Abu Md. Sabbir Hassan Chowdhury</h4>
                <p className="text-dark">
                  SVP, Head of IT & ADC Operation
                  <br />
                  NRB Bank Ltd.
                </p>
              </Col>
            </Row>
          </Col>

          <Col md={4}>
            <img
              src="/assets/images/about/test1.jpeg"
              alt="testimonial"
              width="100%"
              className="img-fluid rounded-3"
            />
          </Col>
        </Row>
      </section>
      <br />
      <br />
      <br />{" "}
    </>
  );
}

export default Testmonial;

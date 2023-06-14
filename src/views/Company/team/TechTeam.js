import React, { useState } from 'react'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';

function TechTeam() {
  const [show, setShow] = useState(false);


  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);
  const [show7, setShow7] = useState(false);
  const [show8, setShow8] = useState(false);
  const [show9, setShow9] = useState(false);
  const [show10, setShow10] = useState(false);



  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);
  const handleClose4 = () => setShow4(false);
  const handleShow4 = () => setShow4(true);
  const handleClose5 = () => setShow5(false);
  const handleShow5 = () => setShow5(true);

  const handleClose6 = () => setShow6(false);
  const handleShow6 = () => setShow6(true);

  const handleClose7 = () => setShow7(false);
  const handleShow7 = () => setShow7(true);

  const handleClose8 = () => setShow8(false);
  const handleShow8 = () => setShow8(true);


  const handleClose9 = () => setShow9(false);
  const handleShow9 = () => setShow9(true);

  const handleClose10 = () => setShow10(false);
  const handleShow10 = () => setShow10(true);








  return (
    <div>
      <section className=" section-padding--top">
        <div className="container">
          <h3 className="blog-card-one__title blog-details__title" style={{ color: "#17224d" }} >Tech Team  </h3>


          <div className="body1">
            <section style={{ paddingBottom: "80px" }} className="container  ">
              <div className="">

                <Row>

                  <Col md={4} sm={6} xs={12} >
                    <article className="material-card mt-5  Pink">
                      <a onClick={handleShow9} href='javascript:void(0)'>
                        <h2 className="h21 text-light">
                          <span>Mohammad Tohidur Rahman Bhuiyan</span>
                          <strong>
                            <i className="fa fa-fw fa-star"></i>
                            Lead Security Practitioner and MD & CEO
                          </strong>
                        </h2>
                      </a>
                      <div className="mc-content" style={{ height: "320px" }} >
                        <div className="img-container">
                          <img
                            className="img-responsive"
                            src="/assets/images/team/Mohammad Tohidur Rahman Bhuiyan.jpg"
                            alt=""
                          />
                        </div>
                        <div className="mc-description mt-3">
                          <p>Lead Security Practitioner and MD & CEO</p>
                        </div>
                      </div>
                      <a className="mc-btn-action">
                        <i className="fa fa-bars"></i>
                      </a>
                      <div className="mc-footer">
                        <a href="/facebook" style={{ backgroundColor: "#3b5998", paddingLeft: "15px", borderRadius: "15px" }} className="fab fa-facebook-f "></a>
                        <a href="/facebook" style={{ backgroundColor: "#00acee", paddingLeft: "15px", borderRadius: "15px" }} className="fab fa-twitter"></a>
                        <a href="/facebook" style={{ backgroundColor: "#0A66C2", paddingLeft: "15px", borderRadius: "15px" }} className="fab fa-linkedin"></a>
                        <a href="/facebook" style={{ backgroundColor: " #e95950", paddingLeft: "15px", borderRadius: "12px" }} className="fab fa-instagram"></a>
                      </div>
                    </article>


                  </Col>

                  <Col md={4} sm={6} xs={12} >
                    <article className="material-card mt-5  Red">
                      <a onClick={handleShow} href='javascript:void(0)'>
                        <h2 className="h21 text-light">
                          <span>Kamrun Nahar</span>
                          <strong>
                            QC & DOCUMENT WRITER
                          </strong>
                        </h2>
                      </a>

                      <div className="mc-content" style={{ height: "320px" }} >
                        <div className="img-container">
                          <img
                            className="img-responsive"
                            src="/assets/images/team/Kamrun Nahar.jpg"
                            alt=""
                          />

                        </div>
                        <div className="mc-description mt-3"> QC & DOCUMENT WRITER</div>
                      </div>
                      <a className="mc-btn-action">
                        <i className="fa fa-bars"></i>
                      </a>
                      <div className="mc-footer">
                        <a href="/facebook" style={{ backgroundColor: "#3b5998", paddingLeft: "15px", borderRadius: "15px" }} className="fab fa-facebook-f "></a>
                        <a href="/facebook" style={{ backgroundColor: "#00acee", paddingLeft: "15px", borderRadius: "15px" }} className="fab fa-twitter"></a>
                        <a href="/facebook" style={{ backgroundColor: "#0A66C2", paddingLeft: "15px", borderRadius: "15px" }} className="fab fa-linkedin"></a>
                        <a href="/facebook" style={{ backgroundColor: " #e95950", paddingLeft: "15px", borderRadius: "12px" }} className="fab fa-instagram"></a>
                      </div>
                    </article>


                  </Col>

                  <Col md={4} sm={6} xs={12} >
                    <article className="material-card mt-5  Pink">
                      <a onClick={handleShow1} href='javascript:void(0)'>
                        <h2 className="h21 text-light">
                          <span>Farzana Yeasmin Tinne</span>
                          <strong>
                            <i className="fa fa-fw fa-star"></i>
                            SECURITY ANALYST
                          </strong>
                        </h2>
                      </a>
                      <div className="mc-content" style={{ height: "320px" }} >
                        <div className="img-container">
                          <img
                            className="img-responsive"
                            src="/assets/images/team/Tinne.jpg"
                            alt=""
                          />
                        </div>
                        <div className="mc-description mt-3">
                          <p>SECURITY ANALYST</p>
                        </div>
                      </div>
                      <a className="mc-btn-action">
                        <i className="fa fa-bars"></i>
                      </a>
                      <div className="mc-footer">
                        <a href="/facebook" style={{ backgroundColor: "#3b5998", paddingLeft: "15px", borderRadius: "15px" }} className="fab fa-facebook-f "></a>
                        <a href="/facebook" style={{ backgroundColor: "#00acee", paddingLeft: "15px", borderRadius: "15px" }} className="fab fa-twitter"></a>
                        <a href="/facebook" style={{ backgroundColor: "#0A66C2", paddingLeft: "15px", borderRadius: "15px" }} className="fab fa-linkedin"></a>
                        <a href="/facebook" style={{ backgroundColor: " #e95950", paddingLeft: "15px", borderRadius: "12px" }} className="fab fa-instagram"></a>
                      </div>
                    </article>


                  </Col>

                  <Col md={4} sm={6} xs={12} >

                    <article className="material-card mt-5  Deep-Purple">
                      <a onClick={handleShow3} href='javascript:void(0)'>
                        <h2 className="h21 text-light">
                          <span>Md. Sazzad Hossain</span>
                          <strong>
                            <i className="fa fa-fw fa-star"></i>
                            SECURITY ANALYST
                          </strong>
                        </h2>
                      </a>
                      <div className="mc-content" style={{ height: "320px" }} >
                        <div className="img-container">

                          <img
                            className="img-responsive"
                            src="/assets/images/team/Sazzad-PP.jpeg"
                            alt=""
                          />
                        </div>
                        <div className="mc-description mt-3">     SECURITY ANALYST
                        </div>
                      </div>
                      <a className="mc-btn-action">
                        <i className="fa fa-bars"></i>
                      </a>
                      <div className="mc-footer">
                        <a href="/facebook" style={{ backgroundColor: "#3b5998", paddingLeft: "15px", borderRadius: "15px" }} className="fab fa-facebook-f "></a>
                        <a href="/facebook" style={{ backgroundColor: "#00acee", paddingLeft: "15px", borderRadius: "15px" }} className="fab fa-twitter"></a>
                        <a href="/facebook" style={{ backgroundColor: "#0A66C2", paddingLeft: "15px", borderRadius: "15px" }} className="fab fa-linkedin"></a>
                        <a href="/facebook" style={{ backgroundColor: " #e95950", paddingLeft: "15px", borderRadius: "12px" }} className="fab fa-instagram"></a>
                      </div>
                    </article>


                  </Col>

                  <Col md={4} sm={6} xs={12} >
                    <article className="material-card mt-5  Deep-Purple">
                      <a onClick={handleShow6} href='javascript:void(0)'>
                        <h2 className="h21 text-light">
                          <span>Md. Sakim Hossain</span>
                          <strong>
                            <i className="fa fa-fw fa-star"></i>
                            SECURITY ANALYST
                          </strong>
                        </h2>
                      </a>
                      <div className="mc-content" style={{ height: "320px" }} >
                        <div className="img-container">

                          <img
                            className="img-responsive"
                            src="/assets/images/team/Sakim.jpeg"
                            alt=""
                          />
                        </div>
                        <div className="mc-description mt-3">   SECURITY ANALYST
                        </div>
                      </div>
                      <a className="mc-btn-action">
                        <i className="fa fa-bars"></i>
                      </a>
                      <div className="mc-footer">
                        <a href="/facebook" style={{ backgroundColor: "#3b5998", paddingLeft: "15px", borderRadius: "15px" }} className="fab fa-facebook-f "></a>
                        <a href="/facebook" style={{ backgroundColor: "#00acee", paddingLeft: "15px", borderRadius: "15px" }} className="fab fa-twitter"></a>
                        <a href="/facebook" style={{ backgroundColor: "#0A66C2", paddingLeft: "15px", borderRadius: "15px" }} className="fab fa-linkedin"></a>
                        <a href="/facebook" style={{ backgroundColor: " #e95950", paddingLeft: "15px", borderRadius: "12px" }} className="fab fa-instagram"></a>
                      </div>
                    </article>


                  </Col>
                  <Col md={4} sm={6} xs={12} >
                    <article className="material-card mt-5  Purple">
                      <a onClick={handleShow2} href='javascript:void(0)'>
                        <h2 className="h21 text-light">
                          <span>Rayhan Kanak</span>
                          <strong>
                            <i className="fa fa-fw fa-star"></i>
                            SECURITY ANALYST
                          </strong>
                        </h2>
                      </a>
                      <div className="mc-content" style={{ height: "320px" }} >
                        <div className="img-container">
                          <img
                            className="img-responsive"
                            src= "/assets/images/team/kanak.jpeg"
                            alt=""
                          />

                        </div>
                        <div className="mc-description mt-3">
                          SECURITY ANALYST
                        </div>

                      </div>
                      <a className="mc-btn-action">
                        <i className="fa fa-bars"></i>
                      </a>
                      <div className="mc-footer">
                        <a href="/facebook" style={{ backgroundColor: "#3b5998", paddingLeft: "15px", borderRadius: "15px" }} className="fab fa-facebook-f "></a>
                        <a href="/facebook" style={{ backgroundColor: "#00acee", paddingLeft: "15px", borderRadius: "15px" }} className="fab fa-twitter"></a>
                        <a href="/facebook" style={{ backgroundColor: "#0A66C2", paddingLeft: "15px", borderRadius: "15px" }} className="fab fa-linkedin"></a>
                        <a href="/facebook" style={{ backgroundColor: " #e95950", paddingLeft: "15px", borderRadius: "12px" }} className="fab fa-instagram"></a>
                      </div>
                    </article>


                  </Col>
                  <Col md={4} sm={6} xs={12} >
                    <article className="material-card mt-5  Deep-Purple">
                      <a onClick={handleShow7} href='javascript:void(0)'>
                        <h2 className="h21 text-light">
                          <span>Md. Abdur Razzak</span>
                          <strong>
                            <i className="fa fa-fw fa-star"></i>
                            SOFTWARE ENGINEER
                          </strong>
                        </h2>
                      </a>
                      <div className="mc-content" style={{ height: "320px" }} >
                        <div className="img-container">

                          <img
                            className="img-responsive"
                            src="/assets/images/team/razzak1.jpeg"
                            alt=""
                          />
                        </div>
                        <div className="mc-description mt-3">  SOFTWARE ENGINEER

                        </div>
                      </div>
                      <a className="mc-btn-action">
                        <i className="fa fa-bars"></i>
                      </a>
                      <div className="mc-footer">
                        <a href="https://www.facebook.com/razzak2672" style={{ backgroundColor: "#3b5998", paddingLeft: "15px", borderRadius: "15px" }} className="fab fa-facebook-f "></a>
                        <a href="https://www.linkedin.com/in/abdur-razzak-b404a71b3" style={{ backgroundColor: "#00acee", paddingLeft: "15px", borderRadius: "15px" }} className="fab fa-twitter"></a>
                        <a href="https://www.linkedin.com/in/abdur-razzak-b404a71b3" style={{ backgroundColor: "#0A66C2", paddingLeft: "15px", borderRadius: "15px" }} className="fab fa-linkedin"></a>
                        <a href="https://www.instagram.com/abdur.razzak72/" style={{ backgroundColor: " #e95950", paddingLeft: "15px", borderRadius: "12px" }} className="fab fa-instagram"></a>
                      </div>
                    </article>


                  </Col>

                  <Col md={4} sm={6} xs={12} >
                    <article className="material-card mt-5  Deep-Purple">
                      <a onClick={handleShow10} href='javascript:void(0)'>
                        <h2 className="h21 text-light">
                          <span>Sadrin Rahman Bhuiyan Piya</span>
                          <strong>
                            <i className="fa fa-fw fa-star"></i>
                            SECURITY ANALYST
                          </strong>
                        </h2>
                      </a>
                      <div className="mc-content" style={{ height: "320px" }} >
                        <div className="img-container">

                          <img
                            className="img-responsive"
                            src="/assets/images/team/sadrin1.jpg"
                            alt=""
                          />
                        </div>
                        <div className="mc-description mt-3">  SECURITY ANALYST

                        </div>
                      </div>
                      <a className="mc-btn-action">
                        <i className="fa fa-bars"></i>
                      </a>
                      <div className="mc-footer">
                        <a href="/facebook" style={{ backgroundColor: "#3b5998", paddingLeft: "15px", borderRadius: "15px" }} className="fab fa-facebook-f "></a>
                        <a href="/facebook" style={{ backgroundColor: "#00acee", paddingLeft: "15px", borderRadius: "15px" }} className="fab fa-twitter"></a>
                        <a href="/facebook" style={{ backgroundColor: "#0A66C2", paddingLeft: "15px", borderRadius: "15px" }} className="fab fa-linkedin"></a>
                        <a href="/facebook" style={{ backgroundColor: " #e95950", paddingLeft: "15px", borderRadius: "12px" }} className="fab fa-instagram"></a>
                      </div>
                    </article>


                  </Col>
                  <Col md={4} sm={6} xs={12} >
                    <article className="material-card mt-5  Deep-Purple">
                      <a onClick={handleShow8} href='javascript:void(0)'>
                        <h2 className="h21 text-light">
                          <span>Md Mahadi Hasan Heart</span>
                          <strong>
                            <i className="fa fa-fw fa-star"></i>
                            SECURITY ANALYST                      </strong>
                        </h2>
                      </a>
                      <div className="mc-content" style={{ height: "320px" }} >
                        <div className="img-container">

                          <img
                            className="img-responsive"
                            src="/assets/images/team/mehedi.jpg"

                            m alt=""
                          />
                        </div>
                        <div className="mc-description mt-3">  SECURITY ANALYST

                        </div>
                      </div>
                      <a className="mc-btn-action">
                        <i className="fa fa-bars"></i>
                      </a>
                      <div className="mc-footer">
                        <a href="/facebook" style={{ backgroundColor: "#3b5998", paddingLeft: "15px", borderRadius: "15px" }} className="fab fa-facebook-f "></a>
                        <a href="/facebook" style={{ backgroundColor: "#00acee", paddingLeft: "15px", borderRadius: "15px" }} className="fab fa-twitter"></a>
                        <a href="/facebook" style={{ backgroundColor: "#0A66C2", paddingLeft: "15px", borderRadius: "15px" }} className="fab fa-linkedin"></a>
                        <a href="/facebook" style={{ backgroundColor: " #e95950", paddingLeft: "15px", borderRadius: "12px" }} className="fab fa-instagram"></a>
                      </div>
                    </article>


                  </Col>



                </Row>



              </div>
            </section>
          </div>
        </div>
      </section>





      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Body className=" rounded-3">
          <h5 className='teamTitle'>KAMRUN NAHAR</h5>
          <i style={{ fontSize: "40px" }} className="fab fa-linkedin "></i>

          <Row>
            <Col md={8}>
              <p className='teamDetails'>
                Nahar achieved adequate acumen in Quality Control and Document (Technical Document) Writing. having 16+ years of experience in Governance, Risk and Compliance profile in various industries like Banking, Information Technology, Telecom, Airlines, Support services etc.              </p>

            </Col>

            <Col md={4}>
              <img
                className="img-responsive"
                src="/assets/images/team/Kamrun Nahar.jpg"
                alt=""
              />

            </Col>
            <p>She is pioneer in providing quality services in Cyber Security, PCI DSS, GDPR, IT Risk, IT Audit, ISO27001, HIPAA, Business continuity, Sarbanes–Oxley Act, Disaster Recovery, Other Technology driven business operation.</p>
            <p>NAHAR HOLDS - SWIFT PRO, ITIL, LEAD AUDITOR- ISO 9001 (QMS), ACUNETIX PRO</p>
          </Row>





        </Modal.Body>

      </Modal>


      <Modal size="lg" show={show1} onHide={handleClose1}>
        <Modal.Body className=" rounded-3">
          <h5 className='teamTitle'>FRAZANA YEASMIN TINNE</h5>
          <i style={{ fontSize: "40px" }} className="fab fa-linkedin "></i>

          <Row>
            <Col md={8}>
              <p className='teamDetails'>
                Farzana is an Information System Professional and her expertise is in Information System Security (specially VA & PT and IS/IT Audit), Compliance, Enterprise Risk Management, IT Enabled Project Handling, Coordination, Preparatory Consultation for various ISO/ BS Certification (e.g. ISO 27001, ISO 9001, ISO 22301 and ISO 20000 etc.), assurance (IS Auditing including Vulnerability assessment & Penetration Testing) etc.</p>
            </Col>

            <Col md={4}>
              <img
                className="img-responsive"
                src="/assets/images/team/Tinne.jpg"
                alt=""
              />

            </Col>
            <p>
              She holds Lead Auditor & Lead Implementer Certification on ISO 27001. Besides, she is a SWIFT enlisted Cyber security Consultant and SWIFT CSP Independent Assessor. She poses, CEH and ITIL certification as well.
            </p>
          </Row>





        </Modal.Body>

      </Modal>


      <Modal size="lg" show={show2} onHide={handleClose2}>
        <Modal.Body className=" rounded-3">
          <h5 className='teamTitle'>Rayhan Kanak</h5>
          <i style={{ fontSize: "40px" }} className="fab fa-linkedin "></i>

          <Row>
            <Col md={8}>
              <p className='teamDetails'>Rayhan is a dedicated individual who is engaged in protecting our clients' systems and data from potential threats. Having gained over 4 years of experience in the  field of cyber security, he has honed his abilities in Vulnerability Assessment & Penetration Testing (VA & PT), SWIFT CSP Assessment, and the detection and response to security incidents.</p>
              <p>Working closely with senior analysts in his current position, he assists in designing and executing efficient security measures to avert cyber-attacks. His skillset includes proficiency in a range of security tools and technologies such as Nessus, Nmap, and Wireshark. Additionally, he kept himself updated with the latest industry trends and security threats.</p>            </Col>

            <Col md={4}>
              <img
                className="img-responsive"
                src= "/assets/images/team/kanak.jpeg"

                alt=""
              />

            </Col>
            <p>He is dedicated to continually improving his knowledge and abilities. He holds certifications in SWIFT Cyber Security Assessment & Consultation and Certified Ethical Hacker (CEH). Besides, he is pursuing further official recognition in CompTIA Security+ and IS/IT Security Assessment to strengthen his expertise. He thrives in a challenging, fast-paced environment and actively seeks out new opportunities to contribute to his team's and customers' success.</p>
          </Row>



        </Modal.Body>

      </Modal>


      <Modal size="lg" show={show3} onHide={handleClose3}>
        <Modal.Body className=" rounded-3">
          <h5 className='teamTitle'>MD. SAZZAD HOSSAIN</h5>
          <i style={{ fontSize: "40px" }} className="fab fa-linkedin "></i>

          <Row>
            <Col md={8}>
              <p className='teamDetails'>
                A passionate cyber security specialist, with a primary focus on Security Assessment including Vulnerability Assessment & Penetration Testing (VA & PT) and Red Teaming. He is a positive mind of i individual who is passionate about analyzing Security Infrastructure of ITES organizations and assisting client(s) for a reliable as well as secured environment.              </p>
              <p className='teamDetails'>
                He is SWIFT enlisted Cyber Security Consultant and also enlisted SWIFT CSO Independent Assessor. Besides, he holds the Certified Ethical Hacker (CEH) certificate.        </p>

            </Col>

            <Col md={4}>
              <img
                className="img-responsive"
                src="/assets/images/team/Sazzad-PP.jpeg"
                alt=""
              />

            </Col>

          </Row>





        </Modal.Body>

      </Modal>







      <Modal size="lg" show={show6} onHide={handleClose6}>
        <Modal.Body className=" rounded-3">
          <h5 className='teamTitle'>Md. Sakim Hossain</h5>
          <i style={{ fontSize: "40px" }} className="fab fa-linkedin "></i>

          <Row>
            <Col md={8}>
              <p className='teamDetails'>As an Information System Security Analyst at "Right Time Limited" Information Security Services,  he  is dedicated to protecting our clients' systems and data from cyber threats. With more than 3 years of experience, he has gained expertise in conducting vulnerability assessments, analyzing network traffic, and responding to security incidents.</p>
              <p>Collaborating with senior analysts, he plays a crucial role in developing and implementing effective security measures that mitigate risks and ensure compliance with industry standards. He is proficient in a range of security tools and technologies, such as Nessus, Nmap, and Wireshark, and keep himself updated on the latest trends and threats in the industry.</p>
            </Col>

            <Col md={4}>
              <img
                className="img-responsive"
                src="/assets/images/team/Sakim.jpeg"
                alt=""
              />

            </Col>

            <p>In  his quest for professional growth, he is pursuing relevant certifications such as ISMS, PCI DSS, LPT, OSCP, and Practical Hacking (ethical) to enhance his knowledge and skills. He thrives in fast-paced, challenging environments and is always eager to take on new responsibilities to contribute to the success of his team and clients. His passion for information security and commitment to continuous learning makes him, a valuable asset to our organization.</p>


          </Row>





        </Modal.Body>

      </Modal>




      <Modal size="lg" show={show7} onHide={handleClose7}>
        <Modal.Body className=" rounded-3">
          <h5 className='teamTitle'>Md. Abdur Razzak</h5>
          <a href='https://www.linkedin.com/in/abdur-razzak-b404a71b3'> <i style={{ fontSize: "40px" }} className="fab fa-linkedin "></i></a>

          <Row>
            <Col md={8}>
              <p className='teamDetails'>SOFTWARE ENGINEER</p>
              <p className='teamDetails'>
                Abdur Razzak is a talented Software Engineer with expertise in full stack development using JavaScript frameworks such as React.js and Next.js, as well as Python frameworks like Django.        </p>

              <p className='teamDetails'>As a full stack developer, Md. Abdur Razzak is proficient in both front-end and back-end development, allowing him to create dynamic and responsive web applications that are both user-friendly and highly functional.His skills in React.js and Next.js enable him to create modern and complex web applications with ease. He is able to build reusable components and optimize web applications for performance and speed.

              </p>



            </Col>

            <Col md={4}>
              <img
                className="img-responsive"
                src="/assets/images/team/razzak1.jpeg"
                alt=""
              />

            </Col>


            <p className='teamDetails'> Additionally,  Abdur Razzak's proficiency in Django allows him to build robust back-end systems that power the web applications he develops. He is able to create RESTful APIs, handle database management, and implement complex business logic.</p>
            <p className='teamDetails'>Overall,   Abdur Razzak's skills as a full stack developer make him a valuable asset to any software development team. His ability to work with a variety of programming languages and frameworks makes him adaptable and versatile in his approach to development. </p>

          </Row>





        </Modal.Body>

      </Modal>


      <Modal size="lg" show={show8} onHide={handleClose8}>
        <Modal.Body className=" rounded-3">
          <h5 className='teamTitle'>MD Mahadi Hasan Heart</h5>
          <i style={{ fontSize: "40px" }} className="fab fa-linkedin "></i>

          <Row>
            <Col md={8}>
              <p className='teamDetails'>
                As a Security Analyst at “Right Time Limited” Information Security Services, Mahadi is  passionate about safeguarding our clients' systems and data. With 3+ years of experience in the field of cyber security, he has developed expertise in conducting vulnerability assessments, analyzing network traffic, and identifying and responding to security incidents.</p>
              <p>In his current role, He is working closely with senior analysts to develop and implement effective security measures to prevent cyber threats. He is proficient in a variety of security tools and technologies, including Nessus, Nmap, and Wireshark, and stay up-to-date with the latest trends and threats in the industry.</p>
            </Col>

            <Col md={4}>
              <img
                className="img-responsive"
                src="/assets/images/team/mehedi.jpg"

                alt=""
              />

            </Col>
            <p>He is committed to continuous learning and development, and besides being SWIFT Cyber Security professional, pursuing relevant certifications such as CompTIA Security+ and Practical Hacking (ethical) to further enhance his skills and knowledge. He thrives in a fast-paced, challenging environment, and is always eager to take on new responsibilities and contribute to the success of his team and clients.</p>
          </Row>





        </Modal.Body>

      </Modal>


      <Modal size="lg" show={show10} onHide={handleClose10}>
        <Modal.Body className=" rounded-3">
          <h5 className='teamTitle'>Sadrin Rahman Bhuiyan Piya</h5>
          <i style={{ fontSize: "40px" }} className="fab fa-linkedin "></i>

          <Row>
            <Col md={8}>
              <p className='teamDetails'>As a Junior ICT Security Analyst at Right Time Limited, sadrin Rahman Bhuiyan Piya has a passion for ensuring the confidentiality, integrity, and availability of its clients' systems and data. With 4 years+ of experience in the field, she has developed expertise in threat analysis, vulnerability assessment, and incident response.</p>

              <p>In her current role, she works closely with Senior Analysts to identify potential security risks and implement appropriate controls to prevent or mitigate attacks. She has experience in monitoring and analyzing network traffic, detecting and responding to security incidents, and conducting security assessments and audits.</p>
            </Col>

            <Col md={4}>
              <img
                className="img-responsive"
                src="/assets/images/team/sadrin1.jpg"

                alt=""
              />

            </Col>
            <p>She is proficient in a variety of security tools and technologies, including Core Impact, Tenable, Burp Suite, using custom code/script, and stay up-to-date with the latest trends and threats in the industry. She is also committed to continuous learning and development, and is working towards obtaining relevant certifications such as cyber–Security Official Recognition i.e. SWIFT & PCI Professional.</p>

          </Row>





        </Modal.Body>

      </Modal>




      <Modal size="lg" show={show9} onHide={handleClose9}>
        <Modal.Body className=" rounded-3">
          <h5 className='teamTitle'>Dr. Mohammad Tohidur Rahman Bhuiyan</h5>
          <i style={{ fontSize: "40px" }} className="fab fa-linkedin "></i>

          <Row>
            <Col md={8}>
              <p className='teamDetails'>
                Dr. Mohammad Tohidur Rahman Bhuiyan comes with 31+ Years of wide-ranging and adequate acumen in the domain of Information System Security, Governance, Compliance, Enterprise as well as ICT Risk Management, PCI DSS Compliance Validation Services SWIFT Cyber Security Consultation and SWIFT CSP Assessment, ITES Project Handling, Preparatory Consultation for various ISO/ BS Certification, Information System/Information Technology and Cyber Security Assessment/Auditing and Technical Documentation (end to end), etc.              </p>

            </Col>

            <Col md={4}>
              <img
                className="img-responsive"
                src="/assets/images/team/Mohammad Tohidur Rahman Bhuiyan.jpg"
                alt=""
              />

            </Col>
            <p>He is a visionary, and convergent thinker. Being a Security Auditor and Process Auditor, he earned a lot of real-world experience working with more than 600+ Companies across the globe. He collaborates with Leadership teams, Management teams, and Operations teams and understands the business challenges, organization goals , problems with execution , working methods, social variances, etc.</p>
            <p>Tohid has certifications in PCI QSA, PCIP, CISA, CGEIT, Lead Auditor (ISO 27001 & ISO 9001), BCP & DRP, A+, CDCP, ITIL, Cyber Security & Cyber Forensic, CEH, MCSD, PRINCE2, Acunetix  (VA & PT Tools), CEI (Certified Instructor, EC-Council), SWIFT.</p>
          </Row>





        </Modal.Body>

      </Modal>












      <br /><br /><br /></div>
  )
}

export default TechTeam
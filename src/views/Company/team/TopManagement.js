import React, { useState } from 'react'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';

function TopManagement() {
  const [show, setShow] = useState(false);

  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);

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

  const handleShow6 = () => setShow6(true);
  const handleClose6 = () => setShow6(false);






  return (
    <div>
      <section className=" section-padding--top">
        <div className="container">
          <h3 className="blog-card-one__title blog-details__title" style={{ color: "#17224d" }} >Top Management</h3>


          <div className="body1">
            <section style={{paddingBottom:"80px"}} className="container  ">
              <div className="">

                <Row>

                  <Col md={4} sm={6} xs={12} >
                    <article className="material-card mt-5 Red">
                      <a onClick={handleShow} href='javascript:void(0)'>
                        <h2 className="h21 text-light">
                          <span>Sahaly Yasmin Bhuiyan</span>
                           
                          <strong>
                            <i className="fa fa-fw fa-star"></i>
                            Chairman
                          </strong>
                        </h2>
                      </a>

                      <div className="mc-content" style={{ height: "320px" }} >
                        <div className="img-container">
                          <img
                            className="img-responsive"
                            src="/assets/images/team/ch1.jpeg"
                            alt=""
                          />

                        </div>
                        <div className="mc-description mt-3">Chairman of the company.</div>
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
                  <Col md={4} sm={6} xs={12}>
                    <article className="material-card mt-5  Purple">
                      <a onClick={handleShow2} href='javascript:void(0)'>
                        <h2 className="h21 text-light">
                          <span>Lt Commander Mohammad Ali, PCGMS, BN (RTD)</span>
                          <strong>
                            <i className="fa fa-fw fa-star"></i>
                            DIRECTOR, STRATEGIC PLANNING AND DEVELOPMENT
                          </strong>
                        </h2>
                      </a>
                      <div className="mc-content" style={{ height: "320px" }} >
                        <div className="img-container">
                          <img
                            className="img-responsive"
                            src="/assets/images/team/ali1.jpeg"
                            alt=""
                          />

                        </div>
                        <div className="mc-description mt-3">
                          DIRECTOR, STRATEGIC PLANNING AND DEVELOPMENT
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
                  <Col md={4} sm={6} xs={12}>
                    <article className="material-card mt-5  Deep-Purple">
                      <a onClick={handleShow6} href='javascript:void(0)'>
                        <h2 className="h21 text-light">
                          <span>Md. Rokanuzzaman</span>
                          <strong>
                            <i className="fa fa-fw fa-star"></i>
                            Chief Information Officer (CIO)
                          </strong>
                        </h2>
                      </a>
                      <div className="mc-content" style={{ height: "320px" }} >
                        <div className="img-container">

                          <img
                            className="img-responsive"
                            src="/assets/images/team/Rokanuzzaman.jpeg"
                            alt=""
                          />
                        </div>
                        <div className="mc-description  mt-3">Chief Information Officer (CIO)</div>
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


                  <Col md={4} sm={6} xs={12}>
                    <article className="material-card mt-5  Deep-Purple">
                      <a     onClick={handleShow3} href='javascript:void(0)'>
                        <h2 className="h21 text-light">
                          <span>Arshad Mahmud</span>
                          <strong>
                            <i className="fa fa-fw fa-star"></i>
                            COO
                          </strong>
                        </h2>
                      </a>
                      <div className="mc-content" style={{ height: "320px" }} >
                        <div className="img-container">

                          <img
                            className="img-responsive"
                            src="/assets/images/team/ar.jpeg"
                            alt=""
                          />
                        </div>
                        <div className="mc-description mt-3">COO</div>
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
                  <Col md={4} sm={6} xs={12}>
                    <article className="material-card mt-5 Indigo">
                      <a onClick={handleShow4} href='javascript:void(0)'>
                        <h2 className="h21 text-light">
                          <span>Md. Shamim Al Mamun</span>
                          <strong>
                            <i className="fa fa-fw fa-star"></i>
                            CHIEF TECHNOLOGY OFFICER (CTO)
                          </strong>
                        </h2>
                      </a>
                      <div className="mc-content" style={{ height: "320px" }} >
                        <div className="img-container">
                          <img
                            className="img-responsive"
                            src="/assets/images/team/sm2.jpeg"
                            alt=""
                          />
                        </div>
                        <div className="mc-description mt-3">CHIEF TECHNOLOGY OFFICER (CTO)</div>
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
                  <Col md={4} sm={6} xs={12}>
                    <article className="material-card mt-5 Blue">
                      <a onClick={handleShow5} href='javascript:void(0)'>
                        <h2 className="h21 text-light">
                          <span>Mohammed Ziaur Rahman Khan</span>
                          <strong>
                            <i className="fa fa-fw fa-star"></i>
                            CHIEF FINANCIAL OFFICER (CFO)
                          </strong>
                        </h2>
                      </a>
                      <div className="mc-content" style={{ height: "320px" }} >
                        <div className="img-container">
                          <img
                            className="img-responsive"
                            src= "/assets/images/team/zia.jpeg"
                            alt=""
                          />
                        </div>
                        <div className="mc-description mt-3">CHIEF FINANCIAL OFFICER (CFO)</div>
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
          <h5 className='teamTitle'>Sahaly Yasmin Bhuiyan</h5>
          <i style={{ fontSize: "40px" }} className="fab fa-linkedin "></i>

          <Row>
            <Col md={8}>
              <p className='teamDetails'>
                Ms. Sahaly Yasmin Bhuiyan comes with 13+ Years of wide-ranging and sound knowledge in the domain of Information System Security, Governance, Compliance, Enterprise as well as ICT Risk Management, PCI DSS Compliance Validation Services SWIFT Cyber Security Consultation and SWIFT CSP Assessment, Information System/Information Technology and Cyber Security Assessment/Auditing, etc.
              </p>

            </Col>

            <Col md={4}>
              <img
                className="img-responsive"
                src="/assets/images/team/ch1.jpeg"
                alt=""
              />

            </Col>
            <p>Being a Security Auditor and Process Auditor, she earned a lot of real-world experience working with more than 450+ Companies across the globe. She collaborates with Strategic Teams, Leadership Teams, Management Teams, and Operations Teams. She understands the business challenges, organization goals, problems with execution, working methods, social variances, etc. She oversees the Quality Assurance Team and serves as a core security assessor in addition to serving as the company’s Chairman.</p>
            <p>Sahaly has certifications in PCI QSA, PCIP, CDCP, Lead Auditor - ISO 9001(QMS), ITIL, and SWIFT.</p>
          </Row>





        </Modal.Body>

      </Modal>



      <Modal size="lg" show={show2} onHide={handleClose2}>
        <Modal.Body className=" rounded-3">
          <h5 className='teamTitle'>Lt Commander Mohammad Ali, PCGMS, BN (Rtd)</h5>
          <i style={{ fontSize: "40px" }} className="fab fa-linkedin "></i>

          <Row>
            <Col md={8}>
              <p className='teamDetails'>
              Lt Commander Mohammad Ali, PCGMS, BN (Rtd) has been serving as the Director of Strategic Planning & Development at Right Time Limited, a premier Cyber Security Service Provider, since January 2024. With an illustrious career spanning 28 years in the Bangladesh Navy, Coast Guard & other esteemed national and international organizations, he brings unparalleled expertise in Human Resource Management, Security Operations, and Strategic Planning.                 </p>
                 <p>Throughout his distinguished career, Mr. Ali has held pivotal roles such as Head of HR, Military Observer, Intelligence Officer, and Officer In charge IT, and Project Director (ERP), Project Director(CGRPMS) each underscoring his exceptional leadership, project management skills, and proficiency in implementing advanced security systems. He has consistently demonstrated a remarkable ability to manage large teams, oversee intricate projects, and safeguard personnel, equipment, and information.</p>

            </Col>

            <Col md={4}>
              <img
                className="img-responsive"
                src="/assets/images/team/ali.jpeg"

                alt=""
              />

            </Col>
            <p> His academic credentials include an MBA in HRM, a BSc in Military Science, PGD in Business Communication & SCM and numerous professional certifications in security, project management, and military training. His outstanding service has been recognized with the prestigious President Coast Guard Medal (Service) (PCGMS) and the United Nations Medal, honoring his significant contributions to his field.

<br/><br/>Mr. Ali is lauded for his dynamic leadership, strategic foresight, and ability to thrive in multicultural environments. At Right Time Limited, he harnesses his extensive experience to spearhead strategic growth and development, ensuring the organization consistently achieves the highest standards of security and operational excellence.
</p>

            </Row>





        </Modal.Body>

      </Modal>


      <Modal size="lg" show={show6} onHide={handleClose6}>
        <Modal.Body className=" rounded-3">
          <h5 className='teamTitle'>Md. Rokanuzzaman</h5>
          <i style={{ fontSize: "40px" }} className="fab fa-linkedin "></i>

          <Row>
            <Col md={8}>
              <p className='teamDetails'>
                Rokanuzzaman is  an experienced ICT Cyber Security Professional with over 25 years of experience. He is  dedicated to developing effective cyber security strategies that minimize risks and ensure compliance with industry standards. He is serving as Chief Information Officer (CIO), "Right Time Limited", the leading ICT Security Service Provider since 1 January 2014. He   has a proven track record of implementing successful cyber security solutions that protect organizations from cyber threats.  </p>
              <p>His expertise spans across various aspects of cyber security, including network security, vulnerability assessment, penetration testing, and incident response. He   has led teams of cyber security experts and provided guidance to executive leadership on complex security issues and ensureduninterrupted business operations. </p>
            </Col>

            <Col md={4}>
              <img
                className="img-responsive"
                src="/assets/images/team/Rokanuzzaman.jpeg"
                alt=""
              />

            </Col>
            <p>In addition to his technical skills, he is also a thought leader in the industry. He regularly speaks at conferences and contributes to leading publications on topics related to cyber security.  His key certifications include CISA, PMP, CEH, MCSE, MCDBA, and MCP. He holds a master's degree in Business Administration with PGD in ICT.</p>
            <p>With 12 years of experience in market operations and good administrative and managerial duties, he has a solid foundation in managing complex projects and leading teams. He is also proficient in developing comprehensive technical documentation covering regulatory, legal, and standard bodies. Additionally, he has over 10 years of experience in Management Information Systems (MIS), specializing in network analysis, design, implementation, and data migration in heterogeneous operating environments.</p>
          </Row>





        </Modal.Body>

      </Modal>



      <Modal size="lg" show={show3} onHide={handleClose3}>
        <Modal.Body className=" rounded-3">
          <h5 className='teamTitle'>Arshad Mahmud</h5>
          <i style={{ fontSize: "40px" }} className="fab fa-linkedin "></i>

          <Row>
            <Col md={8}>
              <p className='teamDetails'>
                Arshad leads the worldwide service delivery lines, and modernizations through cutting-edge technology to achieve operational competence and World-Class service to customers.
              </p>
              <p className='teamDetails'>
                He has wide-ranging experience in consultancy providing consulting Solutions to IT Enabled Services Organizations, Banks, BPO, KPO, and other industries. His understanding also includes establishing and (ITES) designing security architectures and implementing practical security solutions.              </p>

            </Col>

            <Col md={4}>
              <img
                className="img-responsive"
                src="/assets/images/team/ar.jpeg"
                alt=""
              />

            </Col>
            <p>His expertise in managed services, security testing, and IT Governance, Compliance, and Risk Management (GRC) is acknowledged on a global scale. </p>
            <p>Arshad is certified in CISA, CISM, SWIFT, and CEH.</p>
          </Row>





        </Modal.Body>

      </Modal>


      <Modal size="lg" show={show4} onHide={handleClose4}>
        <Modal.Body className=" rounded-3">
          <h5 className='teamTitle'>MD. SHAMIM AL MAMUN </h5>
          <i style={{ fontSize: "40px" }} className="fab fa-linkedin "></i>

          <Row>
            <Col md={8}>
              <p className='teamDetails'>
                Mamun has over 18 years of experience in various ICT roles across multiple organizations. His successful track record includes leading ICT projects in software, web, and mobile applications, as well as carrying out information systems audits, security assessments, and software quality assurance in various industries. In addition, he has extensive experience in developing enforceable policies, including information security policies, business continuity policies, and technical documents. He has collaborated on local and international projects with teams from the Czech Republic, Norway, Japan, the Middle East, and the USA. He earned a lot of real-world experience from working with Leadership, Management, and Operations teams to understand business challenges, goals, and execution issues.        </p>

            </Col>

            <Col md={4}>
              <img
                className="img-responsive"
                src="/assets/images/team/sm2.jpeg"
                alt=""
              />

            </Col>
            <p>Mamun is a visionary, and divergent thinker. He is a CISA (Certified Information Systems Auditor), SWIFT Certified Professional, ACP (Acunetix Certified Professional), and MCP (Microsoft Certified Professional) certified individual. He has professional training in information security, audit & forensics, and Cisco networking.</p>
            <p>Mamun holds a Bachelor's degree in Computer Science & Engineering and is particularly interested in Operations and Management, Information Security & Forensics, IT/IS auditing, and ICT Development. He is committed to keeping abreast of the most recent developments in the industry and is constantly seeking opportunities to work with other experts.”</p>
          </Row>





        </Modal.Body>

      </Modal>


      <Modal size="lg" show={show5} onHide={handleClose5}>
        <Modal.Body className=" rounded-3">
          <h5 className='teamTitle'>Mohammed Ziaur Rahman Khan</h5>
          <i style={{ fontSize: "40px" }} className="fab fa-linkedin "></i>

          <Row>
            <Col md={8}>
              <p className='teamDetails'>
                Zia 25-year career spans a wide range of financial and operational responsibilities with Information Technology enabled Service (ITES) companies that have a global grasp. From small, domestically focused Cyber Security companies to Technology companies with complex international structures and remarkable amount of revenue, he has directly wedged financial performance and growth as a member of the C-Suite.              </p>

            </Col>

            <Col md={4}>
              <img
                className="img-responsive"
                src= "/assets/images/team/zia.jpeg"
                alt=""
              />

            </Col>
            <p>Zia has managed worldwide teams of finance, operations and administration. He has successfully devised and executed financial and strategic reformations, established and maintained relationships with lenders, private equity stakeholders and venture capital. He has led diverse teams in Finance, Sales, Operations, Product, IT, Human Resources, Legal and to drive reduce costs, revenue increases, and improve decision making and strategic planning.</p>
            <p>He also has widespread blends and acquisition knowledge.</p>
          </Row>


        </Modal.Body>

      </Modal>



      <br /><br /><br /></div>
  )
}

export default TopManagement

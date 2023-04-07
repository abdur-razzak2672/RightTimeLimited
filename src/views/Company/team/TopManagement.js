import React,{ useState} from 'react'
import { Button,Col,Form,Modal, Row } from 'react-bootstrap';

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
       <section className="section-padding--bottom section-padding--top">
        <div className="container">
        <h3 className="blog-card-one__title blog-details__title" style={{color:"#17224d"}} >Top Management</h3>


          <div className="body1">
            <section className="container">
              <div className="row active-with-click grid">
                <div className="grid-item">
                  <article className="material-card Red">
                    <a onClick={handleShow} href='javascript:void(0)'>
                       <h2 className="h21 text-light">
                      <span>Sahaly Yasmin Bhuiyan</span>
                      <strong>
                        Chairman
                      </strong>
                     </h2>
                    </a>
                   
                    <div className="mc-content" style={{height:"320px"}} >
                      <div className="img-container">
                      <img
                         className = "img-responsive"
                          src= "/assets/images/team/mam.jpg"
                          alt=""
                        />
                        
                       </div>
                      <div className="mc-description mt-3">Chairman of the company.</div>
                    </div>
                    <a className="mc-btn-action">
                      <i className="fa fa-bars"></i>
                    </a>
                    <div className="mc-footer">
                      <a href="/facebook" style={{backgroundColor:"#3b5998",paddingLeft:"15px",borderRadius:"15px"}} className="fab fa-facebook-f "></a>
                      <a href="/facebook" style={{backgroundColor:"#00acee",paddingLeft:"15px",borderRadius:"15px"}} className="fab fa-twitter"></a>
                      <a href="/facebook" style={{backgroundColor:"#0A66C2",paddingLeft:"15px",borderRadius:"15px"}} className="fab fa-linkedin"></a>
                      <a href="/facebook" style={{backgroundColor:" #e95950",paddingLeft:"15px",borderRadius:"12px"}} className="fab fa-instagram"></a>
                    </div>
                  </article>
                </div>
                <div className="grid-item">
                  <article className="material-card Pink">
                  <a onClick={handleShow1} href='javascript:void(0)'>
                    <h2 className="h21 text-light">
                      <span>Mohammad Tohidur Rahman Bhuiyan</span>
                      <strong>
                        <i className="fa fa-fw fa-star"></i>
                        MD & CEO and Lead Assessor
                      </strong>
                    </h2>
                    </a>
                    <div className="mc-content" style={{height:"320px"}} >
                      <div className="img-container">
                         <img
                         className = "img-responsive"
                         src= "/assets/images/team/Mohammad Tohidur Rahman Bhuiyan.jpg"
                         alt=""
                        />
                      </div>
                      <div className="mc-description mt-3">
                        <p>MD & CEO and Lead Assessor of the company</p>
                      </div>
                    </div>
                    <a className="mc-btn-action">
                      <i className="fa fa-bars"></i>
                    </a>
                      <div className="mc-footer">
                      <a href="/facebook" style={{backgroundColor:"#3b5998",paddingLeft:"15px",borderRadius:"15px"}} className="fab fa-facebook-f "></a>
                      <a href="/facebook" style={{backgroundColor:"#00acee",paddingLeft:"15px",borderRadius:"15px"}} className="fab fa-twitter"></a>
                      <a href="/facebook" style={{backgroundColor:"#0A66C2",paddingLeft:"15px",borderRadius:"15px"}} className="fab fa-linkedin"></a>
                      <a href="/facebook" style={{backgroundColor:" #e95950",paddingLeft:"15px",borderRadius:"12px"}} className="fab fa-instagram"></a>
                    </div>
                  </article>
                </div>
                <div className="grid-item">
                  <article className="material-card Purple">
                  <a onClick={handleShow2} href='javascript:void(0)'>
                    <h2 className="h21 text-light">
                      <span>Dr. Touuhid Bhuiyan</span>
                      <strong>
                        <i className="fa fa-fw fa-star"></i>
                        DIRECTOR, STRATEGIC PLANNING AND DEVELOPMENT
                      </strong>
                    </h2>
                    </a>
                    <div className="mc-content" style={{height:"320px"}} >
                      <div className="img-container">
                      <img
                         className = "img-responsive"
                          src= "/assets/images/team/Photo1.jpeg"
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
                      <a href="/facebook" style={{backgroundColor:"#3b5998",paddingLeft:"15px",borderRadius:"15px"}} className="fab fa-facebook-f "></a>
                      <a href="/facebook" style={{backgroundColor:"#00acee",paddingLeft:"15px",borderRadius:"15px"}} className="fab fa-twitter"></a>
                      <a href="/facebook" style={{backgroundColor:"#0A66C2",paddingLeft:"15px",borderRadius:"15px"}} className="fab fa-linkedin"></a>
                      <a href="/facebook" style={{backgroundColor:" #e95950",paddingLeft:"15px",borderRadius:"12px"}} className="fab fa-instagram"></a>
                    </div>
                  </article>
                </div>

                <div className="grid-item">
                  <article className="material-card Deep-Purple">
                  <a onClick={handleShow6} href='javascript:void(0)'>
                    <h2 className="h21 text-light">
                      <span>Md. Rokanuzzaman</span>
                      <strong>
                        <i className="fa fa-fw fa-star"></i>
                        Chief Information Officer (CIO)
                      </strong>
                    </h2>
                    </a>
                    <div className="mc-content" style={{height:"320px"}} >
                      <div className="img-container">
                        
                        <img
                         className = "img-responsive"
                          src= "/assets/images/team/Rokanuzzaman.jpeg"
                          alt=""
                        />
                      </div>
                      <div className="mc-description mt-3">Chief Information Officer (CIO)</div>
                    </div>
                    <a className="mc-btn-action">
                      <i className="fa fa-bars"></i>
                    </a>
                      <div className="mc-footer">
                      <a href="/facebook" style={{backgroundColor:"#3b5998",paddingLeft:"15px",borderRadius:"15px"}} className="fab fa-facebook-f "></a>
                      <a href="/facebook" style={{backgroundColor:"#00acee",paddingLeft:"15px",borderRadius:"15px"}} className="fab fa-twitter"></a>
                      <a href="/facebook" style={{backgroundColor:"#0A66C2",paddingLeft:"15px",borderRadius:"15px"}} className="fab fa-linkedin"></a>
                      <a href="/facebook" style={{backgroundColor:" #e95950",paddingLeft:"15px",borderRadius:"12px"}} className="fab fa-instagram"></a>
                    </div>
                  </article>
                </div>


                

                <div className="grid-item">
                  <article className="material-card Deep-Purple">
                  <a onClick={handleShow3} href='javascript:void(0)'>
                    <h2 className="h21 text-light">
                      <span>Arshad Mahmud</span>
                      <strong>
                        <i className="fa fa-fw fa-star"></i>
                       COO
                      </strong>
                    </h2>
                    </a>
                    <div className="mc-content" style={{height:"320px"}} >
                      <div className="img-container">
                        
                        <img
                         className = "img-responsive"
                          src= "/assets/images/team/Arshad -PP (New).jpeg"
                          alt=""
                        />
                      </div>
                      <div className="mc-description mt-3">COO</div>
                    </div>
                    <a className="mc-btn-action">
                      <i className="fa fa-bars"></i>
                    </a>
                      <div className="mc-footer">
                      <a href="/facebook" style={{backgroundColor:"#3b5998",paddingLeft:"15px",borderRadius:"15px"}} className="fab fa-facebook-f "></a>
                      <a href="/facebook" style={{backgroundColor:"#00acee",paddingLeft:"15px",borderRadius:"15px"}} className="fab fa-twitter"></a>
                      <a href="/facebook" style={{backgroundColor:"#0A66C2",paddingLeft:"15px",borderRadius:"15px"}} className="fab fa-linkedin"></a>
                      <a href="/facebook" style={{backgroundColor:" #e95950",paddingLeft:"15px",borderRadius:"12px"}} className="fab fa-instagram"></a>
                    </div>
                  </article>
                </div>


                <div className="grid-item">
                  <article className="material-card Indigo">
                  <a onClick={handleShow4} href='javascript:void(0)'>
                    <h2 className="h21 text-light">
                      <span>Md. Shamim Al Mamun</span>
                      <strong>
                        <i className="fa fa-fw fa-star"></i>
                        CHIEF TECHNOLOGY OFFICER (CTO)
                      </strong>
                    </h2>
                    </a>
                    <div className="mc-content" style={{height:"320px"}} >
                      <div className="img-container">
                         <img
                         className = "img-responsive"
                          src= "/assets/images/team/Shamim-PP.jpeg"
                          alt=""
                        />
                      </div>
                      <div className="mc-description mt-3">CHIEF TECHNOLOGY OFFICER (CTO)</div>
                    </div>
                    <a className="mc-btn-action">
                      <i className="fa fa-bars"></i>
                    </a>
                      <div className="mc-footer">
                      <a href="/facebook" style={{backgroundColor:"#3b5998",paddingLeft:"15px",borderRadius:"15px"}} className="fab fa-facebook-f "></a>
                      <a href="/facebook" style={{backgroundColor:"#00acee",paddingLeft:"15px",borderRadius:"15px"}} className="fab fa-twitter"></a>
                      <a href="/facebook" style={{backgroundColor:"#0A66C2",paddingLeft:"15px",borderRadius:"15px"}} className="fab fa-linkedin"></a>
                      <a href="/facebook" style={{backgroundColor:" #e95950",paddingLeft:"15px",borderRadius:"12px"}} className="fab fa-instagram"></a>
                    </div>
                  </article>
                </div>
                <div className="grid-item">
                  <article className="material-card Blue">
                  <a onClick={handleShow5} href='javascript:void(0)'>
                    <h2 className="h21 text-light">
                      <span>Mohammad Ziaul Haque</span>
                      <strong>
                        <i className="fa fa-fw fa-star"></i>
                        CHIEF FINANCIAL OFFICER (CFO)
                      </strong>
                    </h2>
                    </a>
                    <div className="mc-content" style={{height:"320px"}} >
                      <div className="img-container">
                         <img
                         className = "img-responsive"
                          src= "/assets/images/team/Picsart_22-09-17_12-4s9-58-327.jpg"
                          alt=""
                        />
                      </div>
                      <div className="mc-description mt-3">CHIEF FINANCIAL OFFICER (CFO)</div>
                    </div>
                    <a className="mc-btn-action">
                      <i className="fa fa-bars"></i>
                    </a>
                      <div className="mc-footer">
                      <a href="/facebook" style={{backgroundColor:"#3b5998",paddingLeft:"15px",borderRadius:"15px"}} className="fab fa-facebook-f "></a>
                      <a href="/facebook" style={{backgroundColor:"#00acee",paddingLeft:"15px",borderRadius:"15px"}} className="fab fa-twitter"></a>
                      <a href="/facebook" style={{backgroundColor:"#0A66C2",paddingLeft:"15px",borderRadius:"15px"}} className="fab fa-linkedin"></a>
                      <a href="/facebook" style={{backgroundColor:" #e95950",paddingLeft:"15px",borderRadius:"12px"}} className="fab fa-instagram"></a>
                    </div>
                  </article>
                </div>
              </div>
            </section>
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
              src= "/assets/images/team/mam.jpg"
              alt=""
            />

            </Col>
            <p>Being a Security Auditor and Process Auditor, she earned a lot of real-world experience working with more than 450+ Companies across the globe. She collaborates with Strategic Teams, Leadership Teams, Management Teams, and Operations Teams. She understands the business challenges, organization goals, problems with execution, working methods, social variances, etc. She oversees the Quality Assurance Team and serves as a core security assessor in addition to serving as the company’s Chairman.</p>
            <p>Sahaly has certifications in PCI QSA, PCIP, CDCP, Lead Auditor - ISO 9001(QMS), ITIL, and SWIFT.</p>
           </Row>



           
          
        </Modal.Body>
       
      </Modal>


      <Modal   size="lg" show={show1} onHide={handleClose1}>
        <Modal.Body  className=" rounded-3">
          <h5 className='teamTitle'>Dr. Mohammad Tohidur Rahman Bhuiyan</h5>
           <i style={{ fontSize:"40px"}} className="fab fa-linkedin "></i>

           <Row>
            <Col md={8}>
              <p className='teamDetails'>
              Dr. Mohammad Tohidur Rahman Bhuiyan comes with 31+ Years of wide-ranging and adequate acumen in the domain of Information System Security, Governance, Compliance, Enterprise as well as ICT Risk Management, PCI DSS Compliance Validation Services SWIFT Cyber Security Consultation and SWIFT CSP Assessment, ITES Project Handling, Preparatory Consultation for various ISO/ BS Certification, Information System/Information Technology and Cyber Security Assessment/Auditing and Technical Documentation (end to end), etc.              </p>
 
            </Col>

            <Col md={4}>
            <img
              className = "img-responsive"
              src= "/assets/images/team/Mohammad Tohidur Rahman Bhuiyan.jpg"
              alt=""
            />

            </Col>
            <p>He is a visionary, and convergent thinker. Being a Security Auditor and Process Auditor, he earned a lot of real-world experience working with more than 600+ Companies across the globe. He collaborates with Leadership teams, Management teams, and Operations teams and understands the business challenges, organization goals , problems with execution , working methods, social variances, etc.</p>
            <p>Tohid has certifications in PCI QSA, PCIP, CISA, CGEIT, Lead Auditor (ISO 27001 & ISO 9001), BCP & DRP, A+, CDCP, ITIL, Cyber Security & Cyber Forensic, CEH, MCSD, PRINCE2, Acunetix  (VA & PT Tools), CEI (Certified Instructor, EC-Council), SWIFT.</p>
           </Row>



           
          
        </Modal.Body>
       
      </Modal>


      <Modal   size="lg" show={show2} onHide={handleClose2}>
        <Modal.Body  className=" rounded-3">
          <h5 className='teamTitle'>Dr. Touhid Bhuiyan</h5>
           <i style={{ fontSize:"40px"}} className="fab fa-linkedin "></i>

           <Row>
            <Col md={8}>
              <p className='teamDetails'>
              Dr. Touhid, with his 30+ years of experience in Multilayered Business Development, Sales, and Marketing of IT Software Solutions and Services Operational, Management to Leadership Levels, having worked with hundreds of Industry Giants and Consulting & Research Organizations, education sector.              </p>
 
            </Col>

            <Col md={4}>
            <img
              className = "img-responsive"
              src= "/assets/images/team/Photo1.jpeg"

               alt=""
            />

            </Col>
            <p>Dr. Touhid is well known in Bangladesh Government and Private sector as Cyber Security, Cybercrime, and Computer Forensics Analyst. He has more than 30+ years of experience in Computer Network Security, Software Development and with a compact upbringing in Neural Networks, Artificial Intelligence, and Software Development. He has also proven track-records in Research & Development (R&D), His expertise is in Ethical Hacking (Black Box, Gray Box & White Box Penetration Testing), Reverse Engineering in ITES Applications, Network Security Audits, and Software Development. He already had provided security assessments, design, and operational assistance for Mission as well as Business-Critical IT infrastructure for many Domestic and MNC Companies. He worked as a National Cyber Security Consultant – to secure the selected Government online portal, collaborated by UNDP, a2i – ICT Division of Bangladesh Government.</p>
            <p>Mr. Touhid did his PhD in Information Security, 2011, Queensland University of Technology, Australia, MSc in Computer Science, 2003, The American University in London, U.K and BSc (Hons) in Computing & Information Systems, 1997, University of London, U.K and Advanced Diploma of Cyber Security, Holmesglen TAFE, Australia, 2021. Besides, he is a qualified Information System auditor i.e. CISA by ISACA, CEH and ISO 27001 Lead Auditor. He has been a Cyber Security faculty for the last 15+ years and guest speaker (Cyber Security) at different universities in Bangladesh and abroad and to other Co-Op Banks for Cyber Security.</p>
           </Row>



           
          
        </Modal.Body>
       
      </Modal>


      <Modal   size="lg" show={show6} onHide={handleClose6}>
        <Modal.Body  className=" rounded-3">
          <h5 className='teamTitle'>Md. Rokanuzzaman</h5>
           <i style={{ fontSize:"40px"}} className="fab fa-linkedin "></i>

           <Row>
            <Col md={8}>
              <p className='teamDetails'>
              Chief Information Officer (CIO)   </p>
               
            </Col>

            <Col md={4}>
            <img
              className = "img-responsive"
              src= "/assets/images/team/Rokanuzzaman.jpeg"
              alt=""
            />

            </Col>
           
           </Row>



           
          
        </Modal.Body>
       
      </Modal>



      <Modal   size="lg" show={show3} onHide={handleClose3}>
        <Modal.Body  className=" rounded-3">
          <h5 className='teamTitle'>Arshad Mahmud</h5>
           <i style={{ fontSize:"40px"}} className="fab fa-linkedin "></i>

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
              className = "img-responsive"
              src= "/assets/images/team/Arshad -PP (New).jpeg"
              alt=""
            />

            </Col>
            <p>His expertise in managed services, security testing, and IT Governance, Compliance, and Risk Management (GRC) is acknowledged on a global scale. </p>
            <p>Arshad is certified in CISA, CISM, SWIFT, and CEH.</p>
           </Row>



           
          
        </Modal.Body>
       
      </Modal>


      <Modal   size="lg" show={show4} onHide={handleClose4}>
        <Modal.Body  className=" rounded-3">
          <h5 className='teamTitle'>MD. SHAMIM AL MAMUN </h5>
           <i style={{ fontSize:"40px"}} className="fab fa-linkedin "></i>

           <Row>
            <Col md={8}>
              <p className='teamDetails'>
              Shamim is responsible for developing, managing, and executing our top-tier Security Consultation and Security Assessment service for our clients. He is also in charge of the Right Time Limited IT Security and IT-GRC Platform and other related product lines.                 </p>
 
            </Col>

            <Col md={4}>
            <img
              className = "img-responsive"
              src= "/assets/images/team/Shamim-PP.jpeg"
              alt=""
            />

            </Col>
            <p>He has wide-range of experience both locally and internationally throughout the whole technology stack, including product architecture, design, development, and operations. He plays a significant role to the development of Solutions as well as to the management of IT operations, customer service (particularly in the field of cyber security) for Right Time Limited. He has around 15+ years of experience taken as a whole, 10 years of which are in Security Assessment [mostly Vulnerability Assessment & Penetration Testing (VA & PT)].</p>
            <p>He has a Bachelor’s degree in Computer Science and engineering (CSE). Besides, he is a CISA, MCP, Acunetix, and SWIFT certified professional.</p>
           </Row>



           
          
        </Modal.Body>
       
      </Modal>


      <Modal   size="lg" show={show5} onHide={handleClose5}>
        <Modal.Body  className=" rounded-3">
          <h5 className='teamTitle'>MOHAMMAD ZIAUL HAQUE</h5>
           <i style={{ fontSize:"40px"}} className="fab fa-linkedin "></i>

           <Row>
            <Col md={8}>
              <p className='teamDetails'>
              Zia 25-year career spans a wide range of financial and operational responsibilities with Information Technology enabled Service (ITES) companies that have a global grasp. From small, domestically focused Cyber Security companies to Technology companies with complex international structures and remarkable amount of revenue, he has directly wedged financial performance and growth as a member of the C-Suite.              </p>
 
            </Col>

            <Col md={4}>
            <img
              className = "img-responsive"
              src= "/assets/images/team/Picsart_22-09-17_12-49s-58-327.jpg"
              alt=""
            />

            </Col>
            <p>Zia has managed worldwide teams of finance, operations and administration. He has successfully devised and executed financial and strategic reformations, established and maintained relationships with lenders, private equity stakeholders and venture capital. He has led diverse teams in Finance, Sales, Operations, Product, IT, Human Resources, Legal and to drive reduce costs, revenue increases, and improve decision making and strategic planning.</p>
            <p>He also has widespread blends and acquisition knowledge.</p>
           </Row>

  
        </Modal.Body>
       
      </Modal>


 
      <br/><br/><br/></div>
  )
}

export default TopManagement
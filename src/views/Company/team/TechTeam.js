import React,{ useState} from 'react'
import { Button,Col,Form,Modal, Row } from 'react-bootstrap';

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
       <section className="section-padding--bottom section-padding--top">
        <div className="container">
        <h3 className="blog-card-one__title blog-details__title" style={{color:"#17224d",marginTop:"-100px"}} >Technical Team</h3>


          <div className="body1">
            <section className="container">
              <div className="row active-with-click py-5 grid">

              <div className="grid-item">
                  <article className="material-card Pink">
                  <a onClick={handleShow9} href='javascript:void(0)'>
                    <h2 className="h21 text-light">
                      <span>Mohammad Tohidur Rahman Bhuiyan</span>
                      <strong>
                        <i className="fa fa-fw fa-star"></i>
                        Lead Security Practitioner and MD & CEO
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
                        <p>Lead Security Practitioner and MD & CEO</p>
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
                  <article className="material-card Red">
                    <a onClick={handleShow} href='javascript:void(0)'>
                       <h2 className="h21 text-light">
                      <span>Kamrun Nahar</span>
                      <strong>
                      QC & DOCUMENT WRITER
                      </strong>
                     </h2>
                    </a>
                   
                    <div className="mc-content" style={{height:"320px"}} >
                      <div className="img-container">
                      <img
                         className = "img-responsive"
                          src= "/assets/images/team/Kamrun Nahar.jpg"
                          alt=""
                        />
                        
                       </div>
                      <div className="mc-description mt-3"> QC & DOCUMENT WRITER</div>
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
                      <span>Farzana Yeasmin Tinne</span>
                      <strong>
                        <i className="fa fa-fw fa-star"></i>
                        SECURITY ANALYST
                      </strong>
                    </h2>
                    </a>
                    <div className="mc-content" style={{height:"320px"}} >
                      <div className="img-container">
                         <img
                         className = "img-responsive"
                         src= "/assets/images/team/Tinne.jpg"
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
                      <span>Md. Mahmudul Hasan</span>
                      <strong>
                        <i className="fa fa-fw fa-star"></i>
                        SECURITY ANALYST
                      </strong>
                    </h2>
                    </a>
                    <div className="mc-content" style={{height:"320px"}} >
                      <div className="img-container">
                      <img
                         className = "img-responsive"
                          src= "/assets/images/team/Photdo1.jpeg"
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
                      <a href="/facebook" style={{backgroundColor:"#3b5998",paddingLeft:"15px",borderRadius:"15px"}} className="fab fa-facebook-f "></a>
                      <a href="/facebook" style={{backgroundColor:"#00acee",paddingLeft:"15px",borderRadius:"15px"}} className="fab fa-twitter"></a>
                      <a href="/facebook" style={{backgroundColor:"#0A66C2",paddingLeft:"15px",borderRadius:"15px"}} className="fab fa-linkedin"></a>
                      <a href="/facebook" style={{backgroundColor:" #e95950",paddingLeft:"15px",borderRadius:"12px"}} className="fab fa-instagram"></a>
                    </div>
                  </article>
                </div>

                <div className="grid-item ">
                  <article className="material-card Deep-Purple">
                  <a onClick={handleShow3} href='javascript:void(0)'>
                    <h2 className="h21 text-light">
                      <span>Md. Sazzad Hossain</span>
                      <strong>
                        <i className="fa fa-fw fa-star"></i>
                        SECURITY ANALYST
                      </strong>
                    </h2>
                    </a>
                    <div className="mc-content" style={{height:"320px"}} >
                      <div className="img-container">
                        
                        <img
                         className = "img-responsive"
                          src= "/assets/images/team/Sazzad-PP.jpeg"
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
                      <a href="/facebook" style={{backgroundColor:"#3b5998",paddingLeft:"15px",borderRadius:"15px"}} className="fab fa-facebook-f "></a>
                      <a href="/facebook" style={{backgroundColor:"#00acee",paddingLeft:"15px",borderRadius:"15px"}} className="fab fa-twitter"></a>
                      <a href="/facebook" style={{backgroundColor:"#0A66C2",paddingLeft:"15px",borderRadius:"15px"}} className="fab fa-linkedin"></a>
                      <a href="/facebook" style={{backgroundColor:" #e95950",paddingLeft:"15px",borderRadius:"12px"}} className="fab fa-instagram"></a>
                    </div>
                  </article>
                </div>



                <div className="grid-item ">
                  <article className="material-card Deep-Purple">
                  <a onClick={handleShow6} href='javascript:void(0)'>
                    <h2 className="h21 text-light">
                      <span>Md. Sakim Hossain</span>
                      <strong>
                        <i className="fa fa-fw fa-star"></i>
                        SECURITY ANALYST
                      </strong>
                    </h2>
                    </a>
                    <div className="mc-content" style={{height:"320px"}} >
                      <div className="img-container">
                        
                        <img
                         className = "img-responsive"
                          src= "/assets/images/team/Sakim.jpeg"
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
                      <a href="/facebook" style={{backgroundColor:"#3b5998",paddingLeft:"15px",borderRadius:"15px"}} className="fab fa-facebook-f "></a>
                      <a href="/facebook" style={{backgroundColor:"#00acee",paddingLeft:"15px",borderRadius:"15px"}} className="fab fa-twitter"></a>
                      <a href="/facebook" style={{backgroundColor:"#0A66C2",paddingLeft:"15px",borderRadius:"15px"}} className="fab fa-linkedin"></a>
                      <a href="/facebook" style={{backgroundColor:" #e95950",paddingLeft:"15px",borderRadius:"12px"}} className="fab fa-instagram"></a>
                    </div>
                  </article>
                </div>


                <div className="grid-item ">
                  <article className="material-card Deep-Purple">
                  <a onClick={handleShow7} href='javascript:void(0)'>
                    <h2 className="h21 text-light">
                      <span>Md. Abdur Razzak</span>
                      <strong>
                        <i className="fa fa-fw fa-star"></i>
                        SOFTWARE ENGINEER
                      </strong>
                    </h2>
                    </a>
                    <div className="mc-content" style={{height:"320px"}} >
                      <div className="img-container">
                        
                        <img
                         className = "img-responsive"
                          src= "/assets/images/team/razzak1.jpeg"
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
                      <a href="/facebook" style={{backgroundColor:"#3b5998",paddingLeft:"15px",borderRadius:"15px"}} className="fab fa-facebook-f "></a>
                      <a href="/facebook" style={{backgroundColor:"#00acee",paddingLeft:"15px",borderRadius:"15px"}} className="fab fa-twitter"></a>
                      <a href="/facebook" style={{backgroundColor:"#0A66C2",paddingLeft:"15px",borderRadius:"15px"}} className="fab fa-linkedin"></a>
                      <a href="/facebook" style={{backgroundColor:" #e95950",paddingLeft:"15px",borderRadius:"12px"}} className="fab fa-instagram"></a>
                    </div>
                  </article>
                </div>


                <div className="grid-item ">
                  <article className="material-card Deep-Purple">
                  <a onClick={handleShow10} href='javascript:void(0)'>
                    <h2 className="h21 text-light">
                      <span>Sadrin Rahman Bhuiyan Piya</span>
                      <strong>
                        <i className="fa fa-fw fa-star"></i>
                        SECURITY ANALYST 
                      </strong>
                    </h2>
                    </a>
                    <div className="mc-content" style={{height:"320px"}} >
                      <div className="img-container">
                        
                        <img
                         className = "img-responsive"
                          src= "/assets/images/team/sadrin.jpg"
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
                      <a href="/facebook" style={{backgroundColor:"#3b5998",paddingLeft:"15px",borderRadius:"15px"}} className="fab fa-facebook-f "></a>
                      <a href="/facebook" style={{backgroundColor:"#00acee",paddingLeft:"15px",borderRadius:"15px"}} className="fab fa-twitter"></a>
                      <a href="/facebook" style={{backgroundColor:"#0A66C2",paddingLeft:"15px",borderRadius:"15px"}} className="fab fa-linkedin"></a>
                      <a href="/facebook" style={{backgroundColor:" #e95950",paddingLeft:"15px",borderRadius:"12px"}} className="fab fa-instagram"></a>
                    </div>
                  </article>
                </div>



                
                <div className="grid-item ">
                  <article className="material-card Deep-Purple">
                  <a onClick={handleShow8} href='javascript:void(0)'>
                    <h2 className="h21 text-light">
                      <span>Md Mahadi Hasan Heart</span>
                      <strong>
                        <i className="fa fa-fw fa-star"></i>
                        SECURITY ANALYST                      </strong>
                    </h2>
                    </a>
                    <div className="mc-content" style={{height:"320px"}} >
                      <div className="img-container">
                        
                        <img
                         className = "img-responsive"
                         src= "/assets/images/team/mehedi.jpg"

m                          alt=""
                        />
                      </div>
                      <div className="mc-description mt-3">  SECURITY ANALYST

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
                 
                 
              </div>
            </section>
          </div>
        </div>
      </section>


 
 
 
      <Modal   size="lg" show={show} onHide={handleClose}>
        <Modal.Body  className=" rounded-3">
          <h5 className='teamTitle'>KAMRUN NAHAR</h5>
           <i style={{ fontSize:"40px"}} className="fab fa-linkedin "></i>

           <Row>
            <Col md={8}>
              <p className='teamDetails'>
              Nahar achieved adequate acumen in Quality Control and Document (Technical Document) Writing. having 16+ years of experience in Governance, Risk and Compliance profile in various industries like Banking, Information Technology, Telecom, Airlines, Support services etc.              </p>
 
            </Col>

            <Col md={4}>
            <img
              className = "img-responsive"
              src= "/assets/images/team/Kamrun Nahar.jpg"
              alt=""
            />

            </Col>
            <p>She is pioneer in providing quality services in Cyber Security, PCI DSS, GDPR, IT Risk, IT Audit, ISO27001, HIPAA, Business continuity, Sarbanes–Oxley Act, Disaster Recovery, Other Technology driven business operation.</p>
            <p>NAHAR HOLDS - SWIFT PRO, ITIL, LEAD AUDITOR- ISO 9001 (QMS), ACUNETIX PRO</p>
           </Row>



           
          
        </Modal.Body>
       
      </Modal>


      <Modal   size="lg" show={show1} onHide={handleClose1}>
        <Modal.Body  className=" rounded-3">
          <h5 className='teamTitle'>FRAZANA YEASMIN TINNE</h5>
           <i style={{ fontSize:"40px"}} className="fab fa-linkedin "></i>

           <Row>
            <Col md={8}>
              <p className='teamDetails'>
              Farzana is an Information System Professional and her expertise is in Information System Security (specially VA & PT and IS/IT Audit), Compliance, Enterprise Risk Management, IT Enabled Project Handling, Coordination, Preparatory Consultation for various ISO/ BS Certification (e.g. ISO 27001, ISO 9001, ISO 22301 and ISO 20000 etc.), assurance (IS Auditing including Vulnerability assessment & Penetration Testing) etc.</p> 
            </Col>

            <Col md={4}>
            <img
              className = "img-responsive"
              src= "/assets/images/team/Tinne.jpg"
              alt=""
            />

            </Col>
            <p>
She holds Lead Auditor & Lead Implementer Certification on ISO 27001. Besides, she is a SWIFT enlisted Cyber security Consultant and SWIFT CSP Independent Assessor. She poses, CEH and ITIL certification as well.
</p>
            </Row>



           
          
        </Modal.Body>
       
      </Modal>


      <Modal   size="lg" show={show2} onHide={handleClose2}>
        <Modal.Body  className=" rounded-3">
          <h5 className='teamTitle'>MD. MAHMUDUL HASAN</h5>
           <i style={{ fontSize:"40px"}} className="fab fa-linkedin "></i>

           <Row>
            <Col md={8}>
              <p className='teamDetails'>
              Mahmud is a Network professional 10+ years’ experience in Vendor, Telecommunication, IT Network and Security and ISP. Expertise in IT/Data network planning, design, implementation and troubleshoot. A remarkable experience of working in IP/Data/MPBN/IT Network Operation, design, planning and implementation in different projects. He joined Right Time Limited as Senior Security Analyst.</p> 
            </Col>

            <Col md={4}>
            <img
              className = "img-responsive"
              src= "/assets/images/team/Phodto1.jpeg"

               alt=""
            />

            </Col>
            <p>Mahmud participated in various workshop, seminar and events nationally and internationally. He became First Runner-Up of the Cisco SAARC NetRiders Skills Competition, 2008 in Bangalore, India. Holds Vendor Certification on CCNP, CCIP, CCNA Security, ITIL Foundation and RHCE. Did Professional Training on CISSP, CEHv9, CCNP, CCNA, RHCE, SCSA and ITIL Foundation. </p>
            </Row>



           
          
        </Modal.Body>
       
      </Modal>


      <Modal   size="lg" show={show3} onHide={handleClose3}>
        <Modal.Body  className=" rounded-3">
          <h5 className='teamTitle'>MD. SAZZAD HOSSAIN</h5>
           <i style={{ fontSize:"40px"}} className="fab fa-linkedin "></i>

           <Row>
            <Col md={8}>
              <p className='teamDetails'>
              A passionate cyber security specialist, with a primary focus on Security Assessment including Vulnerability Assessment & Penetration Testing (VA & PT) and Red Teaming. He is a positive mind of i individual who is passionate about analyzing Security Infrastructure of ITES organizations and assisting client(s) for a reliable as well as secured environment.              </p>
              <p className='teamDetails'>
              He is SWIFT enlisted Cyber Security Consultant and also enlisted SWIFT CSO Independent Assessor. Besides, he holds the Certified Ethical Hacker (CEH) certificate.        </p>
             
            </Col>

            <Col md={4}>
            <img
              className = "img-responsive"
              src= "/assets/images/team/Sazzad-PP.jpeg"
              alt=""
            />

            </Col>
        
           </Row>



           
          
        </Modal.Body>
       
      </Modal>


      
     



      <Modal   size="lg" show={show6} onHide={handleClose6}>
        <Modal.Body  className=" rounded-3">
          <h5 className='teamTitle'>Md. Sakim Hossain</h5>
           <i style={{ fontSize:"40px"}} className="fab fa-linkedin "></i>

           <Row>
            <Col md={8}>
              <p className='teamDetails'>SECURITY ANALYST</p>
                
            </Col>

            <Col md={4}>
            <img
              className = "img-responsive"
              src= "/assets/images/team/Sakim.jpeg"
              alt=""
            />

            </Col>
        
           </Row>



           
          
        </Modal.Body>
       
      </Modal>




      <Modal   size="lg" show={show7} onHide={handleClose7}>
        <Modal.Body  className=" rounded-3">
          <h5 className='teamTitle'>Md. Abdur Razzak</h5>
           <i style={{ fontSize:"40px"}} className="fab fa-linkedin "></i>

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
              className = "img-responsive"
              src= "/assets/images/team/razzak1.jpeg"
              alt=""
            />

            </Col>

            
<p className='teamDetails'> Additionally,  Abdur Razzak's proficiency in Django allows him to build robust back-end systems that power the web applications he develops. He is able to create RESTful APIs, handle database management, and implement complex business logic.</p>
<p className='teamDetails'>Overall,   Abdur Razzak's skills as a full stack developer make him a valuable asset to any software development team. His ability to work with a variety of programming languages and frameworks makes him adaptable and versatile in his approach to development. </p>
         
           </Row>



           
          
        </Modal.Body>
       
      </Modal>


      <Modal   size="lg" show={show8} onHide={handleClose8}>
        <Modal.Body  className=" rounded-3">
          <h5 className='teamTitle'>MD Mahadi Hasan Heart</h5>
           <i style={{ fontSize:"40px"}} className="fab fa-linkedin "></i>

           <Row>
            <Col md={8}>
              <p className='teamDetails'>SECURITY ANALYST</p>
             
              
            </Col>

            <Col md={4}>
            <img
              className = "img-responsive"
              src= "/assets/images/team/mehedi.jpg"

               alt=""
            />

            </Col>
        
           </Row>



           
          
        </Modal.Body>
       
      </Modal>


      <Modal   size="lg" show={show10} onHide={handleClose10}>
        <Modal.Body  className=" rounded-3">
          <h5 className='teamTitle'>Sadrin Rahman Bhuiyan Piya</h5>
           <i style={{ fontSize:"40px"}} className="fab fa-linkedin "></i>

           <Row>
            <Col md={8}>
              <p className='teamDetails'>SECURITY ANALYST</p>
             
              
            </Col>

            <Col md={4}>
            <img
              className = "img-responsive"
              src= "/assets/images/team/sadrin.jpg"

               alt=""
            />

            </Col>
        
           </Row>



           
          
        </Modal.Body>
       
      </Modal>



      
      <Modal   size="lg" show={show9} onHide={handleClose9}>
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









      

 
      <br/><br/><br/></div>
  )
}

export default TechTeam
import React,{ useState} from 'react'
import { Button,Col,Form,Modal, Row } from 'react-bootstrap';

function RegionalLeader() {
  const [show, setShow] = useState(false);

  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show12, setShow12] = useState(false);

  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  const handleClose12 = () => setShow12(false);
  const handleShow3 = () => setShow3(true);
  const handleClose4 = () => setShow4(false);
  const handleShow4 = () => setShow4(true);
  const handleClose5 = () => setShow5(false);
  const handleShow12 = () => setShow12(true);

 





  return (
    <div>
       <section className="section-padding--top">
        <div className="container">
        <h3 className="blog-card-one__title blog-details__title" style={{color:"#17224d",marginTop:"-100px"}} >Regional Leaders</h3>


          <div className="body1">
            <section style={{ paddingBottom: "80px" }}  className="container">
              <div className="">

              <Row>

          <Col md={4} sm={6} xs={12} >
          <article className="material-card mt-5 Red">
                    <a onClick={handleShow} href='javascript:void(0)'>
                       <h2 className="h21 text-light">
                      <span>MR. RASHED SARWAR</span>
                      <strong>
                      COUNTRY DIRECTOR
RIGHT TIME LIMITED
USA
                      </strong>
                     </h2>
                    </a>
                   
                    <div className="mc-content" style={{height:"320px"}} >
                      <div className="img-container">
                      <img
                         className = "img-responsive"
                          src= "/assets/images/team/rashed.jpeg"
                          alt="Rashed"
                        />
                        
                       </div>
                      <div className="mc-description mt-3"> COUNTRY DIRECTOR
RIGHT TIME LIMITED
USA</div>
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

          </Col>
          <Col md={4} sm={6} xs={12} >
          <article className="material-card mt-5 Pink">
                  <a onClick={handleShow1} href='javascript:void(0)'>
                    <h2 className="h21 text-light">
                      <span>MS. MELINDA S.</span>
                      <strong>
                        <i className="fa fa-fw fa-star"></i>
                        COUNTRY DIRECTOR
RIGHT TIME LIMITED
GERMANY
                      </strong>
                    </h2>
                    </a>
                    <div className="mc-content" style={{height:"320px"}} >
                      <div className="img-container">
                         <img
                         className = "img-responsive"
                         src= "/assets/images/team/linda.jpg"
                         alt="Linda"
                        />
                      </div>
                      <div className="mc-description mt-3">
                        <p>COUNTRY DIRECTOR
RIGHT TIME LIMITED
GERMANY</p>
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

          </Col>
          <Col md={4} sm={6} xs={12}>
                    <article className="material-card mt-5  Purple">
                      <a onClick={handleShow12} href='javascript:void(0)'>
                        <h2 className="h21 text-light">
                          <span>DR. TOUHID BHUIYAN</span>
                          <strong>
                            <i className="fa fa-fw fa-star"></i>
                            COUNTRY DIRECTOR
RIGHT TIME LIMITED
AUSTRALIA
                          </strong>
                        </h2>
                      </a>
                      <div className="mc-content" style={{ height: "320px" }} >
                        <div className="img-container">
                          <img
                            className="img-responsive"
                            src="/assets/images/team/Photo1.jpeg"
                            alt=""
                          />

                        </div>
                        <div className="mc-description mt-3">
                        COUNTRY DIRECTOR
RIGHT TIME LIMITED
AUSTRALIA                        </div>
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



 
 
      <Modal   size="lg" show={show} onHide={handleClose}>
        <Modal.Body  className=" rounded-3">
          <h5 className='teamTitle'>MR. RASHED SARWAR</h5>
           <i style={{ fontSize:"40px"}} className="fab fa-linkedin "></i>

           <Row>
            <Col md={8}>
              <p className='teamDetails'>
              Rashed is in charge  of managing and providing all business verticals  for Right Time Limited to all customers in the US region.              </p>
 <p>He has over 25+ years of experience conducting security assessments and providing consulting  services to customers in Banking, Financial Services, and Insurance `(BFSI), Payment Industry, and IT Service sector. He   worked for numerous ITES organizations in different regions and countries. He was in charge of completing projects,  including IT security vulnerability assessments, network and application penetration testing, organizational security implementation reviews, and regulatory compliance reviews.</p>
            </Col>

            <Col md={4}>
            <img
              className = "img-responsive"
              src= "/assets/images/team/rashed.jpeg"
              alt="Rashed"
            />

            </Col>
             <p>He is officially recognized for his work in ICT network and development. 
</p>
           </Row>



           
          
        </Modal.Body>
       
      </Modal>
      <Modal size="lg" show={show12} onHide={handleClose12}>
        <Modal.Body className=" rounded-3">
          <h5 className='teamTitle'>DR. TOUHID BHUIYAN</h5>
          <i style={{ fontSize: "40px" }} className="fab fa-linkedin "></i>

          <Row>
            <Col md={8}>
              <p className='teamDetails'>
                Dr. Touhid, with his 30+ years of experience in Multilayered Business Development, Sales, and Marketing of IT Software Solutions and Services Operational, Management to Leadership Levels, having worked with hundreds of Industry Giants and Consulting & Research Organizations, education sector.              </p>

            </Col>

            <Col md={4}>
              <img
                className="img-responsive"
                src="/assets/images/team/Photo1.jpeg"

                alt=""
              />

            </Col>
            <p>Dr. Touhid, Joined in "Right Time Limited as the Country Director, Australia. He is well known in Bangladesh Government and Private sector as Cyber Security, Cybercrime, and Computer Forensics Analyst. He has more than 30+ years of experience in Computer Network Security, Software Development and with a compact upbringing in Neural Networks, Artificial Intelligence, and Software Development. He has also proven track-records in Research & Development (R&D), His expertise is in Ethical Hacking (Black Box, Gray Box & White Box Penetration Testing), Reverse Engineering in ITES Applications, Network Security Audits, and Software Development. He already had provided security assessments, design, and operational assistance for Mission as well as Business-Critical IT infrastructure for many Domestic and MNC Companies. He worked as a National Cyber Security Consultant – to secure the selected Government online portal, collaborated by UNDP, a2i – ICT Division of Bangladesh Government.</p>
            <p>Mr. Touhid did his PhD in Information Security, 2011, Queensland University of Technology, Australia, MSc in Computer Science, 2003, The American University in London, U.K and BSc (Hons) in Computing & Information Systems, 1997, University of London, U.K and Advanced Diploma of Cyber Security, Holmesglen TAFE, Australia, 2021. Besides, he is a qualified Information System auditor i.e. CISA by ISACA, CEH and ISO 27001 Lead Auditor. He has been a Cyber Security faculty for the last 15+ years and guest speaker (Cyber Security) at different universities in Bangladesh and abroad and to other Co-Op Banks for Cyber Security.</p>
          </Row>





        </Modal.Body>

      </Modal>



      <Modal   size="lg" show={show1} onHide={handleClose1}>
        <Modal.Body  className=" rounded-3">
          <h5 className='teamTitle'>MS. MELINDA S.</h5>
           <i style={{ fontSize:"40px"}} className="fab fa-linkedin "></i>

           <Row>
            <Col md={8}>
              <p className='teamDetails'>
              Miss Melinda has over 15 years of operational and decision-making management experience in cultivating and growing international organizations in the various verticals of Information technology enabled Services (ITES) organization. Her area of competence is in implementing information management systems into place in different ITES Organizations.</p>
 
            </Col>

            <Col md={4}>
            <img
              className = "img-responsive"
              src= "/assets/images/team/linda.jpg"
              alt="Rashed"
            />

            </Col>
            <p>
Miss Melinda has extensive experience developing, inculcating, and implementing international standards for management systems and achieving operational excellence. She focuses on Systems, People, and Supervision to build high-performance teams that produce sustainable business outcomes.
</p>
            </Row>



           
          
        </Modal.Body>
       
      </Modal>


      <Modal   size="lg" show={show2} onHide={handleClose2}>
        <Modal.Body  className=" rounded-3">
          <h5 className='teamTitle'>Rahim</h5>
           <i style={{ fontSize:"40px"}} className="fab fa-linkedin "></i>

           <Row>
            <Col md={8}>
              <p className='teamDetails'>
              Rahim is in charge  ofall Business, operations, and technical activities, including management and provision  of Right Time Limited services in Australia. </p>
              <p>Rahim has over 20 years of experience in the security and information technology industry.</p> 
            </Col>

            <Col md={4}>
            <img
              className = "img-responsive"
              src= "/assets/images/team/user.jpg"

               alt=""
            />

            </Col>
            <p>His  knowledge includes performing and managing a variety of IT projects and Audits, Network Security Assessments, Network/Application Security and Architecture Design, and Information Security Technical documentation (Policy, Process, and Guidelines) development projects. </p>
            <p>He  earned a PhD in Business Management systems from the University of XXX.</p>
           </Row>



           
          
        </Modal.Body>
       
      </Modal>

 

 
      <br/><br/><br/></div>
  )
}

export default RegionalLeader
import React,{ useState} from 'react'
import { Button,Col,Form,Modal, Row } from 'react-bootstrap';

function RegionalLeader() {
  const [show, setShow] = useState(false);

  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  
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
                      <span>Rashed</span>
                      <strong>
                      PRESIDENT, RIGHT TIME LIMITED; USA
                      </strong>
                     </h2>
                    </a>
                   
                    <div className="mc-content" style={{height:"320px"}} >
                      <div className="img-container">
                      <img
                         className = "img-responsive"
                          src= "/assets/images/team/user.jpg"
                          alt=""
                        />
                        
                       </div>
                      <div className="mc-description mt-3"> PRESIDENT, RIGHT TIME LIMITED; USA</div>
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
                      <span>Linda</span>
                      <strong>
                        <i className="fa fa-fw fa-star"></i>
                        PRESIDENT, RIGHT TIME LIMITED; GERMANY
                      </strong>
                    </h2>
                    </a>
                    <div className="mc-content" style={{height:"320px"}} >
                      <div className="img-container">
                         <img
                         className = "img-responsive"
                         src= "/assets/images/team/user.jpg"
                         alt=""
                        />
                      </div>
                      <div className="mc-description mt-3">
                        <p>PRESIDENT, RIGHT TIME LIMITED; GERMANY</p>
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
          <Col md={4} sm={6} xs={12} >
          <article className="material-card mt-5 Purple">
                  <a onClick={handleShow2} href='javascript:void(0)'>
                    <h2 className="h21 text-light">
                      <span>Rahim</span>
                      <strong>
                        <i className="fa fa-fw fa-star"></i>
                        PRESIDENT, RIGHT TIME LIMITED; AUSTRALIA
                      </strong>
                    </h2>
                    </a>
                    <div className="mc-content" style={{height:"320px"}} >
                      <div className="img-container">
                      <img
                         className = "img-responsive"
                         src= "/assets/images/team/user.jpg"
                         alt=""
                        />
                         
                      </div>
                      <div className="mc-description mt-3">
                      PRESIDENT, RIGHT TIME LIMITED; AUSTRALIA
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
          </Row>



                

                
                 
              </div>
            </section>
          </div>
        </div>
      </section>



 
 
      <Modal   size="lg" show={show} onHide={handleClose}>
        <Modal.Body  className=" rounded-3">
          <h5 className='teamTitle'>Rashed</h5>
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
              src= "/assets/images/team/user.jpg"
              alt=""
            />

            </Col>
             <p>He is officially recognized for his work in ICT network and development. 
</p>
           </Row>



           
          
        </Modal.Body>
       
      </Modal>


      <Modal   size="lg" show={show1} onHide={handleClose1}>
        <Modal.Body  className=" rounded-3">
          <h5 className='teamTitle'>Linda</h5>
           <i style={{ fontSize:"40px"}} className="fab fa-linkedin "></i>

           <Row>
            <Col md={8}>
              <p className='teamDetails'>
              Miss Melinda has over 15 years of operational and decision-making management experience in cultivating and growing international organizations in the various verticals of Information technology enabled Services (ITES) organization. Her area of competence is in implementing information management systems into place in different ITES Organizations.</p>
 
            </Col>

            <Col md={4}>
            <img
              className = "img-responsive"
              src= "/assets/images/team/user.jpg"
              alt=""
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
import React,{ useState} from 'react'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';

function AdvisoryBoard() {
 
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
      <div className="page-header">
        <div
          className="page-header__bg"
           style={{backgroundImage: `url('../images/resources/aboutbg1.png')`}}

        ></div>
        <div className="container">
          <ul className="thm-breadcrumb list-unstyled">
            <li>
              <a href="/">Home</a>
            </li>
            <li>Advisory Board</li>
          </ul>
          <h2 className="page-header__title">Member Of Advisory Board</h2>
        </div>
      </div>

       <div>
      <section className="section-padding--top text-center">
        <div className="container">
          <h3 className="blog-card-one__title blog-details__title" style={{ color: "#17224d" }} >Member Of Advisory Board</h3>
 

          <div>
            <section style={{ paddingBottom: "80px" }} className="container ">
              <div className="">

                <Row className=' d-flex justify-content-center'>

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


      <Modal size="lg" show={show12} onHide={handleClose12}>
        <Modal.Body className=" rounded-3">
          <h5 className='teamTitle'>Rahim</h5>
          <i style={{ fontSize: "40px" }} className="fab fa-linkedin "></i>

          <Row>
            <Col md={8}>
              <p className='teamDetails textJustify'>
                Rahim is in charge  ofall Business, operations, and technical activities, including management and provision  of Right Time Limited services in Australia. </p>
              <p>Rahim has over 20 years of experience in the security and information technology industry.</p>
            </Col>

            <Col md={4}>
              <img
                className="img-responsive"
                src="/assets/images/team/user.jpg"

                alt=""
              />

            </Col>
            <p>His  knowledge includes performing and managing a variety of IT projects and Audits, Network Security Assessments, Network/Application Security and Architecture Design, and Information Security Technical documentation (Policy, Process, and Guidelines) development projects. </p>
            <p>He  earned a PhD in Business Management systems from the University of XXX.</p>
          </Row>





        </Modal.Body>

      </Modal>




      <br /><br /><br /></div>



 
      <br/><br/><br/></div>
  )
}

export default AdvisoryBoard
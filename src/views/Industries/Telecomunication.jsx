import React,{ useState} from 'react'
import IndustriesNav from './IndustriesNav'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
function Telecomunication() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    
    <div>
     <div className="page-header">
        <div className="page-header__bg"
             style={{backgroundImage: `url('assets/images/background/tele.png')` }}></div>
    
        <div className="container">
            <ul className="thm-breadcrumb list-unstyled">
                <li><a href="/">Home</a></li>
                <li>Telecommunications</li>
            </ul>
            <h2 className="page-header__title">Telecommunications</h2> 
        </div> 
    </div> 

    <section className="section-padding--bottom section-padding--top">
        <div className="container">
            <div className="row">
                <div className="col-lg-8">


                    <h3 className="blog-card-one__title blog-details__title" style={{color:"orange"}}>Telecommunications</h3>
                    <div className="blog-details__content">
                        <p>Telecom companies have long been a high value target for cybercriminals and nation state actors because they maintain and operate critical
                        communications infrastructure which is used to transmit and store large amounts of private and sensitive data.
                        Nation state actors are increasingly targeting telecommunications providers, their infrastructure and
                        their operations in order to establish covert surveillance over infiltrated networks and allow them to operate undetected over the long term.
                        Over the last few years we have seen highly sophisticated actors infiltrate telecom providers in order to conduct surveillance of phone lines,
                        mobile data and IM/video calls, such attacks are difficult to detect and remediate.</p>
 <p>Some of the largest intelligence coups in history have been the result of the compromise of telecommunications systems.
 For as long as messages have been passed between people, whether in writing or orally, knowledge of their content by third parties has been a goal of nation-states and bad actors. </p>

<p>Manipulating communication processes, by injecting false information or degrading the speed and quality of traffic, has also been ubiquitous over time. Being the first to know — or better yet, to know something when your opponent or competitor doesn’t know you know — is a distinct advantage to protecting sensitive information.
</p>
                    <br/>

                    <h4>Why Choose Right Time Limited?</h4>
<p>Right Time Limited aims to support telecom companies in countering the threats facing the industry.
Due our vast experience working within telecom sector, we have unique insight about the vulnerabilities and how they may be exploited.
We can leverage our cyber security expertise to identify gaps in the security architecture.
Additionally, our Application Security and Penetration testing services can help telecoms create secure applications and infrastructure resilient to penetration.</p>

                    <br/>

                    </div> 
                    <br/>
                    <Button style={{backgroundColor:"#fd7e14"}} onClick={handleShow}>Contact Us</Button>

                </div> 
                <div className="col-lg-4">
                    <div className="sidebar">
                        <div className="sidebar__item sidebar__item--category">
                            <IndustriesNav/>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Modal show={show} onHide={handleClose}>
        <Modal.Body  className="bg-dark">
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className ="text-light">Name</Form.Label>
              <Form.Control
                type="input"
                placeholder="name"
                autoFocus
              />
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
              <Form.Label>Subject</Form.Label>
              <Form.Control
                type="input"
                placeholder="subject"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Details</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
          <Modal.Footer className = "bg-dark">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button style={{backgroundColor:"#fd7e14"}} onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
          
        </Modal.Body>
       
      </Modal><br/><br/>
      
    </div>
  )
}

export default Telecomunication

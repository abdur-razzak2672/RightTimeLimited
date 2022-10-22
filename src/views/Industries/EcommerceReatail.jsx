import React,{ useState} from 'react'
import IndustriesNav from './IndustriesNav'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
function EcommerceReatail() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
        <div className="page-header">
        <div className="page-header__bg"
             style={{backgroundImage: `url('/assets/images/background/ecom.png')`}}></div>
   
        <div className="container">
            <ul className="thm-breadcrumb list-unstyled">
                <li><a href="/">Home</a></li>
                <li>eCommerce & Retail Merchants</li>
            </ul>
            <h2 className="page-header__title">eCommerce & Retail Merchants</h2> 
        </div> 
    </div> 

    <section className="section-padding--bottom section-padding--top">
        <div className="container">
            <div className="row">
                <div className="col-lg-8">


                    <h3 className="blog-card-one__title blog-details__title" style={{ color: "orange" }}  >E-Commerce and Retails Merchentant</h3>
                    <div className="blog-details__content">
                        <p>E-commerce and Retail companies are high on hacker lists, and recent reports highlight the number of cyber attacks on the sector.
                        As E-commerce and retailers handle millions of transactions each year, attackers with the ability to compromise networks gain access to huge blocks of data that can be forged or sold online.
                        As skimming, Point of Sale (POS) compromise, phishing, ransomware, web applications and denial of service attacks increase, organizations must continually improve their security controls..</p>

                        <br/>
                        <h4 style={{ color: "orange" }} >How Can Right Time Limited Help?</h4>
                        <p>Achieving regulatory and compliance security requirements is more demanding every year; Right Time Limited is positioned to help you meet your responsibilities.
                        With 13 years of experience working within retail, our security specialists better understand the challenges your organization faces.
                        We provide the advisory to satisfy PCI DSS, P2PE, GDPR and POPIA standards and regulations. In addition, we are also focused on -
                        <ul>
                        <li>Protecting sensitive customer PII and card payment data.</li>
                        <li>Detecting and responding to cyber-attacks and breaches.</li>
                        <li>Security Assessment and Testing.</li>
                        <li>Regulatory and compliance requirements.</li>
                        <li>Incident Response Maturity capability.</li>
                        <li>Supporting legacy systems and accessibility.</li>
                        <li>Helping newcomers to the payments industry to learn the standards and pass their first full assessment.</li>
                        <li>Guidance to reduce the scope of payment industry standards as much as possible by segmenting and implementing technologies such as encryption or tokenization.on.</li>
                        <li>Helping you select controls that fit your business and operations</li>
                        <li>Providing guidance for developing procedures that protect your front-line associates.</li>
                        <li>Verifying that controls are working as intended.</li>

                        </ul>

                        </p>

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
        <Modal.Body  className="bg-dark rounded-3">
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
       
      </Modal>
<br/>
    <br/>
    <br/>
      
    </div>
  )
}

export default EcommerceReatail

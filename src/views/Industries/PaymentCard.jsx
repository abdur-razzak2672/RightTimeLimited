import React,{ useState} from 'react'
import IndustriesNav from './IndustriesNav'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
function PaymentCard() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    
    <div>
    <div className="page-header">
        <div className="page-header__bg"
             style={{backgroundImage: `url('assets/images/background/bank.png')`}}></div>
    
        <div className="container">
            <ul className="thm-breadcrumb list-unstyled">
                <li><a href="/">Home</a></li>
                <li>Payment Card Industry</li>
            </ul>
            <h2 className="page-header__title">Payment Card Industry</h2>
        </div>
    </div>

    <section className="section-padding--bottom section-padding--top">
        <div className="container">
            <div className="row">
                <div className="col-lg-8">


                    <h3 className="blog-card-one__title blog-details__title" style={{color:"orange"}} >Payment Card Industries</h3>
                    <div className="blog-details__content">
                        <p>Online payment is getting more and more common as enterprises utilize an online payment system, which brings convenience to the public and to the online consumer market.
                        By providing secure online payment to customers, enterprises have to implement security controls in order to protect cardholder and payment information.
                        If payment information is leaked, it can create a huge losses for the cardholder as well as the organization’s reputation, brand, and image.
                        Right Time can help by providing a PCI data-security audit to ensure that your organization’s payment system is secure thus garnering trust from customers with their sensitive payment card information.</p>
                    </div>
                    <br/>
                    <Button variant="primary" onClick={handleShow}>Contact Us</Button>


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
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
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
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal><br/><br/><br/>

      
    </div>
  )
}

export default PaymentCard

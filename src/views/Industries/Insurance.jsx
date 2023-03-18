import React,{ useState} from 'react'
import IndustriesNav from './IndustriesNav'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
function Insurance() {
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
                <li> 	Insurance</li>
            </ul>
            <h2 className="page-header__title">  	Insurance</h2> 
        </div> 
    </div> 

    <section className="section-padding--bottom section-padding--top">
        <div className="container">
            <div className="row">
                <div className="col-lg-8">


                    <h3 className="blog-card-one__title blog-details__title" style={{ color: "orange" }}  > 	A Lucrative Target</h3>
                    <div className="blog-details__content">
                        <p>The insurance industry deals in vast amounts of confidential information about customers. Databases store information about credit cards, health insurance, among others. As a result, insurance companies are potential targets for attacks by cyber criminals. A security breach can be extremely damaging for insurance companies. Consequences can be negative press, loss of customer trust, and even decrease in business profits. Simultaneously, breaches can leave the customers open to identity theft, fraudulent payments & other attacks. Considering this, it is crucial that Cyber Security in Insurance industry not be ignored.</p>
                        <p>However, new regulations mandate insurers to maintain customer data in secure environments. Furthermore, insurers must be able to demonstrate compliance to security standards. Failing this, insurers can be fined high penalties for non-compliance.</p>
 



                        <br/>
                        <h4 style={{ color: "orange" }} >Who Should be Prepared?</h4>
                        <p>Insurers could be a merchant or a financial institution. In either case, they accept and store payment and other details for insurance policy premiums. Regardless, each of these types has to comply as per specific PCI and ISMS Compliance standards.</p>
                         
                        <br/>
                        <h4 style={{ color: "orange" }} >How Can Panacea Help?</h4>
                        <p>Panacea InfoSec, bring years of experience in implementing PCI and Information Security standards in a variety of industries. We can guide insurers in achieving total compliance to PCI DSS and ISMS. Additionally, we can ensure implementation of cyber security in insurance workflows. Thereby, providing a secure environment and applications for clients.</p>
                         

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

 

 
export default Insurance
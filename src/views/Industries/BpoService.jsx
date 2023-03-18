import React,{ useState} from 'react'
import IndustriesNav from './IndustriesNav'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
function BpoService() {
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
                <li>  IT and BPO Services</li>
            </ul>
            <h2 className="page-header__title">  IT and BPO Services</h2> 
        </div> 
    </div> 

    <section className="section-padding--bottom section-padding--top">
        <div className="container">
            <div className="row">
                <div className="col-lg-8">


                    <h3 className="blog-card-one__title blog-details__title" style={{ color: "orange" }}  >Data Security and BPO Industry</h3>
                    <div className="blog-details__content">
                        <p>Data security is an ever present concern in the BPO industry. The nature of the industry involves continuous exchange of confidential information with offshore parties. Such information includes, but isn’t limited to, financial, medical and personal information. Furthermore, there are questions about how the data is collected, stored and utilized</p>
                        <p>Such concerns are embodied by security and privacy regulations like PCI, HIPAA, GLBA, SOX and others. As a result, organizations are mandated to enforce strict data security regulations on their outsourcing partner</p>
                        <p>Successful implementation of data security controls offers competitive advantage to the business and the BPO. On the other hand, failing to do so makes them liable for data breaches by their outsourcing partner</p>




                        <br/>
                        <h4 style={{ color: "orange" }} >How RightTime Assist?</h4>
                        <p>We, at Panacea InfoSec, bring vast experience and technical expertise in designing and implementing ISMS in the BPO and IT/ITES industry. Additionally, we provide consultation on PCI, HIPAA, ISO standards compliance. Lastly, we understand the unique challenges faced by companies and their outsourcing partners. Our services ensure that you stay compliant and your customers secure.</p>
                         

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

 

export default BpoService
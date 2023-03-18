import React,{ useState} from 'react'
import IndustriesNav from './IndustriesNav'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
function PowerSector() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <div className="page-header">
        <div className="page-header__bg"
          style={{ backgroundImage: `url('/assets/images/background/health.png')` }}></div>

        <div className="container">
          <ul className="thm-breadcrumb list-unstyled">
            <li><a href="/">Home</a></li>
            <li> 	Power Sector</li>
          </ul>
          <h2 className="page-header__title"> 	Power Sector</h2>
        </div>
      </div>

      <section className="section-padding--bottom section-padding--top">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">


              <h3 className="blog-card-one__title blog-details__title" style={{ color: "orange" }} > 	Power Sector</h3>
              <div className="blog-details__content">
                <p>The power sector is one of the most frequently targeted and first to respond to cyber threats with mandatory controls. But threats continue to evolve, reaching into industrial control systems and supply chains, and requiring even greater efforts to manage risk.</p>
                 <br />
                <h4 style={{ color: "orange" }}>
How can Right Time Limited Help?
?</h4>
                <p>
                This is how our power sector cybersecurity consultants will assist to manage cybersecurity risks - 
                  <ul>
                    <li> 	Ensure every stage of your supply chain is secure</li>
                    <li> 	Assess and evaluate cyber risk at every level</li>
                    <li> Train for risk awareness—and reporting</li>
                    <li> Deploy cybersecurity risks monitoring solution</li>
                    <li> Protect operational technology networks</li>
                   </ul>

                   Plus many other control system security standards, regulations and best practice guidelines worldwide.
                </p>
              </div>
              <br/>
                    <Button style={{backgroundColor:"#fd7e14"}} onClick={handleShow}>Contact Us</Button>


            </div>
            <div className="col-lg-4">
              <div className="sidebar">
                <div className="sidebar__item sidebar__item--category">
                  <IndustriesNav />

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
       
      </Modal><br /><br /><br />


    </div>
  )
}

 
export default PowerSector
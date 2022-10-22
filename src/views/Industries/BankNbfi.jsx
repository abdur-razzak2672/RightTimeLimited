import React,{ useState} from 'react'
import IndustriesNav from './IndustriesNav'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
function BankNbfi() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
    <div className="page-header">
        <div className="page-header__bg"
             style={{backgroundImage: `url('/assets/images/background/bank.png')`}}></div>
        <div className="container">
            <ul className="thm-breadcrumb list-unstyled">
                <li><a href="/">Home</a></li>
                <li>Bank & NBFI</li>
            </ul>
            <h2 className="page-header__title" >Bank & NBFI</h2>
        </div>
    </div>

    <section className="section-padding--bottom section-padding--top">
        <div className="container">
        <div className="row">
                <div className="col-lg-8">
                    <h3 className="blog-card-one__title blog-details__title" style={{color:"orange"}} > Bank and NBFI</h3>
                    <div className="blog-details__content">
                        <p>The majority of cyberattacks target financial institutions.
                        Banks are where the money is, and targeting them provides cybercriminals with several opportunities to make money through extortion, theft, and fraud.
                        Nation-states and hacktivists also target the financial industry to gain political and ideological strength. </p>
                        <p>The main goal of cybersecurity in banking is to protect user assets. As more people become cashless, additional actions or transactions go online.
                        People conduct transactions using digital payment methods like debit and credit cards, which must be protected by cyber security.</p>
                        <p>When a bank faces a cyber attack, it not only affects the bank's reputation, but also causes losses to its customers' assets.
                        When a bank's customer's data is breached, it becomes difficult for customers to trust the bank.ecimen book. It has survived not only
                            five centuries, but also the leap into unchanged.</p>
                            <br/>
                            <h4 style={{color:"orange"}} >How Can the Right Time Help?</h4>
                            <p>Right Time Limited is an authorized agency to issue PCI DSS and ISO 27001 certifications.
                            In addition, we provide consulting services for implementation of PCI DSS, PCI 3DS, SWIFT, and ISO standards.
                            Over the years we have worked closely with leading financial institutions to develop effective and long-term information security management systems. </p>
                    </div><br/>
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
    <br/><br/><br/>
      
    </div>
  )
}

export default BankNbfi

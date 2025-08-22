import React,{ useState} from 'react'
import IndustriesNav from './IndustriesNav'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
function Educational() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <div className="page-header">
        <div className="page-header__bg"
          style={{ backgroundImage: `url('/assets/images/background/ed.png')` }}></div>

        <div className="container">
          <ul className="thm-breadcrumb list-unstyled">
            <li><a href="/">Home</a></li>
            <li>Educational Institutions</li>
          </ul>
          <h2 className="page-header__title">Educational Institutions</h2>
        </div>
      </div>

      <section className="section-padding--bottom section-padding--top">
        <div className="container">
          <div className="row">
          <div className="col-lg-4">
              <div className="sidebar">
                <div className=" ">
                  <IndustriesNav title="education" />

                </div>
              </div>
            </div>
            <div className="col-lg-8">


              <h3 className="blog-card-one__title blog-details__title" style={{ color: "orange" }}>Educational Institutions</h3>
              <div className="blog-details__content">
                <p>Cyber security is critical for all organizations, not just IT.
                  The need for cyber security in educational institutions is growing.
                  The development of computers and the Internet has made life easier for people in educational and other institutions.
                </p>
                <p>Digitization of the education system has led to serious problems such as cyberbullying, malware attacks and hacking.
                  Additionally, with the rapid growth of distance education and virtual classNamerooms, cyber security is one of the main concerns for educational institutions and students.
                </p>
                <p>Educational institutions are gold mines of personal information. Therefore, this department should prioritize cyber security.
                  While the sector faces major challenges such as lack of personnel and funding and resources, cyber attacks are no less frequent or less severe in education.
                  Despite widespread reports of breaches in schools and higher education, they seem to be increasing in prevalence.</p>

                <br />
                <h4 style={{ color: "orange" }} >How Can Right Time Limited Help?</h4>
                <p>With extensive security capabilities and decades of industry presence behind them, RightTime Ltd can help schools, higher education, universities and research institutions become more resilient, secure and adaptable in a changing threat landscape.
                  The Right Time Limited’s portfolio includes a full suite of security offerings, ranging from security assessment, information security compliance to incident response services.</p>

              </div>
              <br/>
              <a href = "contact-us">       <Button style={{backgroundColor:"#fd7e14"}} >Contact Us</Button></a>


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

export default Educational

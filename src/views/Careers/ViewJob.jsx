import React,{ useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import './career.css'
function ViewJob() {
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <div className="page-header">
        <div className="page-header__bg"
          style={{ backgroundImage: `url('https://www.krg.ca/en-CA/assets/Careers-new.jpg')` }}></div>
        <div className="container">
          
          <h1 className="page-header__title">Junior SEO specialist
            </h1>
            <h4 className="mt-3">Working with our clients' point of contact to build low and high-fidelity <br/> website wireframes that utilize the most effective strategies and<br/> remain within the goals of our client.</h4>
        </div>
      </div>
    
  
      <section className="  mt-5" style = {{backgroundColor :"#261d3b"}}>
        <div className=" "> 
           <div className="mx-5 p-5  row">
             <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-8">
                    <div className="section-title">
                        <p className="section-title__text ">Overview</p>
                        <div className="section-title">
                         <div>
                            <h1 className="  text-light">Role</h1>
                            <h5 className=" mt-3">You will work with our art director on building high performing visual layouts using research. Creating low and high fidelity wireframes and communicating how things should work and feel for our engineering/development team.</h5>
                        </div> 
                    </div>
                        <div>
                            <h1 className="text-light">About the role</h1>
                            <h5 className=" mt-3">You will work with our art director on designing a layout and style guide based on the brand identity of our clients.</h5>
                            <h5 className=" mt-3">Conducting research and being able to evolve your design capabilities with the industry.</h5>
                            <h5 className=" mt-3">You will need great communication skills as you will be working directly with both our art director and the development team.</h5>
                            
                            <h5 className=" mt-3">Experience in either Adobe XD or Figma is required.

</h5>


                        
                        
                        </div> 
                    </div>
                    <div className="section-title">
                         <div>
                            <h1 className="  text-light">Typical daily duties:</h1>
                            <h5 className=" mt-3">You will work with our art director on building high performing visual layouts using research. Creating low and high fidelity wireframes and communicating how things should work and feel for our engineering/development team.</h5>
                        </div>
                        <div>
                            <div>
                                <h5 className=" mt-3"><span style={{marginRight:"6px"}} className="fas fa-arrow-right"></span>Creating a style guide based off of the design system provided by the art director</h5>
                                <h5 className=" mt-3"><span style={{marginRight:"6px"}} className="fas fa-arrow-right"></span>Building low-fidelity wireframes</h5>
                                <h5 className=" mt-3"><span style={{marginRight:"6px"}} className="fas fa-arrow-right"></span>Building low-fidelity wireframes</h5>

                                <h5 className=" mt-3"><span style={{marginRight:"6px"}} className="fas fa-arrow-right"></span>Testing and analyzing results</h5>

                                <h5 className=" mt-3"><span style={{marginRight:"6px"}} className="fas fa-arrow-right"></span>Researching the most effective UI/UX methodologies</h5>

                                <h5 className=" mt-3"><span style={{marginRight:"6px"}} className="fas fa-arrow-right"></span>Articulating important visual designs and implantations</h5>
                                <h5 className=" mt-3"><span style={{marginRight:"6px"}} className="fas fa-arrow-right"></span>Creating Site Maps</h5>



                            </div>
                            
                            
                        </div> 
                    </div>
                  
                    
                    

                </div>
                <div className="col-lg-4 mt-5 pt-5 jobButton">
                <div className="right border-2 shadow  " style={{width: "25rem", backgroundColor:"#272036" }}>
                   <div className="card-body p-5">
                    <h5 className='mt-4'>Job Title </h5>
                    <h2 className='text-light mt-4'> Junior SEO specialist</h2>
                    <h5 className='mt-4'>Industry Category</h5>
                    <h4 className='text-light mt-4'>Marketing</h4>
                    <h5 className='mt-4'>Employment Basis</h5>
                    <h4 className='text-light mt-4'>Remote Position</h4>
                    <h5 className='mt-4'>Application Deadline</h5>
                    <h4 className='text-light mt-4'>31-10-2022</h4>


                    <a href="javascript:void(0)" onClick={handleShow} className="mt-5 thm-btn cta-two__btn rounded-5 w-100 text-center">
              <span>Apply Now <i className="mx-3 fas fa-arrow-right"></i></span> 
            </a>
                  </div>
                </div>
           
                
                </div>

              </div>
             
                 

            </div>
          </div>


        </div>
        <br/>
        <br/>

      </section>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body  style={{width:"110%"}} className="bg-dark rounded-3">
          <Form className="px-5">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className ="text-light">Job Title</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Full Stack Developer</option>
              <option value="1">Fronend Developer</option>
              <option value="2">Backend Developer</option>
              <option value="3">UX/UI Designer</option>
              <option value="3">Laravel Developer</option>
              <option value="3">Mern Stack Developer</option>

            </Form.Select>
            </Form.Group>

            <Row className="">
                                           
              <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label className ="text-light">First Name</Form.Label>
              <Form.Control type="text" placeholder="Enter First Name" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label className ="text-light">Last Name</Form.Label>
              <Form.Control type="text" placeholder="Enter LAst Name" />
              </Form.Group>
          </Row>

          <Form.Group className="mb-3 " controlId="formGridAddress1">
          <Form.Label className ="text-light">Phone Number</Form.Label>
            <span className="d-flex">
                <Form.Select style={{width:"80px"}} defaultValue="Choose...">
                    <option>BDT +880</option>
                    <option>BDT +880</option>
                    <option>BDT +880</option>
                    <option>BDT +880</option>
                    <option>AUS</option>
                </Form.Select>
                  <Form.Control type = "text" placeholder="017xxxxxxxx" />

            </span>
        </Form.Group>

        <Row className="">
          
          <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label className ="text-light">Email</Form.Label>
          <Form.Control type="email" placeholder="Ex@gmail.com" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label className ="text-light">Country</Form.Label>
          <Form.Select aria-label="Default select example">
              <option>Bangladesh</option>
              <option value="1">USA</option>
              <option value="2">Germany</option>
              <option value="3">Australia</option>
     

            </Form.Select>
          </Form.Group>
      </Row>

      <Form.Group controlId="formFileMultiple" className="mb-3">
          <Form.Label>Attach File</Form.Label>
          <Form.Control type="file" multiple />
          <Form.Label>Allow fromate are .docx, .docs, .pdf and maxumum size 10MB</Form.Label>

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


      <section className="mt-5" style = {{backgroundColor :"#261d3b"}}>
        <div className=" mt-5 ">
          <div className="section-title text-center pt-5">
             <h2 className="section-title__title text-light mt-5">ReadyTo Build Successfull Tech Product </h2>
             <h4 className ="mt-3">We are eager to listen to your digital vision and work together to make this a success. Just fill in this form and we’ll get back to you within 24 business hours</h4>
                   <a href="/contact" className=" mt-5 thm-btn cta-two__btn rounded-5">
                    <span>Start a Project <i className="mx-3 fas fa-arrow-right"></i></span> 
                  </a>

          </div>
        
        </div>
        <br/>
        <br/>

      

      </section>
      <br /><br /><br /> 

    </div>
  )
}

export default ViewJob

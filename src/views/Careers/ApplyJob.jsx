import React from 'react'
import './career.css'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
function ApplyJob() {
    return (
        <div>

              <div className="col-lg-6 jobButton rounded">
                 <div className="right border-2 shadow rounded " style={{ width: "100%", backgroundColor: "#272036" }}>
                                   
              <Form className="px-5 py-5">
            <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
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
              <Form.Control type="text" placeholder="Enter Last Name" />
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
      <a href="/apply-job" className="  thm-btn cta-two__btn rounded-2">
                    <span>Submit<i className="mx-1 fas fa-arrow-right"></i></span> 
                  </a>

 
          </Form>
                                   
                                 
                                    </div>
 

                                </div>

            
            <br /><br /><br />

        </div>
    )
}

export default ApplyJob

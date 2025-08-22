import React from 'react'
import './career.css'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
function ApplyJob() {
    return (
        <div className='container'>
          <div className='d-flex justify-content-between'> 
          <div>
                    <h2>Financial Analyst</h2>
           <p>at Right Time Limited <a href='/view-job'>(view All Job)</a></p>
          </div>
  
          </div>


          <div className='mt-3'>
            <p>Bottomline is at the forefront of digital transformation. We are a growing global market leader uniquely equipped to address the changing needs of how businesses pay and get paid. Our culture of Working with and for each other enables us to delight our customers. We empower our teams to think like owners driving customer satisfaction, helping them grow their business and win in their markets.</p>

          <h5><a href='/'>Position Summary:</a></h5>
          <p>Bottomline Technologies is seeking a Financial Analyst to join the Financial Planning and Analysis group and play a key role in the strategic financial direction of the company. The position reports to the Director of Finance and will include day-to-day interaction with other members of senior management and Thoma Bravo operating advisors</p>
<h5>What will make you successful:</h5>
<p>Strong analytical and communication skills</p>
<p>Exceptional attention to detail and accuracy</p>
<p>Strong Excel skills a must</p>
<p>Comfortable working in ERP/financial systems</p>
<p>The ability to independently manage multiple projects and requests effectively</p>
<p>Proven ability to meet deadlines with accuracy </p>
<h5 className='mt-3'>Education and Experience:</h5>
<p>Bachelor’s degree in Business</p>
<p className='mt-5'>You’ll love Bottomline because in everything we do we seek to delight our customers and we are passionate about building a company of which we can all be proud, and this starts with building amazing teams filled with team members that challenge you every day.</p>

   </div>


   <div style={{border:"1px solid lightgray",padding:"20px",marginRight:"15%",marginLeft:"15%", }}>
    <h4>Apply Job</h4>

    <Form>


    <Row className="">
                                           
      <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label  >First Name</Form.Label>
      <Form.Control type="text" placeholder="Enter First Name" />
      </Form.Group>
      <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label >Last Name</Form.Label>
      <Form.Control type="text" placeholder="Enter Last Name" />
      </Form.Group>
  </Row>

  <Form.Group className="mb-3 " controlId="formGridAddress1">
          <Form.Label >Phone Number</Form.Label>
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
          <Form.Label  >Email</Form.Label>
          <Form.Control type="email" placeholder="Ex@gmail.com" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label  >Country</Form.Label>
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

      <Form.Group controlId="formFileMultiple" className="mb-3">
          <Form.Label>Cover Letter</Form.Label>
          <Form.Control type="file" multiple />
          <Form.Label>Allow fromate are .docx, .docs, .pdf and maxumum size 10MB</Form.Label>

      </Form.Group>


      
      <Form.Group controlId="formFileMultiple" className="mb-3">
          <Form.Label>LinkIn Profile</Form.Label>
          <Form.Control type="text" multiple />
 
      </Form.Group>
      <Form.Group controlId="formFileMultiple" className="mb-3">
          <Form.Label>Website</Form.Label>
          <Form.Control type="text" multiple />
 
      </Form.Group>

      <Form.Group controlId="formFileMultiple" className="mb-3">
          <Form.Label>If you're an employee referral, please provide the name of the employee
     </Form.Label>
          <Form.Control type="text" multiple />
 
      </Form.Group>


      <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label  >Are you legally authorized to work in your country of application? *</Form.Label>
          <Form.Select aria-label="Default select example">
              <option>Bangladesh</option>
              <option value="1">USA</option>
              <option value="2">Germany</option>
              <option value="3">Australia</option>
     

            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label  >Will you now or in the future require visa sponsorship? *</Form.Label>
          <Form.Select aria-label="Default select example">
              <option>Bangladesh</option>
              <option value="1">USA</option>
              <option value="2">Germany</option>
              <option value="3">Australia</option>
     

            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label  >Do you now or have you in the past worked for Bottomline Technologies? *</Form.Label>
          <Form.Select aria-label="Default select example">
              <option>Bangladesh</option>
              <option value="1">USA</option>
              <option value="2">Germany</option>
              <option value="3">Australia</option>
     

            </Form.Select>
          </Form.Group>

          <h5 className='mt-5'>Voluntary Self-Identification</h5>
          <p>For government reporting purposes, we ask candidates to respond to the below self-identification survey. Completion of the form is entirely voluntary. Whatever your decision, it will not be considered in the hiring process or thereafter. Any information that you do provide will be recorded and maintained in a confidential file.

As set forth in Bottomline Technologies’s Equal Employ</p>

          <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label  >Gender</Form.Label>
          <Form.Select aria-label="Default select example">
              <option>Bangladesh</option>
              <option value="1">USA</option>
              <option value="2">Germany</option>
              <option value="3">Australia</option>
     

            </Form.Select>
          </Form.Group>

          
          <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label  >Are you Hispanic/Latino?</Form.Label>
          <Form.Select aria-label="Default select example">
              <option>Bangladesh</option>
              <option value="1">USA</option>
              <option value="2">Germany</option>
              <option value="3">Australia</option>
     

            </Form.Select>
          </Form.Group>

          <a className='mt-5' href='/'>Race & Ethnicity Definitions</a>
          <p>If you believe you belong to any of the categories of protected veterans listed below, please indicate by making the appropriate selection. As a government contractor subject to the Vietnam Era Veterans Readjustment Assistance Act (VEVRAA), we request this information in order to measure the effectiveness of the outreach and positive recruitment efforts we undertake pursuant to VEVRAA. Classification of protected categories is as follows:</p>
      <p className='mt-3'>A "disabled veteran" is one of the following: a veteran of the U.S. military, ground, naval or air service who is entitled to compensation (or who but for the receipt of military retired pay would be entitled to compensation) under laws administered by the Secretary of Veterans Affairs; or a person who was discharged or released from active duty because of a service-connected disability.</p>
      <p className='mt-3'>A "recently separated veteran" means any veteran during the three-year period beginning on the date of such veteran's discharge or release from active duty in the U.S. military, ground, naval, or air service..</p>
      <p className='mt-3'>An "active duty wartime or campaign badge veteran" means a veteran who served on active duty in the U.S. military, ground, naval or air service during a war, or in a campaign or expedition for which a campaign badge has been authorized under the laws administered by the Department of Defense.</p>

      
      <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label  >Veteran Status</Form.Label>
          <Form.Select aria-label="Default select example">
              <option>Veteran Status</option>
              <option value="1">USA</option>
              <option value="2">Germany</option>
              <option value="3">Australia</option>
     

            </Form.Select>
          </Form.Group> 

             <a href="/apply-job" className=" mt-5  thm-btn cta-two__btn rounded-2">
                    <span>Submit<i className="mx-1 fas fa-arrow-right"></i></span> 
                  </a>     
                             
    </Form>




   </div>
















 
    
 
 

            
            <br /><br /><br />

        </div>
    )
}

export default ApplyJob

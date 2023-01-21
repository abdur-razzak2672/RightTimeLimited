import React from 'react'
import './career.css'
import Accordion from 'react-bootstrap/Accordion'
import { Row,Col } from 'react-bootstrap'
function CareersBody() {
  return (
    <div>
 
      <div className="page-header ">
        <div className="page-header__bg"
          style={{ backgroundImage: `url('/assets/images/career/job.svg')` }}></div>
        <div className="container text-center">
        <h2 className="page-header__title">Career </h2>

          <h2 className="page-header__title"> Innovate, win and grow your career here. </h2>
          <a href="/apply-job" className=" mt-5 thm-btn cta-two__btn rounded-5">
                    <span>Apply Now<i className="mx-3 fas fa-arrow-right"></i></span> 
                  </a>
        </div>
      </div>

      <section >
        <div className='container mt-5'>
          <div className='row'>
            <div className='col-md-6'>
              <h2 className='text-info'>Our people make us great</h2>
              <h3>For every individual in this organization, everything we do is focused on customer delight</h3>
              <p>Whether you’re a people success advisor, software developer or sales professional, everything you do connects back to the customer, helping them grow their businesses and win in their markets. Every interaction makes an impression.</p>
              <p>We’re looking for team members that want to innovate, win and grow with us. We share ideas, innovate together and support each other personally and professionally.  Working collaboratively with customers, partners and each other, we achieve a common goal of exceeding customer expectations. </p>
              <a href="/apply-job" className=" mt-5 thm-btn cta-two__btn rounded-5">
                    <span>Apply Now<i className="mx-3 fas fa-arrow-right"></i></span> 
                  </a>

            </div>
            <div className='col-md-6'>
              <img width="130%" src='/assets/images/career/job1.png' alt=''/>

            </div>
          </div>




          <div className='row mt-5'>
            <div className='col-md-6'>
                  <img width="100%" src='/assets/images/career/job2.1.png' alt=''/>
            </div>
            <div className='col-md-6'>
            <h2 className='text-info'>Jump start your career with Bottomline's College Hire Program</h2>
              <h3>Identifying and guiding the next generation of business leaders </h3>
              <p>Bottomline’s College Hire Program is designed to identify, train and promote the organization’s next generation of business leaders.</p>
              <p>The College Hire Program has closed successfully for 2020.

</p>

              <p>Bookmark and check back here in Fall 2021 as we kick off our campus tour for the 2021 campus recruiting season.</p>
              
            </div>
          </div>






          <div className='row mt-5'>
          <h2 className='text-center my-5'>Our guiding principles</h2>
          <div className='col-md-4  '>
            <div className='text-center'>
               <img src='/assets/images/career/jobicon.png' alt=''/>
               <h4>Delight customers</h4>
               <p>Customer delight is at the heart of who we are. It informs all we do from bringing product innovation to customers before they ask for it (or think of it) to making sure every interaction exceeds their expectations.</p>

            </div>



          </div>
          <div className='col-md-4'>
            <div className='text-center'>
               <img src='/assets/images/career/jobicon1.webp' alt=''/>
               <h4>Do the right thing</h4>
               <p>In every interaction and at every opportunity our compass is simple—do the right thing. ing sure every interaction exceeds their expectations.</p>

            </div>



          </div>
          <div className='col-md-4'>
          
            <div className='text-center '>
               <img src='/assets/images/career/jobicon2.webp' alt=''/>
               <h4>Innovate, communicate, win and grow</h4>
               <p>We foster an environment that encourages open communication among all levels of our team by encouraging team members to lead from where they stand and be a role model regardless of title or seniority.</p>

            </div>



          </div>

        </div>




        
        <div className='row mt-5'>
           <div className='col-md-4  '>
            <div className='text-center'>
               <img src='/assets/images/career/jobicon3.webp' alt=''/>
               <h4>Work with and for each other</h4>
               <p>We know we can’t do it alone. The best ideas, innovations and solutions come from creative minds coming together, teams that feel supported and celebrated and rally around one another to create great work. </p>

            </div>



          </div>
          <div className='col-md-4'>
            <div className='text-center'>
               <img src='/assets/images/career/jobicon4.webp' alt=''/>
               <h4>Be a company of which all can be proud</h4>
               <p>We are proud of the work we do for our customers, the environment we create for our team, the support we provide for our communities and the value we create for our shareholders. </p>

            </div>



          </div>
          <div className='col-md-4'>
          
            <div className='text-center '>
               <img src='/assets/images/career/jobicon2.webp' alt=''/>
               <h4>Create and grow sustained business value</h4>
               <p>Our business model and plan are designed to grow the business and its value for years and decades to come. </p>

            </div>



          </div>

        </div>

        <p className='text-center mt-4'>Bottomline Technologies is an Equal Opportunity and Affirmative Action Employer participating in the Employment Verification (E-Verify) program.</p>








        <div className='row mt-5'>
            <div className='col-md-6'>
                  <img width="100%" src='/assets/images/career/job3.png' alt=''/>
            </div>
            <div className='col-md-6 mt-5'>
            <h2 className='text-info'>Right Time</h2>
              <h3>Come work with us</h3>

              <a href="/apply-job" className=" mt-5 thm-btn cta-two__btn rounded-5">
                    <span>Apply Now<i className="mx-3 fas fa-arrow-right"></i></span> 
                  </a>
               
            </div>
          </div>

          

        </div>


        



      </section>




     





{/* 


      <div className=" mt-5">
        </div>
        <section className="     m-5">
          <div className=" ">
          <div className="section-title text-center">
            <p className="section-title__text">Careers</p>
            <h2 className=" ">We’re a growing company.</h2>
            <p>Right Time Limited is a leading provider of SOC-as-a-Service (Cyber Security Operations Center – SOC) for the USA,Bangladesh, Australia, and the jarmany Cyber Security market. SafeAeon currently provides security SOC services to many Fortune 1000 companies in collaboration with WaveStrong Inc. and Marseon Inc., which are both US Silicon-Valley based Cyber Security companies.</p>
          </div>

          <Row>
            <Col md={4}>
            <img
            width="100%"
              className = "img-responsive"
              src= "/assets/images/career/job.png"
              alt=""
            />
            </Col>

            <Col md={8}  >
              <div style={{paddingTop:"80px"}} className='mt-5'>
                <Accordion defaultActiveKey={['1']} alwaysOpen>
              <Accordion.Item eventKey="0">
                <Accordion.Header><h6 >Marketing</h6></Accordion.Header>
                <Accordion.Body>
                  <a href='/marketing'>
                  <h6>Account Based Marketing Executive</h6>
                  <h6 className='text-info'>Madison, WIS, USA</h6>
                 </a>

                 <a className='mt-5' href='/marketing'>
                  <h6>Account Based Marketing Executive</h6>
                  <h6 className='text-info'>Madison, WIS, Bangladesh</h6>
                 </a>
                 <a className='mt-5' href='/marketing'>
                  <h6>Account Based Marketing Executive</h6>
                  <h6 className='text-info'>Madison, WIS, Jarmany</h6>
                 </a>
                 <a className='mt-5' href='/marketing'>
                  <h6>Account Based Marketing Executive</h6>
                  <h6 className='text-info'>Madison, WIS, Australia</h6>
                 </a>
                  
                </Accordion.Body>
              </Accordion.Item>
              
              <Accordion.Item eventKey="2">
                <Accordion.Header><h6 >Presales Engineering</h6></Accordion.Header>
                <Accordion.Body>
                  <a href='/marketing'>
                  <h6>Senior Presales Engineer</h6>
                  <h6 className='text-info'>Madison, WIS, USA</h6>
                 </a>

                 <a className='mt-5' href='/marketing'>
                  <h6>Senior Presales Engineer</h6>
                  <h6 className='text-info'>Madison, WIS, Bangladesh</h6>
                 </a>
                 <a className='mt-5' href='/marketing'>
                  <h6>Senior Presales Engineer</h6>
                  <h6 className='text-info'>Madison, WIS, Jarmany</h6>
                 </a>
                 <a className='mt-5' href='/marketing'>
                  <h6>Senior Presales Engineer</h6>
                  <h6 className='text-info'>Madison, WIS, Australia</h6>
                 </a>
                  
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header><h6 >R & D</h6></Accordion.Header>
                <Accordion.Body>
                  <a href='/marketing'>
                  <h6>Senior Threat Intelligence Analyst</h6>
                  <h6 className='text-info'>Madison, WIS, USA</h6>
                 </a>

                 <a className='mt-5' href='/marketing'>
                  <h6>Senior Threat Intelligence Analyst</h6>
                  <h6 className='text-info'>Madison, WIS, Bangladesh</h6>
                 </a>
                 <a className='mt-5' href='/marketing'>
                  <h6>Senior Threat Intelligence Analyst</h6>
                  <h6 className='text-info'>Madison, WIS, Jarmany</h6>
                 </a>
                 <a className='mt-5' href='/marketing'>
                  <h6>Senior Threat Intelligence Analyst</h6>
                  <h6 className='text-info'>Madison, WIS, Australia</h6>
                 </a>
                  
                </Accordion.Body>
              </Accordion.Item>
 
              <Accordion.Item eventKey="4">
                <Accordion.Header><h6 >Security Service</h6></Accordion.Header>
                <Accordion.Body>
                  <a href='/marketing'>
                  <h6>Senior SOC Analysts</h6>
                  <h6 className='text-info'>Madison, WIS, USA</h6>
                 </a>

                 <a className='mt-5' href='/marketing'>
                  <h6>Senior SOC Analysts</h6>
                  <h6 className='text-info'>Madison, WIS, Bangladesh</h6>
                 </a>
                 <a className='mt-5' href='/marketing'>
                  <h6>Senior SOC Analysts</h6>
                  <h6 className='text-info'>Madison, WIS, Jarmany</h6>
                 </a>
                 <a className='mt-5' href='/marketing'>
                  <h6>Senior SOC Analysts</h6>
                  <h6 className='text-info'>Madison, WIS, Australia</h6>
                 </a>
                  
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            
              </div>
            </Col>
            
           </Row>
    


          </div>
        </section> */}


      




      <br /><br /><br /> 

    </div>
  )
}

export default CareersBody

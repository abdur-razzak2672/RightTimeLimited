import React from 'react'
import './career.css'
import Accordion from 'react-bootstrap/Accordion'
import { Row,Col,Card } from 'react-bootstrap'
function AllJob() {
  return (
    <div>
      <div className="page-header">
        <div className="page-header__bg"
          style={{ backgroundImage: `url('https://www.krg.ca/en-CA/assets/Careers-new.jpg')` }}></div>
        <div className="container">
          
          <h2 className="page-header__title">Innovate with Us</h2>
          
          <p className='text-light'>At Bottomline everybody makes a difference and everybody plays a part. We are looking for passionate people to join our team who are committed to delighting our customers no matter their role and who want to work hard, Communicate, Innovate, Win and Grow. Our culture is something we cultivate - we all own and create each day and it is an important key to our success.</p>
       <p className='text-light'>We have created an environment where we foster growth and innovation, where our people are encouraged to be brave and curious. Our future is bright - Will you join us?</p>
        </div>
      </div>

      <section>
        <div className='container'>
            <h2 className='text-center mt-5'>Current Job Openings</h2>

            <div className='text-center mt-5 d-flex justify-content-center'>
                <select style={{fontSize:"22px"}} className='border-0'>
                    <option value="1">Department</option>
                    <option value="1">IS/IT security Consultation</option>
                    <option value="1">Management</option>
                    <option value="1">HR & Admin</option>                
                    <option value="1">Accounts & Finance</option>
                    <option value="1">Sales & Marketing</option>
                    <option value="1">Common Service Department</option>
                    <option value="1">IS/IT Security Assessment & Audit</option>
                    <option value="1">Skill development</option>
                    <option value="1">Research and development (R & D)</option>
                </select>

                <select style={{fontSize:"22px"}} className='border-0 mx-5'>
                    <option value="1">Bangladesh</option>
                    <option value="1">USA</option>
                    <option value="1">Jarmany</option>
                    <option value="1">Australiar</option>
    
                </select>
 
            </div>


            <div className='mt-5'>
            <a className='hoverable '  href='/view-job'>   
            <div className='cardItem'>
                
                <h2 >IS/IT security Consultation</h2>
                <p className='my-3' style={{borderBottom:"1px solid lightgray"}}></p>
                <p className='text-info'>Finance & Legal</p>    
            </div>
              </a>

              <a className='hoverable '  href='/view-job'>   
            <div className='cardItem mt-4'>
                
                <h2 >Management</h2>
                <p className='my-3' style={{borderBottom:"1px solid lightgray"}}></p>
                <p className='text-info'>Finance & Legal</p>    
            </div>
              </a>

              <a className='hoverable '  href='/view-job'>   
            <div className='cardItem mt-4'>
                
                <h2 >HR & Admin</h2>
                <p className='my-3' style={{borderBottom:"1px solid lightgray"}}></p>
                <p className='text-info'>Finance & Legal</p>    
            </div>
              </a>

              <a className='hoverable '  href='/view-job'>   
            <div className='cardItem mt-4'>
                
                <h2 >Accounts & Finance</h2>
                <p className='my-3' style={{borderBottom:"1px solid lightgray"}}></p>
                <p className='text-info'>Finance & Legal</p>    
            </div>
              </a>
              <a className='hoverable '  href='/view-job'>   
            <div className='cardItem mt-4'>
                
                <h2 >Sales & Marketing</h2>
                <p className='my-3' style={{borderBottom:"1px solid lightgray"}}></p>
                <p className='text-info'>Finance & Legal</p>    
            </div>
              </a>

              <a className='hoverable '  href='/view-job'>   
            <div className='cardItem mt-4'>
                
                <h2 >Common Service Department</h2>
                <p className='my-3' style={{borderBottom:"1px solid lightgray"}}></p>
                <p className='text-info'>Finance & Legal</p>    
            </div>
              </a>

              <a className='hoverable '  href='/view-job'>   
            <div className='cardItem mt-4'>
                
                <h2 >IS/IT Security Assessment & Audit</h2>
                <p className='my-3' style={{borderBottom:"1px solid lightgray"}}></p>
                <p className='text-info'>Finance & Legal</p>    
            </div>
              </a>

              <a className='hoverable '  href='/view-job'>   
            <div className='cardItem mt-4'>
                
                <h2 >Skill development</h2>
                <p className='my-3' style={{borderBottom:"1px solid lightgray"}}></p>
                <p className='text-info'>Finance & Legal</p>    
            </div>
              </a>

              <a className='hoverable '  href='/view-job'>   
            <div className='cardItem mt-4'>
                
                <h2 clas>Research and development (R & D)</h2>
                <p className='my-3' style={{borderBottom:"1px solid lightgray"}}></p>
                <p className='text-info'>Finance & Legal</p>    
            </div>
              </a>
              

              
              
            </div>





        </div>



      </section>

      

      




      <br /><br /><br /> 

    </div>
  )
}

 

export default AllJob
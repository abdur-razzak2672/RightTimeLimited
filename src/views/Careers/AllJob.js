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
                    <option value="1">SQA</option>
                    <option value="1">software Engineer</option>
                    <option value="1">Web Developer</option>
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
                
                <h2 >Accounts Payable Associate</h2>
                <p className='my-3' style={{borderBottom:"1px solid lightgray"}}></p>
                <p className='text-info'>Finance & Legal</p>    
            </div>
              </a>

              <a className='hoverable '  href='/view-job'>   
            <div className='cardItem mt-4'>
                
                <h2 >Accounts Receivable Representative</h2>
                <p className='my-3' style={{borderBottom:"1px solid lightgray"}}></p>
                <p className='text-info'>Finance & Legal</p>    
            </div>
              </a>

              <a className='hoverable '  href='/view-job'>   
            <div className='cardItem mt-4'>
                
                <h2 >Director of Finance</h2>
                <p className='my-3' style={{borderBottom:"1px solid lightgray"}}></p>
                <p className='text-info'>Finance & Legal</p>    
            </div>
              </a>

              <a className='hoverable '  href='/view-job'>   
            <div className='cardItem mt-4'>
                
                <h2 >Junior Revenue Accountant</h2>
                <p className='my-3' style={{borderBottom:"1px solid lightgray"}}></p>
                <p className='text-info'>Finance & Legal</p>    
            </div>
              </a>
              <a className='hoverable '  href='/view-job'>   
            <div className='cardItem mt-4'>
                
                <h2 >Legal Associate</h2>
                <p className='my-3' style={{borderBottom:"1px solid lightgray"}}></p>
                <p className='text-info'>Finance & Legal</p>    
            </div>
              </a>

              <a className='hoverable '  href='/view-job'>   
            <div className='cardItem mt-4'>
                
                <h2 >Senior Finance Associate</h2>
                <p className='my-3' style={{borderBottom:"1px solid lightgray"}}></p>
                <p className='text-info'>Finance & Legal</p>    
            </div>
              </a>

              <a className='hoverable '  href='/view-job'>   
            <div className='cardItem mt-4'>
                
                <h2 >Marketing Database and Reporting Analyst</h2>
                <p className='my-3' style={{borderBottom:"1px solid lightgray"}}></p>
                <p className='text-info'>Finance & Legal</p>    
            </div>
              </a>

              <a className='hoverable '  href='/view-job'>   
            <div className='cardItem mt-4'>
                
                <h2 >Senior Manager Marketing Fraud and Financial Crime</h2>
                <p className='my-3' style={{borderBottom:"1px solid lightgray"}}></p>
                <p className='text-info'>Finance & Legal</p>    
            </div>
              </a>

              <a className='hoverable '  href='/view-job'>   
            <div className='cardItem mt-4'>
                
                <h2 clas>Accounts Payable Associate</h2>
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
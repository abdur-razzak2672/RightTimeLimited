import React from 'react'
import SeviceCommon from '../Services/SeviceCommon'
import { Carousel } from 'react-bootstrap'
 import Partner from '../../components/Partner'
import { data } from './ManagedServiceData'
import BenitsConpany from '../Services/ServicesBody/BenitsConpany'

 function ManagedServiceBody() {
  return (
    <div>
        <div>
      <div>
      <div className="page-header">
    <div className="page-header__bg"
         style={{ backgroundImage: `url('https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29kZSUyMHJldmlld3xlbnwwfHwwfHw%3D&w=1000&q=80'')` }}></div>
    <div className="container">
    <ul className="thm-breadcrumb list-unstyled">
            <li><a href="{{ url('/') }}">Home</a></li>
            <li><a href="{{ url('/services') }}">Services</a></li>
            <li> Managed Services</li>
        </ul>
        <h2 className="page-header__title"> Managed Services</h2>
    </div> 
</div> 
<div className=' text-center service-topbar'>
       <div className="container d-flex justify-content-between">
       <div style={{  color: "white" }} className=''>
          <a className='text-light'href='#header'>FAQ</a>
        </div>
        <div className=''>
          <a className='text-light' href='#benefit'>Benefit</a>
        </div>
        <div className=''>
          <a className='text-light' href='#question'>Ask Question</a>
        </div>
       </div>
      </div>

      <section id="header" className="section-padding--bottom pt-5 ">
        <div className="container">
          <div className="section-title">
          <h4 className='header text-center'>
            Right Time Solutions
            </h4>

            <p className='text-dark text-center'> Right Times 24×7 Security Team work around the clock to monitor, detect, and respond to cyberattacks before they have a chance to impact your business</p>
              
             <section className="section-padding--bottom mt-3 ">
                <BenitsConpany />
              </section>

          <div className="row">

            {
              data?.map((item,index)=>(
                
          <div key={index} className="col-md-4 mt-4">
          <a href={`${item?.url}`} style={{backgroundColor:"#011936",color:"#ffff"}} className="card">
            <div className="card-body">
              <h5 style={{color:"#0cb8e6"}} className="card-title">   {item?.title} </h5>
              <p className="card-text"> <i style={{color:"#f58220"}} class="fa fa-check-square" aria-hidden="true"></i> TurnKey 24x7 Eyes-on-screen-SOC</p>
              <p className="card-text"> <i  style={{color:"#f58220"}} class="fa fa-check-square" aria-hidden="true"></i> 24x7 Security Monitoring and Alerting  </p>
              <p className="card-text"> <i  style={{color:"#f58220"}} class="fa fa-check-square" aria-hidden="true"></i> Out-of-the-box support for 300+ log sources</p>
                </div>
          </a>


        </div>


              ))
            }
 

            
          </div>

          <div style={{backgroundColor:"#e7705c"}}  className='mt-5 '>
            <div className="row">
              <div className="col-md-6">
              <h1 className='header p-5'>
                Why 24X7 SOC Monitoring is Essential?
                </h1>
              </div>

              <div className="col-md-6">
              <div className='d-flex justify-content-center '>
            <div style={{width:"100%"}}>
            <Carousel indicators={false}>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="assets/images/background/6.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Secure Configuration</h3>
          <p>Apply security patches and ensure the secure configuration of all systems is maintained. </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block   w-100"
          src="assets/images/background/5.png"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>User Education and Awareness</h3>
          <p>roduce user security policies covering acceptable and secure use of your systems.  </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="assets/images/background/7.png"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Manage User Privileges</h3>
          <p>
          Establish effective management processes and limit the number of privileged accounts.        </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

            </div>

          </div>
              </div>
            </div>

          </div>



          <div   className="row mt-5">
            <h5 className='text-center'>What We Do</h5>
            <p  className='text-center'>At Right Time, we have in-house expertise in every industry-leading security vendor product available in the market. Our Services are tremendously cost-effective, providing industry-leading quality at the most affordable prices for 24/7 SOC security monitoring for every business - BIG OR SMALL.</p>
            <div className="col-md-3 mt-4">
              <div style={{backgroundColor:"#011936",color:"#ffff"}} className="card">
                <div className="card-body">
                <div class="icon"><i class="fa fa-eye" aria-hidden="true"></i></div>
                  <h6 style={{color:"#0cb8e6"}} className="card-title text-center"> 24x7 Security Monitoring.</h6>
                  <p className='text-center'>Our Expert analysts monitor your environment 24x7 and identify threats</p>
                   
                    </div>
              </div>
              </div>

              <div className="col-md-3 mt-4">
              <div style={{backgroundColor:"#011936",color:"#ffff"}} className="card">
                <div className="card-body">
                <div class="icon"><i class="fa fa-question-circle" aria-hidden="true"></i></div>
                  <h6 style={{color:"#0cb8e6"}} className="card-title text-center"> 24x7 Security Monitoring.</h6>
                  <p className='text-center'>Our Expert analysts monitor your environment 24x7 and identify threats</p>
                   
                    </div>
              </div>
              </div>

          

 


              <div className="col-md-3 mt-4">
              <div style={{backgroundColor:"#011936",color:"#ffff"}} className="card">
                <div className="card-body">
                <div class="icon"><i class="fa fa-bug" aria-hidden="true"></i></div>
                  <h6 style={{color:"#0cb8e6"}} className="card-title text-center"> Threat Hunting.</h6>
                  <p className='text-center'>Our Expert team proactively hunt for malicious activity in your environment</p>
                   
                    </div>
              </div>
              </div>

              
              <div className="col-md-3 mt-4">
              <div style={{backgroundColor:"#011936",color:"#ffff"}} className="card">
                <div className="card-body">
                <div class="icon"><i class="fa fa-shield-alt" aria-hidden="true"></i></div>
                  <h6 style={{color:"#0cb8e6"}} className="card-title text-center">Remediation</h6>
                  <p className='text-center'>We help you respond and recover from the cyberattacks</p>
                   
                    </div>
              </div>
              </div>
 
          </div>


 <Partner/>

























          <div className="row mt-5">
              <div className="col-md-7">
              <p className="">Web application security testing as per the OWASP Top 10 list, helps to identify many unattended issues related to programming, file access and configuration etc which may turn out to be vulnerabilities, causing a potential impact on the organization.

                Regular assessments as such help safeguard the application from any unauthorized access which can cause an impact on the organization both in reputation and resources.</p>
                <p>Web application security testing as per the OWASP Top 10 list, helps to identify many unattended issues related to programming, file access and configuration etc which may turn out to be vulnerabilities, causing a potential impact on the organization.

                Regular assessments as such help safeguard the application from any unauthorized access which can cause an impact on the organization both in reputation and resources.</p>

              </div>
              <div className="col-md-5">
              <img className="w-100" src="/assets/images/services/CMMI.png" alt="" />

              </div>
            </div> 
          </div>
        </div>
      </section>

      <SeviceCommon/>
    </div>
      
    </div>
      
    </div>
  )
}


export default ManagedServiceBody
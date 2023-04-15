import React from 'react'
import SeviceCommon from '../Services/SeviceCommon'
function PmAsService() {
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
            <li>Attack Surface Management</li>
        </ul>
        <h2 className="page-header__title">Attack Surface Management</h2>
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
          <div className="row">
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


export default PmAsService
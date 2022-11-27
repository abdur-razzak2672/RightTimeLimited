import React from 'react'
import SeviceCommon from '../SeviceCommon'
 
function IsoInternational() {
  return (
    <div>
      <div>
        <div className="page-header">
          <div className="page-header__bg"
            style={{ backgroundImage: `url('https://thumbs.dreamstime.com/b/standard-quality-control-iso-certification-assurance-guarantee-internet-business-technology-concept-156888493.jpg')` }}></div>
          <div className="container">
            <ul className="thm-breadcrumb list-unstyled">
              <li><a href="{{ url('/') }}">Home</a></li>
              <li><a href="{{ url('/services') }}">Services</a></li>
              <li><a href="{{ url('/services/standard-implementation-certification') }}">Standard Implementation & Certification</a></li>
              <li>International Organization for Standardization-ISO</li>
            </ul>
            <h2 className="page-header__title">International Organization for Standardization-ISO</h2>
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
              <div className="col-md-6">
              <p className="">Web application security testing as per the OWASP Top 10 list, helps to identify many unattended issues related to programming, file access and configuration etc which may turn out to be vulnerabilities, causing a potential impact on the organization.

                Regular assessments as such help safeguard the application from any unauthorized access which can cause an impact on the organization both in reputation and resources.</p>
                <p>Web application security testing as per the OWASP Top 10 list, helps to identify many unattended issues related to programming, file access and configuration etc which may turn out to be vulnerabilities, causing a potential impact on the organization.

                Regular assessments as such help safeguard the application from any unauthorized access which can cause an impact on the organization both in reputation and resources.</p>

              </div>
              <div className="col-md-6">
              <img className="w-100" src="/assets/images/services/iso.png" alt="" />

              </div>
            </div> 
          </div>
        </div>
      </section>

      <SeviceCommon/>

      </div>

    </div>
  )
}

export default IsoInternational

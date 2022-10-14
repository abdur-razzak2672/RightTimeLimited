import React from 'react'
import AuditingNav from './AuditingNav'
function DcDrsAuditing() {
  return (
    <div>
      <div>
      <div className="page-header">
        <div className="page-header__bg"
          style={{ backgroundImage: `url('assets/images/background/auditor_pro.png')` }}></div>
        <div className="container">
        <ul className="thm-breadcrumb list-unstyled">
                <li><a href="{{ url('/') }}">Home</a></li>
                <li><a href="{{ url('/services') }}">Services</a></li>
                <li><a href="{{ url('/services/auditing') }}">Auditing</a></li>
                <li>DC & DRS Auditing</li>
            </ul>
            <h2 className="page-header__title">DC & DRS Auditing</h2>
          <h2 className="page-header__title"></h2>
        </div>
      </div>

      <section className="section-padding--bottom section-padding--top">
        <div className="container">
          <div className="row">
          <div className="col-lg-8">


<h3 className="blog-card-one__title blog-details__title">DC & DRS Auditing</h3>
<div className="blog-details__content">
    <p>  The Data Center is an integral and essential part of an organization’s IT infrastructure because the Data Center houses all IT infrastructures and support equipment. To ensure the safety, effectiveness, and efficiency of a Data Center, periodic security assessment or auditing of physical IT hardware, peripheral and security equipment, and supporting gear such as power and cooling is required.

The internal audit team or department with assurance or oversight responsibilities is accountable for doing a Data Center audit as needed. The scope of the data center audit should reasonably cover all business aspects such as Data Center Operations, infrastructures, management, and human capacity. It should be part of the audit work program for the Data Center.</p>
<p>The primary purpose of data center audits is to evaluate the adequacy, effectiveness, and efficiency of the controls in place to minimize risks such as unauthorized access to the data center, business interruptions, theft of information assets, security, emergency, and environmental hazards.</p>

<br/>
<br/>
</div>


            </div>
            <div className="col-lg-4">
              <div className="sidebar">
                <div className="sidebar__item sidebar__item--category">
                  <AuditingNav />


                </div>
              </div>
            </div>
          </div>
        </div>
      </section><br /><br /><br />
    </div>
    </div>
  )
}

export default DcDrsAuditing

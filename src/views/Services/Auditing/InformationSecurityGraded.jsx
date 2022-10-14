import React from 'react'
import AuditingNav from './AuditingNav'
function InformationSecurity() {
  return (
    <div>
    <div>
    <div className="page-header">
      <div className="page-header__bg"
        style={{ backgroundImage: `url('/assets/images/background/auditor_pro.png')` }}></div>
      <div className="container">
      <ul className="thm-breadcrumb list-unstyled">
                <li><a href="{{ url('/') }}">Home</a></li>
                <li><a href="{{ url('/services') }}">Services</a></li>
                <li><a href="{{ url('/services/auditing') }}">Auditing</a></li>
                <li>Information Security Graded Audit</li>
            </ul>
            <h2 className="page-header__title">Information Security Graded Audit</h2>
      </div>
    </div>

    <section className="section-padding--bottom section-padding--top">
      <div className="container">
        <div className="row">
        <div className="col-lg-8">


<h3 className="blog-card-one__title blog-details__title">Information Security Graded Audit</h3>
<div className="blog-details__content">
    <p>The effectiveness of an information system’s controls is evaluated through an information systems audit. An audit aims to establish whether information systems are safeguarding corporate assets, maintaining the integrity of stored and communicated data, supporting corporate objectives effectively, and operating efficiently. It is a part of a more general financial audit that verifies an organization’s accounting records and financial statements. Information systems are designed so that every financial transaction can be traced. In other words, an audit trail must exist that can establish where each transaction originated and how it was processed. Aside from financial audits, operational audits are used to evaluate the effectiveness and efficiency of information systems operations, and technological audits verify those information technologies are appropriately chosen, configured, and implemented.

</p>
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

export default InformationSecurity

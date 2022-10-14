import React from 'react'
import AuditingNav from './AuditingNav'
function InformationTechnology() {
  return (
    <div>
      <div>
      <div className="page-header">
        <div className="page-header__bg"
          style={{ backgroundImage: `url('https://wallpaperaccess.com/full/1892752.jpg')` }}></div>
        <div className="container">
        <ul className="thm-breadcrumb list-unstyled">
                <li><a href="{{ url('/') }}">Home</a></li>
                <li><a href="{{ url('/services') }}">Services</a></li>
                <li><a href="{{ url('/services/auditing') }}">Auditing</a></li>
                <li>Information Technology Audit</li>
            </ul>
            <h2 className="page-header__title">Information Technology Audit</h2>
        </div>
      </div>

      <section className="section-padding--bottom section-padding--top">
        <div className="container">
          <div className="row">
          <div className="col-lg-8">


<h3 style={{color:"orange"}} className="blog-card-one__title blog-details__title">Information Technology Audit</h3>
<div className="blog-details__content">
    <p>An IT audit is a review and assessment of a company's information technology operations, policies, and infrastructure. Information technology audits determine whether IT controls safeguard corporate resources, guarantee data integrity, and are consistent with the overarching objectives of the company.</p>
        
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

export default InformationTechnology

import React from 'react'
import AuditingNav from './AuditingNav'
function AuditingBody() {
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
            <li>Auditing</li>
        </ul>
        <h2 className="page-header__title">Auditing</h2>
         </div>
      </div>

      <section className="section-padding--bottom section-padding--top">
        <div className="container">
          <div className="row">
          <div className="col-lg-8">


<h3 className="blog-card-one__title blog-details__title">Auditing</h3>
<p>A system audit is an audit on a management system to validate whether or not the elements of the system are effective and properly implemented to meet the objectives or standards.</p>
 
<div className="blog-details__content">
    <p></p>
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

export default AuditingBody
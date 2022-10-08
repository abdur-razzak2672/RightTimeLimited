import React from 'react'
import AuditingNav from './AuditingNav'
function AuditingBody() {
  return (
    <div>
      <div>
      <div class="page-header">
        <div class="page-header__bg"
          style={{ backgroundImage: `url('/assets/images/background/auditor_pro.png')` }}></div>
        <div class="container">
        <ul class="thm-breadcrumb list-unstyled">
            <li><a href="{{ url('/') }}">Home</a></li>
            <li><a href="{{ url('/services') }}">Services</a></li>
            <li>Auditing</li>
        </ul>
        <h2 class="page-header__title">Auditing</h2>
         </div>
      </div>

      <section class="section-padding--bottom section-padding--top">
        <div class="container">
          <div class="row">
          <div class="col-lg-8">


<h3 class="blog-card-one__title blog-details__title">Auditing</h3>
<p>A system audit is an audit on a management system to validate whether or not the elements of the system are effective and properly implemented to meet the objectives or standards.</p>
 
<div class="blog-details__content">
    <p></p>
</div>


            </div>
            <div class="col-lg-4">
              <div class="sidebar">
                <div class="sidebar__item sidebar__item--category">
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
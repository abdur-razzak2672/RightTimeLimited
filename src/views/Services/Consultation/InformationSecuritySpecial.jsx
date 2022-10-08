import React from 'react'
import ConsultationNav from './ConsultationNav'
function InformationSecuritySpecial() {
  return (
    <div>
      <div class="page-header">
        <div class="page-header__bg"
          style={{ backgroundImage: `url('https://thumbs.dreamstime.com/b/digital-cyber-security-data-protection-information-safety-encryption-187835357.jpg')` }}></div>
        <div class="container">
          <ul class="thm-breadcrumb list-unstyled">
            <li><a href="{{ url('/') }}">Home</a></li>
            <li><a href="{{ url('/services') }}">Services</a></li>
            <li><a href="{{ url('/services/consultation') }}">Consultation</a></li>
            <li>Information Security-Specially Cyber Security Consulting</li>
          </ul>
          <h2 class="page-header__title">Information Security Consulting</h2>
        </div>
      </div>

      <section class="section-padding--bottom section-padding--top">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">

              <h3 class="blog-card-one__title blog-details__title">Information Security Consulting</h3>
              <div class="blog-details__content">
                <p>An information security consultant is tasked with protecting their clients' network and data from being breached. In the area of information security, often referred to as cybersecurity, there are many different roles. Some are general with a wide breadth of responsibilities.</p>

                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />

                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
              </div>


            </div>
            <div class="col-lg-4">
              <div class="sidebar">
                <div class="sidebar__item sidebar__item--category">
                  <ConsultationNav />


                </div>
              </div>
            </div>
          </div>
        </div>
      </section><br />
    </div>
  )
}

export default InformationSecuritySpecial

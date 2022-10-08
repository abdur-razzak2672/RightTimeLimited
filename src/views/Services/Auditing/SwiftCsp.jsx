import React from 'react'
import AuditingNav from './AuditingNav'
function SwiftCsp() {
  return (
    <div>
      <div>
      <div class="page-header">
        <div class="page-header__bg"
          style={{ backgroundImage: `url('https://www.atlantafed.org/-/media/images/gallery/cybersecurity/040-swift-logo/hero.jpg')` }}></div>
        <div class="container">
          <ul class="thm-breadcrumb list-unstyled">
            <li><a href="{{ url('/') }}">Home</a></li>a
            <li><a href="{{ url('/services') }}">Services</a></li>
            <li><a href="{{ url('/services/consultation') }}">Consultation</a></li>
            <li>Swift Cyber Security Consulting</li>
          </ul>
          <h2 class="page-header__title">Swift Cyber Security Consulting</h2>
          <h2 class="page-header__title"></h2>
        </div>
      </div>

      <section class="section-padding--bottom section-padding--top">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">


              <h3 style={{color:"orange"}} class="blog-card-one__title blog-details__title">SWIFT Cyber Security Consulting</h3>
              <div class="blog-details__content">
                <p>
                  The SWIFT Cyber Security consulting will help financial institutions improve their cyber security posture.
                  All SWIFT members must submit an annual self-attestation of compliance with the controls outlined in the framework.
                  SWIFT conducts random inspections on its members to ensure that they have appropriate cyber security controls in place and reports any
                  non-compliant organisations to industry regulators.
                </p>
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

export default SwiftCsp

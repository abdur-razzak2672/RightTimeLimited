import React from 'react'
import IndustriesNav from './IndustriesNav'

function HealthCare() {
  return (
    <div>
      <div class="page-header">
        <div class="page-header__bg"
          style={{ backgroundImage: `url('/assets/images/background/health.png')` }}></div>

        <div class="container">
          <ul class="thm-breadcrumb list-unstyled">
            <li><a href="{{ url('/') }}">Home</a></li>
            <li>Health Care</li>
          </ul>
          <h2 class="page-header__title">Health Care</h2>
        </div>
      </div>

      <section class="section-padding--bottom section-padding--top">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">


              <h3 class="blog-card-one__title blog-details__title" style={{ color: "orange" }} >Healthcare</h3>
              <div class="blog-details__content">
                <p>Digital transformation means that healthcare organizations are now moving to the Cloud and adopting new technologies, such as connected medical devices,
                  and paving the way to precision medicine.</p>
                <p>Patient data is a lucrative target for hackers, and with the rise of electronic medical records (EMRs) it has become highly accessible.
                  Healthcare institutions need a resilient cybersecurity solution that takes the burden of protection off their staff, who need to concentrate on treating patients.</p>
                <br />
                <h4 style={{ color: "orange" }}>How can Right Time Limited Help?</h4>
                <p>
                  Our healthcare cybersecurity consultants will assist with the strategy of healthcare providers covering the areas are-

                  <ul>
                    <li>Medical Device Penetration Testing</li>
                    <li>Network Segmentation for Medical Equipment</li>
                    <li>Device Inventory and Risk Analysis</li>
                    <li>Continuous Vulnerability Detection and Response</li>
                    <li>Continuous Incident Monitoring and Response</li>
                    <li>Medical Device Risk Assessments</li>
                    <li>Vendor Risk Management and Reviews</li>
                    <li>Data Inventory</li>
                  </ul>

                  <h5 style={{ color: "orange" }}>Some of the areas where we assist health insurance providers</h5>

                  <ul>
                    <li>Data Inventory and Risk Analysis</li>
                    <li>HIPAA Penetration Testing Services</li>
                    <li>Vendor Risk Management and Reviews</li>
                    <li>HITRUST Certification</li>
                    <li>Continuous Incident Monitoring and Response</li>

                  </ul>
                </p>
              </div>


            </div>
            <div class="col-lg-4">
              <div class="sidebar">
                <div class="sidebar__item sidebar__item--category">
                  <IndustriesNav />

                </div>
              </div>
            </div>
          </div>
        </div>
      </section><br /><br /><br />


    </div>
  )
}

export default HealthCare

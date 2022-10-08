import React from 'react'
import ConsultationNav from './ConsultationNav'
function TechnicalDoccumentation() {
  return (
    <div>
      <div class="page-header">
        <div class="page-header__bg"
          style={{ backgroundImage: `url('https://thumbs.dreamstime.com/b/ict-information-communications-technology-modern-server-room-background-virtual-screen-141876739.jpg')` }}></div>
        <div class="container">
        <ul class="thm-breadcrumb list-unstyled">
                <li><a href="{{ url('/') }}">Home</a></li>a
                <li><a href="{{ url('/services') }}">Services</a></li>
                <li><a href="{{ url('/services/consultation') }}">Consultation</a></li>
                <li>Technical Documentation on ICT</li>
            </ul>
            <h2 class="page-header__title">Technical Documentation on ICT</h2>
        </div>
      </div>

      <section class="section-padding--bottom section-padding--top">
        <div class="container">
          <div class="row">
          <div class="col-lg-8">


<h3 style={{color:"orange"}} class="blog-card-one__title blog-details__title">Technical Documentation on ICT</h3>
<div class="blog-details__content">
    <p>We have practical experience on developing IT Security Apex level policy, IT Sub-policies like Network Policy, Backup Policy, Password Policy, Email Policy, Firewall & Router Policies, Business Continuity Plan (BCP) and Disaster Recovery Plan (DRP) etc.</p>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
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

export default TechnicalDoccumentation

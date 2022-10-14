import React from 'react'
import CertificationNav from './CertificationNav'

function TiaForDataCenter() {
  return (
    <div>
    <div>
    <div className="page-header">
  <div className="page-header__bg"
       style={{ backgroundImage: `url('https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29kZSUyMHJldmlld3xlbnwwfHwwfHw%3D&w=1000&q=80'')` }}></div>
  <div className="container">
  <ul className="thm-breadcrumb list-unstyled">
          <li><a href="{{ url('/') }}">Home</a></li>
          <li><a href="{{ url('/services') }}">Services</a></li>
          <li>Standard Implementation & Certification</li>
      </ul>
      <h2 className="page-header__title">Standard Implementation & Certification</h2>
  </div> 
</div> 

<section className="section-padding--bottom section-padding--top">
  <div className="container">
      <div className="row">
      <div className="col-lg-8">


<h3 className="blog-card-one__title blog-details__title">Standard Implementation & Certification</h3>
<div className="blog-details__content">
  <p>List of standards & certifications that we provide.</p>
  <br/><br/><br/><br/><br/><br/><br/><br/><br/>
</div>


          </div> 
          <div className="col-lg-4">
              <div className="sidebar">
                  <div className="sidebar__item sidebar__item--category">
                      {/* @include('frontend.bd.services.sat.common') */}
                      <CertificationNav/>
                  </div>
              </div>
          </div>
      </div>
  </div>
</section><br></br><br/>
  </div>
    
  </div>
  )
}

export default TiaForDataCenter

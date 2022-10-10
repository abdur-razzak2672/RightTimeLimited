import React from 'react'
import CertificationNav from './CertificationNav'
function CertificationBody() {
  return (
    <div>
      <div>
      <div class="page-header">
    <div class="page-header__bg"
         style={{ backgroundImage: `url('https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29kZSUyMHJldmlld3xlbnwwfHwwfHw%3D&w=1000&q=80'')` }}></div>
    <div class="container">
    <ul class="thm-breadcrumb list-unstyled">
            <li><a href="{{ url('/') }}">Home</a></li>
            <li><a href="{{ url('/services') }}">Services</a></li>
            <li>Standard Implementation & Certification</li>
        </ul>
        <h2 class="page-header__title">Standard Implementation & Certification</h2>
    </div> 
</div> 

<section class="section-padding--bottom section-padding--top">
    <div class="container">
        <div class="row">
        <div class="col-lg-8">


<h3 class="blog-card-one__title blog-details__title">Standard Implementation & Certification</h3>
<div class="blog-details__content">
    <p>List of standards & certifications that we provide.</p>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/>
</div>


            </div> 
            <div class="col-lg-4">
                <div class="sidebar">
                    <div class="sidebar__item sidebar__item--category">
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

export default CertificationBody
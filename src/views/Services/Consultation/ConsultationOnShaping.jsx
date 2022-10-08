import React from 'react'
import ConsultationNav from './ConsultationNav'
function ConsultationOnShaping() {
  return (
    <div>
      <div class="page-header">
        <div class="page-header__bg"
          style={{ backgroundImage: `url('https://wallpaperaccess.com/full/1398628.jpg')` }}></div>
        <div class="container">
        <ul class="thm-breadcrumb list-unstyled">
                <li><a href="{{ url('/') }}">Home</a></li>
                <li><a href="{{ url('/services') }}">Services</a></li>
                <li><a href="{{ url('/services/consultation') }}">Consultation</a></li>
                <li>Consultation on Shaping the DC & DRS</li>
            </ul>
            <h2 class="page-header__title">Consultation on Shaping the DC & DRS</h2>
          <h2 class="page-header__title"></h2>
        </div>
      </div>

      <section class="section-padding--bottom section-padding--top">
        <div class="container">
          <div class="row">
          <div class="col-lg-8">


<h3 class="blog-card-one__title blog-details__title">Consultation on Shaping the DC & DRS</h3>
<div class="blog-details__content">
    <p>Modern data centers are the nerve center where everything happens in terms of processing and storing a company’s data. Aware of this importance, 
    Right Time Limited provides consultancy to protect, enhance, streamline and support these data centers of our customers. With a team of very experienced and highly certified professionals in Data Center technologies, Right Time Limited is able to efficiently provide consultancy.</p>
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
      </section><br /><br /><br /> 
    </div>
  )
}

export default ConsultationOnShaping

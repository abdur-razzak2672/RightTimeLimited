import React from 'react'
import ConsultationNav from './ConsultationNav'

function ConsultationBody() {
  return (
    <div>
      <div class="page-header">
        <div class="page-header__bg"
          style={{ backgroundImage: `url('/assets/images/background/con.png')` }}></div>
        <div class="container">
         <ul class="thm-breadcrumb list-unstyled"> 
         <li><a href="{{ url('/') }}">Home</a></li>
           <li><a href="{{ url('/services') }}">Services</a></li> 
         <li>Consultation</li> 
        </ul> 
          <h2 class="page-header__title">Consultation</h2>
        </div>
      </div>

      <section class="section-padding--bottom section-padding--top">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">


              <h3 class="blog-card-one__title blog-details__title">Consultation</h3>
              <div class="blog-details__content">
                <p>
                  We provide various cyber security consultancy services.
                </p>
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

export default ConsultationBody
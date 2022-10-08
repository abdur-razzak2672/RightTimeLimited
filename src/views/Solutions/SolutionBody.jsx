import React from 'react'
import SolutionNav from './SolutionNav'
function SolutionBody() {
  return (
    <div>
      <div>
      <div class="page-header">
        <div class="page-header__bg"
          style={{ backgroundImage: `url('/assets/images/background/sol.png')` }}></div>
        <div class="container">
        <ul class="thm-breadcrumb list-unstyled">
                <li><a href="{{ url('/') }}">Home</a></li>
                <li><a href="{{ url('/services') }}">Services</a></li>
                <li>Solutions</li>
            </ul>
            <h2 class="page-header__title">Solutions</h2>
         </div>
      </div>

      <section class="section-padding--bottom section-padding--top">
        <div class="container">
          <div class="row">
          <div class="col-lg-8">


<h3 class="blog-card-one__title blog-details__title">Solutions</h3>
<div class="blog-details__content">
    <p>Our solutions are designed to help you achieve your business goals. We provide a wide range of solutions that are tailored to meet your business needs. We have a team of experts who are ready to help you achieve your business goals.</p>
</div>


            </div>
            <div class="col-lg-4">
              <div class="sidebar">
                <div class="sidebar__item sidebar__item--category">
                  <SolutionNav />
                  
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

export default SolutionBody

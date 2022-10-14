import React from 'react'
import SolutionNav from './SolutionNav'
function SolutionBody() {
  return (
    <div>
      <div>
      <div className="page-header">
        <div className="page-header__bg"
          style={{ backgroundImage: `url('/assets/images/background/sol.png')` }}></div>
        <div className="container">
        <ul className="thm-breadcrumb list-unstyled">
                <li><a href="{{ url('/') }}">Home</a></li>
                <li><a href="{{ url('/services') }}">Services</a></li>
                <li>Solutions</li>
            </ul>
            <h2 className="page-header__title">Solutions</h2>
         </div>
      </div>

      <section className="section-padding--bottom section-padding--top">
        <div className="container">
          <div className="row">
          <div className="col-lg-8">


<h3 className="blog-card-one__title blog-details__title">Solutions</h3>
<div className="blog-details__content">
    <p>Our solutions are designed to help you achieve your business goals. We provide a wide range of solutions that are tailored to meet your business needs. We have a team of experts who are ready to help you achieve your business goals.</p>
</div>


            </div>
            <div className="col-lg-4">
              <div className="sidebar">
                <div className="sidebar__item sidebar__item--category">
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

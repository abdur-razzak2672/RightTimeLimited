import React from 'react'
import AssessmentNav from './AssessmentNav'
function AssessmentBody() {
  return (
    <div>
      <div class="page-header">
        <div class="page-header__bg"
          style={{ backgroundImage: `url('https://www.icorps.com/hs-fs/hubfs/Hero%20Image%2021-1.png?width=1500&height=600&name=Hero%20Image%2021-1.png')` }}></div>
        <div class="container">
        <ul class="thm-breadcrumb list-unstyled">
            <li><a href="{{ url('/') }}">Home</a></li>
            <li><a href="{{ url('/services/security-training') }}">Training</a></li>
            <li>Assessment</li>
        </ul>
        <h2 class="page-header__title">Assessment</h2>
         </div>
      </div>

      <section class="section-padding--bottom section-padding--top">
        <div class="container">
          <div class="row">
          <div class="col-lg-8">


                <h3 style={{color:"orange"}} class="blog-card-one__title blog-details__title">Assessment</h3>
                <div class="blog-details__content">
                    <p>
                        List of the assessments that we provide.
                    </p>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/><br/>
                    <br/>
                    <br/><br/><br/>
                    <br/>
                </div>


            </div>
            <div class="col-lg-4">
              <div class="sidebar">
                <div class="sidebar__item sidebar__item--category">
                  <AssessmentNav />
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section><br /><br /><br />
    </div>
  )
}

export default AssessmentBody

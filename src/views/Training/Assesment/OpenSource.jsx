import React from 'react'
import AssessmentNav from './AssessmentNav'
function OpenSource() {
  return (
    <div>
    <div class="page-header">
  <div class="page-header__bg"
       style={{ backgroundImage: `url('frontend/assets/images/background/osint.png')` }}></div>
  <div class="container">
  <ul class="thm-breadcrumb list-unstyled">
                <li><a href="{{ url('/') }}">Home</a></li>
                <li><a href="{{ url('/services/security-training') }}">Security Training</a></li>
                <li><a href="{{ url('/services/security-training/assessment') }}">Assessment</a></li>
                <li>Open Source Intelligence(OSINT)</li>
            </ul>
            <h2 class="page-header__title">Open Source Intelligence(OSINT)</h2>
  </div> 
</div> 

<section class="section-padding--bottom section-padding--top">
  <div class="container">
      <div class="row">
      <div class="col-lg-8">


                    <h3 class="blog-card-one__title blog-details__title">Open-Source Intelligence (OSINT) :</h3>
                    <div class="blog-details__content">
                        <p>This course focuses on Open Source Intelligence (OSINT) tactics and techniques designed to
                            help you improve your investigative game. Students should take this course if they are interested in:
                            <br/><br/>
                            Gaining a better understanding of OSINT techniques<br/>
                            Improving investigative skillset<br/>
                            Improving overall research methodology<br/>
                            Improving Personal OPSEC<br/><br/>
                            Open-source intelligence (OSINT) is the practice of collecting information
                            from published or otherwise publicly available sources.
                        </p>
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
                      {/* @include('frontend.bd.services.sat.common') */}
                      <AssessmentNav/>
                  </div>
              </div>
          </div>
      </div>
  </div>
</section><br/> <br/><br/>
  </div>
  )
}

export default OpenSource

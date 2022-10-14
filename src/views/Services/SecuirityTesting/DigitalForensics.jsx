import React from 'react'
import SecurityTestingNav from './SecurityTestingNav'

function DigitalForensics() {
  return (
    <div>
         <div>
      <div className="page-header">
    <div className="page-header__bg"
         style={{ backgroundImage: `url('/assets/images/background/page-header-bg-1-1.jpg')` }}></div>
    <div className="container">
        <ul className="thm-breadcrumb list-unstyled">
            <li><a href="{{ url('/') }}">Home</a></li>
            <li><a href="{{ url('/services') }}">Digital Forensic</a></li>
            <li>Security Assessment & Testing</li>
        </ul>
        <h2 className="page-header__title">Security Assessment & Testing</h2> 
    </div> 
</div> 

<section className="section-padding--bottom section-padding--top">
    <div className="container">
        <div className="row">
            <div className="col-lg-8">


                <h3 className="blog-card-one__title blog-details__title">Web design done Delightful
                    Visualization Examples</h3>
                <div className="blog-details__content">
                    <p>Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum. There are many
                        variations of passages of Lorem Ipsum available, but the majority have alteration in
                        some injected or words which don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrang hidden
                        in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat
                        predefined chunks as necessary, making this the first true generator on the Internet. It
                        uses a dictionary of over 200 Latin words, combined with a handful of model sentence
                        structures, to generate Lorem Ipsum which looks reasonable. </p>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                        unknown printer took a galley of type and scrambled it to make a type simen book. It has
                        survived not only five centuries, but also the leap into electronic typesetting.</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. orem Ipsum has
                        been the industry's standard dummy text ever since the when an unknown printer took a
                        galley of type and scrambled it to make a type specimen book. It has survived not only
                        five centuries, but also the leap into unchanged.</p>
                </div>


            </div> 
            <div className="col-lg-4">
                <div className="sidebar">
                    <div className="sidebar__item sidebar__item--category">
                        {/* @include('frontend.bd.services.sat.common') */}
                        <SecurityTestingNav/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section><br></br>
    </div>
      
    </div>
  )
}

export default DigitalForensics

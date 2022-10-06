import React from 'react'
import IndustriesNav from './IndustriesNav'
function IndustriusBody() {
  return (
    <div>
    <div class="page-header">
        <div class="page-header__bg"
             style={{backgroundImage: `url('/assets/images/background/i1.png')` }}></div>
        <div class="container">
            <ul class="thm-breadcrumb list-unstyled">
                <li><a href="/}">Home</a></li>
                <li>Industries</li>
            </ul>
            <h2 class="page-header__title">Industries</h2>
        </div>
    </div>

    <section class="section-padding--bottom section-padding--top">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">


                    <h3 class="blog-card-one__title blog-details__title" style={{color:"orange"}}> List of industries that we cover - </h3>
                    <div class="blog-details__content">
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
                            <IndustriesNav/>

                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </section><br/><br/>
                <br/>
                <br/>
                <br/>
    
      
    </div>
  )
}

export default IndustriusBody

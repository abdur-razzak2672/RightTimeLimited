import React from 'react'
import IndustriesNav from './IndustriesNav'
function IndustriusBody() {
  return (
    <div>
    <div className="page-header">
        <div className="page-header__bg"
             style={{backgroundImage: `url('/assets/images/background/i1.png')` }}></div>
        <div className="container">
            <ul className="thm-breadcrumb list-unstyled">
                <li><a href="/}">Home</a></li>
                <li>Industries</li>
            </ul>
            <h2 className="page-header__title">Industries</h2>
        </div>
    </div>

    <section className="section-padding--bottom section-padding--top">
        <div className="container">
            <div className="row">
                <div className="col-lg-8">


                    <h3 className="blog-card-one__title blog-details__title" style={{color:"orange"}}> List of industries that we cover - </h3>
                    <div className="blog-details__content">
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
                <div className="col-lg-4">
                    <div className="sidebar">
                        <div className="sidebar__item sidebar__item--category">
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

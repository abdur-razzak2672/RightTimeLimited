import React from 'react'
import './career.css'
function CareersBody() {
  return (
    <div>
      <div className="page-header">
        <div className="page-header__bg"
          style={{ backgroundImage: `url('https://www.krg.ca/en-CA/assets/Careers-new.jpg')` }}></div>
        <div className="container">
          <ul className="thm-breadcrumb list-unstyled">
            <li><a href="{{ url('/') }}">Home</a></li>
            <li>Careers</li>
          </ul>
          <h2 className="page-header__title">Careers</h2>
        </div>
      </div>
      <div className=" mt-5">
        </div>
        <section className="     m-5">
          <div className=" ">
          <div className="section-title text-center">
            <p className="section-title__text">Our Values</p>
            <h2 className="section-title__title">Employee Benefit & <br/>Compensations</h2>

          </div>
            <ul className="card-wrapper1">
            <li className="card2">
                <a className="circleImage mt-4" href="/"><img className="  text-center" src="/assets/images/career/Hybrid.svg" alt="" /></a>
                <h3 style={{fontSize:"25px"}} className="text-center  my-4" ><a className="text-light" href="">Hybrid/remote/in-office</a></h3>
            
              </li>
              <li className="card2">
                <a className="circleImage mt-4" href="/"><img className="  text-center" src="/assets/images/career/Paid.svg" alt="" /></a>
                <h3 style={{fontSize:"25px"}} className="text-center  my-4" ><a className="text-light" href="">Paid vacation
</a></h3>
            
              </li>
              <li className="card2">
                <a className="circleImage mt-4" href="/"><img className="  text-center" src="/assets/images/career/Company.svg" alt="" /></a>
                <h3 style={{fontSize:"25px"}} className="text-center  my-4" ><a className="text-light" href="">Company retreat</a></h3>
            
              </li>
              <li className="card2">
                <a className="circleImage mt-4" href="/"><img className="  text-center" src="/assets/images/career/Performance.svg" alt="" /></a>
                <h3 style={{fontSize:"25px"}} className="text-center  my-4" ><a className="text-light" href="">Performance bonus</a></h3>
            
              </li>
              <li className="card2">
                <a className="circleImage mt-4" href="/"><img className="  text-center" src="/assets/images/career/Childcare.svg" alt="" /></a>
                <h3 style={{fontSize:"25px"}} className="text-center  my-4" ><a className="text-light" href="">Childcare facilities
</a></h3>
            
              </li>
              <li className="card2">
                <a className="circleImage mt-4" href="/"><img className="  text-center" src="/assets/images/career/Wellness.svg" alt="" /></a>
                <h3 style={{fontSize:"25px"}} className="text-center  my-4" ><a className="text-light" href="">Wellness programs</a></h3>
            
              </li>
            

            </ul>


          </div>
        </section>


      <section className="m-5 pt-5" style = {{backgroundColor :"#261d3b"}}>
        <div className=" ">
          <div className="section-title text-center">
            <p className="section-title__text ">Jobs</p>
            <h2 className="section-title__title text-light">Opening Jobs</h2>
          </div>
          <h4 className ="mx-5">All Jobs</h4>
          <div className="mx-5 p-5  row border rounded shadow">
             <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-8">
                  <h1>Junior Our Specialist</h1>
                  <div className="d-flex">
                    <h5 style={{marginRight:"30px"}} >Marketing</h5>
                    <h5>Remote Position</h5>
                  </div>

                </div>
                <div className="col-lg-4 jobButton">
                <a href="/view-job" className="thm-btn cta-two__btn rounded-5">
              <span>View Position <i className="mx-3 fas fa-arrow-right"></i></span> 
            </a>

                </div>

              </div>
             
                 

            </div>
          </div>


        </div>
        <br/>
        <br/>

        <br/>

        <br/>

      </section>


      <section className="m-5 pt-5" style = {{backgroundColor :"#261d3b"}}>
        <div className=" ">
          <div className="section-title text-center">
             <h2 className="section-title__title text-light">ReadyTo Build Successfull Tech Product </h2>
             <h4 className ="mt-3">Schedule a Free Consultation and See How To The Magic Unfolds</h4>
             <a href="/contact" className=" mt-5 thm-btn cta-two__btn rounded-5">
                    <span>Start a Project <i className="mx-3 fas fa-arrow-right"></i></span> 
                  </a>

          </div>
        
        </div>
        <br/>
        <br/>

      

      </section>





      <br /><br /><br /> 

    </div>
  )
}

export default CareersBody

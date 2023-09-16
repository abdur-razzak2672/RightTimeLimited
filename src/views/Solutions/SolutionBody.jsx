import React from 'react'
import SolutionNav from './SolutionNav'
 
import BenitsConpany from '../Services/ServicesBody/BenitsConpany'
import CommonSecuirityAssesment from './CommonSecuirityAssesment'
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

      <section className="section-padding--bottom  mt-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
            <div className="container pt-4">
          <img className="rounded"width="100%" height="400px" src="/assets/images/solutions/sltn.png" alt="img" />
          <p className="text-dark">Right Time Limited's Security Solutions encompass powerful Security Assessment (VA & PT) Tools and Cybersecurity Management & Visibility Solutions. By leveraging these offerings, It empowers organizations to proactively assess their security posture, address vulnerabilities, and effectively manage their cybersecurity environment.</p>
          </div>
        
            </div>
            <div className="col-lg-4">
              <CommonSecuirityAssesment/>
            </div>
          </div>


          </div>
          


 
      </section><br /><br /><br />
    </div>
    </div>
  )
}

export default SolutionBody

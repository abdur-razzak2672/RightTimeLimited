import React from 'react'
import Allpage from '../../components/all-page/Allpage'

function CaseStudies() {

  return (
    <div>
      <div className="page-header">
        <div
          className="page-header__bg"
          style={{ backgroundImage: `url('../images/resources/aboutbg1.png')` }}
        ></div>
        <div className="container">
          <ul className="thm-breadcrumb list-unstyled">
            <li>
              <a href="/">Home</a>
            </li>
            <li>Case Studies</li>
          </ul>
          <h2 className="page-header__title">Case Studies</h2>
        </div>

      </div>

      <section>
        <div className="container mt-5">
          <h2 className="text-center header">Case Studies</h2>
          <p className='text-dark'> The case studies provided by Right Time Limited showcase real-world examples of their work with clients. These case studies illustrate how their security solutions and services have addressed specific challenges, improved security posture, and delivered positive outcomes for organizations across different industries.
          </p>


        </div>

        <h6 className='text-success mt-5 text-center'>More Information Coming Soon .....</h6>


      </section>





      <br /><br /><br /><br /><br /> </div>
  )
}

export default CaseStudies
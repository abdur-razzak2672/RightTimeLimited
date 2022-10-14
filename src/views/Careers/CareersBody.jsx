import React from 'react'

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
      <br /><br /><br />
      <h2 className='text-center'>
        No jobs available right now.
      </h2>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

    </div>
  )
}

export default CareersBody

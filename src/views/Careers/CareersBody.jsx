import React from 'react'

function CareersBody() {
  return (
    <div>
      <div class="page-header">
        <div class="page-header__bg"
          style={{ backgroundImage: `url('https://www.krg.ca/en-CA/assets/Careers-new.jpg')` }}></div>
        <div class="container">
          <ul class="thm-breadcrumb list-unstyled">
            <li><a href="{{ url('/') }}">Home</a></li>
            <li>Careers</li>
          </ul>
          <h2 class="page-header__title">Careers</h2>
        </div>
      </div>
      <br /><br /><br />
      <h2 class='text-center'>
        No jobs available right now.
      </h2>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

    </div>
  )
}

export default CareersBody

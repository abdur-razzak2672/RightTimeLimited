import React, { useState } from 'react'


function BasisCorporate() {
  const [tabIndex, setTabIndex] = useState(1);

  return (
    <div>
    <div className="page-header">
      <div className="page-header__bg"
        style={{ backgroundImage: `url('/assets/images/background/page-header-bg-1-1.jpg'')` }}></div>
      <div className="container">
      <ul className="thm-breadcrumb list-unstyled">
            <li><a href="{{ url('/') }}">Home</a></li>
            <li><a href="{{ url('/services/security-training') }}">Training</a></li>
            <li>Right Time Customized</li>
        </ul>
        <h2 className="page-header__title">Coming Soon...</h2>
      </div>
    </div>
    <h2 className='header text-center p-5 m-5'>Coming Soon...</h2>
    
  
      
      <br /><br /><br /><br />
      </div>
  )
}

export default BasisCorporate

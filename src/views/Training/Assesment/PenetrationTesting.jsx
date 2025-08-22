import React, { useState } from 'react'
import AssesmentHomeComponent from './AssesmentHomeComponent';
import { penetrationtestingData } from './data/peniationtestingData';

function PenetrationTesting() {
  return (
    <div>
      <div className="page-header">
        <div className="page-header__bg"
          style={{ backgroundImage: `url('assets/images/resources/CEv12.webp')` }}></div>
        <div className="container">
          <ul className="thm-breadcrumb list-unstyled">
            <li><a href="{{ url('/') }}">Home</a></li>
            <li><a href="{{ url('/services') }}">Training</a></li>
            <li><a href="{{ url('/services') }}">Certified Penetration Testing Professional (CPENT)</a></li>

            <li>Certified Penetration Testing Professional (CPENT)</li>
          </ul>
          <h2 className="page-header__title">Certified Penetration Testing Professional (CPENT)</h2>
        </div>
      </div>


      <AssesmentHomeComponent data={penetrationtestingData} />

      <br /><br /><br /><br />
    </div>
  )
}

export default PenetrationTesting

import React from 'react'

function CustomizedNav() {
  return (
    <div>
      <h3 class="sidebar__title">Right Time Customized</h3>
      <ul class="sidebar__category">
        <li><a href="{{ url('/services/security-training/right-time-customized/basic') }}">Basic (Corporate)</a></li>
        <li><a href="{{ url('/services/security-training/right-time-customized/advanced') }}">Advance (Corporate)</a></li>
        <li><a href="{{ url('/services/security-training/right-time-customized/intermediate') }}">Intermediate (Corporate)</a></li>
        <li><a href="{{ url('/services/security-training/right-time-customized/one-to-one-training') }}">One to One Training</a></li>
      </ul>
    </div>
  )
}

export default CustomizedNav

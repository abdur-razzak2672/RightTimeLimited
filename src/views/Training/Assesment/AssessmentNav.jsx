import React from 'react'

function AssessmentNav() {
  return (
    <div>
        <h3 class="sidebar__title">Assessment</h3>
<ul class="sidebar__category">
    <li><a href="{{ url('/services/security-training/assessment/ethical-hacker') }}">Certified Ethical Hacker (CEH)</a></li>
    <li><a href="{{ url('/services/security-training/assessment/CPENT') }}">Certified Penetration Testing Professional(CPENT)</a></li>
    <li><a href="{{ url('/services/security-training/assessment/CHFI') }}">Computer Hacking Forensic Investigator(CHFI)</a></li>
    <li><a href="{{ url('/services/security-training/assessment/OSINT') }}">Open Source Intelligence(OSINT)</a></li>
    <li><a href="{{ url('/services/security-training/assessment/GPEN') }}">GIAC Penetration Tester(GPEN)</a></li>
    <li><a href="{{ url('/services/security-training/assessment/GWAPT') }}">GIAC Web Application Penetration Tester(GWAPT)</a></li>
</ul>
      
    </div>
  )
}

export default AssessmentNav

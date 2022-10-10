import React from 'react'

function SecurityTestingNav() {
    return (
        <div>
            <h3 class="sidebar__title">Security Assessment & Testing</h3> 
            <ul class="sidebar__category">
                <li><a href="{{ url('/services/security-assessment-testing/VAPT') }}">Vulnerability Assessment & Presentation Testing Services</a></li>
                <li><a href="{{ url('/services/security-assessment-testing/digital-forensics') }}">Digital Forensics</a></li>
                <li><a href="{{ url('/services/security-assessment-testing/code-review') }}">Code Review</a></li>
            </ul>
        </div>
    )
}

export default SecurityTestingNav

import React from 'react'

function CertificationNav() {
    return (
        <div>
            <h3 class="sidebar__title">Standard Implementation & Certification</h3> 
            <ul class="sidebar__category">
                <li><a href="{{ url('/services/standard-implementation-certification/pci-dss') }}">Payment Card Industry Data Security Standards</a></li>
                <li><a href="{{ url('/services/standard-implementation-certification/iso') }}">International Organization for Standardization-ISO</a></li>
                <li><a href="{{ url('/services/standard-implementation-certification/CMMI') }}">CMMI</a></li>
                <li><a href="{{ url('/services/standard-implementation-certification/SCIA') }}">SWIFT CSP Independent Assesment</a></li>
                <li><a href="{{ url('/services/standard-implementation-certification/data-center') }}">TIA 942 for Data Center</a></li>
            </ul>

        </div>
    )
}

export default CertificationNav

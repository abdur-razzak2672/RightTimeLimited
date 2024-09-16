import React, { useState } from 'react'
import CustomizedNav from './CustomizedNav';

function GovernanceCorporate() {
    // const [tabIndex, setTabIndex] = useState(1);

    return (
        <div>
            <div className="page-header">
                <div className="page-header__bg"
                    style={{ backgroundImage: `url('/assets/images/background/page-header-bg-1-1.jpg')` }}></div>
                <div className="container">
                    <ul className="thm-breadcrumb list-unstyled">
                        <li><a href="{{ url('/') }}">Home</a></li>
                        <li><a href="{{ url('/services/security-training') }}">Training</a></li>
                        <li>Management</li>
                    </ul>
                    <h2 className="page-header__title">Governance - (Corporate)</h2>
                </div>
            </div>
            <section className="  section-padding--top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <h3 className='blog-card-one__title blog-details__title changeColor'>Governance - (Corporate)</h3>
                            <div className="governance-raci-diagram dipt-container">

                                <div className="governance-central-circle">CISO</div>
                                <div className="governance-outer-circle governance-outer-circle-1 governance-mini-circles">Responsible</div>
                                <div className="governance-outer-circle governance-outer-circle-2 governance-mini-circles">Accountable</div>
                                <div className="governance-outer-circle governance-outer-circle-3 governance-mini-circles">Consulted</div>
                                <div className="governance-outer-circle governance-outer-circle-4 governance-mini-circles">Informed</div>
                                <div className="governance-outer-circle governance-outer-circle-5 governance-mini-circles">Responsible</div>
                            </div>

                        </div>
                        <div className="col-lg-5 mt-5">
                            <CustomizedNav />
                        </div>
                    </div>
                </div>
            </section>

            <div className="page-header mt-4" >
                <div className="page-header__bg"
                    style={{ backgroundImage: `url('https://www.icorps.com/hs-fs/hubfs/Hero%20Image%2021-1.png?width=1500&height=600&name=Hero%20Image%2021-1.png')` }}></div>
                <div className="container">
                    <ul className="thm-breadcrumb list-unstyled">
                        <h2 className="text-light">Digital Badging</h2>
                    </ul>
                    <p className="text-light">“Right Time Limited” is a highly esteemed security service provider, assisting businesses in fortifying their security posture. It offers expert consultation, meticulous testing, certification support, and reliable managed services to safeguard assets and mitigate risks.</p>
                </div>
            </div>

            <br /><br /><br /><br />
        </div>
    )
}

export default GovernanceCorporate;
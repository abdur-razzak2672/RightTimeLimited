import React, { useState } from 'react'
import CustomizedNav from './CustomizedNav';

function FoundationTrack() {
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
                    <h2 className="page-header__title">Foundation track - (Corporate)</h2>
                </div>
            </div>
            <section className="  section-padding--top">
                <div className="container">
                    <div className="row">
                       <div className="col-lg-7 ">
                            <h3 className='blog-card-one__title blog-details__title changeColor'>Foundation track - (Corporate)</h3>
                            <div className="dipt-container">
                                {/* Tile 1: CEH */}
                                <div className="dipt-box dipt-box1">
                                    <div className="dipt-inner-box inner-box1">
                                        <p className='inner-box1-p'>CEH</p>
                                        <p className='number-box1'>312-50</p>
                                    </div>
                                    <div className="dipt-inner-box inner-box2">
                                        <p className='inner-box2-p'>EC-Council Certified <br /> Ethical Hacker</p>
                                    </div>
                                </div>

                                {/* Tile 2: ECSA */}
                                <div className="dipt-box dipt-box2">
                                    <div className="dipt-inner-box inner-box1">
                                        <p className='inner-box1-p'>ECSA</p>
                                        <p className='number-box1'>412-79</p>
                                    </div>
                                    <div className="dipt-inner-box inner-box2">
                                        <p className='inner-box2-p'>EC-Council Certified <br /> Security Analyst</p>
                                    </div>
                                </div>

                                {/* Tile 3: CHFI */}
                                <div className="dipt-box dipt-box3">
                                    <div className="dipt-inner-box inner-box1">
                                        <p className='inner-box1-p'>CHFI</p>
                                        <p className='number-box1'>312-49</p>
                                    </div>
                                    <div className="dipt-inner-box inner-box2">
                                        <p className='inner-box2-p'>EC-Council <br /> Computer Hacking Forensic Investigator</p>
                                    </div>
                                </div>

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
                    <p className="text-light dipt-breadcrump-paragraph ">“Right Time Limited” is a highly esteemed security service provider, assisting businesses in fortifying their security posture. It offers expert consultation, meticulous testing, certification support, and reliable managed services to safeguard assets and mitigate risks.</p>
                </div>
            </div>

            <br /><br /><br /><br />
        </div>
    )
}

export default FoundationTrack
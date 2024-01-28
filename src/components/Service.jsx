import React from "react";
import Slider from "react-slick";

function Service() {

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,        

        infinite: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 817,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                 }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div>
            <section
                className="section-padding--top service-four gray-bg section-padding-lg--bottom section-has-bottom-margin mt-3 background-repeat-no background-position-top-right"
                style={{
                    backgroundImage: `url('assets/images/shapes/service-four-bg-1-1.png')`,
                }}
            >
                <div className="container">
                    <div className="container">
                        <div className="section-title text-center">
                            <p className="section-title__text">Popular Services</p>
                            <h2 className="header">We Provide Our Client Best <br />Information Security Solution & Services</h2>

                        </div>

                        <Slider {...settings}>
                            <div>
                                <div className="item">
                                    <div style={{ height: "300px", width: "240px" }} className="service-card-three">
                                        <div className="service-card-three__icon">
                                            <i className="icon-new-product"></i>
                                        </div>
                                        <div className="service-card-three__content">
                                            <h3 className="service-card-three__title"><a href="/consultation">Standard Implementation & certification
                                                <br /></a></h3>
                                            <div className="service-card-three__text">Providing the solutions for non-IT businesses.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="item">
                                    <div style={{ height: "300px", width: "240px" }} className="service-card-three">
                                        <div className="service-card-three__icon">
                                            <i className="icon-new-product"></i>
                                        </div>
                                        <div className="service-card-three__content">
                                            <h3 className="service-card-three__title"><a href="/auditing">Cyber Security Training (customized)</a></h3>
                                            <div className="service-card-three__text">Providing the solutions for non-IT businesses.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="item">
                                    <div style={{ height: "300px", width: "240px" }} className="service-card-three">
                                        <div className="service-card-three__icon">
                                            <i className="icon-protection"></i>
                                        </div>
                                        <div className="service-card-three__content">
                                            <h3 className="service-card-three__title"><a
                                                href="/">Security Assessment & Testing <br />
                                                Assessment & Testing</a></h3>
                                            <div className="service-card-three__text">Providing the solutions for non-IT businesses.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="item">
                                    <div style={{ height: "300px", width: "240px" }} className="service-card-three">
                                        <div className="service-card-three__icon">
                                            <i className="icon-web-development"></i>
                                        </div>
                                        <div className="service-card-three__content">
                                            <h3 className="service-card-three__title"><a href="/">Customized ITES and Cyber Security Solutins</a></h3>
                                            <div className="service-card-three__text">Providing the solutions for non-IT businesses.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="item">
                                    <div style={{ height: "300px", width: "240px" }} className="service-card-three">
                                        <div className="service-card-three__icon">
                                            <i className="icon-web-development"></i>
                                        </div>
                                        <div className="service-card-three__content">
                                            <h3 className="service-card-three__title"><a href="/">Customized ITES and Cyber Security Solutins</a></h3>
                                            <div className="service-card-three__text">Providing the solutions for non-IT businesses.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="item">
                                    <div style={{ height: "300px", width: "240px" }} className="service-card-three">
                                        <div className="service-card-three__icon">
                                            <i className="icon-analysis"></i>
                                        </div>
                                        <div className="service-card-three__content">
                                            <h3 className="service-card-three__title"><a href="/">Auditing (IS & IT)</a></h3>
                                            <div className="service-card-three__text">Providing the solutions for non-IT businesses.
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div>
                                <div className="item">
                                    <div style={{ height: "300px", width: "240px" }} className="service-card-three">
                                        <div className="service-card-three__icon">
                                            <i className="icon-analysis"></i>
                                        </div>
                                        <div className="service-card-three__content">
                                            <h3 className="service-card-three__title"><a href="/"> Managed Services (ITES & cyber Security)</a></h3>
                                            <div className="service-card-three__text">Providing the solutions for non-IT businesses.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="item">
                                    <div style={{ height: "300px", width: "240px" }} className="service-card-three">
                                        <div className="service-card-three__icon">
                                            <i className="icon-analysis"></i>
                                        </div>
                                        <div className="service-card-three__content">
                                            <h3 className="service-card-three__title"><a href="/"> Consultation (DC & DRS, ITES architecture)</a></h3>
                                            <div className="service-card-three__text">Providing the solutions for non-IT businesses.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="item">
                                    <div style={{ height: "300px", width: "240px" }} className="service-card-three">
                                        <div className="service-card-three__icon">
                                            <i className="icon-analysis"></i>
                                        </div>
                                        <div className="service-card-three__content">
                                            <h3 className="service-card-three__title"><a href="/"> Complete Technical Documentation in ITES</a></h3>
                                            <div className="service-card-three__text">Providing the solutions for non-IT businesses.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>




                    </div>
                </div>
            </section>


        </div>
    );
}

export default Service;

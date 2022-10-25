import React from 'react'
import IndustriesNav from './IndustriesNav'
import './industries.css'
function IndustriusBody() {
    return (
        <div>
            <div className="page-header">
                <div className="page-header__bg"
                    style={{ backgroundImage: `url('/assets/images/background/i1.png')` }}></div>
                <div className="container">
                    <ul className="thm-breadcrumb list-unstyled">
                        <li><a href="/}">Home</a></li>
                        <li>Industries</li>
                    </ul>
                    <h2 className="page-header__title">Industries</h2>
                </div>
            </div>

            <section className="  text-center mt-5">
                <div className=" ">  
                    <div className="wrapper1 page-header">
                    <p className="section-title__text">Our Focus Industries</p>
                         <h2 className="section-title__title text-light">Industries We Specialized We</h2>
                        <ul className="img-grid mt-5 cardHieght ">
                        <li style={{width:"200px"}} className ="m-2 rounded border ">
                                <a href="#" className="overlay-container" >
                                <img src="assets/images/Industries/Banking.svg" alt="Image capture goes here 01" className="overlay-img rounded-2" width ="60%" />
                                <p>Banking</p>
                                </a>
                            </li>
                            <li style={{width:"200px"}} className ="m-2 rounded border ">
                                <a href="#" className="overlay-container" >
                                <img src="assets/images/Industries/eCommerce.svg" alt="Image capture goes here 01" className="overlay-img rounded-2" width ="60%" />
                                <p>Ecommerce</p>
                                </a>
                            </li>
                            <li style={{width:"200px"}} className ="m-2 rounded border ">
                                <a href="#" className="overlay-container" >
                                <img src="assets/images/Industries/Education.svg" alt="Image capture goes here 01" className="overlay-img rounded-2" width ="60%" />
                                <p>Education</p>
                                </a>
                            </li>
                            <li style={{width:"200px"}} className ="m-2 rounded border ">
                                <a href="#" className="overlay-container" >
                                <img src="assets/images/Industries/Healthcare.svg" alt="Image capture goes here 01" className="overlay-img rounded-2" width ="60%" />
                                <p>Health Care</p>
                                </a>
                            </li>
                            <li style={{width:"200px"}} className ="m-2 rounded border ">
                                <a href="#" className="overlay-container" >
                                <img src="assets/images/Industries/pci.png" alt="Image capture goes here 01" className="overlay-img rounded-2" width ="60%" />
                                <p>PCI</p>
                                </a>
                            </li>
                            <li style={{width:"200px"}} className ="m-2 rounded border ">
                                <a href="#" className="overlay-container">
                                <img src="assets/images/Industries/telecommunication.png" alt="Image capture goes here 01" className="overlay-img rounded-2" width ="60%" />
                                <p>Telecommunication</p>
                                </a>
                            </li>
                            <li style={{width:"200px"}} className ="m-2 rounded border ">
                                <a href="#" className="overlay-container">
                                <img src="assets/images/Industries/telecommunication.png" alt="Image capture goes here 01" className="overlay-img rounded-2" width ="60%" />
                                <p>Telecommunication</p>
                                </a>
                            </li>
                            <li style={{width:"200px"}} className ="m-2 rounded border ">
                                <a href="#" className="overlay-container" >
                                <img src="assets/images/Industries/pci.png" alt="Image capture goes here 01" className="overlay-img rounded-2" width ="60%" />
                                <p>PCI</p>
                                </a>
                            </li>
                            <li style={{width:"200px"}} className ="m-2 rounded border ">
                                <a href="#" className="overlay-container" >
                                <img src="assets/images/Industries/Healthcare.svg" alt="Image capture goes here 01" className="overlay-img rounded-2" width ="60%" />
                                <p>Health Care</p>
                                </a>
                            </li>
                            <li style={{width:"200px"}} className ="m-2 rounded border ">
                                <a href="#" className="overlay-container" >
                                <img src="assets/images/Industries/Education.svg" alt="Image capture goes here 01" className="overlay-img rounded-2" width ="60%" />
                                <p>Education</p>
                                </a>
                            </li>
                            <li style={{width:"200px"}} className ="m-2 rounded border ">
                                <a href="#" className="overlay-container" >
                                <img src="assets/images/Industries/Banking.svg" alt="Image capture goes here 01" className="overlay-img rounded-2" width ="60%" />
                                <p>Banking</p>
                                </a>
                            </li>
                            <li style={{width:"200px"}} className ="m-2 rounded border ">
                                <a href="#" className="overlay-container" >
                                <img src="assets/images/Industries/eCommerce.svg" alt="Image capture goes here 01" className="overlay-img rounded-2" width ="60%" />
                                <p>Ecommerce</p>
                                </a>
                            </li>
                           
                            
                            
                        </ul>
                    </div>



                </div>
                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
            </section>

            {/* <section className="section-padding--bottom section-padding--top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">


                            <h3 className="blog-card-one__title blog-details__title" style={{ color: "orange" }}> List of industries that we cover - </h3>
                            <div className="blog-details__content">
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />

                            </div>


                        </div>
                        <div className="col-lg-4">
                            <div className="sidebar">
                                <div className="sidebar__item sidebar__item--category">
                                    <IndustriesNav />

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section><br /><br />
            <br />
            <br />
            <br /> */}


        </div>
    )
}

export default IndustriusBody

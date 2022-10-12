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

            <section class="section-padding--bottom text-center mt-5">
                <div class="container">
                    <div class="section-title text-center">
                        <p class="section-title__text">Our Focus Industries</p>
                        <h2 class="section-title__title">Industries We Specialized We</h2>

                    </div>
                    <div class="wrapper">
                        <ul class="img-grid mt-5">
                            <li>
                                <a href="#" class="overlay-container" data-overlay-text="Beatles">
                                    <img src="https://trungk18.com/img/image-grid/img-beatles.jpg" alt="Image capture goes here 01" class="overlay-img" />
                                </a>
                            </li>
                            <li>
                                <a href="#" class="overlay-container" data-overlay-text="Bonsai">
                                    <img src="https://trungk18.com/img/image-grid/img-bonsai.jpg" alt="Image capture goes here 02" class="overlay-img" />
                                </a>
                            </li>
                            <li>
                                <a href="#" class="overlay-container" data-overlay-text="Bottles">
                                    <img src="https://trungk18.com/img/image-grid/img-bottles.jpg" alt="Image capture goes here 03" class="overlay-img" />
                                </a>
                            </li>
                            <li>
                                <a href="#" class="overlay-container" data-overlay-text="Brunch">
                                    <img src="https://trungk18.com/img/image-grid/img-brunch.jpg" alt="Image capture goes here 04" class="overlay-img" />
                                </a>
                            </li>
                            <li>
                                <a href="#" class="overlay-container" data-overlay-text="Ceramics">
                                    <img src="https://trungk18.com/img/image-grid/img-ceramics.jpg" alt="Image capture goes here 05" class="overlay-img" />
                                </a>
                            </li>
                            <li>
                                <a href="#" class="overlay-container" data-overlay-text="Hammock">
                                    <img src="https://trungk18.com/img/image-grid/img-hammock.jpg" alt="Image capture goes here 06" class="overlay-img" />
                                </a>
                            </li>
                            <li>
                                <a href="#" class="overlay-container" data-overlay-text="Hiking">
                                    <img src="https://trungk18.com/img/image-grid/img-hiking.jpg" alt="Image capture goes here 07" class="overlay-img" />
                                </a>
                            </li>
                            <li>
                                <a href="#" class="overlay-container" data-overlay-text="Orchard">
                                    <img src="https://trungk18.com/img/image-grid/img-orchard.jpg" alt="Image capture goes here 08" class="overlay-img" />
                                </a>
                            </li>
                            <li>
                                <a href="#" class="overlay-container" data-overlay-text="Cooking">
                                    <img src="https://trungk18.com/img/image-grid/img-cooking.jpg" alt="Image capture goes here 09" class="overlay-img" />
                                </a>
                            </li>
                            <li>
                                <a href="#" class="overlay-container" data-overlay-text="School">
                                    <img src="https://trungk18.com/img/image-grid/img-school.jpg" alt="Image capture goes here 10" class="overlay-img" />
                                </a>
                            </li>
                            <li>
                                <a href="#" class="overlay-container" data-overlay-text="Shoes">
                                    <img src="https://trungk18.com/img/image-grid/img-shoes.jpg" alt="Image capture goes here 11" class="overlay-img" />
                                </a>
                            </li>
                            <li>
                                <a href="#" class="overlay-container" data-overlay-text="Flight">
                                    <img src="https://trungk18.com/img/image-grid/img-flight.jpg" alt="Image capture goes here 12" class="overlay-img" />
                                </a>
                            </li>
                            <li>
                                <a href="#" class="overlay-container" data-overlay-text="School">
                                    <img src="https://trungk18.com/img/image-grid/img-school.jpg" alt="Image capture goes here 10" class="overlay-img" />
                                </a>
                            </li>
                            <li>
                                <a href="#" class="overlay-container" data-overlay-text="Shoes">
                                    <img src="https://trungk18.com/img/image-grid/img-shoes.jpg" alt="Image capture goes here 11" class="overlay-img" />
                                </a>
                            </li>
                            <li>
                                <a href="#" class="overlay-container" data-overlay-text="Flight">
                                    <img src="https://trungk18.com/img/image-grid/img-flight.jpg" alt="Image capture goes here 12" class="overlay-img" />
                                </a>
                            </li>
                        </ul>
                    </div>



                </div>
            </section>

            <section className="section-padding--bottom section-padding--top">
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
            <br />


        </div>
    )
}

export default IndustriusBody

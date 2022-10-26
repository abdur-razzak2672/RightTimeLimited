@extends('frontend.bd.main_master')
@section('content')
    @section('title')
        About-Us
    @endsection

    @section('css')
        <link rel="stylesheet" href="{{ asset('frontend/external/dist/material-cards-auto-height.css') }}">


        <style type="text/css">

            /*html {*/
            /*    position: relative;*/
            /*    min-height: 100%;*/
            /*}*/

            .body1 {
                background-color: #ECEFF1;
                color: #37474F;
                font-family: 'Raleway', sans-serif;
                font-weight: 300;
                font-size: 16px;
            }

            .h1, .h2, .h3 {
                font-weight: 200;
            }

            .grid-item {
                width: 350px;
                padding: 15px;

            }

        </style>

    @stop


    <div class="page-header">
        <div class="page-header__bg"
             style="background-image: url({{ asset('frontend/assets/images/resources/aboutbg1.png') }});"></div>
        <!-- /.page-header__bg -->
        <div class="container">
            <ul class="thm-breadcrumb list-unstyled">
                <li><a href="{{ url('/') }}">Home</a></li>
                <li>About</li>
            </ul>
            <h2 class="page-header__title">About Us</h2><!-- /.page-header__title -->
        </div><!-- /.container -->
    </div><!-- /.page-header -->
    <section class="about-four section-padding--top">
        <div class="container">
            <div class="row gutter-y-60">
                <div class="col-lg-6">
                    <div class="about-four__image">
                        <img src="{{ asset('frontend/assets/images/resources/rt1.png') }}" class="wow fadeInUp"
                             data-wow-duration="1500ms" alt="">
                    </div><!-- /.about-four__image -->
                </div><!-- /.col-lg-6 -->
                <div class="col-lg-6">
                    <div class="about-four__content">
                        <div class="section-title ">
                            <p class="section-title__text">About Company</p><!-- /.section-title__text -->
                            <h2 class="section-title__title">Leading Information Security Company</h2><!-- /.section-title__title -->
                        </div><!-- /.section-title -->
                        <div class="about-four__text">Right Time Limited (“RightTime”, short form) started its journey in the year 2009.
                            It’s purely an Information Security Consultation, Assessment/Audit Service & Solutions Provider. With all related International
                            Standards and Association, we are providing Information System Audit, Technical Documentation, Project Management, Custom Skill Development, ISO Consultation & Certification, SWIFT Consultation & Auditing, PCI DSS Gap Assessment, Remediation Consultation, Auditing & Certification. Conducting Security Assessment
                            e.g. VA & PT, Forensic (with the use of multiple world class Automated & Manual tools).
                            As the first empaneled Security Assessor firm we are serving for more than 13 years..</div>
                        <!-- /.about-four__text -->

                    </div><!-- /.about-four__content -->
                </div><!-- /.col-lg-6 -->
            </div><!-- /.row -->
        </div><!-- /.container -->
    </section>



    <section class="section-padding--bottom section-padding--top">
        <div class="container">
            <div class="section-title text-center">
                <p class="section-title__text">Our Team members</p><!-- /.section-title__text -->
                <h2 class="section-title__title">Our Expert Person to Provide <br> IT Solution Services</h2>
                <!-- /.section-title__title -->
            </div><!-- /.section-title -->

            <div class="body1">

                <section class="container">

                    <div class="row active-with-click grid">
                        <div class="grid-item">
                            <article class="material-card Red">
                                <h2 class="h2">
                                    <span>Sahaly Yasmin Bhuiyan</span>
                                    <strong>
                                        <i class="fa fa-fw fa-star"></i>
                                        Chairman
                                    </strong>
                                </h2>
                                <div class="mc-content">
                                    <div class="img-container">
                                        <img class="img-responsive" src="{{ asset('frontend/assets/images/team/Picsart_22-09-17_12-48-25-796.jpg') }}" height="100px">
                                    </div>
                                    <div class="mc-description">
                                        Chairman of the company.
                                    </div>
                                </div>
                                <a class="mc-btn-action">
                                    <i class="fa fa-bars"></i>
                                </a>
                                <div class="mc-footer">
                                    <a class="fa fa-fw fa-facebook"></a>
                                    <a class="fa fa-fw fa-twitter"></a>
                                    <a class="fa fa-fw fa-linkedin"></a>
                                    <a class="fa fa-fw fa-google-plus"></a>
                                </div>
                            </article>
                        </div>
                        <div class="grid-item">
                            <article class="material-card Pink">
                                <h2 class="h21">
                                    <span>Mohammad Tohidur Rahman Bhuiyan</span>
                                    <strong>
                                        <i class="fa fa-fw fa-star"></i>
                                        MD & CEO and Lead Assessor
                                    </strong>
                                </h2>
                                <div class="mc-content">
                                    <div class="img-container">
                                        <img class="img-responsive" src="{{ asset('frontend/assets/images/team/Picsart_22-09-17_12-48-53-762.jpg') }}">
                                    </div>
                                    <div class="mc-description">
                                        <p>MD & CEO and Lead Assessor of the company</p>
                                    </div>
                                </div>
                                <a class="mc-btn-action">
                                    <i class="fa fa-bars"></i>
                                </a>
                                <div class="mc-footer">
                                    <a class="fa fa-fw fa-facebook"></a>
                                    <a class="fa fa-fw fa-twitter"></a>
                                    <a class="fa fa-fw fa-linkedin"></a>
                                    <a class="fa fa-fw fa-google-plus"></a>
                                </div>
                            </article>
                        </div>
                        <div class="grid-item">
                            <article class="material-card Purple">
                                <h2 class="h21">
                                    <span>Arshad Mahmud</span>
                                    <strong>
                                        <i class="fa fa-fw fa-star"></i>
                                        Chief Operating Officer
                                    </strong>
                                </h2>
                                <div class="mc-content">
                                    <div class="img-container">
                                        <img class="img-responsive" src="{{ asset('frontend/assets/images/team/Picsart_22-09-17_12-49-21-996.jpg') }}">
                                    </div>
                                    <div class="mc-description">
                                        Chief Operating Officer of the company
                                    </div>
                                </div>
                                <a class="mc-btn-action">
                                    <i class="fa fa-bars"></i>
                                </a>
                                <div class="mc-footer">

                                    <a class="fa fa-fw fa-facebook"></a>
                                    <a class="fa fa-fw fa-twitter"></a>
                                    <a class="fa fa-fw fa-linkedin"></a>
                                    <a class="fa fa-fw fa-google-plus"></a>
                                </div>
                            </article>
                        </div>
                        <!--</div>-->
                        <!--<div class="row active-with-hover">-->
                        <div class="grid-item">
                            <article class="material-card Deep-Purple">
                                <h2 class="h21">
                                    <span>Rashed Sarwar</span>
                                    <strong>
                                        <i class="fa fa-fw fa-star"></i>
                                        Country Head, USA
                                    </strong>
                                </h2>
                                <div class="mc-content">
                                    <div class="img-container">
                                        <img class="img-responsive" src="{{ asset('frontend/assets/images/team/Picsart_22-09-17_12-50-14-322.jpg') }}">
                                    </div>
                                    <div class="mc-description">
                                        Country Head, USA
                                    </div>
                                </div>
                                <a class="mc-btn-action">
                                    <i class="fa fa-bars"></i>
                                </a>
                                <div class="mc-footer">

                                    <a class="fa fa-fw fa-facebook"></a>
                                    <a class="fa fa-fw fa-twitter"></a>
                                    <a class="fa fa-fw fa-linkedin"></a>
                                    <a class="fa fa-fw fa-google-plus"></a>
                                </div>
                            </article>
                        </div>
                        <div class="grid-item">
                            <article class="material-card Indigo">
                                <h2 class="h21">
                                    <span>Ms. Melinda</span>
                                    <strong>
                                        <i class="fa fa-fw fa-star"></i>
                                        Country Head, Germany
                                    </strong>
                                </h2>
                                <div class="mc-content">
                                    <div class="img-container">
                                        <img class="img-responsive" src="{{ asset('frontend/assets/images/team/Picsart_22-09-17_12-49-43-090.jpg') }}">
                                    </div>
                                    <div class="mc-description">
                                        Country Head, Germany
                                    </div>
                                </div>
                                <a class="mc-btn-action">
                                    <i class="fa fa-bars"></i>
                                </a>
                                <div class="mc-footer">

                                    <a class="fa fa-fw fa-facebook"></a>
                                    <a class="fa fa-fw fa-twitter"></a>
                                    <a class="fa fa-fw fa-linkedin"></a>
                                    <a class="fa fa-fw fa-google-plus"></a>
                                </div>
                            </article>
                        </div>
                        <div class="grid-item">
                            <article class="material-card Blue">
                                <h2 class="h21">
                                    <span>Dr. Mahfuz Ashraf</span>
                                    <strong>
                                        <i class="fa fa-fw fa-star"></i>
                                        Country Head, Australia
                                    </strong>
                                </h2>
                                <div class="mc-content">
                                    <div class="img-container">
                                        <img class="img-responsive" src="{{ asset('frontend/assets/images/team/Picsart_22-09-17_12-49-58-327.jpg') }}">
                                    </div>
                                    <div class="mc-description">
                                        Country Head, Australia
                                    </div>
                                </div>
                                <a class="mc-btn-action">
                                    <i class="fa fa-bars"></i>
                                </a>
                                <div class="mc-footer">

                                    <a class="fa fa-fw fa-facebook"></a>
                                    <a class="fa fa-fw fa-twitter"></a>
                                    <a class="fa fa-fw fa-linkedin"></a>
                                    <a class="fa fa-fw fa-google-plus"></a>
                                </div>
                            </article>
                        </div>
                    </div>
                </section>

            </div><!-- /.row -->
        </div><!-- /.container -->
    </section>


    <section class="black-bg section-padding-lg--top section-padding-lg--bottom cta-two">
        <div class="cta-two__bg jarallax" data-jarallax data-speed="0.2" data-imgPosition="50% 0%"
             style="background-image: url({{ asset('frontend/assets/images/background/s4.jpeg') }});"></div>
        <div class="container">
            <div class="cta-two__inner">
                <h3 class="cta-two__title">Better Information Security Services And Solutions
                    At Your <span>Fingertips</span></h3><!-- /.cta-two__title -->
                <a href="contact.html" class="thm-btn cta-two__btn"><span>LEarn More</span></a>
                <!-- /.thm-btn cta-two__btn -->
            </div><!-- /.cta-two__inner -->
        </div><!-- /.container -->
    </section>
    <section
        class="section-padding--bottom section-padding--top testimonials-two background-repeat-no background-position-top-center"
        style="background-image: url({{ asset('frontend/assets/images/shapes/testi-bg-1-1.png') }});">
        <div class="container">
            <div class="row gutter-y-60">
                <div class="col-lg-5">
                    <div class="testimonials-two__content">
                        <div class="section-title ">
                            <p class="section-title__text">Our clients</p><!-- /.section-title__text -->
                            <h2 class="section-title__title">We Are Trusted
                                Worldwide Peoples</h2><!-- /.section-title__title -->
                        </div><!-- /.section-title -->
                        <div class="testimonials-two__content__text">Sed ut perspiciatis unde omnis natus error sit
                            voluptatem accusa ntium doloremque laudantium totam rem aperiamea queipsa quae abillo
                            inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</div>
                        <!-- /.testimonials-two__content__text -->
                        <div class="testimonials-two__content__text">Pellentesque gravida lectus vitae nisi luctus,
                            Finibus aliquet ligula ultrices.</div><!-- /.testimonials-two__content__text -->
                        <a href="about.html" class="thm-btn testimonials-two__content__btn"><span>View All
									feedbacks</span></a><!-- /.thm-btn testimonials-two__content__btn -->
                    </div><!-- /.testimonials-two__content -->
                </div><!-- /.col-lg-5 -->
                <div class="col-lg-7">
                    <div class="testimonials-two__items">
                        <div class="row gutter-y-30">
                            <div class="col-lg-12">
                                <div class="testimonials-one-card">
                                    <div class="testimonials-one-card__image">
                                        <img src="{{ asset('frontend/assets/images/resources/testi-1-1.jpg') }}" alt="">
                                    </div><!-- /.testimonials-one-card__image -->
                                    <div class="testimonials-one-card__content">
                                        <div class="testimonials-one-card__text">On the other hand denounc with
                                            ghteo
                                            indignation and dislike men who so beguiled and demoralized the charms
                                            of
                                            pleasure
                                            the momen blinded by desire cannot foresee the pain and trouble.</div>
                                        <!-- /.testimonials-one-card__text -->
                                        <h3 class="testimonials-one-card__title">Michal Rahul</h3>
                                        <!-- /.testimonials-one-card__title -->
                                        <p class="testimonials-one-card__designation">Ul - UX Designer</p>
                                        <!-- /.testimonials-one-card__designation -->
                                        <i class="icon-right-quote testimonials-one-card__icon"></i>
                                    </div><!-- /.testimonials-one-card__content -->
                                </div><!-- /.testimonials-one-card -->
                            </div><!-- /.col-lg-6 -->
                            <div class="col-lg-12">
                                <div class="testimonials-one-card">
                                    <div class="testimonials-one-card__image">
                                        <img src="{{ asset('frontend/assets/images/resources/testi-1-2.jpg') }}" alt="">
                                    </div><!-- /.testimonials-one-card__image -->
                                    <div class="testimonials-one-card__content">
                                        <div class="testimonials-one-card__text">On the other hand denounc with
                                            ghteo
                                            indignation and dislike men who so beguiled and demoralized the charms
                                            of
                                            pleasure
                                            the momen blinded by desire cannot foresee the pain and trouble.</div>
                                        <!-- /.testimonials-one-card__text -->
                                        <h3 class="testimonials-one-card__title">Jessica Brown</h3>
                                        <!-- /.testimonials-one-card__title -->
                                        <p class="testimonials-one-card__designation">Ul - UX Designer</p>
                                        <!-- /.testimonials-one-card__designation -->
                                        <i class="icon-right-quote testimonials-one-card__icon"></i>
                                    </div><!-- /.testimonials-one-card__content -->
                                </div><!-- /.testimonials-one-card -->
                            </div><!-- /.col-lg-6 -->
                        </div><!-- /.row -->
                    </div><!-- /.testimonials-two__items -->
                </div><!-- /.col-lg-7 -->
            </div><!-- /.row -->
        </div><!-- /.container -->
    </section>
    <br>
    <br>
    <br>
    <br>


    <style>
        $(function() {
        $('.material-card > .mc-btn-action').click(function () {
            var card = $(this).parent('.material-card');
            var icon = $(this).children('i');
            icon.addClass('fa-spin-fast');

        if (card.hasClass('mc-active')) {
            card.removeClass('mc-active');

        window.setTimeout(function() {
            icon
            .removeClass('fa-arrow-left')
            .removeClass('fa-spin-fast')
            .addClass('fa-bars');

        }, 800);
        } else {
              card.addClass('mc-active');

        window.setTimeout(function() {
            icon
            .removeClass('fa-bars')
            .removeClass('fa-spin-fast')
            .addClass('fa-arrow-left');

        }, 800);
        }
        });
        });
    </style>










@endsection

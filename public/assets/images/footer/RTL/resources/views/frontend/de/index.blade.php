
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
    <!-- google font -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap"
        rel="stylesheet">
    <!-- favicons Icons -->
    <link rel="apple-touch-icon" sizes="180x180" href="{{ asset('frontend/assets/images/favicons/apple-touch-icon.png') }}" />
    <link rel="icon" type="image/png" sizes="32x32" href="{{ asset('frontend/assets/images/favicons/favicon-32x32.png') }}" />
    <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('frontend/assets/images/favicons/favicon-16x16.png') }}" />
    <link rel="manifest" href="{{ asset('frontend/assets/images/favicons/site.webmanifest') }}" />
    <!-- plugins css -->
    <link rel="stylesheet" href="{{ asset('frontend/assets/vendors/bootstrap/css/bootstrap.min.css') }}">
    <link rel="stylesheet" href="{{ asset('frontend/assets/vendors/fontawesome/css/all.min.css') }}">
    <link rel="stylesheet" href="{{ asset('frontend/assets/vendors/jarallax/jarallax.css') }}">
    <link rel="stylesheet" href="{{ asset('frontend/assets/vendors/animate/animate.min.css') }}">
    <link rel="stylesheet" href="{{ asset('frontend/assets/vendors/owl-carousel/assets/owl.carousel.min.css') }}">
    <link rel="stylesheet" href="{{ asset('frontend/assets/vendors/owl-carousel/assets/owl.theme.default.min.css') }}">
    <link rel="stylesheet" href="{{ asset('frontend/assets/vendors/cretech-icons/style.css') }}">
    <link rel="stylesheet" href="{{ asset('frontend/assets/vendors/youtube-popup/youtube-popup.css') }}">
    <!-- templates css -->
    <link rel="stylesheet" href="{{ asset('frontend/assets/css/cretech.css') }}">
    <link rel="stylesheet" href="{{ asset('frontend/external/style.css') }}">



</head>

<body class="custom-cursor">

<div class="custom-cursor__cursor"></div>
<div class="custom-cursor__cursor-two"></div>

<div class="preloader">
    <div class="preloader__circle"></div>
</div>

<div class="page-wrapper">

    {{--header content--}}
    @include('frontend.de.body.header')



    <div class="slider-one">
        <div class="slider-one__carousel owl-carousel owl-theme thm-owl__carousel" data-owl-options='{"loop": true,
         "items": 1,
         "navText": ["<span class=\"fa fa-angle-left\"></span>","<span class=\"fa fa-angle-right\"></span>"],
         "margin": 0,
         "dots": true,
         "nav": true,
         "animateOut":
         "slideOutDown",
         "animateIn": "fadeIn",
         "active": true,
         "smartSpeed": 7000,
         "autoplay": true,
         "autoplayTimeout": 7000,
         "autoplayHoverPause": false}'>
            <div class="item slider-one__slide-1">
                <div class="slider-one__bg-1">
                </div>
                <!-- /.slider-one__bg -->
                <div class="slider-one__line"></div>
                <!-- /.slider-one__line -->
                <div class="slider-one__shape-1"></div>
                <!-- /.slider-one__shape-1 -->
                <div class="slider-one__shape-2"></div>
                <!-- /.slider-one__shape-2 -->
                <div class="slider-one__shape-3"></div>
                <!-- /.slider-one__shape-3 -->
                <div class="container">
                    <div class="slider-one__content ">
                        <div class="slider-one__floated lettering-text">technology</div>
                        <!-- /.slider-one__floated -->
                        <p class="slider-one__text">Welcome to Right Time Limited</p>
                        <!-- /.slider-one__text -->
                        <div class="slider-one__title-wrapper">
                            <h2 class="slider-one__title">Information Security Services <br> and Solutions</h2>
                            <!-- /.slider-one__title -->
                        </div>
                        <!-- /.slider-one__title-wrapper -->
                        <div class="slider-one__btns">
                            <a href="{{ url('de/about-us') }}"
                               class="thm-btn slider-one__btn"><span>Details</span></a>
                            <!-- /.thm-btn slider-one__btn -->
                        </div>
                        <!-- /.slider-one__btns -->
                    </div>
                    <!-- /.slider-one__content -->
                </div>
                <!-- /.container -->
            </div>
            <!-- /.item -->
            <div class="item slider-one__slide-2">
                <div class="slider-one__bg-2">
                </div>
                <!-- /.slider-one__bg -->
                <div class="slider-one__line"></div>
                <!-- /.slider-one__line -->
                <div class="slider-one__shape-1"></div>
                <!-- /.slider-one__shape-1 -->
                <div class="slider-one__shape-2"></div>
                <!-- /.slider-one__shape-2 -->
                <div class="slider-one__shape-3"></div>
                <!-- /.slider-one__shape-3 -->
                <div class="container">
                    <div class="slider-one__content ">
                        <div class="slider-one__floated lettering-text">technology</div>
                        <!-- /.slider-one__floated -->
                        <p class="slider-one__text">We, Right Time Limited</p>
                        <!-- /.slider-one__text -->
                        <div class="slider-one__title-wrapper">
                            <h2 class="slider-one__title">First Ever QSA Firm in <br> Bangladesh
                            </h2>
                            <!-- /.slider-one__title -->
                        </div>
                        <!-- /.slider-one__title-wrapper -->
                        <div class="slider-one__btns">
                            <a href="{{ url('de/about-us') }}"
                               class="thm-btn slider-one__btn"><span>Details</span></a>
                            <!-- /.thm-btn slider-one__btn -->
                        </div>
                        <!-- /.slider-one__btns -->
                    </div>
                    <!-- /.slider-one__content -->
                </div>
                <!-- /.container -->
            </div>
            <!-- /.item -->
            <div class="item slider-one__slide-3">
                <div class="slider-one__bg-3">
                </div>
                <!-- /.slider-one__bg -->
                <div class="slider-one__line"></div>
                <!-- /.slider-one__line -->
                <div class="slider-one__shape-1"></div>
                <!-- /.slider-one__shape-1 -->
                <div class="slider-one__shape-2"></div>
                <!-- /.slider-one__shape-2 -->
                <div class="slider-one__shape-3"></div>
                <!-- /.slider-one__shape-3 -->
                <div class="container">
                    <div class="slider-one__content ">
                        <div class="slider-one__floated lettering-text">technology</div>

                        <div class="slider-one__title-wrapper">
                            <h2 class="slider-one__title">Real Hackers !!! <br></h2>
                        </div>
                        <div class="slider-one__btns">
                            <a href="{{ url('de/about-us') }}"
                               class="thm-btn slider-one__btn"><span>Details</span></a>
                            <!-- /.thm-btn slider-one__btn -->
                        </div>
                        <!-- /.slider-one__btns -->
                    </div>
                    <!-- /.slider-one__content -->
                </div>
                <!-- /.container -->
            </div>
            <!-- /.item -->
            <div class="item slider-one__slide-4">
                <div class="slider-one__bg-4">
                </div>
                <!-- /.slider-one__bg -->
                <div class="slider-one__line"></div>
                <!-- /.slider-one__line -->
                <div class="slider-one__shape-1"></div>
                <!-- /.slider-one__shape-1 -->
                <div class="slider-one__shape-2"></div>
                <!-- /.slider-one__shape-2 -->
                <div class="slider-one__shape-3"></div>
                <!-- /.slider-one__shape-3 -->
                <div class="container">
                    <div class="slider-one__content ">
                        <div class="slider-one__floated lettering-text">technology</div>
                        <!-- /.slider-one__floated -->
                        <p class="slider-one__text">We, Right Time Limited</p>
                        <!-- /.slider-one__text -->
                        <div class="slider-one__title-wrapper">
                            <h2 class="slider-one__title">First Ever QSA Firm in <br> Bangladesh
                            </h2>
                            <!-- /.slider-one__title -->
                        </div>
                        <!-- /.slider-one__title-wrapper -->
                        <div class="slider-one__btns">
                            <a href="{{ url('de/about-us') }}"
                               class="thm-btn slider-one__btn"><span>Details</span></a>
                            <!-- /.thm-btn slider-one__btn -->
                        </div>
                        <!-- /.slider-one__btns -->
                    </div>
                    <!-- /.slider-one__content -->
                </div>
                <!-- /.container -->
            </div>
            <!-- /.item -->
            <div class="item slider-one__slide-5">
                <div class="slider-one__bg-5">
                </div>
                <!-- /.slider-one__bg -->
                <div class="slider-one__line"></div>
                <!-- /.slider-one__line -->
                <div class="slider-one__shape-1"></div>
                <!-- /.slider-one__shape-1 -->
                <div class="slider-one__shape-2"></div>
                <!-- /.slider-one__shape-2 -->
                <div class="slider-one__shape-3"></div>
                <!-- /.slider-one__shape-3 -->
                <div class="container">
                    <div class="slider-one__content ">
                        <div class="slider-one__floated lettering-text">technology</div>
                        <!-- /.slider-one__floated -->
                        <p class="slider-one__text">We, Right Time Limited</p>
                        <!-- /.slider-one__text -->
                        <div class="slider-one__title-wrapper">
                            <h2 class="slider-one__title">First Ever QSA Firm in <br> Bangladesh
                            </h2>
                            <!-- /.slider-one__title -->
                        </div>
                        <!-- /.slider-one__title-wrapper -->
                        <div class="slider-one__btns">
                            <a href="{{ url('de/about-us') }}"
                               class="thm-btn slider-one__btn"><span>Details</span></a>
                            <!-- /.thm-btn slider-one__btn -->
                        </div>
                        <!-- /.slider-one__btns -->
                    </div>
                    <!-- /.slider-one__content -->
                </div>
                <!-- /.container -->
            </div>
            <!-- /.item -->
            <div class="item slider-one__slide-6">
                <div class="slider-one__bg-6">
                </div>
                <!-- /.slider-one__bg -->
                <div class="slider-one__line"></div>
                <!-- /.slider-one__line -->
                <div class="slider-one__shape-1"></div>
                <!-- /.slider-one__shape-1 -->
                <div class="slider-one__shape-2"></div>
                <!-- /.slider-one__shape-2 -->
                <div class="slider-one__shape-3"></div>
                <!-- /.slider-one__shape-3 -->
                <div class="container">
                    <div class="slider-one__content ">
                        <div class="slider-one__floated lettering-text">technology</div>
                        <!-- /.slider-one__floated -->
                        <p class="slider-one__text">We, Right Time Limited</p>
                        <!-- /.slider-one__text -->
                        <div class="slider-one__title-wrapper">
                            <h2 class="slider-one__title">First Ever QSA Firm in <br> Bangladesh
                            </h2>
                            <!-- /.slider-one__title -->
                        </div>
                        <!-- /.slider-one__title-wrapper -->
                        <div class="slider-one__btns">
                            <a href="{{ url('de/about-us') }}"
                               class="thm-btn slider-one__btn"><span>Details</span></a>
                            <!-- /.thm-btn slider-one__btn -->
                        </div>
                        <!-- /.slider-one__btns -->
                    </div>
                    <!-- /.slider-one__content -->
                </div>
                <!-- /.container -->
            </div>
            <!-- /.item -->
            <div class="item slider-one__slide-7">
                <div class="slider-one__bg-7">
                </div>
                <!-- /.slider-one__bg -->
                <div class="slider-one__line"></div>
                <!-- /.slider-one__line -->
                <div class="slider-one__shape-1"></div>
                <!-- /.slider-one__shape-1 -->
                <div class="slider-one__shape-2"></div>
                <!-- /.slider-one__shape-2 -->
                <div class="slider-one__shape-3"></div>
                <!-- /.slider-one__shape-3 -->
                <div class="container">
                    <div class="slider-one__content ">
                        <div class="slider-one__floated lettering-text">technology</div>
                        <!-- /.slider-one__floated -->
                        <p class="slider-one__text">We, Right Time Limited</p>
                        <!-- /.slider-one__text -->
                        <div class="slider-one__title-wrapper">
                            <h2 class="slider-one__title">First Ever QSA Firm in <br> Bangladesh
                            </h2>
                            <!-- /.slider-one__title -->
                        </div>
                        <!-- /.slider-one__title-wrapper -->
                        <div class="slider-one__btns">
                            <a href="{{ url('aus/about-us') }}"
                               class="thm-btn slider-one__btn"><span>Details</span></a>
                            <!-- /.thm-btn slider-one__btn -->
                        </div>
                        <!-- /.slider-one__btns -->
                    </div>
                    <!-- /.slider-one__content -->
                </div>
                <!-- /.container -->
            </div>
            <!-- /.item -->
            <div class="item slider-one__slide-7">
                <div class="slider-one__bg-8">
                </div>
                <!-- /.slider-one__bg -->
                <div class="slider-one__line"></div>
                <!-- /.slider-one__line -->
                <div class="slider-one__shape-1"></div>
                <!-- /.slider-one__shape-1 -->
                <div class="slider-one__shape-2"></div>
                <!-- /.slider-one__shape-2 -->
                <div class="slider-one__shape-3"></div>
                <!-- /.slider-one__shape-3 -->
                <div class="container">
                    <div class="slider-one__content ">
                        <div class="slider-one__floated lettering-text">technology</div>
                        <!-- /.slider-one__floated -->
                        <p class="slider-one__text">We, Right Time Limited</p>
                        <!-- /.slider-one__text -->
                        <div class="slider-one__title-wrapper">
                            <h2 class="slider-one__title">First Ever QSA Firm in <br> Bangladesh
                            </h2>
                            <!-- /.slider-one__title -->
                        </div>
                        <!-- /.slider-one__title-wrapper -->
                        <div class="slider-one__btns">
                            <a href="{{ url('aus/about-us') }}"
                               class="thm-btn slider-one__btn"><span>Details</span></a>
                            <!-- /.thm-btn slider-one__btn -->
                        </div>
                        <!-- /.slider-one__btns -->
                    </div>
                    <!-- /.slider-one__content -->
                </div>
                <!-- /.container -->
            </div>
            <!-- /.item -->
            <div class="item slider-one__slide-7">
                <div class="slider-one__bg-9">
                </div>
                <!-- /.slider-one__bg -->
                <div class="slider-one__line"></div>
                <!-- /.slider-one__line -->
                <div class="slider-one__shape-1"></div>
                <!-- /.slider-one__shape-1 -->
                <div class="slider-one__shape-2"></div>
                <!-- /.slider-one__shape-2 -->
                <div class="slider-one__shape-3"></div>
                <!-- /.slider-one__shape-3 -->
                <div class="container">
                    <div class="slider-one__content ">
                        <div class="slider-one__floated lettering-text">technology</div>
                        <!-- /.slider-one__floated -->
                        <p class="slider-one__text">We, Right Time Limited</p>
                        <!-- /.slider-one__text -->
                        <div class="slider-one__title-wrapper">
                            <h2 class="slider-one__title">First Ever QSA Firm in <br> Bangladesh
                            </h2>
                            <!-- /.slider-one__title -->
                        </div>
                        <!-- /.slider-one__title-wrapper -->
                        <div class="slider-one__btns">
                            <a href="{{ url('aus/about-us') }}"
                               class="thm-btn slider-one__btn"><span>Details</span></a>
                            <!-- /.thm-btn slider-one__btn -->
                        </div>
                        <!-- /.slider-one__btns -->
                    </div>
                    <!-- /.slider-one__content -->
                </div>
                <!-- /.container -->
            </div>
            <!-- /.item -->
        </div>
        <!-- /.slider-one__carousel -->
    </div>
    <!-- /.slider-one -->


    <section class="section-padding--bottom section-padding--top about-five">
        <div class="container">
            <div class="row gutter-y-60">
                <div class="col-lg-6">
                    <div class="about-five__images">
                        <div class="about-five__images__shape"></div><!-- /.about-five__images__shape -->
                        <img src="{{ asset('frontend/assets/images/resources/about_rt.png') }}" class="wow fadeInUp"
                             data-wow-duration="1500ms" alt="">
                    <!--<img src="{{ asset('frontend/assets/images/resources/about-five-1-2.jpg') }}" alt="">-->
                        <!--<div class="about-five__video">-->
                        <!--    <a href="https://www.youtube.com/watch?v=rzfmZC3kg3M" class="video-popup">-->
                        <!--        <i class="fa fa-play"></i>-->
                        <!--    </a>-->
                        <!--</div><!-- /.about-five__video -->
                        <div class="about-five__images__caption count-box wow fadeInUp" data-wow-duration="1500ms">
                            <span class="count-text" data-stop="13" data-speed="1300">00</span>
                            Years of<br>
                            Experience
                        </div><!-- /.about-five__images__caption -->
                    </div><!-- /.about-five__images -->
                </div><!-- /.col-lg-6 -->
                <div class="col-lg-6">
                    <div class="about-five__content">
                        <div class="section-title ">
                            <p class="section-title__text">About Company</p><!-- /.section-title__text -->
                            <h2 class="section-title__title">Leading Information Security Company</h2>
                            <!-- /.section-title__title -->
                        </div><!-- /.section-title -->
                        <div class="about-five__text">Right Time Limited (“RightTime”, short form) started its journey in the year 2009.
                            It’s purely an Information Security Consultation, Assessment/Audit Service & Solutions Provider.
                            With all related International Standards and Association, we are providing Information System Audit,
                            Technical Documentation, Project Management, Custom Skill Development, ISO Consultation & Certification,
                            SWIFT Consultation & Auditing, PCI DSS Gap Assessment, Remediation Consultation, Auditing & Certification.
                            Conducting Security Assessment e.g. VA & PT, Forensic (with the use of multiple world class Automated & Manual tools).
                            As the first empaneled Security Assessor firm we are serving for more than 13 years.</div>
                        <!-- /.about-five__text -->
                    {{--                        <div class="about-five__text">System is a term used to refer to an organized collection--}}
                    {{--                            symbols and processes that may be used to operate on such symbols.</div>--}}
                    <!-- /.about-five__text -->
                        {{--                        <ul class="about-five__box">--}}
                        {{--                            <li class="about-five__box__item gray-bg">--}}
                        {{--                                <i class="about-five__box__icon icon-consulting"></i>--}}
                        {{--                                <div class="about-five__box__content">--}}
                        {{--                                    <h3 class="about-five__box__title"><a href="service-it-consultent.html">IT--}}
                        {{--                                            Consultant</a></h3>--}}
                        {{--                                    <p class="about-five__box__text">Smarter Solutions</p>--}}
                        {{--                                    <!-- /.about-five__box__text -->--}}
                        {{--                                </div><!-- /.about-five__box__content -->--}}
                        {{--                            </li>--}}
                        {{--                            <li class="about-five__box__item gray-bg">--}}
                        {{--                                <i class="about-five__box__icon icon-chip"></i>--}}
                        {{--                                <div class="about-five__box__content">--}}
                        {{--                                    <h3 class="about-five__box__title"><a href="team.html">IT Specialist</a></h3>--}}
                        {{--                                    <p class="about-five__box__text">Faster Solutions</p>--}}
                        {{--                                    <!-- /.about-five__box__text -->--}}
                        {{--                                </div><!-- /.about-five__box__content -->--}}
                        {{--                            </li>--}}
                        {{--                        </ul><!-- /.about-five__box -->--}}
                        <div class="about-four__meta">
                            <div class="about-four__author">
                                <img src="{{ asset('frontend/assets/images/team/ceo.jpg') }}" alt="">
                                <div class="about-four__author__content">
                                    <p style="line-height:13px; font-size:13px"><i>We are already living in a cyber society. We shouldn’t ask our customers to make a tradeoff between privacy and security. We need to offer them the best of both. Ultimately, protecting customer’s data protects our business.We are working together to protect your business.</i></p>
                                    <h3 class="about-four__author__title">Mohammad Tohidur Rahman Bhuiyan, PhD</h3>
                                    <!-- /.about-four__author__title -->
                                    <div class="about-four__author__designation">MD & CEO</div>
                                    <!-- /.about-four__author__designation -->
                                </div><!-- /.about-four__author__content -->
                            </div><!-- /.about-four__author -->
                            <a href="https://www.linkedin.com/in/mohammad-tohidur-rahman-bhuiyan-a8805a6/" class="thm-btn about-four__btn"><span>Learn More</span></a>
                            <!-- /.thm-btn about-four__btn -->
                        </div><!-- /.about-four__meta -->
                    </div><!-- /.about-five__content -->
                </div><!-- /.col-lg-6 -->
            </div><!-- /.row -->
        </div><!-- /.container -->
    </section>

    <section
        class="section-padding--top service-four gray-bg section-padding-lg--bottom section-has-bottom-margin background-repeat-no background-position-top-right"
        style="background-image: url({{ asset('frontend/assets/images/shapes/service-four-bg-1-1.png') }});">
        <div class="container">
            <div class="section-title text-center">
                <p class="section-title__text">Popular Services</p><!-- /.section-title__text -->
                <h2 class="section-title__title">We Provide Our Client Best <br>Information Security Solution & Services</h2>
                <!-- /.section-title__title -->
            </div><!-- /.section-title -->
            <div class="owl-carousel thm-owl__carousel thm-owl__carousel--with-shadow service-four__carousel"
                 data-owl-options='{"loop": true,
				"autoplay": true,
				"autoplayTimeout": 3000,
				"nav": false,
				"navText": ["<span class=\"fa fa-angle-left\"></span>","<span class=\"fa fa-angle-right\"></span>"],
				"dots": false,
				"margin": 0,
                "items": 1,
				"smartSpeed": 700,
				"responsive": {
					"0": {
						"margin": 0,
						"items": 1
					},
					"576": {
						"margin": 30,
						"items": 2
					},
					"768": {
						"margin": 30,
						"items": 3
					},
					"992": {
						"margin": 30,
						"items": 4
					},
					"1200": {
						"margin": 30,
						"items": 4
					}
				}}'>
                <div class="item">
                    <div class="service-card-three">
                        <div class="service-card-three__icon">
                            <i class="icon-new-product"></i>
                        </div><!-- /.service-card-three__icon -->
                        <div class="service-card-three__content">
                            <h3 class="service-card-three__title"><a href="{{ url('/services/consultation') }}">Consultation
                                    <br></a></h3><!-- /.service-card-three__title -->
                            <div class="service-card-three__text">Providing the solutions for non-IT businesses.
                            </div><!-- /.service-card-three__text -->
                        </div><!-- /.service-card-three__content -->
                    </div><!-- /.service-card-three -->
                </div><!-- /.item -->
                <div class="item">
                    <div class="service-card-three">
                        <div class="service-card-three__icon">
                            <i class="icon-new-product"></i>
                        </div><!-- /.service-card-three__icon -->
                        <div class="service-card-three__content">
                            <h3 class="service-card-three__title"><a href="{{ url('/services/auditing') }}">Auditing</a></h3><!-- /.service-card-three__title -->
                            <div class="service-card-three__text">Providing the solutions for non-IT businesses.
                            </div><!-- /.service-card-three__text -->
                        </div><!-- /.service-card-three__content -->
                    </div><!-- /.service-card-three -->
                </div><!-- /.item -->
                <div class="item">
                    <div class="service-card-three">
                        <div class="service-card-three__icon">
                            <i class="icon-protection"></i>
                        </div><!-- /.service-card-three__icon -->
                        <div class="service-card-three__content">
                            <h3 class="service-card-three__title"><a
                                    href="{{ url('/services/security-assessment-testing') }}">Security <br>
                                    Assessment & Testing</a></h3><!-- /.service-card-three__title -->
                            <div class="service-card-three__text">Providing the solutions for non-IT businesses.
                            </div><!-- /.service-card-three__text -->
                        </div><!-- /.service-card-three__content -->
                    </div><!-- /.service-card-three -->
                </div><!-- /.item -->
                <div class="item">
                    <div class="service-card-three">
                        <div class="service-card-three__icon">
                            <i class="icon-web-development"></i>
                        </div><!-- /.service-card-three__icon -->
                        <div class="service-card-three__content">
                            <h3 class="service-card-three__title"><a href="{{ url('/services/standard-implementation-certification') }}">Standard
                                    <br>
                                    Implementation & Certification</a></h3><!-- /.service-card-three__title -->
                            <div class="service-card-three__text">Providing the solutions for non-IT businesses.
                            </div><!-- /.service-card-three__text -->
                        </div><!-- /.service-card-three__content -->
                    </div><!-- /.service-card-three -->
                </div><!-- /.item -->


                <div class="item">
                    <div class="service-card-three">
                        <div class="service-card-three__icon">
                            <i class="icon-analysis"></i>
                        </div><!-- /.service-card-three__icon -->
                        <div class="service-card-three__content">
                            <h3 class="service-card-three__title"><a href="{{ url('/services/solutions') }}">Solutions</a></h3><!-- /.service-card-three__title -->
                            <div class="service-card-three__text">Providing the solutions for non-IT businesses.
                            </div><!-- /.service-card-three__text -->
                        </div><!-- /.service-card-three__content -->
                    </div><!-- /.service-card-three -->
                </div><!-- /.item -->


            </div><!-- /.owl-carousel -->
        </div><!-- /.container -->
    </section>

    <section class="funfact-one">
        <div class="container">
            <div class="funfact-one__inner wow fadeInUp background-size-cover" data-wow-duration="1500ms"
                 style="background-image: url({{ asset('frontend/assets/images/shapes/funfact-one-bg.png') }});">
                <ul class="funfact-one__list">
                    <li class="funfact-one__list__item">
                        <h3 class="funfact-one__list__title count-box">
                            <span data-stop="255" data-speed="2500" class="count-text">00</span>
                        </h3><!-- /.funfact-one__list__title -->
                        <p class="funfact-one__list__text">Business Interogation</p>
                        <!-- /.funfact-one__list__text -->
                    </li>
                    <li class="funfact-one__list__item">
                        <h3 class="funfact-one__list__title count-box">
                            <span data-stop="325" data-speed="2500" class="count-text">00</span>
                        </h3><!-- /.funfact-one__list__title -->
                        <p class="funfact-one__list__text">Strategies Planned</p>
                        <!-- /.funfact-one__list__text -->
                    </li>
                    <li class="funfact-one__list__item">
                        <h3 class="funfact-one__list__title count-box">
                            <span data-stop="569" data-speed="2500" class="count-text">00</span>
                        </h3><!-- /.funfact-one__list__title -->
                        <p class="funfact-one__list__text">Projects Relased</p>
                        <!-- /.funfact-one__list__text -->
                    </li>
                    <li class="funfact-one__list__item">
                        <h3 class="funfact-one__list__title count-box">
                            <span data-stop="769" data-speed="2500" class="count-text">00</span>
                        </h3><!-- /.funfact-one__list__title -->
                        <p class="funfact-one__list__text">Satisfied Clients </p>
                        <!-- /.funfact-one__list__text -->
                    </li>
                </ul><!-- /.funfact-one__list -->
            </div><!-- /.funfact-one__inner -->
        </div><!-- /.container -->
    </section>

    <!--Our Association-->

    <section class="section-padding--top section-padding--bottom about-one-associate">
        <div class="section-title text-center">

            <h2 class="section-title__title">OUR ASSOCIATIONS</h2>
            <!-- /.section-title__title -->
        </div><!-- /.section-title -->
        <div class="client-carousel client-carousel--two">
            <div class="container">
                <div class="owl-carousel thm-owl__carousel" data-owl-options='{"loop": true,
				"autoplay": true,
				"autoplayTimeout": 5000,
				"autoplayHoverPause": true,
				"nav": true,
				"navText": ["<span class=\"fa fa-angle-left\"></span>","<span class=\"fa fa-angle-right\"></span>"],
				"dots": false,
				"margin": 30,
                "items": 2,
				"smartSpeed": 700,
				"responsive": {
					"0": {
						"margin": 30,
						"items": 2
					},
					"375": {
						"margin": 30,
						"items": 2
					},
					"575": {
						"margin": 30,
						"items": 3
					},
					"767": {
						"margin": 50,
						"items": 4
					},
					"991": {
						"margin": 40,
						"items": 5
					},
					"1199": {
						"margin": 80,
						"items": 5
					}
				}}'>
                    <div class="item">
                        <img src="{{ asset('frontend/assets/images/association/pci.png') }}" alt="">
                    </div><!-- /.item -->
                    <div class="item">
                        <img src="{{ asset('frontend/assets/images/association/basis.png') }}" alt="">
                    </div><!-- /.item -->
                    <div class="item">
                        <img src="{{ asset('frontend/assets/images/association/ecab.jpg') }}" alt="">
                    </div><!-- /.item -->
                    <div class="item">
                        <img src="{{ asset('frontend/assets/images/association/bcs.jpg') }}" alt="">
                    </div><!-- /.item -->
                    <div class="item">
                        <img src="{{ asset('frontend/assets/images/association/bf.jpg') }}" alt="">
                    </div><!-- /.item -->
                    <div class="item">
                        <img src="{{ asset('frontend/assets/images/association/wbg.png') }}" alt="">
                    </div><!-- /.item -->
                    <div class="item">
                        <img src="{{ asset('frontend/assets/images/association/cca.png') }}" alt="">
                    </div><!-- /.item -->

                </div><!-- /.thm-owl__carousel -->
            </div><!-- /.container -->
        </div><!-- /.client-carousel -->

    </section>

    <section class="section-padding--top section-padding--bottom about-one">
        <div class="section-title text-center">

            <h2 class="section-title__title">OUR PARTNERS</h2>
            <!-- /.section-title__title -->
        </div><!-- /.section-title -->
        <div class="client-carousel client-carousel--two">
            <div class="container">
                <div class="owl-carousel thm-owl__carousel" data-owl-options='{"loop": true,
				"autoplay": true,
				"autoplayTimeout": 5000,
				"autoplayHoverPause": true,
				"nav": true,
				"navText": ["<span class=\"fa fa-angle-left\"></span>","<span class=\"fa fa-angle-right\"></span>"],
				"dots": false,
				"margin": 30,
                "items": 2,
				"smartSpeed": 700,
				"responsive": {
					"0": {
						"margin": 30,
						"items": 2
					},
					"375": {
						"margin": 30,
						"items": 2
					},
					"575": {
						"margin": 30,
						"items": 3
					},
					"767": {
						"margin": 50,
						"items": 4
					},
					"991": {
						"margin": 40,
						"items": 5
					},
					"1199": {
						"margin": 80,
						"items": 5
					}
				}}'>
                    <div class="item">
                        <img src="{{ asset('frontend/assets/images/partners/ec.png') }}" alt="">
                    </div><!-- /.item -->
                    <div class="item">
                        <img src="{{ asset('frontend/assets/images/partners/pv.png') }}" alt="">
                    </div><!-- /.item -->
                    <div class="item">
                        <img src="{{ asset('frontend/assets/images/partners/acnabin.png') }}" alt="">
                    </div><!-- /.item -->
                    <div class="item">
                        <img src="{{ asset('frontend/assets/images/partners/pecb-logo.png') }}" alt="">
                    </div><!-- /.item -->
                    <div class="item">
                        <img src="{{ asset('frontend/assets/images/partners/sck.png') }}" alt="">
                    </div><!-- /.item -->
                    <div class="item">
                        <img src="{{ asset('frontend/assets/images/partners/ars.png') }}" alt="">
                    </div><!-- /.item -->

                </div><!-- /.thm-owl__carousel -->
            </div><!-- /.container -->
        </div><!-- /.client-carousel -->

    </section>


    <section
        class="section-padding service-four gray-bg section-padding-l--bottom h-25 section-has-bottom-margin background-repeat-no background-position-top-right"
        style="background-image: url({{ asset('frontend/assets/images/shapes/service-four-bg-1-1.png') }});"><br>
        <div class="container">
            <div class="section-title text-center">

                <h2 class="section-title__title">We Provide Our Client Best <br>Information Security Services</h2>
                <!-- /.section-title__title -->
            </div><!-- /.section-title -->
            <div class="client-carousel client-carousel--two">
                <div class="container">
                    <div class="owl-carousel thm-owl__carousel" data-owl-options='{"loop": true,
				"autoplay": true,
				"autoplayTimeout": 1500,
				"autoplayHoverPause": true,
				"nav": true,
				"navText": ["<span class=\"fa fa-angle-left\"></span>","<span class=\"fa fa-angle-right\"></span>"],
				"dots": false,
				"margin": 30,
                "items": 2,
				"smartSpeed": 700,
				"responsive": {
					"0": {
						"margin": 30,
						"items": 2
					},
					"375": {
						"margin": 30,
						"items": 2
					},
					"575": {
						"margin": 30,
						"items": 3
					},
					"767": {
						"margin": 50,
						"items": 4
					},
					"991": {
						"margin": 40,
						"items": 5
					},
					"1200": {
						"margin": 5,
						"items": 5
					}
				}}'>
                        <div class="item">
                            <img src="{{ asset('frontend/assets/images/clients/bb1.jpg') }}" alt="">
                        </div><!-- /.item -->
                        <div class="item">
                            <img src="{{ asset('frontend/assets/images/clients/nrbc logo.png') }}" alt="">
                        </div><!-- /.item -->
                        <div class="item">
                            <img src="{{ asset('frontend/assets/images/clients/surjo.png') }}" alt="">
                        </div><!-- /.item -->
                        <div class="item">
                            <img src="{{ asset('frontend/assets/images/clients/aibl.png') }}" alt="">
                        </div><!-- /.item -->
                        <div class="item">
                            <img src="{{ asset('frontend/assets/images/clients/ssf.png') }}" size=small alt="">
                        </div><!-- /.item -->
                        <div class="item">
                            <img src="{{ asset('frontend/assets/images/resources/agrani bank.png') }}" alt="">
                        </div><!-- /.item -->
                        <div class="item">
                            <img src="{{ asset('frontend/assets/images/resources/rupali bank.png') }}" alt="">
                        </div><!-- /.item -->
                        <div class="item">
                            <img src="{{ asset('frontend/assets/images/resources/nrb-bank.png') }}" alt="">
                        </div><!-- /.item -->
                        <div class="item">
                            <img src="{{ asset('frontend/assets/images/resources/IFIC-Logo.png') }}" alt="">
                        </div><!-- /.item -->
                        <div class="item">
                            <img src="{{ asset('frontend/assets/images/resources/SMBL-Logo.png') }}" alt="">
                        </div><!-- /.item -->
                        <div class="item">
                            <img src="{{ asset('frontend/assets/images/resources/IFC-Logo.svg') }}" alt="">
                        </div><!-- /.item -->
                        <div class="item">
                            <img src="{{ asset('frontend/assets/images/resources/Transparency International Bangladesh.png') }}"  alt="">
                        </div><!-- /.item -->
                        <div class="item">
                            <img src="{{ asset('frontend/assets/images/resources/paywell.png') }}" alt="">
                        </div><!-- /.item -->
                        <div class="item">
                            <img src="{{ asset('frontend/assets/images/resources/Shahajalal Islami Bank_Logo.png') }}" alt="">
                        </div><!-- /.item -->
                        <div class="item">
                            <img src="{{ asset('frontend/assets/images/resources/mutual-trust.png') }}" alt="">
                        </div><!-- /.item -->
                        <div class="item">
                            <img src="{{ asset('frontend/assets/images/resources/meghnagbanklogo.png') }}" alt="">
                        </div><!-- /.item -->
                        <div class="item">
                            <img src="{{ asset('frontend/assets/images/resources/walletmix.png') }}" alt="">
                        </div><!-- /.item -->
                        <div class="item">
                            <img src="{{ asset('frontend/assets/images/resources/circle-fintech.png') }}" alt="">
                        </div><!-- /.item -->
                        <div class="item">
                            <img src="{{ asset('frontend/assets/images/resources/addiesoftlogo.svg') }}" alt="">
                        </div><!-- /.item -->
                        <div class="item">
                            <img src="{{ asset('frontend/assets/images/resources/cca.jpg') }}" alt="">
                        </div><!-- /.item -->
                        <div class="item">
                            <img src="{{ asset('frontend/assets/images/resources/genweb2.webp') }}" alt="">
                        </div><!-- /.item -->
                    </div><!-- /.thm-owl__carousel -->
                </div><!-- /.container -->
            </div><!-- /.client-carousel -->
        </div><!-- /.container -->
    </section><br><br><br>


    <!--Project Was Here-->

    <section class="black-bg section-padding-lg--top section-padding-lg--bottom cta-two">
        <div class="cta-two__bg jarallax" data-jarallax data-speed="0.2" data-imgPosition="50% 0%"
             style="background-image: url({{ asset('frontend/assets/images/background/s4.jpeg') }});"></div>
        <div class="container">
            <div class="cta-two__inner">
                <h3 class="cta-two__title">Better Information Security Services And Solutions
                    At Your <span>Fingertips</span></h3><!-- /.cta-two__title -->
                <a href="contact.html" class="thm-btn cta-two__btn"><span>Learn More</span></a>
                <!-- /.thm-btn cta-two__btn -->
            </div><!-- /.cta-two__inner -->
        </div><!-- /.container -->
    </section>
    <section
        class="section-padding--bottom section-padding--top testimonials-two background-repeat-no background-position-top-center"
        style="background-image: url({{ asset('frontend/assets/images/background/testi-bg-1-1.png') }});">
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


    <!--Team Was Here -->

    <section class=" section-padding--top about-three about-three--home-one">
        <div class="about-three__shape wow fadeInRight" data-wow-duration="1500ms"
    <!--style="background-image: url({{ asset('frontend/assets/images/shapes/about-three-s-1.png') }});"> -->
</div><!-- /.about-three__shape -->
<div class="container">
    <div class="row gutter-y-60">
        <div class="col-lg-6">
            <div class="about-three__image">
                <img src="{{ asset('frontend/assets/images/resources/rt1.png') }}" class="wow fadeInUp"
                     data-wow-duration="1500ms" alt="">
            </div><!-- /.about-three__image -->
        </div><!-- /.col-lg-6 -->
        <div class="col-lg-6">
            <div class="about-three__content">
                <div class="section-title ">
                    <p class="section-title__text">Company Benefits</p><!-- /.section-title__text -->
                    <h2 class="section-title__title">Why You Should Choose
                        Our Services</h2><!-- /.section-title__title -->
                </div><!-- /.section-title -->
                <div class="about-three__text">Choose Infetech to have custom software solutions for your
                    business with the most reasonable price.</div><!-- /.about-three__text -->
                <ul class="about-three__list">
                    <li class="about-three__list__item">
                        <div class="about-three__list__icon">
                            <i class="icon-cloud"></i>
                        </div><!-- /.about-three__list__icon -->
                        <div class="about-three__list__content">
                            <h3 class="about-three__list__title"><a href="service-cyber-security.html">Cloud
                                    Based Services</a></h3><!-- /.about-three__list__title -->
                            <p class="about-three__list__text">Services address a range of simply free text
                                application and infrastructure needs.</p><!-- /.about-three__list__text -->
                        </div><!-- /.about-three__list__content -->
                    </li>
                    <li class="about-three__list__item">
                        <div class="about-three__list__icon">
                            <i class="icon-group"></i>
                        </div><!-- /.about-three__list__icon -->
                        <div class="about-three__list__content">
                            <h3 class="about-three__list__title"><a href="team.html">Expert Team Members</a>
                            </h3><!-- /.about-three__list__title -->
                            <p class="about-three__list__text">Services address a range of simply free text
                                application and infrastructure needs.</p>
                            <br>
                            <br>
                            <br>
                            <br>
                            <br>
                            <!-- /.about-three__list__text -->
                        </div><!-- /.about-three__list__content -->
                    </li>
                </ul><!-- /.about-three__list -->
            </div><!-- /.about-three__content -->
        </div><!-- /.col-lg-6 -->

    </div><!-- /.row -->
</div><!-- /.container -->
</section>

<!--Blog Section Was Here-->


<section class="cta-one">
    <div class="container">
        <div class="cta-one__inner text-center wow fadeInUp" data-wow-duration="1500ms">
            <div class="cta-one__circle"></div><!-- /.cta-one__circle -->
            <div class="section-title ">
                <p class="section-title__text">Need Any Technology Solution</p><!-- /.section-title__text -->
                <h2 class="section-title__title section-title__title--light">Let’s Work Togather on Project</h2>
                <!-- /.section-title__title -->
            </div><!-- /.section-title -->
            <a href="contact.html" class="thm-btn thm-btn--light cta-one__btn"><span>Start Now</span></a>
            <!-- /.thm-btn thm-btn--light cta-one__btn -->
        </div><!-- /.cta-one__inner -->
    </div><!-- /.container -->
</section><!-- /.cta-one -->











<div class="footer-main-index section-padding--bottom footer-main-index--top-padding section-padding--top">
    <div class="container">
        <div class="row gutter-y-30">
            <div class="col-lg-3 col-md-6 col-sm-12">
                <div class="footer-widget footer-widget--about">
                    <a href="{{ url('/') }}" class="footer-widget__logo">
                        <img src="{{ asset('frontend/assets/images/images-removebg-preview.png') }}" display: block margin-left:auto margin-right:auto width: 50% width="50" height="50" alt="Cretech">
                    </a><br><br>
                    {{--                    <p class="footer-widget__text">We work with a passion of taking challenges and creating new--}}
                    {{--                        ones in advertising sector.</p><!-- /.footer-widget__text -->--}}

                    <h3 class="footer-widget__title"><svg style="color: rgb(237, 176, 7);" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16"> <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" fill="#edb007"></path> </svg> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30" zoomAndPan="magnify" viewBox="0 0 30 30.000001" height="30" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="id1"><path d="M 2.878906 5.769531 L 26.832031 5.769531 L 26.832031 23.1875 L 2.878906 23.1875 Z M 2.878906 5.769531 " clip-rule="nonzero"/></clipPath></defs><g clip-path="url(#id1)"><path fill="rgb(0%, 41.569519%, 30.198669%)" d="M 26.820312 20.507812 C 26.820312 21.988281 25.632812 23.1875 24.164062 23.1875 L 5.550781 23.1875 C 4.082031 23.1875 2.890625 21.988281 2.890625 20.507812 L 2.890625 8.449219 C 2.890625 6.96875 4.082031 5.769531 5.550781 5.769531 L 24.164062 5.769531 C 25.632812 5.769531 26.820312 6.96875 26.820312 8.449219 Z M 26.820312 20.507812 " fill-opacity="1" fill-rule="nonzero"/></g><path fill="rgb(95.689392%, 16.468811%, 25.489807%)" d="M 18.179688 14.144531 C 18.179688 14.449219 18.152344 14.757812 18.089844 15.058594 C 18.03125 15.359375 17.941406 15.652344 17.824219 15.9375 C 17.710938 16.222656 17.566406 16.492188 17.394531 16.75 C 17.226562 17.003906 17.035156 17.242188 16.816406 17.460938 C 16.601562 17.675781 16.367188 17.871094 16.113281 18.042969 C 15.859375 18.214844 15.589844 18.359375 15.308594 18.476562 C 15.027344 18.59375 14.734375 18.683594 14.433594 18.742188 C 14.136719 18.804688 13.832031 18.832031 13.527344 18.832031 C 13.222656 18.832031 12.917969 18.804688 12.621094 18.742188 C 12.320312 18.683594 12.027344 18.59375 11.746094 18.476562 C 11.464844 18.359375 11.195312 18.214844 10.941406 18.042969 C 10.6875 17.871094 10.453125 17.675781 10.238281 17.460938 C 10.019531 17.242188 9.828125 17.003906 9.660156 16.75 C 9.488281 16.492188 9.34375 16.222656 9.226562 15.9375 C 9.113281 15.652344 9.023438 15.359375 8.964844 15.058594 C 8.902344 14.757812 8.875 14.449219 8.875 14.144531 C 8.875 13.835938 8.902344 13.53125 8.964844 13.226562 C 9.023438 12.925781 9.113281 12.632812 9.226562 12.347656 C 9.34375 12.0625 9.488281 11.792969 9.660156 11.539062 C 9.828125 11.28125 10.019531 11.042969 10.238281 10.828125 C 10.453125 10.609375 10.6875 10.414062 10.941406 10.242188 C 11.195312 10.074219 11.464844 9.929688 11.746094 9.808594 C 12.027344 9.691406 12.320312 9.601562 12.621094 9.542969 C 12.917969 9.484375 13.222656 9.453125 13.527344 9.453125 C 13.832031 9.453125 14.136719 9.484375 14.433594 9.542969 C 14.734375 9.601562 15.027344 9.691406 15.308594 9.808594 C 15.589844 9.929688 15.859375 10.074219 16.113281 10.242188 C 16.367188 10.414062 16.601562 10.609375 16.816406 10.828125 C 17.035156 11.042969 17.226562 11.28125 17.394531 11.539062 C 17.566406 11.792969 17.710938 12.0625 17.824219 12.347656 C 17.941406 12.632812 18.03125 12.925781 18.089844 13.226562 C 18.152344 13.53125 18.179688 13.835938 18.179688 14.144531 Z M 18.179688 14.144531 " fill-opacity="1" fill-rule="nonzero"/></svg> - Bangladesh</h3>
                    <ul class="footer-widget__contact">
                        <li>
                            <i class="fa fa-phone"></i>
                            <a href="tel:+880255012235"> +88 02550 12235,</a>
                        </li>
                        <li>
                            <i class="fa fa-phone"></i>
                            <a href="tel:+8801318013300"> +88 01318 013300,</a>
                        </li>
                        <li>
                            <i class="fa fa-envelope"></i>
                            <a href="mailto:info@righttime.biz">info@righttime.biz</a>
                        </li>
                        <li>
                            <i class="fa fa-map-marker-alt"></i>
                            Level: 06 & 14 (west), BDBL Bhaban,
                            12, Karwan Bazar, Tejgaon
                            Post Code: 1215 <br>Dhaka, Bangladesh
                        </li>
                    </ul><!-- /.footer-widget__contact --><br>

                </div><!-- /.footer-widget -->
            </div><!-- /.col-lg-3 col-md-6 col-sm-12 -->
            <div class="col-lg-3 col-md-6 col-sm-12">
                <div class="footer-widget footer-widget--links">
                    <h3 class="footer-widget__title">Germany</h3><!-- /.footer-widget__title -->
                    <ul class="footer-widget__contact">
                        <li>
                            <i class="fa fa-phone"></i>
                            <a href="tel:+492311377672"> (+49) 2311377672,</a>
                        </li>
                        <li>
                            <i class="fa-solid fa-fax"></i>
                            (+49) 01624069887
                        </li>
                        <li>
                            <i class="fa fa-envelope"></i>
                            <a href="mailto:coo.de@righttime.biz">coo.de@righttime.biz</a>
                        </li>
                        <li>
                            <i class="fa fa-map-marker-alt"></i>
                            Hausmann str-1.44139, <br>Dortmund. Germany
                        </li>
                    </ul><!-- /.footer-widget__contact -->
                </div><!-- /.footer-widget -->
            </div><!-- /.col-lg-3 col-md-6 col-sm-12 -->
            <div class="col-lg-3 col-md-6 col-sm-12">
                <div class="footer-widget footer-widget--newsletter">
                    <h3 class="footer-widget__title">USA</h3><!-- /.footer-widget__title -->

                    <ul class="footer-widget__contact">
                        <li>
                            <i class="fa fa-phone"></i>
                            <a href="tel:+18187790442"> (+1) 818 779 0442,</a>
                        </li>
                        <li>
                            <i class="fa fa-phone"></i>
                            <a href="tel:+18188625708"> (+1) 818 862 5708,</a>
                        </li>
                        <li>
                            <i class="fa fa-envelope"></i>
                            <a href="mailto:coo.usa@righttime.biz">coo.usa@righttime.biz</a>
                        </li>
                        <li>
                            <i class="fa fa-map-marker-alt"></i>
                            14108 Hamlin Street, Unit # 7, Van Nuys, CA-91401
                        </li>
                    </ul><!-- /.footer-widget__contact -->
                    <div class="mc-form__response"></div><!-- /.mc-form__response -->
                </div><!-- /.footer-widget -->
            </div><!-- /.col-lg-3 col-md-6 col-sm-12 -->
            <div class="col-lg-3 col-md-6 col-sm-12">
                <div class="footer-widget footer-widget--contact">
                    <h3 class="footer-widget__title">Australia</h3><!-- /.footer-widget__title -->
                    <ul class="footer-widget__contact">
                        <li>
                            <i class="fa fa-phone"></i>
                            <a href="tel:+61490517545"> (+61) 490517545,</a>
                        </li>
                        <!--<li>-->
                        <!--    <i class="fa-solid fa-fax"></i>-->
                        <!--    <a href="tel:+61490517545"> (+61) 490517545,</a>-->
                        <!--</li>-->
                        <li>
                            <i class="fa fa-envelope"></i>
                            <a href="mailto:coo.au@righttime.biz">coo.au@righttime.biz</a>
                        </li>
                        <li>
                            <i class="fa fa-map-marker-alt"></i>
                            11 Dahlia St. Quakers Hill,NSW 2763<br>
                            Sydney,Australia.
                        </li>
                    </ul><!-- /.footer-widget__contact -->
                </div><!-- /.footer-widget -->
            </div><!-- /.col-lg-3 col-md-6 col-sm-12 -->
        </div><!-- /.row -->
        <br>
        <div class="container" style="padding-left: 40%;margin-bottom: -60px">
            <ul class="footer-widget__social">
                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                <li><a href="#"><i class="fab fa-pinterest-p"></i></a></li>
                <li><a href="#"><i class="fab fa-instagram"></i></a></li>
            </ul><!-- /.footer-widget__social -->
        </div>

    </div><!-- /.container -->
</div><!-- /.footer-main -->
<div class="footer-bottom">
    <div class="container">
        <p>&copy; All Copyright <span class="dynamic-year"></span> by Right Time Limited</p>
    </div><!-- /.container -->
</div><!-- /.footer-bottom -->

















</div><!-- /.page-wrapper -->


<div class="mobile-nav__wrapper">
    <div class="mobile-nav__overlay mobile-nav__toggler"></div>
    <!-- /.mobile-nav__overlay -->
    <div class="mobile-nav__content">
        <a href="#" class="mobile-nav__close mobile-nav__toggler">
            <span></span>
            <span></span>
        </a>

        <div class="logo-box">
            <a href="index.html" aria-label="logo image"><img src="{{ asset('frontend/assets/images/images-removebg-preview.png') }}" width="78"
                                                              height="53" alt="Cretech"></a>
        </div>
        <!-- /.logo-box -->
        <div class="mobile-nav__container"></div>
        <!-- /.mobile-nav__container -->

        <ul class="mobile-mobile-nav__country">
            <h5>Select Country</h5>
            <li><a href="{{ url('/') }}"><img src="{{ asset('frontend/assets/images/flag/bd.png') }}" width="40px"></a></li>
            <li><a href="{{ url('/usa') }}"><img src="{{ asset('frontend/assets/images/flag/usa.png') }}" width="40px"></a></li>
            <li><a href="{{ url('/aus') }}"><img src="{{ asset('frontend/assets/images/flag/aus.png') }}" width="40px"></a></li>
        </ul><!-- /.mobile-nav__social -->

        <ul class="mobile-nav__contact list-unstyled">
            <li>
                <i class="fa fa-phone"></i>
                <a href="tel:+8801318013300">(+49) 2311377672</a>
            </li>
            <li>
                <i class="fa fa-phone"></i>
                <a href="tel:+8801318013300">(+49) 01624069887</a>
            </li>
            <li>
                <i class="fa fa-envelope"></i>
                <a href="mailto:needhelp@company.com">coo.de@righttime.biz</a>
            </li>
            <li>
                <i class="fa fa-map-marker-alt"></i>
                Hausmann str-1.44139, <br>Dortmund. Germany
            </li>
        </ul><!-- /.mobile-nav__contact -->
        <ul class="mobile-nav__social">
            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
            <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
            <li><a href="#"><i class="fab fa-pinterest-p"></i></a></li>
            <li><a href="#"><i class="fab fa-instagram"></i></a></li>
        </ul><!-- /.mobile-nav__social -->



    </div>
    <!-- /.mobile-nav__content -->
</div>
<!-- /.mobile-nav__wrapper -->

<div class="search-popup">
    <div class="search-popup__overlay search-toggler"></div>
    <!-- /.search-popup__overlay -->
    <div class="search-popup__content">
        <form action="#">
            <label for="search" class="sr-only">search here</label><!-- /.sr-only -->
            <input type="text" id="search" placeholder="Search Here..." />
            <button type="submit" aria-label="search submit" class="thm-btn">
                <span><i class="icon-magnifying-glass"></i></span>
            </button>
        </form>
    </div>
    <!-- /.search-popup__content -->
</div>
<!-- /.search-popup -->

<a href="#" data-target="html" class="scroll-to-target scroll-to-top"><i class="fa fa-angle-up"></i></a>

<!-- plugins js -->
<script src="{{ asset('frontend/assets/vendors/jquery/jquery-3.6.0.min.js') }}"></script>
<script src="{{ asset('frontend/assets/vendors/bootstrap/js/bootstrap.bundle.min.js') }}"></script>
<script src="{{ asset('frontend/assets/vendors/jquery-validation/jquery.validate.min.js') }}"></script>
<script src="{{ asset('frontend/assets/vendors/owl-carousel/owl.carousel.min.js') }}"></script>
<script src="{{ asset('frontend/assets/vendors/jquery-appear/jquery.appear.min.js') }}"></script>
<script src="{{ asset('frontend/assets/vendors/wow/wow.js') }}"></script>
<script src="{{ asset('frontend/assets/vendors/jarallax/jarallax.min.js') }}"></script>
<script src="{{ asset('frontend/assets/vendors/jquery-ajaxchimp/jquery.ajaxchimp.min.js') }}"></script>
<script src="{{ asset('frontend/assets/vendors/lettering-js/jquery.lettering.js') }}"></script>
<script src="{{ asset('frontend/assets/vendors/youtube-popup/youtube-popup.jquery.js') }}"></script>
<!-- template js -->
<script src="{{ asset('frontend/assets/js/cretech.js') }}"></script>


<!--Start of Tawk.to Script-->
<script type="text/javascript">
    var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
    (function(){
        var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
        s1.async=true;
        s1.src='https://embed.tawk.to/631ecf5b37898912e9689025/1gco5jvn9';
        s1.charset='UTF-8';
        s1.setAttribute('crossorigin','*');
        s0.parentNode.insertBefore(s1,s0);
    })();
</script>
<!--End of Tawk.to Script-->
<script src="https://code.jquery.com/jquery-1.7.2.min.js"></script>

<script src="http://code.jquery.com/jquery-1.11.3.min.js"></script>
<script src="https://unpkg.com/masonry-layout@4.0/dist/masonry.pkgd.min.js"></script>

<script src="{{ asset('frontend/external/js/jquery.material-cards.min.js') }}"></script>
<script src="{{ asset('frontend/external/js/jquery.material-cards.js') }}"></script>


<script>
    $(function() {

        var $grid = $('.grid').masonry({
            itemSelector: '.grid-item',
            columnWidth: 390,
        });

        $('.material-card').materialCard();

        $('.material-card').on('shown.material-card hidden.material-card', function (event) {
            $grid.masonry();
        });

    });
</script>



<script>
    var i = 0;
    var a3 = $('#a3');
    var a4 = $('#a4');
    var a5 = $('#a5');
    var a8 = $('#a8');
    var f2 = $('#f2');
    var f1 = $('#f1');
    var f5 = $('#f5');

    for (i = 1; i < 11; i++) {
        a3.append('<span class=a3'+i+'></span>');
        $('.a3'+i+'').css({
            '-webkit-animation' : 'a3 1s '+(Math.random()*2)+'s  infinite',
            '-moz-animation' : 'a3 1s '+(Math.random()*2)+'s  infinite'
        });
    }
    setInterval(function() {
        $('#a3 span').each(function() {
            $(this).text(Math.ceil(Math.random()*999));;
        });
    }, 100);

    for (i = 1; i < 31; i++) {
        a4.append('<span class=a3'+i+'></span>');
        setInterval(function() {
            $('#a4 span').each(function() {
                $(this).width((Math.random()*15));
            });
        }, 500);
    }

    for (i = 1; i < 16; i++) {
        a5.append('<span><b class=a5'+i+'></b></span>');
        $('.a5'+i+'').css({
            '-webkit-animation' : 'a3 1s 0.'+i+'s  infinite',
            '-moz-animation' : 'a3 1s 0.'+i+'s  infinite'
        });
    }

    setInterval(function() {
        var h = Math.ceil(Math.random()*24);
        var m = Math.ceil(Math.random()*60);
        if (h<10) {$('.a731').text('0'+h+':');}
        else {$('.a731').text(h+':');}
        if (m<10) {$('.a732').text('0'+m);}
        else {$('.a732').text(m);}
    }, 100);

    setInterval(function() {
        var d = Math.ceil(Math.random()*30);
        var m = Math.ceil(Math.random()*12);
        var min = 1700, max = 1999;
        var rand = min - 0.5 + Math.random()*(max-min+1)
        rand = Math.round(rand);

        if (d<10) {$('.a741').text('0'+d+'/');}
        else {$('.a741').text(d+'/');}
        if (m<10) {$('.a742').text('0'+m+'/');}
        else {$('.a742').text(m+'/');}
        $('.a743').text(rand);
    }, 50);

    for (i = 1; i < 41; i++) {
        a8.append('<span></span>');
    }

    setInterval(function() {
        var mino = 10000, maxo = 99999;
        var rand = mino - 0.5 + Math.random()*(maxo-mino+1);
        rand = Math.round(rand);

        var mine = 100000000, maxe = 999999999;
        var ran = mine - 0.5 + Math.random()*(maxe-mine+1);
        ran = Math.round(ran);

        $('#a9 span:odd').text(rand);
        $('#a9 span:even').text(ran);

    }, 100);


    for (i = 1; i < 37; i++) {
        f2.append('<span class=f2'+i+'></span>');
        $('.f2'+i+'').css({
            '-webkit-transform' : 'rotateZ('+i+'0deg) translateY(95px)'
        });
    }

    for (i = 1; i < 19; i++) {
        f5.append('<span class=f5'+i+'><b>'+Math.random()*30+'</b></span>');
        $('.f5'+i+'').css({
            '-webkit-transform' : 'rotateZ('+i*2+'0deg) translateY(40px)'
        });
    }

    for (i = 1; i < 13; i++) {
        f1.append('<span class=f1'+i+'></span>');
        $('.f1'+i+'').css({
            '-webkit-transform' : 'rotateZ('+i*30+'deg) translateY(91px)'
        });
    }
</script>

</body>

</html>








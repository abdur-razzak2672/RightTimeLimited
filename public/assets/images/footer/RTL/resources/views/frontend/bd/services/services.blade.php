@extends('frontend.bd.main_master')
@section('content')

@section('title')
    Services
@endsection

    <div class="page-header">
        <div class="page-header__bg"
             style="background-image: url({{ asset('http://www.stemmonsservices.com/wp-content/uploads/2018/02/5064042-hd-business-wallpaper.jpg') }});"></div>
        <!-- /.page-header__bg -->
        <div class="container">
            <ul class="thm-breadcrumb list-unstyled">
                <li><a href="{{ url('/') }}">Home</a></li>
                <li>Services</li>
            </ul>
            <h2 class="page-header__title">Services</h2><!-- /.page-header__title -->
        </div><!-- /.container -->
    </div><!-- /.page-header -->

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
				"dots": true,
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
                        <h3 class="service-card-three__title"><a href="{{ url('/services/security-training') }}">Security
                                <br>
                                Training</a></h3><!-- /.service-card-three__title -->
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

<br>



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
                        <img src="{{ asset('frontend/assets/images/resources/bangladesh bank.png') }}" alt="">
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
                        <img src="{{ asset('frontend/assets/images/resources/Transparency International Bangladesh.png') }}" alt="">
                    </div><!-- /.item -->
                    <div class="item">
                        <img src="{{ asset('frontend/assets/images/resources/paywell.png') }}" alt="">
                    </div><!-- /.item -->
                    <div class="item">
                        <img src="{{ asset('frontend/assets/images/resources/Shahajalal Islami Bank_Logo.png') }}" alt="">
                    </div><!-- /.item -->
                    <div class="item">
                        <img src="{{ asset('frontend/assets/images/resources/shurjomikhi.png') }}" alt="">
                    </div><!-- /.item -->
                    <div class="item">
                        <img src="{{ asset('frontend/assets/images/resources/padma bank.png') }}" alt="">
                    </div><!-- /.item -->
                    <div class="item">
                        <img src="{{ asset('frontend/assets/images/resources/SBAC bank.png') }}" alt="">
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
                        <img src="{{ asset('frontend/assets/images/resources/aibl.jpg') }}" alt="">
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
</section>

<br>


  <br>
<br>
<br>
<br>


    <section class="section-padding--bottom">
        <div class="container">
            <div class="section-title text-center">
                <p class="section-title__text">Company Benefits</p><!-- /.section-title__text -->
                <h2 class="section-title__title">We Provide Best Information Security <br> Service and Solution For 13 Years</h2>
                <!-- /.section-title__title -->
            </div><!-- /.section-title -->
            <div class="row gutter-y-30">
                <div class="col-lg-3 col-md-6 col-sm-12">
                    <div class="service-card-two gray-bg">
                        <h3 class="service-card-two__title"><a href="services-1.html">Quality Service</a></h3>
                        <!-- /.service-card-two__title -->
                        <p class="service-card-two__text">Sed perspe unde omnis natus sit voluptatem acc doloremue
                        </p><!-- /.service-card-two__text -->
                        <div class="service-card-two__icon">
                            <i class="icon-smart-tv"></i>
                        </div><!-- /.service-card-two__icon -->
                    </div><!-- /.service-card-two -->
                </div><!-- /.col-lg-3 -->
                <div class="col-lg-3 col-md-6 col-sm-12">
                    <div class="service-card-two gray-bg">
                        <h3 class="service-card-two__title"><a href="team.html">Expert Team</a></h3>
                        <!-- /.service-card-two__title -->
                        <p class="service-card-two__text">Sed perspe unde omnis natus sit voluptatem acc doloremue
                        </p><!-- /.service-card-two__text -->
                        <div class="service-card-two__icon">
                            <i class="icon-link"></i>
                        </div><!-- /.service-card-two__icon -->
                    </div><!-- /.service-card-two -->
                </div><!-- /.col-lg-3 -->
                <div class="col-lg-3 col-md-6 col-sm-12">
                    <div class="service-card-two gray-bg">
                        <h3 class="service-card-two__title"><a href="contact.html">Excellent Support</a></h3>
                        <!-- /.service-card-two__title -->
                        <p class="service-card-two__text">Sed perspe unde omnis natus sit voluptatem acc doloremue
                        </p><!-- /.service-card-two__text -->
                        <div class="service-card-two__icon">
                            <i class="icon-technical-support"></i>
                        </div><!-- /.service-card-two__icon -->
                    </div><!-- /.service-card-two -->
                </div><!-- /.col-lg-3 -->
                <div class="col-lg-3 col-md-6 col-sm-12">
                    <div class="service-card-two gray-bg">
                        <h3 class="service-card-two__title"><a href="about.html">Management</a></h3>
                        <!-- /.service-card-two__title -->
                        <p class="service-card-two__text">Sed perspe unde omnis natus sit voluptatem acc doloremue
                        </p><!-- /.service-card-two__text -->
                        <div class="service-card-two__icon">
                            <i class="icon-cctv"></i>
                        </div><!-- /.service-card-two__icon -->
                    </div><!-- /.service-card-two -->
                </div><!-- /.col-lg-3 -->
            </div><!-- /.row -->
        </div><!-- /.container -->
    </section>

    <section class="cta-one" style="padding-bottom: 5%">
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
            </div
            ><!-- /.cta-one__inner -->
        </div><!-- /.container -->
                        <br>
                <br>
                
                <br>
                <br>
    </section><!-- /.cta-one -->

@endsection

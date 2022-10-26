@extends('frontend.usa.main_master')
@section('content')
    @section('title')
        Contact
    @endsection

    <div class="page-header">
        <div class="page-header__bg"
             style="background-image: url({{ asset('frontend/assets/images/resources/contact.png') }});"></div>
        <!-- /.page-header__bg -->
        <div class="container">
            <ul class="thm-breadcrumb list-unstyled">
                <li><a href="{{ url('/usa') }}">Home</a></li>
                <li>Contact</li>
            </ul>
            <h2 class="page-header__title">Contact</h2><!-- /.page-header__title -->
        </div><!-- /.container -->
    </div><!-- /.page-header -->

    <section class="contact-one section-padding--top section-padding--bottom">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <form action="assets/inc/sendemail.php" class="contact-one__form contact-form-validated">
                        <div class="section-title">
                            <p class="section-title__text">Contact with us</p><!-- /.section-title__text -->
                            <h2 class="section-title__title">Join Us To Get IT Free
                                Consultations</h2><!-- /.section-title__title -->
                        </div><!-- /.section-title -->
                        <div class="row ">
                            <div class="col-lg-6 col-md-12">
                                <input type="text" placeholder="Your name" name="name">
                            </div><!-- /.col-lg-6 col-md-12 -->
                            <div class="col-lg-6 col-md-12">
                                <input type="email" placeholder="Email address" name="email">
                            </div><!-- /.col-lg-6 col-md-12 -->
                            <div class="col-lg-12 col-md-12">
                                <textarea name="message" placeholder="Write message"></textarea>
                            </div><!-- /.col-lg-6 col-md-12 -->
                            <div class="col-md-12">
                                <button class="thm-btn contact-one__btn" type="submit"><span>send a
											message</span></button>
                            </div><!-- /.col-md-12 -->
                        </div><!-- /.row -->
                    </form><!-- /.contact-one__form -->
                    <div class="result"></div><!-- / -->
                </div><!-- /.col-lg-8 -->
                <div class="col-lg-4">
                    <div class="contact-one__info wow fadeInRight" data-wow-duration="1500ms"
                         style="background-image: url({{ asset('frontend/assets/images/background/contact-one-bg-1-1.png') }});">
                        <div class="contact-one__item">
                            <h3 class="contact-one__item__title">Address</h3><!-- /.contact-one__item__title -->
                            <p class="contact-one__item__text">14108 Hamlin Street, Unit # 7, Van Nuys, CA-91401</p><!-- /.contact-one__item__text -->
                        </div><!-- /.contact-one__item -->
                        <div class="contact-one__item">
                            <h3 class="contact-one__item__title">Phone</h3><!-- /.contact-one__item__title -->
                            <p class="contact-one__item__text">Local: <a href="#">(+1) 818 779 0442</a><br>
                                Mobile: <a href="#">(+1) 818 862 5708</a></p>
                            <!-- /.contact-one__item__text -->
                        </div><!-- /.contact-one__item -->
                        <div class="contact-one__item">
                            <h3 class="contact-one__item__title">Email</h3><!-- /.contact-one__item__title -->
                            <p class="contact-one__item__text"><a
                                    href="mailto:coo.usa@righttime.biz">coo.usa@righttime.biz</a></p>
                            <!-- /.contact-one__item__text -->
                        </div><!-- /.contact-one__item -->
                        <div class="contact-one__item">
                            <ul class="contact-one__social">
                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i class="fab fa-pinterest-p"></i></a></li>
                                <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                            </ul><!-- /.contact-one__social -->
                        </div><!-- /.contact-one__item -->
                    </div><!-- /.contact-one__info -->
                </div><!-- /.col-lg-4 -->
            </div><!-- /.row -->
        </div><!-- /.container -->
    </section><!-- /.contact-one -->

    <!--Google Map Start-->
    <section class="google-map google-map--contact">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd"
            class="google-map__one" allowfullscreen></iframe>

    </section>
    <!--Google Map End-->
    <br>
    <br>
    <br>
    <br>

@endsection

@extends('frontend.bd.main_master')
@section('content')
    @section('title')
        Payment Card Industry
    @endsection

    <div class="page-header">
        <div class="page-header__bg"
             style="background-image: url({{ asset('frontend/assets/images/background/bank.png') }});"></div>
        <!-- /.page-header__bg -->
        <div class="container">
            <ul class="thm-breadcrumb list-unstyled">
                <li><a href="{{ url('/') }}">Home</a></li>
                <li>Payment Card Industry</li>
            </ul>
            <h2 class="page-header__title">Payment Card Industry</h2><!-- /.page-header__title -->
        </div><!-- /.container -->
    </div><!-- /.page-header -->

    <section class="section-padding--bottom section-padding--top">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">


                    <h3 class="blog-card-one__title blog-details__title" style="color:orange;" >Payment Card Industries</h3>
                    <div class="blog-details__content">
                        <p>Online payment is getting more and more common as enterprises utilize an online payment system, which brings convenience to the public and to the online consumer market.
                        By providing secure online payment to customers, enterprises have to implement security controls in order to protect cardholder and payment information.
                        If payment information is leaked, it can create a huge losses for the cardholder as well as the organization’s reputation, brand, and image.
                        Right Time can help by providing a PCI data-security audit to ensure that your organization’s payment system is secure thus garnering trust from customers with their sensitive payment card information.</p>
                    </div><!-- /.blog-details__content -->


                </div><!-- /.col-lg-8 -->
                <div class="col-lg-4">
                    <div class="sidebar">
                        <div class="sidebar__item sidebar__item--category">
                            @include('frontend.bd.industries.common')
                        </div><!-- /.sidebar__item -->
                    </div><!-- /.sidebar -->
                </div><!-- /.col-lg-4 -->
            </div><!-- /.row -->
        </div><!-- /.container -->
    </section><br>



@endsection

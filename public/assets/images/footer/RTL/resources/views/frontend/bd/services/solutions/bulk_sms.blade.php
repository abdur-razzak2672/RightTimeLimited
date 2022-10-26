@extends('frontend.bd.main_master')
@section('content')
    @section('title')
        Bulk SMS
    @endsection

    <div class="page-header">
        <div class="page-header__bg"
             style="background-image: url({{ asset('https://img.freepik.com/premium-photo/email-user-icon-sign-symbol-marketing-newsletter-concept-diagram-sending-email-bulk-mail-email-sms-marketing-concept-scheme-direct-sales-business-list-clients-mailing_150455-17992.jpg?w=2000') }});"></div>
        <!-- /.page-header__bg -->
        <div class="container">
            <ul class="thm-breadcrumb list-unstyled">
                <li><a href="{{ url('/') }}">Home</a></li>
                <li><a href="{{ url('/services') }}">Services</a></li>
                <li><a href="{{ url('/services/solutions') }}">Solutions</a></li>
                <li>Bulk SMS</li>
            </ul>
            <h2 class="page-header__title">Bulk SMS</h2><!-- /.page-header__title -->
        </div><!-- /.container -->
    </div><!-- /.page-header -->

    <section class="section-padding--bottom section-padding--top">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">


                    <h3 class="blog-card-one__title blog-details__title">Bulk SMS</h3>
                    <div class="blog-details__content">
                        <p>Bulk messaging is the dissemination of large numbers of SMS messages for delivery to mobile phone terminals. It is used by media companies, banks and other enterprises and consumer brands for a variety of purposes including entertainment, enterprise and mobile marketing.</p>
                    </div><!-- /.blog-details__content -->


                </div><!-- /.col-lg-8 -->
                <div class="col-lg-4">
                    <div class="sidebar">
                        <div class="sidebar__item sidebar__item--category">
                            @include('frontend.bd.services.solutions.common')
                        </div><!-- /.sidebar__item -->
                    </div><!-- /.sidebar -->
                </div><!-- /.col-lg-4 -->
            </div><!-- /.row -->
        </div><!-- /.container -->
    </section><br>



@endsection

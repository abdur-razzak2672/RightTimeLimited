@extends('frontend.bd.main_master')
@section('content')
    @section('title')
        Core Impact
    @endsection

    <div class="page-header">
        <div class="page-header__bg"
             style="background-image: url({{ asset('https://www.coresecurity.com/sites/default/files/2022-02/021022-cs-excellence-awards-graphic-update.png') }});"></div>
        <!-- /.page-header__bg -->
        <div class="container">
            <ul class="thm-breadcrumb list-unstyled">
                <li><a href="{{ url('/') }}">Home</a></li>
                <li><a href="{{ url('/services') }}">Services</a></li>
                <li><a href="{{ url('/services/solutions') }}">Solutions</a></li>
                <li>Core Impact</li>
            </ul>
            <h2 class="page-header__title">Core Impact</h2><!-- /.page-header__title -->
        </div><!-- /.container -->
    </div><!-- /.page-header -->

    <section class="section-padding--bottom section-padding--top">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">


                    <h3 class="blog-card-one__title blog-details__title">Core Impact</h3>
                    <div class="blog-details__content">
                        <p>Core Impact is designed to enable security teams to conduct advanced penetration tests with ease. With guided automation and certified exploits, the powerful penetration testing software enables you to safely test your environment using the same techniques as today's adversaries. </p>
                        <p>Replicate attacks across network infrastructure, endpoints, web, and applications to reveal exploited vulnerabilities, empowering you to immediately remediate risks.</p>
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

@extends('frontend.bd.main_master')
@section('content')
    @section('title')
        Smart Contract
    @endsection

    <div class="page-header">
        <div class="page-header__bg"
             style="background-image: url({{ asset('https://media.istockphoto.com/photos/rules-for-compliance-with-policies-business-technology-concepts-picture-id1210242041?b=1&k=20&m=1210242041&s=170667a&w=0&h=_1RFJfNoKggOvddy5z68GVyIpS1_xIBkt5bcKAjfG5I=') }});"></div>
        <!-- /.page-header__bg -->
        <div class="container">
            <ul class="thm-breadcrumb list-unstyled">
                <li><a href="{{ url('/') }}">Home</a></li>
                <li><a href="{{ url('/services') }}">Services</a></li>
                <li><a href="{{ url('/services/solutions') }}">Solutions</a></li>
                <li>Smart Contract</li>
            </ul>
            <h2 class="page-header__title">Smart Contract</h2><!-- /.page-header__title -->
        </div><!-- /.container -->
    </div><!-- /.page-header -->

    <section class="section-padding--bottom section-padding--top">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">


                    <h3 class="blog-card-one__title blog-details__title">Smart Contract</h3>
                    <div class="blog-details__content">
                        <p>Smart contracts are simply programs stored on a blockchain that run when predetermined conditions are met. </p>
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

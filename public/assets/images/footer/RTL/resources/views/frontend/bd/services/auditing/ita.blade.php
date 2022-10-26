@extends('frontend.bd.main_master')
@section('content')
    @section('title')
        Information Technology Audit
    @endsection

    <div class="page-header">
        <div class="page-header__bg"
             style="background-image: url({{ asset('https://wallpaperaccess.com/full/1892752.jpg') }});"></div>
        <!-- /.page-header__bg -->
        <div class="container">
            <ul class="thm-breadcrumb list-unstyled">
                <li><a href="{{ url('/') }}">Home</a></li>
                <li><a href="{{ url('/services') }}">Services</a></li>
                <li><a href="{{ url('/services/auditing') }}">Auditing</a></li>
                <li>Information Technology Audit</li>
            </ul>
            <h2 class="page-header__title">Information Technology Audit</h2><!-- /.page-header__title -->
        </div><!-- /.container -->
    </div><!-- /.page-header -->

    <section class="section-padding--bottom section-padding--top">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">


                    <h3 style="color:orange;" class="blog-card-one__title blog-details__title">Information Technology Audit</h3>
                    <div class="blog-details__content">
                        <p>An IT audit is a review and assessment of a company's information technology operations, policies, and infrastructure. Information technology audits determine whether IT controls safeguard corporate resources, guarantee data integrity, and are consistent with the overarching objectives of the company.</p>
                            <br><br><br><br><br><br><br><br><br><br>
                    </div><!-- /.blog-details__content -->


                </div><!-- /.col-lg-8 -->
                <div class="col-lg-4">
                    <div class="sidebar">
                        <div class="sidebar__item sidebar__item--category">
                            @include('frontend.bd.services.auditing.common')
                        </div><!-- /.sidebar__item -->
                    </div><!-- /.sidebar -->
                </div><!-- /.col-lg-4 -->
            </div><!-- /.row -->
        </div><!-- /.container -->
    </section><br>



@endsection

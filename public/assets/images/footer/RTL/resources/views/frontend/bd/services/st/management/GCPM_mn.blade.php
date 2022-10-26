@extends('frontend.bd.main_master')
@section('content')
@section('title')
    GIAC Certified Project Manager (GCPM)
@endsection

<div class="page-header">
    <div class="page-header__bg"
         style="background-image: url({{ asset('frontend/assets/images/background/') }});"></div>
    <!-- /.page-header__bg -->
    <div class="container">
        <ul class="thm-breadcrumb list-unstyled">
            <li><a href="{{ url('/') }}">Home</a></li>
            <li><a href="{{ url('/services/security-training') }}">Training</a></li>
            <li><a href="{{ url('/services/security-training/management') }}">Management</a></li>
            <li>GIAC Certified Project Manager (GCPM)</li>
        </ul>
        <h2 class="page-header__title">GIAC Certified Project Manager (GCPM)</h2><!-- /.page-header__title -->
    </div><!-- /.container -->
</div><!-- /.page-header -->

<section class="section-padding--bottom section-padding--top">
    <div class="container">
        <div class="row">
            <div class="col-lg-8">


                <h3 class="blog-card-one__title blog-details__title">GIAC Certified Project Manager (GCPM)</h3>
                <div class="blog-details__content">
                    <p>The GIAC Certified Project Manager (GCPM) certification validates a practitioner's knowledge of technical project management methodology and implementation. GCPM certification holders have demonstrated the critical skill sets associated with making projects successful, including effective communication and time, cost, quality, procurement and risk management of IT projects and application development.
                    </p>
                    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
                </div><!-- /.blog-details__content -->


            </div><!-- /.col-lg-8 -->
            <div class="col-lg-4">
                <div class="sidebar">
                    <div class="sidebar__item sidebar__item--category">
                        @include('frontend.bd.services.st.management.cmn')
                    </div><!-- /.sidebar__item -->
                </div><!-- /.sidebar -->
            </div><!-- /.col-lg-4 -->
        </div><!-- /.row -->
    </div><!-- /.container -->
</section><br>



@endsection

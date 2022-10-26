@extends('frontend.bd.main_master')
@section('content')
@section('title')
    Auditing
@endsection

<div class="page-header">
    <div class="page-header__bg"
         style="background-image: url({{ asset('frontend/assets/images/background/auditor_pro.png') }});"></div>
    <!-- /.page-header__bg -->
    <div class="container">
        <ul class="thm-breadcrumb list-unstyled">
            <li><a href="{{ url('/') }}">Home</a></li>
            <li><a href="{{ url('/services') }}">Services</a></li>
            <li>Auditing</li>
        </ul>
        <h2 class="page-header__title">Auditing</h2><!-- /.page-header__title -->
    </div><!-- /.container -->
</div><!-- /.page-header -->

<section class="section-padding--bottom section-padding--top">
    <div class="container">
        <div class="row">
            <div class="col-lg-8">


                <h3 class="blog-card-one__title blog-details__title">Auditing</h3>
                <p>A system audit is an audit on a management system to validate whether or not the elements of the system are effective and properly implemented to meet the objectives or standards.</p>
                <br>
                 <br> <br>
                  <br> <br>
                   <br>
                    <br> <br> <br>
                <div class="blog-details__content">
                    <p></p>
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

@extends('frontend.bd.main_master')
@section('content')
@section('title')
    Consultation
@endsection

<div class="page-header">
    <div class="page-header__bg"
         style="background-image: url({{ asset('frontend/assets/images/background/con.png') }});"></div>
    <!-- /.page-header__bg -->
    <div class="container">
        <!--<ul class="thm-breadcrumb list-unstyled">-->
        <!--    <li><a href="{{ url('/') }}">Home</a></li>-->
        <!--    <li><a href="{{ url('/services') }}">Services</a></li>-->
        <!--    <li>Consultation</li>-->
        <!--</ul>-->
        <h2 class="page-header__title"></h2><!-- /.page-header__title -->
    </div><!-- /.container -->
</div><!-- /.page-header -->

<section class="section-padding--bottom section-padding--top">
    <div class="container">
        <div class="row">
            <div class="col-lg-8">


                <h3 class="blog-card-one__title blog-details__title">Consultation</h3>
                <div class="blog-details__content">
                    <p>
                        We provide various cyber security consultancy services.
                    </p>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>

                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                </div><!-- /.blog-details__content -->


            </div><!-- /.col-lg-8 -->
            <div class="col-lg-4">
                <div class="sidebar">
                    <div class="sidebar__item sidebar__item--category">
                        @include('frontend.bd.services.consultation.common')
                    </div><!-- /.sidebar__item -->
                </div><!-- /.sidebar -->
            </div><!-- /.col-lg-4 -->
        </div><!-- /.row -->
    </div><!-- /.container -->
</section><br>



@endsection

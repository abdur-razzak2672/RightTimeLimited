@extends('frontend.bd.main_master')
@section('content')
    @section('title')
        Net Sporker
    @endsection

    <div class="page-header">
        <div class="page-header__bg"
             style="background-image: url({{ asset('https://1382778335.rsc.cdn77.org/wp-content/uploads/2022/03/Netsparker-is-now-Invicti-signaling-new-era-for-modern-AppSec.jpg') }});"></div>
        <!-- /.page-header__bg -->
        <div class="container">
            <ul class="thm-breadcrumb list-unstyled">
                <li><a href="{{ url('/') }}">Home</a></li>
                <li><a href="{{ url('/services') }}">Services</a></li>
                <li><a href="{{ url('/services/solutions') }}">Solutions</a></li>
                <li>Net Sparker</li>
            </ul>
            <h2 class="page-header__title">Netsparker</h2><!-- /.page-header__title -->
        </div><!-- /.container -->
    </div><!-- /.page-header -->

    <section class="section-padding--bottom section-padding--top">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">


                    <h3 class="blog-card-one__title blog-details__title">Netsparker</h3>
                    <div class="blog-details__content">
                        <p>Netsparker is an automated yet fully configurable Enterprise DAST (Dynamic Application Security Testing) utility that enables you to scan websites, web applications, and web services to identify security flaws.</p>
                    <br>
                    <br>
                    <br><br>
                    <br>
                    <br>
                    <br>
                    <br><br>
                    <br>
                    <br>
                    <br>
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

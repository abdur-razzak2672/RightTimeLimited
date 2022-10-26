@extends('frontend.bd.main_master')
@section('content')
    @section('title')
        Code Review
    @endsection

    <div class="page-header">
        <div class="page-header__bg"
             style="background-image: url({{ asset('https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29kZSUyMHJldmlld3xlbnwwfHwwfHw%3D&w=1000&q=80') }});"></div>
        <!-- /.page-header__bg -->
        <div class="container">
            <ul class="thm-breadcrumb list-unstyled">
                <li><a href="{{ url('/') }}">Home</a></li>
                <li><a href="{{ url('/services') }}">Services</a></li>
                <li><a href="{{ url('/services/security-assessment-testing') }}">Security Assessment & Testing</a></li>
                <li>Code Review</li>
            </ul>
            <h2 class="page-header__title">Code Review</h2><!-- /.page-header__title -->
        </div><!-- /.container -->
    </div><!-- /.page-header -->

    <section class="section-padding--bottom section-padding--top">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">


                    <h3 style="color:orange"; class="blog-card-one__title blog-details__title">Code Review</h3>
                    <div class="blog-details__content">
                        <h6><b>Get REAL hackers to Review Your Code!</b></h6>
                        <p>
Get our team of hackers to review your code to make sure it is secure and bullet-proof. </p> <br>
<h6><b>Why Right Time Limited?</b></h6>

                        <p>
                            <ul>
                                <li>Unlike normal developers our hackers will focus on the security of your code and ensure that it can’t be exploited by back-hat hackers.</li>
                                <li>We take your privacy seriously so you can share your code with us and get expert advice in confidence.</li>
                                <li>We have consultants who worked on the offensive side (ethical hackers) and defensive side (security experts) so you can rest assured that you’ll get expert advice on whatever you need help with.</li>
                            </ul>
                            
                            
                            
                        </p>
                        <br>
                        <br>
                        <br>
                        <br>
                        <br>
                        <br><br>
                    </div><!-- /.blog-details__content -->


                </div><!-- /.col-lg-8 -->
                <div class="col-lg-4">
                    <div class="sidebar">
                        <div class="sidebar__item sidebar__item--category">
                            @include('frontend.bd.services.sat.common')
                        </div><!-- /.sidebar__item -->
                    </div><!-- /.sidebar -->
                </div><!-- /.col-lg-4 -->
            </div><!-- /.row -->
        </div><!-- /.container -->
    </section><br>



@endsection

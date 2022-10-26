@extends('frontend.bd.main_master')
@section('content')
    @section('title')
        Educational Institutions
    @endsection

    <div class="page-header">
        <div class="page-header__bg"
             style="background-image: url({{ asset('frontend/assets/images/background/ed.png') }});"></div>
        <!-- /.page-header__bg -->
        <div class="container">
            <ul class="thm-breadcrumb list-unstyled">
                <li><a href="{{ url('/') }}">Home</a></li>
                <li>Educational Institutions</li>
            </ul>
            <h2 class="page-header__title">Educational Institutions</h2><!-- /.page-header__title -->
        </div><!-- /.container -->
    </div><!-- /.page-header -->

    <section class="section-padding--bottom section-padding--top">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">


                    <h3 class="blog-card-one__title blog-details__title" style="color:orange;" >Educational Institutions</h3>
                    <div class="blog-details__content">
                        <p>Cyber security is critical for all organizations, not just IT.
                        The need for cyber security in educational institutions is growing.
                        The development of computers and the Internet has made life easier for people in educational and other institutions.
</p>
                        <p>Digitization of the education system has led to serious problems such as cyberbullying, malware attacks and hacking.
                        Additionally, with the rapid growth of distance education and virtual classrooms, cyber security is one of the main concerns for educational institutions and students.
</p>
                        <p>Educational institutions are gold mines of personal information. Therefore, this department should prioritize cyber security.
                        While the sector faces major challenges such as lack of personnel and funding and resources, cyber attacks are no less frequent or less severe in education.
                        Despite widespread reports of breaches in schools and higher education, they seem to be increasing in prevalence.</p>

                        <br>
                        <h4 style="color:orange;" >How Can Right Time Limited Help?</h4>
                        <p>With extensive security capabilities and decades of industry presence behind them, RightTime Ltd can help schools, higher education, universities and research institutions become more resilient, secure and adaptable in a changing threat landscape.
                        The Right Time Limited’s portfolio includes a full suite of security offerings, ranging from security assessment, information security compliance to incident response services.<p>





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

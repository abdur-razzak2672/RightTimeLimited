@extends('frontend.de.main_master')
@section('content')
    @section('title')
        Certified Threat Intelligence Analyst(CTIA)
    @endsection

    <div class="page-header">
        <div class="page-header__bg"
             style="background-image: url({{ asset('frontend/assets/images/background/page-header-bg-1-1.jpg') }});"></div>
        <!-- /.page-header__bg -->
        <div class="container">
            <ul class="thm-breadcrumb list-unstyled">
                <li><a href="{{ url('/de') }}">Home</a></li>
                <li><a href="{{ url('de/services') }}">Services</a></li>
                <li><a href="{{ url('de/services/security-training') }}">Security Training</a></li>
                <li>Certified Threat Intelligence Analyst(CTIA)</li>
            </ul>
            <h2 class="page-header__title">Certified Threat Intelligence Analyst(CTIA)</h2><!-- /.page-header__title -->
        </div><!-- /.container -->
    </div><!-- /.page-header -->

    <section class="section-padding--bottom section-padding--top">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">


                    <h3 class="blog-card-one__title blog-details__title">Certified Threat Intelligence Analyst (C|TIA)</h3>
                    <div class="blog-details__content">
                        <p>Organizations today demand a professional-level cybersecurity threat intelligence analyst who
                            can extract intelligence from data by implementing various advanced strategies. Such
                            professional-level threat intelligence training programs can only be achieved when the core
                            of the curricula maps with and is compliant to government and industry published threat
                            intelligence frameworks.<br>

                            CTIA is a method-driven threat intelligence program that uses a 360-degree approach,
                            covering concepts from planning to building a threat intelligence report for pre-emptive
                            threat detection and preventive measures. These concepts are highly essential while building
                            effective threat intelligence and, when used properly, can secure organizations from future
                            threats or attacks.<br><br>

                            <h5>Course Outline -</h5>
                            Introduction to Threat Intelligence<br>
                            Cyber Threats and Kill Chain Methodology<br>
                            Requirements, Planning, Direction, and Review<br>
                            Data Collection and Processing<br>
                            Data Analysis<br>
                            Intelligence Reporting and Dissemination<br>
                        </p>
                    </div><!-- /.blog-details__content -->


                </div><!-- /.col-lg-8 -->
                <div class="col-lg-4">
                    <div class="sidebar">
                        <div class="sidebar__item sidebar__item--category">
                            @include('frontend.de.services.st.common')
                        </div><!-- /.sidebar__item -->
                    </div><!-- /.sidebar -->
                </div><!-- /.col-lg-4 -->
            </div><!-- /.row -->
        </div><!-- /.container -->
    </section><br>



@endsection

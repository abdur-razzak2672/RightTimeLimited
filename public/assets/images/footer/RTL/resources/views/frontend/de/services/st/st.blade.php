@extends('frontend.de.main_master')
@section('content')
@section('title')
    Security Training
@endsection

<div class="page-header">
    <div class="page-header__bg"
         style="background-image: url({{ asset('frontend/assets/images/background/training.png') }});"></div>
    <!-- /.page-header__bg -->
    <div class="container">
        <!--<ul class="thm-breadcrumb list-unstyled">-->
        <!--    <li><a href="{{ url('/de') }}">Home</a></li>-->
        <!--    <li><a href="{{ url('de/services') }}">Services</a></li>-->
        <!--    <li>Security Training</li>-->
        <!--</ul>-->
        <!--<h2 class="page-header__title">Security Training</h2>-->
        <!-- /.page-header__title -->
    </div><!-- /.container -->
</div><!-- /.page-header -->

<section class="section-padding--bottom section-padding--top">
    <div class="container">
        <div class="row">
            <div class="col-lg-8">


                <h3 class="blog-card-one__title blog-details__title">Security Training</h3>
                <div class="blog-details__content">
                    <p>At RightTime, we believe very strongly on training so that common mistakes which can open doors for
                        vulnerabilities for the organizations can be eliminated. The purpose of providing good training is
                        also to make sure our customers follow the best industry practices while performing any IT task.
                        We provide training/ seminars to IT professionals and employees with access to sensitive information
                        to better educate them about the risks of information security threats and how to prevent themselves
                        from falling prey to ruses posed by competitors or malicious intruders. These training and or seminars
                        are dedicated to preventing human error from undermining an otherwise robust information security
                        infrastructure.<br><br>

                        Our training courses are associated with the present as well as the future need for the professional
                        working in any IT-driven Organization or organization trying to achieve international recognition/
                        certiﬁcation on Information System Governance, Compliance, Risk management, Security, Quality, Process
                        or Environment, etc. Not only you earn knowledge, but you also head for a globally recognized qualiﬁcation.
                        Our services in these areas are-<br><br>

                        •IT Security Corporate Programs like preparatory training of ITIL, CEH, CHFI, ECSA, LPT,
                        Cyber Security & Cyber Forensic and Software Testing, etc.<br>

                        •Skill Development in the area of Project Management and Data Center Operation e.g. ITIL, PRINCE2, and PMP<br>

                        •Preparatory Training on CRISC, CGEIT, CISA, CISSP, CISM<br>
                        •Training on IS Audits & IT Security.<br>

                        •Training on Internal Audits which covers a wide range of activities like finance, systems,
                        HR, Stock, processes, purchase, and marketing activities with a special emphasis on improving
                        the skills of internal auditors, collecting evidence, sampling, interview, and presentation techniques.<br>


                        •Technical Documentation Training (making IT Policy Workbook containing IT Security Policy,
                        Standard Operation Procedures (SOP), BCP & DRP, etc.)<br>
                    </p>
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
                      @include('frontend.de.services.st.common')
                    </div><!-- /.sidebar__item -->
                </div><!-- /.sidebar -->
            </div><!-- /.col-lg-4 -->
        </div><!-- /.row -->
    </div><!-- /.container -->
</section><br>



@endsection

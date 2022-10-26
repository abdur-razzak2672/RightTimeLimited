@extends('frontend.bd.main_master')
@section('content')
    @section('title')
        SWIFT CSP Independent Assesment
    @endsection

    <div class="page-header">
        <div class="page-header__bg"
             style="background-image: url({{ asset('https://fineksus.com/wp-content/uploads/2021/08/CSP-Header.png') }});"></div>
        <!-- /.page-header__bg -->
        <div class="container">
            <ul class="thm-breadcrumb list-unstyled">
                <li><a href="{{ url('/') }}">Home</a></li>
                <li><a href="{{ url('/services') }}">Services</a></li>
                <li><a href="{{ url('/services/standard-implementation-certification') }}">Standard Implementation & Certification</a></li>
                <li>SWIFT CSP Independent Assesment</li>
            </ul>
            <h2 class="page-header__title">SWIFT CSP Independent Assesment</h2><!-- /.page-header__title -->
        </div><!-- /.container -->
    </div><!-- /.page-header -->

    <section class="section-padding--bottom section-padding--top">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">


                    <h3 style="color:orange;" class="blog-card-one__title blog-details__title">SWIFT CSP Independent Assessment
</h3>
                    <div class="blog-details__content">
                        
                        <b>What is a SWIFT CSP assessment?</b>
                        <p>SWIFT's Customer Security Programme (CSP) is designed to ensure that financial institutions keep up with the controls they need to address cyber threats.
In 2016, the Society for Worldwide Interbank Financial Telecommunication (SWIFT) established a Customer Security Programme (CSP) introducing the Customer Security Controls Framework (CSCF). The Program aims to drive transparency and improve the security posture across the global financial community. The SWIFT community consists of over 11,000 institutions worldwide – all of which are required to annually attest to the current CSCF.





 </p>
                        <p>The SWIFT system manages nearly all international and securities transfers worldwide. The SWIFT system is a large-scale messaging network used by banks and other financial institutions to send and receive money transfer-related information quickly, accurately and securely. The system processes over 46 million transactions per day through the network.</p>
                        <p>SWIFT is a member-owned cooperative that provides members with secure financial transactions. Its membership comprises over 11,000 institutions in over 200 countries. Almost every type of financial institution, from banks to brokerage dealers to asset managers, uses one or more of the SWIFT services in one way or another.</p>
                    <br>
                    <img src="https://globalsecuresolutions.com/wp-content/uploads/2021/06/SWIFT_CSP_security_controls_framework_2020.png" alt="CSP">
                     <br>
                      <br>
                       <br>
                    </div><!-- /.blog-details__content -->


                </div><!-- /.col-lg-8 -->
                <div class="col-lg-4">
                    <div class="sidebar">
                        <div class="sidebar__item sidebar__item--category">
                            @include('frontend.bd.services.sic.common')
                        </div><!-- /.sidebar__item -->
                    </div><!-- /.sidebar -->
                </div><!-- /.col-lg-4 -->
            </div><!-- /.row -->
        </div><!-- /.container -->
    </section><br>



@endsection

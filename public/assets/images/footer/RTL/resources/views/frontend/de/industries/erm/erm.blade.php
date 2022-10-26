@extends('frontend.de.main_master')
@section('content')
    @section('title')
        eCommerce & Retail Merchants
    @endsection

    <div class="page-header">
        <div class="page-header__bg"
             style="background-image: url({{ asset('frontend/assets/images/background/ecom.png') }});"></div>
        <!-- /.page-header__bg -->
        <div class="container">
            <ul class="thm-breadcrumb list-unstyled">
                <li><a href="{{ url('/de') }}">Home</a></li>
                <li>eCommerce & Retail Merchants</li>
            </ul>
            <h2 class="page-header__title">eCommerce & Retail Merchants</h2><!-- /.page-header__title -->
        </div><!-- /.container -->
    </div><!-- /.page-header -->

    <section class="section-padding--bottom section-padding--top">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">


                    <h3 class="blog-card-one__title blog-details__title" style="color:orange;" >E-Commerce and Retails Merchentant</h3>
                    <div class="blog-details__content">
                        <p>E-commerce and Retail companies are high on hacker lists, and recent reports highlight the number of cyber attacks on the sector.
                        As E-commerce and retailers handle millions of transactions each year, attackers with the ability to compromise networks gain access to huge blocks of data that can be forged or sold online.
                        As skimming, Point of Sale (POS) compromise, phishing, ransomware, web applications and denial of service attacks increase, organizations must continually improve their security controls..</p>

                        <br>
                        <h4 style="color:orange;">How Can Right Time Limited Help?</h4>
                        <p>Achieving regulatory and compliance security requirements is more demanding every year; Right Time Limited is positioned to help you meet your responsibilities.
                        With 13 years of experience working within retail, our security specialists better understand the challenges your organization faces.
                        We provide the advisory to satisfy PCI DSS, P2PE, GDPR and POPIA standards and regulations. In addition, we are also focused on -
                        <ul>
                        <li>Protecting sensitive customer PII and card payment data.</li>
                        <li>Detecting and responding to cyber-attacks and breaches.</li>
                        <li>Security Assessment and Testing.</li>
                        <li>Regulatory and compliance requirements.</li>
                        <li>Incident Response Maturity capability.</li>
                        <li>Supporting legacy systems and accessibility.</li>
                        <li>Helping newcomers to the payments industry to learn the standards and pass their first full assessment.</li>
                        <li>Guidance to reduce the scope of payment industry standards as much as possible by segmenting and implementing technologies such as encryption or tokenization.on.</li>
                        <li>Helping you select controls that fit your business and operations</li>
                        <li>Providing guidance for developing procedures that protect your front-line associates.</li>
                        <li>Verifying that controls are working as intended.</li>

                        </ul>

                        </p>

                    <br>

                    </div><!-- /.blog-details__content -->


                </div><!-- /.col-lg-8 -->
                <div class="col-lg-4">
                    <div class="sidebar">
                        <div class="sidebar__item sidebar__item--category">
                            @include('frontend.de.industries.common')
                        </div><!-- /.sidebar__item -->
                    </div><!-- /.sidebar -->
                </div><!-- /.col-lg-4 -->
            </div><!-- /.row -->
        </div><!-- /.container -->
    </section><br>



@endsection

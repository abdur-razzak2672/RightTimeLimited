
@extends('frontend.bd.main_master')
@section('content')
    @section('title')
        Partners
    @endsection

    <div class="page-header">
        <div class="page-header__bg"
             style="background-image: url({{ asset('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Sx9Pg3qkhXGHG5NDgzX1n7j1dcuDqkScUQ&usqp=CAU') }});"></div>
        <!-- /.page-header__bg -->
        <div class="container">
            <ul class="thm-breadcrumb list-unstyled">
                <li><a href="{{ url('/') }}">Home</a></li>
                <li>Partners</li>
            </ul>
            <h2 class="page-header__title">Partners</h2><!-- /.page-header__title -->
        </div><!-- /.container -->
    </div><!-- /.page-header -->

    <section class="section-padding--bottom section-padding--top">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">


                    <h3 class="blog-card-one__title blog-details__title">Partners</h3>
                    <div class="blog-details__content">
                        <p>We have been so lucky to have the opportunity to make partnership with various companies througout the whole world. 
                        </p>
                    </div><!-- /.blog-details__content -->


                </div><!-- /.col-lg-8 -->
                <div class="col-lg-4">
                    <div class="sidebar">
                        <div class="sidebar__item sidebar__item--category">
                            <h3 class="sidebar__title">Partners</h3><!-- /.sidebar__title -->
                            <ul class="sidebar__category">
                                <li><a href="#">Service Partner</a>
                                    <ul>
                                        <li><a href="https://www.eccouncil.org/">EC Council</a></li>
                                        <li><a href="https://home.pearsonvue.com/" >Pearson Vue</a></li>
                                        <li><a href="https://pecb.com/en">PECB ISO Certification</a></li>
                                        <li><a href="https://arscert.com/certification/">ARS</a></li>
                                        <li><a href="https://sckcerts.com/">SCK</a></li>
                                        <li><a href="https://www.acnabin.com/">ACNABIN</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Solution Partner</a>
                                    <ul>
                                        <li><a href="https://www.invicti.com/">INVICTI</a></li>
                                        <li><a href="https://www.coresecurity.com/products/core-impact" >Core Impact</a></li>
                                        <li><a href="https://portswigger.net/burp">Burp Suite</a></li>
                                    </ul>
                                </li>

                                <li><a href="#">Association</a>
                                    <ul>
                                        <li><a href="http://cca.gov.bd/site/office_head/5891f732-8e0f-40b0-9f85-1cb867657bfd/%E0%A6%AC%E0%A6%BF%E0%A6%B8%E0%A7%8D%E0%A6%A4%E0%A6%BE%E0%A6%B0%E0%A6%BF%E0%A6%A4">CCA,Ministry of ICT</a></li>
                                        <li><a href="https://www.pcisecuritystandards.org/">PCI SSC, USA</a></li>
                                        <li><a href="https://www.worldbank.org/en/home">WBGs (World Bank Group)</a></li>
                                        <li><a href="https://www.swift.com/">SWIFT</a></li>
                                        <li><a href="https://basis.org.bd/">BASIS</a></li>
                                        <li><a href="https://e-cab.net/">E-CAB</a></li>
                                    </ul>
                                </li>
                            </ul><!-- /.sidebar__category -->
                        </div><!-- /.sidebar__item -->
                    </div><!-- /.sidebar -->
                </div><!-- /.col-lg-4 -->
            </div><!-- /.row -->
        </div><!-- /.container -->
    </section><br><br><br><br>



@endsection

@extends('frontend.aus.main_master')
@section('content')
    @section('title')
        Blog
    @endsection

    <div class="page-header">
        <div class="page-header__bg"
             style="background-image: url({{ asset('frontend/assets/images/background/page-header-bg-1-1.jpg') }});"></div>
        <!-- /.page-header__bg -->
        <div class="container">
            <ul class="thm-breadcrumb list-unstyled">
                <li><a href="{{ url('/aus') }}">Home</a></li>
                <li>Blog</li>
            </ul>
            <h2 class="page-header__title">Blog Page</h2><!-- /.page-header__title -->
        </div><!-- /.container -->
    </div><!-- /.page-header -->


    <section class="section-padding--top section-padding--bottom">
        <div class="container">
            <div class="row gutter-y-30">
                <div class="col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-duration="1500ms"
                     data-wow-delay="000ms">
                    <div class="blog-card-one">
                        <div class="blog-card-one__image">
                            <img src="{{ asset('frontend/assets/images/blog/blog-1-1.jpg') }}" alt="">
                            <a href="blog-details.html"></a>
                        </div><!-- /.blog-card-one__image -->
                        <div class="blog-card-one__content">
                            <div class="blog-card-one__meta">
                                <div class="blog-card-one__date">
                                    <i class="fa fa-calendar-alt" aria-hidden="true"></i>
                                    July, 25, 2022
                                </div><!-- /.blog-card-one__date -->
                                <a href="blog.html" class="blog-card-one__category">Designer</a>
                                <!-- /.blog-card-one__category -->
                            </div><!-- /.blog-card-one__meta -->
                            <h3 class="blog-card-one__title"><a href="blog-details.html">Web design done Delightful
                                    Visualization Examples</a></h3>
                            <a href="blog-details.html" class="blog-card-one__more">
                                Read More
                                <i class="fa fa-arrow-right"></i>
                            </a><!-- /.blog-card-one__more -->
                        </div><!-- /.blog-card-one__content -->
                    </div><!-- /.blog-card-one -->
                </div><!-- /.col-lg-4 col-md-6 col-sm-12 -->
                <div class="col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-duration="1500ms"
                     data-wow-delay="100ms">
                    <div class="blog-card-one">
                        <div class="blog-card-one__image">
                            <img src="{{ asset('frontend/assets/images/blog/blog-1-2.jpg') }}" alt="">
                            <a href="blog-details.html"></a>
                        </div><!-- /.blog-card-one__image -->
                        <div class="blog-card-one__content">
                            <div class="blog-card-one__meta">
                                <div class="blog-card-one__date">
                                    <i class="fa fa-calendar-alt" aria-hidden="true"></i>
                                    July, 25, 2022
                                </div><!-- /.blog-card-one__date -->
                                <a href="blog.html" class="blog-card-one__category">Graphic</a>
                                <!-- /.blog-card-one__category -->
                            </div><!-- /.blog-card-one__meta -->
                            <h3 class="blog-card-one__title"><a href="blog-details.html">Technology Support Allows
                                    Erie non-profit to Serve</a></h3>
                            <a href="blog-details.html" class="blog-card-one__more">
                                Read More
                                <i class="fa fa-arrow-right"></i>
                            </a><!-- /.blog-card-one__more -->
                        </div><!-- /.blog-card-one__content -->
                    </div><!-- /.blog-card-one -->
                </div><!-- /.col-lg-4 col-md-6 col-sm-12 -->
                <div class="col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-duration="1500ms"
                     data-wow-delay="200ms">
                    <div class="blog-card-one">
                        <div class="blog-card-one__image">
                            <img src="{{ asset('frontend/assets/images/blog/blog-1-3.jpg') }}" alt="">
                            <a href="blog-details.html"></a>
                        </div><!-- /.blog-card-one__image -->
                        <div class="blog-card-one__content">
                            <div class="blog-card-one__meta">
                                <div class="blog-card-one__date">
                                    <i class="fa fa-calendar-alt" aria-hidden="true"></i>
                                    July, 25, 2022
                                </div><!-- /.blog-card-one__date -->
                                <a href="blog.html" class="blog-card-one__category">SEO</a>
                                <!-- /.blog-card-one__category -->
                            </div><!-- /.blog-card-one__meta -->
                            <h3 class="blog-card-one__title"><a href="blog-details.html">Software Makes Your Profit
                                    Double if You Scale Properly</a></h3>
                            <a href="blog-details.html" class="blog-card-one__more">
                                Read More
                                <i class="fa fa-arrow-right"></i>
                            </a><!-- /.blog-card-one__more -->
                        </div><!-- /.blog-card-one__content -->
                    </div><!-- /.blog-card-one -->
                </div><!-- /.col-lg-4 col-md-6 col-sm-12 -->
                <div class="col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-duration="1500ms"
                     data-wow-delay="300ms">
                    <div class="blog-card-one">
                        <div class="blog-card-one__image">
                            <img src="{{ asset('frontend/assets/images/blog/blog-1-4.jpg') }}" alt="">
                            <a href="blog-details.html"></a>
                        </div><!-- /.blog-card-one__image -->
                        <div class="blog-card-one__content">
                            <div class="blog-card-one__meta">
                                <div class="blog-card-one__date">
                                    <i class="fa fa-calendar-alt" aria-hidden="true"></i>
                                    July, 25, 2022
                                </div><!-- /.blog-card-one__date -->
                                <a href="blog.html" class="blog-card-one__category">Designer</a>
                                <!-- /.blog-card-one__category -->
                            </div><!-- /.blog-card-one__meta -->
                            <h3 class="blog-card-one__title"><a href="blog-details.html">Bring to the table win-win
                                    survival strategies to </a></h3>
                            <a href="blog-details.html" class="blog-card-one__more">
                                Read More
                                <i class="fa fa-arrow-right"></i>
                            </a><!-- /.blog-card-one__more -->
                        </div><!-- /.blog-card-one__content -->
                    </div><!-- /.blog-card-one -->
                </div><!-- /.col-lg-4 col-md-6 col-sm-12 -->
                <div class="col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-duration="1500ms"
                     data-wow-delay="400ms">
                    <div class="blog-card-one">
                        <div class="blog-card-one__image">
                            <img src="{{ asset('frontend/assets/images/blog/blog-1-5.jpg') }}" alt="">
                            <a href="blog-details.html"></a>
                        </div><!-- /.blog-card-one__image -->
                        <div class="blog-card-one__content">
                            <div class="blog-card-one__meta">
                                <div class="blog-card-one__date">
                                    <i class="fa fa-calendar-alt" aria-hidden="true"></i>
                                    July, 25, 2022
                                </div><!-- /.blog-card-one__date -->
                                <a href="blog.html" class="blog-card-one__category">Graphic</a>
                                <!-- /.blog-card-one__category -->
                            </div><!-- /.blog-card-one__meta -->
                            <h3 class="blog-card-one__title"><a href="blog-details.html">Capitalize on low hanging
                                    fruit to identify a ballpark </a></h3>
                            <a href="blog-details.html" class="blog-card-one__more">
                                Read More
                                <i class="fa fa-arrow-right"></i>
                            </a><!-- /.blog-card-one__more -->
                        </div><!-- /.blog-card-one__content -->
                    </div><!-- /.blog-card-one -->
                </div><!-- /.col-lg-4 col-md-6 col-sm-12 -->
                <div class="col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-duration="1500ms"
                     data-wow-delay="500ms">
                    <div class="blog-card-one">
                        <div class="blog-card-one__image">
                            <img src="{{ asset('frontend/assets/images/blog/blog-1-6.jpg') }}" alt="">
                            <a href="blog-details.html"></a>
                        </div><!-- /.blog-card-one__image -->
                        <div class="blog-card-one__content">
                            <div class="blog-card-one__meta">
                                <div class="blog-card-one__date">
                                    <i class="fa fa-calendar-alt" aria-hidden="true"></i>
                                    July, 25, 2022
                                </div><!-- /.blog-card-one__date -->
                                <a href="blog.html" class="blog-card-one__category">SEO</a>
                                <!-- /.blog-card-one__category -->
                            </div><!-- /.blog-card-one__meta -->
                            <h3 class="blog-card-one__title"><a href="blog-details.html">User generated content in
                                    real-time will have multiple </a></h3>
                            <a href="blog-details.html" class="blog-card-one__more">
                                Read More
                                <i class="fa fa-arrow-right"></i>
                            </a><!-- /.blog-card-one__more -->
                        </div><!-- /.blog-card-one__content -->
                    </div><!-- /.blog-card-one -->
                </div><!-- /.col-lg-4 col-md-6 col-sm-12 -->
            </div><!-- /.row gutter-y-30 -->
        </div><!-- /.container -->
    </section>

@endsection

@extends('frontend.bd.main_master')
@section('content')
    @section('title')
        Blog-Details
    @endsection

    <div class="page-header">
        <div class="page-header__bg"
             style="background-image: url({{ asset('frontend/assets/images/background/page-header-bg-1-1.jpg') }});"></div>
        <!-- /.page-header__bg -->
        <div class="container">
            <ul class="thm-breadcrumb list-unstyled">
                <li><a href="index.html">Home</a></li>
                <li>Blog</li>
            </ul>
            <h2 class="page-header__title">Blog Details</h2><!-- /.page-header__title -->
        </div><!-- /.container -->
    </div><!-- /.page-header -->

    <section class="section-padding--bottom section-padding--top">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <div class="blog-details__image">
                        <img src="{{ asset('frontend/assets/images/blog/blog-d-1-1.jpg') }}" alt="">
                    </div><!-- /.blog-details__image -->
                    <div class="blog-card-one__meta">
                        <div class="blog-card-one__date">
                            <i class="fa fa-calendar-alt" aria-hidden="true"></i>
                            July, 25, 2022
                        </div><!-- /.blog-card-one__date -->
                        <a href="blog.html" class="blog-card-one__category">Designer</a>
                        <!-- /.blog-card-one__category -->
                    </div><!-- /.blog-card-one__meta -->
                    <h3 class="blog-card-one__title blog-details__title">Web design done Delightful
                        Visualization Examples</h3>
                    <div class="blog-details__content">
                        <p>Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum. There are many
                            variations of passages of Lorem Ipsum available, but the majority have alteration in
                            some injected or words which don't look even slightly believable. If you are going to
                            use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrang hidden
                            in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat
                            predefined chunks as necessary, making this the first true generator on the Internet. It
                            uses a dictionary of over 200 Latin words, combined with a handful of model sentence
                            structures, to generate Lorem Ipsum which looks reasonable. </p>
                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                            unknown printer took a galley of type and scrambled it to make a type simen book. It has
                            survived not only five centuries, but also the leap into electronic typesetting.</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. orem Ipsum has
                            been the industry's standard dummy text ever since the when an unknown printer took a
                            galley of type and scrambled it to make a type specimen book. It has survived not only
                            five centuries, but also the leap into unchanged.</p>
                    </div><!-- /.blog-details__content -->
                    <div class="blog-details__meta">
                        <div class="blog-details__tags">
                            <span>Tags</span>
                            <a href="#">Development</a>
                            <a href="#">Designing</a>
                        </div><!-- /.blog-details__tags -->
                        <ul class="blog-details__share">
                            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                            <li><a href="#"><i class="fab fa-pinterest-p"></i></a></li>
                            <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                        </ul><!-- /.blog-details__share -->
                    </div><!-- /.blog-details__meta -->
                    <div class="author-one">
                        <div class="author-one__image">
                            <img src="{{ asset('frontend/assets/images/blog/author-1-1.jpg') }}" alt="">
                        </div><!-- /.author-one__image -->
                        <div class="author-one__content">
                            <h3 class="author-one__title">Christine Eve</h3><!-- /.author-one__title -->
                            <p class="author-one__text">Lorem ipsum is simply free text by copytyping refreshing.
                                Neque porro est qui dolorem ipsum quia quaed veritatis et quasi architecto.</p>
                            <!-- /.author-one__text -->
                        </div><!-- /.author-one__content -->
                    </div><!-- /.author-one -->
                    <div class="comments-one">
                        <h3 class="comments-one__title">2 Comments</h3><!-- /.comments-one__title -->
                        <div class="comments-one__item">
                            <div class="comments-one__item__image">
                                <img src="{{ asset('frontend/assets/images/blog/comment-1-1.png') }}" alt="">
                            </div><!-- /.comments-one__item__image -->
                            <div class="comments-one__item__content">
                                <h3 class="comments-one__item__title">Kevin Martin</h3>
                                <!-- /.comments-one__item__title -->
                                <p class="comments-one__item__text">It has survived not only five centuries, but
                                    also the leap into electronic typesetting simply fee text aunchanged. It was
                                    popularised in the sheets containing lorem ipsum is simply free text.</p>
                                <!-- /.comments-one__item__text -->
                                <a href="#" class="thm-btn comments-one__item__btn"><span>Reply</span></a>
                                <!-- /.thm-btn comments-one__item__btn -->
                            </div><!-- /.comments-one__item__content -->
                        </div><!-- /.comments-one__item -->
                        <div class="comments-one__item">
                            <div class="comments-one__item__image">
                                <img src="{{ asset('frontend/assets/images/blog/comment-1-2.png') }}" alt="">
                            </div><!-- /.comments-one__item__image -->
                            <div class="comments-one__item__content">
                                <h3 class="comments-one__item__title">Sarah Albert</h3>
                                <!-- /.comments-one__item__title -->
                                <p class="comments-one__item__text">It has survived not only five centuries, but
                                    also the leap into electronic typesetting simply fee text aunchanged. It was
                                    popularised in the sheets containing lorem ipsum is simply free text.</p>
                                <!-- /.comments-one__item__text -->
                                <a href="#" class="thm-btn comments-one__item__btn"><span>Reply</span></a>
                                <!-- /.thm-btn comments-one__item__btn -->
                            </div><!-- /.comments-one__item__content -->
                        </div><!-- /.comments-one__item -->
                    </div><!-- /.comments-one -->
                    <div class="comment-form">
                        <h3 class="comment-form__title">Leave a Comment</h3><!-- /.comment-form__title -->
                        <form action="{{ asset('frontend/') }}assets/inc/sendemail.php"
                              class="contact-one__form contact-form-validated comment-form__form">
                            <div class="row ">
                                <div class="col-lg-6 col-md-12">
                                    <input type="text" placeholder="Your name" name="name">
                                </div><!-- /.col-lg-6 col-md-12 -->
                                <div class="col-lg-6 col-md-12">
                                    <input type="email" placeholder="Email address" name="email">
                                </div><!-- /.col-lg-6 col-md-12 -->
                                <div class="col-lg-12 col-md-12">
                                    <textarea name="message" placeholder="Write message"></textarea>
                                </div><!-- /.col-lg-6 col-md-12 -->
                                <div class="col-md-12">
                                    <button class="thm-btn contact-one__btn" type="submit"><span>Submit
												comment</span></button>
                                </div><!-- /.col-md-12 -->
                            </div><!-- /.row -->
                        </form><!-- /.contact-one__form -->

                    </div><!-- /.comment-form -->
                </div><!-- /.col-lg-8 -->
                <div class="col-lg-4">
                    <div class="sidebar">
                        <div class="sidebar__item sidebar__item--search">
                            <form action="#" class="sidebar__search">
                                <label for="search" class="sr-only">search here</label><!-- /.sr-only -->
                                <input type="text" placeholder="Search Here" />
                                <button type="submit" aria-label="search submit" class="thm-btn">
                                    <span><i class="icon-magnifying-glass"></i></span>
                                </button>
                            </form>
                        </div><!-- /.sidebar__item -->
                        <div class="sidebar__item sidebar__item--posts">
                            <h3 class="sidebar__title">Latest Posts</h3><!-- /.sidebar__title -->
                            <ul class="sidebar__posts">
                                <li>
                                    <div class="sidebar__posts__image">
                                        <img src="{{ asset('frontend/assets/images/blog/blog-s-1-1.png') }}" alt="">
                                    </div><!-- /.sidebar__posts__image -->
                                    <div class="sidebar__posts__content">
                                        <div class="sidebar__posts__date">
                                            <i class="fa fa-comments"></i>
                                            2 Comments
                                        </div><!-- /.sidebar__posts__date -->
                                        <h3 class="sidebar__posts__title"><a href="blog-details.html">Tech
                                                experiences that
                                                connect us</a></h3><!-- /.sidebar__posts__title -->
                                    </div><!-- /.sidebar__posts__content -->
                                </li>
                                <li>
                                    <div class="sidebar__posts__image">
                                        <img src="{{ asset('frontend/assets/images/blog/blog-s-1-2.png') }}" alt="">
                                    </div><!-- /.sidebar__posts__image -->
                                    <div class="sidebar__posts__content">
                                        <div class="sidebar__posts__date">
                                            <i class="fa fa-comments"></i>
                                            2 Comments
                                        </div><!-- /.sidebar__posts__date -->
                                        <h3 class="sidebar__posts__title"><a href="blog-details.html">Tech
                                                experiences that
                                                connect us</a></h3><!-- /.sidebar__posts__title -->
                                    </div><!-- /.sidebar__posts__content -->
                                </li>
                                <li>
                                    <div class="sidebar__posts__image">
                                        <img src="{{ asset('frontend/assets/images/blog/blog-s-1-3.png') }}" alt="">
                                    </div><!-- /.sidebar__posts__image -->
                                    <div class="sidebar__posts__content">
                                        <div class="sidebar__posts__date">
                                            <i class="fa fa-comments"></i>
                                            2 Comments
                                        </div><!-- /.sidebar__posts__date -->
                                        <h3 class="sidebar__posts__title"><a href="blog-details.html">Tech
                                                experiences that
                                                connect us</a></h3><!-- /.sidebar__posts__title -->
                                    </div><!-- /.sidebar__posts__content -->
                                </li>
                            </ul><!-- /.sidebar__posts -->
                        </div><!-- /.sidebar__item -->
                        <div class="sidebar__item sidebar__item--category">
                            <h3 class="sidebar__title">Categories</h3><!-- /.sidebar__title -->
                            <ul class="sidebar__category">
                                <li>
                                    <a href="#">Web Development</a>
                                </li>
                                <li>
                                    <a href="#">Digital Marketing</a>
                                </li>
                                <li>
                                    <a href="#">Technology</a>
                                </li>
                                <li>
                                    <a href="#">Data Analysis</a>
                                </li>
                                <li>
                                    <a href="#">Cyber Security</a>
                                </li>
                            </ul><!-- /.sidebar__category -->
                        </div><!-- /.sidebar__item -->
                        <div class="sidebar__item sidebar__item--tags">
                            <h3 class="sidebar__title">Tags</h3><!-- /.sidebar__title -->
                            <div class="sidebar__tags">
                                <a href="#">Development</a>
                                <a href="#">Designing</a>
                                <a href="#">Business</a>
                                <a href="#">Marketing</a>
                                <a href="#">technology</a>
                            </div><!-- /.sidebar__tags -->
                        </div><!-- /.sidebar__item -->
                    </div><!-- /.sidebar -->
                </div><!-- /.col-lg-4 -->
            </div><!-- /.row -->
        </div><!-- /.container -->
    </section>



@endsection

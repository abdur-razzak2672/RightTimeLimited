import React from "react";

function BlogDetails() {
  return (
    <div>
      <div className="page-header">
        <div
          className="page-header__bg"
          style={{
            backgroundImage: `url('assets/images/background/page-header-bg-1-1.jpg')`,
          }}
        ></div>

        <div className="container">
          <ul className="thm-breadcrumb list-unstyled">
            <li>
              <a href="/">Home</a>
            </li>
            <li>Blog</li>
          </ul>
          <h2 className="page-header__title">Blog Details</h2>
        </div>
      </div>

      <section className="section-padding--bottom section-padding--top">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-details__image">
                <img loading="lazy" decoding="async" src="assets/images/blog/blog-d-1-1.jpg" alt="" />
              </div>
              <div className="blog-card-one__meta">
                <div className="blog-card-one__date">
                  <i className="fa fa-calendar-alt" aria-hidden="true"></i>
                  July, 25, 2022
                </div>
                <a href="blog.html" className="blog-card-one__category">
                  Designer
                </a>
              </div>
              <h3 className="blog-card-one__title blog-details__title">
                Web design done Delightful Visualization Examples
              </h3>
              <div className="blog-details__content">
                <p>
                  Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci
                  phaedrum. There are many variations of passages of Lorem Ipsum
                  available, but the majority have alteration in some injected
                  or words which don't look even slightly believable. If you are
                  going to use a passage of Lorem Ipsum, you need to be sure
                  there isn't anything embarrang hidden in the middle of text.
                  All the Lorem Ipsum generators on the Internet tend to repeat
                  predefined chunks as necessary, making this the first true
                  generator on the Internet. It uses a dictionary of over 200
                  Latin words, combined with a handful of model sentence
                  structures, to generate Lorem Ipsum which looks
                  reasonable.{" "}
                </p>
                <p>
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type simen book. It has survived
                  not only five centuries, but also the leap into electronic
                  typesetting.
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. orem Ipsum has been the industry's
                  standard dummy text ever since the when an unknown printer
                  took a galley of type and scrambled it to make a type specimen
                  book. It has survived not only five centuries, but also the
                  leap into unchanged.
                </p>
              </div>
              <div className="blog-details__meta">
                <div className="blog-details__tags">
                  <span>Tags</span>
                  <a href="/blog">Development</a>
                  <a href="/blog">Designing</a>
                </div>
                <ul className="blog-details__share">
                  <li>
                    <a href="/blog">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/blog">
                      <i className="fab fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/blog">
                      <i className="fab fa-pinterest-p"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/blog">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="author-one">
                <div className="author-one__image">
                  <img loading="lazy" decoding="async" src="assets/images/blog/author-1-1.jpg" alt="" />
                </div>
                <div className="author-one__content">
                  <h3 className="author-one__title">Christine Eve</h3>
                  <p className="author-one__text">
                    Lorem ipsum is simply free text by copytyping refreshing.
                    Neque porro est qui dolorem ipsum quia quaed veritatis et
                    quasi architecto.
                  </p>
                </div>
              </div>
              <div className="comments-one">
                <h3 className="comments-one__title">2 Comments</h3>
                <div className="comments-one__item">
                  <div className="comments-one__item__image">
                    <img loading="lazy" decoding="async" src="assets/images/blog/comment-1-1.png" alt="" />
                  </div>
                  <div className="comments-one__item__content">
                    <h3 className="comments-one__item__title">Kevin Martin</h3>

                    <p className="comments-one__item__text">
                      It has survived not only five centuries, but also the leap
                      into electronic typesetting simply fee text aunchanged. It
                      was popularised in the sheets containing lorem ipsum is
                      simply free text.
                    </p>

                    <a href="/blog" className="thm-btn comments-one__item__btn">
                      <span>Reply</span>
                    </a>
                  </div>
                </div>
                <div className="comments-one__item">
                  <div className="comments-one__item__image">
                    <img loading="lazy" decoding="async" src="assets/images/blog/comment-1-2.png" alt="" />
                  </div>
                  <div className="comments-one__item__content">
                    <h3 className="comments-one__item__title">Sarah Albert</h3>

                    <p className="comments-one__item__text">
                      It has survived not only five centuries, but also the leap
                      into electronic typesetting simply fee the text
                      aunchanged. It was popularised in the sheets containing
                      lorem ipsum is simply free text.
                    </p>
                    <a href="/blog" className="thm-btn comments-one__item__btn">
                      <span>Reply</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="comment-form">
                <h3 className="comment-form__title">Leave a Comment</h3>
                <form
                  action="assets/inc/sendemail.php"
                  className="contact-one__form contact-form-validated comment-form__form"
                >
                  <div className="row ">
                    <div className="col-lg-6 col-md-12">
                      <input type="text" placeholder="Your name" name="name" />
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <input
                        type="email"
                        placeholder="Email address"
                        name="email"
                      />
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <textarea name="message" placeholder="Write message" />
                    </div>
                    <div className="col-md-12">
                      <button
                        className="thm-btn contact-one__btn"
                        type="submit"
                      >
                        <span>Submit comment</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="sidebar">
                <div className="sidebar__item sidebar__item--search">
                  <form action="#" className="sidebar__search">
                    <label htmlFor="search" className="sr-only">
                      search here
                    </label>
                    <input type="text" placeholder="Search Here" />
                    <button
                      type="submit"
                      aria-label="search submit"
                      className="thm-btn"
                    >
                      <span>
                        <i className="icon-magnifying-glass"></i>
                      </span>
                    </button>
                  </form>
                </div>
                <div className="sidebar__item sidebar__item--posts">
                  <h3 className="sidebar__title">Latest Posts</h3>
                  <ul className="sidebar__posts">
                    <li>
                      <div className="sidebar__posts__image">
                        <img loading="lazy" decoding="async" src="assets/images/blog/blog-s-1-1.png" alt="" />
                      </div>
                      <div className="sidebar__posts__content">
                        <div className="sidebar__posts__date">
                          <i className="fa fa-comments"></i>2 Comments
                        </div>
                        <h3 className="sidebar__posts__title">
                          <a href="blog-details.html">
                            Tech experiences that connect us
                          </a>
                        </h3>
                      </div>
                    </li>
                    <li>
                      <div className="sidebar__posts__image">
                        <img loading="lazy" decoding="async" src="assets/images/blog/blog-s-1-2.png" alt="" />
                      </div>
                      <div className="sidebar__posts__content">
                        <div className="sidebar__posts__date">
                          <i className="fa fa-comments"></i>2 Comments
                        </div>
                        <h3 className="sidebar__posts__title">
                          <a href="blog-details.html">
                            Tech experiences that connect us
                          </a>
                        </h3>
                      </div>
                    </li>
                    <li>
                      <div className="sidebar__posts__image">
                        <img loading="lazy" decoding="async" src="assets/images/blog/blog-s-1-3.png" alt="" />
                      </div>
                      <div className="sidebar__posts__content">
                        <div className="sidebar__posts__date">
                          <i className="fa fa-comments"></i>2 Comments
                        </div>
                        <h3 className="sidebar__posts__title">
                          <a href="blog-details.html">
                            Tech experiences that connect us
                          </a>
                        </h3>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="sidebar__item sidebar__item--category">
                  <h3 className="sidebar__title">Categories</h3>
                  <ul className="sidebar__category">
                    <li>
                      <a href="/blog">Web Development</a>
                    </li>
                    <li>
                      <a href="/blog">Digital Marketing</a>
                    </li>
                    <li>
                      <a href="/blog">Technology</a>
                    </li>
                    <li>
                      <a href="/blog">Data Analysis</a>
                    </li>
                    <li>
                      <a href="/blog">Cyber Security</a>
                    </li>
                  </ul>
                </div>
                <div className="sidebar__item sidebar__item--tags">
                  <h3 className="sidebar__title">Tags</h3>
                  <div className="sidebar__tags">
                    <a href="/blog">Development</a>
                    <a href="/blog">Designing</a>
                    <a href="/blog">Business</a>
                    <a href="/blog">Marketing</a>
                    <a href="/blog">technology</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
    </div>
  );
}

export default BlogDetails;

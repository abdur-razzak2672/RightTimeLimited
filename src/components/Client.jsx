import React from "react";

function Client() {
  return (
    <div>
      <section
        className="section-padding--bottom section-padding--top testimonials-two background-repeat-no background-position-top-center"
        style={{
          backgroundImage: `url('assets/images/background/testi-bg-1-1.png')`,
        }}
      >
        <div className="container">
          <div className="row gutter-y-60">
            <div className="col-lg-5">
              <div className="testimonials-two__content">
                <div className="section-title ">
                  <p className="section-title__text">Our clients</p>
                  <h2 className="section-title__title">
                    We Are Trusted Worldwide Peoples
                  </h2>
                </div>
                <div className="testimonials-two__content__text">
                  Sed ut perspiciatis unde omnis natus error sit voluptatem
                  accusa ntium doloremque laudantium totam rem aperiamea queipsa
                  quae abillo inventore veritatis et quasi architecto beatae
                  vitae dicta sunt explicabo.
                </div>
                <div className="testimonials-two__content__text">
                  Pellentesque gravida lectus vitae nisi luctus, Finibus aliquet
                  ligula ultrices.
                </div>
                <a
                  href="about.html"
                  className="thm-btn testimonials-two__content__btn"
                >
                  <span>View All feedbacks</span>
                </a>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="testimonials-two__items">
                <div className="row gutter-y-30">
                  <div className="col-lg-12">
                    <div className="testimonials-one-card">
                      <div className="testimonials-one-card__image">
                        <img
                          src="assets/images/resources/testi-1-1.jpg"
                          alt=""
                        />
                      </div>
                      <div className="testimonials-one-card__content">
                        <div className="testimonials-one-card__text">
                          On the other hand denounc with ghteo indignation and
                          dislike men who so beguiled and demoralized the charms
                          of pleasure
                          <h3 className="testimonials-one-card__title">
                            Michal Rahul
                          </h3>
                          <p className="testimonials-one-card__designation">
                            Ul - UX Designer
                          </p>
                          <i className="icon-right-quote testimonials-one-card__icon"></i>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 mt-5 pt-5">
                      <div className="testimonials-one-card">
                        <div className="testimonials-one-card__image">
                          <img
                            src="assets/images/resources/testi-1-2.jpg"
                            alt=""
                          />
                        </div>
                        <div className="testimonials-one-card__content">
                          <div className="testimonials-one-card__text">
                            On the other hand denounc with ghteo indignation and
                            dislike men who so beguiled and demoralized the
                            charms of pleasure the momen blinded by desire
                            cannot foresee the pain and trouble.
                          </div>
                          <h3 className="testimonials-one-card__title">
                            Jessica Brown
                          </h3>
                          <p className="testimonials-one-card__designation">
                            Ul - UX Designer
                          </p>
                          <i className="icon-right-quote testimonials-one-card__icon"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Client;

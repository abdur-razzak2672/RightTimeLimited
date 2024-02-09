import React from 'react'
import Allpage from '../../components/all-page/Allpage'
import Slider from 'react-slick'

function ResourchBody() {

  return (
    <div>
      <div className="page-header">
        <div
          className="page-header__bg"
          style={{ backgroundImage: `url('../images/resources/aboutbg1.png')` }}
        ></div>
        <div className="container">
          <ul className="thm-breadcrumb list-unstyled">
            <li>
              <a href="/">Home</a>
            </li>
            <li>Resources </li>
          </ul>
          <h2 className="page-header__title">Resources </h2>
        </div>

      </div>
      <div class="resource-body">
        <div class="complex-content-block py-section text-center">
          <section class="grid-container max-width-medium textJustify">
            <h2 class="header-2 text-center">Compliance is Confusing.</h2>
            <div class="body-large">
              <h3 class="resourceH3">Learn how to meet your challenging security and compliance goals with our empowering resources.</h3>
              <p class="resourceP">Our blogs, videos, webinars, and other resources are designed to educate, inspire, and empower organizations to greater levels of assurance with expert advice, training, and guidance to elevate your security and compliance efforts.</p>
              <p class="resourceP">Our security and compliance training resources cover auditing basics; PCI DSS, HIPAA, HITRUST, SOC 1, and SOC 2 compliance; general information security topics; cloud security; risk assessment; vendor compliance; and more.</p>
            </div>
          </section>
        </div>
        <section class="article-grid py-section custom-background">
          <div class="grid-container">
            <header class="max-width-large mx-auto mb-10">
              <div class="text-center">
                <h2 class="header-2 flaired-content">
                  <span class="flaired blue left"></span>
                  <span class="flaired-content custom-color">Featured</span>
                </h2>
              </div>
            </header>
            <div class="grid-x medium-up-2 grid-margin-x on-small-scroll on-small-peak-from-right">
              <div class="cell mb-10 mx-5">
                <a href="#" class="article-card custom-card">
                  <div class="image-cover">
                    <img decoding="async" width="100" height="100" src="https://kirkpatrickprice.com/wp-content/uploads/2022/12/0062-BlogPhotoOrange-750x392.jpg" class="attachment-medium size-medium wp-post-image" alt="" srcset="https://kirkpatrickprice.com/wp-content/uploads/2022/12/0062-BlogPhotoOrange-750x392.jpg 750w, https://kirkpatrickprice.com/wp-content/uploads/2022/12/0062-BlogPhotoOrange-1154x603.jpg 1154w, https://kirkpatrickprice.com/wp-content/uploads/2022/12/0062-BlogPhotoOrange.jpg 1200w" sizes="(max-width: 750px) 100vw, 750px" />
                  </div>
                  <div class="pt-5 textJustify">
                    <h5 class="text-black">10 Critical Things To Consider When Choosing a Compliance Platform</h5>
                    <p class="text-black">Feb 23, 2023</p>
                    <div class="read-more">
                      <span>Read More</span>
                      <span class="arrow_right_blue">
                        <img src="/assets/images/resources/arrow.png" alt="arrow-right-blue" class="arrow-right-blue" />
                      </span>
                    </div>
                  </div>
                </a>
              </div>
              <div class="cell mb-10">
                <a href="#" class="article-card custom-card">
                  <div class="image-cover textJustify">
                    <img decoding="async" width="750" height="392" src="https://kirkpatrickprice.com/wp-content/uploads/2022/12/0051-BlogPhotoBlueOrange-750x392.jpg" class="attachment-medium size-medium wp-post-image" alt="" srcset="https://kirkpatrickprice.com/wp-content/uploads/2022/12/0051-BlogPhotoBlueOrange-750x392.jpg 750w, https://kirkpatrickprice.com/wp-content/uploads/2022/12/0051-BlogPhotoBlueOrange-1154x603.jpg 1154w, https://kirkpatrickprice.com/wp-content/uploads/2022/12/0051-BlogPhotoBlueOrange.jpg 1200w" sizes="(max-width: 750px) 100vw, 750px" />
                  </div>
                  <div class="pt-5">
                    <h5 class="text-black">Audits Are Hard.</h5>
                    <p class="text-black">Feb 16, 2023</p>
                    <div class="read-more">
                      <span>Read More</span>
                      <span class="arrow_right_blue">
                        <img src="/assets/images/resources/arrow.png" alt="arrow-right-blue" class="arrow-right-blue" />
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section class="content-card-carousel py-section">
          <div class="grid-container">
            <div class="grid-x grid-margin-x">
              <section class="cell medium-4">
                <h3 class="av-special-heading-tag ">Webinar Recaps</h3>
                <p>KirkpatrickPrice experts dive deep into industry best practices and auditing topics.&nbsp; Watch the recaps to strengthen your security and compliance programs.</p>
                <div class="text-left">

                  <a href="#">
                    <button class="button viewButton" >
                      View All
                    </button>
                  </a>
                </div>
                <section class="cell medium-8">
                <Slider>
                  <div>
                    <img src="/assets/images/resources/webinar1.png" alt="webinar1" />
                  </div>
                  <div>
                    <img src="/assets/images/resources/webinar2.png" alt="webinar2" />
                  </div>
                  <div>
                    <img src="/assets/images/resources/webinar3.png" alt="webinar3" />
                  </div>
                  <div>
                    <img src="/assets/images/resources/webinar4.png" alt="webinar4" />
                  </div>
                  </Slider>
                  </section>
              </section>
              
             
            </div>
          </div>
        </section>

      </div>

      <br /><br /><br /><br /><br /> </div>
  )
}

export default ResourchBody
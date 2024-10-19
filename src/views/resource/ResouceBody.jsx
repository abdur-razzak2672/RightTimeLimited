import React from 'react'
 import Slider from 'react-slick'
 import { resoursesData } from './ResourcesData';

function ResourchBody() {
  var settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
 

    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 817,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
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

        <section class="article-grid py-section custom-background">
          <div class="grid-container">
            <header class="max-width-large mx-auto mb-10">
              <div>
                <h2 class="header-2 flaired-content text-center">
                  <span class="flaired blue left"></span>
                  <span class="flaired-content custom-color">Featured</span>
                </h2>
                <p>“Right Time Limited (RightTime) Resources provides a diverse range of content, including blogs, case
studies, checklists, white papers, infographics, data sheets, and webinars. These resources serve as
valuable references, offering practical insights, expert guidance, and educational materials to help
organizations enhance their security posture, stay informed about the latest industry trends, and make
informed decisions regarding their cybersecurity and IT management strategies.</p>
              </div>
            </header>
            <div class="grid-x medium-up-2 grid-margin-x on-small-scroll on-small-peak-from-right">
              <div class="cell mb-10 mx-5">
                <a href="#" class="article-card custom-card">
                  <div class="image-cover">
                    <img decoding="async" width="100" height="100" src="https://kirkpatrickprice.com/wp-content/uploads/2022/12/0062-BlogPhotoOrange-750x392.jpg" class="attachment-medium size-medium wp-post-image" alt="" srcset="https://kirkpatrickprice.com/wp-content/uploads/2022/12/0062-BlogPhotoOrange-750x392.jpg 750w, https://kirkpatrickprice.com/wp-content/uploads/2022/12/0062-BlogPhotoOrange-1154x603.jpg 1154w, https://kirkpatrickprice.com/wp-content/uploads/2022/12/0062-BlogPhotoOrange.jpg 1200w" sizes="(max-width: 750px) 100vw, 750px" />
                  </div>
                  <div class="pt-2 textJustify">
                    <h5 className='textJustify pt-2' style={{ fontSize: "20px", fontWeight: "700" }}  >10 Critical Things To Consider When Choosing a Compliance Platform</h5>
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
                  <div class="pt-2">
                    <h5 className='textJustify pt-2' style={{ fontSize: "20px", fontWeight: "700" }}  >Audits Are Hard.</h5>
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



        <div className=' mx-5 '>

          {
            resoursesData.map((data, index) => (
              <div key={index} className='row mt-5'>
              <div className='col-md-4 mt-5'>
                <h3 class="av-special-heading-tag ">{data?.title}</h3>
                <p className='textJustify'> {data?.description}</p>
                <div class="text-left">
                  <a href={data?.link}>
                    <button class="button viewButton" >
                      View All
                    </button>
                  </a>
                </div>
  
              </div>
              <div className='col-md-8 mt-5'>
                <Slider {...settings}>
                  {
                    data?.resourcesContent.map((resource, index) => (
                      <div>
                      <img style={{ width: "260px" }} src= {resource?.image} alt="webinar1" />
                      <div style={{ width: "260px" }}>
                        <h5 className='textJustify pt-2' style={{ fontSize: "16px", fontWeight: "700" }}  > {resource?.title}</h5>
                        <p class="text-black"> {resource?.date}</p>
                        <a target='_blank' href="https://www.youtube.com/watch?v=D4fYyu305jg">
                        <div class="read-more d-flex">
                          <span>Watch Video</span>
                          <span class="  mx-2">
                            <i class="fa-solid fa-arrow-right"></i> </span>
                        </div> 
                        </a>
                      </div>
                    </div>

                    ))
                  }
                  
                </Slider>
  
              </div>
  
            </div>
  
            ))
               
          }




          




        </div>



        <p className='mt-5'></p>
        <div class="complex-content-block py-section text-center pt-5 mt-5">
          <section class="grid-container max-width-medium textJustify">
            <h1 class="header-2 text-center">Ready to Start Your Audit?</h1>
            <a className='d-flex justify-content-center mt-5' href='/contact-us'>
              <button style={{ backgroundColor: "#fc8f76" }} class="button  p-2 text-light" >Connect with an Expert</button>

            </a>
          </section>
        </div>

      </div>

      <br /><br /><br /><br /><br /> </div>
  )
}

export default ResourchBody
import React from 'react'

function ContactUs() {
  return (
    <div>
       <div class="page-header">
        <div class="page-header__bg"
             style={{backgroundImage: `url('/assets/images/resources/contact.png')` }}></div>
         <div class="container">
         <ul class="thm-breadcrumb list-unstyled">
                <li><a href="index.html">Home</a></li>
                <li>Contact</li>
            </ul>
            <h2 class="page-header__title">Contact</h2>
        </div>
    </div>  
    <section class="contact-one section-padding--top section-padding--bottom">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <form action="" class="contact-one__form contact-form-validated">
                        <div class="section-title">
                            <p class="section-title__text">Contact with us</p> 
                            <h2 class="section-title__title">Join Us To Get IT 
                                Consultations</h2> 
                        </div> 
                        <div class="row ">
                            <div class="col-lg-6 col-md-12">
                                <input type="text" placeholder="Your name" name="name"/>
                            </div>
                            <div class="col-lg-6 col-md-12">
                                <input type="email" placeholder="Email address" name="email"/>
                            </div> 
                            <div class="col-lg-12 col-md-12">
                                <textarea name="message" placeholder="Write message"></textarea>
                            </div> 
                            <div class="col-md-12">
                                <button class="thm-btn contact-one__btn" type="submit"><span>send a
											message</span></button>
                            </div> 
                        </div> 
                    </form> 
                    <div class="result"></div> 
                </div> 
                <div class="col-lg-4">
                    <div class="contact-one__info wow fadeInRight" data-wow-duration="1500ms"
                         style={{backgroundImage: `url(assets/images/background/')` }}>
                        <div class="contact-one__item">
                            <h3 class="contact-one__item__title">Address</h3> 
                            <p class="contact-one__item__text">Level: 06 & 14 (west), BDBL Bhaban,<br/> 12 Karwan Bazar, Tejgaon. 
Dhaka - 1215, Bangladesh <br/> </p> 
                        </div> 
                        <div class="contact-one__item">
                            <h3 class="contact-one__item__title">Phone</h3> 
                            <p class="contact-one__item__text">Local: <a href="tel:+88 02550 12235">+88 02550 12235</a><br/>
                                Mobile: <a href="tel:+88 01318 013300">+88 01318 013300</a></p>
                          
                        </div> 
                        <div class="contact-one__item">
                            <h3 class="contact-one__item__title">Email</h3> 
                            <p class="contact-one__item__text">
                                    <a href="mailto:info@righttime.biz">info@righttime.biz</a></p>
                     
                        </div> 
                        <div class="contact-one__item">
                            <ul class="contact-one__social">
                                <li><a href="/"><i class="fab fa-twitter"></i></a></li>
                                <li><a href="https://www.facebook.com/RightTimeLimited/"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href="/"><i class="fab fa-pinterest-p"></i></a></li>
                                <li><a href="/"><i class="fab fa-instagram"></i></a></li>
                            </ul> 
                        </div> 
                    </div> 
                </div> 
            </div> 
        </div> 
    </section>
    <section class="google-map google-map--contact">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd"
            class="google-map__one" allowfullscreen></iframe>

    </section>
 
    <br/>
    <br/>
    <br/>
    <br/>
      
    </div>
  )
}

export default ContactUs

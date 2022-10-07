import React from 'react'
import IndustriesNav from './IndustriesNav'
function PaymentCard() {
  return (
    <div>
    <div className="page-header">
        <div className="page-header__bg"
             style={{backgroundImage: `url('assets/images/background/bank.png')`}}></div>
    
        <div className="container">
            <ul className="thm-breadcrumb list-unstyled">
                <li><a href="/">Home</a></li>
                <li>Payment Card Industry</li>
            </ul>
            <h2 className="page-header__title">Payment Card Industry</h2>
        </div>
    </div>

    <section className="section-padding--bottom section-padding--top">
        <div className="container">
            <div className="row">
                <div className="col-lg-8">


                    <h3 className="blog-card-one__title blog-details__title" style={{color:"orange"}} >Payment Card Industries</h3>
                    <div className="blog-details__content">
                        <p>Online payment is getting more and more common as enterprises utilize an online payment system, which brings convenience to the public and to the online consumer market.
                        By providing secure online payment to customers, enterprises have to implement security controls in order to protect cardholder and payment information.
                        If payment information is leaked, it can create a huge losses for the cardholder as well as the organization’s reputation, brand, and image.
                        Right Time can help by providing a PCI data-security audit to ensure that your organization’s payment system is secure thus garnering trust from customers with their sensitive payment card information.</p>
                    </div>


                </div>
                <div className="col-lg-4">
                    <div className="sidebar">
                        <div className="sidebar__item sidebar__item--category">
                            <IndustriesNav/>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </section><br/><br/><br/>

      
    </div>
  )
}

export default PaymentCard

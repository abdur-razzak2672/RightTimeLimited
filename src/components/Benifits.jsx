import React from 'react'

function Benifits() {
  return (
    <section className="section-padding--bottom">
    <div className=" mx-5">
      <div className="section-title text-center">
        <p className="section-title__text">Company Benefits</p>
        <h2 className="header">
        Why You Should Choose Our Services
        </h2>
        <p className='text-dark'>
        Choose Right Time Limited for unparalleled cybersecurity expertise and tailored solutions to safeguard your digital assets effectively.
                </p>
      </div>
      <div className="row gutter-y-30">
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="service-card-two gray-bg">
            <h3 className="service-card-two__title">
              <a href="services-1.html">Quality Service</a>
            </h3>

            <p style={{height:"230px"}}  className="service-card-two__text text-dark">
            we prioritize proactive measures, customized solutions, quick response times, compliance, and reputation to ensure your business stays protected from cyber threats.                </p>
            <div className="service-card-two__icon">
              <i className="icon-smart-tv"></i>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="service-card-two gray-bg">
            <h3 className="service-card-two__title">
              <a href="team.html">Expert Team</a>
            </h3>

            <p style={{height:"230px"}} className="service-card-two__text text-dark">
            Our expert team brings experience, knowledge, up-to-date information, advanced technology, and tools, and the ability to provide customized solutions, ultimately ensuring our clients' security and peace of mind.
            </p>
            <div className="service-card-two__icon">
              <i className="icon-link"></i>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="service-card-two gray-bg">
            <h3 className="service-card-two__title">
              <a href="contact.html">Excellent Support</a>
            </h3>

            <p style={{height:"230px"}} className="service-card-two__text text-dark">
            It ensures timely assistance, expert guidance, responsive communication, flexibility, and continuous improvement, ultimately providing our clients with the peace of mind they need to focus on their business.                </p>
            <div className="service-card-two__icon">
              <i className="icon-technical-support"></i>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="service-card-two gray-bg">
            <h3 className="service-card-two__title">
              <a href="about.html">Sound Management</a>
            </h3>

            <p style={{height:"230px"}} className="service-card-two__text text-dark">
            with sound management, we can deliver high-quality security services to our clients, ensuring their satisfaction and building long-term partnerships based on trust and mutual success.                </p>
            <div className="service-card-two__icon">
              <i className="icon-cctv"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  )
}

export default Benifits
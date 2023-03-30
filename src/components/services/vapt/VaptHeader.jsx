import React from 'react'

function VaptHeader() {
  return (
    <div>
        <div className="page-header" style={{ minWidth: "100%" }}>
        <div
          className="slider-one__bg"
          style={{ backgroundImage: `url('assets/images/background/1.png')` }}
        ></div>

        <div className="container">
          <h1 className="page-header-v">
            Vulnerability Assessment & Penetration Testing Services
          </h1>
          <h3 className="page-header-t">
            Our team will attempt to hack your system using the same techniques
            used by black-hat hackers and give you a detailed report of all the
            weaknesses they find.
          </h3>
        </div>
      </div>
      <div className=" text-center service-topbar">
        <div className="container d-flex justify-content-between">
          <div style={{ color: "white" }} className="">
            <a className="text-light" href="#offer">
              What We Offer
            </a>
          </div>
          <div className="">
            <a className="text-light" href="#faq">
              FAQ
            </a>
          </div>
          <div className="">
            <a className="text-light" href="#resourse">
              Resource
            </a>
          </div>
        </div>
      </div>

      <section id="header" className=" pt-5 ">
        <div className="container">
          <div className="section-title">
            <p className="text-dark">
            Our consultancy team are industry leaders with decades of experience in the cyber security space. With their diverse experience and expertise in this ever-changing field, the Cyber Security Team can help your organization: manage & understand the risks it faces; secure its data and infrastructure; ensure compliance; and secure its products. Working in a true partnership we collaborate to identify and address your Cyber Security needs that not only meet the challenges you face now but capitalize on the many business and operational benefits that improved security will deliver.

            </p>
            <div className="row">
              <div className="col-md-7">
                <p className="text-dark">
                We have first-hand experience at working with Security Tester providers who charge high-rates for their services only to provide a re-branded vulnerability scan report, often only telling you things you already know and/or a range of false positives that you then need to verify. Further, and especially when it comes to application security testing, we are painfully aware of the number of Security Testers who do not understand how applications are designed or built, leading to less thorough application security tests.
                </p>

                <p className="text-dark">
                At Right Time Limited we take great pride in our high-quality Security Testing, security assessment, and vulnerability scanning services. Our testers are experts in their respective fields, in particular, our application security testers have a deep understanding of software engineering and architecture, prior to becoming security experts. Indeed, they have typically been involved in the architecture and development of enterprise class systems, including application-layer security systems as well.
                  well.
                </p>
              </div>
              <div className="col-md-5">
                <img
                  className="w-100"
                  src="/assets/images/services/vapt.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div>
          <img src="assets/images/services/ani.png" width="100%" alt="" />
        </div>
      </div>
    </div>
  )
}

export default VaptHeader
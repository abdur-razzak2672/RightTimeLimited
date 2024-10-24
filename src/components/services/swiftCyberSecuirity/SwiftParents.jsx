/* eslint-disable no-undef */
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { SwiftOfferData } from "./OfferCard";
import SwitchingPage from "./SwitchingPage";
import Slider from 'react-slick'
import AssesmentChangingPageButton from "./AssesmentChangingPageButton";
import Information from "../../Information";
import Service from "../../Service";
import SwitchingPage1 from "./SwitchingPage1";
function SwiftParent() {

  var settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
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
    <div style={{ marginBottom: '200px' }}>

<div className="page-header">
        <div
          className="page-header__bg"
          style={{ backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1kZHpIMn9pvL8k4VdTKw3stcPrZjCHXISPotFeIrFVPtAx_WL046IHbd4lVPSt-iM_DQ&usqp=CAU')` }}
        ></div>
        <div className="container">
          <ul className="thm-breadcrumb list-unstyled">
            <li>
              <a href="/">Home</a>
            </li>
            <li>Swift</li>
          </ul>
          <h2 className="page-header__title">Swift Cyber Security Consulting</h2>
          
        </div>

      </div>

      {/* HEADER START */}
      {/* <section style={{ height: "1200px", width: "100%", }} className="swift-header-container">
        <div className="dipt-bg-image-container" style={{ backgroundImage: `url('/assets/images/services/SwiftCyber/bg-header.jpg')`, height: "100%", width: "100%", backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="dipt-container-holder">
            <h3 className="dipt-big-title">SWIFT CSP ASSESSMENT</h3>
            <p className="dipt-paragraph">CUSTOMER SECURITY PROGRAM INDEPENDENT ASSSESSMENT PROVIDER</p>
            <a className="dipt-contact-btn" href="/contact-us">Contact Us</a>
          </div>
          <div></div>
        </div>
      </section> */}
      {/* HEADER END */}


      {/* SWIFT CUSTOMER SECURITY PROGRAM SECTION START */}
      <section className="dipt-csp-container">
        <div className="dipt-csp-security">

          <h3 className="dipt-csp-security-title">SWIFT Customer Security Program (CSP)</h3>
          <p className="dipt-csp-security-paragraph text-justify mt-3">Launched in 2016, the Swift Customer Security Programme (CSP) aims to enhance cyber-security across its network, mitigating the risk of cyber-attacks and minimizing the impact of fraudulent transactions. Through continuous evolution to address the increasing sophistication of cyber threats, the CSP mandates a set of security controls for Swift users to implement, ensuring a secure financial ecosystem. These controls, part of the Customer Security Controls Framework (CSCF), include both mandatory and advisory measures, informed by industry standards and feedback, to protect against and respond to cyber threats effectively. <br />
            Swift’s CSP encourages industry-wide collaboration, requiring users to annually attest to their compliance with these security controls through the KYC Security Attestation application. This process promotes transparency and peer-driven security enhancements across the network. With the dynamic nature of cyber threats, Swift continuously updates the CSCF, advising users to consult the latest version for current security practices, thereby supporting the ongoing effort to fortify the financial sector’s defenses against cyber risks.</p>
        </div>
      </section>
      {/* SWIFT CUSTOMER SECURITY PROGRAM SECTION END */}


      {/* SWIFT CSP MAIN BUILDING BLOCKS SECTION START */}
      <section className="csp-building-blocks-container">
        <div className="dipt-building-blocks-header-conatainer">
          <h3 className="dipt-building-blocks-title">SWIFT CSP MAIN BUILDING BLOCKS</h3>
        </div>
        <div className="">
          <SwitchingPage />
        </div>
      </section>
      {/* SWIFT CSP MAIN BUILDING BLOCKS SECTION END */}


      {/* SWIFT CUSTOMER SECURITY FRAMEWORK SECTION START*/}
      <section className="dipt-customer-security-framework-section-container">
        <div className="dipt-csp-security">

          <h3 className="dipt-customer-security-framework-title">SWIFT CUSTOMER SECURITY FRAMEWORK</h3>

          <div className="">
            <p className=" text-justify">The security controls are based on three overarching framework objectives, supported by seven security principles. Objectives are the highest level structure for security within the user’s environment. The associated principles elaborate on the highest priority focus areas within each objective.<br />
              Swift’s CSP encourages industry-wide collaboration, requiring users to annually attest to their compliance with these security controls through the KYC Security Attestation application. This process promotes transparency and peer-driven security enhancements across the network. With the dynamic nature of cyber threats, Swift continuously updates the CSCF, advising users to consult the latest version for current security practices, thereby supporting the ongoing effort to fortify the financial sector’s defenses against cyber risks.</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mt-5 pt-5">
            <h2>Evolution of the Swift CSP since 2016
            </h2>
            <p className="mt-3 text-justify">In an era where digitalisation has transformed the way financial institutions work, the security of financial data and transactions is more important than ever. </p>
            <p className="mt-1 text-justify">Following a number of security breaches at financial institutions, Swift became concerned about the security of its users. Swift decided to create a set of security controls and required all its users to attest their level of compliance with these controls transparently. The CSP is continually updated to address new threats and weaknesses in the ever-changing cybersecurity landscape. </p>

          </div>


          <div className="col-md-6">
            <img style={{ width: "90%" }} src="/assets/images/services/SwiftCyber/customer.png" alt="" />
          </div>

        </div>

        <div className="row mt-5">
          <div className="">
            <h3 className="dipt-customer-security-framework-title 5mt-">Architecture Types and Applicable Controls</h3>

          </div>

          <div className="architecture-graph mt-5" >

            <div>
              <img className="data-graph-img" src="/assets/images/services/SwiftCyber/graph.png" alt="" />
            </div>

          </div>
        </div>
      </section>
      {/* SWIFT CUSTOMER SECURITY FRAMEWORK SECTION END*/}


      <section className="csp-building-blocks-container">
        <div className="dipt-building-blocks-header-conatainer">
        </div>
        <div className="">
          <SwitchingPage1 />
        </div>
      </section>
      <Information />
      <Service />

      <div className="mx-5">
        <h3 className="mt-5">Frequently asked questions</h3>
        <div className="mt-3">
          <Accordion className="shadaow w-100">
            <Accordion.Item className="my-3" eventKey="1">
              <Accordion.Header>           Audit or assessment?</Accordion.Header>
              <Accordion.Body>


                A cyber security audit is a review of an organisation’s cyber security policies, procedures and technology, following auditing standards as imposed by the Institute of Internal Auditors, for example. The goal is to ensure compliance with specific regulations and/or internal policies by looking back at a certain period of time and verifying the operating effectiveness of the controls.

                In contrast, a cyber security assessment is a more high-level review of an organisation’s cybersecurity posture to identify potential risks and areas for improvement. As an assessment does not need to follow strict testing and reporting requirements, unlike an audit, the cost is often lower.

                Swift recommends conducting an assessment instead of an audit to reduce the cost and workload for internal staff. All the while ensuring quality of the assessment is maintained and focused on the evaluation and review of security controls, and putting less emphasis on scoping, risk assessments and reporting.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>


          <Accordion className="shadaow w-100">
            <Accordion.Item className="my-3" eventKey="1">
              <Accordion.Header>Can I rely on a previous assessment (“delta assessment”)?</Accordion.Header>
              <Accordion.Body>


                The assessment in 2024 can potentially rely on an assessment performed in 2023, if four conditions are fulfilled for each control:
                <br />
                •     Last year’s assessment was performed against last year’s version of the CSCF (or more recent) <br />


                •     Last year’s assessment was not itself reliant on the year before or on an external assurance report* <br />


                •     The new CSCF version does not materially affect the implementation <br />


                •     The control design and implementation and Swift user environment have not materially changed <br />


                *Note that you can rely on Third Party Assurance reports such as SOC2, ISAE3000, PCI-DSS 4.0 or ISO27K, as long as the scope of the report covers the Swift CSP controls, and the timing of the report is recent enough – the period covered by the report must be no more than 18 months before the attestation is submitted (e.g. an attestation submitted on 24/12/2024 can still rely on a SOC2 Type II report for the period ending 30/06/2023. An example of the assessment to be made for an individual control is shown in the following image (for an attestation against v2023):

                <div className="text-center">
                  <img className="data-graph-img" src="/assets/images/services/SwiftCyber/control.png" alt="" />

                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>


          <Accordion className="shadaow w-100">
            <Accordion.Item className="my-3" eventKey="1">
              <Accordion.Header> What is the deadline for submitting my compliance to Swift?</Accordion.Header>
              <Accordion.Body>


                Users are required to confirm their compliance with the mandatory security controls between 1 July and 31 December of each year (whether fully compliant or not!). New joiners or BICs must complete their attestation before accessing the Swift network.

                <br /> The KYC Security Attestation application (KYC-SA) is used to submit security attestations. Swift releases the new version of the controls each year in early July, and these controls are then attested against between July and December the next year.
                <div className="text-center">
                  <img className="data-graph-img" src="/assets/images/services/SwiftCyber/image.png" alt="" />

                </div>

              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

          <Accordion className="shadaow w-100">
            <Accordion.Item className="my-3" eventKey="1">
              <Accordion.Header>              What happens if I am not compliant with a certain control?
              </Accordion.Header>
              <Accordion.Body>

                We strongly urge all Swift users to implement and ensure compliance with the CSP controls as soon as possible. The CSP controls establish a baseline for security hygiene and should be within the capability of each organisation that processes financial transactions. Failing to implement CSP controls puts the organisation at an increased risk of cyber attacks, which can result in severe financial and operational losses and reputational impacts.
                <br />
                Nevertheless, if you submit a non-compliant attestation, you will not be kicked out of the Swift network. Your non-compliance status will, however, be listed in the KYC-SA directory for your counterparties to see, and Swift will communicate your non-compliance to your financial supervisory authority.
                <br />
                Swift does ask each user to submit an attestation, even if it is non-compliant. Failure to do so is in breach of your contractual obligations according to the Cloud Service Provider (CSP) Policy and Swift Terms and Conditions.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>


          <Accordion className="shadaow w-100">
            <Accordion.Item className="my-3" eventKey="1">
              <Accordion.Header>              What does the scope of CSP cover?
              </Accordion.Header>
              <Accordion.Body>

                The typical scope of CSP is the secure zone, the underlying infrastructure (network security such as firewalls, IPS etc) and the middleware and file transfer servers. The back office and the connection to the Swift network are typically not within the scope of the CSP. Note that the latter will change in the near future as control 2.4A will become mandatory in the coming years.
                <br />
                Each control has its specific in-scope components that are well-defined in the controls framework. Review this together with your assessor to ensure mutual agreement on the scope of the assessment and to better prepare your staff.
                <div className="text-center">
                  <img className="data-graph-img" src="/assets/images/services/SwiftCyber/pic.png" alt="" />

                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>


          <Accordion className="shadaow w-100">
            <Accordion.Item className="my-3" eventKey="1">
              <Accordion.Header>              Most of my Swift infrastructure is outsourced – what are my responsibilities?
              </Accordion.Header>
              <Accordion.Body>

                In this case, you will most likely be an architecture type A4 or B. Depending on the depth of outsourcing, the responsibilities will be split between you and the third party providing your services (the outsourcing agent).
                <br />
                The visual below illustrates typical differences in architecture ranging from managed fully in-house to fully outsourced. In the end, your architecture type determines the CSP control in scope, but all responsibility for the assessment remains with you: you must obtain assurance on the compliance of your third parties.
                <div className="text-center">
                  <img className="data-graph-img" src="/assets/images/services/SwiftCyber/pic2.png" alt="" />

                </div>

              </Accordion.Body>
            </Accordion.Item>
          </Accordion>


          <Accordion className="shadaow w-100">
            <Accordion.Item className="my-3" eventKey="1">
              <Accordion.Header>              What resources and documentation can I consult for more information or support?
              </Accordion.Header>
              <Accordion.Body>

                Swift has a Knowledge Centre that you can use to find relevant articles, frequently asked questions and general information on Swift product and services. Furthermore, via SwiftSmart, Swift also offers e-learning courses specifically on the Swift CSP. Some useful links:
                <br />
                1. Main menu<br />

                2. Swift CSP overview of controls<br />

                3. KYC-SA application
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

        </div>




        <div>
          <h3 className="mt-5">Questions about Swift CSP? Don't hesitate to contact our experts Sam Nelen or Thomas Cornelis

          </h3>



          <section className="section-padding--bottom text-center mt-3 text-center">
            <div className="container">
              <div className="section-title text-center">

              </div>
              <Slider {...settings}>


                <div className="item">
                  <div style={{ background: "#e9e3e0" }} className="card">
                    <a className=" mt-4 rounded-4" href="/profile"><img className='rounded-5' style={{ width: "100%", height: "170px" }} src="/assets/images/team/Mohammad Tohidur Rahman Bhuiyan.jpg" alt="" /></a>
                    <div className="service-card-three__content">
                      <h4 className="pt-3"><a href="/profile"> Mohammad Tohidur Rahman Bhuiyan
                        <br /></a></h4>
                      <p>Lead Security Practitioner and MD & CEO</p>
                      <a href="/profile" className="">View Bio</a>
                    </div>
                  </div>
                </div>

                <div className="item">
                  <div style={{ background: "#e9e3e0" }} className="card">
                    <div className=" mt-4 rounded-4" ><img className='rounded-5' style={{ width: "100%", height: "170px" }} src="/assets/images/team/Rokanuzzaman.jpeg" alt="" /></div>
                    <div className="service-card-three__content">
                      <h4 className="pt-3">Md. Rokanuzzaman
                        <br /></h4>
                      <p>Chief Information Officer (CIO)</p>
                      <div h className="">View Bio</div>
                    </div>
                  </div>
                </div>


              </Slider>


            </div>
          </section>





        </div>



      </div>



    </div>
  )
}


export default SwiftParent;

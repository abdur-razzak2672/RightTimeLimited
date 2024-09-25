/* eslint-disable no-undef */
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { SwiftOfferData } from "./OfferCard";
import SwitchingPage from "./SwitchingPage";
function SwiftParent() {

  return (
    <div style={{ marginBottom: '20000000px' }}>
      {/* HEADER START */}
      <section style={{ height: "90vh", width: "200vh", padding: "80px" }} className="swift-header-container">
        <div className="dipt-bg-image-container" style={{ backgroundImage: `url('/assets/images/services/SwiftCyber/header-image.webp')`, height: "100%", width: "100%", backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="dipt-container-holder">
            <h3 className="dipt-big-title">SWIFT CSP ASSESSMENT</h3>
            <p className="dipt-paragraph">CUSTOMER SECURITY PROGRAM INDEPENDENT ASSSESSMENT PROVIDER</p>
            <a className="dipt-contact-btn" href="/contact-us">Contact Us</a>
          </div>
          <div></div>
        </div>
      </section>
      {/* HEADER END */}


      {/* SWIFT CUSTOMER SECURITY PROGRAM SECTION START */}
      <section className="dipt-csp-container">
        <div className="dipt-csp-security">

          <h3 className="dipt-csp-security-title">SWIFT Customer Security Program (CSP)</h3>

          <p className="dipt-csp-security-paragraph-one">Launched in 2016, the Swift Customer Security Programme (CSP) aims to enhance cyber-security across its network, mitigating the risk of cyber-attacks and minimizing the impact of fraudulent transactions. Through continuous evolution to address the increasing sophistication of cyber threats, the CSP mandates a set of security controls for Swift users to implement, ensuring a secure financial ecosystem. These controls, part of the Customer Security Controls Framework (CSCF), include both mandatory and advisory measures, informed by industry standards and feedback, to protect against and respond to cyber threats effectively.</p> <br />
          <p className="dipt-csp-security-paragraph-two">Swift’s CSP encourages industry-wide collaboration, requiring users to annually attest to their compliance with these security controls through the KYC Security Attestation application. This process promotes transparency and peer-driven security enhancements across the network. With the dynamic nature of cyber threats, Swift continuously updates the CSCF, advising users to consult the latest version for current security practices, thereby supporting the ongoing effort to fortify the financial sector’s defenses against cyber risks.</p> <br />
        </div>
      </section>
      {/* SWIFT CUSTOMER SECURITY PROGRAM SECTION END */}


      {/* SWIFT CSP MAIN BUILDING BLOCKS SECTION START */}
      <section className="csp-building-blocks-container">
        <div className="dipt-building-blocks-header-conatainer">
          <h3 className="dipt-building-blocks-title">SWIFT CSP MAIN BUILDING BLOCKS</h3>
        </div>
        <div className="">
          <SwitchingPage></SwitchingPage>
        </div>
      </section>
      {/* SWIFT CSP MAIN BUILDING BLOCKS SECTION END */}


      {/* SWIFT CUSTOMER SECURITY FRAMEWORK SECTION START*/}
      <section className="dipt-customer-security-framework-section-container">

      </section>
      {/* SWIFT CUSTOMER SECURITY FRAMEWORK SECTION END*/}



    </div>
  )
}


export default SwiftParent;

/* eslint-disable no-undef */
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { SwiftOfferData } from "./OfferCard";
import SwitchingPage from "./SwitchingPage";
import SwiftArchitectureChangingButtons from "../SwiftArchitectureChangingButtons";
import AssesmentChangingPageButton from "./AssesmentChangingPageButton";
function SwiftParent() {

  return (
    <div style={{ marginBottom: '200px' }}>

      {/* HEADER START */}
      <section style={{ height: "1200px", width: "100%", }} className="swift-header-container">
        <div className="dipt-bg-image-container" style={{ backgroundImage: `url('/assets/images/services/SwiftCyber/bg-header.jpg')`, height: "100%", width: "100%", backgroundSize: 'cover', backgroundPosition: 'center' }}>
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

          <div className="csp-security-p-container">
            <p className="dipt-csp-security-paragraph">Launched in 2016, the Swift Customer Security Programme (CSP) aims to enhance cyber-security across its network, mitigating the risk of cyber-attacks and minimizing the impact of fraudulent transactions. Through continuous evolution to address the increasing sophistication of cyber threats, the CSP mandates a set of security controls for Swift users to implement, ensuring a secure financial ecosystem. These controls, part of the Customer Security Controls Framework (CSCF), include both mandatory and advisory measures, informed by industry standards and feedback, to protect against and respond to cyber threats effectively.</p>
            <p className="dipt-csp-security-paragraph">Swift’s CSP encourages industry-wide collaboration, requiring users to annually attest to their compliance with these security controls through the KYC Security Attestation application. This process promotes transparency and peer-driven security enhancements across the network. With the dynamic nature of cyber threats, Swift continuously updates the CSCF, advising users to consult the latest version for current security practices, thereby supporting the ongoing effort to fortify the financial sector’s defenses against cyber risks.</p>
          </div>
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
        <div className="dipt-csp-security">

          <h3 className="dipt-customer-security-framework-title">SWIFT CUSTOMER SECURITY FRAMEWORK</h3>

          <div className="customer-security-framework-p-container">
            <p className="dipt-customer-security-framework-paragraph">The security controls are based on three overarching framework objectives, supported by seven security principles. Objectives are the highest level structure for security within the user’s environment. The associated principles elaborate on the highest priority focus areas within each objective.</p>
            <p className="dipt-customer-security-framework-paragraph">Swift’s CSP encourages industry-wide collaboration, requiring users to annually attest to their compliance with these security controls through the KYC Security Attestation application. This process promotes transparency and peer-driven security enhancements across the network. With the dynamic nature of cyber threats, Swift continuously updates the CSCF, advising users to consult the latest version for current security practices, thereby supporting the ongoing effort to fortify the financial sector’s defenses against cyber risks.</p>
          </div>
        </div>

        <div className="swift-diagram-detail-container">
          <div>

            <img style={{ width: "100%" }} src="/assets/images/services/SwiftCyber/pyramid.png" alt="" />
          </div>
          <div>
            {/* 1 */}
            <div className="dipt-swift-paragraph-items">
              <div className="dipt-swift-diagram-list-numbers">1</div>
              <div>
                <h4 className="dipt-swift-title">Secure Your Environment
                </h4>
                <div>
                  <div className="dipt-swift-order_list-items-container">
                    <div className="dipt-swift-para-details-cont">
                      <div><p className="dipt-swift-inside-para-num">1.</p></div>
                      <div><p className="dipt-swift-inside-para-info">Restrict Internet access & Segregate critical systems from general IT environment</p></div>
                    </div>
                    <div className="dipt-swift-para-details-cont">
                      <div><p className="dipt-swift-inside-para-num">2.</p></div>
                      <div><p className="dipt-swift-inside-para-info">Reduce attack surface and vulnerabilities</p></div>
                    </div>
                    <div className="dipt-swift-para-details-cont">
                      <div><p className="dipt-swift-inside-para-num">3.</p></div>
                      <div><p className="dipt-swift-inside-para-info">Reduce attack surface and vulnerabilities</p></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 2 */}
            <div className="dipt-swift-paragraph-items">
              <div className="dipt-swift-diagram-list-numbers">2</div>
              <div>
                <h4 className="dipt-swift-title">Know and Limit Access</h4>
                <div>
                  <div className="dipt-swift-order_list-items-container">
                    <div className="dipt-swift-para-details-cont">
                      <div><p className="dipt-swift-inside-para-num">4.</p></div>
                      <div><p className="dipt-swift-inside-para-info"> Prevent compromise of credentials</p></div>
                    </div>
                    <div className="dipt-swift-para-details-cont">
                      <div><p className="dipt-swift-inside-para-num">5.</p></div>
                      <div><p className="dipt-swift-inside-para-info"> Manage identities and segregate privileges</p></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 3 */}
            <div className="dipt-swift-paragraph-items">
              <div className="dipt-swift-diagram-list-numbers">3</div>
              <div>
                <h4 className="dipt-swift-title">Detect and Respond</h4>
                <div>
                  <div className="dipt-swift-order_list-items-container">
                    <div className="dipt-swift-para-details-cont">
                      <div><p className="dipt-swift-inside-para-num">6.</p></div>
                      <div><p className="dipt-swift-inside-para-info">Detect anomalous activity to system or transaction record</p></div>
                    </div>
                    <div className="dipt-swift-para-details-cont">
                      <div><p className="dipt-swift-inside-para-num">7.</p></div>
                      <div><p className="dipt-swift-inside-para-info">Plan for incident response and information sharing</p></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* SWIFT CUSTOMER SECURITY FRAMEWORK SECTION END*/}


      {/* SCOPE OF SECURITY CONTROLS SECTION START*/}
      <section className="dipt-security-control-section-container">
        <div className="security-control-header-title">
          <h4 className="dipt-security-control-title">SCOPE OF SECURITY CONTROLS</h4>
          <p className="dipt-security-control-p">The scope of security controls in CSCF encompasses a defined set of components in the user’s environment.</p>
        </div>
        <div className="dipt-security-controls-box-container">
          <div className="dipt-security-control-box">
            <p className="dipt-security-control-order-lists"><span className="dipt-lists-title"> In-Scope Components:</span></p>
            <div className="dipt-security-control-lists-parent">
              <li className="dipt-security-control-lists">User’s SWIFT Infrastructure</li>
              <li className="dipt-security-control-lists">Operators/Operator PCs</li>
              <li className="dipt-security-control-lists">Data Exchange Layer</li>
              <li className="dipt-security-control-lists">Middleware Server</li>
              <li className="dipt-security-control-lists">File Transfer Server</li>
            </div>
            {/* </p> */}
          </div>
          <div className="dipt-security-control-box">
            <p className="dipt-security-control-order-lists"><span className="dipt-lists-title"> Out of Scope Components:</span></p>
            <div className="dipt-security-control-lists-parent">
              <li className="dipt-security-control-lists">User back office</li>
              <li className="dipt-security-control-lists">General Enterprise IT Environment</li>
              <li className="dipt-security-control-lists">Network/Internet Connections</li>
              <li className="dipt-security-control-lists">Test and Development Systems</li>
            </div>
            {/* </p> */}
          </div>
          <div className="dipt-security-control-box">
            <p className="dipt-security-control-order-lists"><span className="dipt-lists-title">Co-hosting Components:</span></p>
            <div className="dipt-security-control-lists-parent">
              <p className="dipt-security-control-lists">Non-SWIFT related systems hosted in the secure zone must be protected to an equivalent level of security and trust by applying controls applicable to the Swift-related components.</p>
            </div>
            {/* </p> */}
          </div>
          <div className="dipt-security-control-box">
            <p className="dipt-security-control-order-lists"><span className="dipt-lists-title">Sharing/Reusing Credentials:</span></p>
            <div className="dipt-security-control-lists-parent">
              <p className="dipt-security-control-lists">Services such as transaction queries, pre-validation, and screening are typically out of scope unless they share credentials and entitlements with business transactions, which then brings those systems into scope.</p>
            </div>
            {/* </p> */}
          </div>
        </div>

        <div className="cscf-image-container">
          <img className="cscf-image" src="/assets/images/services/SwiftCyber/CSCF.png" alt="" />
        </div>
      </section>
      {/* SCOPE OF SECURITY CONTROLS SECTION END*/}



      {/* SWIFT ARCHITECHTURE TYPES SECTION START */}
      <section className="swift-architecture-types-section-container">
        <div className="swift-architecture-types-header-title">
          <h4 className="dipt-swift-architecture-title">SWIFT Architecture Types</h4>
          <p className="dipt-swift-architecture-p">Users must select from five reference architecture types that best reflect their deployment to identify in-scope components, using a CSP decision tree for guidance. The choice of architecture, which should be the most encompassing, affects the applicability of certain security controls. These architectures differ primarily based on the ownership of components or licenses.</p>
        </div>

        <div className="dipt-swift-architecture-buttons-container">
          <SwiftArchitectureChangingButtons></SwiftArchitectureChangingButtons>
        </div>
        <div className="architecture-type-graph-header">
          <h3 className="architecture-type-graph-title">Architecture Types and Applicable Controls</h3>
        </div>

        <div className="architecture-graph" >

          <div>
            <img className="data-graph-img" src="/assets/images/services/SwiftCyber/data-graph.png" alt="" />
          </div>

        </div>

        <div className="dipt-independent-framework-container">
          <h3 className="dipt-independent-framework-title">INDEPENDENT ASSESSMENT FRAMEWORK</h3>
          <p className="dipt-independent-framework-p">Swift mandates the independent assessment of all mandatory controls for attestations, as supported by Swift’s Board and Oversight, to ensure integrity, consistency, and accuracy. Independent assessors must verify that these controls achieve their objectives, cover all in-scope components, and address risk drivers. While implementing advisory controls is advised but optional, they also require independent assessment if included in the attestation. The outcomes, reflecting compliance levels, must be documented annually in the KYC Security Attestation (KYC-SA) application, accompanied by assessment reports and confirmation letters.</p>
        </div>
        <div className="dipt-assesment-types-contaoiner">
          <h3 className="dipt-assesment-types-title">Asessment Types</h3>
          <p className="dipt-assesment-types-p">There are three types of assessment under the CSP</p>
        </div>

        <div className="dipt-assesment-types-box-container">
          <div className="dipt-assesment-types-box">
            <p className="dipt-assesment-types-order-lists"><span className="dipt-assesment-types-header-title"> Self-Assessment:</span></p>
            <div className="dipt-assesment-types-box-lists-parent">
              <p className="dipt-assesment-types-box-title">Self-Assessments, conducted by risk-managing functions without independent review, are labeled as ‘not compliant’ in the KYC Security Attestation (KYC-SA) application. This status is immediately visible to counterparts and flagged in the Know-Your-Customer for Supervisors (KYS) app for supervised users, with bi-annual reports available. Choosing a self-assessment is a strategic decision for Swift users, fully aware of its non-compliance implications.</p>
            </div>
          </div>
          <div className="dipt-assesment-types-box">
            <p className="dipt-assesment-types-order-lists"><span className="dipt-assesment-types-header-title"> Community Standard Assessment:</span></p>
            <div className="dipt-assesment-types-box-lists-parent">
              <p className="dipt-assesment-types-box-title">Swift recognizes two types of independent assessments: External, carried out by an independent organization, and Internal, conducted by the user’s own independent department (e.g., compliance, risk management, internal audit), separate from the attesting first line-of-defense. Assessors, whether internal or external, must have relevant cyber-security control assessment experience and qualifications.</p>
            </div>
          </div>
          <div className="dipt-assesment-types-box">
            <p className="dipt-assesment-types-order-lists"><span className="dipt-assesment-types-header-title">SWIFT-Mandated External Assessment:</span></p>
            <div className="dipt-assesment-types-box-lists-parent">
              <p className="dipt-assesment-types-box-title">Swift may require specific BICs to undergo external assessments to verify their KYC-SA attestations’ accuracy, as stated in the Customer Security Controls Policy (CSCP) under “Quality assurance.” This process involves an independent external assessor confirming the user’s adherence to the applicable controls. Compliance with such mandated external assessments is crucial for maintaining robust security within the Swift network. Failure to complete these assessments constitutes a violation of the CSCP, and Swift may report non-compliance to the appropriate supervisory bodies and/or the non-compliant BICs’ counterparties.</p>
            </div>
          </div>
        </div>
        <div className="choosing-assessment-provider-container">
          <h3 className="choosing-assessment-provider-header-title">Choosing Assessment Provider</h3>
          <p className="choosing-assessment-provider-p">As a proud member of the Swift CSP Certified Assessors Directory, our company is recognized for our expertise and commitment to the Swift Customer Security Programme (CSP). This directory, launched in January 2024, lists providers and assessors who have demonstrated thorough knowledge and understanding of Swift and the CSP, meeting rigorous eligibility criteria including external cybersecurity certifications and successful exam completion. Our inclusion signifies our capability to conduct independent assessments that adhere to Swift’s high standards, ensuring the security and integrity of your transactions within the Swift network. When partnering with us for your Swift-related assessments, you can be confident in our certified expertise to guide you through the process, enhancing your security posture and compliance with Swift CSP requirements.</p>
          <a className="choosing-assessment-provider-link" href="/swift-csp-directiory">SWIFT CSP Assessors Directory | Swift</a>
        </div>
      </section>
      {/* SWIFT ARCHITECHTURE TYPES SECTION END */}


      {/* OUR ASSESMENT PPROCESS SECTOIN START*/}
      <section className="dipt-our-assesment-process-section-container">
        <div>
          <h3 className="dipt-our-assesment-process-header">Our Assessment Process</h3>
        </div>
        <div className="dipt-assesment-process-changing-page-container">
          <AssesmentChangingPageButton></AssesmentChangingPageButton>
        </div>
      </section>
      {/* OUR ASSESMENT PPROCESS SECTOIN END*/}



      {/* Elevate Your Cybersecurity with Swift CSP Assessment Services section start */}
      <section className="cybersecurity-assesment-services-container">
        <div className="cybersecurity-assesment-services-parent">
          <div className="cybersecurity-assesment-services-details-container">
            <h3 className="cybersecurity-assesment-services-title">Elevate Your Cybersecurity with Swift CSP Assessment Services</h3>
            <p className="cybersecurity-assesment-services-p">In today's rapidly evolving cyber landscape, ensuring the security and compliance of your financial transactions is more crucial than ever. As a recognized member of the Swift CSP Certified Assessors Directory, we are your trusted partner in navigating the complexities of the Swift Customer Security Programme (CSP). Our expert team is equipped with the knowledge, experience, and certifications needed to provide comprehensive assessment services that not only meet but exceed Swift's stringent security requirements.</p>
            <button className="cybersecurity-assesment-services-btn">Contact us today</button>
          </div>
          <div className="cybersecurity-assesment-services-img-container">
            <img src="/assets/images/services/SwiftCyber/csp-services.png" alt="" />
          </div>
        </div>
      </section>
      {/* Elevate Your Cybersecurity with Swift CSP Assessment Services section end */}
    </div>
  )
}


export default SwiftParent;

import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { SwiftOfferData } from "./OfferCard";

function SwiftParents({ tab1, tab2, tab3, tab4, title }) {
  const [tabIndex, setTabIndex] = useState(0);
  const [tabIndex1, setTabIndex1] = useState(16);
  const [tabIndex2, setTabIndex2] = useState(tab1);
  const [tabIndex3, setTabIndex3] = useState(tab2);

  const [style, setStyle] = useState("cont2");
  const [style2, setStyle2] = useState("cont");

  const [style3, setStyle3] = useState(tab3);
  const [style4, setStyle4] = useState(tab4);

  return (
    <div>
      <div>
        <div className="page-header">
          <div
            className="page-header__bg"
            style={{
              backgroundImage: `url('https://www.atlantafed.org/-/media/images/gallery/cybersecurity/040-swift-logo/hero.jpg')`,
            }}
          ></div>
          <div className="container">
            <h2 className="page-header__title">{title}</h2>
            <h2 className="page-header__title"></h2>
          </div>
        </div>
        <div className=" text-center service-topbar">
          <div className="container d-flex justify-content-between">
            <div style={{ color: "white" }} className="">
              <a className="text-light" href="#header">
                FAQ
              </a>
            </div>
            <div className="">
              <a className="text-light" href="#benefit">
                Benefit
              </a>
            </div>
            <div className="">
              <a className="text-light" href="#question">
                Ask Question
              </a>
            </div>
          </div>
        </div>
        <section id="header" className="  pt-5 ">
          <div className="container">
            <div className="section-title">
              <p className="text-dark">
                Organizations who are all involved in any kind of Payment
                Transactions through Debit and/or Credit cards either
                physically/electronically or any other channels means open
                themselves up to cybercrime risks. Malicious Attackers often
                target such high confidential and sensitive information
                (CHD/SAD) for direct theft and fraud. If a company is part of
                Payment eco-system as a Merchant, Processers, or providing any
                services to these companies can also fall target for this kind
                of cyberattacks. To mitigate these risks, the Payment card
                Industry Security Standards Council (Swift SSC), USA has
                formulated plentiful controls across several security standards
                to keep companies and consumers protected.
              </p>
              <div className="row">
                <div className="col-md-12">
                  <p className="text-dark">
                    Swift Cyber Security (Payment card Industry Data Security
                    Standard) compliance is one of the strictest and most
                    desired security standards in the industry today. It is a
                    widely accepted global standard recommended by the major
                    Card brands like Visa, Mastercard, American Express, JCB,
                    Discovery. Swift Cyber Security standard is consisting of
                    set of policies and procedures intended to optimize the
                    security of debit, credit and cash card transactions and
                    protect cardholders against misuse of their personal
                    information.
                  </p>

                  <p className="text-dark">
                    Swift Cyber Security applies to all entities involved in
                    payment card transactions —including merchant, acquirer
                    bank, credit card processor, payment card brand (such as
                    Mastercard, VISA, JCB, American Express, Discover, UnionPay,
                    Rupay etc.) debit, credit or ATM cards issuer, financial
                    institution, Independent Sales Organization (ISO), or an
                    agent, and service providers, as well as all other entities
                    that store, process or transmit cardholder data (CHD) and/or
                    sensitive authentication data (SAD).
                  </p>
                </div>
                <div className="col-md-12">
                  <img
                    className="w-100"
                    src="/assets/images/services/swift.png"
                    alt=""
                  />
                </div>
              </div>
              <p className="text-dark">
                Mostly all payment card brands enforcing Swift Cyber Security
                Compliance at minimum annual basis as per the Levels determined
                by the various security programs. Organization needs to
                Implement 12 core functional requirements spread across 6
                Control Objectives (domains) from Swift Cyber Security Standard
                to ensure their Card Holder Data Environment is secured.
              </p>
              <p className="text-dark">
                Service Providers and Merchants can report their Swift Cyber
                Security Compliance either Filling the applicable Onsite
                Assessment or Self-Assessment Questionnaire (SAQ’s) by a
                Qualified Security Assessor as per its Level.
              </p>
            </div>
          </div>
        </section>

        <div className="container">
          <div>
            <img src="assets/images/services/ani.png" width="100%" alt="" />
          </div>
        </div>

        <section id="offer">
          <div className="container">
            <h2 className="header text-center">Our Offer</h2>
            <p className="text-dark mt-4">
              Since 2013, “Right Time Limited” has been operating as an assessor
              accredited by the Swift Security Standards Council (Swift SSC),
              USA in Swift Cyber Security Standards of the Payment Card
              Industry. We are the first Bangladesh Based Swift QSA (Payment
              Card Industry qualified Security Assessor firm. Our Swift experts
              contribute their knowhow to more than 100 companies worldwide by
              providing consulting and assessments.
            </p>
            <p className="text-dark">
              As one of the Special Interest Group (SIG), we also support the
              Swift Security Standards Council with our knowledge from hundreds
              of Swift projects.
            </p>
            <p className="text-dark">
              Service Providers and Merchants can report their Swift Cyber
              Security Compliance either Filling the applicable Onsite
              Assessment or Self-Assessment Questionnaire (SAQ’s) by a Qualified
              Security Assessor as per its Level.
            </p>

            <div className="d-flex justify-content-center    mt-5">
              <Button
                onClick={() => (
                  setTabIndex2(201),
                  setStyle3("cont"),
                  setStyle4("cont2"),
                  setStyle("cont2"),
                  setStyle2("cont"),
                  setTabIndex3(301)
                )}
                className={style4}
              >
                Swift Cyber Security Consulting{" "}
              </Button>
              <Button
                onClick={() => (
                  setTabIndex2(202),
                  setStyle4("cont"),
                  setStyle3("cont2"),
                  setStyle("cont2"),
                  setStyle2("cont"),
                  setTabIndex3(301)
                )}
                className={style3}
              >
                Swift CSP Independent Assessment{" "}
              </Button>
            </div>
            {tabIndex2 === 201 && (
            <div className="d-flex mt-4 justify-content-center  ">
               <h4 className="text-dark">"Coming Soon"</h4>
              </div>
            )}



            {tabIndex2 === 202 && (
               <section>
               <div>
                 <h4 className="header text-center mt-3">Audit Approach</h4>
 
                 <div className="row mt-4  text-center col-xs-6">
             {SwiftOfferData.map((card, index) => (
               <div key={index} className="  col-md-3 col-sm-6 rounded ">
                 <div id="card-container">
                   <div className="text-center rounded" id="card3">
                     <div className="front face text-center pt-3">
                       <img
                        
                         src={card.image}
                         width="30%"
                         alt=""
                       />
                       <h6 className=" mt-3 p-2 text-dark">{card.title}</h6>
                     </div>
                     <div className="back face">
                       <p className="artist mt-4">{card.description}</p>
                     </div>
                   </div>
                 </div>
               </div>
             ))}
           </div>
               </div>
 
               
             </section>
              
            )}

           

            {/* <Row className="mt-4">
               

              <Col md={12}>
                <div>
                  {tabIndex === tabIndex && (
                    <Offer id={tabIndex} data={OfferData} />
                  )}
                </div>
              </Col>
            </Row> */}
          </div>
        </section>

        <section
          id="faq"
          className="section-padding--bottom text-center mt-5 pt-4"
        >
          <div className="container">
            <div className="section-title text-center">
              <h2 className="header">Frequently Asked Questions</h2>
              <div className="expanedItem mt-5 ">
                <div className=" expaneditems1">
                  <Accordion>
                    <Accordion.Item className="my-3" eventKey="1">
                      <Accordion.Header>
                      What Is The SWIFT CSP?
                      </Accordion.Header>
                      <Accordion.Body className="expanedText">
                      SWIFT's customer security programme (CSP) aims to prevent and detect fraudulent activity through a set of mandatory security controls, community-wide information sharing initiatives and enhanced security features on their products.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                  <Accordion className="shadaow">
                    <Accordion.Item className="my-3" eventKey="1">
                      <Accordion.Header>
                      What Form Does The SWIFT Required Independent Assessment Need To Take?                      </Accordion.Header>
                      <Accordion.Body className="expanedText">
                      There are two forms in which a SWIFT customer can gain an independent assessment 
An internal assessment : The internal audit needs to be carried out as per the internal audit function of the customer and independent from the function submitting the attestation.
An external assessment : An external audit can be carried out by QRC, an assessment against the CSP controls.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                  <Accordion className="mt-3">
                    <Accordion.Item className="my-3" eventKey="1">
                      <Accordion.Header>
                      What If You Attest Non-Compliance For SWIFT?
                      </Accordion.Header>
                      <Accordion.Body className="expanedText">
                      SWIFT reports all cases of non-compliance and where members have not verified to local regulators. 
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>

                <div className="expaneditems1 ">
                  <Accordion>
                    <Accordion.Item className="my-3" eventKey="1">
                      <Accordion.Header>
                      When Is The Deadline For SWIFT CSP Compliance?
                      </Accordion.Header>
                      <Accordion.Body className="expanedText">
                            SWIFT CSP requires one to submit a self-attestation on an annual basis by 31 December. An independent assessment is required alongside a customers attestations from 31 December 2020 onwards.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                  <Accordion>
                    <Accordion.Item className="my-3" eventKey="1">
                      <Accordion.Header>
                      What Are The SWIFT CSCF V2020 Controls ?
                      </Accordion.Header>
                      <Accordion.Body className="expanedText">
                      SWIFT’s CSCF V2020 comprises 3 Objectives, 8 Principles & 31 Controls (21 Mandatory & 10 Optional). SWIFT mandatory controls focussed on securing your environment, knowing and limiting access
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>

                  <Accordion>
                    <Accordion.Item className="my-3" eventKey="1">
                      <Accordion.Header>
                      What If I Suspect My Organisation Has Been Targeted Or Breached?
                      </Accordion.Header>
                      <Accordion.Body className="expanedText">
                      In any circumstances, it is necessary to share all relevant information and let SWIFT know there is a problem as soon as possible, in order to protect other organisations in the network.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
              <a className="text-light bg-warning rounded p-2" href="/faq">
                Read More...
              </a>
            </div>
          </div>
        </section>

        <section id="resourse" class=" ">
          <div class="container">
            <div class="  text-center">
              <h2 class="header">Related Updates</h2>
              <div class="col-md-12 text-center mt-4">
                <button
                  type="button"
                  onClick={() => setTabIndex1(14)}
                  class="btn btn-dark m-3"
                >
                  Case Studies
                </button>
                <button
                  type="button"
                  onClick={() => setTabIndex1(15)}
                  class="btn btn-warning m-3"
                >
                  Downloads
                </button>
                <button
                  type="button"
                  onClick={() => setTabIndex1(16)}
                  class="btn btn-success m-3"
                >
                  Blogs
                </button>
              </div>
              <div class="mt-2">
                {tabIndex1 === 16 && (
                  <div class="row mt-5">
                    <div class="col-md-4 text-center d-flex">
                      <Card>
                        <img
                          className=""
                          src="/assets/images/resources/1.jpeg"
                          alt=""
                        />
                        <Card.Body>
                          <Card.Title className="text-dark">
                            Card Title
                          </Card.Title>
                          <Card.Text className="text-dark">
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </Card.Text>
                          <Button variant="warning">Read More</Button>
                        </Card.Body>
                      </Card>
                    </div>
                    <div class="col-md-4 text-center d-flex">
                      <Card>
                        <img
                          className=""
                          src="/assets/images/resources/1.jpeg"
                          alt=""
                        />
                        <Card.Body>
                          <Card.Title className="text-dark">
                            Card Title
                          </Card.Title>
                          <Card.Text className="text-dark">
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </Card.Text>
                          <Button variant="warning">Read More</Button>
                        </Card.Body>
                      </Card>
                    </div>
                    <div class="col-md-4 text-center d-flex">
                      <Card>
                        <img
                          className=""
                          src="/assets/images/resources/1.jpeg"
                          alt=""
                        />
                        <Card.Body>
                          <Card.Title className="text-dark">
                            Card Title
                          </Card.Title>
                          <Card.Text className="text-dark">
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </Card.Text>
                          <Button variant="warning">Read More</Button>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>

                  // <h3>Frequently Asked Questions</h3>
                  // <p>Regular assessments as such help safeguard the application from any unauthorized access which can cause an impact on the organization both in reputation and resources</p>
                )}
                {tabIndex1 === 14 && (
                  <div className="d-flex justify-content-center  ">
                    <Card style={{ width: "300px" }}>
                      <img
                        className=""
                        src="/assets/images/resources/1.jpeg"
                        alt=""
                      />
                      <Card.Body>
                        <Card.Title className="text-dark">
                          Card Title
                        </Card.Title>
                        <Card.Text className="text-dark">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </Card.Text>
                        <Button variant="warning">Read More</Button>
                      </Card.Body>
                    </Card>
                  </div>
                )}
                {tabIndex1 === 15 && (
                  <div>
                    <div className="d-flex justify-content-center  ">
                      <Card style={{ width: "300px" }}>
                        <img
                          className=""
                          src="/assets/images/resources/1.jpeg"
                          alt=""
                        />
                        <Card.Body>
                          <Card.Title className="text-dark">
                            Card Title
                          </Card.Title>
                          <Card.Text className="text-dark">
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </Card.Text>
                          <Button variant="warning">Read More</Button>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}

export default SwiftParents;

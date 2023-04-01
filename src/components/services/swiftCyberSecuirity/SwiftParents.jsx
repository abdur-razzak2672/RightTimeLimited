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



            {tabIndex2 === 202 && (
              <div className="d-flex mt-4 justify-content-center  ">
               <h4 className="text-dark">"Coming Soon"</h4>
              </div>
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
                        Who should comply with Swift Cyber Security
                        Certification?
                      </Accordion.Header>
                      <Accordion.Body className="expanedText">
                        The Swift Cyber Security is an information security
                        standard for organizations that process, transmits, and
                        store credit card details. This would typically include
                        merchants, processors, acquirers, issuers, and service
                        providers dealing with sensitive cardholder data. View a
                        quick 5 mins video on this topic
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                  <Accordion className="shadaow">
                    <Accordion.Item className="my-3" eventKey="1">
                      <Accordion.Header>
                        How much will a Swift Cyber Security Audit cost you?
                      </Accordion.Header>
                      <Accordion.Body className="expanedText">
                        Swift Cyber Security Audit cost for an average-sized
                        company starts at $12000. Pricing for a Swift Cyber
                        Security audit depends on several factors, including
                        your type of organization, the number of annual
                        transactions, payment applications, physical locations,
                        whether first time or recertification and other
                        additional services as well.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                  <Accordion className="mt-3">
                    <Accordion.Item className="my-3" eventKey="1">
                      <Accordion.Header>
                        How long would it take to complete a Swift Cyber
                        Security Audit?
                      </Accordion.Header>
                      <Accordion.Body className="expanedText">
                        On average it takes 4-6 weeks to complete an end-to-end
                        Swift Cyber Security Audit. However, the timeline
                        greatly depends on the time taken for implementing the
                        remediation suggested in the gap analysis
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>

                <div className="expaneditems1 ">
                  <Accordion>
                    <Accordion.Item className="my-3" eventKey="1">
                      <Accordion.Header>
                        What will you get after a Swift Cyber Security Audit is
                        complete?
                      </Accordion.Header>
                      <Accordion.Body className="expanedText">
                        You will receive Audit reports (ROC/SAQ, AOC)
                        documenting the details on how networks and physical
                        environments are protected against threats. You will
                        even get a Swift Cyber Security Certificate of
                        Compliance on successful completion of the audit,
                        demonstrating your commitment to Industry Standard
                        Compliance.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                  <Accordion>
                    <Accordion.Item className="my-3" eventKey="1">
                      <Accordion.Header>
                        What is the validity of a Swift Cyber Security
                        Certification?
                      </Accordion.Header>
                      <Accordion.Body className="expanedText">
                        Swift Cyber Security Certification is only valid for a
                        year or 12 months from the date of issue
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>

                  <Accordion>
                    <Accordion.Item className="my-3" eventKey="1">
                      <Accordion.Header>
                        How often do you need to conduct a Swift Cyber Security
                        Audit?
                      </Accordion.Header>
                      <Accordion.Body className="expanedText">
                        As per the Industry standard requirement, a Swift Cyber
                        Security Audit must be performed annually, or when
                        significant changes are introduced that may impact
                        systems and network in an environment.
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

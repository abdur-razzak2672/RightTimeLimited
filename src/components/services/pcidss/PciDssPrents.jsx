import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Offer from "./Offer";
import { pciPhase1 } from "./PciPhaseData";
import { OfferData } from "./OfferData";
import OfferPhaseInitial from "./OfferPhaseInitial";
import OfferRe from "./OfferRe";
function PciDssPrents({ tab1, tab2, tab3, tab4, tab5 }) {
  const [tabIndex, setTabIndex] = useState(0);
  const [tabIndex1, setTabIndex1] = useState(16);
  const [tabIndex2, setTabIndex2] = useState(tab1);
  const [tabIndex3, setTabIndex3] = useState(tab2);

  const [style, setStyle] = useState("cont2");
  const [style2, setStyle2] = useState("cont");

  const [style3, setStyle3] = useState(tab3);
  const [style4, setStyle4] = useState(tab4);
  const [style5, setStyle5] = useState(tab5);

  console.log("offer", pciPhase1);

  return (
    <div>
      <div>
        <div className="page-header">
          <div
            className="page-header__bg"
            style={{
              backgroundImage: `url('https://www.groundlabs.com/wp-content/uploads/2019/03/PCI-DSS-Compliance.png')`,
            }}
          ></div>
          <div className="container">
            <ul className="thm-breadcrumb list-unstyled">
              <li>
                <a href="{{ url('/') }}">Home</a>
              </li>
              <li>
                <a href="{{ url('/services') }}">Services</a>
              </li>
              <li>
                <a href="{{ url('/services/standard-implementation-certification') }}">
                  Standard Implementation & Certification
                </a>
              </li>
              <li>Payment Card Industry Data Security Standards</li>
            </ul>
            <h2 className="page-header__title">
              Payment Card Industry Data Security Standards
            </h2>
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
                Industry Security Standards Council (PCI SSC), USA has
                formulated plentiful controls across several security standards
                to keep companies and consumers protected.
              </p>
              <div className="row">
                <div className="col-md-7">
                  <p className="text-dark">
                    PCI DSS (Payment card Industry Data Security Standard)
                    compliance is one of the strictest and most desired security
                    standards in the industry today. It is a widely accepted
                    global standard recommended by the major Card brands like
                    Visa, Mastercard, American Express, JCB, Discovery. PCI DSS
                    standard is consisting of set of policies and procedures
                    intended to optimize the security of debit, credit and cash
                    card transactions and protect cardholders against misuse of
                    their personal information.
                  </p>

                  <p className="text-dark">
                    PCI DSS applies to all entities involved in payment card
                    transactions —including merchant, acquirer bank, credit card
                    processor, payment card brand (such as Mastercard, VISA,
                    JCB, American Express, Discover, UnionPay, Rupay etc.)
                    debit, credit or ATM cards issuer, financial institution,
                    Independent Sales Organization (ISO), or an agent, and
                    service providers, as well as all other entities that store,
                    process or transmit cardholder data (CHD) and/or sensitive
                    authentication data (SAD).
                  </p>
                </div>
                <div className="col-md-5">
                  <img
                    className="w-100"
                    src="/assets/images/services/pcidss.png"
                    alt=""
                  />
                </div>
              </div>
              <p className="text-dark">
                Mostly all payment card brands enforcing PCI DSS Compliance at
                minimum annual basis as per the Levels determined by the various
                security programs. Organization needs to Implement 12 core
                functional requirements spread across 6 Control Objectives
                (domains) from PCI DSS Standard to ensure their Card Holder Data
                Environment is secured.
              </p>
              <p className="text-dark">
                Service Providers and Merchants can report their PCI DSS
                Compliance either Filling the applicable Onsite Assessment or
                Self-Assessment Questionnaire (SAQ’s) by a Qualified Security
                Assessor as per its Level.
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
              accredited by the PCI Security Standards Council (PCI SSC), USA in
              PCI DSS Standards of the Payment Card Industry. We are the first
              Bangladesh Based PCI QSA (Payment Card Industry qualified Security
              Assessor firm. Our PCI experts contribute their knowhow to more
              than 100 companies worldwide by providing consulting and
              assessments.
            </p>
            <p className="text-dark">
              As one of the Special Interest Group (SIG), we also support the
              PCI Security Standards Council with our knowledge from hundreds of
              PCI projects.
            </p>
            <p className="text-dark">
              Service Providers and Merchants can report their PCI DSS
              Compliance either Filling the applicable Onsite Assessment or
              Self-Assessment Questionnaire (SAQ’s) by a Qualified Security
              Assessor as per its Level.
            </p>

            <div className="d-flex justify-content-center    mt-5">
              <Button
                onClick={() => (
                  setTabIndex2(201),
                  setStyle3("cont"),
                  setStyle4("cont2"),
                  setStyle5("cont"),
                  setStyle("cont2"),
                  setStyle2("cont"),
                  setTabIndex3(301)
                )}
                className={style4}
              >
                PCI DSS Consultation
              </Button>
              <Button
                onClick={() => (
                  setTabIndex2(202),
                  setStyle4("cont"),
                  setStyle3("cont2"),
                  setStyle5("cont"),
                  setStyle("cont2"),
                  setStyle2("cont"),
                  setTabIndex3(301)
                )}
                className={style3}
              >
                PCI DSS Certification
              </Button>
              <Button
                onClick={() => (
                  setTabIndex2(203),
                  setStyle4("cont"),
                  setStyle3("cont"),
                  setStyle5("cont2"),
                  setStyle("cont2"),
                  setStyle2("cont"),
                  setTabIndex3(301)
                )}
                className={style5}
              >
                PCI DSS Consultation & Certification
              </Button>
            </div>

            {tabIndex2 === 201 && (
              <div className="d-flex mt-1 justify-content-center  ">
                <Button
                  onClick={() => (
                    setTabIndex3(301), setStyle2("cont"), setStyle("cont2")
                  )}
                  className={style}
                >
                  Consultation (Initial)
                </Button>
                <Button
                  onClick={() => (
                    setTabIndex3(302), setStyle("cont"), setStyle2("cont2")
                  )}
                  className={style2}
                >
                  Consultation (Re-Certification)
                </Button>
              </div>
            )}

            {tabIndex2 === 202 && (
              <div className="d-flex mt-1 justify-content-center  ">
                <Button
                  onClick={() => (
                    setTabIndex3(301), setStyle2("cont"), setStyle("cont2")
                  )}
                  className={style}
                >
                  Certification (Initial)
                </Button>
                <Button
                  onClick={() => (
                    setTabIndex3(302), setStyle("cont"), setStyle2("cont2")
                  )}
                  className={style2}
                >
                  Certification (Re-Certification)
                </Button>
              </div>
            )}

            {tabIndex2 === 203 && (
              <div className="d-flex mt-1 justify-content-center  ">
                <Button
                  onClick={() => (
                    setTabIndex3(301), setStyle2("cont"), setStyle("cont2")
                  )}
                  className={style}
                >
                  Consultation & Certification (Initial)
                </Button>
                <Button
                  onClick={() => (
                    setTabIndex3(302), setStyle("cont"), setStyle2("cont2")
                  )}
                  className={style2}
                >
                  Consultation & Certification (Re-Certification)
                </Button>
              </div>
            )}




            {tabIndex3 === 301 ? (
              <>
                <OfferPhaseInitial data={pciPhase1} />
              </>
            ) : (
              <OfferRe data={pciPhase1.phase4} />


            )}






            <Row className="mt-4">
              {/* <Col md={4}>
                <div className="d-flex justify-content-between">
                  <div>
                    <div class="demo-body">
                      <div class="line-wrapper">
                        <div class="word">PHASE1</div>
                      </div>
                    </div>
                    <br />

                    <div class="demo-body1">
                      <div class="line-wrapper1">
                        <div class="word1">PHASE2</div>
                      </div>
                    </div>
                    <br />

                    <div class="demo-body2">
                      <div class="line-wrapper2">
                        <div class="word2">PHASE3</div>
                      </div>
                    </div>
                    <br />

                    <div class="demo-body3">
                      <div class="line-wrapper3">
                        <div class="word3">PHASE4</div>
                      </div>
                    </div>
                  </div>
                  <div>
                    {OfferData.map((item, index) => (
                      <div className=" servicesItem">
                        <a
                          key={index}
                          style={{ textDecoration: "none" }}
                          className="text-dark   focus"
                          onClick={() => setTabIndex(index)}
                          href="#javascript void(0)"
                        >
                          <img
                            src="/assets/images/services/initial.png"
                            alt=""
                          />
                          {item.title}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </Col> */}

              <Col md={12}>
                <div>
                  {tabIndex === tabIndex && (
                    <Offer id={tabIndex} data={OfferData} />
                  )}
                </div>
              </Col>
            </Row>
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
                        Who should comply with PCI DSS Certification?
                      </Accordion.Header>
                      <Accordion.Body className="expanedText">
                        The PCI DSS is an information security standard for
                        organizations that process, transmits, and store credit
                        card details. This would typically include merchants,
                        processors, acquirers, issuers, and service providers
                        dealing with sensitive cardholder data. View a quick 5
                        mins video on this topic
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                  <Accordion className="shadaow">
                    <Accordion.Item className="my-3" eventKey="1">
                      <Accordion.Header>
                        How much will a PCI DSS Audit cost you?
                      </Accordion.Header>
                      <Accordion.Body className="expanedText">
                        PCI DSS Audit cost for an average-sized company starts
                        at $12000. Pricing for a PCI DSS audit depends on
                        several factors, including your type of organization,
                        the number of annual transactions, payment applications,
                        physical locations, whether first time or
                        recertification and other additional services as well.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                  <Accordion className="mt-3">
                    <Accordion.Item className="my-3" eventKey="1">
                      <Accordion.Header>
                        How long would it take to complete a PCI DSS Audit?
                      </Accordion.Header>
                      <Accordion.Body className="expanedText">
                        On average it takes 4-6 weeks to complete an end-to-end
                        PCI DSS Audit. However, the timeline greatly depends on
                        the time taken for implementing the remediation
                        suggested in the gap analysis
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>

                <div className="expaneditems1 ">
                  <Accordion>
                    <Accordion.Item className="my-3" eventKey="1">
                      <Accordion.Header>
                        What will you get after a PCI DSS Audit is complete?
                      </Accordion.Header>
                      <Accordion.Body className="expanedText">
                        You will receive Audit reports (ROC/SAQ, AOC)
                        documenting the details on how networks and physical
                        environments are protected against threats. You will
                        even get a PCI DSS Certificate of Compliance on
                        successful completion of the audit, demonstrating your
                        commitment to Industry Standard Compliance.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                  <Accordion>
                    <Accordion.Item className="my-3" eventKey="1">
                      <Accordion.Header>
                        What is the validity of a PCI DSS Certification?
                      </Accordion.Header>
                      <Accordion.Body className="expanedText">
                        PCI DSS Certification is only valid for a year or 12
                        months from the date of issue
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>

                  <Accordion>
                    <Accordion.Item className="my-3" eventKey="1">
                      <Accordion.Header>
                        How often do you need to conduct a PCI DSS Audit?
                      </Accordion.Header>
                      <Accordion.Body className="expanedText">
                        As per the Industry standard requirement, a PCI DSS
                        Audit must be performed annually, or when significant
                        changes are introduced that may impact systems and
                        network in an environment.
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

export default PciDssPrents;

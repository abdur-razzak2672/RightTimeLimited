 import React, { useState } from "react";
 import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
 
function VaptFooter() {
    const [updateTap, setupdateTap] = useState(0);
  return (
 
    <div>
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
                      What kind of penetration testing services are offered by
                      AT&T Cybersecurity Consulting?{" "}
                    </Accordion.Header>
                    <Accordion.Body className="expanedText">
                      AT&T Cybersecurity Consulting offers Network Penetration
                      Testing, Application Penetration Testing, Wireless
                      Penetration Testing, and Social Engineering.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>

                <Accordion>
                  <Accordion.Item className="my-3" eventKey="1">
                    <Accordion.Header>
                      How long does a penetration test take?{" "}
                    </Accordion.Header>
                    <Accordion.Body className="expanedText">
                      Based on the scope of the project and size of the
                      environment, AT&T Cybersecurity Consulting will estimate
                      an expected duration of time to completion. On average,
                      penetration testing takes 1-3 weeks.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>

                <Accordion className="mt-3">
                  <Accordion.Item className="my-3" eventKey="1">
                    <Accordion.Header>
                      Can segmentation testing be performed?{" "}
                    </Accordion.Header>
                    <Accordion.Body className="expanedText">
                      Yes, it can be performed both on site and remotely. Remote
                      testing can be done using the Remote Internal Pen-Test
                      (RIPT) device.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>

              <div className="expaneditems1 ">
                <Accordion className="shadaow">
                  <Accordion.Item className="my-3" eventKey="1">
                    <Accordion.Header>
                      Are commercial or open source tools used to perform the
                      penetration test?{" "}
                    </Accordion.Header>
                    <Accordion.Body className="expanedText">
                      AT&T Cybersecurity Consulting performs vulnerability
                      exploitation using a variety of techniques, depending on
                      the nature of the vulnerabilities. Our experts utilize
                      open source technology and some commercial products to
                      mimic tools, techniques, and procedures of malicious
                      hackers.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <Accordion>
                  <Accordion.Item className="my-3" eventKey="1">
                    <Accordion.Header>
                      How much of the penetration testing is automated/manual?{" "}
                    </Accordion.Header>
                    <Accordion.Body className="expanedText">
                      The Vulnerability Scanning phase of the penetration test
                      is conducted using automated tools. Next, AT&T
                      Cybersecurity consulting manually confirms the results
                      from the automated tools. Manual testing is done for
                      discovery and elimination of false positives, verification
                      of scan results, and identification of complex, emerging,
                      or obscure vulnerabilities.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>

                <Accordion>
                  <Accordion.Item className="my-3" eventKey="1">
                    <Accordion.Header>
                      What is the methodology of a penetration test?{" "}
                    </Accordion.Header>
                    <Accordion.Body className="expanedText">
                      The first phase is Intelligence Gathering, in which the
                      objective of this first phase is to gain as much knowledge
                      as possible about the target environment. The second phase
                      is Vulnerability Scanning, which is done to identify
                      hosts, services, and vulnerabilities in the target
                      environment. In the next phase, Manual Verification, AT&T
                      Cybersecurity Consulting manually validates the results of
                      the automated tools. Next is the Vulnerability
                      Exploitation phase in which exploits are attempted against
                      the identified vulnerabilities. In the final phase of
                      Analysis and Reporting, the findings are analyzed and
                      documented.
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
                onClick={() => setupdateTap(14)}
                class="btn btn-dark m-3"
              >
                Case Studies
              </button>
              <button
                type="button"
                onClick={() => setupdateTap(15)}
                class="btn btn-warning m-3"
              >
                Downloads
              </button>
              <button
                type="button"
                onClick={() => setupdateTap(16)}
                class="btn btn-success m-3"
              >
                Blogs
              </button>
            </div>
            <div class="mt-2">
              {updateTap === 16 && (
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
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
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
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
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
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </Card.Text>
                        <Button variant="warning">Read More</Button>
                      </Card.Body>
                    </Card>
                  </div>
                </div>

                // <h3>Frequently Asked Questions</h3>
                // <p>Regular assessments as such help safeguard the application from any unauthorized access which can cause an impact on the organization both in reputation and resources</p>
              )}
              {updateTap === 14 && (
                <div className="d-flex justify-content-center  ">
                  <Card style={{ width: "300px" }}>
                    <img
                      className=""
                      src="/assets/images/resources/1.jpeg"
                      alt=""
                    />
                    <Card.Body>
                      <Card.Title className="text-dark">Card Title</Card.Title>
                      <Card.Text className="text-dark">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant="warning">Read More</Button>
                    </Card.Body>
                  </Card>
                </div>
              )}
              {updateTap === 15 && (
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
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
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
    </div>
  )
}

export default VaptFooter
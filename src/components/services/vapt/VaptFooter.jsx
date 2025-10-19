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
                      When do you need a penetration test?{" "}
                    </Accordion.Header>
                    <Accordion.Body className="expanedText">
                      The news cycle is constantly awash with data breaches.
                      From tech giants like the Microsoft Laspsus breach, to
                      fashion retailers Shein, charity organizations such as Red
                      Cross, social media powerhouses like Twitter and
                      everything in between. It seems that businesses of all
                      sizes, in all sectors, are at risk and we can see this was
                      no different throughout the last twelve months as a report
                      reveals the biggest data breaches of 2022. While data
                      breaches vary in their cause and severity, many have one
                      thing in common: they could have been avoided with
                      rigorous penetration testing and follow-up remediation.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>

                <Accordion>
                  <Accordion.Item className="my-3" eventKey="1">
                    <Accordion.Header>
                      What is Penetration testing?{" "}
                    </Accordion.Header>
                    <Accordion.Body className="expanedText">
                      Penetration testing is a point-in-time assessment of your
                      organization’s security posture. There are different types
                      of penetration tests, aimed at uncovering vulnerabilities
                      in different parts of IT infrastructure, systems and
                      applications. These include internal and external network
                      assessments, web application testing and mobile
                      application testing.
                      <br />
                      Penetration testing is an invaluable tool in the fight
                      against cyber criminals, but the benefits go further.
                      Regular testing provides ongoing assurance to your
                      security and IT teams, and to your senior management, that
                      security risks are being managed. They also provide
                      assurance to third parties in your supply chain.
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
                      Why should organizations consider penetration testing?
                    </Accordion.Header>
                    <Accordion.Body className="expanedText">
                      In our increasingly connected world, businesses set up new
                      suppliers quickly and share data with them, which they
                      often share with their suppliers and beyond. This means
                      you quickly build an extended digital supply chain (read
                      our extensive Guide to Supply Chain Security). Each one of
                      these third parties presents an attacker with a way into
                      your systems or data. As such, you should not only
                      penetration test your own organization, but should also
                      ensure your suppliers are systematically testing their own
                      systems.
                      <br />
                      Moreover, industry standards like Cyber Essentials and the
                      IT Health Check Scheme also require penetration tests for
                      compliance and accreditation respectively. The GDPR
                      doesn’t specifically mandate them, but it does state that
                      organizations need: “a process for regularly testing,
                      assessing and evaluating the effectiveness of technical
                      and organizational measures for ensuring the security of
                      the processing.” In plain English, this means activities
                      including vulnerability scanning and penetration testing.
                      <br />
                      While most companies understand the benefits of
                      penetration testing, timing is critical. If performed too
                      frequently, penetration tests can be a costly expense and
                      the results may overwhelm a small IT team. On the other
                      hand, if not done often enough, your business could be
                      left exposed to a cyber-attack. Two of our senior security
                      experts recently wrote an article in Media Insider
                      explaining the benefits of pen testing and what to look
                      for in a good pen testing partner.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <Accordion>
                  <Accordion.Item className="my-3" eventKey="1">
                    <Accordion.Header>
                      When to get a penetration test{" "}
                    </Accordion.Header>
                    <Accordion.Body className="expanedText">
                      In the same way that every organization is unique, so too
                      are their penetration testing requirements. However, there
                      a few overarching principles for guiding when a test is
                      needed.
                      <h4>1. An annual health check-up</h4>
                      At a minimum, penetration tests should be conducted on an
                      annual basis. They effectively act as a technical audit of
                      your IT systems and applications, helping you to ensure
                      that relevant security patches have been applied, any new
                      software has been integrated safely, systems are
                      configured properly, your operating systems aren’t
                      vulnerable to attack and your employees are following
                      security protocols. In cases where your IT team consists
                      of only one or a few personnel, we advocate staggering the
                      phases of an annual penetration test, to ensure that all
                      vulnerabilities can be dealt with, without overloading
                      your team members.
                      <h4>2. The deployment of new software and services</h4>
                      Every time your organization introduces a new application,
                      website or service, it should be checked with a
                      penetration test. This is pivotal to secure development
                      and ensuring that your security posture has not been
                      negatively impacted by the introduction of new
                      vulnerabilities. This is especially critical if you are
                      exposing your application or service to the internet. In
                      this case, you are opening up the application to the world
                      and it will constantly be pinged, scanned and attacked by
                      all kinds of malicious third parties. If your application
                      contains personal data or sensitive information, then the
                      potential impact of a breach is high, and testing is an
                      absolute must.
                      <h4>3. Any other changes to the workplace environment</h4>
                      The COVID-19 pandemic is a prime example of how changes to
                      the workplace environment make organizations more
                      vulnerable to cyber-attacks. Interpol saw a huge increase
                      in attacks over the last year, as cybercriminals attempted
                      to take advantage of the shift to remote and hybrid work.
                      Changes like these – be it in the physical or digital
                      realm – require rigorous penetration testing to prevent
                      malicious intrusions. Physical testing – which simulates a
                      malicious actor trying to compromise a business’ premise –
                      is extremely important. Companies should also carry out a
                      full and thorough assessment of their Active Directory
                      Certificate Services configuration to ensure that no
                      weaknesses have crept in during the years of IT change
                      that every company experiences.
                      <h4>4. If you’re a newbie</h4>
                      If you’ve never conducted a penetration test before, then
                      the time to act is now. Often, small businesses that
                      aren’t highly reliant on technology may think they are at
                      low risk of a data breach. But, with the proliferation of
                      data, every company can be considered a tech company –
                      even if they’re a shop on the high street. Because of the
                      reputational and financial risks of a successful breach,
                      penetration testing is an urgency for any and all
                      organizations that are yet to conduct one. As the digital
                      and physical business worlds continue to merge,
                      penetration testing is an excellent way for businesses to
                      reduce the risks of a data breach, ensure compliance and
                      assure their supplier network that they are being
                      proactive about safeguarding sensitive information. By
                      knowing when to conduct penetration tests, and working
                      with a trusted, accredited tester, your company will
                      improve internal security confidence – and that of your
                      customers and partners.
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

      <section id="resourse" className=" ">
        <div className="container">
          <div className="  text-center">
            <h2 className="header">Related Updates</h2>
            <div className="col-md-12 text-center mt-4">
              <button
                type="button"
                onClick={() => setupdateTap(14)}
                className="btn btn-dark m-3"
              >
                Case Studies
              </button>
              <button
                type="button"
                onClick={() => setupdateTap(15)}
                className="btn btn-warning m-3"
              >
                Downloads
              </button>
              <button
                type="button"
                onClick={() => setupdateTap(16)}
                className="btn btn-success m-3"
              >
                Blogs
              </button>
            </div>
            <div className="mt-2">
              {updateTap === 16 && (
                <div className="row mt-5">
                  <div className="col-md-4 text-center d-flex">
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
                  <div className="col-md-4 text-center d-flex">
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
                  <div className="col-md-4 text-center d-flex">
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
  );
}

export default VaptFooter;

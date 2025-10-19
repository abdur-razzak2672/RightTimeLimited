import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { useLocation } from "react-router-dom";
import faqData from "./FaqData";
function SeviceCommon() {
  const location = useLocation();
  const currentPath = location.pathname;
  const currentFaqs = faqData[currentPath] || [];
  return (
    <div>
      <section id="benefit" className="section-padding--bottom text-center">
        <div className="container">
          <div className="section-title text-center">
            <p className="section-title__text">Company Benefits</p>
            <h2 className="header">
              We Provide Best Information Security <br /> Service and Solution
              For 16+ Years
            </h2>
          </div>
          <div className="row   text-center col-xs-6">
            <div className="col-lg-3 col-md-4 col-sm-6 rounded ">
              <div id="card-container">
                <div className="text-center rounded" id="card3">
                  <div className="front face text-center pt-3">
                    <img
                      src="assets/images/services/cardicon/1.png"
                      width="30%"
                      alt=""
                    />
                    <h5 className=" mt-3 p-2 text-dark">
                      Business Understanding
                    </h5>
                  </div>
                  <div className="back face">
                    <p className="artist mt-4">
                      Evaluating business process and environment to understand
                      the in-scope elements
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 rounded ">
              <div id="card-container">
                <div className="text-center rounded" id="card3">
                  <div className="front face text-center pt-3">
                    <img
                      src="assets/images/services/cardicon/2.png"
                      width="30%"
                      alt=""
                    />
                    <h5 className="mt-3 p-2 text-dark">Scope Finalization</h5>
                  </div>
                  <div className="back face">
                    <p className="artist mt-4">
                      Finalize the scope elements and prepare the requirement
                      documentation
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 rounded ">
              <div id="card-container">
                <div className="text-center rounded" id="card3">
                  <div className="front face text-center pt-3">
                    <img
                      src="assets/images/services/cardicon/3.png"
                      width="30%"
                      alt=""
                    />
                    <h5 className="mt-3 p-2 text-dark">Readiness Assesment</h5>
                  </div>
                  <div className="back face">
                    <p className="artist mt-4">
                      Identify the potential challenges that might arise during
                      requirement implementation
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 rounded ">
              <div id="card-container">
                <div className="text-center rounded" id="card3">
                  <div className="front face text-center pt-4">
                    <img
                      src="assets/images/services/cardicon/1.png"
                      width="30%"
                      alt=""
                    />
                    <h5 className="mt-3 p-2 text-dark">Risk Assesment</h5>
                  </div>
                  <div className="back face">
                    <p className="artist mt-4">
                      Identify the potential challenges that might arise during
                      requirement implementation
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 rounded ">
              <div id="card-container">
                <div className="text-center rounded" id="card3">
                  <div className="front face text-center pt-3">
                    <img
                      src="assets/images/services/cardicon/5.png"
                      width="30%"
                      alt=""
                    />
                    <h5 className="mt-3 p-2 text-dark">Data Flow Assesment</h5>
                  </div>
                  <div className="back face">
                    <p className="artist mt-4">
                      Data Flow Assessment Conducting thorough systems analysis
                      to evaluate data flow and possible leakages
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 rounded ">
              <div id="card-container">
                <div className="text-center rounded" id="card3">
                  <div className="front face text-center pt-3">
                    <img
                      src="assets/images/services/cardicon/6.png"
                      width="30%"
                      alt=""
                    />
                    <h5 className="mt-3 p-2 text-dark">
                      Doccumentation Support
                    </h5>
                  </div>
                  <div className="back face">
                    <p className="artist mt-4">
                      Assist you with list of policy and procedure to help you
                      in validation or evidence collection
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 rounded ">
              <div id="card-container">
                <div className="text-center rounded" id="card3">
                  <div className="front face text-center pt-3">
                    <img
                      src="assets/images/services/cardicon/7.png"
                      width="30%"
                      alt=""
                    />
                    <h5 className="mt-3 p-2 text-dark">Remidiation Support</h5>
                  </div>
                  <div className="back face">
                    <p className="artist mt-4">
                      Assist you with list of policy and procedure to help you
                      in validation or evidence collection
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 rounded ">
              <div id="card-container">
                <div className="text-center rounded" id="card3">
                  <div className="front face text-center pt-3">
                    <img
                      src="assets/images/services/cardicon/8.png"
                      width="30%"
                      alt=""
                    />
                    <h5 className="mt-3 p-2 text-dark">Awareness Training</h5>
                  </div>
                  <div className="back face">
                    <p className="artist mt-4">
                      Conduct awareness sessions for your Team and personnel
                      involved in the scope
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row gutter box text-center col-xs-6">
            <div className="col-lg-3 col-md-4 col-sm-6 rounded ">
              <div id="card-container">
                <div className="text-center rounded" id="card3">
                  <div className="front face text-center pt-3">
                    <img
                      src="assets/images/services/cardicon/9.png"
                      width="30%"
                      alt=""
                    />
                    <h5 className="mt-3 p-2 text-dark">Scan And Testing</h5>
                  </div>
                  <div className="back face">
                    <p className="artist mt-4">
                      Scans And Testing Identify critical vulnerabilities in
                      your system with a robust testing approach
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 rounded ">
              <div id="card-container">
                <div className="text-center rounded" id="card3">
                  <div className="front face text-center pt-3">
                    <img
                      src="assets/images/services/cardicon/10.png"
                      width="30%"
                      alt=""
                    />
                    <h5 className="mt-3 p-2 text-dark">Evidence And Reveiw</h5>
                  </div>
                  <div className="back face">
                    <p className="artist mt-4">
                      Evidence Review Review of the evidence collected to assess
                      their maturity, in line with the compliance
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 rounded ">
              <div id="card-container">
                <div className="text-center rounded" id="card3">
                  <div className="front face text-center pt-3">
                    <img
                      src="assets/images/services/cardicon/11.png"
                      width="30%"
                      alt=""
                    />
                    <h5 className="mt-3 p-2 text-dark">
                      Final Assesment And Attestation
                    </h5>
                  </div>
                  <div className="back face">
                    <p className="artist mt-4">
                      {" "}
                      Attestation Post successful assessment, we get you
                      attested for compliance with our audit team
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 rounded ">
              <div id="card-container">
                <div className="text-center rounded" id="card3">
                  <div className="front face text-center pt-3">
                    <img
                      src="assets/images/services/cardicon/12.png"
                      width="30%"
                      alt=""
                    />
                    <h5 className="mt-3 p-2 text-dark">
                      Contineuos Compliance
                    </h5>
                  </div>
                  <div className="back face">
                    <p className="artist mt-4">
                      {" "}
                      Attestation Post successful assessment, we get you
                      attested for compliance with our audit team
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="question" className="section-padding--bottom text-center">
        <div className="container">
          <div className="section-title text-center">
            <h2 className="header my-5">Frequently Asked Questions</h2>

            {currentFaqs.length > 0 ? (
              <div className="expanedItem mt-5 mb-5">
                <div className="expaneditems1">
                  {currentFaqs.slice(0, 3).map((faq, index) => (
                    <Accordion className="shadow" key={`faq-left-${index}`}>
                      <Accordion.Item className="my-3" eventKey="0">
                        <Accordion.Header>{faq.question}</Accordion.Header>
                        <Accordion.Body>{faq.answer}</Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  ))}
                </div>
                <div className="expaneditems1">
                  {currentFaqs.slice(3, 6).map((faq, index) => (
                    <Accordion className="shadow" key={`faq-right-${index}`}>
                      <Accordion.Item className="my-3" eventKey="0">
                        <Accordion.Header>{faq.question}</Accordion.Header>
                        <Accordion.Body>{faq.answer}</Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  ))}
                </div>
              </div>
            ) : (
              <p>No FAQs available for this service.</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default SeviceCommon;

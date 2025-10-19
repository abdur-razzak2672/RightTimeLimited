import React from "react";

function Offer({ data, va, pt, id, Offercard }) {
  console.log("data", data);
  return (
    <div>
      <div>
        <h3 className="header">{data[id].title}</h3>
        <p className="text-dark">{data[id].description}</p>
        <p style={{ borderBottom: "2px solid lightgray" }}></p>
        <div className="text-center">
          <h4 className="header">
            Fast Track Your {data[id].header} Compliance
          </h4>
          <p className="text-dark">
            Request an initial {data[id].header} Compliance Program
            consultation.
          </p>

          <button
            style={{
              padding: "7px",
              border: "1px solid lightgray",
              borderRadius: "8px",
            }}
          >
            REQUEST FREE CONSULTATION
          </button>
        </div>

        <p className="mt-4" style={{ borderBottom: "2px solid lightgray" }}></p>

        <div>
          {va === "va" && (
            <>
              <div>
                <h5 className="header">Overview</h5>
                <p className="text-dark">
                  RightTime's Vulnerability & Cyber Security Assessments provide
                  a complete evaluation of existing and potential
                  vulnerabilities within your organization with the end result
                  of improving your security posture. The evaluations are
                  designed to proactively identify and prevent the exploitation
                  of any existing IT vulnerabilities.{" "}
                </p>
                <p className="pt-3 text-dark">
                  Our main objective is to identify cyber security weaknesses
                  and test how far a potential exploit can compromise your
                  network. We also test your organization's security policy
                  compliance, the effectiveness of your employee security
                  awareness training program, as well as your ability to
                  identify and respond to cyber security incidents.
                </p>
              </div>

              <div>
                <h5 className="header">
                  Benefits of a Vulnerability Assessment
                </h5>
                <p className="text-dark  ">
                  Identify and safely exploit vulnerabilities on network
                  devices, operating systems, desktop applications, Web
                  applications, databases, and more.
                </p>
                <p className="text-dark">
                  1. Identify where your most sensitive data is stored
                </p>
                <p className="text-dark">
                  2. Uncover hidden sources of data & vulnerability{" "}
                </p>

                <p className="text-dark">
                  3. Identify which servers run mission-critical applications
                </p>
                <p className="text-dark">4. Review all ports and processes</p>
                <p className="text-dark">
                  5. Detect and repair potential weaknesses in your network
                  before they can be exploited by cyber criminals.
                </p>

                <p className="text-dark">
                  6. Understand and enhance the current state of your cyber
                  security posture and level of risk.
                </p>

                <p className="text-dark">
                  7. Test your policy agreement and your organization's ability
                  to identify and respond to security threats.
                </p>

                <p className="text-dark">
                  8. Determine the adequacy of employee security awareness as a
                  baseline for skill acquisition and reinforcement of human
                  defenses.
                </p>
                <p className="text-dark">
                  9. Demonstrate compliance with current government and industry
                  regulations such as PCI-DSS, FFIEC, GLBA, and HIPAA/HITECH.
                </p>
                <p className="text-dark">
                  10. Manage resources more efficiently by focusing attention
                  and resources where needed.
                </p>
              </div>

              <div>
                <h5 className="header">Methodology</h5>
                <p className="text-dark">
                  VAPT is a complex requirement that has an impact on most areas
                  of the business, not just the technical or IT focused
                  locations. Therefore, it is important to make sure that any
                  methodology that is used to service the program has been tried
                  and tested. Assessments can be performed under the premise of
                  a "Zero Knowledge Attack" using publicly available information
                  or under a "Full Knowledge Attack" scenario.
                </p>

                <p className="text-dark">
                  The goal is to limit exposure and attack surfaces to make
                  compromising and exploitation of network vulnerabilities more
                  difficult.{" "}
                </p>
                <p className="text-dark">
                  The Final Report will include a grading format ranging from
                  "severe to low" with recommendations for remediation. Reports
                  are provided for both executive management and the technical
                  teams, and RightTime will conduct an exit interview to review
                  and explain all necessary remediation tasks in detail.{" "}
                </p>

                <h5 className="header pt-3">
                  Phases of Vulnerability Assessment
                </h5>
                <p className="text-dark">
                  Along with different regular benefits, vulnerability
                  assessment does have some phases also that help in determining
                  the threats. Thus, there are a total of 8 phases that also
                  have different names as per their performance.
                </p>
              </div>
            </>
          )}

          {pt === "pt" && (
            <>
              <div>
                <h5 className="header">Overview</h5>
                <p className="text-dark">
                  RightTime’s Penetration Testing services reduce the risk of a
                  successful attacks before they occur. With over two decades of
                  experience in security, compliance and risk management, our
                  experts work as ethical hackers to identify security issues
                  beyond the capability of automated tools and
                  assessments/tests. As cyberattacks continue to rise everyday
                  it is important to perform penetration tests regularly.
                </p>
                <p className="pt-3 text-dark">
                  RightTime’s experienced engineers test your network manually
                  to identify the extent your system could currently be
                  compromised by a real-life attacker. Our penetration testing
                  service can be used to test your security policy compliance,
                  the effectiveness of your employee security awareness training
                  and your organization's ability to identify and respond to
                  security incidents.
                </p>

                <p className="pt-3 text-dark">
                  RightTime provides remediation reports going in-depth on steps
                  to take your overall security to the next level. Our team can
                  act as an extension of your team to assist in the remediation
                  process to ensure cybersecurity right away.{" "}
                </p>
              </div>

              <div>
                <h5 className="header">Benefits of a Penetration Testing </h5>

                <h6 className="header">Identify vulnerabilities</h6>
                <p className="text-dark  ">
                  Penetration testing reveals vulnerabilities in your systems,
                  application configurations and infrastructure. It also
                  identifies actions and habits of your staff that could lead to
                  data breaches and malware infiltration. Pen testers try to
                  exploit weaknesses enabling you to see what a hacker could do
                  in the ‘real world’
                </p>
                <h6 className="header">Test your cyber-security response </h6>
                <p className="text-dark  ">
                  You should be able to detect attacks and respond rapidly. Once
                  you detect a cyber-attack, you should start investigations
                  immediately. Feedback from the test will tell you which
                  actions should be taken to improve your defense.{" "}
                </p>
                <h6 className="header">Assurance in business continuity </h6>
                <p className="text-dark  ">
                  Every cyber-attack will have a negative impact on your
                  business. A pen test will reveal potential threats and help to
                  ensure that your operations don’t suffer damage to costs and
                  reputation. A good pen tester will give you a detailed report
                  detailing your security weaknesses so you know what
                  improvements to consider to improve your business’s
                  cyber-security.{" "}
                </p>
                <h6 className="header">Maintaining compliance </h6>
                <p className="text-dark  ">
                  Your legal compliance requirements may necessitate a level of
                  penetration testing. The ISO 27001 (information security
                  standard from the International Organization for
                  Standardization), HIPPA (Health Insurance Portability and
                  Accountability Act), PCI DSS (Payment Card Industry Data
                  Security Standard), GDPR (General Data Protection Regulation),
                  SOX (Sarbanes-Oxley Act), FISMA (Federal Information Security
                  Management Act of 2002), GLBA (Gramm–Leach–Bliley Act)
                  standard requires all managers/system owners to conduct
                  regular penetration tests and security reviews, with skilled
                  third-party testers.{" "}
                </p>
                <h6 className="header">Maintain </h6>
                <p className="text-dark  ">
                  A cyber-attack or data breach can have a negative impact on
                  the confidence and loyalty of your customers, suppliers and
                  stakeholders. If your business is known for its systematic
                  security audits and pen tests, you will maintain the trust and
                  confidence of your customers and clients.{" "}
                </p>
              </div>

              <div>
                <h5 className="header">Methodology:</h5>
                <p className="text-dark">
                  RightTime’s security experts conduct real-world attacks to
                  determine your security weaknesses. Our extensive knowledge of
                  the most current attack vectors, along with our expertise
                  network types including on-premise Data Centers, Cloud or
                  Hybrid environments will provide the assurance and confidence
                  you need. This enables your team to concentrate on day-to-day
                  business rather than on the discovery of potential network
                  security risks
                </p>

                <h5 className="header pt-3">Phases of Penetration Testing </h5>
                <p className="text-dark">
                  Along with different regular benefits, Penetration Testing
                  does have some phases also that helps take a picture of the
                  current security posture and an opportunity to identify
                  potential breach points. Thus, there are a total of 10 phases
                  that also have different names as per their performance.
                </p>
              </div>
            </>
          )}

          <div className="row   text-center col-xs-6">
            {Offercard.map((card, index) => (
              <div key={index} className="  col-md-4 col-sm-6 rounded ">
                <div id="card-container">
                  <div className="text-center rounded" id="card3">
                    <div className="front face text-center pt-3">
                      <img
                        src="assets/images/services/cardicon/2.png"
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

          <h5 className="header pt-3 text-info">Why RightTime?</h5>

          <img width="100%" src="/assets/images/services/rtl.png" alt="" />

          {va === "va" && (
            <>
              <h5 className="header pt-3 text-info">
                Right Time Also Provides:
              </h5>
              <img
                width="100%"
                src="/assets/images/services/vartl.png"
                alt=""
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Offer;

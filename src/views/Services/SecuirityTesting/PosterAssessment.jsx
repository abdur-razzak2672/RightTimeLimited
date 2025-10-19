import React from "react";
import Carousel from "react-bootstrap/Carousel";

function PosterAssessment() {
  return (
    <div>
      <div>
        <div className="page-header">
          <div
            className="page-header__bg"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29kZSUyMHJldmlld3xlbnwwfHwwfHw%3D&w=1000&q=80'')`,
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
                <a href="{{ url('/services/security-assessment-testing') }}">
                  Poster Assessment
                </a>
              </li>
              <li>Cyber Security Poster Assessment</li>
            </ul>
            <h2 className="page-header__title">
              Cyber Security Poster Assessment
            </h2>
          </div>
        </div>
        <div className=" text-center service-topbar"></div>

        <section id="header" className=" pt-5 ">
          <div className="container">
            <div className="section-title">
              <h2 className="header text-center">
                Cyber Security Posture Review (CSPR)
              </h2>
              <h3 className="header text-center">
                Understand your current maturity, identify risks and provide
                recommendations
              </h3>

              <p className="">
                The Cyber Security Posture Review (CSPR) helps organisations
                understand their current maturity, identifying risks and
                providing recommendations mapped to the National Cyber Security
                Centre's 10 Steps to Cyber Security, which ensures they are
                operating an effective cyber security framework against the
                ever-evolving threat landscape.
              </p>
              {/* <img loading="lazy" decoding="async" className="" src="/assets/images/services/picture.png" alt="" /> */}
              <p>
                Through a combination of questionnaires, face-to-face
                interviews, and follow-ups we examine the organisation's
                maturity against each of these steps, identifying risks and
                providing contextualised, actionable recommendations. This
                approach ensures organisations have the foundations to defend
                against cyber security risks and to protect information relating
                to customers, employees, and business operations.{" "}
              </p>
            </div>
          </div>
        </section>

        <section id="header" className="section-padding--bottom  ">
          <div className="container">
            <div className="d-flex justify-content-center ">
              <div style={{ width: "50%" }}>
                <Carousel indicators={false}>
                  <Carousel.Item interval={1000}>
                    <img loading="lazy" decoding="async"
                      className="d-block w-100"
                      src="assets/images/background/6.png"
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      <h3>Secure Configuration</h3>
                      <p>
                        Apply security patches and ensure the secure
                        configuration of all systems is maintained.{" "}
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item interval={500}>
                    <img loading="lazy" decoding="async"
                      className="d-block   w-100"
                      src="assets/images/background/5.png"
                      alt="Second slide"
                    />
                    <Carousel.Caption>
                      <h3>User Education and Awareness</h3>
                      <p>
                        roduce user security policies covering acceptable and
                        secure use of your systems.{" "}
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img loading="lazy" decoding="async"
                      className="d-block w-100"
                      src="assets/images/background/7.png"
                      alt="Third slide"
                    />
                    <Carousel.Caption>
                      <h3>Manage User Privileges</h3>
                      <p>
                        Establish effective management processes and limit the
                        number of privileged accounts.{" "}
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>

            <h4 className="header mt-5">
              Why is it important to know your Cyber Security Posture?
            </h4>
            <p className="text-dark">
              {" "}
              Understanding your cyber security posture should be essential to
              any organisation because it helps you understand the level of
              security you have in place to protect against cyber threats. By
              knowing your cyber security posture, you can identify potential
              weaknesses or vulnerabilities that attackers could exploit and
              take steps to address them before an attack occurs.{" "}
            </p>
            <p className="text-dark">
              {" "}
              Having a strong cyber security posture also helps build confidence
              among customers, partners, and stakeholders that you are taking
              their data privacy and security seriously. This can help protect
              your reputation and reduce the risk of costly data breaches or
              legal liabilities. In addition, knowing your cyber security
              posture can help you comply with industry regulations and
              standards, such as GDPR or HIPAA, that require organisations to
              have appropriate security measures in place to protect sensitive
              data.{" "}
            </p>
            <p className="text-dark">
              Overall, understanding your cyber security posture is critical for
              protecting your organisation against cyber threats, maintaining
              customer trust, and complying with regulatory requirements.
            </p>

            <h4 className="header mt-5">The CCS Approach</h4>
            <p className="text-dark">
              {" "}
              We first work with you to understand your business services and
              assets and, importantly, how you interact with customers and third
              parties. Then we walk you through the 10 Steps to Cyber Security,
              ensuring you understand the scope of each and are able to identify
              the appropriate stakeholders for initial questionnaires and
              interviews.{" "}
            </p>
            <p className="text-dark">
              {" "}
              At this time, we will agree with you the artefacts that are
              required to support the review. Through the review of completed
              questionnaires and artefacts, and the subsequent stakeholder
              interviews, we are able to assess your capability against the 10
              Steps to Cyber Security. The organisation's maturity level will
              then be determined by reference to a Capability Maturity Model
              (CMM) based on an industry standard methodology, which will
              provide you with a maturity score between 0-5, where O is
              non-existent and 5 is optimised.{" "}
            </p>
            <p className="text-dark">
              Finally our findings are then formalised in a written report. The
              report will provide you with a CMM score, recommendations against
              the 10 Steps to Cyber Security, and will prioritise our
              recommendations in order to fast-track your maturity. You also
              have the option to add the Cyber Security Roadmap (CSR) to
              identify the delivery timeline and priorities, against identified
              risks from the CSPR
            </p>

            <h4 className="header mt-5">
              National Cyber Security Centre's (NCSC) 10 Steps to Cyber Security
            </h4>

            <h6 className="header mt-4">1. Risk Management Regime</h6>
            <p className="text-dark">
              Assess the risk to your organisation's information and systems
              with the same vigour that would be used for legal, regulatory,
              financial and operational risks. To achieve this, there needs to
              be a Risk Management Regime embedded across the organisation,
              supported by the Board and senior managers.
            </p>

            <h6 className="header mt-2">2. Secure Configuration</h6>
            <p className="text-dark">
              Apply security patches and ensure the secure configuration of all
              systems is maintained. In addition, create a system inventory and
              define a baseline build for all devices.
            </p>

            <h6 className="header mt-2">3. Network Security </h6>
            <p className="text-dark">
              {" "}
              Protect your network from attack. Defend the network perimeter,
              filter out unauthorised access and malicious content. Monitor and
              test security controls.{" "}
            </p>
            <h6 className="header mt-2">4. Manage User Privileges </h6>
            <p className="text-dark">
              {" "}
              Establish effective management processes and limit the number of
              privileged accounts. Limit user privileges and monitor user
              activity. Control access to user activity and audit tags.
            </p>
            <h6 className="header mt-2">5.User Education and Awareness </h6>
            <p className="text-dark">
              {" "}
              Produce user security policies covering acceptable and secure use
              of your systems. Include in the staff training. Maintain awareness
              of cyber risks.{" "}
            </p>
            <h6 className="header mt-2">6. Incident Response </h6>
            <p className="text-dark">
              {" "}
              Establish an incident response and disaster recovery capability.
              Test your incident management plans. Provide specialist training.
              Report criminal incidents to law enforcement
            </p>
            <h6 className="header mt-2">7. Malware Protection </h6>
            <p className="text-dark">
              Produce relevant policies and establish anti-malware defence
              across the organisation.{" "}
            </p>
            <h6 className="header mt-2">8. Monitoring </h6>
            <p className="text-dark">
              Establish a monitoring strategy and produce supporting policies.
              Continuously monitor all systems and networks. Analyse logs for
              unusual activity that could indicate an attack.{" "}
            </p>
            <h6 className="header mt-2">9.Removable Media Controls </h6>
            <p className="text-dark">
              {" "}
              Produce a policy to control all access to removable media. Limit
              media types and use. Scan all media for malware before importing
              onto the corporate system.{" "}
            </p>

            <h6 className="header mt-2">10. Home & Mobile Working </h6>
            <p className="text-dark">
              {" "}
              Develop a mobile working policy and train staff to adhere to it.
              Apply the secure baseline and build to all devices. Protect data
              both in transit and at rest.{" "}
            </p>

            <div className="d-flex justify-content-center mt-5 ">
              <div style={{ width: "50%" }}>
                <Carousel indicators={false}>
                  <Carousel.Item interval={1000}>
                    <img loading="lazy" decoding="async"
                      className="d-block w-100"
                      src="assets/images/background/3.png"
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      <h3>Risk Management Regime</h3>
                      <p>
                        Assess the risk to your organisation's information and
                        systems with the same vigour that would be used for
                        legal
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item interval={500}>
                    <img loading="lazy" decoding="async"
                      className="d-block   w-100"
                      src="assets/images/background/1.png"
                      alt="Second slide"
                    />
                    <Carousel.Caption>
                      <h3>Removable Media Controls</h3>
                      <p>
                        Produce a policy to control all access to removable
                        media.{" "}
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img loading="lazy" decoding="async"
                      className="d-block w-100"
                      src="assets/images/background/4.jpeg"
                      alt="Third slide"
                    />
                    <Carousel.Caption>
                      <h3>Secure Configuration</h3>
                      <p>
                        Apply security patches and ensure the secure
                        configuration of all systems is maintained.{" "}
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </div>
        </section>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}

export default PosterAssessment;

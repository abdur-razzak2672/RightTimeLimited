import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Services() {
  return (
    <div>
      <div className="page-header">
        <div
          className="page-header__bg"
          style={{
            backgroundImage: `url('/assets/images/resources/contact.webp')`,
          }}
        ></div>

        <div style={{ backgroundColor: "gray", marginTop: "-150px" }}>
          <div className="container">
            <Link to="/cyber-services" className="text-light mx-3">
              Services
            </Link>
            <Link to="/cyber-defense-services" className="text-light mx-3">
              Cyber defense services{" "}
            </Link>
            <Link to="/cyber-defense-center" className="text-light mx-3">
              Cyber Defense center
            </Link>
          </div>
        </div>
      </div>

      <section className="d-flex  justify-content-center">
        <div className=" p-5 w-75 ">
          <h2 className="header text-center ">Our Offer</h2>
          <p className="mt-3">
            Right Time Limited is a leading Swiss expert for comprehensive cyber
            security, cyber defence and innovative network solutions. Our
            customers benefit from our broad experience in architecture,
            auditing, consulting and project management as well as in the
            operation and support of complex corporate networks. We provide
            state-of-the-art cloud, managed and SOC services from the ISO 27001
            certified and ISAE 3000 Type 2 audited Right Time Limited Cyber
            Defence Center in Switzerland. In order to be able to offer
            customers comprehensive network and ICT security solutions, we use
            leading products from selected manufacturers.{" "}
          </p>

          <div>
            <h3 className="header   mt-5 text-center">
              Our Cyber Secuirity Portfolio
            </h3>
            <Row>
              <Col className="mt-5" md={4}>
                <div
                  className="p-3 CyberHover"
                  style={{ backgroundColor: "#f1f2f2" }}
                >
                  <Link style={{ width: "95%" }} to="/cyber-defense-services">
                    <h6 className="header text-center ">
                      CYBER DEFENCE SERVICES
                    </h6>
                    <p style={{ fontSize: "14px" }} className="text-black">
                      Nowadays, companies must assume that cyber attacks not
                      only take place, but are also successful. In our ISO 27001
                      certified and ISAE 3000 Type 2 audited Cyber Defence
                      Center in Switzerland, we combine first-class expertise
                      and sophisticated technologies with the many years of
                      experience of our security experts and threat analysts.
                    </p>
                  </Link>
                </div>
              </Col>
              <Col className="mt-5" md={4}>
                <div
                  className="p-3 CyberHover"
                  style={{ backgroundColor: "#f1f2f2" }}
                >
                  <Link style={{ width: "95%" }} to="/cyber-defense-services">
                    <h6 className="header text-center ">
                      {" "}
                      CLOUD & MANAGED SECURITY SERVICES
                    </h6>
                    <p style={{ fontSize: "14px" }} className="text-black">
                      RTL operates leading security systems as a cloud service
                      in redundant Swiss data centres. Customers benefit from
                      the highest security at ﬁxed costs without having to
                      operate your own security infrastructure. Our team of
                      experienced specialists monitors and supports clients'
                      security infrastructure 24x7 from our Right Time Limited
                      Security Operations Center{" "}
                    </p>
                  </Link>
                </div>
              </Col>

              <Col className="mt-5" md={4}>
                <div
                  className="p-3 CyberHover"
                  style={{ backgroundColor: "#f1f2f2" }}
                >
                  <Link style={{ width: "95%" }} to="/cyber-defense-services">
                    <h6 className="header text-center ">
                      {" "}
                      INCIDENT RESPONSE & RECOVERY SERVICES
                    </h6>
                    <p style={{ fontSize: "14px" }} className="text-black">
                      Should a cyberattack be successful, our Computer Security
                      Incident Response Team (CSIRT) will support immediately.
                      Clients benefit from the expertise and experience of our
                      experts for offensive and defensive cyber security right
                      from the start. We also support in the clarification of
                      security incidents with forensic analyses and in the
                      reconstruction of infrastructures{" "}
                    </p>
                  </Link>
                </div>
              </Col>
            </Row>

            <Row>
              <Col className="mt-5" md={4}>
                <div
                  className="p-3 CyberHover"
                  style={{ backgroundColor: "#f1f2f2" }}
                >
                  <Link style={{ width: "95%" }} to="/cyber-defense-services">
                    <h6 className="header text-center ">
                      ICT SECURITY & NETWORK SOLUTIONS
                    </h6>
                    <p style={{ fontSize: "14px" }} className="text-black">
                      Efficient network and security infrastructures must
                      achieve the optimum of performance, security and costs.
                      Right Time Limited offers a complete portfolio of leading
                      security, network and cloud solutions for conventional,
                      virtualised, containerised and cloud infrastructures.For
                      this, we work with the best manufacturers in each
                      area.{" "}
                    </p>
                  </Link>
                </div>
              </Col>
              <Col className="mt-5" md={4}>
                <div
                  className="p-3 CyberHover"
                  style={{ backgroundColor: "#f1f2f2" }}
                >
                  <Link style={{ width: "95%" }} to="/cyber-defense-services">
                    <h6 className="header text-center ">
                      {" "}
                      PENETRATION TESTING & ATTACK SIMULATION
                    </h6>
                    <p style={{ fontSize: "14px" }} className="text-black">
                      Right Time Limited offers targeted security audits and
                      penetration tests to verify security processes, IT
                      infrastructures and employees. This provides an optimal
                      basis for the long-term increase of our clients'
                      information security and helps to identify, assess and
                      eliminate risks at an early stage.{" "}
                    </p>
                  </Link>
                </div>
              </Col>
              <Col className="mt-5" md={4}>
                <div
                  className="p-3 CyberHover"
                  style={{ backgroundColor: "#f1f2f2" }}
                >
                  <Link style={{ width: "95%" }} to="/cyber-defense-services">
                    <h6 className="header text-center ">
                      {" "}
                      SECURITY CONSULTING SERVICES
                    </h6>
                    <p style={{ fontSize: "14px" }} className="text-black">
                      Whether cyber security, cyber risk resilience, governance,
                      risk & compliance, digitalisation or cloud: the growing
                      challenges can only be mastered with a holistic cyber
                      security strategy. Right Time Limited's modular range of
                      services takes equal account of technologies, processes
                      and employees.{" "}
                    </p>
                  </Link>
                </div>
              </Col>
            </Row>
          </div>

          <div>
            <h3 className="header   mt-5 text-center">We Are Happy To Help</h3>
            <p>
              Complete the form to talk with one of our security experts and
              learn how our security services can help you and your
              organization.
            </p>

            <Row>
              <Col className="mt-3" md={6}>
                <div
                  style={{
                    backgroundColor: "#f6f6f6",
                    border: "1px solid lightgray",
                    borderRadius: "12px",
                  }}
                  className="input-container px-3 "
                >
                  <i className="fa fa-user text-dark "></i>
                  <select
                    style={{
                      width: "95%",
                      border: "none",
                      outline: "none",
                      backgroundColor: "#f6f6f6",
                      height: "50px",
                    }}
                  >
                    <option value="volvo">Solution</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                  </select>
                </div>
              </Col>

              <Col className="mt-3" md={6}>
                <div
                  style={{
                    backgroundColor: "#f6f6f6",
                    border: "1px solid lightgray",
                    borderRadius: "12px",
                  }}
                  className="input-container px-3 "
                >
                  <i className="fa fa-user text-dark "></i>
                  <input
                    style={{ width: "95%" }}
                    type="text"
                    placeholder="email"
                    name="username"
                  />
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="mt-3" md={6}>
                <div
                  style={{
                    backgroundColor: "#f6f6f6",
                    border: "1px solid lightgray",
                    borderRadius: "12px",
                  }}
                  className="input-container px-3 mt-3"
                >
                  <i className="fa fa-user text-dark "></i>
                  <input
                    style={{ width: "95%" }}
                    type="text"
                    placeholder="First Name"
                    name="firstname"
                  />
                </div>
              </Col>
              <Col className="mt-3" md={6}>
                <div
                  style={{
                    backgroundColor: "#f6f6f6",
                    border: "1px solid lightgray",
                    borderRadius: "12px",
                  }}
                  className="input-container px-3 mt-3"
                >
                  <i className="fa fa-user text-dark "></i>
                  <input
                    style={{ width: "95%" }}
                    type="text"
                    placeholder="Last Name"
                    name="firstname"
                  />
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="mt-3" md={6}>
                <div
                  style={{
                    backgroundColor: "#f6f6f6",
                    border: "1px solid lightgray",
                    borderRadius: "12px",
                  }}
                  className="input-container px-3 mt-3"
                >
                  <i className="fa fa-phone text-dark "></i>
                  <input
                    style={{ width: "95%" }}
                    type="text"
                    placeholder="phone"
                    name="firstname"
                  />
                </div>
              </Col>
              <Col className="mt-3" md={6}>
                <div
                  style={{
                    backgroundColor: "#f6f6f6",
                    border: "1px solid lightgray",
                    borderRadius: "12px",
                  }}
                  className="input-container px-3 mt-3"
                >
                  <i className="fa fa-user text-dark "></i>
                  <input
                    style={{ width: "95%" }}
                    type="text"
                    placeholder="Job Title"
                    name="firstname"
                  />
                </div>
              </Col>
            </Row>

            <Row>
              <Col className="mt-3" md={6}>
                <div
                  style={{
                    backgroundColor: "#f6f6f6",
                    border: "1px solid lightgray",
                    borderRadius: "12px",
                  }}
                  className="input-container px-3 mt-3"
                >
                  <i className="fa fa-globe  text-dark "></i>
                  <input
                    style={{ width: "95%" }}
                    type="text"
                    placeholder="Company"
                    name="firstname"
                  />
                </div>
              </Col>
              <Col className="mt-3" md={6}>
                <div
                  style={{
                    backgroundColor: "#f6f6f6",
                    border: "1px solid lightgray",
                    borderRadius: "12px",
                  }}
                  className="input-container px-3 mt-3"
                >
                  <i className="fa fa-user text-dark "></i>
                  <select
                    style={{
                      width: "95%",
                      border: "none",
                      outline: "none",
                      backgroundColor: "#f6f6f6",
                      height: "50px",
                    }}
                  >
                    <option value="volvo">Number Of Employees</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                  </select>
                </div>
              </Col>
            </Row>

            <Row>
              <Col className="mt-3" md={6}>
                <div
                  style={{
                    backgroundColor: "#f6f6f6",
                    border: "1px solid lightgray",
                    borderRadius: "12px",
                  }}
                  className="input-container px-3 mt-3"
                >
                  <i className="fa fa-user text-dark "></i>
                  <select
                    style={{
                      width: "95%",
                      border: "none",
                      outline: "none",
                      backgroundColor: "#f6f6f6",
                      height: "50px",
                    }}
                  >
                    <option value="volvo">Reason For Contact request</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                  </select>
                </div>
              </Col>
              <Col className="mt-3" md={6}>
                <div
                  style={{
                    backgroundColor: "#f6f6f6",
                    border: "1px solid lightgray",
                    borderRadius: "12px",
                  }}
                  className="input-container px-3 mt-3"
                >
                  <i className="fa fa-user text-dark "></i>
                  <select
                    style={{
                      width: "95%",
                      border: "none",
                      outline: "none",
                      backgroundColor: "#f6f6f6",
                      height: "50px",
                    }}
                  >
                    <option value="volvo">Contact request</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                  </select>
                </div>
              </Col>
            </Row>

            <Row>
              <Col className="mt-3" md={12}>
                <div
                  style={{
                    backgroundColor: "#f6f6f6",
                    border: "1px solid lightgray",
                    borderRadius: "12px",
                  }}
                  className="input-container px-3 mt-3"
                >
                  <textarea
                    style={{
                      width: "100%",
                      border: "none",
                      outline: "none",
                      backgroundColor: "#f6f6f6",
                      height: "100px",
                    }}
                    type="textarea"
                    placeholder="message"
                    name="firstname"
                  />
                </div>
              </Col>
            </Row>
            <p style={{ fontSize: "12px" }}>
              Right Time Limited is committed to protecting and respecting your
              privacy. We use your personal information only to administer your
              account, to provide the information you request, and for e-mail
              notifications related to this request.
            </p>
            <div style={{ fontSize: "12px" }} className="">
              <input className="mx-3" type="radio" />I agree to receive
              dedicated e-mails from Right Time Limited based on this request.
            </div>
            <a href="/apply-job" className="  thm-btn cta-two__btn rounded-2">
              <span>Send Message </span>
            </a>
          </div>
          <h3 className="header mt-5 pt-5 text-center">
            OUR ICT-SECURITY & NETWORK PARTNERS
          </h3>
          <p className="text-center">
            In order to be able to offer our customers comprehensive security,
            network and cloud solutions, we selectively use leading products
            from selected manufacturers. Our customers benefit from our
            long-standing cooperation with partners and from the extensive
            know-how of our certified experts.
          </p>

          <img loading="lazy" decoding="async"
            alt="..."
            className="img-fluid"
            src="/assets/images/services/vapt.webp"
            width="100%"
          />

          <div></div>
        </div>
      </section>

      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default Services;

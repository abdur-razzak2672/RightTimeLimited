import React, { useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
const teamMembers = [
  {
    id: 0,
    name: "Sahaly Yasmin Bhuiyan",
    title: "Chairman",
    image: "/assets/images/team/ch1.jpeg",
    description: [
      `Ms. Sahaly Yasmin Bhuiyan comes with 13+ Years of wide-ranging and sound knowledge in the domain of Information System Security, Governance, Compliance, Enterprise as well as ICT Risk Management, PCI DSS Compliance Validation Services SWIFT Cyber Security Consultation and SWIFT CSP Assessment, Information System/Information Technology and Cyber Security Assessment/Auditing, etc.`,
      `Being a Security Auditor and Process Auditor, she earned a lot of real-world experience working with more than 450+ Companies across the globe. She collaborates with Strategic Teams, Leadership Teams, Management Teams, and Operations Teams. She understands the business challenges, organization goals, problems with execution, working methods, social variances, etc. She oversees the Quality Assurance Team and serves as a core security assessor in addition to serving as the company’s Chairman.`,
      `Sahaly has certifications in PCI QSA, PCIP, CDCP, Lead Auditor - ISO 9001(QMS), ITIL, and SWIFT.`,
    ],
    cardClass: "Red",
  },
  {
    id: 1,
    name: "Lt Commander Mohammad Ali, PCGMS, BN (RTD)",
    title: "DIRECTOR, STRATEGIC PLANNING AND DEVELOPMENT",
    image: "/assets/images/team/ali1.jpeg",
    description: [
      `Lt Commander Mohammad Ali, PCGMS, BN (Rtd) has been serving as the Director of Strategic Planning & Development at Right Time Limited, a premier Cyber Security Service Provider, since January 2024. With an illustrious career spanning 28 years in the Bangladesh Navy, Coast Guard & other esteemed national and international organizations, he brings unparalleled expertise in Human Resource Management, Security Operations, and Strategic Planning.`,
      `Throughout his distinguished career, Mr. Ali has held pivotal roles such as Head of HR, Military Observer, Intelligence Officer, and Officer In charge IT, and Project Director (ERP), Project Director(CGRPMS) each underscoring his exceptional leadership, project management skills, and proficiency in implementing advanced security systems.`,
      `His academic credentials include an MBA in HRM, a BSc in Military Science, PGD in Business Communication & SCM and numerous professional certifications in security, project management, and military training.`,
    ],
    cardClass: "Purple",
  },
  {
    id: 2,
    name: "Md. Rokanuzzaman",
    title: "Chief Information Officer (CIO)",
    image: "/assets/images/team/Rokanuzzaman.jpeg",
    description: [
      `Rokanuzzaman is an experienced ICT Cyber Security Professional with over 25 years of experience. He is dedicated to developing effective cyber security strategies that minimize risks and ensure compliance with industry standards.`,
      `His expertise spans across various aspects of cyber security, including network security, vulnerability assessment, penetration testing, and incident response.`,
      `His key certifications include CISA, PMP, CEH, MCSE, MCDBA, and MCP. He holds a master's degree in Business Administration with PGD in ICT.With 12 years of experience in market operations and good administrative and managerial duties, he has a solid foundation in managing complex projects and leading teams. He is also proficient in developing comprehensive technical documentation covering regulatory, legal, and standard bodies. Additionally, he has over 10 years of experience in Management Information Systems (MIS), specializing in network analysis, design, implementation, and data migration in heterogeneous operating environments.`,
    ],
    cardClass: "Deep-Purple",
  },

  {
    id: 4,
    name: "Arshad Mahmud",
    title: "COO",
    image: "/assets/images/team/ar.jpeg",
    description: [
      `Arshad leads the worldwide service delivery lines, and modernizations through cutting-edge technology to achieve operational competence and World-Class service to customers.`,
      `He has wide-ranging experience in consultancy providing consulting Solutions to IT Enabled Services Organizations, Banks, BPO, KPO, and other industries.`,
      `His expertise in managed services, security testing, and IT Governance, Compliance, and Risk Management (GRC) is acknowledged on a global scale.`,
    ],
    cardClass: "Deep-Purple",
  },
  {
    id: 5,
    name: "Md. Shamim Al Mamun",
    title: "CHIEF TECHNOLOGY OFFICER (CTO)",
    image: "/assets/images/team/sm2.webp",
    description: [
      `Mamun has over 18 years of experience in various ICT roles across multiple organizations. His successful track record includes leading ICT projects in software, web, and mobile applications, as well as carrying out information systems audits, security assessments, and software quality assurance in various industries.`,
      `In addition, he has extensive experience in developing enforceable policies, including information security policies, business continuity policies, and technical documents. He has collaborated on local and international projects with teams from the Czech Republic, Norway, Japan, the Middle East, and the USA.`,
      `Mamun is a visionary, and divergent thinker. He is a CISA (Certified Information Systems Auditor), SWIFT Certified Professional, ACP (Acunetix Certified Professional), and MCP (Microsoft Certified Professional) certified individual.`,
    ],
    cardClass: "Indigo",
  },
  {
    id: 6,
    name: "Mohammed Ziaur Rahman Khan",
    title: "CHIEF FINANCIAL OFFICER (CFO)",
    image: "/assets/images/team/zia.jpeg",
    description: [
      `Zia’s 25-year career spans a wide range of financial and operational responsibilities with ITES companies globally. From small, domestically focused Cyber Security companies to international technology organizations, he has directly impacted financial performance and growth as a member of the C-Suite.`,
      `Zia has managed global teams across Finance, Operations, and Administration. He has successfully led financial and strategic reforms, maintained relationships with lenders and investors, and contributed to long-term planning.`,
      `He has led diverse teams in Finance, Sales, Product, IT, HR, Legal, and more to reduce costs, increase revenue, and improve decision-making. He also has widespread blends and acquisition knowledge.`,
    ],
    cardClass: "Blue",
  },
];

function TopManagement() {
  const [selectedMember, setSelectedMember] = useState(null);

  const handleShow = (id) => setSelectedMember(id);
  const handleClose = () => setSelectedMember(null);

  return (
    <div>
      <section className="section-padding--top">
        <div className="container">
          <h3
            className="blog-card-one__title blog-details__title text-center"
            style={{ color: "#17224d" }}
          >
            Top Management
          </h3>

          <section style={{ paddingBottom: "80px" }} className="container">
            {/* Chairman Section - single centered article */}
            {teamMembers
              .filter((m) => m.title === "Chairman")
              .map((chairman) => (
                <Row
                  className="d-flex justify-content-center mb-5"
                  key={chairman.id}
                >
                  <Col md={4} sm={6} xs={12}>
                    <article
                      className={`material-card mt-5 ${chairman.cardClass}`}
                    >
                      <a
                        onClick={() => handleShow(chairman.id)}
                        href="#"
                        role="button"
                      >
                        <h2 className="h21 text-light">
                          <span>{chairman.name}</span>
                          <strong>
                            <i className="fa fa-fw fa-star"></i>{" "}
                            {chairman.title}
                          </strong>
                        </h2>
                      </a>
                      <div className="mc-content" style={{ height: "320px" }}>
                        <div className="img-container">
                          <img loading="lazy" decoding="async"
                            className="img-responsive"
                            src={chairman.image}
                            alt={chairman.name}
                          />
                        </div>
                        <div className="mc-description mt-3">
                          {chairman.title}
                        </div>
                      </div>
                      <a className="mc-btn-action">
                        <i className="fa fa-bars"></i>
                      </a>
                      <div className="mc-footer">
                        <a
                          href="/facebook"
                          className="fab fa-facebook-f"
                          style={iconStyle("#3b5998")}
                        ></a>
                        <a
                          href="/facebook"
                          className="fab fa-twitter"
                          style={iconStyle("#00acee")}
                        ></a>
                        <a
                          href="/facebook"
                          className="fab fa-linkedin"
                          style={iconStyle("#0A66C2")}
                        ></a>
                        <a
                          href="/facebook"
                          className="fab fa-instagram"
                          style={iconStyle("#e95950")}
                        ></a>
                      </div>
                    </article>
                  </Col>
                </Row>
              ))}

            {/* Other Team Members Section */}
            <Row className="d-flex justify-content-center mb-5">
              {teamMembers
                .filter((m) => m.title !== "Chairman")
                .map((member) => (
                  <Col md={4} sm={6} xs={12} key={member.id}>
                    <article
                      className={`material-card mt-5 ${member.cardClass}`}
                    >
                      <a
                        onClick={() => handleShow(member.id)}
                        href="#"
                        role="button"
                      >
                        <h2 className="h21 text-light">
                          <span>{member.name}</span>
                          <strong>
                            <i className="fa fa-fw fa-star"></i> {member.title}
                          </strong>
                        </h2>
                      </a>
                      <div className="mc-content" style={{ height: "320px" }}>
                        <div className="img-container">
                          <img loading="lazy" decoding="async"
                            className="img-responsive"
                            src={member.image}
                            alt={member.name}
                          />
                        </div>
                        <div className="mc-description mt-3">
                          {member.title}
                        </div>
                      </div>
                      <a className="mc-btn-action">
                        <i className="fa fa-bars"></i>
                      </a>
                      <div className="mc-footer">
                        <a
                          href="/facebook"
                          className="fab fa-facebook-f"
                          style={iconStyle("#3b5998")}
                        ></a>
                        <a
                          href="/facebook"
                          className="fab fa-twitter"
                          style={iconStyle("#00acee")}
                        ></a>
                        <a
                          href="/facebook"
                          className="fab fa-linkedin"
                          style={iconStyle("#0A66C2")}
                        ></a>
                        <a
                          href="/facebook"
                          className="fab fa-instagram"
                          style={iconStyle("#e95950")}
                        ></a>
                      </div>
                    </article>
                  </Col>
                ))}
            </Row>
          </section>
        </div>
      </section>

      {/* Dynamic Modal */}
      {selectedMember !== null && (
        <Modal size="lg" show onHide={handleClose}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body className="rounded-3">
            <h5 className="teamTitle">{teamMembers[selectedMember].name}</h5>
            <i style={{ fontSize: "40px" }} className="fab fa-linkedin"></i>

            <div>
              <img loading="lazy" decoding="async"
                src={teamMembers[selectedMember].image}
                alt={teamMembers[selectedMember].name}
                className="img-responsive float-end ms-3 mb-2"
                style={{
                  width: "200px",
                  maxWidth: "100%",
                  height: "auto",
                  borderRadius: "8px",
                }}
              />

              {teamMembers[selectedMember].description.map((para, idx) => (
                <p key={idx} className="teamDetails textJustify">
                  {para}
                </p>
              ))}
            </div>
          </Modal.Body>

          <Modal.Footer className="d-flex justify-content-end">
            <div className="text-end mt-4">
              <Button variant="secondary px-4" onClick={handleClose}>
                Back
              </Button>
            </div>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
}

const iconStyle = (bg) => ({
  backgroundColor: bg,
  paddingLeft: "15px",
  borderRadius: "15px",
  color: "#fff",
  padding: "8px 12px",
});

export default TopManagement;

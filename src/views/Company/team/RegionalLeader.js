import React, { useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";

function RegionalLeader() {
  const [showModal, setShowModal] = useState(null);

  const leaders = [
    {
      id: "rashed",
      name: "MR. RASHED SARWAR",
      position: "COUNTRY DIRECTOR RIGHT TIME LIMITED USA",
      image: "/assets/images/team/rashed.jpeg",
      colorClass: "Red",
      details: [
        "Rashed is in charge of managing and providing all business verticals for Right Time Limited to all customers in the US region.",
        "He has over 25+ years of experience conducting security assessments and providing consulting services to customers in Banking, Financial Services, and Insurance (BFSI), Payment Industry, and IT Service sector. He worked for numerous ITES organizations in different regions and countries. He was in charge of completing projects, including IT security vulnerability assessments, network and application penetration testing, organizational security implementation reviews, and regulatory compliance reviews.",
        "He is officially recognized for his work in ICT network and development.",
      ],
    },
    {
      id: "melinda",
      name: "MS. MELINDA S.",
      position: "COUNTRY DIRECTOR RIGHT TIME LIMITED GERMANY",
      image: "/assets/images/team/linda.webp",
      colorClass: "Pink",
      details: [
        "Miss Melinda has over 15 years of operational and decision-making management experience in cultivating and growing international organizations in the various verticals of Information technology enabled Services (ITES) organization. Her area of competence is in implementing information management systems into place in different ITES Organizations.",
        "Miss Melinda has extensive experience developing, inculcating, and implementing international standards for management systems and achieving operational excellence. She focuses on Systems, People, and Supervision to build high-performance teams that produce sustainable business outcomes.",
      ],
    },
    {
      id: "touhid",
      name: "DR. TOUHID BHUIYAN",
      position: "COUNTRY DIRECTOR RIGHT TIME LIMITED AUSTRALIA",
      image: "/assets/images/team/Photo1.jpeg",
      colorClass: "Purple",
      details: [
        "Dr. Touhid, with his 30+ years of experience in Multilayered Business Development, Sales, and Marketing of IT Software Solutions and Services Operational, Management to Leadership Levels, having worked with hundreds of Industry Giants and Consulting & Research Organizations, education sector.",
        'Dr. Touhid, Joined in "Right Time Limited as the Country Director, Australia. He is well known in Bangladesh Government and Private sector as Cyber Security, Cybercrime, and Computer Forensics Analyst. He has more than 30+ years of experience in Computer Network Security, Software Development and with a compact upbringing in Neural Networks, Artificial Intelligence, and Software Development.',
        "He has also proven track-records in Research & Development (R&D), His expertise is in Ethical Hacking (Black Box, Gray Box & White Box Penetration Testing), Reverse Engineering in ITES Applications, Network Security Audits, and Software Development. He already had provided security assessments, design, and operational assistance for Mission as well as Business-Critical IT infrastructure for many Domestic and MNC Companies. He worked as a National Cyber Security Consultant – to secure the selected Government online portal, collaborated by UNDP, a2i – ICT Division of Bangladesh Government.",
        "Mr. Touhid did his PhD in Information Security, 2011, Queensland University of Technology, Australia, MSc in Computer Science, 2003, The American University in London, U.K and BSc (Hons) in Computing & Information Systems, 1997, University of London, U.K and Advanced Diploma of Cyber Security, Holmesglen TAFE, Australia, 2021. Besides, he is a qualified Information System auditor i.e. CISA by ISACA, CEH and ISO 27001 Lead Auditor. He has been a Cyber Security faculty for the last 15+ years and guest speaker (Cyber Security) at different universities in Bangladesh and abroad and to other Co-Op Banks for Cyber Security.",
      ],
    },
    {
      id: "rahim",
      name: "Rahim",
      position: "COUNTRY DIRECTOR RIGHT TIME LIMITED AUSTRALIA",
      image: "/assets/images/team/user.jpg",
      colorClass: "Purple",
      details: [
        "Rahim is in charge of all Business, operations, and technical activities, including management and provision of Right Time Limited services in Australia.",
        "Rahim has over 20 years of experience in the security and information technology industry.",
        "His knowledge includes performing and managing a variety of IT projects and Audits, Network Security Assessments, Network/Application Security and Architecture Design, and Information Security Technical documentation (Policy, Process, and Guidelines) development projects.",
        "He earned a PhD in Business Management systems from the University of XXX.",
      ],
    },
  ];

  const handleShow = (id) => setShowModal(id);
  const handleClose = () => setShowModal(null);

  return (
    <div>
      <section className="section-padding--top">
        <div className="container">
          <h3
            className="blog-card-one__title blog-details__title text-center"
            style={{ color: "#17224d", marginTop: "-100px" }}
          >
            Regional Leaders
          </h3>

          <div className="boddy1">
            <section style={{ paddingBottom: "80px" }} className="container">
              <div className="">
                <Row>
                  {leaders.map((leader) => (
                    <Col md={4} sm={6} xs={12} key={leader.id}>
                      <article
                        className={`material-card mt-5 ${leader.colorClass}`}
                      >
                        <a
                          onClick={() => handleShow(leader.id)}
                          href="javascript:void(0)"
                        >
                          <h2 className="h21 text-light">
                            <span>{leader.name}</span>
                            <strong>
                              {leader.id === "melinda" && (
                                <i className="fa fa-fw fa-star"></i>
                              )}
                              {leader.position}
                            </strong>
                          </h2>
                        </a>
                        <div className="mc-content" style={{ height: "320px" }}>
                          <div className="img-container">
                            <img loading="lazy" decoding="async"
                              className="img-responsive"
                              src={leader.image}
                              alt={leader.name}
                            />
                          </div>
                          <div className="mc-description mt-3">
                            <p>{leader.position}</p>
                          </div>
                        </div>
                        <a className="mc-btn-action">
                          <i className="fa fa-bars"></i>
                        </a>
                        <div className="mc-footer">
                          <a
                            href="/facebook"
                            style={{
                              backgroundColor: "#3b5998",
                              paddingLeft: "15px",
                              borderRadius: "15px",
                            }}
                            className="fab fa-facebook-f"
                          ></a>
                          <a
                            href="/facebook"
                            style={{
                              backgroundColor: "#00acee",
                              paddingLeft: "15px",
                              borderRadius: "15px",
                            }}
                            className="fab fa-twitter"
                          ></a>
                          <a
                            href="/facebook"
                            style={{
                              backgroundColor: "#0A66C2",
                              paddingLeft: "15px",
                              borderRadius: "15px",
                            }}
                            className="fab fa-linkedin"
                          ></a>
                          <a
                            href="/facebook"
                            style={{
                              backgroundColor: "#e95950",
                              paddingLeft: "15px",
                              borderRadius: "12px",
                            }}
                            className="fab fa-instagram"
                          ></a>
                        </div>
                      </article>
                    </Col>
                  ))}
                </Row>
              </div>
            </section>
          </div>
        </div>
      </section>

      {leaders.map((leader) => (
        <Modal
          key={leader.id}
          size="lg"
          show={showModal === leader.id}
          onHide={handleClose}
        >
          <Modal.Header closeButton>
            <Modal.Title className="teamTitle">{leader.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="rounded-3">
            <div className="position-relative">
              <div className="float-end ms-4 mb-3" style={{ width: "200px" }}>
                <img loading="lazy" decoding="async"
                  src={leader.image}
                  alt={leader.name}
                  className="img-fluid rounded"
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                  }}
                />
                <div className="text-center mt-2">
                  <i
                    style={{ fontSize: "30px" }}
                    className="fab fa-linkedin text-primary"
                  ></i>
                </div>
              </div>

              {leader.details.map((para, idx) => (
                <p key={idx} className="teamDetails text-justify mb-3">
                  {para}
                </p>
              ))}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary px-3" onClick={handleClose}>
              Back
            </Button>
          </Modal.Footer>
        </Modal>
      ))}

      <br />
      <br />
      <br />
    </div>
  );
}

export default RegionalLeader;

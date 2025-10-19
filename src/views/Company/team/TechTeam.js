import React, { useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";

function TechTeam() {
  const [showModal, setShowModal] = useState(null);

  const teamMembers = [
    {
      id: "tohid",
      name: "Mohammad Tohidur Rahman Bhuiyan",
      position: "Lead Security Practitioner and MD & CEO",
      image: "/assets/images/team/Mohammad Tohidur Rahman Bhuiyan.webp",
      colorClass: "Pink",
      details: [
        "Dr. Mohammad Tohidur Rahman Bhuiyan comes with 31+ Years of wide-ranging and adequate acumen in the domain of Information System Security, Governance, Compliance, Enterprise as well as ICT Risk Management, PCI DSS Compliance Validation Services SWIFT Cyber Security Consultation and SWIFT CSP Assessment, ITES Project Handling, Preparatory Consultation for various ISO/ BS Certification, Information System/Information Technology and Cyber Security Assessment/Auditing and Technical Documentation (end to end), etc.",
        "He is a visionary, and convergent thinker. Being a Security Auditor and Process Auditor, he earned a lot of real-world experience working with more than 600+ Companies across the globe. He collaborates with Leadership teams, Management teams, and Operations teams and understands the business challenges, organization goals , problems with execution , working methods, social variances, etc.",
        "Tohid has certifications in PCI QSA, PCIP, CISA, CGEIT, Lead Auditor (ISO 27001 & ISO 9001), BCP & DRP, A+, CDCP, ITIL, Cyber Security & Cyber Forensic, CEH, MCSD, PRINCE2, Acunetix (VA & PT Tools), CEI (Certified Instructor, EC-Council), SWIFT.",
      ],
      linkedin: "https://www.linkedin.com/in/righttime-tohid/",
    },
    {
      id: "nahar",
      name: "Kamrun Nahar",
      position: "QC & DOCUMENT WRITER",
      image: "/assets/images/team/kn.jpeg",
      colorClass: "Red",
      details: [
        "Nahar achieved adequate acumen in Quality Control and Document (Technical Document) Writing. having 16+ years of experience in Governance, Risk and Compliance profile in various industries like Banking, Information Technology, Telecom, Airlines, Support services etc.",
        "She is pioneer in providing quality services in Cyber Security, PCI DSS, GDPR, IT Risk, IT Audit, ISO27001, HIPAA, Business continuity, Sarbanes–Oxley Act, Disaster Recovery, Other Technology driven business operation.",
      ],
      certifications:
        "NAHAR HOLDS - SWIFT PRO, ITIL, LEAD AUDITOR- ISO 9001 (QMS), ACUNETIX PRO",
    },
    {
      id: "tinne",
      name: "Farzana Yeasmin Tinne",
      position: "SECURITY ANALYST",
      image: "/assets/images/team/tinni.jpeg",
      colorClass: "Pink",
      details: [
        "Farzana is an Information System Professional and her expertise is in Information System Security (specially VA & PT and IS/IT Audit), Compliance, Enterprise Risk Management, IT Enabled Project Handling, Coordination, Preparatory Consultation for various ISO/ BS Certification (e.g. ISO 27001, ISO 9001, ISO 22301 and ISO 20000 etc.), assurance (IS Auditing including Vulnerability assessment & Penetration Testing) etc.",
        "She holds Lead Auditor & Lead Implementer Certification on ISO 27001. Besides, she is a SWIFT enlisted Cyber security Consultant and SWIFT CSP Independent Assessor. She poses, CEH and ITIL certification as well.",
      ],
    },
    {
      id: "sazzad",
      name: "Md. Sazzad Hossain",
      position: "SECURITY ANALYST",
      image: "/assets/images/team/Sazzad-PP.jpeg",
      colorClass: "Deep-Purple",
      details: [
        "A passionate cyber security specialist, with a primary focus on Security Assessment including Vulnerability Assessment & Penetration Testing (VA & PT) and Red Teaming. He is a positive mind of i individual who is passionate about analyzing Security Infrastructure of ITES organizations and assisting client(s) for a reliable as well as secured environment.",
        "He is SWIFT enlisted Cyber Security Consultant and also enlisted SWIFT CSO Independent Assessor. Besides, he holds the Certified Ethical Hacker (CEH) certificate.",
      ],
    },
    {
      id: "sakim",
      name: "Md. Sakim Hossain",
      position: "SECURITY ANALYST",
      image: "/assets/images/team/Sakim.jpeg",
      colorClass: "Deep-Purple",
      details: [
        'As an Information System Security Analyst at "Right Time Limited" Information Security Services, he is dedicated to protecting our clients\' systems and data from cyber threats. With more than 3 years of experience, he has gained expertise in conducting vulnerability assessments, analyzing network traffic, and responding to security incidents.',
        "Collaborating with senior analysts, he plays a crucial role in developing and implementing effective security measures that mitigate risks and ensure compliance with industry standards. He is proficient in a range of security tools and technologies, such as Nessus, Nmap, and Wireshark, and keep himself updated on the latest trends and threats in the industry.",
        "In his quest for professional growth, he is pursuing relevant certifications such as ISMS, PCI DSS, LPT, OSCP, and Practical Hacking (ethical) to enhance his knowledge and skills. He thrives in fast-paced, challenging environments and is always eager to take on new responsibilities to contribute to the success of his team and clients. His passion for information security and commitment to continuous learning makes him, a valuable asset to our organization.",
      ],
    },
    {
      id: "kanak",
      name: "Rayhan Kanak",
      position: "SECURITY ANALYST",
      image: "/assets/images/team/kanak.jpeg",
      colorClass: "Purple",
      details: [
        "Rayhan is a dedicated individual who is engaged in protecting our clients' systems and data from potential threats. Having gained over 4 years of experience in the field of cyber security, he has honed his abilities in Vulnerability Assessment & Penetration Testing (VA & PT), SWIFT CSP Assessment, and the detection and response to security incidents.",
        "Working closely with senior analysts in his current position, he assists in designing and executing efficient security measures to avert cyber-attacks. His skillset includes proficiency in a range of security tools and technologies such as Nessus, Nmap, and Wireshark. Additionally, he kept himself updated with the latest industry trends and security threats.",
        "He is dedicated to continually improving his knowledge and abilities. He holds certifications in SWIFT Cyber Security Assessment & Consultation and Certified Ethical Hacker (CEH). Besides, he is pursuing further official recognition in CompTIA Security+ and IS/IT Security Assessment to strengthen his expertise. He thrives in a challenging, fast-paced environment and actively seeks out new opportunities to contribute to his team's and customers' success.",
      ],
    },
    {
      id: "razzak",
      name: "Md. Abdur Razzak",
      position: "SOFTWARE ENGINEER",
      image: "/assets/images/team/razzak1.jpeg",
      colorClass: "Deep-Purple",
      details: [
        "Abdur Razzak is a talented Software Engineer with expertise in full stack development using JavaScript frameworks such as React.js and Next.js, as well as Python frameworks like Django.",
        "As a full stack developer, Md. Abdur Razzak is proficient in both front-end and back-end development, allowing him to create dynamic and responsive web applications that are both user-friendly and highly functional.His skills in React.js and Next.js enable him to create modern and complex web applications with ease. He is able to build reusable components and optimize web applications for performance and speed.",
        "Additionally, Abdur Razzak's proficiency in Django allows him to build robust back-end systems that power the web applications he develops. He is able to create RESTful APIs, handle database management, and implement complex business logic.",
        "Overall, Abdur Razzak's skills as a full stack developer make him a valuable asset to any software development team. His ability to work with a variety of programming languages and frameworks makes him adaptable and versatile in his approach to development.",
      ],
      linkedin: "https://www.linkedin.com/in/abdur-razzak-b404a71b3",
    },
    {
      id: "sadrin",
      name: "Sadrin Rahman Bhuiyan Piya",
      position: "SECURITY ANALYST",
      image: "/assets/images/team/sd.jpeg",
      colorClass: "Deep-Purple",
      details: [
        "As a Junior ICT Security Analyst at Right Time Limited, sadrin Rahman Bhuiyan Piya has a passion for ensuring the confidentiality, integrity, and availability of its clients' systems and data. With 4 years+ of experience in the field, she has developed expertise in threat analysis, vulnerability assessment, and incident response.",
        "In her current role, she works closely with Senior Analysts to identify potential security risks and implement appropriate controls to prevent or mitigate attacks. She has experience in monitoring and analyzing network traffic, detecting and responding to security incidents, and conducting security assessments and audits.",
        "She is proficient in a variety of security tools and technologies, including Core Impact, Tenable, Burp Suite, using custom code/script, and stay up-to-date with the latest trends and threats in the industry. She is also committed to continuous learning and development, and is working towards obtaining relevant certifications such as cyber–Security Official Recognition i.e. SWIFT & PCI Professional.",
      ],
    },
    {
      id: "mahadi",
      name: "Md Mahadi Hasan Heart",
      position: "SECURITY ANALYST",
      image: "/assets/images/team/mehedi.webp",
      colorClass: "Deep-Purple",
      details: [
        'As a Security Analyst at "Right Time Limited" Information Security Services, Mahadi is passionate about safeguarding our clients\' systems and data. With 3+ years of experience in the field of cyber security, he has developed expertise in conducting vulnerability assessments, analyzing network traffic, and identifying and responding to security incidents.',
        "In his current role, He is working closely with senior analysts to develop and implement effective security measures to prevent cyber threats. He is proficient in a variety of security tools and technologies, including Nessus, Nmap, and Wireshark, and stay up-to-date with the latest trends and threats in the industry.",
        "He is committed to continuous learning and development, and besides being SWIFT Cyber Security professional, pursuing relevant certifications such as CompTIA Security+ and Practical Hacking (ethical) to further enhance his skills and knowledge. He thrives in a fast-paced, challenging environment, and is always eager to take on new responsibilities and contribute to the success of his team and clients.",
      ],
    },
  ];

  const handleShow = (id) => setShowModal(id);
  const handleClose = () => setShowModal(null);
  return (
    <div>
      <section className="">
        <div className="container">
          <h3
            className="blog-card-one__title blog-details__title text-center"
            style={{ color: "#17224d" }}
          >
            Tech Team
          </h3>

          <div className="bodys1">
            <section style={{ paddingBottom: "80px" }} className="container">
              <div className="">
                <Row>
                  {teamMembers.map((member) => (
                    <Col md={4} sm={6} xs={12} key={member.id}>
                      <article
                        className={`material-card mt-5 ${member.colorClass}`}
                      >
                        <a
                          onClick={() => handleShow(member.id)}
                          href="javascript:void(0)"
                        >
                          <h2 className="h21 text-light">
                            <span>{member.name}</span>
                            <strong>
                              {member.id === "tohid" && (
                                <i className="fa fa-fw fa-star"></i>
                              )}
                              {member.position}
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
                            <p>{member.position}</p>
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
                            href={member.linkedin || "/facebook"}
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

      {teamMembers.map((member) => (
        <Modal
          key={member.id}
          size="lg"
          show={showModal === member.id}
          onHide={handleClose}
        >
          <Modal.Header closeButton>
            <Modal.Title className="teamTitle">
              {member.name.toUpperCase()}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="rounded-3">
            <div className="position-relative">
              <div className="float-end ms-4 mb-3" style={{ width: "200px" }}>
                <img loading="lazy" decoding="async"
                  src={member.image}
                  alt={member.name}
                  className="img-fluid rounded"
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                  }}
                />
                {member.linkedin && (
                  <div className="text-center mt-2">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i
                        style={{ fontSize: "30px" }}
                        className="fab fa-linkedin text-primary"
                      ></i>
                    </a>
                  </div>
                )}
              </div>

              {member.details.map((para, idx) => (
                <p key={idx} className="teamDetails text-justify mb-3">
                  {para}
                </p>
              ))}
              {member.certifications && (
                <p className="teamDetails fw-bold">{member.certifications}</p>
              )}
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

export default TechTeam;

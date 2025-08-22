import React, { useState } from 'react';
import { Button, Col, Modal, Row } from 'react-bootstrap';
const teamMembers = [
  {
    id: 0,
    name: "M. Mosharraf Hossain, PhD, FCA, CISA, CISM",
    title: "Advisor, Finance & Accounts",
    company : 'Right Time Limited',
    image: "/assets/images/team/Mosharraf.jpeg",
    description: [
      `We are honored to welcome M. Mosharraf Hossain, PhD, FCA, CISA, CISM FCA to the Advisory Board of Right Time Limited as Advisor for the Financial Sector. A distinguished Chartered Accountant and Partner at PKF AHKC, Dr. Mosharraf brings over 31 years of multifaceted experience across the financial ecosystem, with deep-rooted expertise in the insurance and capital markets.`,
      `He has held leadership positions including CEO of two life insurance companies, COO of the largest life insurer in Bangladesh, and CEO of a prominent merchant bank. He has served as Independent Director and Chairman of Board Audit Committees of several listed companies.`,
      `He has consulted for the Asian Development Bank (ADB), the International Labour Organization (ILO), and was a valuer during the Chittagong Stock Exchange demutualization.`,
      `His presence strengthens our vision to align financial sector innovation with global standards.`
    ],
    cardClass: "Red",
  },

  {
    id: 1,
    name: "Md. Khurshid Alam (Former DG, Central Bank)",
    title: "Advisor, Strategic Planning & Dev",
    company : 'Right Time Limited',
    image: "/assets/images/team/khurshid.jpeg",
    description: [
      `Md. Khurshid Alam is the Chief Advisor at Right Time Limited, where he applies his extensive experience in central banking, regulatory policy, and sustainable finance to guide strategic governance and cybersecurity assurance across financial institutions.`,
      `He began his distinguished career at Bangladesh Bank in 1988, rising through roles in Banking Regulation & Policy, Banking Inspection, SME programs, CSR & Green Banking, and Debt Management, and later assuming regional leadership in Sylhet and Rangpur. Over a 35-year tenure, he led critical departments as Executive Director (2021–2024) and was appointed Deputy Governor in February 2024 (turn0search1)`,
      `A pioneer in eco-conscious banking, Mr. Alam founded the Sustainable Finance Department, introducing policies in green banking, CSR governance, financial inclusion, and environmental risk management. He also drove the integration of 111 former enclaves into Bangladesh's financial framework and spearheaded digital banking and green finance initiatives aimed at broad economic impact (turn0search2).`,
      `Internationally, he has represented Bangladesh Bank at major forums hosted by the IMF, ADB, World Bank, and the RBI, contributing to discourse on sustainable finance, central-bank digital platforms, and financial stability. He is academically accomplished with an MBA from Stamford University, B.Com and M.Com from the University of Dhaka, and is currently pursuing a PhD in Development Economics at Bangladesh University of Professionals, focusing on CSR's impact in Bangladesh’s banking sector.An influential policymaker, Mr. Alam has chaired key committees including Bond Market Development and Digital Banking Formation. His passion for mentorship and creative expression is evident: he has been a leader in internal associations, serves as a published poet, and continues to shape discourse on regulatory policy and digital financial strategy.`
    ],
    cardClass: "Deep-Purple",
  },
  {
    id: 2,
    name: "Munir Hasan",
    title: "Advisor, Information & Communication Technology",
    company : 'Right Time Limited',
    image: "/assets/images/team/munir.jpg",
    description: [
      `Munir Hasan is a distinguished figure in Bangladesh's Information and Communication Technology (ICT) landscape, renowned for his multifaceted roles as an inspirer, organizer, and non-fiction writer. He has played a pivotal role in the nation's digital transformation, serving as a co-founder for numerous impactful organizations such as BdMO, BdOSN, SPSB, and WMBD. As the Chief Coordinator of Digital Transformation and a Young Professionals Advisor for Information & Communication Technology, his influence is far-reaching and deeply embedded in both policy and practice.`,
      `Mr. Hasan’s expertise is particularly evident in his contributions to technology-related policy. He has been a key advocate in the drafting, facilitation, and implementation of critical national policies, including the National Broadband Policy-2009 and the ICT Rules 2010. His close collaboration with the Ministry of Science and ICT on regulatory and policy issues underscores his profound understanding of governance in the digital era.`,
      `A committed proponent of human resource development, Mr. Hasan has designed and conducted hundreds of training sessions, workshops, and seminars on topics ranging from technology and entrepreneurship to social media marketing. These capacity-building initiatives have been organized in partnership with esteemed international bodies like the UNDP and the World Bank, as well as national entities such as the Prime Minister’s Office and the Ministry of ICT. Furthermore, he has made significant contributions to the national education system, working as a member of the editorial board for ICT textbooks for grades six through eight and collaborating on the new mathematics curriculum.`,
      `His exceptional project management skills, from inception to completion, are complemented by a strong international presence. Mr. Hasan has represented Bangladesh at various global technology forums, including the WSIS Forum, International Mathematical Olympiad, COMSTEC, and Forum Asia, showcasing his strategic foresight on a global stage. His organizational capabilities have been recognized internationally, notably in a textbook published by Cambridge University Press in 2011.`,
      `As a respected thought leader and author, Mr. Hasan has contributed country reports to the Global Information Society Watch Report in 2009, 2010, and 2013, and has authored and edited several textbooks on Information and Communication Technology. His wealth of experience and profound commitment to fostering digital growth make him an invaluable advisor to Right Time Limited, aligning perfectly with the company's mission to advance information security and ICT services.`
    ],
    cardClass: "Pink",
  }
];


function AdvisoryBoard() {
  const [selectedMember, setSelectedMember] = useState(null);

  const handleShow = (id) => setSelectedMember(id);
  const handleClose = () => setSelectedMember(null);

  return (
    <div>

      <div className="page-header">
        <div
          className="page-header__bg"
          style={{ backgroundImage: "url('../images/resources/aboutbg1.png')" }}
        ></div>
        <div className="container">
          <ul className="thm-breadcrumb list-unstyled">
            <li><a href="/">Home</a></li>
            <li>Advisory Board</li>
          </ul>
          <h2 className="page-header__title">Member Of Advisory Board</h2>
        </div>
      </div>
      <section className="section-padding--top">
        <div className="container">
          <h3 className="blog-card-one__title blog-details__title text-center" style={{ color: "#17224d" }}>
            Member Of Advisory Board
          </h3>

          <section style={{ paddingBottom: "80px" }} className="container">



            {/* Other Team Members Section */}
            <Row className="d-flex justify-content-center mb-5">
              {teamMembers.map((member) => (
                <Col md={4} sm={6} xs={12} key={member.id}>
                  <article className={`material-card mt-5 ${member.cardClass}`}>
                    <a onClick={() => handleShow(member.id)} href="#" role="button">
                      <h2 className="h21 text-light">
                        <span style={{fontSize:'14px',fontWeight:'bold'}}>{member.name}</span>
                        <strong style={{fontSize:'13px',fontWeight:'bold',lineHeight:'1.8'}}>
                          <i className="fa fa-fw fa-star"></i> {member.title} <span>{member.company}</span>
                        </strong>
                      </h2>
                    </a>
                    <div className="mc-content" style={{ height: "320px" }}>
                      <div className="img-container">
                        <img className="img-responsive" src={member.image} alt={member.name} />
                      </div>
                      <div className="mc-description mt-3">{member.title}</div>
                    </div>
                    <a className="mc-btn-action">
                      <i className="fa fa-bars"></i>
                    </a>
                    <div className="mc-footer">
                      <a href="/facebook" className="fab fa-facebook-f" style={iconStyle("#3b5998")}></a>
                      <a href="/facebook" className="fab fa-twitter" style={iconStyle("#00acee")}></a>
                      <a href="/facebook" className="fab fa-linkedin" style={iconStyle("#0A66C2")}></a>
                      <a href="/facebook" className="fab fa-instagram" style={iconStyle("#e95950")}></a>
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
              <img
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
      <br /><br /> </div>
  );
}

const iconStyle = (bg) => ({
  backgroundColor: bg,
  paddingLeft: "15px",
  borderRadius: "15px",
  color: "#fff",
  padding: "8px 12px",
});

export default AdvisoryBoard;


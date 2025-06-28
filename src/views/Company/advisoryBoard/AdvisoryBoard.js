import React, { useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";

function AdvisoryBoard() {
    const [showModal, setShowModal] = useState(false);

    const handleShow = (e) => {
        e.preventDefault();
        setShowModal(true);
    };

    const handleClose = () => setShowModal(false);

    const advisor = {
        name: "DR. M. MOSHARRAF HOSSAIN FCA, PH.D",
        title: "Advisor, Financial Sector | Advisory Board Member, Right Time Limited",
        image: "/assets/images/team/Mosharraf.jpeg",
        linkedin: true,
    };

    return (
        <div>
            {/* Header */}
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

            {/* Advisory Section */}
            <section className="section-padding--top text-center">
                <div className="container">
                    <h3
                        className="blog-card-one__title blog-details__title text-center"
                        style={{ color: "#17224d" }}
                    >
                        Member Of Advisory Board
                    </h3>

                    <Row className="justify-content-center py-4">
                        <Col lg={4} md={6} sm={12}>
                            <article className="material-card mt-5 Purple" style={{ maxWidth: 450, height: 330 }}>
                                <a href="#" onClick={handleShow} role="button">
                                    <h2 className="h21 text-light">
                                        <span>{advisor.name}</span>
                                        <strong>
                                            <i className="fa fa-fw fa-star"></i> {advisor.title}
                                        </strong>
                                    </h2>
                                </a>
                                <div className="mc-content" style={{ height: 320 }}>
                                    <div className="img-container">
                                        <img className="img-responsive w-100" src={advisor.image} alt={advisor.name} />
                                    </div>
                                    <div className="mc-description mt-3">{advisor.title}</div>
                                </div>
                                <a className="mc-btn-action"><i className="fa fa-bars"></i></a>
                                <div className="mc-footer d-flex justify-content-around py-2">
                                    <a href="/facebook" className="fab fa-facebook-f" style={iconStyle("#3b5998")}></a>
                                    <a href="/twitter" className="fab fa-twitter" style={iconStyle("#00acee")}></a>
                                    <a href="/linkedin" className="fab fa-linkedin" style={iconStyle("#0A66C2")}></a>
                                    <a href="/instagram" className="fab fa-instagram" style={iconStyle("#e95950")}></a>
                                </div>
                            </article>
                        </Col>
                    </Row>
                </div>
            </section>

            <Modal size="lg" show={showModal} onHide={handleClose}>
                {/* Top-right X button */}
                <Modal.Header closeButton></Modal.Header>

                <Modal.Body className="rounded-3">
                    <h5 className="teamTitle">{advisor.name}</h5>
                    {advisor.linkedin && (
                        <i className="fab fa-linkedin" style={{ fontSize: 40 }}></i>
                    )}
                    <Row>
                        <Col md={8}>
                            <p className="teamDetails textJustify">
                                We are honored to welcome Dr. M. Mosharraf Hossain FCA to the Advisory Board of Right Time Limited as Advisor for the Financial Sector. A distinguished Chartered Accountant and Partner at PKF AHKC, Dr. Mosharraf brings over 31 years of multifaceted experience across the financial ecosystem, with deep-rooted expertise in the insurance and capital markets.
                            </p>
                            <p>
                                He has held leadership positions including CEO of two life insurance companies, COO of the largest life insurer in Bangladesh, and CEO of a prominent merchant bank. He has served as Independent Director and Chairman of Board Audit Committees of several listed companies.
                            </p>
                            <p>
                                He has consulted for the Asian Development Bank (ADB), the International Labour Organization (ILO), and was a valuer during the Chittagong Stock Exchange demutualization.
                            </p>
                            
                        </Col>
                        <Col md={4}>
                            <img className="img-fluid" src={advisor.image} alt={advisor.name} />
                        </Col>

                        <Col>
                         <p>
                                His presence strengthens our vision to align financial sector innovation with global standards.
                            </p>
                        </Col>
                    </Row>
                </Modal.Body>

                {/* Bottom-right Close button */}
                <Modal.Footer className="d-flex justify-content-end">
                    <button className ="btn btn-warning text-light px-3" onClick={handleClose}>
                        Back
                    </button>
                </Modal.Footer>
            </Modal>
            <br /> <br /><br /><br /><br />
        </div>
    );
}

// Helper for social icon styles
const iconStyle = (bg) => ({
    backgroundColor: bg,
    paddingLeft: "15px",
    borderRadius: "15px",
    color: "#fff",
    padding: "8px 12px",
});

export default AdvisoryBoard;

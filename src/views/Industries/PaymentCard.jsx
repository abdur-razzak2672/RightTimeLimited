import React, { useState } from "react";
import IndustriesNav from "./IndustriesNav";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
function PaymentCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <div className="page-header">
        <div
          className="page-header__bg"
          style={{
            backgroundImage: `url('assets/images/background/bank.png')`,
          }}
        ></div>

        <div className="container">
          <ul className="thm-breadcrumb list-unstyled">
            <li>
              <a href="/">Home</a>
            </li>
            <li> Payment Gateways and Payment Processor</li>
          </ul>
          <h2 className="page-header__title">
            {" "}
            Payment Gateways and Payment Processor
          </h2>
        </div>
      </div>

      <section className="section-padding--bottom section-padding--top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="sidebar">
                <div className=" ">
                  <IndustriesNav title="payment" />
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <h3
                className="blog-card-one__title blog-details__title"
                style={{ color: "orange" }}
              >
                {" "}
                Payment Gateways and Payment Processor
              </h3>
              <div className="blog-details__content">
                <p>
                  Companies who are all involved in any kind of Payment
                  Transactions through Credit and/or Debit cards either
                  electronically/physically or any other channels open
                  themselves up to cybercrime risks. Malicious Attackers always
                  target such highly confidential and sensitive information
                  (CHD/SAD) for direct theft and fraud. If your company is part
                  of the Payment ecosystem as a Merchant, Processors, or
                  providing any services to these companies can also fall victim
                  to these kinds of cyberattacks. To mitigate these risks, the
                  Security Standards Council (SSC) of the Payment Card Industry
                  (PCI), USA has formulated numerous controls across several
                  security standards to keep companies and consumers
                  protected.{" "}
                </p>

                <p>
                  One of such highly praised security standards is PCI DSS. The
                  Payment Card Industry Data Security Standard (PCI DSS) is a
                  widely accepted global standard recommended by the major Card
                  brands like Visa, Mastercard, JCB, American Express,
                  Discovery. PCI DSS standard consists of a set of policies and
                  procedures intended to optimize the security of credit, debit
                  and cash card transactions and protect cardholders against
                  misuse of their personal information.{" "}
                </p>
                <p>
                  PCI DSS applies to all entities involved in payment card
                  transactions —including merchants, processors, acquirers,
                  issuers, and service providers, as well as all other entities
                  that store, process or transmit cardholder data (CHD) and/or
                  sensitive authentication data (SAD).
                </p>

                <p>
                  Majorly all payment card brands enforcing PCI DSS Compliance
                  at minimum annual basis as per the Levels determined by the
                  various security programs. Organization needs to Implement 12
                  core requirements (functional) spread across 6 Control
                  Objectives from PCI DSS Standard to ensure their Cardholder
                  Data Environment is secured.
                </p>
                <p>
                  Merchants and Service Providers can report their PCI DSS
                  Compliance either Filling applicable the Self-Assessment
                  Questionnaire (SAQ’s) or Onsite Assessment by a Qualified
                  Security Assessor as per their Levels.
                </p>
                <p>
                  PCI DSS 4.0 is the latest version introduced by the PCI
                  Council on 31st March 2022. All entities get two years’ time
                  for the transition from 3.2.1 to 4.0 i.e., March 2024 if they
                  are already certified for PCI DSS 3.2.1
                </p>

                <h4 className="mt-3" style={{ color: "orange" }}>
                  Why Choose Right Time Limited?
                </h4>
                <p>
                  Righttime has started its journey as PCI SSC, USA enlisted PCI
                  QSA firm since 2013 and conducted numbers of preparatory
                  consultation and certification audit for FIs (Banking and
                  Non-Banking FI), PSO (Payment Service Operator), Payment
                  Service Provider (PSP) etc. We have number of QSAs to support
                  the given assignment successfully within a given time frame.
                </p>
              </div>
              <br />
              <a href="contact-us">
                {" "}
                <Button style={{ backgroundColor: "#fd7e14" }}>
                  Contact Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body className="bg-dark rounded-3">
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="text-light">Name</Form.Label>
              <Form.Control type="input" placeholder="name" autoFocus />
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
              <Form.Label>Subject</Form.Label>
              <Form.Control type="input" placeholder="subject" autoFocus />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Details</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
          <Modal.Footer className="bg-dark">
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button
              style={{ backgroundColor: "#fd7e14" }}
              onClick={handleClose}
            >
              Submit
            </Button>
          </Modal.Footer>
        </Modal.Body>
      </Modal>
      <br />
      <br />
      <br />
    </div>
  );
}

export default PaymentCard;

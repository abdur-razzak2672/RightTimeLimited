import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
function LeanConsultation() {
  const [tabIndex, setTabIndex] = useState(1);

  return (
    <div>
      <div className="page-header ">
        <div
          className="page-header__bg"
          style={{
            backgroundImage: `url('/assets/images/background/con.png')`,
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
            <li> Lean Consultation</li>
          </ul>
          <h2 className="page-header__title"> Lean Consultation</h2>
        </div>
      </div>
      <section id="header" className="section-padding--bottom pt-5 ">
        <div className="container">
          <Row>
            <Col md={6}>
              <h2 className="header ">Lean Consultation</h2>
              <p className="text-dark">
                If you want to change outcomes, you need to realise that
                outcomes are the result of the systems. But, it is not about the
                computer systems, but the way people think, work together and
                interact. And these systems are the product of how people think
                and behave. So, if you want to change outcomes, you have to
                change your systems, and to do that, you have to change your
                thinking. Lean thinking is not about asset stripping and ‘making
                do’ but focusing on doing the right things right so that you
                really do add value for the customer and make your organization
                effective and efficient. So, Lean is a management philosophy
                (mind set) about how to deal with the situation.
              </p>
            </Col>

            <Col md={6}>
              <img
                className="d-block w-100"
                src="/assets/images/services/Lean.jpg"
                alt="First slide"
              />
            </Col>

            <p className="text-dark">
              Our Lean experts help you to understand Lean concept in a detailed
              manner and provide all of the vital ingredients needed to
              successfully deploy Lean throughout the organization through
              setting the expectation of organization’s leadership team and link
              their approach to the strategy and business plans by selecting the
              right projects and ensuring they are appropriately scoped as an
              essential aspect of getting things started on the right foot and
              addressing the ‘soft issues’ to get the organizational culture
              right.
            </p>

            <p>
              {" "}
              Our consultants focus on enhancing value for the customer by
              improving and smoothing the process flow and eliminating waste by
              taking approach about understanding how the work gets done,
              finding ways of doing it better, smoother and faster, and closing
              the time gap between the start and end points of processes of our
              clients whether public or private sector, in service,
              transactional or manufacturing processes.{" "}
            </p>

            <p>
              We at TheCoOE.com work with a mind-set that people are the heart
              of any organization. Our system focuses on training to develop
              exceptional people and teams that follow the company’s philosophy
              to gain exceptional results by focusing on:{" "}
            </p>

            <p>
              1. Creating a strong and stable culture where values and beliefs
              are widely shared and lived out over many years.
              <br />
              2. Working constantly to reinforce that culture.
              <br />
              3. Building a strong team and teaching individuals within the
              organization and involving cross-functional teams, equipping them
              to be able and feel able to challenge and improve their processes
              and the way they work to solve problems by implementing various
              lean tools and techniques.{" "}
            </p>

            <p>
              {" "}
              Our consultants are the industry experts who are well versed in
              implementing all three concepts of Lean Heijunka, Jidoka and JIT
              to provide the foundation of smooth processing and production by
              considering levelling (smoothing the volume of production in order
              to reduce variation which can make planning difficult), sequencing
              (mixing the types of work processed) and standardising (creating a
              ‘one best way’ of doing tasks by standardizing work to reduce
              variation). In TheCoOE.com, consultants are expert in risk
              management strategy concerning prevention. They work closely on
              techniques such as failure mode effect analysis (FMEA), the ways
              in which a product or service could fail to identify the risk and
              then working against those failures or at least to minimize the
              risks from those failures. We @ TheCoOE.com help organizations to
              identify opportunities and implementation of autonomation which is
              automation with human intelligence because without autonomation,
              automation has the potential to allow a large number of defects to
              be created very quickly, especially if processing is in
              batches.{" "}
            </p>

            <p>
              {" "}
              Our services will help you to understand and improve the flow of
              processes and eliminating non-value-added activities. Based on
              data collection we help you to identify the constraint and
              bottlenecks in your processes and you should be able to see them
              fairly easily too. Consultants will help organizations looking for
              ways to maximise the processing capability in the process flow.
              The organization will be able to understand what the bottleneck is
              capable of – how much it can produce, and how quickly it can do
              it. We introduce improvements that remove this particular
              bottleneck, possibly by using DMAIC project as well.{" "}
            </p>
            <p>
              {" "}
              At TheCoOE.com, we believe that the customer, not the
              organization, specifies value. Value is what your customer is
              willing to pay for and to satisfy your customer, your organization
              must provide the right products and services, at the right time,
              at the right price and at the right quality. To do this
              consistently, our experts will help you to identify and understand
              how your processes work, improve and smooth the flow, eliminate
              unnecessary steps in the process and reduce or prevent waste such
              as rework. We help you to understand the customer and their
              perception of value, identify and understand the value stream for
              each process and the waste within it and continuously pursue
              perfection.{" "}
            </p>
          </Row>
        </div>
      </section>
      <br />
      <br />
      <br />{" "}
    </div>
  );
}

export default LeanConsultation;

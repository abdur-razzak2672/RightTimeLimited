import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
function SixSigma() {
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
            <li> Six Sigma Consultation</li>
          </ul>
          <h2 className="page-header__title"> Six Sigma Consultation</h2>
        </div>
      </div>
      <section id="header" className="section-padding--bottom pt-5 ">
        <div className="container">
          <Row>
            <Col md={6}>
              <h2 className="header ">Six Sigma Consulting</h2>
              <p className="text-dark">
                Our consultancy services @ TheCoOE.com deliver efficient and
                effective results to all organizations regardless it's type or
                size of business using proven DMAIC (Define, Measure, Analyse
                and Improve) methodology.
              </p>
              <p className="text-dark">
                The aim of our consultancy services is to provide organizations
                with direction including carefully developed plan or a series of
                related opportunities which the organization follows, or a
                combination of plans and opportunities. By implementing various
                data-driven business improvement strategies, we can assist your
                organisation in increasing revenue & profits, reducing costs,
                improving customer satisfaction and provide best possible
              </p>
            </Col>

            <Col md={6}>
              <img
                className="d-block w-100"
                src="/assets/images/services/six.jpg"
                alt="First slide"
              />
            </Col>
            <p>
              solutions. We understand that process management is the collection
              and analysis of data about inputs and outputs and using the
              information as feedback to the process improvement hence we
              provide fact-based solutions using fact/data and listening to the
              voice of customers.
            </p>
            <p>
              Because each project must have representatives of the various
              project stakeholders with different technical knowledge. For
              example, senior management may be required in the
              Six-Sigma-Consulting concept phase and operation or production
              people will be needed for the pre-production or launch phase, some
              may be needed for all phases of Six Sigma depending on the nature
              of the project. Also, people working individually will not produce
              desired results of the project hence all stakeholders (team
              members) need to have basic teamwork training for setting purpose
              and goal of the project.
            </p>

            <p>
              Our consultants use the teams that are assigned well-defined
              projects that have direct impact on the organization’s bottom
              line. We understand that deployment of a culture-changing
              initiative such as the adoption of Six Sigma cannot succeed
              without engaged, visible, and active senior-level management
              involvement hence we provide various trainings in “statistical
              thinking” at all levels basis on their roles and responsibilities
              and prepare key people with extensive training in advanced
              statistics and project management. These key people may be
              designated as “Green Belt Professionals”, “Black Belts
              Professionals”. We provide resource(s) to support team-based
              problem identification and solution and install corrections to
              ensure that the problems will not recur.
            </p>
            <p>
              Our Six Sigma expert group, including master black belts and black
              belts along with organizational champions and key executive
              supporters establish a set of criteria for project selection and
              team assignments. This group of people assigns some projects to
              newly developed Six Sigma teams for problem solving including
              extensive data analysis and improvements using designed
              experiments and mentor these new team to complete the improvement
              projects.
            </p>
            <p>
              At specified points in the project lifecycle, performance of the
              team progress is evaluated based on agreed criteria in advance and
              these criteria against which the team performance is evaluated
              must be related to progress towards project goals and objectives.
              Our consultants gauge both the performance and health of the
              organization and its processes lies with its selection and use of
              metrics. These are usually converted to financial terms such as
              return on investment, cost reduction, increase in sales, and/or
              profit also, the projects with greatest contributions to the
              bottom line receive our highest priority.
            </p>
            <p>
              While preparing a project report, our consultants state the
              project benefits in financial terms however benefits that can’t be
              stated financially such as improved morale and improved
              team-building skills are listed in the report but the benefit
              section of the report is usually dominated by the financial
              aspects and the most easily understood financial number is the
              return on investment (ROI) or cost benefit analysis (CBA).
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

export default SixSigma;

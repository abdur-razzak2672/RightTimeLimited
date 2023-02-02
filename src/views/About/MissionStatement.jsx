import React from "react";
import { Accordion } from "react-bootstrap";
function MissionStatement() {
  return (
    <div>
      <div className="page-header">
        <div
          className="page-header__bg"
          style={{
            backgroundImage: `url('http://www.stemmonsservices.com/wp-content/uploads/2018/02/5064042-hd-business-wallpaper.jpg')`,
          }}
        ></div>

        <div className="container">
          <ul className="thm-breadcrumb list-unstyled">
            <li>
              <a href="/">Home</a>
            </li>
            <li>About Us</li>
          </ul>
          <h2 className="page-header__title">Mission Statement</h2>
        </div>
      </div>
      <section>
        <div className="container">
          <h1 className="text-dark mt-5 text-center">OUR MISSION STATEMENT</h1>
          <p>
            Cyber security is a challenge every day. Therefore, it is crucial to
            continuously support and protect our customers with new, innovative
            solutions and reliable services. Our vision, mission and corporate
            values form the foundation of our actions and motivate us to fulfil
            our purpose every day.
          </p>
          <div className="d-flex justify-content-center">
            <img width="60%" src="/assets/images/about/mission.png" alt="" />
          </div>

          <div>
            <div className="row">
              <div className="col-md-6">
                <h4 className="text-dark mt-5 ">Our Values</h4>

                <p>
                  Growth based on values – internally and externally. They show
                  what we stand for, which principles shape our work and what
                  defines us as a market leader.
                </p>
              </div>
              <div className="col-md-6">
                <div className="d-flex justify-content-center">
                  <img
                    width="60%"
                    src="/assets/images/about/values.webp"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5">
            <Accordion defaultActiveKey="1" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  CYBER SECURITY IS OUR PASSION
                </Accordion.Header>
                <Accordion.Body>
                  We all live and breathe cyber security and we are passionate
                  about what we do every day. Working together with and for our
                  clients, we always strive to find the best solution. Cyber
                  security is the passion that unites us and drives us to
                  achieve the highest levels of excellence.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>TRUST IS OUR FOUNDATION</Accordion.Header>
                <Accordion.Body>
                  We are aware of the responsibility that is inherent in our
                  business. Cyber security goes hand in hand with trust. This is
                  the basis of our mutual collaboration and our dealings with
                  clients, partners and suppliers. We face challenges every day,
                  so trust, respect and reliability at work are the be-all and
                  end-all for us.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  CUSTOMER SATISFACTION IS OUR MOTIVATION
                </Accordion.Header>
                <Accordion.Body>
                  We ensure maximum cyber security for our customers.
                  Reliability, respect and a high service commitment are the
                  guiding principles for our business. As a partner, we focus on
                  our clients' needs and support them in their long-term
                  development. Customer satisfaction is the keystone of our
                  success – and we are proud of it.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  EXPERTISE IS THE KEY TO OUR SUCCESS
                </Accordion.Header>
                <Accordion.Body>
                  We always strive to impress our clients with our
                  professionalism and well designed, innovative solutions. The
                  skills and experience of every member of the team create
                  synergies that help us to achieve superior performance. What
                  makes us stand apart is critical analysis, a keenness to
                  perform, learn and at the same time aspire to quality.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="4">
                <Accordion.Header>INNOVATION IS OUR STRENGTH</Accordion.Header>
                <Accordion.Body>
                  We are proud of the fact that we come up with unique ideas and
                  we are always thinking one step ahead. Together we create
                  innovative concepts that constantly motivate us. For us,
                  problems are challenges to be overcome and which help us grow.
                  This way, we are not only creating added value for our
                  customers, but also for ourselves as a team.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </section>
      <br /> <br /> <br /> <br />
    </div>
  );
}

export default MissionStatement;

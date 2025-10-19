import React from "react";
import { Accordion } from "react-bootstrap";
import Service from "../../components/Service";
import Benifits from "../../components/Benifits";
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
          <p className="text-dark">
            Cyber security is a challenge every day. Therefore, it is crucial to
            continuously support and protect our customers with new, innovative
            solutions and reliable services. Our vision, mission and corporate
            values form the foundation of our actions and motivate us to fulfil
            our purpose every day.
          </p>

          <div className="mt-5">
            <div className="row">
              <div className="col-md-7">
                <h2 className="header   "> Our Mission</h2>

                <p className="text-dark">
                  Our mission is to protect our clients' digital assets and
                  ensure their business continuity by providing comprehensive
                  cyber security solutions. We aim to stay ahead of the
                  constantly evolving threat landscape and leverage the latest
                  technologies to deliver effective and efficient services to
                  our clients. We strive to build long-term relationships with
                  our clients based on trust, transparency, and superior
                  performance, and to be recognized as a trusted partner in
                  their digital transformation journey
                </p>
              </div>
              <div className="col-md-5">
                <div className="d-flex justify-content-center">
                  <img
                    className="rounded"
                    width="100%"
                    src="/assets/images/about/mission.webp"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-5">
            <h2 className="header">Our Motto </h2>
            <p className="text-dark"> "Together we make the world happier"</p>
          </div>

          <div className="mt-5">
            <div className="row">
              <div className="col-md-5">
                <div className="d-flex justify-content-center">
                  <img
                    className="rounded"
                    width="100%"
                    src="/assets/images/about/our_philosophy_image.webp"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-md-7">
                <h2 className="header   "> Our Philosophy</h2>

                <p className="text-dark">
                  We believe that cyber security is a critical component of
                  every organization's success, and we are committed to
                  empowering our clients to protect their valuable digital
                  assets. We believe in taking a proactive and holistic approach
                  to cyber security, leveraging cutting-edge technologies and
                  best practices to mitigate risks and prevent threats. We
                  believe in building a strong partnership with our clients,
                  understanding their unique needs and challenges, and working
                  collaboratively to develop customized solutions that address
                  their specific requirements. Above all, we believe in honesty,
                  integrity, and transparency, and strive to maintain the
                  highest standards of professionalism in all our interactions.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-5">
            <div className="row">
              <div className="col-md-7">
                <h2 className="header   "> Our People</h2>

                <p className="text-dark">
                  Expert human resource is a key element in Right Time Limited’s
                  success. Our professionals possess the knowledge and expertise
                  to develop effective solutions that safeguard clients' digital
                  assets. They are updated with the latest trends and threats in
                  the industry and possess excellent communication and
                  problem-solving skills. People at Right Time Limited ensures
                  delivery of top-notch services to its clients and maintains a
                  competitive edge in the market.
                </p>
              </div>
              <div className="col-md-5">
                <div className="d-flex justify-content-center">
                  <img
                    className="rounded"
                    width="100%"
                    src="/assets/images/about/images.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <section className="mt-5">
            <table>
              <tr colSpan="2">
                <th className="text-center" colSpan="2" scope="col">
                  Certiﬁcations{" "}
                </th>
              </tr>
              <tr>
                <td className="w-50">CISSP, CISA, CISM, CGEIT, CRISC</td>
                <td rowSpan={3}>
                  PCI QSA, PCIP, C|EH, C|HFI, CSCF, ECSA, LPT, CEI Core
                  Professional, Burp Suite Pro, Nessus Pro, Acunetix Pro, RHCE,
                  RHCT, IBM-AIX-CS, IBM-AIX, SCSA, HP-UX- CSA, RHL EX-423, RHL
                  EX-429, VSG Video Solution, Polycom VSG Video Solution
                  Technical, Polycom Voice Over IP [VoIP], SCSECA, SCNA, SCSA,
                  OCP, OCE, MCITP, MCITP, MCTS (Lync, Virtualization, Exchange,
                  SharePoint, HPC), ITIL.
                </td>
              </tr>

              <tr>
                <td>
                  Swift Certified Professional BCP & DRP, IS Audit, CSCF (Cyber
                  Security Cyber Forensic), CDCE, CTDC, CDCS, CDCP
                </td>
              </tr>

              <tr>
                <td>
                  ISO Lead Auditor: ISO 20000, ISO 27001, ISO 9001, IO 14001,
                  ISO 13485, ISO 50001, ISO 22301 etc. Lead Implementer: ISO
                  27001 & ISO 9001
                </td>
              </tr>

              <tr>
                <td className="w-50">
                  Blockchain Certified Professional, CCNA, JNCIA, JNCIS, CND,
                  CCNA Cyber Ops, CCNP
                </td>

                <td>
                  CIPM® – Certiﬁed International Project Manager, MPM® –
                  Masters Project Manager.
                </td>
              </tr>
            </table>
          </section>

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
      <Service />
      <Benifits />
      <br /> <br /> <br /> <br />
    </div>
  );
}

export default MissionStatement;

import React from "react";
import { Carousel, Col, Row } from "react-bootstrap";
import SeviceCommon from "../SeviceCommon";
function TechnicalDoccumentation() {
  return (
    <div>
      <div className="page-header">
        <div
          className="page-header__bg"
          style={{
            backgroundImage: `url('https://thumbs.dreamstime.com/b/ict-information-communications-technology-modern-server-room-background-virtual-screen-141876739.jpg')`,
          }}
        ></div>
        <div className="container">
          <ul className="thm-breadcrumb list-unstyled">
            <li>
              <a href="{{ url('/') }}">Home</a>
            </li>
            a
            <li>
              <a href="{{ url('/services') }}">Services</a>
            </li>
            <li>
              <a href="{{ url('/services/consultation') }}">Consultation</a>
            </li>
            <li>Technical Documentation on ICT</li>
          </ul>
          <h2 className="page-header__title">Technical Documentation on ICT</h2>
        </div>
      </div>

      <section id="header" className="section-padding--bottom mt-5   ">
        <div className="container">
          <div className="d-flex justify-content-center ">
            <div style={{ width: "100%" }}>
            <Carousel indicators={false}>
      <Carousel.Item interval={1000}>
                  <img
                    className="d-block w-100"
                    src="assets/images/background/11.png"
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>Secure Configuration</h3>
                    <p>
                      Apply security patches and ensure the secure configuration
                      of all systems is maintained.{" "}
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                  <img
                    className="d-block   w-100"
                    src="assets/images/background/12.png"
                    alt="Second slide"
                  />
                  <Carousel.Caption>
                    <h3>User Education and Awareness</h3>
                    <p>
                      roduce user security policies covering acceptable and
                      secure use of your systems.{" "}
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="assets/images/background/11.png"
                    alt="Third slide"

                  />
                  <Carousel.Caption>
                    <h3>Manage User Privileges</h3>
                    <p>
                      Establish effective management processes and limit the
                      number of privileged accounts.{" "}
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      <div className="py-4" style={{backgroundColor:"orange"}}>
        <h1 className="text-center text-light">Policy Management Features</h1>
      </div>
      <section id="header" className="section-padding--bottom pt-5 ">
        <div className="container">

        <Row  style={{marginLeft:"20%",marginRight:"20%"}}>
        <Col md={6}>

          <div>
            <div className="d-flex justify-content-between">
              <h4 className="header-title">Policy Acceptance</h4>
              <img width="50%" src="assets/images/services/pol.png" alt="" />
            </div>
            <p style={{borderBottom:"1px solid red",width:"30%"}}></p>
            <p>Save hours of followup and reporting time by easily tracking employee acceptance of new policies. Generate reports and export documents for easy auditing.</p>
          </div>

        </Col>

        <Col md={6}>

<div>
  <div className="d-flex justify-content-between">
    <h4 className="header-title">Approval Workflow</h4>
    <img width="50%" src="assets/images/services/app.png" alt="" />
  </div>
  <p style={{borderBottom:"1px solid red",width:"30%"}}></p>
  <p>Built-in approval management workflows allow you to assign approvals to the appropriate team members and keep an approval history for audits.</p>
</div>

</Col>
<Col md={6}>

<div>
  <div className="d-flex justify-content-between">
    <h4 className="header-title">In-App Document Editor</h4>
    <img width="50%" src="assets/images/services/in.png" alt="" />
  </div>
  <p style={{borderBottom:"1px solid red",width:"30%"}}></p>
  <p>
Enhanced in-app document editing adds powerful editing capabilities and streamlines the user experience. Save time and edit documents in-app.</p>
</div>

</Col>

         <Col md={6}>

<div>
  <div className="d-flex justify-content-between">
    <h4 className="header-title">Document Versioning</h4>
    <img width="50%" src="assets/images/services/doc.png" alt="" />
  </div>
  <p style={{borderBottom:"1px solid red",width:"30%"}}></p>
  <p>Keep a track record of all policies and how they get updated. Compare differences and changes for published and draft policies to easily review and approve</p>
</div>

</Col>
      </Row>



      <h3 className="text-center header mb-5 mt-5">Policy Management Benefits</h3>

      <Row  style={{marginLeft:"20%",marginRight:"20%"}}>
        <Col md={6}>

          <div>
            <div className="d-flex justify-content-between">
              <h4 className="header-title">Centralized Policy Management</h4>
              <img width="50%" src="assets/images/services/cen.png" alt="" />
            </div>
            <p style={{borderBottom:"1px solid red",width:"30%"}}></p>
            <p>Policies can easily become scattered, lost, or changed without approval, leading to potential liabilities. Keep all your policy documents in one single place.</p>
          </div>

        </Col>

        <Col md={6}>

<div>
  <div className="d-flex justify-content-between">
    <h4 className="header-title">Policy Mapping</h4>
    <img width="50%" src="assets/images/services/pol1.png" alt="" />
  </div>
  <p style={{borderBottom:"1px solid red",width:"30%"}}></p>
  <p>How exactly do your polices fit into your compliance and risk program? Create connections between frameworks, controls, risks and assets.</p>
</div>

</Col>
<Col md={6}>

<div>
  <div className="d-flex justify-content-between">
    <h4 className="header-title">Keep Standards at Scale</h4>
    <img width="50%" src="assets/images/services/kep.png" alt="" />
  </div>
  <p style={{borderBottom:"1px solid red",width:"30%"}}></p>
  <p>
  Policies reflect how your organization behaves. It's values and ethics. Keep policies consistent as the organization grows and changes.</p>
</div>

</Col>

         <Col md={6}>

<div>
  <div className="d-flex justify-content-between">
    <h4 className="header-title">Identify Risk</h4>
    <img width="50%" src="assets/images/services/id.png" alt="" />
  </div>
  <p style={{borderBottom:"1px solid red",width:"30%"}}></p>
  <p>Effective policy management leads to faster identification of risk, earlier response times, and eliminates risks associated with policy approvals and acceptance.</p>
</div>

</Col>
      </Row>


      <section className="section-padding--top about-one">
        <div className="section-title text-center">
          <h2 className="header">Some of Our Valued Customers-RightTime Extended Its Hands For Technical Documentation</h2>
        </div>
        <div className="client-carousel  client-carousel--two">
          <div className="container">
            <div
              className="owl-carousel thm-owl__carousel"
              data-owl-options='{"loop": true,
				"autoplay": true,
				"autoplayTimeout": 5000,
				"autoplayHoverPause": true,
				"nav": true,
 				"dots": false,
				"margin": 30,
                "items": 2,
				"smartSpeed": 700,
				"responsive": {
					"0": {
						"margin": 30,
						"items": 2
					},
					"375": {
						"margin": 30,
						"items": 2
					},
					"575": {
						"margin": 30,
						"items": 3
					},
					"767": {
						"margin": 50,
						"items": 4
					},
					"991": {
						"margin": 40,
						"items": 5
					},
					"1199": {
						"margin": 80,
						"items": 5
					}
				}}'
            >
              {/* <div className="item">
                <img src="assets/images/partners/ec.png" alt="" />
              </div> */}
              <div className="item">
                <img src="assets/images/partners/pv.png" alt="" />
              </div>
              <div className="item">
                <img src="assets/images/partners/acnabin.png" alt="" />
              </div>
              <div className="item">
                <img src="assets/images/partners/pecb-logo.png" alt="" />
              </div>
              <div className="item">
                <img src="assets/images/partners/sck.png" alt="" />
              </div>
              <div className="item">
                <img src="assets/images/partners/ars.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      

       {/*   <Row className="mt-5">
     <Col md={3} sm="6">
          <img width="100%" src="assets/images/services/1.png" alt="" />


        </Col>
        <Col md={3} sm="6">
          <img width="100%" src="assets/images/services/2.png" alt="" />


        </Col>
        <Col md={3} sm="6">
          <img width="100%" src="assets/images/services/3.png" alt="" />


        </Col>
        <Col md={3} sm="6">
          <img width="100%" src="assets/images/services/4.png" alt="" />


        </Col>
      </Row> */}





        </div>
      </section>

      <div className="py-5 section-padding--bottom" style={{backgroundColor:"darkcyan",marginBottom:"5%"}}>
        <h1 className="text-center text-light">Policy Management Features</h1>
        <div className="d-flex justify-content-center">
          <button className="p-2 px-4 rounded bg-warning">Request Demo</button>

        </div>


      </div>
 
     </div>
  );
}

export default TechnicalDoccumentation;

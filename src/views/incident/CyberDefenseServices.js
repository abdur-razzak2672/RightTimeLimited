import React from "react";
import { Link } from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';
import { Col, Row } from "react-bootstrap";

function CyberDefenseServices() {
  return (
    <div>
    
      <div className="page-header">
      
        <div
          className="page-header__bg"
          style={{
            backgroundImage: `url('/assets/images/resources/contact.png')`,
          }}
        >
           
        
        
        </div>

        <div style={{backgroundColor:"gray",marginTop:"-150px"}}>
            <div className="container">
            <Link to="/cyber-services" className="text-light mx-3">Services</Link>
               <Link to="/cyber-defense-services" className="text-light mx-3">Cyber defense services  </Link>
               <Link to="/cyber-defense-center" className="text-light mx-3">Cyber Defense center</Link>

          

            </div>

                 
          </div>
        
      </div>

      <section className="d-flex  justify-content-center">
        <div className=" p-5 container ">
          <h2 className="header text-center ">CYBER DEFENCE SERVICES</h2>
           <p className="mt-3">
           Effective defence measures combined with Incident Detection and Response services are increasingly important to protect companies against cyber attacks. At our ISO 27001 certified and ISAE 3000 Type 2 audited Cyber Defence Center in Switzerland (Baar), we combine first-class expertise and sophisticated technologies with the many years of experience of our security experts and threat analysts and threat analysts. Our comprehensive Cyber Defence Services protect your on-premise, cloud, IoT and OT infrastructures around the clock.          </p>

          </div>
 
      </section>

      
      <section id="question" className="section-padding--bottom text-center">
        <div className="container">
          <div className="section-title text-center">
             <div className="expanedItem ">
              <div className=" expaneditems1">
                <Accordion className="shadaow">
                  <Accordion.Item className="my-3" eventKey="1">
                    <Accordion.Header>What Is The Difference Between CHD And SAD ?</Accordion.Header>
                    <Accordion.Body>
                      Account Data is Organized into two data groups. 1) Card Holder Data (CHD) 2) Sensitive Authentication Data (SAD). CHD covers the Data elements like Primary Account Number (PAN), Cardholder Name, Service Code and Expiration Date. CHD is useful to identify the Card holder, where in SAD Covers data elements like Track Data, CVV, CVC, CAV, CID, PIN / PIN Block. SAD is used for authorizing the card holder to do the transactions.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <Accordion >
                  <Accordion.Item className="my-3" eventKey="1">
                    <Accordion.Header>To Whom Does The PCI DSS Apply ?</Accordion.Header>
                    <Accordion.Body>
                      PCI DSS standard can be applied to any organization that accepts, transmits or stores any cardholder data regardless of size or number of transactions.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <Accordion >
                  <Accordion.Item className="my-3" eventKey="1">
                    <Accordion.Header>What Is The Most Current Version Of The PCI DSS ?</Accordion.Header>
                    <Accordion.Body>
                      The latest is PCI DSS version 3.2.1 that replaces version 3.2. Though no new requirements were added in PCI DSS 3.2.1, the update was designed to eliminate any confusion around effective dates for PCI DSS requirements.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>

              </div>

              <div className="expaneditems1 ">
                <Accordion >
                  <Accordion.Item className="my-3" eventKey="1">
                    <Accordion.Header>If I Am Using A Third-Party To Process Payments   </Accordion.Header>
                    <Accordion.Body>
                      Yes, even if some of the payment processes may reduce your risk of breach or what is in scope for PCI compliance, business cannot ignore it.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <Accordion >
                  <Accordion.Item className="my-3" eventKey="1">
                    <Accordion.Header>If I Only Accept Credit Cards Over The Phone  ?</Accordion.Header>
                    <Accordion.Body>
                      Yes. any processing, storing or transmitting of payment cardholder data needs to be done under a PCI Compliant environment.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <Accordion >
                  <Accordion.Item className="my-3" eventKey="1">
                    <Accordion.Header>How Do I Decide My PCI Compliance ‘Levels’ ?</Accordion.Header>
                    <Accordion.Body>
                      Merchants fall into four merchant levels based on Visa transactions over a 12 month period. The PCI compliance level can be decided by the number of transactions the merchants process each year.<br />
                      Level 1: Merchants that process over 6 million card transactions annually.<br />
                      Level 2: Merchants that process 1 to 6 million transactions annually.<br />
                      Level 3: Merchants that process 20,000 to 1 million transactions annually.<br />
                      Level 4: Merchants that process fewer than 20,000 transactions annually.<br />
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>



              </div>

            </div>

          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <Row>
            <Col md={6}>
              <div className="">
                <h3 className="header">EXPERIENCE & EXPERTISE</h3>
                <p className="mt-3">
                In our InfoGuard Cyber Defence Center (CDC) in Switzerland, experienced security experts work in different, highly specialised teams. Collaboration within the CDC and also with other InfoGuard teams creates synergies that offer our customers real added value. No matter whether vulnerabilities in individual components, new attack strategies or rapid support in the event of an incident: we are the right partner. Tailored to individual needs, companies can use our modular services as managed services of their internal systems or as cloud services without investing in their own infrastructure. For particularly exposed data and systems, our Cyber Defence Center offers you a maximum level of security. InfoGuard is also a member of FIRST (Global Forum of Incident Response and Security Teams), which attests to the high quality standard of its cyber defence and response services.
                </p>
              </div>
            </Col>

            <Col md={6}>
            <img alt="..." className="img-fluid" src="/assets/images/services/vapt.png" width="100%"/>

            </Col>
          </Row>


          <div>
            <h3 className="header   mt-5 text-center">
              We Are At your Service
            </h3>
            <p>Complete the form to talk with one of our security experts and learn how our security services can help you and your organization.
</p>

           <Row>
           <Col className="mt-3" md={6}>
           <div style={{backgroundColor:"#f6f6f6",border:"1px solid lightgray",borderRadius:"12px"}} class="input-container px-3 ">
                  <i class="fa fa-user text-dark "></i>
                  <select
                 style={{width:"95%",border:"none",outline:"none",backgroundColor:"#f6f6f6",height:"50px"}}

                  >
                    <option value="volvo">Solution</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                  </select>
                </div>
                
             
             
              </Col>




              <Col className="mt-3" md={6}>
                <div style={{backgroundColor:"#f6f6f6",border:"1px solid lightgray",borderRadius:"12px"}} class="input-container px-3 ">
                  <i class="fa fa-user text-dark "></i>
                  <input
                      style={{width:"95%"}}

                     type="text"
                    placeholder="email"
                    name="username"
                  />
                </div>
              </Col>
           </Row>
           <Row>
            <Col className="mt-3" md={6}>
            <div style={{backgroundColor:"#f6f6f6",border:"1px solid lightgray",borderRadius:"12px"}} class="input-container px-3 mt-3">
                  <i class="fa fa-user text-dark "></i>
                  <input
                  style={{width:"95%"}}
                     type="text"
                    placeholder="First Name"
                    name="firstname"
                  />
                </div>

            </Col>
            <Col className="mt-3" md={6}>
            <div style={{backgroundColor:"#f6f6f6",border:"1px solid lightgray",borderRadius:"12px"}} class="input-container px-3 mt-3">
                  <i class="fa fa-user text-dark "></i>
                  <input
                  style={{width:"95%"}}
                     type="text"
                    placeholder="Last Name"
                    name="firstname"
                  />
                </div>

            </Col>
           </Row>
           <Row>
            <Col className="mt-3" md={6}>
            <div style={{backgroundColor:"#f6f6f6",border:"1px solid lightgray",borderRadius:"12px"}} class="input-container px-3 mt-3">
                  <i class="fa fa-phone text-dark "></i>
                  <input
                  style={{width:"95%"}}
                     type="text"
                    placeholder="phone"
                    name="firstname"
                  />
                </div>

            </Col>
            <Col className="mt-3" md={6}>
            <div style={{backgroundColor:"#f6f6f6",border:"1px solid lightgray",borderRadius:"12px"}} class="input-container px-3 mt-3">
                  <i class="fa fa-user text-dark "></i>
                  <input
                  style={{width:"95%"}}
                     type="text"
                    placeholder="Job Title"
                    name="firstname"
                  />
                </div>

            </Col>
           </Row>

           <Row>
            <Col className="mt-3" md={6}>
                
            <div style={{backgroundColor:"#f6f6f6",border:"1px solid lightgray",borderRadius:"12px"}} class="input-container px-3 mt-3">
                  <i class="fa fa-globe  text-dark "></i>
                  <input
                  style={{width:"95%"}}
                     type="text"
                    placeholder="Company"
                    name="firstname"
                  />
                </div>

            </Col>
            <Col className="mt-3" md={6}>
            <div style={{backgroundColor:"#f6f6f6",border:"1px solid lightgray",borderRadius:"12px"}} class="input-container px-3 mt-3">
                <i class="fa fa-user text-dark "></i>
                  <select
                 style={{width:"95%",border:"none",outline:"none",backgroundColor:"#f6f6f6",height:"50px"}}

                  >
                    <option value="volvo">Number Of Employees</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                  </select>
                </div>

            </Col>
           </Row>


           <Row>
            <Col className="mt-3" md={6}>
            <div style={{backgroundColor:"#f6f6f6",border:"1px solid lightgray",borderRadius:"12px"}} class="input-container px-3 mt-3">
                <i class="fa fa-user text-dark "></i>
                  <select
                 style={{width:"95%",border:"none",outline:"none",backgroundColor:"#f6f6f6",height:"50px"}}

                  >
                    <option value="volvo">Reason For Contact request</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                  </select>
                </div>

                
            

            </Col>
            <Col className="mt-3" md={6}>
            <div style={{backgroundColor:"#f6f6f6",border:"1px solid lightgray",borderRadius:"12px"}} class="input-container px-3 mt-3">
                <i class="fa fa-user text-dark "></i>
                  <select
                 style={{width:"95%",border:"none",outline:"none",backgroundColor:"#f6f6f6",height:"50px"}}

                  >
                    <option value="volvo">Contact request</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                  </select>
                </div>

            </Col>
           </Row>

           <Row>
            
            <Col className="mt-3" md={12}>
            <div style={{backgroundColor:"#f6f6f6",border:"1px solid lightgray",borderRadius:"12px"}} class="input-container px-3 mt-3">

                   <textarea
                 style={{width:"100%",border:"none",outline:"none",backgroundColor:"#f6f6f6",height:"100px"}}
                 type="textarea"
                    placeholder="message"
                    name="firstname"
                  />
                </div>

            </Col>
           </Row>
           <p style={{fontSize:"12px"}}>Right Time Limited is committed to protecting and respecting your privacy. We use your personal information only to administer your account, to provide the information you request, and for e-mail notifications related to this request.</p>
           <div style={{fontSize:"12px"}} className="">
            <input className="mx-3" type="radio"/>
        I agree to receive dedicated e-mails from Right Time Limited based on this request. 

           </div>
           <a href="/apply-job" className="  thm-btn cta-two__btn rounded-2">
                    <span>Send Message </span> 
                  </a>  



          </div>




        </div>

      </section>

      

      

      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default CyberDefenseServices;

 

 
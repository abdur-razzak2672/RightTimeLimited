import React from "react";
import { Link } from "react-router-dom";

function DefenceCenter() {
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
               <Link to="/defense-center" className="text-light mx-3"> Defense center</Link>

          

            </div>

                 
          </div>
        
      </div>

      <section className="d-flex  justify-content-center">
        <div className=" p-5 w-50 ">
          <h2 className="header "> DEFENCE CENTER</h2>
          <p style={{ fontSize: "18px" }} className="mt-3  ">
          From our ISO/IEC 27001 certified InfoGuard Cyber Defence Center in Switzerland, we provide the full range of services: from support to outsourced cloud and managed security services through to 7x24 SOC service, where our cyber threat analysts and security experts take care of your security around the clock.          </p>
          <p className="mt-3">
          Cyber criminals sneak in, are persistent and unfortunately are almost always successful. So the only question these days is whether you have already been penetrated or when you will be attacked. Prevention alone no longer works. Companies are reliant on cyber security experts, who can recognise anomalies in the network, clarify suspicious cases and immediately deal with any dangers, using state of the art tools. InfoGuard Cyber Defence Services offer you a round-the-clock protection that is tailor-made to your requirements.
          </p>

          <p className="mt-3">
          Cyber criminals sneak in, are persistent and unfortunately are almost always successful. So the only question these days is whether you have already been penetrated or when you will be attacked. Prevention alone no longer works. Companies are reliant on cyber security experts, who can recognise anomalies in the network, clarify suspicious cases and immediately deal with any dangers, using state of the art tools. InfoGuard Cyber Defence Services offer you a round-the-clock protection that is tailor-made to your requirements.

At InfoGuard’s Cyber Defence Center (CDC) in Switzerland, we employ approximately 70 highly qualified cyber security experts and analysts. The CDC at our headquarters in Zug, is ISO 27001-certified. We have a multilayer, physical security concept and the security systems are monitored round-the-clock. The vital technical components are multiply configured and ensure the highest levels of availability. At the same time we fulfil strict data protection requirements (the Swiss Data Protection Act and the EU General Data Protection Regulation (GDPR)) and the guidelines for the Swiss financial sector. In addition we guarantee that the data is only stored by the client or in our redundant data center in Switzerland. InfoGuard is also a member of FIRST (Global Forum of Incident Response and Security Teams), which attests to the high quality standard of its cyber defence and response services.          </p>
          <h2 className="mt-4 header">Security cockpit, alerting & reporting – maximum transparency around-the-clock</h2>

          <p className="mt-3">The web-based cockpit provides you with a rapid, around-the-clock overview of the current threat situation and status of your infrastructure, including support tickets. In addition, prepared reports and graphic dashboards are also available. At the same time you can also create your own reports</p>
        </div>
      </section>

      

      

      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default DefenceCenter;

 

 
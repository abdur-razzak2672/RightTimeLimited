import React from "react";

function Offer({ data, id }) {
  console.log("data", data);
  return (
    <div>
      <div>
        <h3 className="header">{data[id].title}</h3>
        <p className="text-dark">{data[id].description}</p>
        <p style={{ borderBottom: "2px solid lightgray" }}></p>
        <div className="text-center">
          <h4 className="header">Fast Track Your PCI DSS Compliance</h4>
          <p className="text-dark">
            Request an initial PCI DSS Compliance Program consultation.
          </p>

          <button
            style={{
              padding: "7px",
              border: "1px solid lightgray",
              borderRadius: "8px",
            }}
          >
            REQUEST FREE CONSULTATION
          </button>
        </div>

        <p className="mt-4" style={{ borderBottom: "2px solid lightgray" }}></p>

        <div>
          <h5 className="header">Overview</h5>
          <p className="text-dark">
            We will understand your business and the scope of the project. We
            will also understand the business requirements and the business
            objectives. We will understand the business processes and the
            business environment. We will also understand the business
            constraints and the business risks.
          </p>
        </div>

        <div>
          <h5 className="header">Key Benefits</h5>
          <p className="text-dark">
            1 . We will understand your business and the scope of the project.{" "}
          </p>
          <p className="text-dark">2 . We will understand your business </p>

          <p className="text-dark">3 . the scope of the project. </p>
          <p className="text-dark">
            4 . We will understand your business and the scope of the project.{" "}
          </p>
          <p className="text-dark">
            5 . We will understand scope of the project.{" "}
          </p>
        </div>

        <div>
          <h5 className="header">Our Methology</h5>
            <p className="text-dark">PCI DSS is a complex requirement that has an impact on most areas of the business, not just the technical or IT focused locations. Therefore, it is important to make sure that any methodology that is used to service the program has been tried and tested. The approach that Right Time Limited adopts for the PCI DSS program of works is as follows:</p>
          <img width="100%" src="/assets/images/services/network.png" alt="pci-dss-methology" />
          <p className="text-dark ">The above picture is an outline of the total process and the drive through compliance. </p>
            <p className="text-dark">We propose to offer following PCI DSS Compliance Consultation and Audit Services for The Organization over the period of 1 year and subsequent year, if requested, in following phases: </p>
           <h4 className="header">Project Plan: PCI DSS Compliance Validation Services/ Consultation (CVS)</h4>
           <p className="text-dark">PCI DSS Compliance Validation Services/ Consultation (CVS) consist of Project Initiation and four Compliance Validation Phases, and to ensure comprehensive and efficient service, the Client must fulfill their obligations within each phase before progressing to subsequent phases. Failure to do so may require an addendum to this contract that will include additional charges for any time or materials above and beyond those agreed in agreement.</p>
          <h5 className="header">Project Initiation: Including Managing Consultant (MC), Onsite Validation Service Consultant – (if any) and Client Project Manager (PM), Client Point of Contact / Coordinator (POC).</h5>
           <div className="mt-4" style={{lineHeight:"2px"}}>
           <p className="text-dark "><i className="fas fa-box"></i>	Kickoff Meeting</p>
          <p className="text-dark"><i className="fas fa-box"></i>	 	Discussion on the Project Definition Plan deliverables and responsibilities</p>
          <p className="text-dark"><i className="fas fa-box"></i>	 	Initial engagement with Onsite Validation Services Consultant/Managing Consultant</p>
          <p className="text-dark"><i className="fas fa-box"></i>	 PCI DSS Training</p>
          <p className="text-dark"><i className="fas fa-box"></i> 	Begin formal scope definition process</p>
           </div>



           
  <h5 className="header">Compliance Validation Services (CVS) Phase I: Performed by Managing Consultant (MC) / PCI Consultant(s).</h5>
           <div className="mt-4" style={{lineHeight:"2px"}}>
           <p className="text-dark "><i className="fas fa-box"></i>	 	Gap Assessment</p>
          <p className="text-dark"><i className="fas fa-box"></i> 	Initial scope agreement</p>
          <p className="text-dark"><i className="fas fa-box"></i> 	Asset Identification</p>
          <p className="text-dark"><i className="fas fa-box"></i> Draft Report on Compliance (ROC) development</p>
           </div>       
       <p className="text-dark"><span className="header">Project Milestone:</span> Draft ROC including policy and procedure review </p>



       <h5 className="header">Compliance Validation Services (CVS) Phase II: Performed by Managing Consultant (MC)/ PCI Consultant(s).</h5>
           <div className="mt-4" style={{lineHeight:"2px"}}>
           <p className="text-dark "><i className="fas fa-box"></i>	Additional document / data collection</p>
          <p className="text-dark"><i className="fas fa-box"></i>	 Policy and procedure validation/ verification</p>
          <p className="text-dark"><i className="fas fa-box"></i>	 Draft ROC development</p>
            </div>

           <p className="text-dark"><span className="header">Project Milestone:</span> Draft ROC including policy and procedure review </p>


           <h5 className="header">Compliance Validation Services (CVS) Phase III: Performed by Managing Consultant (MC)/ onsite PCI Consultant(s).</h5>
           <div className="mt-4" style={{lineHeight:"2px"}}>
           <p className="text-dark "><i className="fas fa-box"></i> Onsite Assessment</p>
          <p className="text-dark"><i className="fas fa-box"></i>	Identification of remediation action items</p>
          <p className="text-dark"><i className="fas fa-box"></i>	 	Guidance for Client - generated remediation plans (as necessary)</p>
          <p className="text-dark"><i className="fas fa-box"></i>	Continued development of the ROC</p>
          <p className="text-dark"><i className="fas fa-box"></i> 	External vulnerability scan definition</p>
           </div>
           <p className="text-dark"><span className="header">Project Milestone:</span>External Vulnerability Scanning</p>

           <p className="text-dark"><span className="header">Project Milestone:</span> Remediation Tracking Spreadsheet (RTS), or ROC </p>

 

 
          
          
          
          
          </div>
      </div>
    </div>
  );
}

export default Offer;

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
          <h4 className="header">Fast Track Your  {data[id].header} Compliance</h4>
          <p className="text-dark">
            Request an initial  {data[id].header} Compliance Program consultation.
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
          Our consultants work with you to identify all system components included in or connected to the Cardholder Data Environment, and the flows of payment card data through these, including cardholder and sensitive authentication data
          </p>

          <p className="text-dark">
          To achieve this understanding efficiently, we will provide you with our PCI DSS Dataflow Questionnaire and Analysis document, to be completed for each payment system, automated business process and/or manual process involving payment card data, preparing our consultants for the on-site assessment.          </p>
       
          <p className="text-dark">
          We will then interview key staff members, and perform a detailed analysis of the systems used for processing, transmitting or storing cardholder data (CHD) and sensitive authentication data (SAD)   </p>
          <p className="text-dark">
          A comprehensive report will then highlight our investigation, including card data flow diagrams for each payment card application and a detailed description of the people, processes and technology in scope for the organisations PCI DSS compliance</p>
        </div>

        <div>
          <h5 className="header">Key Benefits</h5>
          <p className="text-dark">
            1 . Reduce the time to achieve PCI DSS certification.
          </p>
          <p className="text-dark">2 . Demonstrate a greater Return-on-Investment (ROI) through efficient use of resources </p>

          <p className="text-dark">3 . Establish the critical foundation for PCI Remediation Planning.</p>
          <p className="text-dark">
            4 . Reduced cost and complexity by implementing only required controls.{" "}
          </p>
          <p className="text-dark">
            5 .Assurance that all card holder data is identified and protected.
          </p>
        </div>

        <div>
          <h5 className="header">Our Methology</h5>
            <p className="text-dark">PCI DSS is a complex requirement that has an impact on most areas of the business, not just the technical or IT focused locations. Therefore, it is important to make sure that any methodology that is used to service the program has been tried and tested. The approach that Right Time Limited adopts for the PCI DSS program of works is as follows:</p>
          <img width="100%" src="/assets/images/services/network.png" alt="pci-dss-methology" />
          <p className="text-dark ">The above picture is an outline of the total process and the drive through compliance. </p>
            

          <table>
              <tr>
                <th>Phase  </th>
                <th>Resources</th>
               </tr>
              <tr>
                <td>Phase – I</td>
                <td>Assessment</td>

               

               </tr>
            
              
              <tr>
              <td>Phase – II</td>

                <td>Remediation</td>

               </tr>

               <tr>
              <td>Phase – III</td>

                <td>Certify</td>

               </tr>

               <tr>
              <td>Phase – IV</td>

                <td>Maintain</td>

               </tr>
            </table>
            
            
            
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

 
           <p className="text-dark"><i className="fas fa-box"></i>  Additional onsite validation (as necessary/required)</p>
           
           <p className="text-dark"><i className="fas fa-box"></i>  ROC completion and submission to RightTime Quality Assurance (QA) Team</p>
          
           <p className="text-dark"><span className="header">Project Milestone:</span> ROC submission to QA </p>

           <p className="text-dark"><i className="fas fa-box"></i>  	ROC review and submission (as required)</p>
           <p className="text-dark"><span className="header">Project Milestone:</span> Final ROC</p>

 

           <h5 className="header">Compliance Validation Services (CVS) Phase IV: Performed by Remote Validation Services Consultant / Managing Consultant (MC)/ onsite PCI Consultant(s).</h5>
           <div className="mt-4" style={{lineHeight:"2px"}}>
           <p className="text-dark "><i className="fas fa-box"></i> PCI Maintenance assistance and Advisory Service</p>
          <p className="text-dark mx-2"> 	o	Clarification support and access to PCI security Expert by e-mail &/or phone</p>
          <p className="text-dark mx-2"> 	o	Ongoing PCI expert remote advisory services during maintenance period</p>
          <p className="text-dark"><i className="fas fa-box"></i>  Perform PCI DSS Mandatory Scanning</p>
          <p className="text-dark mx-2">o 	Automated Quarterly ASV Scans with PCI Approved Scanning Vendor solution</p>
          <p className="text-dark mx-2 px-2">  o	Up to XX Static External Facing IP Addresses</p>
           </div>       
       <p className="text-dark">
             PCI DSS certification requirements are dependent on the level of the service providers as determined by their acquirer or the payment brands and is summarized below. Merchants and Services providers should contact their acquirer or the payment brands to identify their specific validation and reporting requirements.
        </p>

        <table className="mt-5" style= {{width:"100%"}}>
          <tr>
            <th>Service Providers</th>
            <th>Level 1</th> 
            <th>Level 2</th>
            <th>Level 3 and Level 4</th>

          </tr>
          <tr>
            <td>PCI Assessment Type</td>
            <td>Annual Onsite Assessment</td>
            <td>Annual Self-Assessment</td>
            <td>Payment Brand or Acquirer Defines What is Required</td>

          </tr>

          <tr>
            <td>Reporting</td>
            <td>ROC and Quarterly ASV Scan</td>
            <td>SAQ and Quarterly ASV Scan</td>
            <td>Payment Brand or Acquirer Defines What is Required</td>

          </tr>
          
        </table>


        <table className="mt-5" style= {{width:"100%"}}>
          <tr>
            <th>Merchants</th>
            <th>Level 1</th> 
            <th>Level 2</th>
            <th>Level 3 (American Express)</th>

          </tr>
          <tr>
            <td>PCI Assessment Type</td>
            <td>Annual Onsite Assessment</td>
            <td>Annual Self-Assessment</td>
            <td>Annual Self-Assessment</td>

          </tr>

          <tr>
            <td>Reporting</td>
            <td>ROC and Quarterly ASV Scan</td>
            <td>SAQ and Quarterly ASV Scan</td>
            <td>SAQ and Quarterly ASV Scan</td>

          </tr>
          
        </table>





          
          
          
          
          </div>
      </div>
    </div>
  );
}

export default Offer;

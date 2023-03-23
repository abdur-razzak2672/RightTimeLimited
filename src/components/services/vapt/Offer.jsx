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
          We do not simply perform a vulnerability scan, rebrand the output, and tell you what you already know, or could easily have found out. Vulnerability scanning is but one part, of one stage of our thorough assessment methodology.
          </p>

         </div>

        <div>
          <h5 className="header">Key Benefits</h5>
          <p className="text-dark">
            1 . Reduce the time to achieve VAPT certification.
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
            <p className="text-dark">VAPT is a complex requirement that has an impact on most areas of the business, not just the technical or IT focused locations. Therefore, it is important to make sure that any methodology that is used to service the program has been tried and tested. The approach that Right Time Limited adopts for the VAPT program of works is as follows:</p>
          
            <div className="row   text-center col-xs-6">
            <div className=" col-md-4 col-sm-6 rounded ">
              <div id="card-container">
                <div className="text-center rounded" id="card3">
                  <div className="front face text-center pt-3">
                    <img src="assets/images/services/cardicon/1.png" width="30%" alt=''/>
                    <h6 className=' mt-3 p-2 text-dark'> Pre-engagement Activities (including Scope Definition)</h6>
                  </div>
                  <div className="back face">
                    <p className="artist mt-4">
                      Evaluating business process and environment to understand the in-scope elements</p>

                  </div>
                </div>
              </div>

            </div>
            <div className="  col-md-4 col-sm-6 rounded ">
              <div id="card-container">
                <div className="text-center rounded" id="card3">
                  <div className="front face text-center pt-3">
                    <img src="assets/images/services/cardicon/2.png" width="30%" alt=''/>                    
                    <h6 className=' mt-3 p-2 text-dark'>  	Reconnaissance<br/>/OSINT/Information gathering</h6>
                  </div>
                  <div className="back face">
                    <p className="artist mt-4">
                      Finalize the scope elements and prepare the requirement documentation</p>

                  </div>
                </div>
              </div>

              

            </div>

            <div className="  col-md-4 col-sm-6 rounded ">
              <div id="card-container">
                <div className="text-center rounded" id="card3">
                  <div className="front face text-center pt-3">
                    <img src="assets/images/services/cardicon/2.png" width="30%" alt=''/>                    
                    <h6 className='mt-3 p-2 text-dark'> Threat modeling and Vulnerability Identification & Analysis</h6>
                  </div>
                  <div className="back face">
                    <p className="artist mt-4">
                    Identify the potential challenges that might arise during requirement implementation</p>

                  </div>
                </div>
              </div>

              

            </div>
             
            <div style={{marginTop:"-80px"}} className="  col-md-4 col-sm-6 rounded ">
              <div id="card-container">
                <div className="text-center rounded" id="card3">
                  <div className="front face text-center pt-4">
                    <img src="assets/images/services/cardicon/1.png" width="30%" alt=''/>
                    <h6 className='mt-3 p-2 text-dark'> 	Exploitation (Gaining Access)</h6>
                  </div>
                  <div className="back face">
                    <p className="artist mt-4">
                      Identify the potential challenges that might arise during requirement implementation</p>

                  </div>
                </div>
              </div>

            </div>
            <div style={{marginTop:"-80px"}} className="  col-md-4 col-sm-6 rounded ">
              <div id="card-container">
                <div className="text-center rounded" id="card3">
                  <div className="front face text-center pt-3">

                    <img src="assets/images/services/cardicon/5.png" width="30%" alt=''/>                   
                     <h6 className='mt-3 p-2 text-dark'> Post-exploitation (maintaining Access), Analysis & Recommendation</h6>
                  </div>
                  <div className="back face">
                    <p className="artist mt-4">Data Flow Assessment
                      Conducting thorough systems analysis to evaluate data flow and possible leakages</p>

                  </div>
                </div>
              </div>

            </div>
            <div style={{marginTop:"-80px"}} className="  col-md-4 col-sm-6 rounded ">
              <div id="card-container">
                <div className="text-center rounded" id="card3">
                  <div className="front face text-center pt-3">
                    <img src="assets/images/services/cardicon/6.png" width="30%" alt=''/>                   
                     <h6 className='mt-3 p-2 text-dark'> 	Clearing Tracks</h6>
                  </div>
                  <div className="back face">
                    <p className="artist mt-4">
                      Assist you with list of policy and procedure to help you in validation or evidence collection</p>

                  </div>
                </div>
              </div>

            </div>
            <div  style={{marginTop:"-80px"}} className="  col-md-4 col-sm-6 rounded ">
              <div id="card-container">
                <div className="text-center rounded" id="card3">
                  <div className="front face text-center pt-3">
                    <img src="assets/images/services/cardicon/7.png" width="30%" alt='' />                   
                     <h6 className='mt-3 p-2 text-dark'> 	Comprehensive Reporting</h6>
                  </div>
                  <div className="back face">
                    <p className="artist mt-4">
                      Assist you with list of policy and procedure to help you in validation or evidence collection</p>

                  </div>
                </div>
              </div>

            </div>
            <div  style={{marginTop:"-80px"}} className=" col-md-4 col-sm-6 rounded ">
              <div id="card-container">
                <div className="text-center rounded" id="card3">
                  <div className="front face text-center pt-3">
                    <img src="assets/images/services/cardicon/8.png" width="30%" alt=''/>                    
                    <h6 className='mt-3 p-2 text-dark'>8.	Resolution Phase</h6>
                  </div>
                  <div className="back face">
                    <p className="artist mt-4">
                      Conduct awareness sessions for your Team and personnel involved in the scope</p>

                  </div>
                </div>
              </div>

            </div>
            <div  style={{marginTop:"-80px"}} className="  col-md-4 col-sm-6 rounded ">
              <div id="card-container">
                <div className="text-center rounded" id="card3">
                  <div className="front face text-center pt-3">
                    <img src="assets/images/services/cardicon/9.png" width="30%" alt=''/>                    
                    <h6 className='mt-3 p-2 text-dark'> 	Re-Testing Phase</h6>
                  </div>
                  <div className="back face">
                    <p className="artist mt-4">Scans And Testing
                      Identify critical vulnerabilities in your system with a robust testing approach</p>

                  </div>
                </div>
              </div>
       
            

            </div>
           </div>
          
          
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
            
            
            
            <p className="text-dark">We propose to offer following VAPT Compliance Consultation and Audit Services for The Organization over the period of 1 year and subsequent year, if requested, in following phases: </p>
           <h4 className="header">Project Plan: VAPT Compliance Validation Services/ Consultation (CVS)</h4>
           <p className="text-dark">VAPT Compliance Validation Services/ Consultation (CVS) consist of Project Initiation and four Compliance Validation Phases, and to ensure comprehensive and efficient service, the Client must fulfill their obligations within each phase before progressing to subsequent phases. Failure to do so may require an addendum to this contract that will include additional charges for any time or materials above and beyond those agreed in agreement.</p>
          <h5 className="header">Project Initiation: Including Managing Consultant (MC), Onsite Validation Service Consultant – (if any) and Client Project Manager (PM), Client Point of Contact / Coordinator (POC).</h5>
           <div className="mt-4" style={{lineHeight:"2px"}}>
           <p className="text-dark "><i className="fas fa-box"></i>	Kickoff Meeting</p>
          <p className="text-dark"><i className="fas fa-box"></i>	 	Discussion on the Project Definition Plan deliverables and responsibilities</p>
          <p className="text-dark"><i className="fas fa-box"></i>	 	Initial engagement with Onsite Validation Services Consultant/Managing Consultant</p>
          <p className="text-dark"><i className="fas fa-box"></i>	 VAPT Training</p>
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
          <p className="text-dark"><i className="fas fa-box"></i>  Perform VAPT Mandatory Scanning</p>
          <p className="text-dark mx-2">o 	Automated Quarterly ASV Scans with PCI Approved Scanning Vendor solution</p>
          <p className="text-dark mx-2 px-2">  o	Up to XX Static External Facing IP Addresses</p>
           </div>       
       <p className="text-dark">
             VAPT certification requirements are dependent on the level of the service providers as determined by their acquirer or the payment brands and is summarized below. Merchants and Services providers should contact their acquirer or the payment brands to identify their specific validation and reporting requirements.
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

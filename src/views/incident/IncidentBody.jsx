import React from "react";
import CardItem from "./incidentCard";
 

function IncidentBody() {

  const cards = [
    {
      id: 1,
      imageSrc: 'https://media.kasperskycontenthub.com/wp-content/uploads/sites/103/2021/09/03121451/incident_response-e1630685709431.png',
      title: 'Incident Response',
      description: 'Right Time Limited provides prompt and expert incident response services to help organizations mitigate the impact of security incidents... ',
      additionalContent:
      'Right Time Limited provides prompt and expert incident response services to help organizations mitigate the impact of security incidents. Its skilled incident response team swiftly identifies, contains, and eradicates threats, minimizing downtime and potential damage to systems and data.<br/> <br/>'+

      '<h5>Steps in Incident Response:</h5> ' +
      '1. Detection of a security incident.<br>' +
      '2. Activate incident response team.<br>' +
      '3. Assess and triage the incident.<br>' +
      '4. Contain the incident to prevent further damage.<br>' +
      '5. Eradicate the threat and restore systems to a secure state.<br>' +
      '6. Post-incident activities, including documentation and lessons learned.',
     },
     {
      id: 2,
      imageSrc: ' https://www.flir.com/globalassets/news/news-center/_blogmigrationfiles/forensic-investigations-using-thermography-and-steam/print.jpg   ',
      title: ' Forensic Investigation  ',
      description: ' In the event of a security breach or incident, Right Time Limited conducts thorough forensic investigations to identify the root cause...  ',
      additionalContent:
      '  In the event of a security breach or incident, Right Time Limited conducts thorough forensic investigations to identify the root cause, gather evidence, and determine the extent of the incident. Its forensic experts employ advanced techniques and tools to analyze systems, networks, and digital artifacts, enabling organizations to understand the incident s scope and take appropriate remedial actions.  <br/>  <br/>'+

      '<h5> Steps in Forensic Investigation:  </h5> ' +
      '  1.	Identification of a security breach or incident. <br>' +
      '  2.	Preserve and collect digital evidence. <br>' +
      '  3.	Conduct detailed forensic analysis .<br>' +
      ' 4.	Determine the cause, extent, and impact of the incident.  <br>' +
      '  5.	Document findings and prepare a forensic report. <br>'  
       ,
     },
     {
      id: 3,
      imageSrc: ' https://i.ytimg.com/vi/Ob9kSzk6gdY/maxresdefault.jpg   ',
      title: '   Threat Hunting',
      description: ' Right Time Limited offers proactive threat hunting services to identify and neutralize potential threats before they escalate into full-blown incidents...  ',
      additionalContent:
      '  Right Time Limited offers proactive threat hunting services to identify and neutralize potential threats before they escalate into full-blown incidents. Its experienced team leverages cutting-edge tools and methodologies to proactively search for signs of compromise, malicious activities, and emerging threats within an organizations infrastructure.  <br/> <br/>'+

      '<h5> Steps in Threat Hunting:  </h5> ' +
      '1.	Proactive identification of potential threats.   <br>' +
      ' 2.	Conduct continuous monitoring and analysis of systems and networks.  <br>' +
      ' 3.	Use threat intelligence and advanced tools to search for signs of compromise.  .<br>' +
      ' 4.	Investigate and validate potential threats.  <br>' +
      ' 5.	Take appropriate actions to neutralize and mitigate threats.  <br>',
      
     },
     {
      id: 4,
      imageSrc: ' https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCvOPbrku0HDMDXVurbky6hVIpTK5bhr1uxQ&usqp=CAU   ',
      title: ' Incident Readiness and Planning  ',
      description: 'Right Time Limited assists organizations in developing and refining their incident response plans, ensuring they are well...   ',
      additionalContent:
      ' Right Time Limited assists organizations in developing and refining their incident response plans, ensuring they are well-prepared to handle security incidents effectively. It provides guidance on establishing incident response teams, defining roles and responsibilities, and conducting tabletop exercises to test and improve the organizations response capabilities.   <br/> <br/>'+

      '<h5> Steps in Incident Readiness and Planning:  </h5> ' +
      ' 1.	Develop an incident response plan.  <br>' +
      '  2.	Define roles and responsibilities within the incident response team. <br>' +
      '  3.	Establish communication channels and escalation procedures. .<br>' +
      '  4.	Conduct tabletop exercises and simulations to test the plan. <br>' +
      '  5.	Continuously review and update the plan based on lessons learned and emerging threats. <br>' 
      ,
     },
     {
      id: 5,
      imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRal4KSZ7GzfwhPb2-g-pmpEeNsg2lrfIydSQ&usqp=CAU    ',
      title: ' Incident Reporting and Analysis  ',
      description: ' Right Time Limited helps organizations compile comprehensive incident reports, documenting the details of the incident...  ',
      additionalContent:
      ' Right Time Limited helps organizations compile comprehensive incident reports, documenting the details of the incident, the response actions taken, and lessons learned. It performs post-incident analysis to identify areas for improvement, develop strategies for enhancing security controls, and implement preventive measures to mitigate future risks.   <br/> <br/>'+

      '<h5> Steps in Incident Reporting and Analysis:  </h5> ' +
      ' 1.	Document the details of the incident, including the timeline and actions taken.<br>' +
      ' 2.	Analyze the incident to identify its root cause and contributing factors.<br>' +
      '  3.	Assess the impact and scope of the incident.<br>' +
      '  4.	Identify areas for improvement in security controls and processes.<br>' +
      '   5.	Generate incident reports and share findings with relevant stakeholders.<br>' ,
      
     },
     {
      id: 6,
      imageSrc: '  https://www.h-x.technology/wp-content/uploads/2021/01/H-X-MDR-components-2.jpg  ',
      title: ' Continuous Monitoring and Threat Intelligence  ',
      description: '  Right Time Limited offers continuous monitoring services, leveraging advanced technologies and threat ... ',
      additionalContent:
      '   Right Time Limited offers continuous monitoring services, leveraging advanced technologies and threat intelligence to detect and respond to potential security threats in real-time. Its vigilant monitoring and proactive threat intelligence enable organizations to stay ahead of emerging threats and take swift actions to protect their systems and data. <br/> <br/>'+

      '<h5>Steps in Continuous Monitoring and Threat Intelligence:   </h5> ' +
      ' 1.	Deploy security monitoring tools and technologies.<br>' +
      '         2.	Collect and analyze security event logs and data.<br>' +
      '       3.	Apply threat intelligence to identify emerging threats..<br>' +
      '        4.	Monitor for indicators of compromise and suspicious activities.<br>' +
      '        5.	Respond promptly to detected threats and take preventive actions.<br>' ,
     },
    
    // Add more card objects here
  ];
  return (
    <div>
      <div className="page-header">
        <div
          className="page-header__bg"
          style={{
            backgroundImage: `url('/assets/images/resources/contact.png')`,
          }}
        ></div>
        <div className="container">
          <ul className="thm-breadcrumb list-unstyled">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>Incident</li>
          </ul>
          <h2 className="page-header__title">Incident</h2>
        </div>
      </div>

      <section className="container">
        <div className=" mt-4">
          <h2 className="header text-center ">REPORT AN INCIDENT</h2>
          <p className="text-dark">Right Time Limited (RightTime) Incident Services encompass incident response, forensic investigation, threat hunting, incident readiness and planning, incident reporting and analysis, as well as continuous monitoring and threat intelligence. Its comprehensive approach aims to help organizations effectively manage security incidents, minimize damage, and enhance their overall security posture in the face of evolving cyber threats.</p>

       <div className="row">
        {cards.map((card) => (
          <CardItem key={card.id} {...card} />
        ))}
      </div><br/><br/>
           {/* <p className="mt-3">
            In case of a security incident, InfoGuard supports you 7x24!
          </p>
          <p style={{ fontSize: "14px" }}>
            (only for companies - no private individuals)
          </p>
          <p className="text-bold">
            Please have the answers of the following key questions ready when
            you contact the InfoGuard hotline:
          </p>
          <p>
            <span className="text-bold">1. WHO</span> discovered or reported the
            incident?
          </p>
          <p>
            2. WHAT happened? (e.g. data loss, data theft, data manipulation, )
          </p>
          <p>3. WHERE did the incident occur?</p>
          <p>4. WHEN did the incident occur?</p>
          <p>5. WHY did the incident occur?</p>
          <p>6. HOW did the incident occur?</p>
          <p>7. HOW can the incident be prevented in the future?</p> */}
        </div>
      </section>

      {/* <section style={{ backgroundColor: "#12062c" }} className="mt-5  ">
        <div className="d-flex justify-content-center p-5">
          <div className="row">
            <div className="col-md-6 text-light">
              <h3>CSIRT</h3>
            </div>
            <div className="col-md-6 text-light">
              <h3>CONTACT</h3>
              <p>1. 7x24 Hotline: +41 41 749 19 99</p>
              <p>2. E-Mail: investigations@rtl.com</p>
              <p>
                Please note that in urgent cases and out of office hours the
                hotline has to be called.{" "}
              </p>
            </div>
          </div>
        </div>
      </section> */}
      <div>
        <img width="100%" src="/assets/images/incident/incident.jpg" alt="" />
      </div>

      <section className="d-flex justify-content-center">
        <div>
          <h3 className="text-dark mt-4">
            In case of a security incident,<br/> we support you quickly, competently
            and proficiently
          </h3>
          <p>
            You could be the victim of a cyber attack at any time. Our Incident
            Response Retainer is the perfect<br/> solution when it comes to acting in
            a prepared, fast, efficient and effective manner.
          </p>
          <p>
            1. Support from our experienced Computer Security Incident Response
            Team (CSIRT)
          </p>
          <p>2. Fastest possible detection and isolation of the attacker</p>
          <p>
            3.Comprehensive damage analysis by security experts from our{" "}
            <a className="text-warning" href="/cyber-defense-center">*Right Time Limited</a>
          </p>
          <p>
            4. Compliance with the obligation to report a security incident
            within 72 hours according to GDPR
          </p>
          <a
            href="cyber-defense-center"
            className="mt-1 my-5 thm-btn cta-two__btn rounded-5 text-center"
            style={{float:"right"}}
          >
            <span>Cyber defense Center</span>
          </a>{" "}
        </div>
      </section>


      

      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default IncidentBody;

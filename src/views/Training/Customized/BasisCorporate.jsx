import React from "react";

import { useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
function BasisCorporate() {
  let query = useQuery();
  const id = query.get("id");
  const title = query.get("title");
  console.log("title", title, id);

  return (
    <div>
      <div className="page-header">
        <div
          className="page-header__bg"
          style={{
            backgroundImage: `url('/assets/images/background/page-header-bg-1-1.jpg'')`,
          }}
        ></div>
        <div className="container">
          <ul className="thm-breadcrumb list-unstyled">
            <li>
              <a href="{{ url('/') }}">Home</a>
            </li>
            <li>
              <a href="{{ url('/services/security-training') }}">Training</a>
            </li>
            <li>Right Time Customized</li>
          </ul>
          <h2 className="page-header__title">
            {/* foundation tract */}
            {title === "foundation-track" && id === "1"
              ? "Foundation Track - (Corporate)"
              : ""}
            {title === "basic" && id === "1" ? "Basic" : ""}
            {title === "certified-secure" && id === "1"
              ? "Certified Secure Computer User"
              : ""}
            {title === "inermediate" && id === "1" ? "Intermediate" : ""}
            {title === "network-security" && id === "1"
              ? "Network Security Fundamentals (FNS)"
              : ""}
            {title === "information-track" && id === "1"
              ? " Information Security Fundamentals (FIS)"
              : ""}
            {title === "computer-forensic" && id === "1"
              ? "Computer Forensic Fundamentals (CFF)"
              : ""}

            {/* net work defense */}

            {title === "network-defense" && id === "2"
              ? "Network Defense and Operations - (Corporate)"
              : ""}
            {title === "certified-network" && id === "2"
              ? "Certified Network Defense (CND-312-38)"
              : ""}
            {title === "foundation" && id === "2" ? "Foundation" : ""}
            {title === "foundation" && id === "2" ? "Foundation" : ""}
            {title === "foundation" && id === "2" ? "Foundation" : ""}
            {title === "ec-council-disaster" && id === "2" ? "Foundation" : ""}
            {title === "foundation" && id === "2" ? "Foundation" : ""}
            {title === "foundation" && id === "2" ? "Foundation" : ""}
            {title === "foundation" && id === "1" ? "Foundation" : ""}
            {title === "foundation" && id === "1" ? "Foundation" : ""}
          </h2>
        </div>
      </div>
      <h2 className="header text-center  mt-3">
        {/* foundation tract */}

        {title === "foundation-track" && id === "1"
          ? "Foundation Track - (Corporate)"
          : ""}
        {title === "basic" && id === "1" ? "Basic" : ""}
        {title === "certified-secure" && id === "1"
          ? "Certified Secure Computer User"
          : ""}
        {title === "inermediate" && id === "1" ? "Intermediate" : ""}
        {title === "network-security" && id === "1"
          ? "Network Security Fundamentals (FNS)"
          : ""}
        {title === "information-track" && id === "1"
          ? " Information Security Fundamentals (FIS)"
          : ""}
        {title === "computer-forensic" && id === "1"
          ? "Computer Forensic Fundamentals (CFF)"
          : ""}

        {/* net work defense */}
        {title === "network-defense" && id === "2"
          ? "Network Defense and Operations - (Corporate)"
          : ""}
        {title === "certified-network" && id === "2"
          ? "Certified Network Defense (CND-312-38)"
          : ""}
        {title === "ec-council-disaster" && id === "2" ? "Foundation" : ""}
        {title === "foundation" && id === "2" ? "Foundation" : ""}
        {title === "foundation" && id === "2" ? "Foundation" : ""}
        {title === "foundation" && id === "1" ? "Foundation" : ""}
        {title === "foundation" && id === "1" ? "Foundation" : ""}
        {title === "foundation" && id === "1" ? "Foundation" : ""}
        {title === "foundation" && id === "1" ? "Foundation" : ""}
        {title === "foundation" && id === "1" ? "Foundation" : ""}
      </h2>

      <p className="container">
        {/* foundation tract */}

        {title === "foundation-track" && id === "1"
          ? "Right Time Limited offers a customized training program titled Cyber Security Essentials, catering to professionals at different expertise levels. The course encompasses Basic, Intermediate, and Advanced levels, covering topics such as Network Defense Essentials (NDE), Ethical Hacking Essentials (EHE), and Digital Forensic Essentials (DFE) at the Basic Level. At the Intermediate Level, professionals delve into the Certified Cyber Security Technician (CCT) curriculum, while Advanced Level training includes EC-Council Certified Security Specialist (ECSS) coursework. This comprehensive program equips professionals with specialized skills and knowledge to navigate various aspects of cybersecurity effectively."
          : ""}
        {title === "basic" && id === "1"
          ? "Right Time Limited presents a tailored training program titled Cyber Security Essentials aimed at professionals seeking foundational knowledge in cybersecurity. This course includes modules on Network Defense Essentials (NDE), Ethical Hacking Essentials (EHE), and Digital Forensic Essentials (DFE) at the Basic Level. Participants will gain a comprehensive understanding of essential concepts, tools, and techniques vital for entry-level cybersecurity roles. Through interactive lectures, hands-on labs, and case studies, professionals will develop practical skills to tackle cybersecurity challenges effectively."
          : ""}
        {title === "certified-secure" && id === "1"
          ? "Right Time Limited delivers customized training in Cyber Security Essentials, beginning with the foundational track, Network Defense Essentials (NDE), as part of the basic level curriculum. This program equips professionals with essential skills in network security, including threat detection, vulnerability assessment, and incident response. Through interactive sessions and practical exercises, participants gain hands-on experience to fortify network infrastructures against cyber threats effectively. This specialized training initiative ensures professionals are equipped to tackle cybersecurity challenges adeptly at the foundational level"
          : ""}
        {title === "inermediate" && id === "1" ? "Intermediate" : ""}
        {title === "network-security" && id === "1"
          ? "Right Time Limited offers customized training in Cyber Security Essentials, with Ethical Hacking Essentials (EHE) as the second track in the basic level curriculum. This specialized program equips professionals with fundamental skills in ethical hacking techniques, penetration testing, and vulnerability assessment. Through interactive sessions and practical labs, participants gain hands-on experience to identify and address cybersecurity threats effectively. This tailored training ensures professionals are well-prepared to navigate the ethical hacking landscape proficiently at the foundational level."
          : ""}
        {title === "information-track" && id === "1"
          ? "Right Time Limited provides customized training in Cyber Security Essentials, featuring the Certified Cyber Security Technician (CCT) track as the sole offering within the intermediate level curriculum. This specialized program equips professionals with advanced skills in cybersecurity operations, incident response, and security analysis. Through interactive lectures and practical exercises, participants gain hands-on experience to effectively mitigate cyber threats and manage security incidents at an intermediate level of proficiency. This tailored training initiative ensures professionals are well-equipped to excel in roles requiring advanced cybersecurity expertise."
          : ""}
        {title === "computer-forensic" && id === "1"
          ? "Right Time Limited provides customized training in Cyber Security Essentials featuring the EC-Council Certified Security Specialist (ECSS) track as the sole offering within the advanced level curriculum. This specialized program equips professionals with advanced skills in security analysis, threat intelligence, and penetration testing. Through interactive sessions and hands-on labs, participants gain practical experience to assess and mitigate sophisticated cyber threats effectively. This tailored training ensures professionals are well-prepared to excel in roles requiring advanced expertise in cybersecurity."
          : ""}

        {/* net work defense */}

        {title === "network-defense" && id === "2"
          ? "Right Time Limited offers tailored training in Network Defense and Operations (Corporate) for professionals at various skill levels. The program covers Certified Network Defense (CND-312-38) and Certified Cybersecurity Technician (CCT) at the basic level, Certified Ethical Hacking (CEH) and Certified SOC Analyst (CSA) at the intermediate level, and Certified Cloud Security Engineer (CCSE) and Certified Threat Intelligence Analyst (CTIA) at the advanced level. Participants gain expertise in network defense, cybersecurity technologies, threat analysis, and cloud security, ensuring they are equipped to handle diverse cyber threats effectively across different organizational levels."
          : ""}

        {title === "certified-network" && id === "2"
          ? "Right Time Limited offers tailored training in Network Defense and Operations (Corporate), highlighting Certified Network Defense (CND-312-38) as the initial track in the basic level curriculum. This specialized program equips professionals with essential skills in network defense strategies, threat detection, and incident response. Through interactive sessions and practical exercises, participants gain hands-on expertise to safeguard corporate networks effectively against cyber threats. This customized training ensures professionals are well-equipped to navigate foundational cybersecurity challenges with confidence and proficiency."
          : ""}
        {title === "ec-council-disaster" && id === "2"
          ? "Right Time Limited offers tailored training in Network Defense and Operations (Corporate), highlighting Certified Network Defense (CND-312-38) as the initial track in the basic level curriculum. This specialized program equips professionals with essential skills in network defense strategies, threat detection, and incident response. Through interactive sessions and practical exercises, participants gain hands-on expertise to safeguard corporate networks effectively against cyber threats. This customized training ensures professionals are well-equipped to navigate foundational cybersecurity challenges with confidence and proficiency."
          : ""}
        {title === "ec-council-disaster-certified" && id === "2"
          ? "Right Time Limited offers tailored training in Network Defense and Operations (Corporate), highlighting Certified Network Defense (CND-312-38) as the initial track in the basic level curriculum. This specialized program equips professionals with essential skills in network defense strategies, threat detection, and incident response. Through interactive sessions and practical exercises, participants gain hands-on expertise to safeguard corporate networks effectively against cyber threats. This customized training ensures professionals are well-equipped to navigate foundational cybersecurity challenges with confidence and proficiency."
          : ""}
        {title === "security-windows" && id === "2"
          ? "Right Time Limited offers tailored training in Network Defense and Operations (Corporate), highlighting Certified Network Defense (CND-312-38) as the initial track in the basic level curriculum. This specialized program equips professionals with essential skills in network defense strategies, threat detection, and incident response. Through interactive sessions and practical exercises, participants gain hands-on expertise to safeguard corporate networks effectively against cyber threats. This customized training ensures professionals are well-equipped to navigate foundational cybersecurity challenges with confidence and proficiency."
          : ""}
        {title === "foundation" && id === "1" ? "Foundation" : ""}
        {title === "foundation" && id === "1" ? "Foundation" : ""}
        {title === "foundation" && id === "1" ? "Foundation" : ""}
        {title === "foundation" && id === "1" ? "Foundation" : ""}
        {title === "foundation" && id === "1" ? "Foundation" : ""}
      </p>

      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default BasisCorporate;

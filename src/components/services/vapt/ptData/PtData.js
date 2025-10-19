export const PtData = {
  id: 1,
  type_of_pt: [
    {
      id: 1,
      title: " 	Network Penetration Testing",
      description:
        "Network penetration testing finds and exploits the most exposed vulnerabilities in network infrastructure such as servers, firewalls, and switches. This type of testing can help protect your business from common network-based attacks, such as:  Firewall misconfiguration and firewall bypass  IPS/IDS evasion  Router attacks  DNS-level attacks  Zone transfer attacks  Switching or routing-based attacks  SSH attacks  Proxy server attacks  Attacks on unnecessary open ports  Database attacks  Man-in-the-middle (MitM) attacks  FTP/SMTP-based attacks",
      image:
        "https://www.technovus.com/wp-content/uploads/2019/10/PCI-DSS-Compliance.jpg",
      header: "VAPT",
    },
    {
      id: 2,
      title: " 	Web Application Penetration Testing ",
      description:
        " It is common for an environment to host a web application that was not specifically coded for the organization such as commercial, off-the-shelf web-mail interfaces, document-sharing tools, file-transfer services, network-device administrative interfaces, etc. In these instances, the web application does not typically need an application-layer penetration test as the entity is not responsible for the source code of this type of software. Instead, the tester should perform a network-layer test and ensure the software was implemented, configured, and is currently being maintained in a secure manner (disabling or uninstalling unused services, blocking unused ports, applying current updates, etc.). Web application penetration testing is used to find vulnerabilities in web-based applications. It uses a three-step process:  Reconnaissance—discovering information about web servers, operating systems, services, resources, and more used by the web application  Discovery—finding vulnerabilities in the web applications and planning attack vectors to be used in the penetration test.  Attack/exploitation—exploiting a vulnerability to gain unauthorized access to the application or its data. Penetration testing of web applications can identify security vulnerabilities in databases, source code, and backend networks of web-based applications. It can not only identify vulnerabilities but also help prioritize them and provide solutions to mitigate them ",
      image:
        "https://www.technovus.com/wp-content/uploads/2019/10/PCI-DSS-Compliance.jpg",
      header: "VAPT",
    },

    {
      id: 3,
      title: " 	Wireless Penetration Testing ",
      description:
        " Wireless communications are services that allow data to move in and out of networks and must be protected from unauthorized access and data exfiltration. Wireless penetration testing is used to identify risks associated with wireless networks and evaluate weaknesses such as:  Deauthentication attacks  Misconfiguration of wireless routers  Session reuse  Unauthorized wireless devices",
      image:
        "https://www.technovus.com/wp-content/uploads/2019/10/PCI-DSS-Compliance.jpg",
      header: "VAPT",
    },
    {
      id: 4,
      title: " External Penetration Test ",
      description:
        " An external penetration test researches and attempts to exploit vulnerabilities that could be performed by an external user without proper access and permissions. The scope of an external penetration test is the exposed external perimeter of the Business Data Environment/CDE and critical systems connected or accessible to public network infrastructures. It should assess any unique access to the scope from the public networks, including services that have access restricted to individual external IP addresses. Testing must include both application-layer and network-layer assessments. External penetration tests also include remote access vectors such as dial-up and VPN connections. External penetration testing consists of testing vulnerabilities to review the chances of being attacked by any remote attacker. By exploiting the found vulnerabilities it identifies the information being exposed to outsiders. The main objective of this test is to simulate an attack on the internal network by mimicking the actions of an actual threat actor. This type of penetration testing attempts to find and exploit vulnerabilities of a system to steal or compromise the organization‘s information. As a result, the test will show whether the implemented security measures are enough to secure an organization and to assess its capability to defend against any external attack. On average, an external penetration test will take 2-3 weeks to complete. However, this depends on the complexity of the system, the size of the network, and the goals of the test itself. Examples of external penetration tests include:  Configuration & Deployment Management Testing  Identity Management Testing  Authentication Testing  Authorization Testing  Session Management Testing, Input Validation Testing  Testing for weak Cryptography  Business Logic Testing  Client-Side Testing  Testing for Error Handling. Testing methodologies include:  Footprinting  Checking for public information and other information leakages.  System Scanning/Port Scanning/Service Scanning for vulnerabilities  Manual testing identified vulnerabilities.  IDS/IPS Testing  Password Strength Testing Popular tools used in external penetration tests are:  Nessus  Metasploit  Burp Suite Pro  Dirbuster/Dirb/GoBuster  Nikto  Sqlmap  Recon-ng  Nmap  Hydra  GHDB  theHarvester  ",
      image:
        "https://www.technovus.com/wp-content/uploads/2019/10/PCI-DSS-Compliance.jpg",
      header: "VAPT",
    },
    {
      id: 5,
      title: " Internal Penetration Test",
      description:
        "Once those vulnerabilities are identified, testers exploit them to discover the impact of an attack and show the weakness/entry points to the organization. Internal penetration testing is not just limited to exploiting internal network vulnerabilities, but it also includes privilege escalation, malware spreading, man in the middle attacks (MITM), credential stealing, monitoring, information leakage or any other malicious activity.",
      image:
        "https://www.technovus.com/wp-content/uploads/2019/10/PCI-DSS-Compliance.jpg",
      header: "VAPT",
    },
    {
      id: 6,
      title: "Physical Penetration Testing ",
      description: "   ",
      image:
        "https://www.technovus.com/wp-content/uploads/2019/10/PCI-DSS-Compliance.jpg",
      header: "VAPT",
    },
    {
      id: 7,
      title: " Social Engineering Penetration Testing ",
      description:
        " If a threat actor has physical access to a server room or other sensitive facility, they can potentially compromise the entire network, which can have devastating effects on business, customers, and partnerships. Physical penetration testing can help secure an organization‘s physical assets from threats such as social engineering, tailgating, and badge cloning. For example, a physical pentest can assess whether attackers can gain unauthorized access to a server room. This access can serve as a point of entry into the corporate network.  ",
      image:
        "https://www.technovus.com/wp-content/uploads/2019/10/PCI-DSS-Compliance.jpg",
      header: "VAPT",
    },
    {
      id: 8,
      title: " Critical Systems ",
      description:
        "  When it comes to security, users are often considered the weakest link of the security chain, and are a common target for attackers. Social engineering penetration testing focuses people and processes in the organization and the security vulnerabilities associated with them. It is performed by ethical hackers who attempt social engineering attacks which are commonly experienced in the workplace, such as phishing, USB dropping, and spoofing. ",
      image:
        "https://www.technovus.com/wp-content/uploads/2019/10/PCI-DSS-Compliance.jpg",
      header: "VAPT",
    },
    {
      id: 9,
      title: " Client-Side Penetration Testing ",
      description: "   ",
      image:
        "https://www.technovus.com/wp-content/uploads/2019/10/PCI-DSS-Compliance.jpg",
      header: "VAPT",
    },
    {
      id: 10,
      title: " Mobile App Penetration Testing ",
      description: "   ",
      image:
        "https://www.technovus.com/wp-content/uploads/2019/10/PCI-DSS-Compliance.jpg",
      header: "VAPT",
    },
    {
      id: 11,
      title: " API Penetration Testing ",
      description: "   ",
      image:
        "https://www.technovus.com/wp-content/uploads/2019/10/PCI-DSS-Compliance.jpg",
      header: "VAPT",
    },
    {
      id: 12,
      title: " Testing Segmentation Controls ",
      description: "   ",
      image:
        "https://www.technovus.com/wp-content/uploads/2019/10/PCI-DSS-Compliance.jpg",
      header: "VAPT",
    },
    {
      id: 13,
      title: " IoT Penetration Testing ",
      description: "   ",
      image:
        "https://www.technovus.com/wp-content/uploads/2019/10/PCI-DSS-Compliance.jpg",
      header: "VAPT",
    },
    {
      id: 14,
      title: " SCADA Penetration Testing ",
      description: "   ",
      image:
        "https://www.technovus.com/wp-content/uploads/2019/10/PCI-DSS-Compliance.jpg",
      header: "VAPT",
    },
    {
      id: 15,
      title: " Red Team Penetration Testing ",
      description: "   ",
      image:
        "https://www.technovus.com/wp-content/uploads/2019/10/PCI-DSS-Compliance.jpg",
      header: "VAPT",
    },
    {
      id: 16,
      title: " Open-Source Intelligence (OSINT) Assessment ",
      description: "   ",
      image:
        "https://www.technovus.com/wp-content/uploads/2019/10/PCI-DSS-Compliance.jpg",
      header: "VAPT",
    },
    {
      id: 16,
      title: " Testing ",
      description: "   ",
      image:
        "https://www.technovus.com/wp-content/uploads/2019/10/PCI-DSS-Compliance.jpg",
      header: "VAPT",
    },
  ],

  pt_approach: [
    {
      id: 1,
      title: " Security Testing Approaches (based on Information)",
      description:
        "Perform an initial study of business to understand your card processes, the environment and accordingly combine the PCI scope.",
      image:
        "https://www.technovus.com/wp-content/uploads/2019/10/PCI-DSS-Compliance.jpg",
      header: "VAPT",
    },
    {
      id: 2,
      title: " Analytical Based Penetration Testing",
      description:
        " Confirm systems that fall under the VAPT scope and articulate the scope statement.",
      image:
        "https://www.technovus.com/wp-content/uploads/2019/10/PCI-DSS-Compliance.jpg",
      header: "VAPT",
    },
    {
      id: 3,
      title: "  	Application-Layer and Network-Layer Testing",
      description: " ",
      image:
        "https://www.technovus.com/wp-content/uploads/2019/10/PCI-DSS-Compliance.jpg",
      header: "VAPT",
    },
    {
      id: 4,
      title: "  	Authentication",
      description: " ",
      image:
        "https://www.technovus.com/wp-content/uploads/2019/10/PCI-DSS-Compliance.jpg",
      header: "VAPT",
    },
    {
      id: 5,
      title:
        " 	PA-DSS Compliant Applications (in case of PT supports for PCI DSS)",
      description: " ",
      image:
        "https://www.technovus.com/wp-content/uploads/2019/10/PCI-DSS-Compliance.jpg",
      header: "VAPT",
    },
    {
      id: 6,
      title:
        "  	PA-DSS Compliant Applications (in case of PT supports for PCI DSS)",
      description: " ",
      image:
        "https://www.technovus.com/wp-content/uploads/2019/10/PCI-DSS-Compliance.jpg",
      header: "VAPT",
    },
  ],

  pt_service: [
    {
      id: 1,
      title: " 	Separate Testing Environment",
      description:
        "Manual penetration testing is extensive and systematic. It is usually performed by a contractor or security consultancy, who agree on a specific testing scope with the client. Within that scope, an ethical hacker searches for vulnerabilities, attempts to breach the organization’s systems, and prepares a detailed report showing what they discovered and suggesting remediations.",
      image:
        "https://www.technovus.com/wp-content/uploads/2019/10/PCI-DSS-Compliance.jpg",
      header: "VAPT",
    },
    {
      id: 2,
      title: "Automated/Penetration testing as a service (PTaaS ",
      description:
        "Automated/Penetration testing as a service (PTaaS) is a new model, which provides an automated platform organizations can use to perform penetration testing on their systems. PTaaS systems use technologies like automated vulnerability scanning, dynamic application security testing (DAST) and fuzzing, to find security weaknesses and attempt to exploit them, without human intervention.",
      image:
        "https://www.technovus.com/wp-content/uploads/2019/10/PCI-DSS-Compliance.jpg",
      header: "VAPT",
    },

    {
      id: 3,
      title: " Commercial- Grade Exploits ",
      description: " ",
      image:
        "https://www.technovus.com/wp-content/uploads/2019/10/PCI-DSS-Compliance.jpg",
      header: "VAPT",
    },
    {
      id: 4,
      title: " Vulnerability Scan Validation ",
      description: " ",
      image:
        "https://www.technovus.com/wp-content/uploads/2019/10/PCI-DSS-Compliance.jpg",
      header: "VAPT",
    },
    {
      id: 5,
      title: " Port Scanning ",
      description: " ",
      image:
        "https://www.technovus.com/wp-content/uploads/2019/10/PCI-DSS-Compliance.jpg",
      header: "VAPT",
    },
    {
      id: 6,
      title: " Configuration and Services ",
      description: " ",
      image:
        "https://www.technovus.com/wp-content/uploads/2019/10/PCI-DSS-Compliance.jpg",
      header: "VAPT",
    },
    {
      id: 7,
      title:
        " Perimeter Defense – Network Penetration Test (internal and external) ",
      description: " ",
      image:
        "https://www.technovus.com/wp-content/uploads/2019/10/PCI-DSS-Compliance.jpg",
      header: "VAPT",
    },
    {
      id: 8,
      title: " Host & device Testing ",
      description: " ",
      image:
        "https://www.technovus.com/wp-content/uploads/2019/10/PCI-DSS-Compliance.jpg",
      header: "VAPT",
    },
    {
      id: 9,
      title: " Application Penetration Testing ",
      description: " ",
      image:
        "https://www.technovus.com/wp-content/uploads/2019/10/PCI-DSS-Compliance.jpg",
      header: "VAPT",
    },
    {
      id: 10,
      title: " Client-Side Testing of End Users and Endpoint ",
      description: " ",
      image:
        "https://www.technovus.com/wp-content/uploads/2019/10/PCI-DSS-Compliance.jpg",
      header: "VAPT",
    },
    {
      id: 11,
      title: " Identity Discovery & Password Cracking ",
      description: " ",
      image:
        "https://www.technovus.com/wp-content/uploads/2019/10/PCI-DSS-Compliance.jpg",
      header: "VAPT",
    },
    {
      id: 12,
      title: "Wireless Network Penetration Test  ",
      description: " ",
      image:
        "https://www.technovus.com/wp-content/uploads/2019/10/PCI-DSS-Compliance.jpg",
      header: "VAPT",
    },
    {
      id: 13,
      title: " Database ",
      description: " ",
      image:
        "https://www.technovus.com/wp-content/uploads/2019/10/PCI-DSS-Compliance.jpg",
      header: "VAPT",
    },
    {
      id: 14,
      title: "  Mobile Device Penetration Test and Surveillance Camera Attacks",
      description: " ",
      image:
        "https://www.technovus.com/wp-content/uploads/2019/10/PCI-DSS-Compliance.jpg",
      header: "VAPT",
    },
    {
      id: 15,
      title: " Cloud Penetration Testing ",
      description: " ",
      image:
        "https://www.technovus.com/wp-content/uploads/2019/10/PCI-DSS-Compliance.jpg",
      header: "VAPT",
    },
    {
      id: 16,
      title: " Web Application Penetration Test ",
      description: " ",
      image:
        "https://www.technovus.com/wp-content/uploads/2019/10/PCI-DSS-Compliance.jpg",
      header: "VAPT",
    },
  ],
};

export const PtOfferCard = [
  {
    id: 1,
    title: "Pre-engagement Activities (including Scope Definition)",
    description:
      "Perform an initial study of business to understand your card processes, the environment  ",
  },
  {
    id: 2,
    title: "Reconnaissance /OSINT/Information gathering",
    description:
      "Perform an initial study of business to understand your card processes, the environment  ",
  },

  {
    id: 3,
    title: "Threat modeling  ",
    description:
      "Perform an initial study of business to understand your card processes, the environment  ",
  },
  {
    id: 4,
    title: "Vulnerability Analysis ",
    description:
      "Perform an initial study of business to understand your card processes, the environment  ",
  },
  {
    id: 5,
    title: "Exploitation (Gaining Access) ",
    description:
      "Perform an initial study of business to understand your card processes, the environment  ",
  },
  {
    id: 6,
    title: " Post-exploitation (maintaining Access), Analysis & Recommendation",
    description:
      "Perform an initial study of business to understand your card processes, the environment  ",
  },
  {
    id: 7,
    title: "Clearing Tracks ",
    description:
      "Perform an initial study of business to understand your card processes, the environment  ",
  },
  {
    id: 8,
    title: "Comprehensive Reporting ",
    description:
      "Perform an initial study of business to understand your card processes, the environment  ",
  },
  {
    id: 9,
    title: "Resolution Phase ",
    description:
      "Perform an initial study of business to understand your card processes, the environment  ",
  },
  {
    id: 10,
    title: " Re-Testing Phase",
    description:
      "Perform an initial study of business to understand your card processes, the environment  ",
  },
];

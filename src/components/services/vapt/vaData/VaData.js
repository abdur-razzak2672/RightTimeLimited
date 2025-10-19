export const VaData = {
  id: 1,
  type_of_va: [
    {
      id: 1,
      title: " Network-Based Vulnerability Assessment",
      description:
        "Network-Based vulnerability scans probe geographically distributed machines and applications to detect security gaps in networks and communication systems. Network vulnerability testing tasks include: •	Detecting and prioritizing network threats •	Analyzing networking devices for compromised passwords •	Reviewing the system’s strength against common attacks Network-based vulnerability assessment tools use automated capabilities to identify consistent properties of the networking stack in a remote host.",
      image:
        "https://www.technovus.com/wp-content/uploads/2019/10/PCI-DSS-Compliance.jpg",
      header: "VAPT",
    },

    {
      id: 2,
      title: "Application Scanning ",
      description:
        "These tools detect incorrect configurations and open common web and mobile application vulnerabilities. The scanner analyzes the application’s code against a database of manifested vulnerabilities and establishes how secure an application is. To ensure a Vulnerability Assessment comprises vulnerabilities arising from updates and application changes, it is recommended as a best practice that application scanning is performed after every such change.  ",
      image:
        "https://www.technovus.com/wp-content/uploads/2019/10/PCI-DSS-Compliance.jpg",
      header: "VAPT",
    },

    {
      id: 3,
      title: "  Host Scanning",
      description:
        " Host-based scanners detect and analyze machine weaknesses such as workstations, servers, and other network hosts. These scanners use a manager/agent structure to scan and report how the system complies with organization-wide security standards. ",
      image:
        "https://www.technovus.com/wp-content/uploads/2019/10/PCI-DSS-Compliance.jpg",
      header: "VAPT",
    },

    {
      id: 4,
      title: "Database Scanning",
      description:
        "The database represents the most crucial layer of an IT infrastructure that remains a prime target for threat actors. Database vulnerability scanners audit database security, helping teams to assess risks in the data layer and prioritize identified risks for remediation. These tools identify default vendor accounts, misconfigurations, missing patches, excessive privileges, and other external database threats.  ",
      image:
        "https://www.technovus.com/wp-content/uploads/2019/10/PCI-DSS-Compliance.jpg",
      header: "VAPT",
    },

    {
      id: 5,
      title: "Wireless Network Scanning",
      description:
        " Because of the rise of IoT devices and Wireless Networks (WLAN), there is an emerging trend of attackers exploiting compromised wireless networks to infiltrate a system. To help mitigate such attacks, wireless network scanning tools test connections between different devices connected to the system and identify susceptible entry points. While using such security tools, organizations can simulate cyberattacks and devise techniques to deal with threats as they arrive. ",
      image:
        "https://www.technovus.com/wp-content/uploads/2019/10/PCI-DSS-Compliance.jpg",
      header: "VAPT",
    },

    {
      id: 6,
      title: "Miscellaneous ",
      description:
        " Embedded links or code from out-of- scope domains. We shall detect embedded links which redirect traffic to domains outside the customer data/information environment, and ensure that the customer1) confirm that this code is obtained from a trusted source, that the embedded links redirect to a trusted source, and that the code is implemented securely, or 2) confirm that the code has been removed. ",
      image:
        "https://www.technovus.com/wp-content/uploads/2019/10/PCI-DSS-Compliance.jpg",
      header: "VAPT",
    },

    {
      id: 7,
      title: "Comprehensive Vulnerability Assessment  ",
      description: "Combines all of the components together",
      image:
        "https://www.technovus.com/wp-content/uploads/2019/10/PCI-DSS-Compliance.jpg",
      header: "VAPT",
    },
  ],

  va_approach: [
    {
      id: 1,
      title: " External & Internal vulnerability scans",
      description:
        "An external vulnerability scan can help organizations to identify and fix security vulnerabilities that an adversary can use to gain access to its network. External vulnerability scan is performed from outside an organization’s network, targeting IT infrastructure that is exposed to the internet including web applications, ports, networks etc. An external scan can detect vulnerabilities in the perimeter defenses such as:-  Open ports in the network firewall  Specialized web application firewall. An internal vulnerability scan is carried out from inside an enterprise network. These scans allow you to harden and protect applications and systems that are not covered by external scans. An internal vulnerability scan can detect issues such as: – 1. Vulnerabilities that can be exploited by an adversary who has penetrated the perimeter defenses 2. Threat posed by malware that has made it to inside the network 3. Identify “insider threats” posed by disgruntled employees or contractors ",
      image:
        "https://www.technovus.com/wp-content/uploads/2019/10/PCI-DSS-Compliance.jpg",
      header: "VAPT",
    },

    {
      id: 2,
      title: " Authenticated vs. Unauthenticated vulnerability scans",
      description:
        " To ensure that vulnerability scans have no lapse in detection, it is suggested that both authenticated and unauthenticated vulnerability scans are conducted. While the authenticated scan allows the tester to log in as a user and see vulnerabilities from a trusted user’s perspective, the unauthentic scan does the opposite and offers the perspective of an intruder. Scanning under all circumstances, again, ensures that even with constantly evolving technology, companies are safe from threats",
      image:
        "https://www.technovus.com/wp-content/uploads/2019/10/PCI-DSS-Compliance.jpg",
      header: "VAPT",
    },

    {
      id: 3,
      title: " Going beyond scanning with Right Time Limited ",
      description:
        "While leveraging numerous types of scans is an important step for mitigating risk, an effective vulnerability assessment program will go beyond scanning intermittently. Right Time Limited continuously and automatically identifies and creates an inventory of all IT assets including servers, laptops, desktops, mobile devices, IoT, etc and analyzes and detects vulnerabilities across an enterprise’s entire attack surface. It identifies and prioritizes which vulnerabilities are most critical to your business based on importance of assets and their susceptibility to 100+ attack vectors. Vulnerabilities are prioritized based on 5 factors: severity, threats, asset exposure, business criticality and security controls, and then dispatched to risk owners for automatic or supervised mitigation. While vulnerability scanners only provide a screenshot of risk from a specific point in time, Right Time Limited provides ongoing analysis of a company’s entire attack surface continuously and in real time. ",
      image:
        "https://www.technovus.com/wp-content/uploads/2019/10/PCI-DSS-Compliance.jpg",
      header: "VAPT",
    },
  ],

  va_service: [
    {
      id: 1,
      title: " Coming soon ",
      description: " ",
      image:
        "https://www.technovus.com/wp-content/uploads/2019/10/PCI-DSS-Compliance.jpg",
      header: "VAPT",
    },
  ],
};

export const VaOfferCard = [
  {
    id: 1,
    title: "Conduct Risk Identification and Analysis",
    description:
      "The risk identification and analysis process starts with identifying all assets that are part of an information system  . ",
  },
  {
    id: 2,
    title: "Vulnerability Scanning Policies and Procedures ",
    description:
      "In order to have a structured and successful scanning methodology, policies and procedures must exist in order to have a pre-determined   ",
  },

  {
    id: 3,
    title: "Identify the Types of Vulnerability Scans ",
    description:
      " Depending on the software that is running on the system you need to scan and secure it, you need to determine the type of scan to be performed  ",
  },
  {
    id: 4,
    title: "Configure the Scan ",
    description:
      " To configure a vulnerability scan you must: add a list of target IPs, define port ranges and protocols, define the targets, and set up the aggressiveness  ",
  },
  {
    id: 5,
    title: " Perform the Scan",
    description:
      " The scanning tool will fingerprint the specified targets to gather basic information about them.   ",
  },

  {
    id: 6,
    title: " Evaluate and Consider Possible Risks",
    description:
      "Risks associated with performing a vulnerability scan pertain mostly to the availability of the target system ",
  },
  {
    id: 7,
    title: " Interpret the Scan Results",
    description:
      "Configuring, performing and analyzing the results of a vulnerability scan is most important. Knowledge of the scanned system   ",
  },
  {
    id: 8,
    title: " Create a Remediation Process and Mitigation Plan",
    description:
      " After interpreting the results, information security staff should prioritize the mitigation of each vulnerability detected  ",
  },
];
